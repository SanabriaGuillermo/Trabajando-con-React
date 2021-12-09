import React from "react";
import RowTable from "./RowTable";

let Movies = [
    {
        id: 1,
        título: "Billy Eliot",
        duración: 123,
        rating: 5,
        género: ["Drama", "Comedia"],
        premios: 2,
      },
    {
        id: 2,
        título: "Alicia en el país de la maravillas",
        duración: 142,
        rating: 4.8,
        género: ["Drama", "Comedia", "Acción"],
        premios: 3,
      },
]

function MoviesTable() {
  return (
    <div>
      <table class="table table-bordered col-lg-11 m-auto bg-white">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Título</th>
            <th scope="col">Duración</th>
            <th scope="col">Rating</th>
            <th scope="col">Género</th>
            <th scope="col">Premios</th>
            </tr>
        </thead>
        <RowTable Movies={Movies}/>
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Título</th>
            <th scope="col">Duración</th>
            <th scope="col">Rating</th>
            <th scope="col">Género</th>
            <th scope="col">Premios</th>
            </tr>
        </thead>
      </table>
    </div>
  );
}

export default MoviesTable;
