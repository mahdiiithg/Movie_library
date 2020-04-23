import '../styles/index.scss';

//import Search from './model/search';
import control from './model/search'
import movie from './model/movie';

import * as movieView from './views/movieView'

import * as searchView from './views/searchVIew';

import {elements, renderLoader, clearLoader, renderHome, clearUI} from './views/base';



// Render Home

renderHome()
const state = {};
// ------ SEARCH CONTROLLER ------ Receives type parameter, to know if its a new
// search from the input search Or if its a new search because of requesting
// another page from previous query
const searchController = async (type, page) => {

    const name = searchView.getInput()
    if (name) {
        searchView.clearInput()
        clearUI()
        renderLoader()
        await control.getResults(name,page,movie => {
            console.log('fetched: ,' + movie);
        })
        clearLoader()
        if(document.querySelector('.header__title__searched')) {
            searchView.clearResults(name)
        }
        searchView.renderResults(name)
        
        try {
            await control.getResults(name,page,movie => {
                searchView.renderMovieCard(movie)
                console.log(movie);
            })
        } catch (err) {
            console.log(err);
            searchView.err()
        }
    }
  }



// ------ MOVIE CONTROLLER ------
// async function that will get the ID of the movie to get
const movieController = async (id) => {
    if (id) {
      // Create the movie object and add it to the state
      //state.movie = new Movie(id);
      searchView.clearResults()
      // Prepare UI for results
      clearUI();
      renderLoader();
        
      try {
        // Search for the movie
        await movie.getMovie(id,(movie=> {
           console.log(movie);
        }))
  
        // Render movie on page
        clearLoader();
       movie.getMovie(id, (movie => {
           movieView.renderMovie(movie)
       }))
      } catch (error) {
        console.log(error);
      }
    }
  };




// Event listener on the form submit for search
elements
    .Form
    .addEventListener('submit', e => {
        e.preventDefault();
        searchController('new');
        
    });

    elements.mainContainer.addEventListener('click', e => {
        const movie = e.target.closest('.movieCard');
        if (movie) {
            const movieID = movie.dataset.id;
            // Call movie controller
            movieController(movieID);
          }
    })


console.log('webpack starterkit');
