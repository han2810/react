import { useState } from "react";

function SecretWord(props) {
  const showWord = () => {
    if (vision === true) {
      setVision(false);
    } else setVision(true);
  };
  const [vision, setVision] = useState(true);
  return (
    <>
      <button onClick={showWord}>
        {vision ? "Bien mat" : "Xuat hien lai"}
      </button>
      {!vision ? null : <h3 style={{ display: "inline" }}>{props.name}</h3>}
    </>
  );
}
export default SecretWord;
