import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Projects from './components/Projects/Projects/Projects';
import Blogs from './components/Blogs/Blogs/Blogs';
import NoMatch from './components/NoMatch/NoMatch';
import About from './components/About/About/About';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route exact path='/'>
            <Home></Home>
           </Route>
           <Route exact path='/project'>
            <Projects></Projects>
           </Route>
           <Route exact path='/blog'>
            <Blogs></Blogs>
           </Route>
           <Route exact path='/about'>
            <About></About>
           </Route>
           <Route exact path='*'>
            <NoMatch></NoMatch>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
