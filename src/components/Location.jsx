
const Location = ( { data } ) => {
    return (
      <div className="location__container">

        <div className="location__info">
          <h2 className="location__title">Name:</h2>
          <p className="location__p"> { data?.name } </p>
        </div>

        <div className="location__info">
          <h2 className="location__title">Type:</h2>
          <p className="location__p"> { data?.type } </p>
        </div>

        <div className="location__info">
          <h2 className="location__title">Dimension:</h2>
          <p className="location__p"> { data?.dimension } </p>
        </div>

        <div className="location__info">
          <h2 className="location__title">Residents:</h2>
          <p className="location__p"> { data.residents?.length }</p>
        </div>
            
      </div>
    );
};

export default Location;