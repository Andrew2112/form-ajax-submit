<?php
$db=@mysqli_connect('localhost', 'root', '', 'form_ajax') or die('Нет соединения с БД');
mysqli_query($db, "SET NAMES utf8") or die("ERROR CHARSET");
if (!empty($_POST)){
    $name=mysqli_real_escape_string($db, trim($_POST['name']));
    $email=mysqli_real_escape_string($db,trim($_POST['email']));
    $password=password_hash(mysqli_real_escape_string($db,trim($_POST['password'])),PASSWORD_DEFAULT);
    $query = "SELECT login FROM users WHERE login='$name' LIMIT 1";
    $res = mysqli_query($db, $query) or die(mysqli_error($db));
    if (mysqli_num_rows($res)) {
        echo "no";
    }else{

        echo 'yes';
        $query="INSERT INTO users (`login`, `email`, `password`) VALUES ('$name', '$email', '$password')";
        $res = mysqli_query($db, $query);

    }
}

