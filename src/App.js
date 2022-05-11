import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddPokemon from "./AddPokemon";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon"
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import { Container } from "@mui/material";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import { maxWidth } from "@mui/system";
import UpdatePokemon from "./UpdatePokemon"

const App = () => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    axios
      .get('https://hsh-pokedex-back.herokuapp.com/api/pokemons')
      .then(response => {
        setPokemons(response.data)
      })
  }, [])
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Pokedex" element={<Pokedex pokemons={pokemons} />} />
        <Route path="/Pokedex/add" element={<AddPokemon />} />
        <Route path="/Pokedex/:name" element={<Pokemon pokemons={pokemons} />} />
        <Route path="/Pokedex/:name/update" element={<UpdatePokemon pokemons={pokemons} />} />
      </Routes>

    </Router>
  )
}

export default App;
