import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Card 
        rating = "5.0"
        reviewCount = {7}
        country = "Canada"
        title = "Beginner Course: How To Make Pots"
        price = {140} 
      />
    </div>
  );
}

export default App;