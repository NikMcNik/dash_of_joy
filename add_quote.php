<?php
//connects to my database
$mysqli = mysqli_connect("localhost", "root", "root", "dash_of_joy", 8889);

//chekcs if connected to database
if ($mysqli === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

//Gets data from forms and Escape user inputs for security
$new_quote =  mysqli_real_escape_string($mysqli, $_REQUEST['quote']);
$author = mysqli_real_escape_string($mysqli, $_REQUEST['author']);

//adds quote and author name to database
$sql = "INSERT INTO quotes (quote,author) VALUES('$new_quote','$author')";

//checks if quote was added
if (mysqli_query($mysqli, $sql)) {
    header("Location: /inspirationalquotes.html");
    mysqli_close($mysqli);
    exit;
} else {
    echo "ERROR: was not able to execute $sql. " . mysqli_error($mysqli);
}
