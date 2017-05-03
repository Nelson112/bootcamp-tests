describe('yearsAgo.js', function () {
  it ("return 'year', when given year" , function(){
    assert.equal(1, yearsAgo(2015));
    assert.equal(6, yearsAgo(2010));
  });

})
