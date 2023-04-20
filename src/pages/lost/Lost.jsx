import gif from "../../img/lost.gif";
import Timeout from "./components/TimeoutLost";

// page Lost
function Lost() {
  return (
    <div className="Lost">
      <h1>I'm lost</h1>
      {/* le gif */}
      <img src={gif} alt="Gif lost" />
      {/* composant  TimeoutLost*/}
      <Timeout />
    </div>
  );
}

export default Lost;
