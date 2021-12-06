$(function(){
    $.ajax({
        url: "/cars",
        method: "get"
    })
    .done(
        function(data){
            data.forEach(function(car){
                $(".cars").append(`
                <article>
                        <h2><a href="/edit?id=${car._id}">${car.name}</a></h2>
                        <div>
                            ${car.brand}<br>
                            ${car.carDescription}<br>
                            ${car.carType}<br>
                        </div>
                        </article>
                `);
            })
        }
    )
    .fail(
        function(err){
            console.log(err.responseText);
        }
    )

    $(".addCar").click(function(){
        $(".addNewCar").toggle();
    })
})