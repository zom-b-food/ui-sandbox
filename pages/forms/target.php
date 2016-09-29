<!DOCTYPE html>
<html>
<head>
    <title>FormValidation demo</title>
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css"/>
    <style type="text/css">
        .row {

            margin: 0 !important;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="row">
        <h2>Form data</h2>
        <hr/>
        <p>This is a simple page showing the data you have just submitted</p>
        <pre><?php print_r($_POST); ?></pre>
    </div>
</div>
</body>
</html>