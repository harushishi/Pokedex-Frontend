import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router';

export default function ActionAreaCard(props) {

    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate(`/Pokedex/${props.pokemon.name}`)
    }

    return (
        <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.pokemon.imageUrl}
                    alt={props.pokemon.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.pokemon.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
