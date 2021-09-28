import { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { IoMdClose } from "react-icons/io";
import { useMainContext } from "../../../Context/Context";

const style = {
  mainDiv: {
    position: "absolute",
    maxWidth: "960px",
    width: "100%",
    maxHeight: "660px", //change to control height
    height: "95%",
    background: "#F7F4F2",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alingItems: "center",

    overflow: "hidden",
  },

  loaderbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alingItems: "center",
  },

  loadTextTop: {
    position: "relative",

    fontSize: "22px",
    marginBottom: "10px",
  },

  loader: {
    height: "50px ",
    paddingRight: "50px",
  },

  loadText: {
    color: "#F4AF09",
    position: "relative",

    fontWeight: "bold",
    fontSize: "26px",
    textShadow: "1px 1px 0px rgba(150, 150, 150, 1)",
    marginTop: "10px",
  },
};

function Loder(props) {
  let [color, setColor] = useState("#219653");
  const { setModals } = useMainContext();

  return props.load === true ? (
    <div style={style.mainDiv}>
      <div className="m-title">
        <p>Here will be your title</p>
        <IoMdClose
          className="close"
          size="20"
          onClick={() => {
            setModals(false);
          }}
        />
      </div>
      <div style={style.loaderbox}>
        <div style={style.loadTextTop}>Lets Explore the Wisdom</div>

        <div style={style.loader}>
          <PacmanLoader color={color} loading={props.load} size={25} />
        </div>

        <div style={style.loadText}>LOADING</div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default Loder;
