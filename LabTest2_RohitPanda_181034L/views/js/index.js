$(function() {
    $.ajax({
        url: "/cars",
        method:"get"
    })
    .done(function(data){
        data.forEach(function(car) {
            var article=$("<article class='car'>");
            article.append(`
                <b>${car.model}</b><br><br>
                Rented by: ${car.driverName}<br><br> 
            `);

            if(car.driverName=="") {
                article.append(`<a href='/assignDriver'><button id='${car._id}' class='assignDriverBtn'>Assign Driver</button></a>`);
            }
            $(".cars").append(article);
        });
    
        $(".assignDriverBtn").click(function(e){
            var id=$(e.target).attr('id');
            sessionStorage.setItem("carId",id);
        });
    })
})