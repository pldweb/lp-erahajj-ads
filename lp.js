function displayInformasi(t) {
    if (isBreakpoint('lg') || isBreakpoint('md')) {
        return false;
    }

    var link = $(t).attr('href');
    var title = $(t).find('div.feature-title').html();
    var konten = $(link).find('.benefit-container').html();
    modalAlert(title, konten);
}

function frontResponsiveToggler() {
    var navbar = $('#main-top-navbar');
    var state = $(navbar).attr('class');
    if (state.indexOf('responsive-open') === -1) {
        $(navbar).addClass('responsive-open');
    } else {
        $(navbar).removeClass('responsive-open');
    }
}

function closeResponsiveMenu() {
    $('#main-top-navbar').removeClass('responsive-open');
}

$(document).ready(function () {
    $(document).on('click', 'a.internal-link[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 1000);
    });
});

