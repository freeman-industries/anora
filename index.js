//anora
//Freeman Industries 2016 (Nabil Freeman)

//Usage:
/*
var anora = require('anora');

anora("computer") // 'a'
anora("object") // 'an'
anora("freeman") // 'a'
*/

module.exports = function(word){
	if(!word || typeof word !== "string") throw new Error("Please supply a string as the first (and only) argument.");
	
	if(!word.length) throw new Error("You sent an empty string.");

	word = word.toLowerCase();

	var char = word[0];

	if(['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1){
		return 'an';
	}

	return 'a';
}
