<? /* print the contents of a url */
function print_r_xml($arr,$wrapper = 'data',$cycle = 1)
{
	//useful vars
	$new_line = "\n";

	//start building content
	if($cycle == 1) { $output = '<?xml version="1.0" encoding="UTF-8" ?>'.$new_line; }
	$output.= tabify($cycle - 1).'<'.$wrapper.'>'.$new_line;
	foreach($arr as $key => $val)
	{
		if(!is_array($val))
		{
			$output.= tabify($cycle).'<'.htmlspecialchars($key).'>'.$val.'</'.htmlspecialchars($key).'>'.$new_line;
		}
		else
		{
			$output.= print_r_xml($val,$key,$cycle + 1).$new_line;
		}
	}
	$output.= tabify($cycle - 1).'</'.$wrapper.'>';

	//return the value
	return $output;
}

/* tabify */
function tabify($num_tabs)
{
	for($x = 1; $x <= $num_tabs; $x++) { $return.= "\t"; }
	return $return;
}

/* test */
$_POST = array(
				'first_name'=>'David',
				'last_name'=>'Walsh',
				'url'=>'http://davidwalsh.name',
				'languages'=>array('php','javascript','java','css'),
				'title'=>'Web Developer',
				'favorite_blogs'=>array('CSSTricks'=>'http://css-tricks.com','AJAXian'=>'http://ajaxian.com')
			);
echo print_r_xml($_POST);
?>