const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Calculator health check, express.js'))

// app.get('/math/:operation/:num1/:num2' , function (req, res) {
app.get('/math', function(req,res) {
    var operation = req.query.op;
    var nums = JSON.parse("[" + req.query.nums + "]");
    console.log(nums);
    // var operation = req.params.operation;
	// var n1 = parseFloat(req.params.num1);
    // var n2 = parseArray(req.params.num2);
    var i = 0;
    var result = 0;
    var operationName = 'null'
    switch(operation){
        case 'add':
            for (i = 0; i < nums.length; i++) {
                result += nums[i];
            }
            operationName = 'Addition';
            break;
        case 'sub':
            for (i = 0; i < nums.length; i++) {
                result -= nums[i];
            }
            operationName = 'Subtration';
            break;
        case 'mul': 
            result = nums[0];
            for (i = 1; i < nums.length; i++) {
                result *= nums[i];
            }
            operationName = 'Multiplication';
            break;
        case 'div': 
            result = nums[0];
            for (i = 1; i < nums.length; i++) {
                result /= nums[i];
            }
            operationName = 'Division';
            break;
        default:
            result = 'null';
    }
    res.send(`The result of ${operationName} of these numbers: [${nums}] is equal to ${result}`);
})

app.listen(port, () => console.log(`Calculator app listening at http://localhost:${port}`))
