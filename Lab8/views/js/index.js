
    $(function () {
        $.ajax({
            url: "/events",
            method: "get"
        })
        .done(
            
            function (data) {
                // console.log(data);
                data.forEach(function(event) {
                    //BACK TICK ` than can type in the html code in
            let showOrganiser = "Not Available"
            if(event.Organiser != undefined){
                showOrganiser = eventOrganiser;
            }
                    $(".events").append(`
            <article>
                <h2>${event.name}</h2>
                <p>
                    ${event.description}<br>
                    Start: ${event.start.date} ${event.start.time}<br>
                    End: ${event.end.date} ${event.end.time}<br>
                    Organiser: ${showOrganiser}<br>
                
                </p>
            </article>`);
        })
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
    })
    $('.addEvent').click(function(){
            $('.addNewEvent').toggle();
             
             if($('.addEvent').text() === "Cancel Add Event"){
             
                $('.addEvent').text("Add new Event");

             }
             else{

                $('.addEvent').text("Cancel Add Event");

                }
            });
    
    
            $.ajax({
                url: "/organisers",
                method: "get"
            })
            .done(
                
                function (data) {
                    data.forEach(function(organiser) {
                        $("#organiser").append(`<option value='${organiser.company}'>${organiser.company}</option>`);
                    });
                }
            )
            .fail(
                function (err) {
                    console.log(err.responseText);
                }
            )
        
        


