// commons imports
import { useState, useEffect } from "react";
import axios from "axios";

// import css
import "./App.css";

//import components
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Deatil from "./components/Deatil/Deatil";
import Navbar from "./components/NavBar/NavBar";

//router Dom
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./components/Error404";
import PathRoutes from "./components/helpers/Routes.helper";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = async (id) => {
    // usa try  para el  manejo de errores
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        //          // Check if the character already exists in the state
        //          if (!characters[id]) {
        setCharacters((oldChars) => [...oldChars, data]);
      } 
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const newChars = { ...characters };
    delete newChars[id];
    setCharacters(newChars);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const searchInput = document.getElementById("search-input");
      onSearch(searchInput.value);
      searchInput.value = "";
    }
  };

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App">
      {pathname !== "/" && (
        <Navbar
          onSearch={onSearch}
          handleKeyPress={handleKeyPress}
        />
      )}

      <Routes>
        <Route path={"/"} element={<Form login={login} />} />
        <Route
          path={PathRoutes.HOME}
          element={
            <Cards characters={Object.values(characters)} onClose={onClose} />
          }
        />
        <Route path={PathRoutes.ABOUT} element={<About />} />
        <Route path={PathRoutes.DEATIL} element={<Deatil />} />
        <Route path={PathRoutes.FAVORITES} element={<Favorites />} />
        <Route path="*" element={Error404} />
      </Routes>
      {access && <button onClick={logout}>Cerrar sesión</button>}
    </div>
  );
}

export default App;
