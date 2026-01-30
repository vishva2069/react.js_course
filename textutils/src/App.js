import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return(
 <>
  <Navbar title="Textutils" aboutext="about us " />
 {/*  <Navbar/>
  <Navbar title="Textutils" /> */}

<div className="container">
<Textform/>
</div>

 </>

);
   }
export default App;