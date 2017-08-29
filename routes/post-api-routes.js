var db = require("../models/");

module.exports = function (app) {
    app.post("/event/create", function (req, res) {
        console.log("post req.body:", req.body);

        db.Event.create({
            event_name: req.body.event_name,
            event_location: req.body.event_location,
            event_time: req.body.event_time,
            event_date: req.body.event_date,
            PINvitation: ""
        })
            // pass the result of our call
            .then(function (results) {
                // log the result to our terminal/bash window
                //res.json({ testData: results });
                console.log(results);
            });
    })

    app.post("/user/create", function (req, res) {
        console.log("post req.body:", req.body);

        db.Users.create({
            user_name: req.body.user_name,
            email: req.body.email
            // event_time: req.body.event_time,
            // event_date: req.body.event_date,
            // PINvitation: ""
        })
            // pass the result of our call
            .then(function (results) {
                // log the result to our terminal/bash window
                //res.json({ testData: results });
                console.log(results);
            });
    })








};