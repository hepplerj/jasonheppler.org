<?php include('../includes/sitehead.php'); ?>

<?php include('../includes/globals.inc.php'); ?>

<link rel="stylesheet" href="<?=BASE_HREF?>css/style.css" type="text/css" media="screen"/> 
 
</head> 

<body> 

<div id="wrapper"> 

        <?php include('../includes/header.php'); ?>       

		<div id="content" class="clear">

<?php 
    $host = 'localhost';
    $user = 'showindian_admin';
	$pw = '7bmR76X3';
	$db = 'showindian';

	$last_name = $_GET['lname'];
	$first_name = $_GET['fname'];

	$searching = $_GET['searching'];

	if ($searching == "yes")

	{
	echo "<h2>Results:</h2><p>";

//If they did not enter a search term we give them an error

//	if ($last_name == "")

//	{
//	echo "<p>You forgot to enter a search term";
//	exit;
//	}

	mysql_connect($host, $user, $pw)
		or die(mysql_error);
		mysql_select_db($db);

// We preform a bit of filtering
//	$english_name = strtoupper($english_name);
//	$english_name = strip_tags($english_name);
//	$english_name = trim ($english_name); 
	
//        $first_name = strtoupper($first_name);
//        $first_name = strip_tags($first_name);
//        $first_name = trim( $first_name );
	
//   $query = "SELECT * FROM bbwwperformers WHERE lname LIKE '&lname' AND fname LIKE '&fname'";

	$myresults = mysql_query("SELECT * FROM bbwwperformers WHERE lname LIKE '%$lname%' AND fname LIKE '%$fname%'");
//	$myresults = mysql_query($query);
	if (!$myresults) {
		echo 'Could not run query: ' . mysql_error();
		exit;
	}
	
	$numrows = mysql_num_rows($myresults);
	
	// Printing results in HTML
	
	echo "<strong>Total Results: $num_rows </strong>";	
	print "<table border=0 cellpadding=3 cellspacing=3 width=100%";
	print "<tr><th>Name</th><th>Show Title</th><th>Place Contract Signed</th><th>Date Contract Signed</th><th>Wages</th><th>Gender</th></tr>";


	$odd = false;
	while($row = mysql_fetch_row($myresults)){
	$odd = !$odd;
	print "

		<tr" . (($odd) ? ' class="odd"' : '') . ">
		<td>
		$row[1] $row[0] </A></td>
		<td>$row[3]</td>	
		<td>$row[7]</td>
		<td>$row[9]</td>
		<td>$row[10]</td>
		<td>$row[11]</td>
		</tr>";
			}
					
	print("</table>");

mysql_close();
	}
?>

</div> 
 
</div> 

<?php include('../includes/footer.php'); ?>
 
</body> 
</html> 