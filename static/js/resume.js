document.addEventListener("DOMContentLoaded", function(event){
    setTimeout(() => {
        $('#second_box').addClass('box_hidden_animation');
    }, 1000);

    setTimeout(() => {
        $('#third_box').addClass('box_hidden_animation');
    }, 2000);

    setTimeout(() => {
        $('#forth_box').addClass('box_hidden_animation');
    }, 3000);
})