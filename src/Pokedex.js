import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { Container } from "@mui/material";
import { useForm } from 'react-hook-form';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    margin: 15,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Pokedex = (props) => {
    const pokemons = props.pokemons
    console.log(pokemons)
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1}>
                {pokemons.map(pokemon =>
                    <Grid key={pokemon.name} item xs={2.5}>
                        <Item><Card pokemon={pokemon} /></Item>
                    </Grid>
                )}
            </Grid>
        </Container >

    )
}

export default Pokedex