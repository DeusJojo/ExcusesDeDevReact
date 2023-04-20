import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// redirige l'utilisateur vers la page principale après 2 secondes
function TimeoutLost() {
  const navigate = useNavigate();

  useEffect(() => {
    const int = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
    return () => clearTimeout(int);
  }, []);
}

export default TimeoutLost;
