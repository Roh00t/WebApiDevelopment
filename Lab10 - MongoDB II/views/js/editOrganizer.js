var organizerId = 0;
$(function () { // This is our so called “ready” function in shorthand
    var urlParams = new URLSearchParams(window.location.search);
    organizerId = urlParams.get('id');

    $.ajax({
        url: "/organizers/" + organizerId,
        method: "get"
    }).done(
        function (data) {
            $('#name').val(data.name);
            $('#company').val(data.company);
            $('#username').val(data.username);
            $('#password').val(data.password);

        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    //Delete Button
    $(".deleteOrganizerbtn").on('click', function () {
        $.ajax(
            {
                url: '/organizers/' + organizerId,
                method: 'delete'
            }
        ).done(
            function (data) {
                alert("Organizer deleted!");
                window.location.href = "/";
            }
        ).fail(
            function (err) {
                console.log(err.responseText);
            }
        );
    });
});


function editOrganizer() {
    console.log("Edit Organizer");
    var organizer = {
        id: organizerId,
        name: $("#name").val(),
        company: $("#company").val(),
        username: $("#username").val(),
        password: $("#password").val(),
    };
    $.ajax(
        {
            url: '/organizers',
            method: 'put',
            data: organizer
        }
    ).done(
        function (data) {
            alert("Organizer updated!");
        }
    ).fail(
        function (err) {
            console.log(err.responseText);
        }
    );
    return false;
}

