import { Navbar } from "./components/Navbar/Navbar";
import{About} from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
function App() {
  
  return (
    <div className="bg-[#050414] ">
      <div className="relative pt-20">
       <Navbar/>
       <About/>
       <Skills/>
      </div>
    </div>
  )
}

export default App
