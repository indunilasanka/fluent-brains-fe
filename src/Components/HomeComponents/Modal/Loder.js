import { useState } from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const style = {
  loaderbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alingItems: "center",
    position: "relative",
    top: "-50%",
  },

  loadText: {
    color: "#219653",
    position: "relative",
    left: "45px",
    top: "45px",
    fontWeight: "bold",
    fontSize: "22px",
  },
};

function Loder(props) {
  let [color, setColor] = useState("#219653");

  return (
    <div className="" style={style.loaderbox}>
      <PacmanLoader color={color} loading={props.load} size={25} />
      {props.load === true ? (
        <div style={style.loadText}>LOADING</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Loder;
