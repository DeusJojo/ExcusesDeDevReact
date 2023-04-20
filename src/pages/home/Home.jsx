import React, { useState } from "react";
import GenerateExcuses from "./components/GenerateExcuses";
import Modal from "./components/Modal";
import dataExcuses from "../components/Data";
import TimeOutTitleButton from "./components/TimeOutTitleButton";
import getRandomExcuse from "./components/RandomExcuse";

// page Principale
function Home() {
  // state (état, données)

  const [selectedExcuse, setSelectedExcuse] = useState(null);
  const [usedExcuses, setUsedExcuses] = useState([]);

  // ouverture/fermeture de la fenêtre modal
  const [openModal, setOpenModal] = useState(false);

  // les données (les excuses)
  const { excusesData, setExcusesData } = dataExcuses();

  // état du titre et des boutons
  const [buttonAndTitleState, setButtonAndTitleState] = useState(false);

  // comportements

  // gère l'ajout de la  nouvelle excuse
  const handleAdd = (excuseToAdd) => {
    const excusesCopy = [...excusesData];
    excusesCopy.push(excuseToAdd);
    setExcusesData(excusesCopy);
  };

  // gére l'affichage du titre et des boutons
  const showButtonAndUpTitle = () => {
    setButtonAndTitleState(true);
  };

  // affichage (render)
  return (
    <div className="Home">
      <h1 className={!buttonAndTitleState ? "title" : "title move"}>
        Excuses de dev
      </h1>
      {/* composant affichage de l'excuse */}
      <GenerateExcuses selectedExcuse={selectedExcuse} />

      <div className="btn">
        <button
          className={!buttonAndTitleState ? "bouton hide" : "bouton show"}
          // appel de la fonction getRandom excuse importé lors du clic sur le bouton
          onClick={() =>
            getRandomExcuse(
              setSelectedExcuse,
              [usedExcuses, setUsedExcuses],
              excusesData
            )
          }
        >
          Générer une excuse
        </button>
        <button
          className={!buttonAndTitleState ? "modalBtn hide" : "modalBtn show"}
          onClick={() => setOpenModal(true)}
        >
          Ajouter +
        </button>
      </div>

      {/* composant fenêtre modal */}
      <Modal
        excuses={excusesData}
        handleAdd={handleAdd}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      {/* composant timeout du titre et des boutons */}
      <TimeOutTitleButton showButtonAndUpTitle={showButtonAndUpTitle} />
    </div>
  );
}

export default Home;
