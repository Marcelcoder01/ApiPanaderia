const app = require("./app")

app.listen(app.get("port"), function(){
    console.log("SERVER RUNNING on port " + app.get("port"))
})