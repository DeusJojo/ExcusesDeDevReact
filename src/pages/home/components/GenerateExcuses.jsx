export default function GenerateExcuses({ selectedExcuse }) {
  // affichage (render)
  // affiche la div contenant l'excuse
  return (
    <div>
      {selectedExcuse !== null ? (
        <div className="excuse">{selectedExcuse}</div>
      ) : null}
    </div>
  );
}
