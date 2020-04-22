import {elements} from './base'

// Pagination button

const paginationButton = (page, type) =>  `
    <button class="button button_pagination details__go-${type}animated fadeIn" data-page=${type === 'next' ? page + 1 : page - 1}>
        <i class="icon ion-ios-arrow-round-${ 
            type === 'next' ? 'forward' : 'back'
        }"></i> Page ${type === "next" ? page + 1 : page - 1}</button>
`;

// Render Buttons
const renderPagination = (page, totalResults) => {
    // limiting the result for each page
    const pages = Math.ceil(totalResults / 10);

    let button;

    // Display next button if it needed
    if(page === 1 &&  pages > 1) {
        button = paginationButton(page , 'Next')
    } 

    // Pervious and Next incase of exploring more than one pages
    else if (page < pages){
        button = `
        ${paginationButton(page, 'Back')}
        ${paginationButton(page, 'Next')}
        `;
    }
    // Just the back button for end page
    else if (page === page && pages > 1) {
        button = paginationButton(page, 'Back')
    }
    if (button) {
        document.querySelector('.movies__pagination').insertAdjacentHTML('afterbegin' , button)
    }
};

// Render single movie card
const renderMovieCard = movie => {
    const movieContainer = document.querySelector('.gallery');
    const notfount = 'https://www.movieartarena.com/images/wotpotab.jpg'
    movies.Search.forEach(function (movie) {
        const markup = `
    <div class="movieCard" data-id="${'movie.imdbID'}">
        <img class="movieCard__cover" src="${movie.Poster ? movie.Poster : notfount}" alt="${movie.Title}">
        <div class="movieCard__desc">
            <span class="movieCard__title">${movie.Title}</span>
            <span class="movieCard__year">${movie.Year}</span>
        </div>
    </div>
    `
    movieContainer.insertAdjacentHTML('beforeend', markup);
    })
}

// Get input from form
export const getInput = () => elements.inputForm.value;

// Clear input field
export const clearInput = () => {
  elements.inputForm.value = '';
};


// Then calls the renderMovie for each element on the array
export const renderResults = movies => {
    const movieContainer = document.querySelector('.gallery');
    const notfount = 'https://www.movieartarena.com/images/wotpotab.jpg'
    movies.Search.forEach(function (movie) {
        const markup = `
    <div class="movieCard fade-in" data-id="${'movie.imdbID'}">
        <img class="movieCard__cover" src="${movie.Poster ? movie.Poster : notfount}" alt="${movie.Title}">
        <div class="movieCard__desc">
            <span class="movieCard__title">${movie.Title}</span>
            <span class="movieCard__year">${movie.Year}</span>
        </div>
    </div>
    `
    movieContainer.insertAdjacentHTML('beforeend', markup);
    })
}

export const err = () => {
    const movieContainer = document.querySelector('.gallery');
        const markup = `
    <div class="movieCard fade-in" data-id="${'movie.imdbID'}">
        <div class="movieCard__desc">
            not found!!!
        </div>
    </div>
    `
    movieContainer.insertAdjacentHTML('beforeend', markup);
}