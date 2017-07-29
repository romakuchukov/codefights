const l = ['....', 'AB..', '.C..', '....', 'ABCD'];
const a = 'RDL';

const letters = (/\w/g);
const dots = (/\./g);


let transpose = function transpose(m) {
  return m.map(function (x, i) {
    return m.map(function (x) {
      return x[i];
    });
  }).map(function (v) {
    return v.join('');
  });
};

function shift(arr, reg1, reg2) {
    let W;
    let D;
    return arr.map((elm) => {
        W = elm.match(reg1) ? elm.match(reg1) : [];
        D = elm.match(reg2) ? elm.match(reg2) : [];
        return W.concat(D);
    }).map((elm) => {
        return elm.join('');
    });
}

// var switchcase = function switchcase(cases) {
//   return function (defaultCase) {
//     return function (key) {
//       return key in cases ? cases[key] : defaultCase;
//     };
//   };
// };

// var counter = function counter() {
//   var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
//   var action = arguments[1];
//   return switchcase({
//     'R': shiftRight,
//     'L': shiftLeft,
//     'D': shiftDown,
//     'U': shiftUp,
//   })(state)(action.type);
// };

function shiftRight(lock) {
    return shift(lock, letters, dots);
}
function shiftLeft(lock) {
    return shift(lock, dots, letters);
}
function shiftDown(lock) {

}
function shiftUp(lock) {

}

((lock, actions) => {
    //const trp = transpose(lock);
    const right = shiftRight(lock);
    const left = shiftLeft(lock);

    //console.log(trp);
    console.log(right);
    console.log(left);
})(l, a);