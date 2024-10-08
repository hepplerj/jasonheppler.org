<?php 

	include('../../../includes/sitehead.php');

	include('../../../includes/globals.inc.php'); 

  include('../../../includes/showindian_database.php');

	mysql_connect(CONN_HOST, CONN_USER_NAME, CONN_USER_PSWD)
		or die(mysql_error);
	mysql_select_db(CONN_DATABASE);

?>

<?php $page="Research"; ?>

</head>

<body id="Research">

  <?php include('../../../includes/header.php'); ?>
  <?php include('../../../includes/showindian_menu.php'); ?>

<div id="wrap">

<div id="content">

<h2>Buffalo Bill's Wild West and the Progressive Image of American Indians</h2>

<p>Jason A. Heppler and Douglas Seefeldt</p>

<h3>Show Indian Database</h3>

<p>Browse or search the database of Wild West Show Indians to learn more about their position in the show, seasons employed by Buffalo Bill, the date of their contract signing, wages, and other descriptive attributes. Questions, comments, or additions to the database is encouraged. Please contact <a href="../about/">Jason Heppler</a> for further information.</p>

<form action="search.php" method="get" enctype="text/plaintext" name="form">

  <!--<div id="searchwrap"> -->
  <div class="search1">
      <h3>Name: <input type="text" name="search_name" id="form-name" title="Enter a last name" size=25 maxlength=50 /></h3> 
      <br />
      <!--
      <p><strong>Tips:</strong></p> 
        
      <p>Search for specific phrases by using quotations (e.g., &quot;bringing indians&quot;).</p>
      
      <p>For narrowing down the results, you may select as many or as few options as you would like (e.g., you can narrow down to see female performers only, or female performers in the year 1906, etc.).</p>
      
      <p>Currently, the database only supports searching either by name <strong>or</strong> by categories.</p>
    -->
      <p class="submit">
        <input type="submit" value="Search Database" class="submit" />
      </p>
  </div>

  <div class="search2">
  <?php

  ?>
     
     
     <!--                   
  <?php
  // grabbing the years of show performance
 
  $result = mysql_query("SELECT yearID,year FROM showindian.bbww_seasons");
  print "<h3><p>Narrow by year:</h3>\n";
  print "<select name=\"yearID\">\n";
  while ($row = mysql_fetch_assoc($result)) {
      $yearID = $row['yearID'];
      $year = $row['year'];
      print "<option value=$yearID>$year\n";
  }
  print "</select>\n";
  print "</p>\n";
  ?>

<h3>Narrow by Title: </h3>
<fieldset>
  <ul class="checklist_title checklist">
    <li>
      <input id="squaw" name="rends[]" type="checkbox" value="squaw">
      <label for="squaw">Squaw</label>
    </li>
    <li>
      <input id="chief" name="rends[]" type="checkbox" value="chief">
      <label for="chief">Chief</label>
    </li>
    <li>
      <input id="brave" name="rends[]" type="checkbox" value="brave">
      <label for="brave">Brave</label>
    </li>
    <li>
      <input id="pappoose" name="rends[]" type="checkbox" value="pappoose">
      <label for="pappoose">Pappoose</label>
    </li>
    <li>
      <input id="interpreter" name="rends[]" type="checkbox" value="interpreter">
      <label for="interpreter">Interpreter</label>
    </li>
    <li>
      <input id="children" name="rends[]" type="checkbox" value="children">
      <label for="children">Children</label>
    </li>
  </ul>
</fieldset>

<h3>Narrow by Gender: </h3>
<fieldset>
  <ul class="checklist_title checklist">
    <li>
      <input id="female" name="rends[]" type="checkbox" value="female">
      <label for="female">Female</label>
    </li>
    <li>
      <input id="male" name="rends[]" type="checkbox" value="male">
      <label for="male">Male</label>
    </li>
  </ul>
</fieldset>
-->

<!--
================= commenting out for testing ======================
  <?php
  // grabbing the gender

  $query = mysql_query("SELECT DISTINCT `gender` FROM `showindian.bbww_performers` WHERE `gender` != ''");
  print "<h3><p>Select a gender: </p></h3>\n";
  print "<select name=\'gender\>'\n";
  while ($row = mysql_fetch_assoc($query)) {
    $gender = $row['gender'];
    print "<option value=$gender>$gender</option>\n";
  }
  print "</select>\n";
  print "</p>\n";
  ?>
==================================================================
-->
<!--
  <p class="submit">
    <input type="submit" value="Search Database" class="submit" />
  </p>
-->
  <!--</div> -->

</form>

</div>

<?php
$results = mysql_query("SELECT * FROM showindian.bbww_performers ORDER BY `datesigned`");
  if (!$results) {
    echo 'Could not run query: ' . mysql_error();
    exit;
  }

  $num_rows = mysql_num_rows($results);
  echo "<p><strong>Total Results: $num_rows </strong></p>";	
  print "<table border=0 cellpadding=3 cellspacing=3 width=100%";
  print "
      <tr>
      <th>
        Name
      </th>
      <th>
      <a id=\"form-tip-title\" title=\"These are titles used by the Wild West Exhibition in programs and contracts.\" class=\"explain\">Title</a>
      </th>
      <th>
      <a id=\"form-tip-location\" title=\"Location where the contract was signed.\" class=\"explain\">Contract Signed</a>
      </th>
      <th>
        <a id=\"form-tip-signed\" title=\"Date the contract was signed.\" class=\"explain\">Date Signed</a>
      </th>
      <th>
        <a id=\"form-tip-wage\" title=\"Wages earned according their contract.\" class=\"explain\">Wages</a>
      </th>
      <th><a id=\"form-tip-gender\" title=\"Gender of the performer.\" class=\"explain\">
        Gender
      </a></th>
      </tr>
      ";

    $odd = false;
    while($row = mysql_fetch_assoc($results)){

      $uid = $row['uid'];
      $first_name = $row['fname'];
      $last_name = $row['lname'];
      $title = $row['showtitle'];
      $contractsigned = $row['contractsigned'];
      $datesigned = $row['datesigned'];
      $wages = $row['wages'];
      $gender = $row['gender'];

      $odd = !$odd;
                    
      print "

        <tr" . (($odd) ? ' class="odd"' : '') . ">
        <td>
        <a href=\"http://segonku.unl.edu/~jheppler/showindian/database/single.php?id=$uid\">$first_name $last_name </a></td>
        <td>$title</td>	
        <td>$contractsigned</td>
        <td>$datesigned</td>
        <td>$wages</td>
        <td>$gender</td>
        </tr>";
        }

        print("</table>");

        mysql_close();
?>

</div>

<?php include('../../../includes/footer.php'); ?>

</div>

<!-- <?php include('includes/analytics.php'); ?> -->

</body>
</html>
