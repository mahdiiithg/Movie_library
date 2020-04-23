import axios from 'axios';

// Movie class model
const movie = (function () {

    return {
        getMovie: async (id, callback) => {
            let idd = 'tt7767422'
            try {
                    const apiKey = '8cc749c'
                    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&type=movie&plot=full`
                    let res = await fetch(url)
                    let data = await res.json()
                    callback(data)
                    console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }

})()
export default movie











// export default class Movie {
//   constructor(id) {
//     this.id = id;
//   }

//   // Get movie
//   async getMovie() {
//     const apiKey = '8cc749c'
    
//     try {
//       const res = await axios.get(
//         `http://www.omdbapi.com/?apikey=${apiKey}&i=${
//           this.id
//         }&type=movie&plot=full`
//       );
//       this.title = res.data.Title;
//       this.img = res.data.Poster;
//       this.plot = res.data.Plot;
//       this.release = res.data.Released;
//       this.director = res.data.Director;
//       this.time = res.data.Runtime;
//       this.rating = res.data.Ratings[0].Value;
//       this.imdbID = res.data.imdbID;
//       this.imdbRating = res.data.imdbRating;
//       this.imdbVotes = res.data.imdbVotes;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }


