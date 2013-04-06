//<![CDATA[ 
window.addEvent('load', function() {
$('#airport').hide('fast');
$('#address').hide('fast');
$('#hour').hide('fast');

$('#Number_of_Racks').change(function() {
var value = $(this).val();
if (value == 'Other') {
$('#damage_div').show('fast');
}
else {
$('#damage_div').hide('fast');
}
});
});//]]>  
