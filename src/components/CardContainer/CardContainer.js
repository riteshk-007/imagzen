import React, { useContext } from "react";
import "./CardContainer.scss";
import Card from "../Card/Card";
import { ContextApp } from "../../utils/Context";
import Loader from "../Loader/Loader";
function CardContainer() {
  const { images, loading, loadMoreImage } = useContext(ContextApp);
  return (
    <>
      <div className="card-Container">
        {images?.map((item) => (
          <Card key={item.id} item={item} id={item.id} />
        ))}
      </div>
      <button className="btn" onClick={loadMoreImage}>
        Load More
      </button>
      {loading && <Loader />}
    </>
  );
}

export default CardContainer;
