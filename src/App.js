import "./App.css";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="bg-blue w-full h-screen font-sans">
      <Header />
      <Subheader />
      <Cards />
    </div>
  );
}

export default App;
