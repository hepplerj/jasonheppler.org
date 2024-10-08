<form method="GET" action="http://segonku.unl.edu/~jheppler/bbww/directory/dhistory.search.php">
</p>
<h3>Last Name: <input type="text" name="last_name" size=25 maxlength=25 />
</h3>
</p>

<p>    
    <input type="submit" name="submit" value="Search" />
    <input type="hidden" name="searching" value="yes" />
  </form>
<p>


<?php 
    $host = 'localhost';
    $user = 'jheppler';
    $pw = '#####';
    $db = 'showindians_admin';


    mysql_connect($host, $user, $pw)
        or die(mysql_error);
        mysql_select_db($db);


$myresults = mysql_query("SELECT * FROM showindians ORDER BY Last_Name");
    if (!$myresults) {
        echo 'Could not run query: ' . mysql_error();
        exit;
    }

    print "<table border=0 cellpadding=3 cellspacing=3 width=100%";
    print "<tr><th>Name</th><th>Institution</th></tr>";


    $odd = false;
    while($row = mysql_fetch_row($myresults)){
    $odd = !$odd;
        print "

<tr" . (($odd) ? ' class="odd"' : '') . ">
<td><A HREF=\"http://segonku.unl.edu/~wthomas/data/showindians.search.php?last_name=$row[1]&submit=Search&searching=yes
\">$row[2] $row[1] </A></td>
<td>$row[5]</td>
</tr>";
    }
    
    print("</table>");

mysql_close();

?>
