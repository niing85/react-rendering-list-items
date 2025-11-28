import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1> Movie List Section </h1>
        {/* Render Movie Lists Here */}
          {movies.map((item,index)=>{
            return  <div className="movieBox" key={index}> 
                        <img src={item.image} alt="Movie Poster" />
                      <div className="detailBox">
                        <p> Title: {item.title} </p>
                        <p> Year: {item.year} </p>
                        <p> Runtime: {item.runtime} </p>
                        <p> Genres:
                          {item.genres.map((genre)=>(
                              <span key={genre} className="genreStyle"> {genre} </span>
                          ))} 
                        </p>
                        <p> IMDB Rating: {item.imdbRating} </p>
                        <p> IMDB Vote: {item.imdbVotes} </p>
                      </div>
                    </div>  
          })}
      </section>
    </div>
  );
}

export default App;
