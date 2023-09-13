import React from "react";
import "./LightBox.scss";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
function LightBox() {
  return (
    <div className="light-box">
      <div className="container">
        <div className="download">
          <span>
            <img
              src="https://images.unsplash.com/profile-1601077628719-391aa5d76bbdimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
              alt=""
            />
            <h4>Virgie Cox</h4>
          </span>
          <span>
            <button className="down">
              <FiDownload />
            </button>
            <button>
              <IoMdClose />
            </button>
          </span>
        </div>
        <img
          src="https://images.pexels.com/photos/11948417/pexels-photo-11948417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default LightBox;
