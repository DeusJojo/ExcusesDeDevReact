import { useEffect } from "react";

function TimeOutLoader({ hideLoader }) {
  useEffect(() => {
    // prend un temps (en milliseconde) aléatoire entre 1 et 5 secondes
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    const int = setTimeout(() => {
      // appel de la fonction pour cacher le loader après le délai
      hideLoader();
    }, delay);
    return () => clearTimeout(int);
  });
}

export default TimeOutLoader;
