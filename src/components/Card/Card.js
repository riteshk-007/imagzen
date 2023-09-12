import React from "react";
import "./Card.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BsFillSuitHeartFill } from "react-icons/bs";
function Card({ img }) {
  return (
    <div className="card">
      <img src={img} alt="" loading="lazy" />
      <div className="save-icon show-img">
        <button title="add">
          <IoMdAdd />
        </button>
        <button title="like">
          <BsFillSuitHeartFill />
        </button>
      </div>
      <div className="detail show-img">
        <span>
          <img
            src="https://images.unsplash.com/profile-1601077628719-391aa5d76bbdimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt="user"
            loading="lazy"
            title="user"
          />
          <p title="username">Lenora Sherman</p>
        </span>
        <span>
          <button title="download">
            <AiOutlineDownload />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Card;
