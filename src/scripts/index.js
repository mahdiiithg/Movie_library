import '../styles/index.scss';

//import Search from './model/search';
import control from './model/search'

import * as searchView from './views/searchVIew';
import {elements, renderLoader, clearLoader, renderHome, clearUI} from './views/base';

const state = {};

// ------ SEARCH CONTROLLER ------ Receives type parameter, to know if its a new
// search from the input search Or if its a new search because of requesting
// another page from previous query
const searchController = async (type, page) => {

    const name = searchView.getInput()
    if (name) {
        clearUI()
        renderLoader()
        await control.getResults(name,page,movie => {
            console.log('fetched: ,' + movie);
        })
        clearLoader()
        try {
            await control.getResults(name,page,movie => {
                searchView.renderResults(movie)
            })
        } catch (err) {
            console.log(err);
            searchView.err()
        }
    }

// Event listener on the form submit for search
elements
    .Form
    .addEventListener('submit', e => {
        e.preventDefault();
        searchController('new');
    });

console.log('webpack starterkit');
