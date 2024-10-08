<?php include('../includes/sitehead.php'); ?>

<?php include('../includes/globals.inc.php'); ?>

<link rel="stylesheet" href="<?=BASE_HREF?>css/style.css" type="text/css" media="screen"/> 
 
</head> 

<body> 

<div id="wrapper"> 

        <?php include('../includes/header.php'); ?>       

		<div id="content" class="clear">

			<h2>Wild West Indian Performers Database</h2>
			<p>Browse or search the database of Wild West Show Indians to learn more about their position in the show, seasons employed by Buffalo Bill, the date of their contract signing, wages, and other descriptive attributes.</p>
			
			<p><a href="<?=BASE_HREF?>database/">Return</a> to full database.</p>

<?php

// connect to database
	mysql_connect ( "localhost", "showindian_admin", "7bmR76X3" ) or die (mysql_error());
	mysql_select_db ( "showindian" );
	$lname = $_POST[ 'name' ];
	$myresults = mysql_query( "SELECT * FROM bbwwperformers WHERE lname LIKE '%$lname'" );

// print results in HTML	
	$num_rows = mysql_num_rows($myresults);
		echo "<strong>Total Results: $num_rows </strong>";	
		print "<table border=0 cellpadding=3 cellspacing=3 width=100%";
		print "<tr><th>Name</th><th>Show Title</th><th>Place Contract Signed</th><th>Date Contract Signed</th><th>Wages</th><th>Gender</th></tr>";
	$odd = false;
	while ($row = mysql_fetch_array($myresults)){
		$odd = !$odd;
		print "
		<tr" . (($odd) ? ' class="odd"' : '') . ">
		<td>$row[1] $row[0] </A></td>
		<td>$row[3]</td>	
		<td>$row[7]</td>
		<td>$row[9]</td>
		<td>$row[10]</td>
		<td>$row[11]</td>
		</tr>";
			}
					
		print("</table>");		
	
//		echo 'First Name: ' .$row['fname'];
//		echo '<br/>Last Name: ' .$row['lname'];	

?>

</div> 
 
</div> 

<?php include('../includes/footer.php'); ?>
 
</body> 
</html> 