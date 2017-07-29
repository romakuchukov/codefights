//https://codefights.com/challenge/tuX9NefHfwnPBFZoW
const l = ["....", "AB..", ".C..", "...."];
const a = 'RDL';

const letters = (/\w/g);
const dots = (/\./g);

function transpose(a) {
    return Object.keys(a[0]).map((c) => a.map((r) => r[c]));
}
function arrayPrep(mtx) {
    let arr = [[]];
    const M = mtx;
    M.map((v, j) => {
        arr[j] = [];
        v.split('').map((s, i) => {
            arr[j][i] = v[i];
        });
    });

    return transpose(arr).map((v) => v.join(''));
}
function shift(arr, reg1, reg2) {
    let W;
    let D;
    return arr.map((elm) => {
        W = elm.match(reg1) ? elm.match(reg1) : [];
        D = elm.match(reg2) ? elm.match(reg2) : [];
        return W.concat(D);
    }).map((elm) => elm.join(''));
}
function run(type, lock) {
    let snacks = {
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

function secretArchivesLock(lock, actions) {
    let newLock = lock;
    actions.split('').map((val) => {
        newLock = run(val, newLock);
    });
    console.log(newLock);
    return newLock;
}

secretArchivesLock(l, a);