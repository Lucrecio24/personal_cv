import { Route , Routes , Link} from "react-router-dom";
import "./App.css"
import CurriculumVitae from "./cv";
import MainMenu from "./mainmenu";
import TopBar from "./topbar";
import Graphs from "./graph";
function App() {

  return (
    <div className="App">
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path="/cv" element={<CurriculumVitae />}></Route>
          <Route path="/graphs" element={<Graphs />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
