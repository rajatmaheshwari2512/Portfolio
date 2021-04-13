import "./App.less";
import { Cursor } from "./Components/Cursor/Cursor";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { TechIKnow } from "./Components/TechIKnow/TechIKnow";
import "antd/dist/antd.dark.css";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <Landing />
      <AboutMe />
      <TechIKnow />
    </div>
  );
}

export default App;
