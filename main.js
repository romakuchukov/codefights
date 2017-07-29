const l = [
"U...Z",
"....C",
"ABCD."
];


const a = 'L';

const letters = (/\w/g);
const dots = (/\./g);

function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}
function arrayPrep(mtx) {
    var arr = [[]];
    var M = mtx;
    M.map((v, j) => {
        arr[j] = [];
        v.split('').map((s, i) => {
            arr[j][i] = v[i];
        });
    });

    return transpose(arr).map(function(v){
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
    let down = arrayPrep(lock);
    down = shift(down, dots, letters);
    down = arrayPrep(down);
    return down;
}
function shiftUp(lock) {
    let up = arrayPrep(lock);
    up = shift(up, letters, dots);
    up = arrayPrep(up);
    return up;
}

(function (lock, actions) {
    var newLock;
    //transpose(lock);
    actions.split('').map(function(val) {
        newLock = runDir(val, lock);
    });
    console.log(newLock);
})(l, a);