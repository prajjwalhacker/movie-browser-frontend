// NetflixMovieCard.js
import { toast } from "react-toastify";
export default function MovieCard({ item }) {
    
  const onAddToFavorites = (value) => {
    const storedMovie = JSON.parse(JSON.stringify(localStorage.getItem('favoriteMovie') || []));



    if (!storedMovie?.length) {
       const arr = [];
       arr.push(value);
       localStorage.setItem('favoriteMovie',JSON.stringify(arr));
    }
    else {
       const newArr= JSON.parse(storedMovie);
       const isAlreadyPresent = newArr.findIndex((item) => item.Title === value.Title);
       if (isAlreadyPresent === -1) {
        newArr.push(value);
       }
       else {
        toast.warn(`${value.Title} has already been added to your favorites!`, {
          position: "top-right", // You can adjust the position as needed
          autoClose: 3000, // Time duration for toast visibility
        });
        return;
       }

       localStorage.setItem('favoriteMovie', JSON.stringify(newArr));
    }
    toast.success(`${value.Title} has been added to your favorites!`, {
      position: "top-right", // You can adjust the position as needed
      autoClose: 3000, // Time duration for toast visibility
    });
  }
  
    return (
      <div className="movie-card">
        <img
          src={item.Poster}
          alt={item.Title}
          className="movie-image"
        />
        <div className="movie-detail">
          <div >
            <h2>{item.Title}</h2>
            <p>Year: {item.Year}</p>
          </div>
        </div>
        <button 
          className="favorite-button"
          onClick={() => onAddToFavorites(item)}
        >
          💙
        </button>
      </div>
    );
  }
  