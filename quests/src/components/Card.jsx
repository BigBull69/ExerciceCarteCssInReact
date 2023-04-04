import './App.css'



function Card(props) {
    
    return (
    <>
        <figure className="App">
            {
                props.fish.imgSrc ? (<img className="card-image" src={props.fish.imgSrc} alt={props.fish.name} /> ): (<p>Désolé pas d'image</p>)
            }
            
        </figure>
        
        <div className="card-body">

            <div className="card-title">
                <h2>{props.fish.title}</h2>
            </div>

            <div className="card-name">
                <h3>{props.fish.name}</h3>
            </div>

            <div className="card-excerpt">
                <p>{props.fish.description}</p>
            </div>

        </div>
    </>
    );
}

export default Card;