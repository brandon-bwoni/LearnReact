import Navbar from './components/Navbar';
import './App.css';
import Card from "./components/Card";
import card from './components/images/card1.png';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="contacts">
      <Navbar />
      <MainSection />
      <Card
        image={card}
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price={136}
      />
    </div>
  );
}

export default App;
