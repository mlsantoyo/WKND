

// // //Dependencies
// // var express = require("express");
// // var router = express.Router();
// // var db = require("../models/");

// /////events/////
// //Note: the below may be optional as it is returning the information...
// // router.get("/events", function(req, res){
// //     db.events.findAll()
// //     .then(function(wknd){
// //         var hbsObject = { event: wknd };
// //         return res.render("event", hbsObject);
// //     });
// // });

// //The below will take the information from the events page and update it in the database.
// $(document).ready(function(){
//     var eventName = $("#eventName");
//     var locationName = $("#locationName");
//     var eventDate = $("#eventDate");
//     var eventTime = $("#eventTime");
//     var locationAddress = $("#locationAddress");
//     $(document).on("submit","#saveEvent", handleEventFormSubmit);

//     function handleEventFormSubmit(event){
//         event.preventDefault();
//         if (!eventName.val().trim()){
//             return;
//         }
//         upsertEvent({
//             event_name: eventName,
//             location_name: locationName,
//             event_date: eventDate,
//             event_time: eventTime,
//             location_address: locationAddress
//         })
//     }

//     function upsertEvent(eventData){
//         $.post("/api/events", eventData)
//             .then(getEvent);
//     }
// })

// /////guest/////
// //The below will modify the boolean value for whether or not someone is attending an event.
// $(document).ready(function(){
//     //NOTE: we need to add ID to the accept
//     var attending = $("#confirmAttending");
//     //NOTE: we need to discuss what buttons we will be using for this.
//     $(document).on("select", "#confirmAttendence", handleAttendingFormSubmit);

//     function handleAttendingFormSubmit(event){

//         updateAttending({
//             attending: true
//         })

//     // function updateAttending(guestData){
//     //     $.post()
   
//  }
// });

// /////user/////
// //The below will take the information from the user entered data and put it into the mysql database
// $(document).ready(function(){
//     //NOTE: grab correct input IDs when we meet.
//     var userName = $("#userName");
//     var email = $("#email");
//     var mobileNumber = $("#mobileNumber");
//     //NOTE: grab correct submit ID.
//     $(document).on("submit",".btn btn-primary", handleUserFormSubmit);

//     function handleUserFormSubmit(event){
//         event.preventDefault();
//         if (!userName.val().trim()){
//             return;
//         }
//         upsertUser({
//             user_name: userName,
//             email: email,
//             mobile_number: mobileNumber,
//         })
//     }

//     function upsertUser(userData){
//         $.post("/api/user", userData)
//             .then(getUser);
//     }
// });

// /////Comments/////
// //The below code will route the comments and post them to the page
// $(document).ready(function(){
//     var nameInput = $("#userName");
//     var commentBody = $("#commentBody")
//     var commentForm =("#commentForm");
//     $(commentForm).on("submit", handleCommentSubmit);

//     function handleCommentSubmit(event) {
//         event.preventDefault();
//         if (!nameInput.val().trim() || !commentBody.val().trim()){
//             return;
//         }
//         upertNewComment({
//             name: userName,
//             comment_body: commentBody
//                 .val()
//                 .trim()
//         })

//         function upsertNewComment(commentsData){
//             $.post("api/comments", commentsData)
//                 .then(getComments);
//         }

//     };
//     //Building the comment section
//     function getComments(){
//         $.get("/api/comments", renderCommentList);
//     }
//     function renderCommentList(data) {
//         if(!data.length){
//             window.location.href = "/comments";
//         }
//         $(".hidden").removeClass("hidden");
//         var rowsToAdd = [];
//         for (var i = 0; i < data.length; i++) {
//             rowsToAdd.push(createCommentsList(data[i]));
//         }
//         commentSelect.empty();
//         commentSelect.append(rowsToAdd);
//         commentSelect.val(userName);
//     }
// })
















// // // export
// // module.exports = router;

//////////////////////////////////////////////////////////
var express = require("express");
var router = express.Router();
var db = require("../models/");
// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/");
});

// // get route, edited to match sequelize
// router.get("/burgers", function(req, res) {
//   // replace old function with sequelize function
//   db.Burger.findAll()
//     // use promise method to pass the burgers...
//     .then(function(dbBurger) {
//       console.log(dbBurger);
//       // into the main index, updating the page
//       var hbsObject = { burger: dbBurger };
//       return res.render("index", hbsObject);
//     });
// });

// post route to create an event
router.post("/event/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Event.create({
    event_name: "test"
  })
    // pass the result of our call
  .then(function(dbBurger) {
      // log the result to our terminal/bash window
    console.log(dbBurger);
      // redirect
    res.redirect("/");
  });
});


router.post("/user/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Users.create({
    user_name: "test"
  })
    // pass the result of our call
  .then(function(dbBurger) {
      // log the result to our terminal/bash window
    console.log(dbBurger);
      // redirect
    res.redirect("/");
  });
});


// // put route to devour a burger
// router.put("/burgers/update", function(req, res) {
//   // update one of the burgers
//   db.Burger.update({
//     devoured: true
//   },
//     {
//       where: {
//         id: req.body.burger_id
//       }
//     }
//   ).then(function(dbBurger) {
//     res.redirect("/");
//   });
// });

module.exports = router;