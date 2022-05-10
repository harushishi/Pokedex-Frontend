import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useParams } from "react-router"

const theme = createTheme();

export default function AddPokemon() {
    const navigate = useNavigate();
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/pokemons/${name}`)
            .then(response => {
                setPokemon(response.data)
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const updatedPokemon = {
            name: pokemon.name,
            description: data.get('description'),
            height: data.get('height'),
            weight: data.get('weight'),
            types: data.get('types'),
            imageUrl: data.get('imageUrl'),
        }

        axios
            .put(`http://localhost:3001/api/pokemons/${pokemon.id}`, updatedPokemon)
            .then(response => {
                return navigate('/Pokedex')
            }).catch(
                function (error) {
                    console.log(error)
                    return navigate('/Pokedex')
                }
            )
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Update this pokemon:
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            disabled={true}
                            fullWidth
                            id="name"
                            label={pokemon.name}
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="description"
                            label="Pokemon's description. (Optional)"
                            type="description"
                            id="description"
                            InputLabelProps={{ shrink: true }}
                            autoComplete="description"

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="height"
                            label="Pokemon's height"
                            type="height"
                            id="height"
                            autoComplete="height"
                            InputLabelProps={{ shrink: true }}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="weight"
                            label="Pokemon's weight"
                            type="weight"
                            id="weight"
                            autoComplete="weight"
                            InputLabelProps={{ shrink: true }}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="types"
                            label="Pokemon's types"
                            type="types"
                            id="types"
                            autoComplete="types"
                            InputLabelProps={{ shrink: true }}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="imageUrl"
                            label="Pokemon's image URL"
                            type="imageUrl"
                            id="imageUrl"
                            autoComplete="imageUrl"
                            InputLabelProps={{ shrink: true }}

                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Go back to Pokedex"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

