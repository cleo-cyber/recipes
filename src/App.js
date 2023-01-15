import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Searched from "./components/Searched";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Searched />
        <Category />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

export default App;
