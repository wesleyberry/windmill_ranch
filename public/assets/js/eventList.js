axios.get('/api/events').then(response => {
    const data = response.data;
    var monthArray = [];
    for(let i = 0; i <= data.length; i++) {
        monthArray.push(data[i].month);
        console.log(monthArray);
    }
    console.log(monthArray);
}).catch(err => console.log(err));