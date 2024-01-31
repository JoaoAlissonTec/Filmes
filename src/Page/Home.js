import Section from "../Component/Section";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Slider from "../Component/Slider";

export default function Home({filmes, topFilmes}){

    const navigate = useNavigate()
  
    function onSelectMovie(movie){
      const state = {movieId:movie.id}
      navigate("/filme/"+movie.title, {state})
    }

    return(
        <div>
          {filmes.length > 0 ? <Slider movies={filmes.slice(0, 5)} onSelectMovie={onSelectMovie}/> : <></>}
          <Section title="Mais Populares" filmes={filmes} onSelectMovie={onSelectMovie}/>
          <Section title="Melhor Votados" filmes={topFilmes} onSelectMovie={onSelectMovie}/>
        </div>
    )
}