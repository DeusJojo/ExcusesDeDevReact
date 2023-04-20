import { useEffect } from "react";

// permet l'affichage des bouton après 2 secondes
function TimeOutTitleButton({ showButtonAndUpTitle }) {
  useEffect(() => {
    const int = setTimeout(() => {
      // appel de la fonction showButtonAndUpTitle après 2 de secondes
      showButtonAndUpTitle();
    }, 2000);
    return () => clearTimeout(int);
  }, []);
}

export default TimeOutTitleButton;
