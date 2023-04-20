import dataExcuses from "./components/Data";
import { useParams, Navigate } from "react-router-dom";

// page HttpCode affichant le message correspondant au http_code entrer en paramètre dans l'url
function HttpCode() {
  // state (état, donnée)

  // récupére le paramètre
  const { code } = useParams();

  // récupère le tableau d'excuses
  const { excusesData } = dataExcuses();

  // cherche l'excuse correpondant au paramètre dans le tableau d'excuses
  const excuse = excusesData.find(
    (element) => element.http_code === parseInt(code)
  );

  // si une excuse est trouvé
  if (excuse) {
    // renvoie l'excuse dans une div vers la page HttpCode
    return <div className="HttpCode">{excuse.message}</div>;
    // sinon
  } else {
    // redirige l'utilisateur vers la page Error404
    return <Navigate replace to="/*" />;
  }
}

export default HttpCode;
