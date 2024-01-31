import Carousel from "react-bootstrap/Carousel";
import Slide from "../Slide";

export default function Slider({movies, onSelectMovie}){
    return (
        <>
        <Carousel fade>
            {movies.map((movie)=>
            <Carousel.Item key={movie.id} interval={3000}>
              <Slide movie={movie} onSelectMovie={onSelectMovie}/>
              <Carousel.Caption>
                <h2>{movie.title}</h2>
              </Carousel.Caption>
            </Carousel.Item>)}
          </Carousel>
        </>
    )
}