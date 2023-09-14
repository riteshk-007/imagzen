import React, { useContext } from "react";
import "./LightBox.scss";
import { FiDownload, FiCamera } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { ContextApp } from "../../utils/Context";
function LightBox() {
  const { setShow, detail, dounloadImgBtn } = useContext(ContextApp);
  return (
    <div className="light-box">
      <div className="container">
        <div className="download">
          <span>
            <FiCamera />
            <h4>{detail?.photographer}</h4>
          </span>
          <span>
            <button
              className="down"
              onClick={() => dounloadImgBtn(detail?.src?.large2x)}
            >
              <FiDownload />
            </button>
            <button
              onClick={() => {
                setShow(false);
                document.body.classList.remove("active");
              }}
            >
              <IoMdClose />
            </button>
          </span>
        </div>
        <img
          src={detail?.src?.large2x}
          alt={detail?.photographer}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default LightBox;
