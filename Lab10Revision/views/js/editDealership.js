var dealershipId = 0;
$(function () { // This is our so called “ready” function in shorthand
    var urlParams = new URLSearchParams(window.location.search);
    dealershipId = urlParams.get('id');

    $.ajax({
        url: "/dealerships/" + dealershipId,
        method: "get"
    }).done(
        function (data) {
            $('#name').val(data.name);
            $('#address').val(data.address);
            $('#username').val(data.username);
            $('#password').val(data.password);

        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    //Delete Button
    $(".deleteDealershipBtn").on('click', function () {
        $.ajax(
            {
                url: '/dealerships/' + dealershipId,
                method: 'delete'
            }
        ).done(
            function (data) {
                alert("Dealership deleted!");
                window.location.href = "/";
            }
        ).fail(
            function (err) {
                console.log(err.responseText);
            }
        );
    });
});


function editDealership() {
    console.log("Edit Dealership");
    var dealership = {
        id: dealershipId,
        name: $("#name").val(),
        company: $("#address").val(),
        username: $("#username").val(),
        password: $("#password").val(),
    };
    $.ajax(
        {
            url: '/dealerships',
            method: 'put',
            data: dealership
        }
    ).done(
        function (data) {
            alert("Dealership updated!");
        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    return false;
}

