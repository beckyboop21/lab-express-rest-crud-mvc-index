const express = require("express")
const specialEvents = express.Router()
const specialEventsArray = require("../models/special-event.model")

//routes
specialEvents.get("/", (req, res) => {
    res.json(specialEventsArray)
})



module.exports = specialEvents