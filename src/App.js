import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Experiences from "./components/Experiences"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Experiences />
    </div>
  );
}

export default App;
