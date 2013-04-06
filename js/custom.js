//get address from google

$(document).ready(function()
{
	
	var Navlat;
	var Navlong;
	var dataString;
	navigator.geolocation.getCurrentPosition( function (position) {
	console.log("Navlat:"+position.coords.latitude);
	Navlat=position.coords.latitude;
	Navlong=position.coords.longitude;
	console.log("Navlong:"+position.coords.longitude);
	dataString='sensor=false&language=en&latlng='+Navlat+','+Navlong;
	console.log("Geo:"+dataString);
	//alert(dataString);
	$.ajax
	({
		type: "GET",
		url: "http://maps.googleapis.com/maps/api/geocode/json",
		data: dataString,
		cache: false,
		success: function(html)
		{
			var adrs='';
			var cty='';
			var sta='';
			var ctry='';
			var zipco='';
	 		$.each(html.results[0].address_components, function (index, add) {
			/*var spnCustomer =$('<a href=\'mailto:'+add.types[0]+'\'>'+add.long_name+' ['+add.short_name+']</a><br/>');
			$('body').append(spnCustomer);*/
			if(add.types[0]=='street_number' || add.types[0]=='route' || add.types[0]=='sublocality')
			{
				adrs+=add.long_name+', ';
			}
			if(add.types[0]=='locality')
			{
				cty=add.long_name;
			}
			if(add.types[0]=='administrative_area_level_1')
			{
				sta=add.short_name;
			}
			if(add.types[0]=='country')
			{
				ctry=add.short_name;
			}
			if(add.types[0]=='postal_code')
			{
				zipco=add.long_name;
			}
		 	});
			$('#PickupAddress').val(adrs);
 			$('#DropoffAddress').val(adrs);
			$('#PickupCity').val(cty);
			$('#DropoffCity').val(cty);
			$('#PickupZipCode').val(zipco);
			$('#DropoffZipCode').val(zipco);
			$('#DropoffStateCode').val(sta).trigger('change');
			$('#PickupStateCode').val(sta).trigger('change');
			$('#DropoffCountryName').val(ctry).trigger('change');
			$('#PickupCountryName').val(ctry).trigger('change');
			
			
		/*alert(html.results[0].formatted_address);
		console.log("Result:"+html[0]);
		$('#uurl').html(html); */
		}
	});
  });
});


//step wise validation starts
  var prevLink = '<a class="prev" href="#" data-role="button" data-inline="true" data-icon="arrow-l" data-theme="c" data-transition="slide">Previous</a>';
        var nextLink = '</a><a class="next" href="#" data-role="button" data-inline="true" data-icon="arrow-r" data-theme="c" data-transition="slide">Next</a>';
        var navHTML = '<div class="prev-next">' +
                         prevLink +
                         nextLink +
                      '</div>';
					  
					
        $(function(){
            // init
            $('#register > div')
                .hide()
                .append(navHTML).trigger('create');
            $('#first-step .prev').remove();
            $('#last-step .next').remove();
 
            // show first step
            $('#first-step').show();
			//$('option:selected', 'select#PUT').removeAttr('selected').next('option').attr('selected', 'selected');
			$('select#PUT').val('FA').change();
			$('select#PUT').selectmenu('refresh');
 
 
            $('a.next').click(function(){
			
                var whichStep = $(this).parent().parent().attr('id');

                if( whichStep == 'first-step' )
                {
					
                    // validate first-step
					
					if($('#fname').val()=='')
                    {
                        alert('Enter Your First Name');
                        $('#fname').focus();
                        return false;
                    }
					
                    if($('#lname').val()=='')
                    {
                        alert('Enter Your Last Name');
                        $('#lname').focus();
                        return false;
                    }
					if($('#phone').val()=='')
                    {
                        alert('Enter Your Contact Number');
                        $('#phone').focus();
                        return false;
                    }
					else if(isNaN ($('#phone').val() ))
				{
					alert("Enter Numeric Value Of Phone");
					 $('#phone').focus();
					return false;
				}					
					if($('#email').val()=="")
					{
						alert("Enter your Email.");
						$('#email').focus();
						return false;
					}
					else
					{
						if(!emailInvalid($('#email').val()))
						{
							alert("Please Enter Valid Email Address");
							$('#email').focus();
							return false;
						}
					}
					function emailInvalid(s)
					{
						if(!(s.match(/^[\w]+([_|\.-][\w]{1,})*@[\w]{2,}([_|\.-][\w]{1,})*\.([a-z]{2,4})$/i) ))
							{
							return false;
							
						}
						else
							return true;
					} 
                }
                else if( whichStep == 'second-step' )
                {
					
					
				
                    // validate second-step
					//$('option:selected', 'select#PUT').removeAttr('selected').next('option').attr('selected', 'selected');
					//$('select#PUT').change('FA');
			//$('select#PUT').selectmenu('refresh');
		
					//for from airport
				var sel = document.getElementById('PUT');
       var sv = sel.options[sel.selectedIndex].value;
        if(sv == 'FA')
	   {
		   if($('#PickupTime').val()=='')
                    {
                        alert('select Pickup Time');
                        $('#PickupTime').focus();
                        return false;
                    }
					if($('#DropoffTime').val()=='')
                    {
                        alert('select DropOff Time');
                        $('#DropoffTime').focus();
                        return false;
                    }
					if($('#VehicleType').val()=='')
                    {
                        alert('Enetr Vehicle Type');
                        $('#VehicleType').focus();
                        return false;
                    }
				
					 if($('#PickupAirport').val()=='')
                    {
                        alert('Enter Airport Name');
                        $('#PickupAirport').focus();
                        return false;
                    }
					 if($('#PickupAirline').val()=='')
                    {
                        alert('Enter Airline Name');
                        $('#PickupAirline').focus();
                        return false;
                    }
					 if($('#PickupFlightNo').val()=='')
                    {
                        alert('Enter Flight No');
                        $('#PickupFlightNo').focus();
                        return false;
                    }
					if($('#PickupCityFlying').val()=='')
                    {
                        alert('Enter City Flying From');
                        $('#PickupCityFlying').focus();
                        return false;
                    }
					if($('#DropoffAddress').val()=='')
                    {
                        alert('Enter Address');
                        $('#DropoffAddress').focus();
                        return false;
                    }
					if($('#DropoffCity').val()=='')
                    {
                        alert('Enter City');
                        $('#DropoffCity').focus();
                        return false;
                    }
					if($('#DropoffStateCode').val()=='0')
                    {
                        alert('Select Satate');
                        $('#DropoffStateCode').focus();
                        return false;
                    }
			
			
	   }
			//to air port
			if( sv == 'TA')
	   {
		   if($('#PickupTime').val()=='')
                    {
                        alert('select Pickup Time');
                        $('#PickupTime').focus();
                        return false;
                    }
					if($('#DropoffTime').val()=='')
                    {
                        alert('select DropOff Time');
                        $('#DropoffTime').focus();
                        return false;
                    }
					if($('#VehicleType').val()=='')
                    {
                        alert('Enetr Vehicle Type');
                        $('#VehicleType').focus();
                        return false;
                    }
		
			
			if($('#PickupAddress').val()=='')
                    {
                        alert('Enter Pickup Address');
                        $('#PickupAddress').focus();
                        return false;
                    }
					if($('#PickupCity').val()=='')
                    {
                        alert('Enter Pickup City');
                        $('#PickupCity').focus();
                        return false;
                    }
					if($('#PickupZipCode').val()=='')
                    {
                        alert('Enter Pickup Zipcode');
                        $('#PickupZipCode').focus();
                        return false;
                    }
					
					
				if($('#DropoffAirport').val()=='')
                    {
                        alert('Enter Airport Name');
                        $('#DropoffAirport').focus();
                        return false;
                    }
					if($('#DropoffAirline').val()=='')
                    {
                        alert('Enter Airline Name');
                        $('#DropoffAirline').focus();
                        return false;
                    }
					if($('#DropoffFlightNo').val()=='')
                    {
                        alert('Enter Flight No');
                        $('#DropoffFlightNo').focus();
                        return false;
                    }
			if($('#DropoffCityFlying').val()=='')
                    {
                        alert('Enter Drop Off City Flying');
                        $('#DropoffCityFlying').focus();
                        return false;
                    }
	   }
			//point to point
			
			if(sv == 'PTP')
	   {
		   if($('#PickupTime').val()=='')
                    {
                        alert('select Pickup Time');
                        $('#PickupTime').focus();
                        return false;
                    }
					if($('#DropoffTime').val()=='')
                    {
                        alert('select DropOff Time');
                        $('#DropoffTime').focus();
                        return false;
                    }
					if($('#VehicleType').val()=='')
                    {
                        alert('Enetr Vehicle Type');
                        $('#VehicleType').focus();
                        return false;
                    }
			if($('#DropoffAddress').val()=='')
                    {
                        alert('Enter Address');
                        $('#DropoffAddress').focus();
                        return false;
                    }
					if($('#DropoffCity').val()=='')
                    {
                        alert('Enter City');
                        $('#DropoffCity').focus();
                        return false;
                    }
					if($('#DropoffZipCode').val()=='')
                    {
                        alert('Enter Zipcode');
                        $('#DropoffZipCode').focus();
                        return false;
                    }
					
					
			if($('#PickupAddress').val()=='')
                    {
                        alert('Enter Address');
                        $('#PickupAddress').focus();
                        return false;
                    }
					if($('#PickupCity').val()=='')
                    {
                        alert('Enter City');
                        $('#PickupCity').focus();
                        return false;
                    }
					if($('#PickupZipCode').val()=='')
                    {
                        alert('Enter Zipcode');
                        $('#PickupZipCode').focus();
                        return false;
                    }
					
	   }
			//for hour
			if(sv == 'BTH')
	   {
		if($('#PickupTime').val()=='')
                    {
                        alert('select Pickup Time');
                        $('#PickupTime').focus();
                        return false;
                    }
					if($('#DropoffTime').val()=='')
                    {
                        alert('select DropOff Time');
                        $('#DropoffTime').focus();
                        return false;
                    }
					if($('#VehicleType').val()=='')
                    {
                        alert('Enetr Vehicle Type');
                        $('#VehicleType').focus();
                        return false;
                    }
			if($('#number-pattern').val()=='')
                    {
                        alert('Hours needed');
                        $('#number').focus();
                        return false;
                    }
			
			}
		}
           
                else if( whichStep == 'last-step' )
                {
					
					
			
                   
}

 
                $(this).parent().parent().hide().next().trigger('create').show();
            });
 
            $('a.prev').click(function(){
                $(this).parent().parent().hide().prev().trigger('create').show();
            });
        });
		
		
		//for validation of credit card
		
function paymentchk()
{
	if ($("#ctype").val() == "0") {
	alert("Select Card Type");
	$('#ctype').focus();
	return false;
	}
	if ($("#cardname").val() == "") {
	alert("Enter Card Name");
	$('#cardname').focus();
	return false;
	}
	if ($("#cardno").val() == "") {
	alert("Enter Card No");
	$('#cardno').focus();
	return false;
	}
	else if(isNaN ($('#cardno').val() ))
	{
	alert("Card Number have only Numeric Value");
	$('#cardno').focus();
	return false;
	}
	
	if ($("#expdate").val() == "") {
	alert("Select Exp Date");
	$('#expdate').focus();
	return false;
	}
	if ($("#name").val() == "") {
	alert("Enter Cvv Number");
	$('#name').focus();
	return false;
	}
	
	else if(isNaN ($('#name').val() ))
	{
	alert("Please Enter Numeric Value");
	$('#name').focus();
	return false;
	}
	else if($("#name").val() <= 3)
	{
	alert("Enter a valid cvv number");		
	$('#name').focus();
	return false;
	}
	var str = $("form#register").serialize();
	 /* alert(decodeURIComponent(str));*/
	  str=decodeURIComponent(str);
	  $.post("http://webzin.info/transprocess.php",str,function(data,status){
		  data = $.parseJSON(data);
		  alert(data.BookRideResult.Code);
		  alert(data.BookRideResult.Message);
		  document.location = "thankyou.html?Code="+data.BookRideResult.Code+"&Message="+data.BookRideResult.Message;/*
		  $.each(data.BookRideResult, function(i, val) {
			  alert(i);
			  alert(val);
			  });*/
    });		
}				
//jquery validation of credit card

$("#register").submit(function() {
  if ($("#ctype").val() == "0") {
   alert("Select Card Type");
    $('#ctype').focus();
    return false;
  }
   if ($("#expdate").val() == "") {
   alert("Select Exp Date");
    $('#expdate').focus();
    return false;
  }
   if ($("#name").val() == "") {
   alert("Select Exp Date");
    $('#name').focus();
    return false;
  }
  if ($("#cardno").val() == "") {
   alert("Enter Card No");
    $('#cardno').focus();
    return false;
  }
  if ($("#cardname").val() == "") {
   alert("Enter Card Name");
    $('#cardname').focus();
    return false;
  }
  
  
  
  
  });				
				
	//for sliding the select box value			
				
window.addEvent('load', function() {
$('#airport').show('fast');
$('#toairport').hide('fast');
$('#plairport').hide('fast');
$('#address').show('fast');
$('#hour').hide('fast');

$('#PUT').change(function() {
    var value = $(this).val();
    if (value == 'FA') {
        $('#airport').show('fast');
		$('#address').show('fast');
		$('#plairport').hide('fast');
		$('#hour').hide('fast');
		$('#toairport').hide('fast');
    }
	if (value == 'TA') {
		$('#plairport').show('fast');
		$('#toairport').show('fast');
		$('#airport').hide('fast');
		$('#address').hide('fast');
		$('#hour').hide('fast');
	}
	if (value == 'PTP') {
		$('#plairport').show('fast');
		$('#address').show('fast');
		$('#toairport').hide('fast');
		$('#airport').hide('fast');
 		$('#hour').hide('fast');
	}
	if (value == 'BTH') {
		$('#hour').show('fast');
		$('#plairport').hide('fast');
		$('#address').hide('fast');
		$('#toairport').hide('fast');
		$('#airport').hide('fast'); 
	}
/*    else {
        $('#damage_div').hide('fast');
    }*/
});
});//]]>  

				
				
// fro date and time

        $(function(){
		var curr = new Date();
		var curr1 = new Date().getFullYear();
    // create a datetimepicker with default settings 
    $("#PickupTime").mobiscroll('setDate', new Date()).datetime({ theme: 'ios',timeFormat:'HH:ii',dateFormat:'yy-mm-dd',timeWheels:'HH:ii',minDate:curr,endYear:curr1+10}); // PickupTime Mobiscroll

 $("#DropoffTime").mobiscroll('setDate', new Date()).datetime({ theme: 'ios',timeFormat:'HH:ii',dateFormat:'yy-mm-dd',timeWheels:'HH:ii',minDate:curr,endYear:curr1+10}); // DropoffTime Mobiscroll
 
});

//Mobiscroll Script End
   
	$(function(){
		//Mobiscroll Script start
    var now = new Date();

    $('#expdate').mobiscroll().date({
        theme: 'ios',
        display: 'modal',
        mode: 'scroller',
        dateOrder: 'ymm',
        dateFormat: 'yy-m',
        startYear: now.getFullYear(),
        endYear: now.getFullYear() + 10,
        width: 100
    });
});