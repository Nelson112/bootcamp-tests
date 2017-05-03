describe('countRegNumber.js', function () {
  it ("return 'control.length' when given 'countRegNumber'" , function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
  });

})
