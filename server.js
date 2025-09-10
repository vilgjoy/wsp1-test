import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res, next) => {
    res.send("Hello world!")
})


app.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "about sidan",
        github: "https://github.com/vilgjoy/wsp1-test",
        message: "arbetet hitter man på github med kuben",
        image: "/images/pexels-simon73-1323550.jpg"
    })
})


app.get("/index", (req, res) => {
    res.render("index.njk", {
        title: "vår första dyna sida",
        message: "nunjucks, more like"
    })
})

// En query parameter är en del av en webbadress (URL) som används för att skicka extra information till servern.
// Exempel nedan är en route some tar emot två query parameters, name och message.
// så för att använda message och name så efter localhost:3000/ skriver vi:
// /greeting (för att komma till rätt route) ?name=(vad som helst)&message=(vad som helst)

app.get("/greeting", (req, res) => {
    console.log(req.query)
    res.render("greeting.njk", {
        title: "hälsningsida",
        name: req.query.name,
        message: req.query.message
    })
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Någonting gick fel");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
