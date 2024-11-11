import "./App.css";
import MainView from "./components/MainView";
// eslint-disable-next-line no-unused-vars
import HistoryView from "./components/HistoryView";

function App() {
  return (
    <div className="container">
      <MainView />
      {/* <HistoryView setView={setView} /> */}
    </div>
  );
}

export default App;
