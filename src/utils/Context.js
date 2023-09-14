import { createContext, useEffect, useState } from "react";
import { getImages } from "./Api";

export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  // <============= Load images based on search or curated ============>
  useEffect(() => {
    const loadImageData = async () => {
      try {
        setLoading(true);
        let apiURL;
        if (value) {
          // If there is a search query, load search results
          apiURL = `https://api.pexels.com/v1/search?query=${value}&page=${currentPage}&per_page=${perPage}`;
        } else {
          // If no search query, load curated collection
          apiURL = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
        }
        const res = await getImages(apiURL);
        setImages((prevImages) => [...prevImages, ...res.photos]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadImageData();
  }, [currentPage, perPage, value]);

  // <============ Search result function ================>
  const searchResult = async (e) => {
    if (value.length > 1 && e.key === "Enter") {
      setCurrentPage(1); // Reset current page when performing a new search
      setImages([]); // Clear previous search results
      try {
        setLoading(true);
        const res = await getImages(
          `https://api.pexels.com/v1/search?query=${value}&page=${currentPage}&per_page=${perPage}`
        );
        setImages(res?.photos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  // < ========== Button click to load more images ========= >

  const loadMoreImage = () => {
    setCurrentPage(currentPage + 1);
  };

  // <====== download image =======>
  const dounloadImgBtn = (image) => {
    fetch(image)
      .then((res) => res.blob())
      .then((file) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click();
      })
      .catch(() => alert("Failed to download image!"));
  };
  return (
    <ContextApp.Provider
      value={{
        setShow,
        show,
        images,
        setDetail,
        detail,
        searchResult,
        value,
        setValue,
        loading,
        loadMoreImage,
        dounloadImgBtn,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default AppContext;
