$('#submitCredentials').on('click', function() {
    // Login
    event.preventDefault();
    var name = $('#exampleInputEmail1').val();
    var password = $('#exampleInputPassword1').val();
    axios.post('/api/users', {
        name,
        password
    }).then(response => {
        if(response.status === 200) {
            location.href = '/admin';
        } 
    })
    .catch(() => alert(
        `Username and Password do not match our credentials. 
Please Try Again`
        ));
});

// Logout
$('#logout').on('click', function() {
    event.preventDefault();
    axios.get('/logout/')
    .then(() => window.location.assign('/login'))
    .catch(err => console.log(err));
});

// Checks to see if user exists in DB
function checkDB() {
    axios.post('/api/users/checkDB', {})
    .then(() => console.log(200))
    .catch(() => console.log(''));
}

checkDB();
