const Joke = require("../models/jokes.model");


module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes=> res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke => res.json({ joke: oneJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findRandomJoke = (req, res) => {
  const count= Joke.countDocuments({}, 
    function(err, count){
      const random = Math.floor(Math.random() * count)
      Joke.findOne().skip(random)
      .then(randomJoke => res.json({ joke: randomJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
  )
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke= (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
