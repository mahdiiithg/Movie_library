import { elements } from '../views/base';
import notFound from '../../images/not-found.png'

// Render single movie function
export const renderMovie = (movie, isFavorite, isWatched, fromMenu) => {
  if (movie) {
    let markup;
    
      const img = 
      movie.Poster !== 'N/A' ? `<img class="movieCard__cover" src="${movie.Poster}" alt="${movie.Title}">` :  `<img class="movieCard__cover" src="${notFound}" alt="${movie.Title}">`
     
      markup = `
        <div class="container__single">
          <div class="container__single__img animated fadeIn faster">
          ${img}
          </div>
          <div class="container__single__details animated fadeIn faster">
            <h1 class="container__single__details-name">${movie.Title}</h1>
            <div class="container__single__details-details">
              <div class="details-year" title="Release Date">
                <i class="icon ion-ios-calendar"></i>${
                  movie.Released === 'N/A' || !movie.Released
                    ? 'Unavaiable'
                    : movie.Released
                }
              </div>
              <div class="details-director" title="Movie Director">
                <i class="icon ion-ios-person"></i>${
                  movie.Director === 'N/A' || !movie.Director
                    ? 'Unavaiable'
                    : movie.Director
                }
              </div>
              <div class="details-time" title="Total time">
                <i class="icon ion-ios-time"></i>${
                  movie.Year === 'N/A' || !movie.Year
                    ? 'Unavaiable'
                    : movie.Year
                }
              </div>
              <div class="details-rating" title="Internet Movie Database Value">
                <i class="icon ion-ios-star"></i>${
                  movie.Ratings[0].Value === 'N/A' || !movie.Ratings[0].Value
                    ? 'Unavaiable'
                    : movie.Ratings[0].Value
                }
              </div>
            </div>
            <div class="container__single__details-plot">${
              movie.Plot === 'N/A' || !movie.Plot ? 'Unavailable' : movie.Plot
            }</div>
            <div class="container__single__buttons">
              <a href="https://www.imdb.com/title/${
                movie.imdbID
              }" target="_blank "title="${
        movie.imdbRating === 'N/A' || !movie.imdbRating
          ? movie.Title
          : `${movie.imdbRating} based on ${movie.imdbVotes} votes`
      }"
          class="button details__imdb">
                IMDB ${
                  movie.imdbRating === 'N/A' || !movie.imdbRating
                    ? ''
                    : `<span class='imdb__score'>${movie.imdbRating}</span >`
                }
              </a>
              <button class="button details__actions-later">
                <i class="icon icon__watched ${
                  isWatched ? 'ion-ios-checkmark-circle' : 'ion-ios-checkmark'
                }"></i>
              </button>
              <button class="button details__actions-favorite">
                <i class="icon icon__favorite ${
                  isFavorite ? 'ion-ios-heart' : 'ion-ios-heart-empty'
                }"></i>
              </button>
            </div>
            ${
              fromMenu === true
                ? ''
                : `<button class="button details__go-back">
          <i class="icon ion-ios-arrow-round-back"></i> BACK
            </button>`
            }
          </div>
        </div>
    `;
    
    elements.mainContainer.classList.add('singleGallery');
    elements.mainContainer.insertAdjacentHTML('beforeend', markup);
  }
};
