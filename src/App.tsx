import { Routes, Route} from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";


const App = () => {
  return(
    <div className={styles.bodyArea}>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/item" element={<Product/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;