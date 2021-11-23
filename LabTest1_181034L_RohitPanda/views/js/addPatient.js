$(function() {
    $.ajax({
        url: "/patients",
        method: "get"
    })
        .done(
            function (data) {
                if(data = "Unavailable") {
                    $("#bedNum").hide();
                }data.forEach(function (status) {
                    $("#bedNum").prepend(`<option></option>`);
                });
                
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
})