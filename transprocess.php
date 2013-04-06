<?php
/* 
  File name: postdata.php
*/

if(is_array($_POST))

	{
		foreach($_POST as $var=>$valu)
			{
				$$var = addslashes($valu);
			}
	}


$post_url = "https://limolabs.no-ip.org/BookingService/BookingService.svc/BookRide";
$xml_string = '<?xml version="1.0" encoding="utf-8"?>
<Booking>
  <CustomerInfo>
    <FirstName>$FirstName</FirstName>
    <LastName>$LastName</LastName>
    <CustomerCompany></CustomerCompany>
    <Phone></Phone>
    <Cell></Cell>
    <Email></Email>
    <Address></Address>
    <Address2></Address2>
    <City></City>
    <ZIP></ZIP>
    <State></State>
    <Country></Country>
    <CCNumber>$cardno</CCNumber>
    <CCCode>$name</CCCode>
    <ExpDate>$expdate</ExpDate>
  </CustomerInfo>
  <BookingInfo>
    <CompanyName>SAmCarRentals</CompanyName>   <!-- Either CompanyName or CompanyID must be specified -->
    <CompanyID>1000</CompanyID>
    <PickupTime>$PickupTime</PickupTime>
    <PickupLocation>
      <IsAirport>     <!-- Or the element Location is defined if the pickup is not an airport. Same goes for Dropoff. -->
        <AirportName>$AirportName</AirportName>
        <AirlineName>$AirlineName</AirlineName>
        <FlightNo>$FlightNo</FlightNo>
        <City>$City</City>
        <WaitAtCurb/> <!-- <WaitAtBaggage/> or <WaitAtParking/> -->
      </IsAirport>
    </PickupLocation>
    <DropoffTime>$DropoffTime</DropoffTime>
    <DropoffLocation>
      <Location>
        <Address>$Address</Address>
        <Address2>La Quinta</Address2>
        <City>$City</City>
        <State>$State</State>
        <ZIP>$ZIP</ZIP>
        <Country>USA</Country>
      </Location>
    </DropoffLocation>    
    <Vehicle>Yugo</Vehicle> <!-- Either vehicle name is specified, or vehicle ID that can be retreived -->
    <VehicleID></VehicleID>
    <NoOfPassengers>$NoOfPassengers</NoOfPassengers>
    <NoOfLuggage>NoOfLuggage</NoOfLuggage>
    <Passengers>
      <Passenger>Sam Peric</Passenger>
      <Passenger>Jam Mikic</Passenger>
    </Passengers>
  </BookingInfo>
</Booking>';


$ch = curl_init($post_url);

curl_setopt ($ch, CURLOPT_POST, true);
curl_setopt ($ch, CURLOPT_POSTFIELDS, "xmldata=".$xml_string);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);// Turn off the server and peer verification 
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 1);


$data = curl_exec($ch); 
// to get information on the curl resultset
$info = curl_getinfo($ch);
echo $data;
if(curl_errno($ch)){
    print curl_error($ch);
}

curl_close($ch);

?>