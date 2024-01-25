import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        accept: 'application/json',
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzM5ZWEyN2RiOThiNTVhNjQ5ZGU5MmY1NGY1YjMyYiIsInN1YiI6IjY0NDg0N2ZiMmZkZWM2MDRlNGEwOTY5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9QgwrnuvaPQM53EVbRWPnc8K9Mmlo3Ge_-JvKUCrPlk",
    }
})

export default api