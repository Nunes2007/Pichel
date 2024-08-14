import { Routes, Route} from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./pages/Home";
import { Process } from "./pages/process";
import { Phone } from "./pages/Phone";
import { Font } from "./pages/Font";
import { Cooler } from "./pages/Cooler";
import { Keyboard } from "./pages/Keyboard";
import { Ssd } from "./pages/Ssd";


const App = () => {
  return(
    <div className={styles.bodyArea}>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/process" element={<Process/>}/>
          <Route path="/phone" element={<Phone/>}/>
          <Route path="/font" element={<Font/>}/>
          <Route path="/cooler" element={<Cooler/>}/>
          <Route path="/keyboard" element={<Keyboard/>}/>
          <Route path="/ssd" element={<Ssd/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;