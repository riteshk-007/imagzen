import "./App.scss";
import Header from "./components/Header/Header";
import LightBox from "./components/LightBox/LightBox";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <LightBox />
    </div>
  );
}

export default App;
