var Datastore = require('nedb'), 
    db = new Datastore({
    filename:"mydata.db",
    autoload:true
    })

var express = require('express')
var app = express()
function print (message) {
console.log(message)
}
var port = 3000
app.listen(port || process.env.PORT, () => {
print("listening at port 3000")
})
app.use(express.static("client"))
app.use(express.json())
app.post('/comments', (req, res) => {
    db.insert(req.body, function (err, doc) {
        console.log("Data sent");
    });
    print(req.body)
})
app.get('/api', function(request, response) {
    db.find({}, function (err, data) {
        if (err) {
            console.log("Error!!!!")
            return;
        }
        response.json(data)
    })


})