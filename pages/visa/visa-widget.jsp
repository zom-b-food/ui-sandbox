<!DOCTYPE html>
<html lang="en-gb" dir="ltr">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>widget component - visa redesign</title>
		<%@ include file="/sitewide/globals.jsp" %>
		<script src="${contextPath}/pages/_deps/js/jquery-1.8.3.min.js" type="text/javascript"></script>
		<script src="${contextPath}/resources/js/components/visa.js"></script>
		<link type="text/css" rel="stylesheet" href="${contextPath}/resources/css/components/widget.css"/>
		<link rel="stylesheet" href="${contextPath}/pages/visa/jquery.fancybox.css"/>
		<script src="${contextPath}/resources/js/components/jquery.fancybox.js"></script>
		<script>
			$().ready(function () {
				$('.fancybox').fancybox();
				$("#fancybox-manual-b").click(function () {
					$.fancybox.open({
						href: 'iframe.html',
						type: 'iframe',
						padding: 5
					});
				});
			});
		</script>
	</head>
	<body>
		<header>
			<%@ include file="/sitewide/header.jsp" %>
		</header>
		<main id="content">
			<div class="uk-container uk-container-center middle">
				<div class="uk-grid" data-uk-grid-margin>
					<div class="am-sidebar uk-width-medium-1-4 uk-hidden-small">
						<%@ include file="/sitewide/sidenav.jsp" %>
					</div>
					<div class="uk-width-medium-3-4">
						<article>
							<h3>JS/JQuery Dynamic Widget</h3>
							<p>Dynamic widget that builds a URL based on user input from two select fields and then
								writes an array of
								itself with clickable links built at runtime that opens content in a lightwindow. </p>
							<p>Select and configure the products (Boxes) the merchant may use below.</p>

								<div class="blBox" style="margin-left:5px;">


										<ul class="inlineBlock">
											<li>
												<input type="checkbox" name="tokenizationEnabled" value="on"
												       onclick="Reveal('sVT', this)">
												<label class="flushleft">Virtual Terminal</label>
											</li>
											<li>
												<input type="checkbox" name="verboseDataEnabled" value="on"
												       onclick="Reveal('sSA', this)">
												<label class="flushleft">Secure Acceptance</label>
											</li>
										</ul>
										<div id="sVT" class="blBox" style="display: none;">
											<div id="vaAccordion">
												<h4 id="vt" class="narrowoff vtAccordion">Virtual Terminal</h4>
											</div>
										</div>
										<div id="sSA" class="blBox" style="display: none;">
											<div id="saAccordion">
												<h4 id="sa" class="narrowoff saAccordion">Secure Acceptance</h4>
											</div>
											<div id="secureAcceptance" style="display:none;">
												<div class="pad12">
													<strong>Select Profiles</strong>

													<div class="saPicker">
														<table cellpadding="0" cellspacing="0" border="1"
														       height="144px;">
															<tbody>
																<tr>
																	<th width="220px" class="head">Disabled Profiles
																		<div id="selectAll"
																		     style="float:right; padding-top:0;"
																		     class="head"> Select All
																		</div>
																	</th>
																	<th width="50px" rowspan="2"><a href="#"
																	                                id="add"><img
																			class="arrow" src="move_right.png"/></a>
																		<br/>
																		<a href="#" id="remove"><img class="arrow"
																		                             src="move_left.png"/></a>
																	</th>
																	<th width="220px" class="head">Enabled Profiles</th>
																</tr>
																<tr>
																	<td><select name="disable" multiple="" id="select1"
																	            class="select1">
																		<option value="Spain">Spain</option>
																		<option value="Egypt">Egypt</option>
																		<option value="Australia">Australia</option>
																		<option value="Ecuador">Ecuador</option>
																		<option value="Japan">Japan</option>
																	</select>
																	</td>
																	<td><select name="enable" id="select2"
																	            class="select2" multiple="" size="2">
																		<!-- this select is filled with items from other select at runtime  -->
																	</select>
																	</td>
																</tr>
															</tbody>
														</table>
														<div class="mar20Top mar10Btm flRt" style="padding-right:76px;">
															<input type="button" id="btnUpdate" name="update"
															       class="btnBl btnUpdate"
															       align="right" value="Update"/>
															<input type="button" id="btnCan" name="cancel"
															       class="btnBl btnCancel"
															       align="right" value="Cancel"/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="newProf">
											<!-- links to lightwindows will be built here at runtime -->
										</div>
										<hr>
										<div>
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
									</div>

						</article>
					</div>
				</div>
			</div>
		</main>
		<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
			<%@ include file="/sitewide/footer.jsp" %>
		</footer>
		<%@ include file="/sitewide/offcanvas.jsp" %>
	</body>
</html>

