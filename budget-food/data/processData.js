var Combinatorics = require(‘js-combinatorics’);
var max = 6.1;
var cmb, a;
cmb = Combinatorics.power([{“one”:3.14},{“two”:5.00},{“three”:6.00}]);
cmb.forEach(function(a){
//if(a < max && a != “”){
    a.forEach(function(b){
       console.log(Object.values(b))
    });

  // }
});
alert('this ran');
