<?php
 function SendHTMLMail($to,$subject,$mailcontent,$from)
{
    $limite = "_parties_".md5 (uniqid (rand()));
    $headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "From: $from\r\n";
    mail($to,$subject,$mailcontent,$headers);	
}
if(is_array($_POST))
	{
		foreach($_POST as $var=>$valu)
			{
				$$var = $valu;
			}
	}
$mailcontent="<table width='100%' border='0' cellspacing='0' cellpadding='0' style='font-family:Arial, Helvetica, sans-serif; font-size:12px'>
 
<tr><td align='left'>Name: $name</td></tr>
<tr><td align='left'>Company: $company</td></tr>
<tr><td align='left'>Email: $password</td></tr>
<tr><td align='left'>Phone: $phone</td></tr>
<tr><td align='left'>Message: $textarea</td></tr>
</table>
";
$subject="Contact Details of Nyc Royal Limo";
$to="jitendra@webzin.in";
SendHTMLMail($to,$subject,$mailcontent,$password); 
echo "<script>alert('thank you for your mail we will call back you soon..');</script>"; 
echo "<script>window.location.href='contact.html';</script>"; 

?>