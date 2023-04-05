import { useState } from "react"
import './App.css'
import Card from "./components/Card"
import NavBar from "./components/NavBar"

const fishList = [
  {
    imgSrc: "https://pixabay.com/photos/discus-fish-fish-aquarium-fauna-1943755/",
    title: "Le discus, le roi des aquariums tropicaux d'eau douce",
    name: "Discus",
    description: "Poisson d’origine d’Amazonie (rio negro principalement et ses affluents). Il existe plusieurs variétés sauvages, dont le plus célèbre le DISCUS HECKEL, repérable avec sa bande noire vertical, et le DISCUS AEQUIFASCIATUS, le discus brun ou commun qui a donné la plus part des variétés d’élevages actuelles en commençant par le discus turquoise et le discus TARZOO un peu plus vert que les autres et se trouve plus dans le bassin ouest de l’Amazonie. Il apprécie principalement les eaux dites « noires », avec un biotope proche de mangrove (sable ou boue au fond et des racines d’arbres plongées dans l’eau)"
  },

  {
    imgSrc: "https://www.pexels.com/fr-fr/photo/photographie-macro-de-poisson-jaune-et-noir-1677116/",
    title: "Le Scalaire, le prince des aquariums tropicaux d'eau douce",
    name: "Pterophyllum altum ",
    description: "Le scalaire haut Pterophyllum altum est un poisson d'eau douce recherché en aquarium pour sa forme majestueuse qui le différencie du Scalaire commun. Ce cichlidé d'Amérique du Sud, de bonne taille, demande un volume d'élevage d'au moins 450 litres pour le bien-être d'un groupe de 6 poissons."
  },

  {
    imgSrc: "./assets/scalaire.jpg",
    title: "Petit poisson d'eau douce, très apprécié en aquarium",
    name: "Paracheirodon axelrodi",
    description: "Le cardinalis Paracheirodon axelrodi est un poisson tétra Néon du bassin amazonien de la partie supérieure de l'Orénoque. En milieu naturel d'eau douce, le Cardinalis habite dans les haut-fonds jusque dans les couches d'eau moyennes. L'espèce est trouvée du Haut-Orénoque et des bassins fluviaux affluents d'eau noire, jusque dans les affluents du Rio Negro."
  },
]

function App() {

  const [fishIndex, setFishIndex] = useState(0);
  const fishChoice = fishList[fishIndex];

  

  return (
    <div className="App">
      <Card fish={fishChoice} />
      <NavBar fishIndex={fishIndex} setFishIndex={setFishIndex} fishLength={fishList.lenght - 1}/>
    </div>
  );
}



export default App
