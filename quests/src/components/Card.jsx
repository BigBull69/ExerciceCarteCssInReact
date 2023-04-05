//import './App.css'
import PropTypes from "prop-types"


function Card(fish) {
    
    return (
    <>
        <figure className="App">
            {
                fish.imgSrc ? (<img className="card-image" src={fish.imgSrc} alt={fish.name} /> ): (<p>Désolé pas d'image</p>)
            }
            
        </figure>
        
        <div className="card-body">

            <div className="card-title">
                <h2>{fish.title}</h2>
            </div>

            <div className="card-name">
                <h3>{fish.name}</h3>
            </div>

            <div className="card-excerpt">
                <p>{fish.description}</p>
            </div>

        </div>
    </>
    );
}

Card.propTypes ={
    fish: PropTypes.shape({
        imgSrc: PropTypes.string,
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
}


export default Card;