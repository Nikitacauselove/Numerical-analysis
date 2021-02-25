const h = Math.PI / 7;
const X = [0.5 * h, 1.5 * h, 2.5 * h, 4.5 * h, 6.5 * h];
const Y = [value(X[0]), value(X[1]), value(X[2]), value(X[3]), value(X[4])];

function basisPolynomial(x, i) {
    let sum = 1;
    for (let j = 0; j < X.length; j++) {
        if (i !== j) {
            sum *= (x-X[j]) / (X[i]-X[j]);
        }
    }
    return sum;
}
function interpolationPolynomial(x) {
    let sum = 0;
    for (let i = 0; i < X.length; i++) {
        sum += Y[i]*basisPolynomial(x, i);
    }
    return sum;
}


/*          Вычисление значений функции sin(x) * sqrt(x) + 1            */

function value(x) {
    return Math.sin(x) * Math.sqrt(x) + 1;
}


/*          Построение графиков          */

functionPlot({
    target: '#basisPolynomial',
    title: 'Basis Polynomial',
    height: 500,
    data: [{
        color: "#f79533",
        graphType: 'polyline',
        fn: function (scope) {
                let x = scope.x;
                return  basisPolynomial(x, 0);
            },
        range: [0, 2 * Math.PI]
        }, {
        color: "#ef4e7b",
        graphType: 'polyline',
        fn: function (scope) {
                let x = scope.x;
                return  basisPolynomial(x, 1);
            },
        range: [0, 2 * Math.PI]
        }, {
        color: "#1098ad",
        graphType: 'polyline',
        fn: function (scope) {
                let x = scope.x;
                return  basisPolynomial(x, 2);
            },
        range: [0, 2 * Math.PI]
        }, {
        color: "#07b39b",
        graphType: 'polyline',
        fn: function (scope) {
                let x = scope.x;
                return  basisPolynomial(x, 3);
            },
        range: [0, 2 * Math.PI]
        }, {
        color: "#6fba82",
        graphType: 'polyline',
        fn: function (scope) {
                let x = scope.x;
                return  basisPolynomial(x, 4);
            },
        range: [0, 2 * Math.PI]
        }
    ]
});
functionPlot({
    target: '#interpolationPolynomial',
    title: 'Interpolation Polynomial',
    height: 500,
    data: [{
        color: '#f37055',
        graphType: 'polyline',
        fn: function (scope) {
                let x = scope.x;
                return  interpolationPolynomial(x);
            },
        range: [0, 2 * Math.PI]
        },
        {
            color: '#a166ab',
            graphType: 'polyline',
            fn: function (scope) {
                let x = scope.x;
                return  value(x);
            },
            range: [0, 2 * Math.PI]
        }
    ]
})