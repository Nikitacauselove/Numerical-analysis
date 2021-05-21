const n = 10;

let X = [];
let Y = [];

generateData("-Math.pow(x, 3) - 2", 0, 1, n);

const f = (x, y) => (3 * Math.pow(x, 2)) / (Math.pow(x, 3) + y + 1);

let yEulerMethod = [-2];
EulerMethod(0, -2, 0, 1, n);

let ySecondOrderMethod = [-2];
secondOrderMethod(0, -2, 0, 1, n);

let yRungeKuttaMethods = [-2];
RungeKuttaMethods(0, -2, 0, 1, n);


new Chart("chart", {
    type: "line",
    data: {
        labels: X,
        datasets: [{
            label: "-x³ - 2",
            borderColor: "#f79533",
            borderWidth: 2,
            data: Y
        }, {
            label: "Euler method",
            borderColor: "#ef4e7b",
            borderWidth: 2,
            data: yEulerMethod
        }, {
            label: "Second order method",
            borderColor: "#1098ad",
            borderWidth: 2,
            data: ySecondOrderMethod
        }, {
            label: "Runge-Kutta methods",
            borderColor: "#07b39b",
            borderWidth: 2,
            data: yRungeKuttaMethods
        }]
    }
});

function generateData(y, i1, i2, n) {
    const h = (i2 - i1) / n;
    let x = i1;
    for (let i = 0; i < n; i++, x += h) {
        X.push(x.toFixed(1));
        Y.push(eval(y));
    }
}

function EulerMethod(x, y, i1, i2, n) {
    const h = (i2 - i1) / n;
    for (let i = 0; i < n; i++, x += h) {
        const k1 = h * f(x, y);
        y = y + k1;
        yEulerMethod[i+1] = y;
    }
}

function secondOrderMethod(x, y, i1, i2, n) {
    const h = (i2 - i1) / n;
    for (let i = 0; i < n; i++, x += h) {
        const k1 = h * f(x, y);
        const k2 = h * f(x + h, y + k1);
        y = y + (1 / 2) * (k1 + k2);
        ySecondOrderMethod[i+1] = y;;
    }
}

function RungeKuttaMethods(x, y, i1, i2, n) {
    const h = (i2 - i1) / n;
    for (let i = 0; i < n; i++, x += h) {
        const k1 = h * f(x, y);
        const k2 = h * f(x + h / 2, y + k1 / 2);
        const k3 = h * f(x + h / 2, y + k2 / 2);
        const k4 = h * f(x + h, y + k3);
        y = y + (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
        ySecondOrderMethod[i+1] = y;
    }
}