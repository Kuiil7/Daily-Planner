
//Setting page to load script on page load   
$(document).ready(function() {

    //setting up an element to hold the current date in the jumbotron using momentsjs
    $("#currentDate").text(moment().format("LLLL"));

    //setting up a loop that correspond to 24 hour format starting from 9hr to 18 hr
    //and begins at 9am and ends at 5pm 
    for (var i = 9; i < 18; i++) {

        // create a row that includes includes the 9 am and 5 pm variable 
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // create a column that includes includes the 9 am and 5 pm variable 
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

        //create column 2 that includes includes the 9 am and 5 pm variable 
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="userinput" placeholder="enter text here..."></textarea>`);

        //create column 3 that includes includes the 9 am and 5 pm variable 
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

        // append col to row that includes includes the 9 am and 5 pm variable 
        row.append(col1, col2, col3);

        // adding appended columns in rows to main content
        $(".main-content").append(row);

        //saving time to local storage
        localStorage.i; 

    }
//Setting up the textarea in red to reflect current time slot in red
    $("textarea").on("click", function(){
    //$(this).css("background-color", "red");
    // return false if there's no text input  
        if($(this).val()==''){
            slotUpdateColor = false;
         } 
//if userinput exist then compare time to current, past, and future data and correesponding classes in time slots using momentsjs
         
function slotUpdateColor(){
    //var slotUpdateColor = true;

    var currentTime = moment();
       //looping through the 9 - 5 timeslots
         for (var i = 9; i < 18; i++){
         //adding a present class if userinput time is current
            if ($(`#${i}`).data("time") == currentTime){
                    $("text${i}").addClass( "present");        
           //the time is ahead of current time then add a future class color to the slot
                }else if (currentTime < $(`#${i}`).data("time")) {
                $("text${i}").addClass( "future");  
            
                }
    }
}


//setting the update colors interval function to change based on the function above
        setInterval(function() {
            slotUpdateColor();
        }, 1000);  
     

//setting up save button to store items from elemtn id and text area values to local storage

var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
   var timeEvent = $(this).attr('id');
   var userInput = $(this).parent().siblings().children('.userinput').val();
   localStorage.setItem(timeEvent, userInput, i);
});});


//preserving entries on page refresh currently not working
window.onload = function() {
localStorage.getItem(`#text${i}`).val();
   }
    
});
// formatting the am pm hours to display in 12 hour format and to show whether am or pm 
function formatAMPM(hours) {
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
}
formatAMPM();

     

      

