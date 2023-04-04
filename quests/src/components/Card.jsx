import './App.css'

function Card() {
    return (
    <>
        <figure className="App">
            <img className="card-image" src="./assets/discus.jpeg" alt="Discus orange" />
        </figure>
        
        <div className="card-body">

            <div className="card-tqitle">
                <h2>"Le discus, le roi des aquariums tropicaux d'eau douce"</h2>
            </div>

            <div className="card-name">
                <h3>"DISCUS Symphysodon"</h3>
            </div>

            <div className="card-excerpt">
                <p>"Poisson d’origine d’Amazonie (rio negro principalement et ses affluents). Il existe plusieurs variétés sauvages, dont le plus célèbre le DISCUS HECKEL, repérable avec sa bande noire vertical, et le DISCUS AEQUIFASCIATUS, le discus brun ou commun qui a donné la plus part des variétés d’élevages actuelles en commençant par le discus turquoise et le discus TARZOO un peu plus vert que les autres et se trouve plus dans le bassin ouest de l’Amazonie. Il apprécie principalement les eaux dites « noires », avec un biotope proche de mangrove (sable ou boue au fond et des racines d’arbres plongées dans l’eau)"</p>
            </div>

        </div>
    </>
    );
}

export default Card;