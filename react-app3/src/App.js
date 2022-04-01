
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header"; 
import "./style.css";
import api from "./services/api";
import { useEffect, useState } from "react";
import Filme from "./Filme";
import Favoritos from "./Favoritos";
import Error from "./Error";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App(){
    return(
        <div className="app">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/filmes/:id" element={<Filme/>} />
                <Route exact path="/favoritos" element={<Favoritos/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <ToastContainer autoClose={3000} />
        </div>
    );
}

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes')
            setFilmes(response.data);
        }

        loadFilmes();

    }, []);

    return (  
      <div className="container">
        <div className="lista-filmes">
            {filmes.map((filmes)=>{
                return(
                    <article key={filmes.id}>
                        <strong> {filmes.nome} </strong>
                        <img src={filmes.foto} alt={filmes.nome} />
                        <Link to={`/filmes/${filmes.id}`}>Acessar</Link>
                    </article>
                )
            })}
        </div>
      </div>
    );
  }

  export default App;
