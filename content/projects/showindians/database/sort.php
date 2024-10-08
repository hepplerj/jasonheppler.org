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

            <p>
                <form method='GET' action='http://segonku.unl.edu/~jheppler/showindian/database/bbww.search.php'> 
            </p> 
            
            <h3>Last Name: <input type="text" name="last_name" size=25 maxlength=50 /></h3> 
            </p> 
           
            <p> 
            <h3>Occupation: <select name="occupation"> 
            <option value=""></option> 
            <option value="Chief">Chief</option> 
            <option value="Brave">Brave</option> 
            <option value="Squaw">Squaw</option> 
            <option value="Pappoose">Pappoose</option> 
            </select> 
            </h3> 
            </p> 
           
            <p> 
            <h3>Date/Year: <select name="year_empl"> 
                    <option value=""></option> 
                    <option value="1842">1885</option> 
                    <option value="1852">1886</option> 
                    <option value="1854">1887</option> 
                    <option value="1857">1888</option> 
                    <option value="1858">1889</option> 
                    <option value="1864">1890</option> 
                    <option value="1865">1891</option> 
                    <option value="1867">1892</option> 
                    <option value="1868">1893</option> 
                    <option value="1868">1894</option> 
                    <option value="1868">1895</option> 
                    <option value="1868">1896</option> 
                    <option value="1868">1897</option> 
                    <option value="1868">1898</option> 
                    <option value="1868">1899</option> 
                    <option value="1868">1900</option> 
                    <option value="1868">1901</option> 
                    <option value="1868">1902</option> 
                    <option value="1868">1903</option> 
                    <option value="1868">1904</option> 
                    <option value="1868">1905</option> 
                    <option value="1868">1906</option> 
                    <option value="1868">1907</option> 
                    <option value="1868">1908</option> 
                    <option value="1868">1909</option> 
                    <option value="1868">1910</option> 
                    <option value="1868">1911</option> 
                    <option value="1868">1912</option> 
                    <option value="1868">1913</option> 
                </select> 
            </h3> 
            </p> 
            
            <p> 
            <h3>Gender: <select name="sex"> 
            <option value=""></option> 
            <option value="Male">Male</option> 
            <option value="Female">Female</option> 
            </select> 
            </h3> 
            </p> 

			<p>


<?php
/* set the allowed order by columns */
$default_sort = 'lname';
$allowed_order = array ('datesigned', 'lname','fname');

/* if order is not set, or it is not in the allowed
 * list, then set it to a default value. Otherwise, 
 * set it to what was passed in. */
if (!isset ($_GET['order']) || 
    !in_array ($_GET['order'], $allowed_order)) {
    $order = $default_sort;
} else {
    $order = $_GET['order'];
}

/* connect to db */
define ('HOSTNAME', 'localhost');
define ('USERNAME', 'showindian_admin');
define ('PASSWORD', '7bmR76X3');
define ('DATABASE_NAME', 'showindian');

$db = mysql_connect(HOSTNAME, USERNAME, PASSWORD) or die ('I cannot connect to MySQL.');

mysql_select_db(DATABASE_NAME);

/* construct and run our query */
$query = "SELECT * FROM bbwwperformers ORDER BY $order";
$result = mysql_query ($query);

/* make sure data was retrieved */
$numrows = mysql_num_rows($result);
if ($numrows == 0) {
    echo "No data to display!";
    exit;
}

/* start the table */
	echo "<strong>Total Results: $num_rows </strong>";	
	print "<table border=0 cellpadding=3 cellspacing=3 width=100%>";
	echo "<TD><b>";
    if (in_array ($heading, $allowed_order)) {
        echo "<a href=\"{$_SERVER['PHP_SELF']}?order=$heading\">$lname</a>";
    } else {
        echo $heading;
    }                
    echo "</b></TD>\n";

	$odd = false;
	while($row = mysql_fetch_row($result)){
	$odd = !$odd;
	print "
	<tr" . (($odd) ? ' class="odd"' : '') . ">
	<td><a href=\"http://segonku.unl.edu/~jheppler/showindian/database/single.php?last_name=$row[0]\">$row[1] $row[0] </a></td>
	<td>$row[3]</td>	
	<td>$row[7]</td>
	<td>$row[9]</td>
	<td>$row[10]</td>
	<td>$row[11]</td>
	</tr>";
	}
					
	print("</table>");



?>

</div> 
 
</div> 

<?php include('../includes/footer.php'); ?>
 
</body> 
</html> 
