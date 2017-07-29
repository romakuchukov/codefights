const l = [
'....',
'AB..',
'.C..',
'....',
'ABCD'];

'ABCD'
'AC..'
'.B..'
'....'
'....'

'....'
'....'
'.B..'
'AC..'
'ABCD'


const a = 'RDL';

const letters = (/\w/g);
const dots = (/\./g);


function transpose(mtx) {
  return mtx.map((x, i) => {
    return mtx.map((x) => {
      return x[i];
    });
  }).map((v) => {
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
    let down = transpose(lock);
    down = shift(down, dots, letters);
    down = transpose(down);
    return down;
}
function shiftUp(lock) {
    let up = transpose(lock);
    up = shift(up, letters, dots);
    up = transpose(up);
    return up;
}

((lock, actions) => {
    const up = shiftUp(lock);
    const down = shiftDown(lock);
    //const right = shiftRight(lock);
    //const left = shiftLeft(lock);

    console.log(down);
    console.log(up);
    //console.log(right);
    //console.log(left);
})(l, a);