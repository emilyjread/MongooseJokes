const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {
		type: String,
		required:[true, "setup is required"],
		minlength:[10, "must include at least 10 characters"]
	},
	punchline: {
		type: String,
		required:[true, "punchline is required"],
		minlength:[10, "must include at least 10 characters"]
	}
	
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;