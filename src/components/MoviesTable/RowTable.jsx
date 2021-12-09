import React from "react";

function RowTable(props) {
  return (
    <tbody>
      {props.Movies.map((movie) => (
        <tr>
          <th scope="row">{movie.id}</th>
          <td>{movie.título}</td>
          <td>{movie.duración}</td>
          <td>{movie.rating}</td>
          <td>
            <ul>
              {movie.género.map((genero, i) => (
                <li key={i}>{genero}</li>
              ))}
            </ul>
          </td>
          <td>{movie.premios}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default RowTable;
