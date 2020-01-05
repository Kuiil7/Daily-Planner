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

//collect adn store user input when clicking the save button and stores to localstorage
$('.saveBtn').on('click', function(){
                      let eventId = $(this).attr('id');
                      let eventText = $(this).parent().siblings().children('.userinbput').val();
                      localStorage.setItem(eventId, eventText);
                     
                    
                  });

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



      

