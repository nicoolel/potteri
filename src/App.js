import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cardElements = data.map(el => {
    return <Card 
      key = {el.id}
      img = {el.coverImg}
      rating = {el.stats.rating}
      reviewCount = {el.stats.reviewCount}
      location = {el.location}
      title = {el.title}
      price = {el.price}
      openSpots={el.openSpots}
    />
  })
  return (
    <div className="container">
      <Navbar />
      <Main />
      <section className="card-list">
        {cardElements}
      </section>
    </div>
  );
}

export default App;