console.log("Hello Mustali")
let username = document.getElementById('username')
let password = document.getElementById('password')
let btn = document.getElementById('submit')

function granted ()
{
    if (username.value == "Mustali07" && password.value == "Mustali07")
    {
        window.location.href = "admin-page.html";
    }
    else 
    {
        alert("Incorrect username or password");
    }
}
btn.addEventListener('click', function(event) 
{
    event.preventDefault(); 
    granted();
});
