const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => res.send('Calculator, express.js'))

app.get('/math/:operation/:num1/:num2' , function (req, res) {
    var operation = req.params.operation;
	var n1 = parseFloat(req.params.num1);
    var n2 = parseFloat(req.params.num2);
    var result = 0;
    var operationName = 'null'
    switch(operation){
        case 'add':
            result = n1 + n2;
            operationName = 'Addition';
            break;
        case 'sub':
            result = n1 - n2;
            operationName = 'Subtration';
            break;
        case 'mul': 
            result = n1 * n2;
            operationName = 'Multiplication';
            break;
        case 'div': 
            result = n1 / n2;
            operationName = 'Division';
            break;
        default:
            result = 'null';
    }
    res.send(`The result of ${operationName} of ${n1} and ${n2} is equal to ${result}`);
})

app.listen(port, () => console.log(`Calculator app listening at http://localhost:${port}`))