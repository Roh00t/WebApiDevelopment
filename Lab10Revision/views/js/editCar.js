var carId = 0;
$(function () { // This is our so called “ready” function in shorthand
    var urlParams = new URLSearchParams(window.location.search);
    carId = urlParams.get('id');

    $.ajax({
        url: "/cars/" + carId,
        method: "get"
    }).done(
        function (data) {
            $('#name').val(data.name);
            $('#brand').val(data.brand);
            $('#carDescription').val(data.carDescription);
            $('#carType').val(data.carType);
        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    //Delete Button
    $(".deleteCarBtn").on('click', function () {
        $.ajax(
            {
                url: '/cars/' + carId,
                method: 'delete'
            }
        ).done(
            function (data) {
                alert("Car deleted!");
                window.location.href = "/";
            }
        ).fail(
            function (err) {
                console.log(err.responseText);
            }
        );
    });
});


    function editCar() {
        var car = {
            id: carId,
            name: $("#name").val(),
            brand: $("#brand").val(),
            carDescription: $("#carDescription").val(),
            carType: $("#carType").val()
        };
        $.ajax(
            {
                url: '/cars',
                method: 'put',
                data: car
            }
        ).done(
            function (data) {
                alert("Car updated!");
            }
        ).fail(
            function (err) {
                console.log(err.responseText);
            }
        );
        return false;
    }

