import axios from "axios"

// Search class model
export default class Search {
    // Passing query when creating a new search
    constructor(query) {
        this.query = query
    }

    // Getting the result of search
    async getResult(page = 1) {
        const apiKey = '8cc749c'
        try {
            const res = await axios.get(
            `$http://www.omdbapi.com/?apikey=${apiKey}&s=${
          this.query
        }&type=movie&page=${page}`
        );
        // Save the data on the object
        this.result = res.data
        this.page = page
        }catch (error) {
            console.log(error);
        }
    }

}