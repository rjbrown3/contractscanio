import React from "react";
import Button from "./Button";
import { IoIosFingerPrint } from "react-icons/io";
import { Link } from "react-router-dom";
import handshakeimg from "./img/handshakeimg.png";

const Home = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="text-center">
        <h1
          style={{ marginTop: "65px", marginBottom: "50px", color: "#607d8b" }}
        >
          What Contractscan.io does for you
        </h1>
        <br />
        <div>
          <h4 className="">
            <IoIosFingerPrint className="textColor" /> Quickly extracts key
            information from any type of legal document
          </h4>
          Rental contracts, loan agreements, employment offers, and more!
          <br />
          <br />
          <div style={{ marginBottom: "30px" }}></div>
        </div>
        <div>
          <h4>
            <IoIosFingerPrint className="textColor" /> Presents summary
            information in a page-by-page format
          </h4>
          <div style={{ marginBottom: "75px" }}></div>
        </div>
        <div>
          <h4>
            <IoIosFingerPrint className="textColor" /> Gives you the confidence
            in understanding a document before you sign
          </h4>
          <br />
          <img src={handshakeimg} alt="handshake" />
          <div style={{ marginBottom: "25px" }}></div>
        </div>
        <br />
        <Link to="/GenerateSummary">
          <Button color="#abd4ff" text="Get started" />
        </Link>
        <div style={{ marginBottom: "200px" }}></div>
      </div>
    </div>
  );
};

export default Home;
