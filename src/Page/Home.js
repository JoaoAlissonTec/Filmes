import Section from "../Component/Section";
import { useNavigate } from "react-router-dom";

export default function Home({filmes}){

    const navigate = useNavigate()
  
    function onSelectMovie(movie){
      const state = {movieId:movie.id}
      navigate("/filme/"+movie.title, {state})
    }
    return(
        <Section title="Mais Populares" filmes={filmes} onSelectMovie={onSelectMovie}/>
    )
}