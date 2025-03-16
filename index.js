require('dotenv').config()
const app = require("express")()
const {json} = require("express")
app.use(json())
const PORT = process.env.PORT || 4500

app.get("/",(req,res)=>{
    res.send(`app is running at port ${PORT}`)
})


app.listen(PORT,()=>{console.log("app is running at port ",PORT)})
