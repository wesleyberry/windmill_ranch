function addNav(activeNum) {
    $('<a>').attr('href', './index.html').addClass('navbar-brand').appendTo('#navbar');
    $('<img>')
        .attr({ 'id': 'logo', 'src': './assets/images/Logo.png', 'alt': 'Windmill Ranch Logo' })
        .addClass('d-inline-block align-top')
        .appendTo('.navbar-brand');
    $('<button>')
        .addClass('navbar-toggler')
        .attr({ 'type': 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' })
        .appendTo('#navbar');
    $('<span>').addClass('navbar-toggler-icon').appendTo('.navbar-toggler');
    $('<div>').addClass('collapse navbar-collapse').attr('id', 'navbarNav').appendTo('#navbar');
    $('<ul>').attr('id', 'navbar-list').addClass('navbar-nav ml-auto').css({ 'margin-left': 'auto', 'margin-right': '40px' }).appendTo('.collapse');

    const pages = ['Home', 'Casitas', 'The Ranch', 'Area Offerings', 'Contact'];
    const paths = ['./index.html', './casitas.html', './ranch.html', './area-offerings.html', './contact.html'];
    pages.forEach((page, idx) => {
        $('<li>').attr('id', `nav-list-item-${idx}`).addClass(`nav-item`).appendTo('#navbar-list');
        $('<a>')
            .attr({ 'href': paths[idx], 'role': 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' })
            .html(page)
            .addClass(`nav-link ${idx === activeNum ? 'active': ''}`)
            .appendTo(`#nav-list-item-${idx}`);
    });
    $('<li>').attr('id', 'nav-btn-airbnb').addClass('nav-item').appendTo('#navbar-list');
    $('<a>')
        .attr({ 'href': 'https://www.airbnb.com/rooms/37092630?source_impression_id=p3_1571845889_d0irCvUKXRa3Wv0F', 'target': '_blank', 'rel': 'noopener' })
        .appendTo('#nav-btn-airbnb');
    $('<button>').text('Book Now').attr({ 'type': 'button' }).addClass('btn btn-primary bookButton').appendTo('#nav-btn-airbnb a')
}