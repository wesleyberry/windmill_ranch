axios.get('api/events').then(response => {
    const results = response.data;
    for(var i = 0; i < results.length; i++) {
        var month = results[i].month;
        switch(month) {
            case 1:
                month = 'January';
                break;
            case 2:
                month = 'February';
                break;
            case 3:
                month = 'March';
                break;
            case 4:
                month = 'April';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'June';
                break;
            case 7:
                month = 'July';
                break;
            case 8:
                month = 'August';
                break;
            case 9:
                month = 'September';
                break;
            case 10:
                month = 'October';
                break;
            case 11:
                month = 'November';
                break;
            case 12:
                month = 'December';
                break;
        }
        $('#eventsGoHere').append(
            `<tr>
                <th scope="row">${results[i].event}</th>
                <td>${month} ${results[i].day}, ${results[i].year}</td>
                <td>
                    <button type="button" class="btn btn-danger eventDelete" id=${results[i].id}>X</button>
                </td>
            </tr>`
        )
    }
}).catch(err => console.log(err));

$('#submitEvent').on('click', function(e) {
    e.preventDefault();
    var eventName= $('#eventTitle').val();
    var year = $('#year').val();
    var day = $('#day').val();
    var month = $('#month').val();
    var description = $('#eventDesc').val();
    var start = $('#startTime').val();
    var startP = $('#startP').val();
    var end = $('#endTime').val();
    var endP = $('#endP').val();
    var startMinutes = $('#startMinutes').val();
    var endMinutes = $('#endMinutes').val();
    if(start > 0 && start < 13) {
        startP = 'AM';
    } else {
        startP = 'PM';
    }
    if(end > 0 && end < 13) {
        endP = 'AM';
    } else {
        endP = 'PM';
    }
    axios.post('/api/events', {
        eventName,
        year,
        day,
        month,
        start,
        startP,
        end,
        endP,
        startMinutes,
        endMinutes,
        description
    }).then(
        () => location.reload()
        )
    .catch(err => console.log(err));
});

$(document).on('click', '.eventDelete', function() {
    const id = this.id;
    axios.delete('/api/events' + id, (req, res) => {})
    .then(location.reload())
    .catch(err => console.log(err));
});