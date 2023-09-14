import React, { useContext } from "react";
import "./Card.scss";
import { IoMdAdd } from "react-icons/io";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { ContextApp } from "../../utils/Context";
function Card({ item, id }) {
  const { setShow, setDetail } = useContext(ContextApp);
  // const { id } = useParams();

  const handleShow = () => {
    const getImages = (apiUrl) => {
      fetch(apiUrl, {
        headers: { Authorization: process.env.REACT_APP_SECRET_KEY },
      })
        .then((res) => res.json())
        .then((data) => {
          setDetail(data);
        });
    };
    setShow(true);
    getImages(`https://api.pexels.com/v1/photos/${id}`);
    document.body.classList.add("active");
  };

  return (
    <div className="card" onClick={() => handleShow()}>
      <img src={item?.src?.large2x} alt={item?.photographer} loading="lazy" />
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
          <p title="username">{item?.photographer}</p>
        </span>
      </div>
    </div>
  );
}

export default Card;
