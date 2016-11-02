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
	var char = word[0];

	if(['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1){
		return 'an';
	}

	return 'a';
}
