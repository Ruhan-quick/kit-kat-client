import "./App.css";
import Header from "./Components/Header/Header";
import KitKatCards from "./Components/KitKatCards/KitKatCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <div>
      {/* Header*/}
      <Header></Header>
      {/* KitKat Cards*/}
      <KitKatCards></KitKatCards>
      {/* Swipe Button*/}
      <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;
