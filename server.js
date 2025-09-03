import express from "express"
import nunjucks from "nunjucks"

const app = express()


app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res, next) => {
    res.send("Hello world!")
})

// Skriv en ny route, till about sidan
// skapa about sidan, som en njk templat
// på about sidan, ska det finnas en länk till er github,
// en bild och en text om att detta är ett skolarbete

app.get("/about", (req, res) => {
    res.render("index.njk", {
        title: "vår första dyna sida",
        message: "nunjucks, more like"
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
