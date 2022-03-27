import "./App.css";
import "./style.css";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Services from "./Services";
import Doctors from "./Doctors";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <LandingPage />
        <Services />
        <Doctors />
      </div>
    </div>
  );
}

export default App;
