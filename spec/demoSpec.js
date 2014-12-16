var assert = require('assert');

describe('my fake test', function () {
  it('runs smoothly', function (){
    assert.equal(true, true);
  });
  it('does not run smoothly', function () {
    assert.equal(true, false);
  });
});
