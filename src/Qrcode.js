import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";
import "./qrcode.css";
import fileDownload from 'js-file-download'

export default function Qrcode() {
  const [datasent, setdatasent] = useState({
    url: "",
  });
  const [show, setShow] = useState(false);
  const handleOnChange = (e) => {
    setdatasent({ url: e.target.value });
  };
  const handleclickgetqr = () =>{
    if(datasent.url!==""){
      setResponse("https://api.qrserver.com/v1/create-qr-code/?data="+encodeURI(datasent.url)+"&size=320x320");
      setShow(true)
    }
    else{
      setShow(false)
      alert("Enter the link to be encoded")
    }
  }
  const [response, setResponse] = useState("");
  
  let handleDownload = () => {
    axios.get(response, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, "qrcode.png")
    })
  }
  
  return (
    <>
      <Navbar />
      <div>
        <div className="qrcontainer">
          <div className="colu1">
            <div className="titla">
              <p>QR Code Generator</p>
            </div>
            <div className="inputarea">
              <div className="iparea">

              <img src="/webicon.png" alt="" />
              <input
                type="text"
                name="data"
                id="data"
                placeholder="Enter the url to be encoded"
                value={datasent.url}
                onChange={handleOnChange}
                />
              </div>
              <button className="Submitbtn" onClick={handleclickgetqr}>Generate QR Code</button>
            </div>
          </div>
          <div className="qrcodedisplay" style={{ visibility: show ? "visible" : "hidden" }}>
            <p>Your Generated QR Code</p>
            <img src={response} alt="" />
            <button className="Downloadbtn" onClick={handleDownload}>Download</button>
          </div>
        </div>
      </div>
    </>
  );
}
