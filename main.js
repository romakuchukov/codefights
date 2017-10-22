// https://codefights.com/challenge/tuX9NefHfwnPBFZoW
// const l = ["....", "AB..", ".C..", "...."];
// const a = 'RDL';

const letters = (/\w/g);
const dots = (/\./g);

function transpose(a) {
    return Object.keys(a[0]).map((c) => a.map((r) => r[c]));
}
function arrayPrep(mtx) {
    let arr = [[]];
    const matrix = mtx;
    matrix.map((value, indx) => {
        arr[indx] = [];
        value.split('').map((s, i) => {
            arr[indx][i] = value[i];
        });
    });

    return transpose(arr).map((value) => value.join(''));
}
function shift(array, reg1, reg2) {
    let letters;
    let dots;
    return array.map((elm) => {
        letters = elm.match(reg1) ? elm.match(reg1) : [];
        dots = elm.match(reg2) ? elm.match(reg2) : [];
        return letters.concat(dots);
    }).map((elm) => elm.join(''));
}
function run(type, lock) {
    let directions = {
        'R': shiftRight(lock),
        'L': shiftLeft(lock),
        'D': shiftDown(lock),
        'U': shiftUp(lock),
    };
    return directions[type];
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

// secretArchivesLock(l, a);