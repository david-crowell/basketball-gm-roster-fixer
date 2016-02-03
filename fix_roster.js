var fs = require('fs');

var FILEPATH = './NBA2016-edits.json';

function readRoster(){
	var unparsedJSON = fs.readFileSync(filePath());
	var roster = JSON.parse(unparsedJSON);
	return roster;
}

function saveRoster(roster){
	var stringified = JSON.stringify(roster);
	fs.writeFileSync(FILEPATH, stringified);
}

function filePath(){
	if (filePathProvided()){
		return process.argv[2];
	}
	return FILEPATH;
}

function filePathProvided(){
	return process.argv.length >= 2 && process.argv[2];
}

function players(roster){
	return roster['players'];
}

function ratings(player){
	return player['ratings'];
}

function fix_player(player){
	if (ratings(player).length > 1) {
		remove_extra_ratings(player);
		return true;
	}
}

function remove_extra_ratings(player){
	player.ratings = [player.ratings[0]];
}

function run(){
	var roster = readRoster();

	var fixed = 0;
	players(roster).forEach(function(player){
		if (fix_player(player)){
			fixed ++;
		}
	});
	var total = players(roster).length
	saveRoster(roster);
	console.log('Fixed ' + fixed + ' out of ' + total + ' players');
}
run();
