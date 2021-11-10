$(function () {
    $.ajax({
        url: "/organisers",
        method: "get"
    })
    .done(
        
        function (data) {
            if(data.length>0){
                $(".organisersSection").show();
            }
            data.forEach(function(organiser) {
                $(".organiserList").append(`<li> ${organiser.name} from ${organiser.company}</li>`);
            });
        }
    )
    .fail(
        function (err) {
            console.log(err.responseText);
        }
    )
})


