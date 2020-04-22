// Eporting DOM elements
export const elements = {
    icon: document.querySelector('.home__img_src'),
    inputForm: document.querySelector('.header__input'),
    Form: document.querySelector('.header'),
    mainContainer: document.querySelector('.gallery')
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
  