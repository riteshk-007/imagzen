export const getImages = async (apiUrl) => {
  try {
    const data = await fetch(apiUrl, {
      headers: { Authorization: process.env.REACT_APP_SECRET_KEY },
    });
    const res = await data.json();
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
