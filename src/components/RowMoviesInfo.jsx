import PropTypes from "prop-types";

function RowMoviesInfo({
  id,
  titulo = "No hay datos",
  colorDeBorde = "danger",
  cifra = 0,
  icono = "truck",
}) {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${colorDeBorde} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${colorDeBorde} text-uppercase mb-1`}
              >
                {titulo}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {cifra}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${icono} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
RowMoviesInfo.propTypes = {
  id: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  colorDeBorde: PropTypes.string.isRequired,
  cifra: PropTypes.number.isRequired,
  icono: PropTypes.string.isRequired,
};

export default RowMoviesInfo;
