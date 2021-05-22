import * as styles from "./App.css";
import Navbar from "./components/Navbar";
import GameScreen from "./pages/GameScreen";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Download from "./pages/Download";
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <CookiesProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/o-nas">
          <About />
        </Route>
        <Route path="/download">
          <Download/>
        </Route>
        <Route path="/">
          <GameScreen />
        </Route>
      </Switch>
    </Router>
    </CookiesProvider>
  );
}
