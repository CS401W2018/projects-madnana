<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Signed Up</title>
</head>
<body>
    <main>
    <h1> Thank you for signing up.</h1>
    <p>First Name: <?php print $_POST['first'] ?> </p>
    <p>Last Name: <?php print $_POST['last'] ?> </p>
    <p>Email: <?php print $_POST['email'] ?> </p>
    <p>Phone Number: <?php print $_POST['phone'] ?> </p>
    <p>Gender: <?php print $_POST['gender'] ?> </p>
    <p>Password: <?php print $_POST['pass'] ?> </p>
   </main>
    <footer>
        <p>&copy; 2024 Natalia Madruga</p>
    </footer>
</body>
</html>