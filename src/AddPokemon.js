import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function AddPokemon() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newPokemon = {
            name: data.get('name'),
            description: data.get('description'),
            height: data.get('height'),
            weight: data.get('weight'),
            types: data.get('types'),
            imageUrl: data.get('imageUrl'),
        }

        axios
            .post('https://hsh-pokedex-back.herokuapp.com/api/pokemons', newPokemon)
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
                        Add a new Pokemon:
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Pokemon's name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="description"
                            label="Pokemon's description (Optional)"
                            type="description"
                            id="description"
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
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/add" variant="body2">
                                    Reset
                                </Link>
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

