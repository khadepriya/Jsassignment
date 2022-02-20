var name, email, mobile, state;

name = document.getElementById("name").form_name.value
email = document.getElementById("email").form_email.value
mobile = document.getElementById("mobile").form_mobile.value
state = document.getElementById("state").form_state.value

function req() {
if (name=="" && email=="" && mobile=="" && state=="") {
    alert("Please fill all fields", "Message");
    return false;
}}