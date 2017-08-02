'use strict';

var str = 'b_\\_\\UL_\\UL_\\_UU_U_L_0_22_333_\\UL_\\UL';//'\\_333_bbbb_b_\\UL_____\\UL_\\UL_f_4' //'b_\\_\\UL_\\UL_\\_UU_U_L_0_22_333______\\UL_\\UL'

var regx = /(\_)\1+/g;
console.log(str);
// console.log(str.replace(regx, '_'+(str.match(regx)[0].length - 3) + '&_' ))
// console.log(str.match(regx)[0].length - 3)


console.log(str.match(regx).length);
 