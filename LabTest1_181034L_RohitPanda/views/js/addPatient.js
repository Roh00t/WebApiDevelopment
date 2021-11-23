$(function() {
    $.ajax({
        url: "/avabed",
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function (status) {
                    if(status.status=="Available"){
                        $("#bedNum").append(`<option value="${status.number}">${status.number}</option>`);
                    }
                    
                });
                
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
})