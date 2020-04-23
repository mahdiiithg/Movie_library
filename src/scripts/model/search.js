import axios from "axios"

const control = (function () {

    return {
        getResults: async (name, page = 1, callback) => {

            const apiKey = '8cc749c'
            const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${name}&page=${page}`
            let res = await fetch(url)
            let data = await res.json()
            callback(data)
            console.log(data);
        }
    }

})()
export default control
