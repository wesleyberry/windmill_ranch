axios.get('/api/events').then(response => {
    const data = response.data;
    var monthArray = [];
    for(let i = 0; i <= data.length; i++) {
        monthArray.push(data[i].month);
        // console.log(monthArray);
    }
    // console.log(monthArray);
}).catch(err => console.log(err));

$('#submitEvent').on('click', function(e) {
    e.preventDefault();
    var eventName= $('#eventTitle').val();
    var year = $('#year').val();
    var day = $('#day').val();
    var month = $('#month').val();
    var time = $('#time').val();
    var description = $('#eventDesc').val();
    axios.post('/api/events', {
        eventName,
        year,
        day,
        month,
        time,
        description
    }).then(
        () => location.reload()
        )
    .catch(err => console.log(err));
});