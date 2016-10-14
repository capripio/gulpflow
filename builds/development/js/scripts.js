var sample = function(){
  console.log('This is Sample');
}

var Sample = (function () {
    function Sample() {
    }
    Sample.prototype.construct = function (val) {
        this.val = val;
        this.inc = val + 'a';
    };
    return Sample;
}());
