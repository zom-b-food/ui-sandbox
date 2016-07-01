
<!doctype html>
<html lang="en">
<head>

	<!-- Meta -->
	<%@ include file="_dependencies.html" %>
	<title>partSummary</title>
	<link rel="stylesheet" href="Content/common/css/nestedAccordion.css"/>
	<script src="Content/scripts/jquery.cbpNTAccordion.js"></script>
	<script type="text/javascript">
		$(function () {
			$("#accordion").accordion({
				heightStyle: "content"
			});
		});
		$(function () {
			$("#accordion1").accordion({
				heightStyle: "content"
			});
		});

		$(function () {
			$("#accordion2").accordion({
				heightStyle: "content"
			});
		});

		$(document).ready(function () {

			$("#showHide1").hide();
			$("#shLink1").show();

			$('#shLink1').click(function () {
				$("#showHide1").slideToggle();
				return false;
			});

			$("#showHide2").hide();
			$("#shLink2").show();

			$('#shLink2').click(function () {
				$("#showHide2").slideToggle();
				return false;
			});

			$("#showHide3").hide();
			$("#shLink3").show();

			$('#shLink3').click(function () {
				$("#showHide3").slideToggle();
				return false;
			});

			$("#showHide4").hide();
			$("#shLink4").show();

			$('#shLink4').click(function () {
				$("#showHide4").slideToggle();
				return false;
			});

			$("#showHide5").hide();
			$("#shLink5").show();

			$('#shLink5').click(function () {
				$("#showHide5").slideToggle();
				return false;
			});

			$("#showHide6").hide();
			$("#shLink6").show();

			$('#shLink6').click(function () {
				$("#showHide6").slideToggle();
				return false;
			});
			$("#showHide7").hide();
			$("#shLink7").show();

			$('#shLink7').click(function () {
				$("#showHide7").slideToggle();
				return false;
			});
			$("#showHide8").hide();
			$("#shLink8").show();

			$('#shLink8').click(function () {
				$("#showHide8").slideToggle();
				return false;
			});

		});
	</script>
	<style type="text/css">
		.sidebar {
			padding: 4px 8px;
			overflow: hidden;
			border: 1px solid #dbb98c;
			-webkit-border-radius: 4px 4px 4px 4px !important;
			-moz-border-radius: 4px 4px 4px 4px !important;
			border-radius: 4px 4px 4px 4px !important;
			background: #FFFBF5;
			margin-bottom: 20px;
		}

	</style>
</head>
<body class="cf2">
<!-- Main Container Fluid -->
<div class="container fluid menu-left">
<%@ include file="_headerNav.html" %>
<div id="wrapper">
<div id="main-content" class="container">
<!-- Content -->


<div class="innerLR">
<div class="heading-buttons">
	<h3>Warren Cross
		<small>Participant</small>
	</h3>
</div>
<div class="littlePush"></div>
<div class="widget widget-tabs">
<!-- Tabs Heading -->
<%@ include file="_partTabs.html" %>


<!-- // Tabs Heading END -->
<div class="widget-body tabsBorder">
<div class="tab-content">
<div class="heading-buttons">
	<h3>Summary</h3>


	<div class="clearfix"></div>

</div>

<div class="col-md-3 sidebar">

	<h4>Met Needs</h4>

	<div id="accordion">
		<div class="panel-heading panel-group">
			<h4 class="panel-title">&nbsp;Health Services (3)</h4>
		</div>
		<div class="panel-body">
			<div class="alignL">
				<label>Diabetes - Type 1</label><br/>
			</div>
			<div class="alignL">
				<label>Diabetes - Type 2</label><br/>
			</div>
			<div class="alignL">
				<label>Hepatitis C</label><br/>
			</div>
		</div>
		<div class="panel-heading panel-group">
			<h4 class="panel-title">&nbsp;Dental Services (1)</h4>
		</div>
		<div class="panel-body">
			<div class="alignL">
				<label>Gingivitis</label><br/>
			</div>
		</div>
	</div>
	<h4>Service Needs</h4>

	<div id="accordion1">
		<div class="panel-heading panel-group">
			<h4 class="panel-title">&nbsp;Health Services</h4>
		</div>
		<div class="panel-body">
			<div class="alignL">
				<input type="checkbox" value="1" checked="checked" disabled>
				<label>Diabetes - Type 1</label><br/>
			</div>
			<div class="alignL">
				<input type="checkbox" value="1" checked="checked" disabled>
				<label>Diabetes - Type 2</label><br/>
			</div>
			<div class="alignL">
				<input type="checkbox" value="1" checked="checked" disabled>
				<label>Hepatitis C</label><br/>
			</div>
			<div class="alignL">
				<input type="checkbox" value="1" checked="checked" disabled>
				<label>HIV/AIDS</label><br/>
			</div>
		</div>
		<div class="panel-heading panel-group">
			<h4 class="panel-title">&nbsp;Dental Services</h4>
		</div>
		<div class="panel-body">
			<div class="alignL">
				<input type="checkbox" value="1" checked="checked" disabled>
				<label>Gingivitis</label><br/>
			</div>
		</div>
		<div class="panel-heading panel-group">
			<h4 class="panel-title">&nbsp;Housing Services</h4>
		</div>
		<div class="panel-body">
			<div class="alignL">
				<input type="checkbox" value="1" checked="checked" disabled>
				<label>Temporary/Transitional</label><br/>
			</div>
		</div>
		<div class="panel-heading panel-group">
			<h4 class="panel-title">&nbsp;Employment Services</h4>
		</div>
		<div class="panel-body">
			<div class="alignL">
				<input type="checkbox" value="1" checked="checked" disabled>
				<label>Job/Vocational Training</label><br/>
			</div>
		</div>
	</div>
	<!-- Accordions End -->
	<!-- Column 2 end -->


</div>

<div class="col-md-9">


<div class="clearfix"></div>
<div class="widget-body greyBg">

	<h4>General Information</h4>

	<div class="littlePush"></div>
	<div class="row">
		<div class="col-md-3 alignR"><strong>Name:</strong></div>
		<div class="col-md-5">Wexford Maryland</div>
	</div>
	<div class="row">
		<div class="col-md-3 alignR"><strong>Description:</strong></div>
		<div class="col-md-8">
			<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus laborum eiusmod. Brunch 3 wolf moon
			   tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
			   anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
		</div>
	</div>
	<div class="row">
		<div class="col-md-3 alignR"><strong>Address:</strong></div>
		<div class="col-md-5">123 South Braille Street<br/>Apt 433<br/>San Jose, CA 95126</div>
	</div>

</div>
<div class="littlePush"></div>
<div class="col-md-12 noPd">
<ul id="cbp-ntaccordion" class="cbp-ntaccordion">
<li>
<h3 class="cbp-nttrigger">Hamilton County Clinic</h3>

<div class="cbp-ntcontent">
<ul class="cbp-ntsubaccordion">
<li>
	<h4 class="cbp-nttrigger list">Downtown Jasper<span class="floatRight"><strong>Sent</strong>&nbsp;12/12/2014</span>
	</h4>

	<div class="cbp-ntcontent sub noBorder">
		<hr/>
		<div class="row">
			<div class="col-md-5">
				<h5>Hepatitis A</h5>
			</div>
			<div class="col-md-1 alignR">
				<span class="green">2*</span>
			</div>
			<div class="col-md-1 alignR">
				<span class="red">1?</span>
			</div>
			<div class="col-md-1 alignR">
				<img src="./images/paperIcon.png"/>
			</div>
			<div class="col-md-3 alignR">
				<span><a href="#" id="shLink1">Show/Hide Details</a></span>
			</div>
		</div>
		<div id="showHide1">
			<div class="row">
				<div class="col-md-11 ml15">
					Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
					error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>
			<div class="littlePush"></div>
			<div class="row">
				<div class="col-md-2 alignR">Gender:</div>
				<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Age Range:</div>
				<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Income:</div>
				<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
						                                                                                class="green">[$9,900]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Comments:</div>
				<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
				                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
				                      architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>

		</div>
	</div>
	<div class="cbp-ntcontent sub noBorder">
		<div class="row">
			<div class="col-md-5">
				<h5>Diabetes - Type 1</h5>
			</div>
			<div class="col-md-1 alignR">
				<span class="green">2*</span>
			</div>
			<div class="col-md-1 alignR">
				<span class="red">1?</span>
			</div>
			<div class="col-md-1 alignR">
				<img src="./images/paperIcon.png"/>
			</div>
			<div class="col-md-3 alignR">
				<span><a href="#" id="shLink2">Show/Hide Details</a></span>
			</div>
		</div>
		<div id="showHide2">
			<div class="row">
				<div class="col-md-11 ml15">
					Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
					error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>
			<div class="littlePush"></div>
			<div class="row">
				<div class="col-md-2 alignR">Gender:</div>
				<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Age Range:</div>
				<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Income:</div>
				<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
						                                                                                class="green">[$9,900]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Comments:</div>
				<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
				                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
				                      architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>

		</div>

	</div>

</li>

<li>
	<h4 class="cbp-nttrigger list">Uptown Jasper<span class="floatRight"><strong>Sent</strong>&nbsp;10/02/2013</span>
	</h4>

	<div class="cbp-ntcontent sub noBorder">
		<hr/>
		<div class="row">
			<div class="col-md-5">
				<h5>HIV/AIDS</h5>
			</div>
			<div class="col-md-1 alignR">
				<span class="green">2*</span>
			</div>
			<div class="col-md-1 alignR">
				<span class="red">1?</span>
			</div>
			<div class="col-md-1 alignR">
				<img src="./images/paperIcon.png"/>
			</div>
			<div class="col-md-3 alignR">
				<span><a href="#" id="shLink3">Show/Hide Details</a></span>
			</div>
		</div>
		<div id="showHide3">
			<div class="row">
				<div class="col-md-11 ml15">
					Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
					error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>
			<div class="littlePush"></div>
			<div class="row">
				<div class="col-md-2 alignR">Gender:</div>
				<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Age Range:</div>
				<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Income:</div>
				<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
						                                                                                class="green">[$9,900]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Comments:</div>
				<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
				                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
				                      architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>

		</div>
	</div>
	<div class="cbp-ntcontent sub noBorder">
		<div class="row">
			<div class="col-md-5">
				<h5>Hypertension</h5>
			</div>
			<div class="col-md-1 alignR">
				<span class="green">2*</span>
			</div>
			<div class="col-md-1 alignR">
				<span class="red">1?</span>
			</div>
			<div class="col-md-1 alignR">
				<img src="./images/paperIcon.png"/>
			</div>
			<div class="col-md-3 alignR">
				<span><a href="#" id="shLink4">Show/Hide Details</a></span>
			</div>
		</div>
		<div id="showHide4">
			<div class="row">
				<div class="col-md-11 ml15">
					Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
					error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>
			<div class="littlePush"></div>
			<div class="row">
				<div class="col-md-2 alignR">Gender:</div>
				<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Age Range:</div>
				<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Income:</div>
				<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
						                                                                                class="green">[$9,900]</span></div>
			</div>
			<div class="row">
				<div class="col-md-2 alignR">Comments:</div>
				<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
				                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
				                      architecto beatae vitae dicta sunt explicabo.
				</div>
			</div>

		</div>
		<hr/>
	</div>
</li>
</ul>
</div>
</li>
<li>
	<h3 class="cbp-nttrigger">Lake City Men's Shelter</h3>

	<div class="cbp-ntcontent">
		<ul class="cbp-ntsubaccordion">
			<li>
				<h4 class="cbp-nttrigger list">Main Dormitory<span class="floatRight"><strong>Canceled</strong>&nbsp;12/12/2014</span>
				</h4>

				<div class="cbp-ntcontent sub noBorder">
					<hr/>
					<div class="row">
						<div class="col-md-5">
							<h5>Temporary/Transitional Housing</h5>
						</div>
						<div class="col-md-1 alignR">
							<span class="green">2*</span>
						</div>
						<div class="col-md-1 alignR">
							<span class="red">1?</span>
						</div>
						<div class="col-md-1 alignR">
							<img src="./images/paperIcon.png"/>
						</div>
						<div class="col-md-3 alignR">
							<span><a href="#" id="shLink5">Show/Hide Details</a></span>
						</div>
					</div>
					<div id="showHide5">
						<div class="row">
							<div class="col-md-11 ml15">
								Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>
						<div class="littlePush"></div>
						<div class="row">
							<div class="col-md-2 alignR">Gender:</div>
							<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Age Range:</div>
							<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Income:</div>
							<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
									                                                                                class="green">[$9,900]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Comments:</div>
							<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
							                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							                      architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>

					</div>
				</div>

			</li>


		</ul>
	</div>
</li>
<li>
	<h3 class="cbp-nttrigger">Highlands Workforce Collaborative</h3>

	<div class="cbp-ntcontent">
		<ul class="cbp-ntsubaccordion">
			<li>
				<h4 class="cbp-nttrigger list">Central Campus<span class="floatRight"><strong>Sent</strong>&nbsp;12/12/2014</span></h4>

				<div class="cbp-ntcontent sub noBorder">
					<hr/>
					<div class="row">
						<div class="col-md-5">
							<h5>Job/Vocational Training</h5>
						</div>
						<div class="col-md-1 alignR">
							<span class="green">2*</span>
						</div>
						<div class="col-md-1 alignR">
							<span class="red">1?</span>
						</div>
						<div class="col-md-1 alignR">
							<img src="./images/paperIcon.png"/>
						</div>
						<div class="col-md-3 alignR">
							<span><a href="#" id="shLink6">Show/Hide Details</a></span>
						</div>
					</div>
					<div id="showHide6">
						<div class="row">
							<div class="col-md-11 ml15">
								Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>
						<div class="littlePush"></div>
						<div class="row">
							<div class="col-md-2 alignR">Gender:</div>
							<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Age Range:</div>
							<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Income:</div>
							<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
									                                                                                class="green">[$9,900]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Comments:</div>
							<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
							                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							                      architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>

					</div>
				</div>
				<div class="cbp-ntcontent sub noBorder">
					<div class="row">
						<div class="col-md-5">
							<h5>Job Placement Services</h5>
						</div>
						<div class="col-md-1 alignR">
							<span class="green">2*</span>
						</div>
						<div class="col-md-1 alignR">
							<span class="red">1?</span>
						</div>
						<div class="col-md-1 alignR">
							<img src="./images/paperIcon.png"/>
						</div>
						<div class="col-md-3 alignR">
							<span><a href="#" id="shLink7">Show/Hide Details</a></span>
						</div>
					</div>
					<div id="showHide7">
						<div class="row">
							<div class="col-md-11 ml15">
								Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>
						<div class="littlePush"></div>
						<div class="row">
							<div class="col-md-2 alignR">Gender:</div>
							<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Age Range:</div>
							<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Income:</div>
							<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
									                                                                                class="green">[$9,900]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Comments:</div>
							<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
							                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							                      architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>

					</div>
					<hr/>
				</div>

			</li>

			<li>
				<h4 class="cbp-nttrigger list">South Campus<span class="floatRight"><strong>Canceled</strong>&nbsp;02/25/2014</span>
				</h4>

				<div class="cbp-ntcontent sub noBorder">
					<hr/>
					<div class="row">
						<div class="col-md-5">
							<h5>License Exam Preparation</h5>
						</div>
						<div class="col-md-1 alignR">
							<span class="green">2*</span>
						</div>
						<div class="col-md-1 alignR">
							<span class="red">1?</span>
						</div>
						<div class="col-md-1 alignR">
							<img src="./images/paperIcon.png"/>
						</div>
						<div class="col-md-3 alignR">
							<span><a href="#" id="shLink8">Show/Hide Details</a></span>
						</div>
					</div>
					<div id="showHide8">
						<div class="row">
							<div class="col-md-11 ml15">
								Discription goes here... Treatment includes Sed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>
						<div class="littlePush"></div>
						<div class="row">
							<div class="col-md-2 alignR">Gender:</div>
							<div class="col-md-7">Male or Female-to-male <span class="green">[Male]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Age Range:</div>
							<div class="col-md-7">18-25 <span class="red">[Unknown]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Income:</div>
							<div class="col-md-9">$10,000 Limit (80% of AMI, Houshold of 2, Alameda County) <span
									                                                                                class="green">[$9,900]</span></div>
						</div>
						<div class="row">
							<div class="col-md-2 alignR">Comments:</div>
							<div class="col-md-9">Lorem iste natus error sit voluptatem accusantium doloremque
							                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							                      architecto beatae vitae dicta sunt explicabo.
							</div>
						</div>

					</div>
				</div>

			</li>
		</ul>
	</div>
</li>
</ul>
</div>
<div class="littlePush"></div>
<div class="row">
	<div class="col-md-12 noPd">
		<div class="form-group">
			<div class="col-md-9 noPd">
				<input type="button" id="backButton" class="cancel floatLeft"
				       value="Back"/>
				<input type="submit" id="saveButton" class="submit floatLeft" value="Save & Continue"/>

			</div>
		</div>
	</div>
</div>


</div>


<div class="push"></div>

</div>

</div>
</div>

</div>
</div>
</div>
</div>
</div>
<!-- End Content -->
<div class="push"></div>
<!-- modal -->
<div class="modal fade" id="blank" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog large">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

			</div>
			<div class="modal-body">
				<img src="pop.jpg"/>
			</div>
		</div>

	</div>
</div>
<br/>
<%@ include file="_footer.html" %>

<script type="text/javascript">
	$(document).ready(function () {
		var content = $(document).attr('title');
		if (content = 'partSummary') {

			$('#partSummary').addClass('active');
		}
	});
	$(function () {
		/*
		 - how to call the nested accordion plugin:
		 $( selector ).cbpNTAccordion( [options] );
		 - destroy:
		 $( selector ).cbpNTAccordion( 'destroy' );
		 */

		$('#cbp-ntaccordion').cbpNTAccordion();

	});
</script>
</body>
</html>
