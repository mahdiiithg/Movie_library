import {elements} from './base'

// Pagination button

const paginationButton = (page, type) => `
<button class="button button__pagination details__go-${type} animated fadeIn" data-page=${
type === 'next' ? page + 1 : page - 1
}>
  <i class="icon ion-ios-arrow-round-${
    type === 'next' ? 'forward' : 'back'
  }"></i>Page ${type === 'next' ? page + 1 : page - 1}
</button>
`;

// Render Buttons
const renderPagination = (page, totalResults) => {
    // Determine how many pages the results need
    const pages = Math.ceil(totalResults / 10);
  
    let button;
  
    // If its the page n1, and there are more pages to render, display next
    if (page === 1 && pages > 1) {
      button = paginationButton(page, 'next');
    }
  
    // If current page is less than the pages the results need, next and prev buttons are needed
    else if (page < pages) {
      button = `
      ${paginationButton(page, 'back')}
      ${paginationButton(page, 'next')}
      `;
    }
    // if current page is equal to number of pages needed, so only prev button
    else if (page === pages && pages > 1) {
      button = paginationButton(page, 'back');
    }
    if (button) {
      document
        .querySelector('.movies__pagination')
        .insertAdjacentHTML('afterbegin', button);
    }
  };

// Render single movie card
export const renderResults = query => {
    const markup = `
        <h2 class="header__title header__title__searched fade-in">Search results for "${query}"</h2>
    `
    elements.mainContainer.insertAdjacentHTML('beforebegin', markup);
}
export const clearResults = (query) => {
    
        document.querySelector('.header__title__searched').remove()
    
}

// Get input from form
export const getInput = () => elements.inputForm.value;

// Clear input field
export const clearInput = () => {
  elements.inputForm.value = '';
};

// Then calls the renderMovie for each element on the array
export const renderMovieCard = movies => {
    
    movies.Search.forEach(function (movie) {
        // If there was no image
        const img = 
        movie.Poster !== 'N/A' ? `<img class="movieCard__cover" src="${movie.Poster}" alt="${movie.Title}">` :  `<img class="movieCard__cover" src="${elements.NotFound}" alt="${movie.Title}">`

        const markup = `
            <div class="movieCard fade-in" data-id="${movie.imdbID}">
                ${img}
                <div class="movieCard__desc">
                    <span class="movieCard__title">${movie.Title}</span>
                    <span class="movieCard__year">${movie.Year}</span>
                </div>
            </div>
            `
    elements.mainContainer.insertAdjacentHTML('beforeend', markup); 
    })
    elements.mainContainer.classList.remove('singleGallery');
    
    //renderPagination(1 ,movies.totalResults)
    
}

export const err = () => {
    const movieContainer = document.querySelector('.gallery');
        const markup = `
    <div class="erro-card">
            movie did not found
    </div>
    `
    movieContainer.insertAdjacentHTML('beforeend', markup);
}