
document.getElementById("login_form").addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById("username").value; 
    const password = document.getElementById("password").value;

    console.log(`Login Data submitted! Username: ${username}`)
}); 