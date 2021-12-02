$(function() {
    $.ajax({
        url: "/organizers",
        method: "get"
    })
        .done(
            function (data) {
                if(data.length>0) {
                    $(".organizersSection").show();
                }
                data.forEach(function (organizer) {
                    $(".organizerList").append(`<li><a href="/organizer/edit?id=${organizer._id}">${organizer.name} from ${organizer.company}</a></li>`);
                });
               
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
})