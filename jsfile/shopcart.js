



// Function to show/hide containers
function showContainer(containerId) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
    });

    document.getElementById(containerId).style.display = 'block';
}

// Add click event listeners to the buttons
document.getElementById('cartButton').addEventListener('click', function () {
    showContainer('shopcart');

});

document.getElementById('detailsButton').addEventListener('click', function () {
    showContainer('details');
});

document.getElementById('paymentButton').addEventListener('click', function () {
    showContainer('payment');
});


$(document).ready(function(){
    $('#submitbtn').click(function(){

        var firstname = $('#name').val();
        var lastname = $('#lname').val();
        var Address1 = $('#address').val();
        var DeliveryAddress = $('#delivery').val();
        var PhoneNumber = $('#phone').val();
        var Pincode1 = $('#pincode').val();
        var landmark1 = $('#landmark').val();
        var firstemail = $('#email').val();
        
        if(firstname == ''){
            alert("Please enter first name")
            
        }
        else if(lastname == ''){
            alert("Please enter last name")
            
        }
        else if(Address1 == ''){
            alert("Please enter first address")
            
        }
        else if(DeliveryAddress == ''){
            alert("Please enter Delivery Address")
            
        }
        else if(PhoneNumber == '+91'){
            alert("Please enter Phone Number")
            
        }
        else if(Pincode1 == ''){
            alert("Please enter first Pincode")
            
        }
        else if(landmark1 == ''){
            alert("Please enter Land mark")
            
        }
        else if(firstemail == ''){
            alert("Please enter registered email")
            
        }
        else{
            $('#formsub').submit();
        }

    });
});




function total(){
    var input = document.getElementById('count').value;
    var input1 = document.getElementById('count1').value;
    var totalsums = 40000*input
    var totalsum = 40000*input1

    document.getElementById('total').innerHTML= (totalsums);
    document.getElementById('total1').innerHTML= (totalsum);
}

