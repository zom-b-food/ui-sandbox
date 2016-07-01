<!doctype html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<title>ajax</title>
	<%@ include file="/sitewide/globals.jsp" %>
        <script>
        function showHint(str) {
            if (str.length == 0) {
                document.getElementById("txtHint").innerHTML = "";
                return;
            } else {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
                    }
                };
                xmlhttp.open("GET", "gethint.php?q=" + str, true);
                xmlhttp.send();
            }
        }
    </script>
	<style type="text/css">
		h3 {
			color: #000033;
			font-family: Candara, sans-serif;
			font-size: 1rem;
			font-weight: bold;
			text-align: left;
			padding: 1px 0 4px 12px;
			background-color: #cccccc;
			border-bottom: 1px solid #000033;
			border-top: 1px solid #000033;
		}

		.back-to-top {display:none;}
	</style>
</head>
<body class="popDiv">
<div class="uk-container-center">
    <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-1-1">
            <h3>Loading a PHP "hint" list via AJAX.</h3>
            <p><b>Start typing a name in the input field below:</b></p>
            <form>
                First name: <input type="text" onkeyup="showHint(this.value)">
            </form>
            <p>Suggestions: <span id="txtHint"></span></p>
    	</div>
    </div>
</div>
</body>
</html>
