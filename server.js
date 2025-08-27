import express from "express"

const app = express()


app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/about", (req, res) => {
    res.json({
        "message": "Hatisk textbox"
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
