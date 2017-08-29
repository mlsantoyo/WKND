

 var currentURL = window.location.origin;
 console.log(currentURL);
 $.ajax({ url: currentURL + "/api", method: "GET" })
 .done(function(results) {
        // Here we are logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/all");
        console.log("------------------------------------");
        // Here we then log the NYTData to console, where it will show up as an object.
        console.log(results);


        for (var i = 0; i < results.yelpData.length; i++) {
          // console.log("results:", results.yelpData[i].name);
          // console.log("imgLink:", results.yelpData[i].image_url);
          // console.log("results:", results.yelpData[i].location);


          console.log(results.yelpData[0].name);

          function appendText() {
            
            // var newDiv= $('<div class = "col-lg-4 col-sm-6" id="imgdiv'+i+'">').addClass("thumbnail").addClass("col-sm-6 col-md-4");
            var newDiv = $('<div id="imgdiv'+i+'">').addClass("thumbnail").addClass("col-sm-6 col-md-4");
            // var newDiv= $('<div class = "col-lg-4 col-sm-6"  id="imgdiv'+i+'">');
            var newPara = "<h4 class='myHeader'>"+results.yelpData[i].name+"</h4>";
            var newEvent = $('<img>').addClass("pic");
            var locationAddy = "<p class ='location'>"+results.yelpData[i].location.display_address+"</p>";
            var button = '<button type="button" class="btn btn-primary" id ="testBtn'+i+'" >Create Event</button>';

            newEvent.attr("src", results.yelpData[i].image_url);

            newEvent.addClass("eventImage");
            
            $(newPara).appendTo(newDiv);
            $(newEvent).appendTo(newDiv);
            $(locationAddy).appendTo(newDiv);
            $(button).appendTo(newDiv);
            $("#events").append(newDiv)

          }

          appendText();
        }
      });


console.log('hello');

var mytext = 'hello';

function CreateEvent (place, location) {
  this.place = place;
  this.location = location;
}

var concatLoca;
var concatPlace;

var currentURL = window.location.origin;

  $(document).on('click','.btn-primary',function(){
    //console.log(currentURL);
    var testID = (this.id);
    console.log(testID);
    var lastFive = testID.substr(testID.length - 3); // => "Tabs1"
    var lastChar = testID.substr(testID.length - 1);
    //console.log(lastChar);
    var word = lastChar;
    var concatPlace= $('#imgdiv'+word+' h4.myHeader').html();
    var concatLoca = $('#imgdiv'+word+' p.location').html();
    var concatImg = $('#imgdiv'+word+' img.eventImage').attr('src');
    console.log("concatimg:"+ concatImg);
    console.log(concatPlace);
    console.log(concatLoca);
    var myEvent = new CreateEvent(concatPlace, concatLoca);
    console.log(myEvent);
    var test = 'test';


    var newPara = "<h4 class='modalBody' name = 'eventName'>"+concatPlace+"</h4>";
    var newParaLoca = "<h3 class='modalBody'>"+concatLoca+"</h4>";

    var newPara = "<h4 class='modalBody'>"+concatPlace+"</h4>";
    var newParaLoca = "<h3 class='modalBody'>"+concatLoca+"</h3>";

    var newEvent = $('<img class="modalImg">');
    newEvent.attr('src', concatImg);

    $('.modal-body').empty();
    $('.modal-body2').empty();
    $('.modal-body').append(newPara);
    $('.modal-body').append(newParaLoca);
    $('.modal-body').append(newEvent);
    
  $('#myModal').modal('show')

});

  console.log(concatPlace);


function scroll(){
  $('html, body').animate({
    scrollTop: $("#scrollDiv").offset().top
}, 1000);
};

// $('button#copySave').on('click', function(){
  
// });

$(document).on('click','#copySave',function(){
  //alert('je');
  var dbPlace = $('div.modal-body h4.modalBody').html()
  var dbLoca = $('div.modal-body h3.modalBody').html()
  var dbTime = $('#locationName').val();
  var dbDate = $('#eventDate').val();
  // alert(dbPlace);
  // alert(dbLoca);
  // alert(dbTime);
  // alert(dbDate);

  var newText = ("Hey, one of your friends is using the app wknd website and wants to tell you that your invited to " +dbPlace+ " on " +dbDate+ " at " + dbTime + " located at: " + dbLoca+ " Use pin: '406345' to access group!" );
  $('.modal-body2').append(newText);


  $.post("/event/create", //Required URL of the page on server
  { // Data Sending With Request To Server
    event_name: dbPlace,
    event_location: dbLoca,
    event_time: dbTime,
    event_date: dbDate
  },
  function (response, status) { // Required Callback Function      
    console.log("response:", response);
  });

});

$(document).on('click','#pinBtn',function(){
  //alert('je');
   var dbUserName = $('input#userName').val();
   //alert(dbUserName);
  var dbEmail = $('input#userEmail').val();
  //alert(dbEmail);
   var dbCell = $('input#userCell').val();
   //alert(dbCell);
  // var dbDate = $('#eventDate').val();
  // alert(dbPlace);
  // alert(dbLoca);
  // alert(dbTime);
  // alert(dbDate);
  $.post("/user/create", //Required URL of the page on server
  { // Data Sending With Request To Server
    user_name: dbUserName,
    email: dbEmail,
    mobile_number: dbCell
    // event_date: dbDate
  },
  function (response, status) { // Required Callback Function      
    console.log("response:", response);
  });

});






//console.log('GVT:'+ concatPlace)










// appendText();