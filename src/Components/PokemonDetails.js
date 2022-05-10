import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router';

export default function PokemonDetails(props) {

    const { name } = useParams()
    const navigate = useNavigate()

    const handleClickDelete = (event) => {
        axios
            .delete(`http://localhost:3001/api/pokemons/${props.pokemon.id}`)
            .then(response => {
                return navigate('/pokedex')
            }).catch(
                function (error) {
                    console.log(error)
                    return navigate('/pokedex')
                }
            )
    }

    const handleClickUpdate = (event) => {
        return navigate(`/pokedex/${name}/update`)
    }


    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="450"
                        image={props.pokemon.imageUrl}
                        alt={props.pokemon.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {props.pokemon.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.pokemon.types}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Height: {props.pokemon.height}m - Weight: {props.pokemon.weight}kg
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.pokemon.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Button variant="text" onClick={handleClickUpdate}>Update</Button>
            <Button variant="text" onClick={handleClickDelete}>Delete</Button>
        </div>
    );
}
