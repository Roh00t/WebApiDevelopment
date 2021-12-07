const { getAvailableDrivers } = require("../../services/dataservice");

$(function () {
    var carId = sessionStorage.getItem("carId");
    $.ajax(
        {
            url: '/drivers',
            method: 'get'
        }
    ).done(function (data) {
        data.forEach(function (driver) {
            $("#driverSelection").append(`<option value='${driver.name}'>${driver.name}</option>`);
        })
    }).fail(function (err) {
        console.log(err.responseText);
    });
    $(".assignExistingDriverBtn").on("click", () => {
        var driverName = $("#driverSelection").val();
        $.ajax(
            {
                url: '/assignDriver',
                method: 'put',
                data: { carId: carId, driverName: driverName }
            }
        ).done(function (data) {
            $(".statusMessage").text(data);
        }).fail(function (err) {
            console.log(err.responseText);
        });
    });
})