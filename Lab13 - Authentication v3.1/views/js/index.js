$(function() {
    var token = sessionStorage.authToken;
    var user = sessionStorage.user;
    // if token is not found, show only unprotected section 
    if(token==undefined) {
        $(".protectedSection").hide();
        $(".unprotectedSection").show();
    } else {  // show the protected section
        $(".protectedSection").show();
        $(".unprotectedSection").hide();
    }
    if(user!=undefined){
        $("#uname").html(user);}

    $(".logoutBtn").on('click',function(){
        $.ajax({
            url: "/logout?token="+sessionStorage.authToken,
            method:"get"
        })
        .done(function(data){
            sessionStorage.removeItem("authToken");
            sessionStorage.removeItem("user");
            location.reload();
        })
        .fail(function(err){
            console.log(err.responseText);
        })
    });
    
});
function login() {  // This function is to be put OUTSIDE the $(document).ready() codes
    var credentials = {
          // get values from the username and password textboxes
        username: $("#username").val(),
        password: $("#password").val()
    }
    $.ajax({  // we make a connection to our login web API to perform a login request
        url:"/login",
        method:"post",
        data:credentials
    })
    .done(function(data){ // if response indicates a successful login
        $(".statusMessage").text(data.message);
  
  //stores the token returned from the server, if successful login
        sessionStorage.authToken=data.token;
        sessionStorage.user = credentials.username;
        // Redirects user to home page, then user is able to see protected view
        location.replace('/');
    })
    .fail(function(err){ // if response indicates an unsuccessful login
        $(".statusMessage").text(err.responseText);
    })
    return false;
}
