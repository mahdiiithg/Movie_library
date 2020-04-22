import axios from "axios"


const control = (function(){

    return {
        
            getResults: async (name,page,callback) => {
                let pages = 1
                const apiKey = '8cc749c'
                const movie = 'Batman'
            
                const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}&page=${pages}`
                let res = await fetch(url)
                let data = await res.json()
                callback(data)
            
            }
        
    }
    
})()
export default control


// Search class model
// export default class Search {
//     // Passing query when creating a new search
//     constructor(query) {
//         this.query = query
//     }

//     // Getting the result of search
//     async getResults(callback) {
//         let page = 1
//         const apiKey = '8cc749c'
//         const movie = 'Batman'

//         const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=batman&page=${page}`
        

//         let res = await fetch(url)
//         let data = await res.json()
       
        
//         callback(data)

//     }
   

// }

 // async getResults(page = 1, callback) {
    //     const apiKey = '8cc749c'
    //     const movie = 'Batman'
    //     try {
    //         const res = await axios.get(
    //         `http://www.http://www.omdbapi.com/?apikey=${apiKey}&s=batman&page=${page}`
    //     );
    //     // Save the data on the object
    //     this.result = res.data
    //     callback(res.data)

    //     this.page = page
    //     }catch (error) {
    //         console.log(error);
    //     }
    // }