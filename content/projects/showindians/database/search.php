<?php

include('../includes/sitehead.php');

include('../includes/globals.inc.php');

 function database_connect() {
     // connect to the database
     $db = mysql_connect(CONN_HOST, CONN_USER_NAME, CONN_USER_PSWD) 
       or die('Cannot connect to the database: ' . mysql_error());

     // select the database
     $mydb = mysql_select_db(CONN_DATABASE);

     return $db;
 }
?>

<link rel="stylesheet" href="<?=BASE_HREF?>css/style.css" type="text/css" media="screen"/> 

</head> 

<body> 

<div id="wrapper"> 

        <?php include('../includes/header.php'); ?>       

        <div id="content" class="clear"> 

      <h2>Wild West Indian Performers Database</h2>

        <p><a href="database">&larr; Return to Search</a></p>

        <h3>Results</h3>

<?php

if( array_key_exists( 'name', $_POST ) && $_POST['name'] != '' )
    $name = $_POST['name'];
if( array_key_exists( 'showtitle', $_POST ) && $_POST['showtitle'] != "" )
    $field = $_POST['showtitle'];
if( array_key_exists( 'gender', $_POST ) && $_POST['gender'] != "" )
    $institution = $_POST['gender'];

if( array_key_exists( 'submit', $_GET ) ) {

    $db = database_connect();

    if( isset( $name ) ) {
        if(preg_match("/^[A-Za-z]+/", $_POST['name'])){
            // select database table
            $sql = "SELECT idno, fname, lname, showtitle FROM bbwwperformers WHERE fname LIKE '%" . $name . "%' OR lname LIKE '%" . $name ."%'";

        }

    }else{
        echo "<p>Please enter a search query.</p>";
    }

    if( isset( $sql ) ) {
        // run the query against the mysql function
        $result = mysql_query($sql);

        // create while loop and loop through result set
        while($row = mysql_fetch_array($result)){
            $first_name = $row['fname'];
            $last_name = $row['lname'];
            $title = $row['showtitle'];

            // display the results of the array
            echo "<ul style=\"list-style-type:none\">\n";
            echo "<li>" . "<a href=\"database/single.php?last_name=$last_name\">" .$first_name . " " . $last_name . "</a><br />
                $title
                </li>\n";
            echo "</ul>";
        }
    }
}
?>


</div> 
 
</div> 

<?php include('../includes/footer.php'); ?>
 
</body> 
</html>
