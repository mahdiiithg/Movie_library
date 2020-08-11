import axios from "axios"

const control = (function () {

    return {
        getResults: async (name, page = 1, callback) => {

            const apiKey = process.env.APIKEY
            const url = `https://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${name}&page=${page}`
            let res = await fetch(url)
            let data = await res.json()
            callback(data)
            console.log('data from search',data);
        }
    }

})()
export default control
