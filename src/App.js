import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Blog } from "./pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
