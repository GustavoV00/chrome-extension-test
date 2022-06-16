const express = require("express")
const fs = require("fs")
const { Console } = require("console")

const myLogger = new Console({
  stdout: fs.createWriteStream("logs/tabs.txt"),
  stderr: fs.createWriteStream("logs/error.txt"),
});

const app = express()
const PORT = 8080

const cors = require("cors")

app.use(cors({ origin: "*" }))

// middleware to access request body
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.get("/", (req, res) => {
  res.send("server running")
})

app.post("/tabs", async (req, res) => {
  console.log(req.body)
  const tabs = req.body
  writeTabsToAFile(tabs)
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})



// Some utils functions
/* --------------------------------------------- */
function writeTabsToAFile(tabs) {
  const data = tabs.join(', ')
  console.log(data)
  try {
    myLogger.log(data)
  } catch (error) {
    myLogger.error("Error on save tabs")
  }
}
