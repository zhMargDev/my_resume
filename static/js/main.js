function burgerEvent(e){
    if($(e).css('left') == '10px'){
        // Burger to right
        $(e).removeClass('burger_false');
        $(e).addClass('burger_pressed');

        $('#burger_arrow').addClass('burger_arrow_deg');

        $('.nav_bar').removeClass('nav_bar_to_back');
        $('.nav_bar').addClass('nav_bar_hidden');

        setTimeout(() => {
            $(e).css('left', '105px');
            $('.nav_bar').css('left', '0px');
            $('#burger_arrow').css('rotate', '180deg');
            $('#burger_arrow').removeClass('burger_arrow_deg');
            $('.nav_bar').css('left', '0px');
        }, 950);
    }else if($(e).css('left') == '105px'){
        //Burger to left
        $(e).addClass('burger_false');
        $(e).removeClass('burger_pressed')

        $('#burger_arrow').addClass('burger_arrow_deg_back');

        $('.nav_bar').removeClass('nav_bar_hidden');
        $('.nav_bar').addClass('nav_bar_to_back');

        setTimeout(() => {
            $(e).css('left', '10px');
            $('#burger_arrow').css('rotate', '0deg');
            $('#burger_arrow').removeClass('burger_arrow_deg_back');
            $('.nav_bar').css('left', '-200px');
        }, 950);
    }
}