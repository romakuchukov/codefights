const l = ['....', 'AB..', '.C..', '....'];
const a = 'RDL';

const w = (/\w/gi);
const d = (/\./gi);

const transpose = (m) => {
    return m.map((x, i) => {
        return m.map((x) => {
            return x[i];
        });
    }).map((v) => {
        return v.join('');
    });
}

const shift = (shiftee) => {
    return shiftee.map((s) => {
        return s.match(d).concat(s.match(w));
    }).map((v) => {
        return v.join('');
    });
};

((lock, actions) => {
    const std = transpose(lock);
    const srt = shift(lock);
    console.log(lock);
    console.log(srt);
    console.log(std);
})(l, a);