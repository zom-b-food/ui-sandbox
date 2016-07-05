<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>UPP - Add Merchant 3</title>
	<link type="text/css" rel="stylesheet" href="${contextPath}/pages/work/demos/demos/visa/jquery-ui.css"/>
	<link type="text/css" rel="stylesheet" href="${contextPath}/pages/work/demos/demos/visa/old.css"/>
	<link type="text/css" rel="stylesheet" href="${contextPath}/pages/work/demos/demos/visa/pops.css"/>
	<script type="text/javascript" src="${contextPath}/pages/work/demos/demos/visa/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="${contextPath}/pages/work/demos/demos/visa/jquery-ui-1.10.3.js"></script>
	<script src="${contextPath}/pages/work/demos/demos/visa/jquery-1.8.3.min.js" type="text/javascript"></script>
	<link type="text/css" rel="stylesheet" href="${contextPath}/pages/work/demos/demos/visa/widget.css"/>
	<style type="text/css">
		label.flushleft {
			font-size: 1.25em;
			white-space: nowrap;
			width: 500px;
			margin-left: 44px;
			margin-top: -33px;
		}

		pre {
			margin-left: -80px;
			font-size: 12px;
			width: 555px;
		}

		.head {
			padding-top: 6px;
		}

			/* Fieldset is used outside of a form which is why it appears in this css file  */

		h2 {
			color: #05263c;
		}
	</style>
	<script type="text/javascript">
		// shows - hides a div when a checkbox is checked
		function Reveal(it, box) {
			var vis = (box.checked) ? "block" : "none";
			document.getElementById(it).style.display = vis;
		}
		function Hide(it, box) {
			var vis = (box.checked) ? "none" : "none";
			document.getElementById(it).style.display = vis;
		}

		//moves items from left select to right select
		function MyMoveItem(fromObj, toObj) {
			for (var selIndex = fromObj.length - 1; selIndex >= 0; selIndex--) {
				// Is this option selected?
				if (fromObj.options[selIndex].selected) {
					// Get the text and value for this option.
					var newText = fromObj.options[selIndex].text;
					var newValue = fromObj.options[selIndex].value;

					// Create a new option, and add to the other select box.
					var newOption = new Option(newText, newValue)
					toObj[toObj.length] = newOption;

					// Delete the option in the first select box.
					fromObj[selIndex] = null;
				}
			}
		}

		//these are the buttons that do the actual moving content back and forth
		$().ready(function () {
			$('#add').click(function () {
				return !$('#select1 option:selected').remove().appendTo('#select2');
			});
			$('#remove').click(function () {
				return !$('#select2 option:selected').remove().appendTo('#select1');
			});
			$("#selectAll").click(function () {
				$('select option').attr("selected", "selected");
			});
		});

		// this writes classes and div id values to the newProf div for each item selected
		$().ready(function () {
			$("#btnUpdate").live("click", function () {

				$('.Spain').hide();
				$('.Egypt').hide();
				$('.Australia').hide();
				$('.Ecuador').hide();
				$('.Japan').hide();

				// this dynamically builds our links within the newProf div that open unique lightwindows
				$('#select2 option').map(function () {
					return $('<a/>', {class: $(this).val() + ' ' + '', id: 'enableProfiles' + $(this).val(),
						href: './includes/profile' + $(this).text() + '.jsp', text: $(this).text()}).get(); // or this.value / $(this).val()
				}).appendTo('#newProf');
				$("#select2").val();
			});
		});

		$().ready(function () {
			$('.btnCancel').click(function () {
				$('.Spain').hide();
				$('.Egypt').hide();
				$('.Australia').hide();
				$('.Ecuador').hide();
				$('.Japan').hide();
			});
		});

		$().ready(function () {
			$("#btnUpdate").click(function () {
				ToggleProfileDivs();
			});
			ToggleProfileDivs();
		});
		function ToggleProfileDivs() {
			var allProfiles = [];
			var s = document.getElementById("select2");
			for (var i = 0; i < s.options.length; i++) {
				if (s.options[i].selected == true) {
					var profid = s.options[i].value;
					allProfiles.push(profid);
				}
			}
		}

		$().ready(function () {
			$("#vtAccordion").click(function () {
				$("#virtualTerminal").slideDown();
				$("#secureAcceptance").slideUp();
				$("h2#vt").removeClass("narrowoff");
				$("h2#vt").addClass("narrowon");
				$("h2#sa").removeClass("narrowon");
				$("h2#sa").addClass("narrowoff");

			});

			$("#saAccordion").click(function () {
				$("#secureAcceptance").slideDown();
				$("#virtualTerminal").slideUp();
				$("h2#sa").removeClass("narrowoff");
				$("h2#sa").addClass("narrowon");
				$("h2#vt").removeClass("narrowon");
				$("h2#vt").addClass("narrowoff");

			});
		});
	</script>
</head>
<body>
	<div id="container-page">
		<div class="popDiv">
			<h3>JS/JQuery Dynamic Widget</h3>
			<h4>Dynamic widget that builds a URL based on user input from two select fields and then writes an array of
				itself with clickable links built at runtime that opens content in a lightwindow. </h4>

			<div class="bgButtonBox">
				<div class="innerBox">
					<div class="blBox" style="margin-left:5px;">
						<p><span
								class="strong">Select and configure the products (Boxes) the merchant may use below.</span>
						</p>

						<p>&nbsp;</p>
						<ul class="inlineBlock">
							<%-- <li>
									<input type="checkbox" name="tokenizationEnabled" value="on"
										   onclick="Reveal('sVT', this)">
									<label class="flushleft">Box 1</label>
								</li>--%>
							<li>
								<input type="checkbox" name="verboseDataEnabled" value="on"
								       onclick="Reveal('sSA', this)">
								<label class="flushleft">Click to Show / Hide Select Box</label>
							</li>
						</ul>
						<br class="clear" style="line-height: 1px;"/>

						<div id="sVT" class="blBox" style="display: none;">
							<div id="vtAccordion"><h2 id="vt" class="narrowoff">Box 1</h2></div>
							<div id="virtualTerminal" style="display:none;">
								<div class="pad12">
									<h2>Content here</h2>

									<p>Click Box 2</p>
								</div>
							</div>
						</div>
						<div id="sSA" class="blBox" style="display: none;">
							<div id="saAccordion">
								<h2 id="sa" class="narrowoff saAccordion">Box 2</h2>
							</div>
							<div id="secureAcceptance" style="display:none;">
								<div class="pad12">
									<strong>Select Box 2 Profiles</strong>

									<p>&nbsp;</p>

									<div class="saPicker">
										<table cellpadding="0" cellspacing="0" border="1" height="144px;">
											<tbody>
												<tr>
													<th width="220px" class="head">Disabled Profiles
														<div id="selectAll" style="float:right; padding-top:0;"
														     class="head"> Select All
														</div>
													</th>
													<th width="50px" rowspan="2"><a href="#" id="add"><img class="arrow"
													                                                       src="move_right.png"/></a>
														<br/>
														<a href="#" id="remove"><img class="arrow" src="move_left.png"/></a>
													</th>
													<th width="220px" class="head">Enabled Profiles</th>
												</tr>
												<tr>
													<td><select name="disable" multiple="" id="select1" class="select1">
														<option value="Spain">Spain</option>
														<option value="Egypt">Egypt</option>
														<option value="Australia">Australia</option>
														<option value="Ecuador">Ecuador</option>
														<option value="Japan">Japan</option>
													</select>
													</td>
													<td><select name="enable" id="select2" class="select2" multiple=""
													            size="2">
														<!-- this select is filled with items from other select at runtime  -->
													</select>
													</td>
												</tr>
											</tbody>
										</table>
										<div class="mar20Top mar10Btm flRt" style="padding-right:76px;">
											<input type="button" id="btnUpdate" name="update" class="btnBl btnUpdate"
											       align="right" value="Update"/>
											<input type="button" id="btnCan" name="cancel" class="btnBl btnCancel"
											       align="right" value="Cancel"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="pad12">
							<div id="newProf">
								<!-- links to lightwindows will be built here at runtime -->
							</div>
							<hr>
							<p>&nbsp;</p>
                    <pre>
            // This dynamically builds our links within a div that opens a lightwindow
	           for each option selected.
            $('#select2 option').map(function () {
                return $('[a\]', {class: $(this).val() + ' ' + 'iframe cboxElement', id: 'enableProfiles'
                + $(this).val(),
                href: './includes/profile' + $(this).text() + '.jsp', text: $(this).text()}).get();
                // or this.value / $(this).val()
            }).appendTo('#newProf');
            $("#select2").val();
                    </pre>
						</div>
						<p style="line-height: 1px;">&nbsp;</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

