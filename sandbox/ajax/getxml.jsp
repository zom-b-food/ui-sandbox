<!doctype html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
		<title>ajax</title>
		<%@ include file="/sitewide/globals.jsp" %>
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

			table {
				border-collapse: collapse;
				border-spacing: 0;
				display: table;
				width: 100%;
				max-width: 526px !important;
				padding: 4px;
				border: 1px solid #96aab1 !important;
				margin: 0 auto;
			}

			td {
				white-space: nowrap;
			}

			td:first-of-type {
				white-space: nowrap;
				width: 25%;
			}

			.back-to-top {
				display: none;
			}
		</style>
	</head>
	<body class="popDiv">
		<div class="uk-container-center">
			<div class="uk-grid" data-uk-grid-margin>
				<div class="uk-width-1-1">
					<h3>Loading XML content/file via AJAX.</h3>
					<button type="button" onclick="loadDoc()">Get Travel List</button>
					<br><br>
					<table id="demo"></table>
					<script>
						function loadDoc() {
							var xhttp = new XMLHttpRequest();
							xhttp.onreadystatechange = function () {
								if (xhttp.readyState == 4 && xhttp.status == 200) {
									myFunction(xhttp);
								}
							};
							xhttp.open("GET", "getxml.xml", true);
							xhttp.send();
						}
						function myFunction(xml) {
							var i;
							var xmlDoc = xml.responseXML;
							var table = "<tr><th>City</th><th>State</th><th>Country</th><th>Date</th></tr>";
							var x = xmlDoc.getElementsByTagName("stops");
							for (i = 0; i < x.length; i++) {
								table += "<tr><td>" +
										x[i].getElementsByTagName("city")[0].childNodes[0].nodeValue +
										"</td><td>" +
										x[i].getElementsByTagName("state")[0].childNodes[0].nodeValue +
										"</td><td>" +
										x[i].getElementsByTagName("country")[0].childNodes[0].nodeValue +
										"</td><td>" +
										x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
										"</td></tr>";
							}
							document.getElementById("demo").innerHTML = table;
						}
					</script>
				</div>
			</div>
		</div>
	</body>
</html>
