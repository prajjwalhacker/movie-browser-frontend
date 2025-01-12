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
       const isAlreadyPresent = newArr.findIndex((item) => item.originalTitle === value.originalTitle);
       if (isAlreadyPresent === -1) {
        newArr.push(value);
       }
       else {
        toast.warn(`${value.originalTitle || 'Movie'} has already been added to your favorites!`, {
          position: "top-right", // You can adjust the position as needed
          autoClose: 3000, // Time duration for toast visibility
        });
        return;
       }
       localStorage.setItem('favoriteMovie', JSON.stringify(newArr));
    }
    toast.success(`${value.originalTitle} has been added to your favorites!`, {
      position: "top-right",
      autoClose: 3000, 
    });
  }
  
    return (
      <div className="movie-card" key={item.id}>
        <img
          src={item?.imageSet?.verticalPoster?.w360}
          alt={item.originalTitle}
          className="movie-image"
        />
        <div className="movie-detail">
          <div >
            <h2>{item.originalTitle}</h2>
            <p>Year: {item.releaseYear}</p>
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
  