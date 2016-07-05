<%@ page contentType="text/html; charset=iso-8859-1" language="java" errorPage="" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<!doctype html>
<head>
<meta name="keywords" content="jsp, jsp web development, jsp, gui"/>
<meta name="robots" content="all"/>
<meta name="title" content="jsp, jsp web development, jsp, gui"/>
<meta http-equiv="X-UA-Compatible" content="IE=8, IE=9, IE=10, chrome=1">
<meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE,NO-STORE">
<meta HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
<meta HTTP-EQUIV="EXPIRES" CONTENT="0">
<script type="text/javascript" src="${contextPath}/js/jquery-1.11.1.min.js"></script>
<link type="text/css" rel="stylesheet" href="${contextPath}/styles/jquery-ui.css"/>
<link type="text/css" rel="stylesheet" href="${contextPath}/styles/old.css"/>
<link type="text/css" rel="stylesheet" href="${contextPath}/styles/pops.css"/>
<script type="text/javascript" src="${contextPath}/scripts/html5shiv.js"></script>
<script type="text/javascript" src="${contextPath}/scripts/jquery-ui-1.10.3.js"></script>
<script type="text/javascript" src="${contextPath}/scripts/modernizr.custom.adamMarsh.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
<title>Jquery Selects</title>
<style type="text/css">
html, body {
	font-size: 100%;
	height: 100%;
}

body {
	background-color: #E9F0FA;
	color: #333333;
	font: 71% Arial, Helvetica, sans-serif;
	margin: 0;
	padding: 0;
}

.flRt {
	float: right;
}

#content {
	min-height: 300px;
}

.clear {
	clear: both;
}

#main {
	height: inherit;
	width: 98%;
	padding: 0;

}

.bgrFFF {
	background-color: #FFFFFF;
}

button, input[type='submit'], a.btn, .btnBl {
	border: 1px solid #c6c6c6;
	padding: 2px 15px;
	border-radius: 5px;
	-moz-border-radius: 6px;
	clear: none;
	cursor: pointer;
	background: #003c69 url(./images/button_grad.png) left top repeat-x;
	font: 12px Helvetica, Verdana, Arial, sans-serif;
	color: #fff;
	display: inline-block;
	text-decoration: none;
	height: 24px;
}

.orangeBT {
	background: #f5a225 url(./images/cancelBG.png) left top repeat-x !important;
}

.orangeBT:hover {
	background: #f5a225 url(./images/cancelBGhover.png) left top repeat-x !important;
}

button:hover, input[type='submit']:hover, a.btn:hover, .btnBl:hover {
	background: #001d3a url(./images/button_grad.png) left top repeat-x;
	color: #fff;
}

.blBoxInner {
	/*   background: url(./images/blBoxBgr.png) repeat-x #fff;        */
	border: 1px solid #e2e2e2;
	margin-top: 10px;
}

h2 {
	color: #336699;
	font-size: 1.3em;
	font-weight: 700;
	margin: 0;
	padding: 0 0 5px;
}

h3 {
	color: #336699;
}

.pad12 {
	padding: 5px 12px;
}

.gray * {
	color: #cccccc;
}

.black * {
	color: #000000;
}

.black span.red {
	color: red;
}

fieldset {
	border: 1px solid #DDEBF7;
	border-radius: 7px 7px 7px 7px;
	margin-top: 25px;
	padding: 15px;
	width: 96% !important;
}

fieldset legend {
	font-size: 13px;
	font-weight: normal;
	color: #666666;
}

.tablesorter {
	width: 100%;
}

.tablesorter thead tr th, table.tablesorter tfoot tr th {
	border: none !important;
}

.tablesorter tbody td {
	border-left: none;
	border-right: none;
	padding: 3px 4px;
}

.reminderTablesDiv {
	height: 150px;
	overflow: auto;
	width: 100%;
	border: none;
}

.reminderTablesDiv p {
	margin-top: 9px;
	margin-bottom: 2px;
	font-weight: bold;
}

.reminderTablesDiv > table {
	padding: 0;
	width: 100%;
}

.reminderTablesDiv th {
	padding: 0;
	font-weight: bold;
	color: #ffffff;
	background-color: #315171;
	text-align: left;
	font-size: 12px;
}

.reminderTablesDiv th:first-child {
	width: 20%;
	line-height: 14px;
	padding: 3px 4px;
}

.reminderTablesDiv th:last-child {
	width: 80%;
	line-height: 14px;
	padding: 3px 4px;
}

.reminderTablesDiv td {
	padding: 0;
	font-size: 11px;
	text-align: left;
}

.reminderTablesDiv tr.even {
	background-color: #C8E0F3;
}

.sendR {
	margin-left: 255px;
	margin-top: -20px;
	position: relative;
	border-bottom: none;
}

.required-after {
	margin-top: 22px;
}

.posSettings {
	width: 400px;
}

.posSettings h3, .posSettings p {
	margin-bottom: 0;
	margin-top: 4px;
}

.posSettings fieldset {
	margin-top: 8px;
}

form.cmxform .gray * {
	color: gray;
}
</style>
<script type="text/javascript">
$(function () {
	$("#messages1").change(function () {
		ToggleDropdown();
	});
	ToggleDropdown();
});
function ToggleDropdown() {
	if ($("#messages1").val() === "5") {
		$("#reminder1").show();
		$("#reminder2").hide();
		$("#reminder3").hide();
		$("#type1a").val("0");
		$("#sendReminder").val("0");
		$("#disabled_topics").removeClass("black");
		$("#disabled_topics").addClass("gray");
		$("#sendReminder").prop("disabled", true);
	}
	else {
		$("#reminder1").hide();
		$("#reminder2").hide();
		$("#reminder3").hide();
		$("#type1a").val("0");
		$("#sendReminder").val("0");
	}
}

$(function () {
	$("#type1a").change(function () {
		ToggleDropdown1a();
	});
	ToggleDropdown1a();
});
function ToggleDropdown1a() {
	if ($("#type1a").val() !== "0") {
		$("#sendReminder").prop("disabled", false);
		$("#disabled_topics").removeClass("gray");
		$("#disabled_topics").addClass("black");

	}
	else if ($("#type1a").val() === "0") {
		$("#sendReminder").prop("disabled", true);
		$("#disabled_topics").removeClass("black");
		$("#disabled_topics").addClass("gray");

		$("#reminder_sms1").hide();
		$("#reminder_email1").hide();
		$("#reminder_batch1").hide();
		$("#reminder_endpoint1").hide();
		$("#reminder2").slideUp();
		$("#reminder3").slideUp();
	}
}

$(function () {
	$("#type1a").change(function () {
		ToggleDropdown1b();
	});
	ToggleDropdown1b();
});
function ToggleDropdown1b() {
	if ($("#type1a").val() === "4") {
		$("#reminder_sms1").hide();
		$("#reminder_email1").hide();
		$("#reminder_batch1").hide();
		$("#reminder_endpoint1").show();
		$("#reminder2").slideDown();
	}
	else if ($("#type1a").val() === "3") {
		$("#reminder_sms1").hide();
		$("#reminder_email1").hide();
		$("#reminder_batch1").show();
		$("#reminder_endpoint1").hide();
		$("#reminder2").slideDown();
	}
	else if ($("#type1a").val() === "2") {
		$("#reminder_sms1").hide();
		$("#reminder_email1").show();
		$("#reminder_batch1").hide();
		$("#reminder_endpoint1").hide();
	}
	else if ($("#type1a").val() === "1") {
		$("#reminder_sms1").show();
		$("#reminder_email1").hide();
		$("#reminder_batch1").hide();
		$("#reminder_endpoint1").hide();
		$("#reminder2").slideDown();
	}
	else if ($("#type1a").val() === "0") {
		$("#sendReminder").prop("disabled", true);
		$("#disabled_topics").removeClass("black");
		$("#disabled_topics").addClass("gray");

		$("#reminder_sms1").hide();
		$("#reminder_email1").hide();
		$("#reminder_batch1").hide();
		$("#reminder_endpoint1").hide();
		$("#reminder2").slideUp();
	}

}

$(function () {
	$("#type2a").change(function () {
		ToggleDropdown2a();
	});
	ToggleDropdown2a();
});
function ToggleDropdown2a() {
	if ($("#type2a").val() !== "0") {
		$("#sendReminder2").prop("disabled", false);
		$("#disabled_topics2").removeClass("gray");
		$("#disabled_topics2").addClass("black");

	}
	else if ($("#type2a").val() === "0") {
		$("#sendReminder2").prop("disabled", true);
		$("#disabled_topics2").removeClass("black");
		$("#disabled_topics2").addClass("gray");

		$("#reminder_sms2").hide();
		$("#reminder_email2").hide();
		$("#reminder_batch2").hide();
		$("#reminder_endpoint2").hide();
		$("#reminder3").slideUp();
	}
}

$(function () {
	$("#type2a").change(function () {
		ToggleDropdown2b();
	});
	ToggleDropdown2b();
});
function ToggleDropdown2b() {
	if ($("#type2a").val() === "4") {
		$("#reminder_sms2").hide();
		$("#reminder_email2").hide();
		$("#reminder_batch2").hide();
		$("#reminder_endpoint2").show();
		$("#reminder3").slideDown();
	}
	else if ($("#type2a").val() === "3") {
		$("#reminder_sms2").hide();
		$("#reminder_email2").hide();
		$("#reminder_batch2").show();
		$("#reminder_endpoint2").hide();
		$("#reminder3").slideDown();
	}
	else if ($("#type2a").val() === "2") {
		$("#reminder_sms2").hide();
		$("#reminder_email2").show();
		$("#reminder_batch2").hide();
		$("#reminder_endpoint2").hide();
		$("#reminder3").slideDown();
	}
	else if ($("#type2a").val() === "1") {
		$("#reminder_sms2").show();
		$("#reminder_email2").hide();
		$("#reminder_batch2").hide();
		$("#reminder_endpoint2").hide();
		$("#reminder3").slideDown();
	}
	else if ($("#type2a").val() === "0") {
		$("#sendReminder2").prop("disabled", true);
		$("#disabled_topics2").removeClass("black");
		$("#disabled_topics2").addClass("gray");

		$("#reminder_sms2").hide();
		$("#reminder_email2").hide();
		$("#reminder_batch2").hide();
		$("#reminder_endpoint2").hide();
		$("#reminder3").slideUp();
	}

}

$(function () {
	$("#type3a").change(function () {
		ToggleDropdown3a();
	});
	ToggleDropdown3a();
});
function ToggleDropdown3a() {
	if ($("#type3a").val() !== "0") {
		$("#sendReminder3").prop("disabled", false);
		$("#disabled_topics3").removeClass("gray");
		$("#disabled_topics3").addClass("black");

	}
	else if ($("#type3a").val() === "0") {
		$("#sendReminder3").prop("disabled", true);
		$("#disabled_topics3").removeClass("black");
		$("#disabled_topics3").addClass("gray");

		$("#reminder_sms3").hide();
		$("#reminder_email3").hide();
		$("#reminder_batch3").hide();
		$("#reminder_endpoint3").hide();
	}
}

$(function () {
	$("#type3a").change(function () {
		ToggleDropdown3b();
	});
	ToggleDropdown3b();
});
function ToggleDropdown3b() {
	if ($("#type3a").val() === "4") {
		$("#reminder_sms3").hide();
		$("#reminder_email3").hide();
		$("#reminder_batch3").hide();
		$("#reminder_endpoint3").show();
	}
	else if ($("#type3a").val() === "3") {
		$("#reminder_sms3").hide();
		$("#reminder_email3").hide();
		$("#reminder_batch3").show();
		$("#reminder_endpoint3").hide();
	}
	else if ($("#type3a").val() === "2") {
		$("#reminder_sms3").hide();
		$("#reminder_email3").show();
		$("#reminder_batch3").hide();
		$("#reminder_endpoint3").hide();
	}
	else if ($("#type3a").val() === "1") {
		$("#reminder_sms3").show();
		$("#reminder_email3").hide();
		$("#reminder_batch3").hide();
		$("#reminder_endpoint3").hide();
	}
	else if ($("#type3a").val() === "0") {
		$("#sendReminder3").prop("disabled", true);
		$("#disabled_topics3").removeClass("black");
		$("#disabled_topics3").addClass("gray");

		$("#reminder_sms3").hide();
		$("#reminder_email3").hide();
		$("#reminder_batch3").hide();
		$("#reminder_endpoint3").hide();
	}

}
</script>
</head>
<body>
<div id="container-page">
<div class="popDiv">
<h3>Crazy, Wacky, Smart Dropdowns</h3>
<h4>Click around to see how smart these dropowns are. </h4>

<div id="main" class="bgrFFF">
<div id="content">
<h2 id="gs">To add an action, select the type of action and configure any associated attributes.</h2>

<div id="generalSettings">
<div class="pad12">
<div class="blBoxInner pad12">
<div class="dropdown_messages">
	<label for="messages1" class='required-after'><b>Action Type <span class="red"> *</span></b></label><br/>
	<select class="selectbox-big" id="messages1" name="messages">
		<option value="" selected="selected">-- Select One --</option>
		<option value="1">No</option>
		<option value="2">Not this either</option>
		<option value="3">No No No</option>
		<option value="4">Blech</option>
		<option value="5">PICK ME!</option>
	</select>

	<div class="clear"></div>
</div>
<div class="clear"></div>
<div id="reminder_wrapper" class="dropdown_messages">
<fieldset id="reminder1" style="display:none;">
<legend>Add Reminder 1</legend>
<label for="type1a" class='required-after'>Reminder Type <span class="red"> *</span></label><br/>
<select class="selectbox-big" id="type1a" name="type1a">
	<option value="0" selected="selected">-- Select One --</option>
	<option value="1">SMS</option>
	<option value="2">Email</option>
	<option value="3">Email (Batch Mode)</option>
	<option value="4">Endpoint</option>
</select>

<div class="sendR">
	<div id="disabled_topics" class="gray">
		<label for="sendReminder">Send reminder</label>
		<select class="selectbox-big" id="sendReminder" name="sendReminder">
			<option value="0" selected="selected">-- Select One --</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select> <label for="sendReminder">day(s) prior to expiration <span class="red">*</span></label>
	</div>
</div>
<div id="reminder_sms1" class="reminderTablesDiv">
	<p>Select SMS Reminder 1</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- reminder 1 email -->
<div id="reminder_email1" class="reminderTablesDiv">
	<p>Select Email Reminder 1</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- reminder 1 batch -->
<div id="reminder_batch1" class="reminderTablesDiv">
	<p>Select Email Batch Reminder 1</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- reminder 1 endpoint -->
<div id="reminder_endpoint1" class="reminderTablesDiv">
	<p>Select Endpoint Reminder 1</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
</fieldset>
<fieldset id="reminder2">
<legend>Add Reminder 2</legend>
<label for="type1a" class='required-after'>Reminder Type <span class="red"> *</span></label><br/>
<select class="selectbox-big" id="type2a" name="type2a">
	<option value="0" selected="selected">-- Select One --</option>
	<option value="1">SMS</option>
	<option value="2">Email</option>
	<option value="3">Email (Batch Mode)</option>
	<option value="4">Endpoint</option>
</select>

<div class="sendR">
	<div id="disabled_topics2" class="gray">
		<label for="sendReminder2">Send reminder</label>
		<select class="selectbox-big" id="sendReminder2" name="sendReminder2">
			<option value="0" selected="selected">-- Select One --</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select> <label for="sendReminder2">day(s) prior to expiration <span class="red">*</span></label>
	</div>
</div>
<div id="reminder_sms2" class="reminderTablesDiv">
	<p>Select SMS Reminder 2</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- reminder 2 email -->
<div id="reminder_email2" class="reminderTablesDiv">
	<p>Select Email Reminder 2</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- reminder 2 batch -->
<div id="reminder_batch2" class="reminderTablesDiv">
	<p>Select Email Batch Reminder 2</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- reminder 2 endpoint -->
<div id="reminder_endpoint2" class="reminderTablesDiv">
	<p>Select Endpoint Reminder 2</p>
	<table class="tablesorter">
		<thead>
			<tr>
				<th>
					Message ID
				</th>
				<th>
					Message
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="odd">
				<td><a href="#" class="">test profileupp</a></td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>dsfsdfsdfdsf Rufus</td>
				<td>the Schnoodle king</td>
			</tr>
			<tr class="odd">
				<td>New Profile For Audit</td>
				<td>gdsgsdfgsfdg</td>
			</tr>
			<tr class="even">
				<td>fddfdg</td>
				<td>dfgfdgdfgdf</td>
			</tr>
			<tr class="odd">
				<td>Profile name 123</td>
				<td>sdfdfsdf</td>
			</tr>
			<tr class="even">
				<td>Audit log check profile</td>
				<td>Audit log check profile desc</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110256</td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>test profileupp110243</td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="odd">
				<td>test profileupp110250</td>
				<td>Test Profile Description</td>
			</tr>
			<tr class="even">
				<td>test profileupp110217</td>
				<td>Test Profile Description</td>
			</tr>
		</tbody>
	</table>
</div>
</fieldset>
<fieldset id="reminder3">
	<legend>Add Reminder 3</legend>
	<label for="type3a" class='required-after'>Reminder Type <span class="red"> *</span></label><br/>
	<select class="selectbox-big" id="type3a" name="type3a">
		<option value="0" selected="selected">-- Select One --</option>
		<option value="1">SMS</option>
		<option value="2">Email</option>
		<option value="3">Email (Batch Mode)</option>
		<option value="4">Endpoint</option>
	</select>

	<div class="sendR">
		<div id="disabled_topics3" class="gray">
			<label for="sendReminder3">Send reminder</label>
			<select class="selectbox-big" id="sendReminder3" name="sendReminder3">
				<option value="0" selected="selected">-- Select One --</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select> <label for="sendReminder3">day(s) prior to expiration <span class="red">*</span></label>
		</div>
	</div>
	<div id="reminder_sms3" class="reminderTablesDiv">
		<p>Select SMS Reminder 3</p>
		<table class="tablesorter">
			<thead>
				<tr>
					<th>
						Message ID
					</th>
					<th>
						Message
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="odd">
					<td>test profileupp</td>
					<td>Test Profile Description</td>
				</tr>
				<tr class="even">
					<td>dsfsdfsdfdsf Rufus</td>
					<td>the Schnoodle king</td>
				</tr>
				<tr class="odd">
					<td>New Profile For Audit</td>
					<td>gdsgsdfgsfdg</td>
				</tr>
				<tr class="even">
					<td>fddfdg</td>
					<td>dfgfdgdfgdf</td>
				</tr>
				<tr class="odd">
					<td>Profile name 123</td>
					<td>sdfdfsdf</td>
				</tr>
				<tr class="even">
					<td>Audit log check profile</td>
					<td>Audit log check profile desc</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- reminder 3 email -->
	<div id="reminder_email3" class="reminderTablesDiv">
		<p>Select Email Reminder 3</p>
		<table class="tablesorter">
			<thead>
				<tr>
					<th>
						Message ID
					</th>
					<th>
						Message
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="odd">
					<td>test profileupp</td>
					<td>Test Profile Description</td>
				</tr>
				<tr class="even">
					<td>dsfsdfsdfdsf Rufus</td>
					<td>the Schnoodle king</td>
				</tr>
				<tr class="odd">
					<td>New Profile For Audit</td>
					<td>gdsgsdfgsfdg</td>
				</tr>
				<tr class="even">
					<td>fddfdg</td>
					<td>dfgfdgdfgdf</td>
				</tr>
				<tr class="odd">
					<td>Profile name 123</td>
					<td>sdfdfsdf</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- reminder 3 batch -->
	<div id="reminder_batch3" class="reminderTablesDiv">
		<p>Select Email Batch Reminder 3</p>
		<table class="tablesorter">
			<thead>
				<tr>
					<th>
						Message ID
					</th>
					<th>
						Message
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="odd">
					<td>test profileupp</td>
					<td>Test Profile Description</td>
				</tr>
				<tr class="even">
					<td>dsfsdfsdfdsf Rufus</td>
					<td>the Schnoodle king</td>
				</tr>
				<tr class="odd">
					<td>New Profile For Audit</td>
					<td>gdsgsdfgsfdg</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- reminder 3 endpoint -->
	<div id="reminder_endpoint3" class="reminderTablesDiv">
		<p>Select Endpoint Reminder 3</p>
		<table class="tablesorter">
			<thead>
				<tr>
					<th>
						Message ID
					</th>
					<th>
						Message
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="odd">
					<td>test profileupp</td>
					<td>Test Profile Description</td>
				</tr>
				<tr class="even">
					<td>dsfsdfsdfdsf Rufus</td>
					<td>the Schnoodle king</td>
				</tr>
				<tr class="odd">
					<td>New Profile For Audit</td>
					<td>gdsgsdfgsfdg</td>
				</tr>
				<tr class="even">
					<td>fddfdg</td>
					<td>dfgfdgdfgdf</td>
				</tr>
				<tr class="odd">
					<td>Profile name 123</td>
					<td>sdfdfsdf</td>
				</tr>
			</tbody>
		</table>
	</div>
</fieldset>
</div>
</div>
<div class="clear"></div>
</div>
</div>
<div class="pad12">
	<div class="mar10Top mar10Btm flRt ">
		<form action="profiles.jsp" method="post">
			<input type="button" name="ok" class="btnBl" align="left" value="Fake" id="ok"/>
			<input type="submit" name="cancel" class="btnBl orangeBT" align="right" value="Fake" id="cancel"/>
		</form>
	</div>
	<div class="clear"></div>
</div>
<p>&nbsp;</p>
</div>
</div>
</div>
</div>
</body>
</html>

