const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Calculator health check, express.js'))

/* The GET call with Path Variable Inputs
*
// app.get('/math/:operation/:num1/:num2' , function (req, res) {
    // var operation = req.params.operation
	// var n1 = parseFloat(req.params.num1)
    // var n2 = parseArray(req.params.num2)
*/

/* The GET Call with Query Parameter Inputs
*
// app.get('/math', function(req,res) {
//     var operation = req.query.op
//     var nums = JSON.parse("[" + req.query.nums + "]")
//     console.log(nums)
*/

app.post('/math', function(req, res) {
    var operation = req.body.op;
    var nums = JSON.parse(req.body.nums)
    console.log(operation)
    console.log(nums)
    var i = 0
    var result = 0
    var operationName = 'null'
    switch(operation){
        case 'add':
            for (i = 0; i < nums.length; i++) {
                result += nums[i]
                console.log(nums[i])
            }
            operationName = 'Addition'
            break
        case 'sub':
            for (i = 0; i < nums.length; i++) {
                result -= nums[i]
            }
            operationName = 'Subtration'
            break
        case 'mul': 
            result = nums[0];
            for (i = 1; i < nums.length; i++) {
                result *= nums[i]
            }
            operationName = 'Multiplication';
            break
        case 'div': 
            result = nums[0]
            for (i = 1; i < nums.length; i++) {
                result /= nums[i]
            }
            operationName = 'Division';
            break
        default:
            result = 'null'
    }
    res.send(`The result of ${operationName} of these numbers: [${nums}] is equal to ${result}`)
})

app.listen(port, () => console.log(`Calculator app listening at http://localhost:${port}`))
