<?php
/* 
  File name: postdata.php
*/

$post_url = "https://limolabs.no-ip.org/BookingService/BookingService.svc/BookRide";
$xml_string = '<?xml version="1.0" encoding="utf-8"?>
<Booking>
  <CustomerInfo>
    <FirstName>Samir</FirstName>
    <LastName>Das</LastName>
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
    <CCNumber>4111111111111111</CCNumber>
    <CCCode>1234</CCCode>
    <ExpDate>2016-9</ExpDate>
  </CustomerInfo>
  <BookingInfo>
    <CompanyName>SAmCarRentals</CompanyName>   <!-- Either CompanyName or CompanyID must be specified -->
    <CompanyID>1000</CompanyID>
    <PickupTime>2013-04-25 15:15</PickupTime>
    <PickupLocation>
      <IsAirport>     <!-- Or the element Location is defined if the pickup is not an airport. Same goes for Dropoff. -->
        <AirportName>Piedmont Triad International</AirportName>
        <AirlineName>AmericanAirlines</AirlineName>
        <FlightNo>W1234</FlightNo>
        <City>Greensboro</City>
        <WaitAtCurb/> <!-- <WaitAtBaggage/> or <WaitAtParking/> -->
      </IsAirport>
    </PickupLocation>
    <DropoffTime>2013-04-25 16:00</DropoffTime>
    <DropoffLocation>
      <Location>
        <Address>Lanada road</Address>
        <Address2>La Quinta</Address2>
        <City>Beaver</City>
        <State>Pennsylvania</State>
        <ZIP>15001</ZIP>
        <Country>USA</Country>
      </Location>
    </DropoffLocation>    
    <Vehicle>Yugo</Vehicle> <!-- Either vehicle name is specified, or vehicle ID that can be retreived -->
    <VehicleID></VehicleID>
    <NoOfPassengers>2</NoOfPassengers>
    <NoOfLuggage>2</NoOfLuggage>
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