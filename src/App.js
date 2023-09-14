import { useContext } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import LightBox from "./components/LightBox/LightBox";
import Home from "./pages/Home/Home";
import { ContextApp } from "./utils/Context";

function App() {
  const { show } = useContext(ContextApp);
  return (
    <div className="App">
      <Header />
      <Home />
      {show && <LightBox />}
    </div>
  );
}

export default App;
