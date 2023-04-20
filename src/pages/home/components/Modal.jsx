import React from "react";
import { useState } from "react";
import TimeOutLoader from "./TimeOutLoader";

const Modal = ({ open, onClose, excuses, handleAdd }) => {
  // state(état, données)

  // correspond à ce que l'utilisateur entre dans l'input du modal
  const [nouvelleExcuse, setNouvelleExcuse] = useState("");
  // état du loader
  const [loaderState, setLoaderState] = useState(false);

  // comportements

  // gère la soumission du formulaire
  const handleSubmit = (event) => {
    // empêche le comportement par défaut du formulaire (pour ne pas recharger la page)
    event.preventDefault();
    // s'il y a une excuse
    if (nouvelleExcuse != "") {
      // copie du tableau d'excuses
      const excusesCopy = [...excuses];
      // cherche le dernier élément du tableau d'excuses
      const lastElement = excusesCopy.length - 1;
      // ajoute les données au tableau d'excuses en reprenant son modèle
      const excuseToAdd = {
        // le http_code correspond au http_code du dernier élément du tableau d'excuses + 1
        http_code: excusesCopy[lastElement]["http_code"] + 1,
        tag: "custom",
        message: nouvelleExcuse,
      };
      // appel de la fonction handleAdd pour ajouter l'excuse personnalisée au tableau d'excuses
      handleAdd(excuseToAdd);
      // réinitialise nouvelleExcuse à ""
      setNouvelleExcuse("");
    } else {
      // sinon demande à l'utilisateur d'entrer une excuse
      alert("Veuillez entrer une excuse");
    }
  };

  // récupère ce que l'utilisateur entre dans l'input du modal à chaque nouvelle entrée
  const handleChange = (event) => {
    setNouvelleExcuse(event.target.value);
  };

  // change l'état du loader pour l'afficher
  const showloader = () => {
    if (nouvelleExcuse != "") {
      setLoaderState(true);
    }
  };

  // change l'état du loader pour le cacher
  const hideLoader = () => {
    setLoaderState(false);
  };

  // si l'état du modal est sur false
  if (!open) return null;
  // sinon
  return (
    <div className="overlay">
      <div className="modalContainer">
        <button onClick={onClose} className="closeBtn">
          X
        </button>
        <div className="content">
          <form action="submit" onSubmit={handleSubmit}>
            <div className="inputLabel">
              <label className="labelModal" htmlFor="excuseInput">
                Nouvelle excuse :
              </label>
              <input
                type="text"
                value={nouvelleExcuse}
                className="inputModal"
                id="excuseInput"
                placeholder="Ajouter une excuse..."
                onChange={handleChange}
              />
            </div>
            <div className="btnContainer">
              <div className="containerLoader">
                <div className={loaderState ? "loader show" : "loader hide"}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <button
                className={
                  !loaderState ? "btnValidate show" : "btnValidate hide"
                }
                onClick={showloader}
              >
                Valider
              </button>
              {/* composant TimeOutLoarder pour l'affichage du loader */}
              <TimeOutLoader hideLoader={hideLoader} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
