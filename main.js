const l = [
"A.B",
"...",
"C.D"];
["...",
 ".AB",
 ".CD"]

// const l = [
// '....',
// 'AB..',
// '.C..',
// '....',
// 'ABCD'];

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


const a = 'DR';

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

var lc;

function runDir(type, lock) {
    var snacks = {
        'R': shiftRight(lock),
        'L': shiftLeft(lock),
        'D': shiftDown(lock),
        'U': shiftUp(lock),
    };
    return snacks[type];
}

function shiftRight(lock) {
    return shift(lock, dots, letters);
}
function shiftLeft(lock) {
    return shift(lock, letters, dots);
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
    //counter();
    const up = shiftUp(lock);
    const down = shiftDown(lock);
    var newLock;
    a.split('').map(function(val) {
        newLock = runDir(val, lock);
    });

    console.log(newLock);
    //const right = shiftRight(lock);
    //const left = shiftLeft(lock);
    // console.log(lock);
    // console.log(down);
    // console.log(up);
    //console.log(right);
    //console.log(left);
})(l, a);