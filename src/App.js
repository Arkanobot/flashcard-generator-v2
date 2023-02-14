import Header from "./components/Header";
import Main from "./routes/Main";

function App() {
  return (
    // Loads the header and the Main routes component
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
