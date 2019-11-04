const Movies = require('./movies.dao');

exports.createMovie = function (req, res, next) {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    seen: req.body.seen,
    runTime: req.body.runTime,
  };

  Movies.create(movie, (err, movie) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: 'Movie created successfully',
    });
  });
};

exports.getMovies = function (req, res, next) {
  Movies.get({}, (err, movies) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      movies,
    });
  });
};

exports.getMovie = function (req, res, next) {
  Movies.get({
    _id: req.params.id,
  }, (err, movies) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      movies,
    });
  });
};

exports.updateMovie = function (req, res, next) {
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    seen: req.body.seen,
    runTime: req.body.runTime,
  };
  Movies.update({
    _id: req.params.id,
  }, movie, (err, movie) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: 'Movie updated successfully',
    });
  });
};

exports.removeMovie = function (req, res, next) {
  Movies.delete({
    _id: req.params.id,
  }, (err, movie) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: 'Movie deleted successfully',
    });
  });
};
