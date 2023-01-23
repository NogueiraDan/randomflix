
import { useState } from "react";
import "./movie.css"
import MovieItem from "../MovieItem";

export default function Movie() {

  return (
    <div className="movieContainer">
      {/* Precisa colocar uma imagem aqui ainda */}
      <h1>Não sabe o que assistir?</h1>
      <MovieItem/>
      
      <div className="subtitle">
        <span>Clique em "Encontrar filme" que traremos informações
          de algum filme para você assistir hoje.</span>
      </div>


    </div>
  )
}