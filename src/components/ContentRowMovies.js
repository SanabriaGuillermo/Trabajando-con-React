import RowMoviesInfo from "./RowMoviesInfo";

let RowMovies = [
  {
    id: 1,
    titulo: "Movies in Data Base",
    cifra: 21,
    colorDeBorde: "primary",
    icono: "film",
  },
  {
    id: 2,
    titulo: "Total awards",
    cifra: 79,
    colorDeBorde: "success",
    icono: "award",
  },
  {
    id: 3,
    titulo: "Actors quantity",
    cifra: 49,
    colorDeBorde: "warning",
    icono: "user",
  },
];

function ContentRowMovies() {
  return (
    <div className="row">
      {RowMovies.map((item, index) => (
        <RowMoviesInfo
          key={index}  
          id={item.id}
          titulo={item.titulo}
          cifra={item.cifra}
          colorDeBorde={item.colorDeBorde}
          icono={item.icono}
        />
      ))}
    </div>
  );
}
export default ContentRowMovies;
