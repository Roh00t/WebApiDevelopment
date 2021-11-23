$(function() {
    $.ajax({
        url: "/patients",
        method: "get"
    })
        .done(
            function (data) {
                data.forEach(function (patient) {
                    $(".patients").append(`
                    <tr>
                        <td>${patient.name}</td>
                        <td>${patient.nric}</td>
                        <td>${patient.contactNum}</td>
                        <td>${patient.bedNum}</td>

                    </tr>
                    `);
                });
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
});



