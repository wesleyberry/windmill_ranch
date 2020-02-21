$('#submitMessage').click(e => {
    e.preventDefault();

    // Front end for messages
    const name = $('#name').val();
    const email = $('#emailAddress').val();
    const subject = $('#subject').val();
    const message = $('#message').val();
    if(name && email && subject && message) {
        axios.post('/api/messages/', {
            name,
            email,
            subject,
            message
        }).then((response) => {
            if (response.data === 200) {
                $('form :input').val('');
                alert("Your email has been sent!");
            } else {
                alert("There was a problem sending your email");
            }
        })
        .catch(err => console.log(err));
    } else {
        alert("Please fill out all fields");
    }
});