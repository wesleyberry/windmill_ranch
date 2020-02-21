axios.get('api/events').then(response => {
    // Gets events from API
    const results = response.data;
    var newArray = [];
    for(let i = 0; i < results.length; i++) {
        var month = results[i].month;
        switch(month) {
            case 0:
                month = 12;
                break;
            case 1:
                month = 0;
                break;
            case 2:
                month = 1;
                break;
            case 3:
                month = 2;
                break;
            case 4:
                month = 3;
                break;
            case 5:
                month = 4;
                break;
            case 6:
                month = 5;
                break;
            case 7:
                month = 6;
                break;
            case 8:
                month = 7;
                break;
            case 9:
                month = 8;
                break;
            case 10:
                month = 9;
                break;
            case 11:
                month = 10;
                break;
            case 12:
                month = 11;
                break;
        }
        newArray.push({
            event: results[i].event,
            description: results[i].description,
            date: new Date(results[i].year, month, results[i].day, results[i].start, results[i].startMinutes),
            startM: results[i].startMinutes,
            time: 0
        });
    }
    // Sorts by Date
    newArray.sort(function(a, b) {
        return a.date - b.date;
    });

    // Creates Date and Time Separately
    var peri;
    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i].startM === 0) {
            newArray[i].startM = '00';
        }
        if(newArray[i].date.getHours() > 0 && newArray[i].date.getHours() < 13) {
            peri = 'AM';
        } else {
            peri = 'PM';
        }
        newArray[i].time = (((newArray[i].date).getHours() + 24) % 12 || 12) + ':' + (newArray[i].startM).toString() + " " + peri;
    }
    // Map to Screen
    for(let i = 0; i < newArray.length; i++) {
        $('.eventsGoHere').append(
            `<div class="row singleRowList">
                <div class="col-xs-12 col-md-4 col-lg-3 listDates">
                    <p>${(newArray[i].date.toDateString())}</p>
                    <p>${newArray[i].time}</p>
                </div>
                <div class="col-xs-12 col-md-8 col-lg-9 listDescription">
                    <h1 style="color: white; font-weight: 600;">${newArray[i].event}</h1>
                    <p>${newArray[i].description}</p>
                </div>
            </div>`
        )
    }
});