
const movieController = {};
const url = 'https://api.themoviedb.org/3/';
const apikey = 'a07f3928ffd867dcacc134577ac1a0c2';
const axios = require('axios');

movieController.getMovies = async (req , res) => {
    await axios.get(url + 'trending/movie/week?api_key=' + apikey)
    .then(response => {
      res.json(response.data); 
    })
    .catch(error => {
      console.log(error);
    });
};

movieController.getMovie = async (req, res) => {
    const id  = req.params.id;
    await axios.get(url + 'movie/' + id + '?api_key=' + apikey)
    .then(response => {
      res.json(response.data); 
    })
    .catch(error => {
      console.log(error);
    });
};



movieController.searchMovie =  (req, res) => {
    const searchStr  = req.params.searchStr;

    axios.get(url + 'search/movie?query=' + searchStr + '&sort_by=popularity.desc&api_key=' + apikey)
    .then(response => {
        res.json(response.data); 
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = movieController;
