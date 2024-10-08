<?php 
include('../includes/sitehead.php'); 
include('../includes/globals.inc.php'); 

mysql_connect(CONN_HOST, CONN_USER_NAME, CONN_USER_PSWD)
  or die(mysql_error);
mysql_select_db(CONN_DATABASE);
?>

<link rel="stylesheet" href="<?=BASE_HREF?>css/style.css" type="text/css" media="screen"/> 

</head> 

<body> 

<div id="wrapper"> 

        <?php include('../includes/header.php'); ?>       

        <div id="content" class="clear"> 

      <h2>Wild West Indian Performers Database</h2>

<?php

$uid = (isset($_GET['id'])) ? $_GET['id']: null;

// Perform validation and query checking
$sql = "SELECT uid FROM showindian.bbww_performers WHERE uid LIKE '%uid%'"
    or die ("Query error: " . mysql_error());
$result = mysql_query($sql)
    or die ("Database error: " . mysql_error());

while($row = mysql_fetch_assoc($result)) {
  $first_name = $row['fname'];
  $last_name = $row['lname'];
  $contract_signed = $row['datesigned'];
  $title = $row['showtitle'];
  $wages = $row['wages'];
  $gender = $row['gender'];

  // Print profile page
  
  echo "<h3> {$first_name} {$last_name}</h3>";
  echo "<div id=\"title\"><p>{$title}</p></div>";
  echo "<div id=\"datesigned\"><p>{$contract_signed}</p></div>";
  echo "<div id=\"gender\"><p>{$gender}</p></div>";
  
  echo "Profile for: " . $row['uid'];
}

mysql_close();
?>

</div>

</div>

<?php include( '../includes/footer.php' ); ?>

</body>
</html>
