/*import logo from './logo.svg';
import './App.css';
import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Nav from './components/nav';*/
//import Comments from './comment';
//import Likes from './like';
/*import {Button} from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ButtonGroup from "@material-ui/core/ButtonGroup";*/
import MovieList from "./components/MovieList";
import Nav from "./components/nav";
import "./App.css";
import AddMovie from "./components/Addmovies";

import { MovieProvider } from "./components/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;