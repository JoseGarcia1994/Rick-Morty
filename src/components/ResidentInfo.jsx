import axios from "axios";
import { useEffect, useState } from "react";


const ResidentInfo = ( {url} ) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        
        axios   
            .get( url )
            .then( (resp) => setResident(resp.data))
            .catch((error) => console.error(error) )

    }, [])
    
    console.log(resident);

    // UPDATE THIS IF FUNCTION AND PUT IT INSIDE THE CARD

    const backgroundStatus = () => {
      if (resident.status === "Alive") {
        return "chartreuse"
      } else if (resident.status === "Dead") {
        return "red"
      } else {
        return "grey"
      }
    }

    return (
        <div className="residents__card">
          
          <div className="residents__img-container">
            <img className="residents__img" src={ resident.image } alt="" />
            <div className="info__status">
              <div className="status" style={{backgroundColor: backgroundStatus() }}></div>
              <p>{resident.status}</p>
              </div>
          </div>

          <div className="residents__info-container">
            <h3 className="residents__title">{ resident.name }</h3>
            <p className="residents__p"><span className="residents__span">Species</span> {resident.species}</p>
            <p className="residents__p"><span className="residents__span">Origen</span> {resident.origin?.name}</p>
            <p className="residents__p"><span className="residents__span">Times appear</span> {resident.episode?.length} times</p>
          </div>
          
        </div>
    );
};

export default ResidentInfo;