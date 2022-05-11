import { useParams } from "react-router"
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonDetails from './Components/PokemonDetails'

const Pokemon = (props) => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios
            .get(`https://hsh-pokedex-back.herokuapp.com/api/pokemons/${name}`)
            .then(response => {
                setPokemon(response.data)
            })
    }, [])

    console.log(pokemon)

    return (
        <div style={{ margin: 'auto', width: '15%', marginTop: 50 }}>
            <PokemonDetails pokemon={pokemon} />
        </div>
    )
}

export default Pokemon