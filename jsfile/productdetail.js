
$(document).ready(function(){
    $('#imagebtn1').click(function(){
        $('#image1').show();
        $('#image2').hide();
        $('#image3').hide();
        $('#image4').hide();
    });
    $('#imagebtn2').click(function(){
        $('#image1').hide();
        $('#image2').show();
        $('#image3').hide();
        $('#image4').hide();
    });
    $('#imagebtn3').click(function(){
        $('#image1').hide();
        $('#image2').hide();
        $('#image3').show();
        $('#image4').hide();
    });
    $('#imagebtn4').click(function(){
        $('#image1').hide();
        $('#image2').hide();
        $('#image3').hide();
        $('#image4').show();
    });

});

