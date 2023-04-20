export default function GetRandomExcuse(
  setSelectedExcuse,
  [usedExcuses, setUsedExcuses],
  excusesData
) {
  // Copie des données
  const usedExcusesCopy = [...usedExcuses];
  const excusesCopy = [...excusesData];

  let randomExcuse = null;
  do {
    // permet de choisir une excuse aléatoire dans le tableau excusesCopy
    randomExcuse =
      excusesCopy[Math.floor(Math.random() * excusesCopy.length)].message;
    // pontinue de choisir une excuse aléatoire jusqu'à en trouver une qui ne sois pas la dernière utilisée
  } while (usedExcusesCopy.includes(randomExcuse));
  // on met l'excuse dans selectedExcuse
  setSelectedExcuse(randomExcuse);
  /// ajouter l'excuse à la fin du tableau usedExcuses
  usedExcusesCopy.push(randomExcuse);
  // on met à jour le tableau usedExcuses
  setUsedExcuses(usedExcusesCopy);
  if (usedExcusesCopy.length > 1) {
    // enlève la première excuse du tableau
    usedExcusesCopy.shift();
    setUsedExcuses(usedExcusesCopy);
  }
}
