const l = 1;
const n = 10;
const h = l / (n - 1);

let X = [];
let Y = [];
let Y1 = [];
let Y2 = [];

const f = (x) => x + Math.exp(-x) - Math.exp(-1);

function tridiagonalMatrixAlgorithm(D1) {
    let A = [0], B = [1], C = [1], D = [D1];

    for (let i = 1; i < n; i++) {
        A[i] = 2 - h;
        B[i] = 4;
        C[i] = 2 + h;
        D[i] = 2 * Math.pow(h, 2);
    }

    A[n-1] = 0;
    B[n-1] = -1;
    C[n-1] = 0;
    D[n-1] = 1;

    let al = [1], bet = [0], frac = null;

    for (let i = 0; i < n; i++) {
        frac = B[i] - al[i] * A[i];
        al[i+1] = C[i] / frac;
        bet[i+1] = (A[i] * bet[i] - D[i]) / frac;
    }

    let u = [];
    u[n-1] = 1;

    for (let i = n - 1; i > 0; i--) {
        u[i-1] = al[i] * u[i] + bet[i];
    }

    return u;
}


let u1 = tridiagonalMatrixAlgorithm((1 / 2) * Math.pow(h, 2));
let u2 = tridiagonalMatrixAlgorithm(0);
let x = 0;

for (let i = 0; i < n; i++, x += h) {
    X[i] = x.toFixed(3);
    Y1[i] = u1[i].toFixed(3);
    Y2[i] = u2[i].toFixed(3);
    Y[i] = f(x).toFixed(3);
}

new Chart("chart", {
    type: 'line',
    data: {
        labels: X,
        datasets: [{
            label: "D₁ = h² / 2",
            borderColor: '#f79533',
            borderWidth: 2,
            data: Y1
        }, {
            label: "D₁ = 0",
            borderColor: '#ef4e7b',
            borderWidth: 2,
            data: Y2,
        }, {
            label: "x + e^(-x) - e^(-1)",
            borderColor: '#1098ad',
            borderWidth: 2,
            data: Y,
        }]
    }
});