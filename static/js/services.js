function openNewWebsiteCreating(e){
    if($('#website_types').css('display') != 'block'){
        if($('#other_services').css('display') == 'none'){
            $('#website_types').css('display', 'block');
        }else{
            $("#other_services").addClass("close_service");
            setTimeout(() => {
                $('#website_types').css('display', 'block');
                $("#other_services").removeClass("close_service");
                $("#other_services").css('display', 'none');
            }, 250);
        }
    }
}

function open_other_services(e){
    if($('#other_services').css('display') != 'block'){
        if($('#website_types').css('display') == 'none'){
            $('#other_services').css('display', 'block');
        }else{
            $("#website_types").addClass("close_website_types");
            setTimeout(() => {
                $('#other_services').css('display', 'block');
                $("#website_types").removeClass("close_website_types");
                $("#website_types").css('display', 'none');
            }, 250);
        }
    }
}
