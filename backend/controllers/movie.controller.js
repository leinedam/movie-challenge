
const movieController = {};
const url = 'https://api.themoviedb.org/3/';
const apikey = 'a07f3928ffd867dcacc134577ac1a0c2';

 
var requests = require('requests');

movieController.getMovies = async (req , res) => {
    requests(url + 'trending/movie/week?api_key=' + apikey)
    .on('data', function (chunk) {
      res.json(chunk); 
    })
    .on('end', function (err) {
      if (err) 
      return console.log('connection closed due to errors', err);
    });
};


movieController.getMovie = (req, res) => {

    const id  = req.params.id;

    requests(url + 'movie/'+ id +'?api_key='+ apikey)
    .on('data', function (chunk) {
      res.json(chunk); 
    })
    .on('end', function (err) {
      if (err) 
      return console.log('connection closed due to errors', err);
    });

};

module.exports = movieController;
