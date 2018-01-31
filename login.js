window.fbAsyncInit = function() {
    FB.init({
        appId : '1553429251377554',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.11'
    });
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function statusChangeCallback(response) {
    if(response.status === 'connected') {
        console.log("Ok");
    } else {
        console.log("No");
    }
}
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    }, {scope: 'email,public-profile'});
}
//
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            // getFbUserData();
            document.getElementById('status').innerHTML = 'User logedin';
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email,public-profile'});
}
