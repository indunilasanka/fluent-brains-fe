import { useState } from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const style = {
  loaderbox: {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",

    position: "relative",
    top: "-50%",
  },
};

function Loder(props) {
  let [color, setColor] = useState("#219653");

  return (
    <div className="" style={style.loaderbox}>
      <PacmanLoader color={color} loading={props.load} size={25} />
    </div>
  );
}

export default Loder;
