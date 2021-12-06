$(function(){
    $.ajax({
        url: "/dealerships",
        method: "get"
    })
    .done(
        function(data){
            if(data.length>0){
                $(".dealershipsSection").show();
            }
            data.forEach(function(dealership){
                $(".dealershipList").append(`<li><a href="/dealership/edit?id=${dealership._id}">${dealership.name} from ${dealership.address}</a></li>`)
            });
        }
    )
    .fail(
        function(err){
            console.log(err.responseText);
        }
    )
});