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

// Skriv en ny route, till about sidan
// skapa about sidan, som en njk templat
// på about sidan, ska det finnas en länk till er github,
// en bild och en text om att detta är ett skolarbete

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
    res.send(`tjena ${req.query.name}, ${req.query.message}`)
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
