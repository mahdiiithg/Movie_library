import notFound from '../../images/not-found.png'
import homeImage from '../../images/undraw_movie_night_93wl.svg'
// Eporting DOM elements
export const elements = {
    icon: document.querySelector('.home__img_src'),
    inputForm: document.querySelector('.header__input'),
    Form: document.querySelector('.header'),
    mainContainer: document.querySelector('.gallery'),
    NotFound: notFound,
    SearchedResult: document.querySelector('.header__title__searched')
}

// Render the loader
export const renderLoader = () => {
    const markup = `
    <div class="loader">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    `;
    elements.mainContainer.insertAdjacentHTML('afterbegin', markup);
  };
  
  // Clear the loader
  export const clearLoader = () => {
    elements.mainContainer.innerHTML = '';
  };
  
  // Clear UI
  export const clearUI = () => {
    elements.mainContainer.innerHTML = '';
  };

  export const renderHome = () =>{
     const markup = `
          <div class="home"> <img src="${homeImage}" class="home__img_src" alt="Movie Library"> <div
          class="home__desc"> <h1>Movie library</h1> <div>⌨️ Write the name of the movie
          on the search bar</div> <p>➡️ Press enter or the search icon</p> <p>🔥 Enjoy</p>
          </div> 
     `
     elements.mainContainer.insertAdjacentHTML('beforeend', markup); 
  }
  