var yearsAgo = function(year){

    var dateToday = new Date();
	var years = dateToday.getFullYear()-year;
  	console.log(years);
  	return years;

};

assert.equal(1, yearsAgo(2015))
assert.equal(6, yearsAgo(2010))
