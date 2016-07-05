<!doctype html>
<html lang="en">
<head>
	<title>cboLocations</title>
	<!-- Meta -->
	<%@ include file="_dependencies.html" %>
	<script type="text/javascript">
		$(function () {
			$("#accordion").accordion({
				heightStyle: "content"
			});
		});
	</script>
</head>
<body>
<!-- Main Container Fluid -->
<div class="container fluid menu-left">
<%@ include file="_headerNav.html" %>
<div id="wrapper">
<!-- Content -->
<div id="main-content" class="container">
	<div class="innerLR">
		<div class="heading-buttons">
			<h3>Maryland Health Clinic
				<small>Community Based Organization</small>
			</h3>
		</div>
		<div class="littlePush"></div>
		<div class="widget widget-tabs">
			<!-- Tabs Heading -->
			<%@ include file="_partTabs.html" %>
			<!-- Tabs Heading -->
			<div class="widget-body tabsBorder">
				<div class="tab-content">
					<!-- Tab content -->
					<div class="heading-buttons">
						<h3>All Locations</h3>

						<div class="buttons pull-right"><a data-target="#blank" data-toggle="modal" href=""
						                                   class="specLink glyphicons circle_plus btn-icon">Add a
							Location</a></div>
						<div class="clearfix"></div>
					</div>
					<div class="col-md-12 noPd">
						<div class="widget-body beigeBG">
							<h4>Maryland Health Clinic</h4>

							<div class="clearfix"></div>
							<div class="row">
								<div class="col-md-2 alignR">
									<label class="blockRight">Description:</label>
								</div>
								<div class="buttons pull-right"><a data-target="#blank" data-toggle="modal"
								                                   class="btn btn-default glyphicons edit btn-icon"
								                                   href="">Edit Location</a>
									<br/>
								</div>
								<div class="col-md-8">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam
										culpa deleniti dolores earum excepturi facilis harum incidunt maiores molestias
										nostrum, odit quo rerum sunt. Aliquid hic labore quibusdam!</p>
								</div>
							</div>
							<!-- Address -->
							<div class="row">
								<div class="col-md-2 alignR">
									<label class="blockRight">Address:</label>
								</div>
								<div class="col-md-6">
									<p>
										123 Bone Street, <br/>
										Apt. 6, <br/>
										San Jose, Ca 95126.</p>
								</div>
							</div>
							<div class="littlePush"></div>
							<div class="widget-body greyBg dashBorder">
								<div class="heading-buttons">
									<h4>Services for Maryland Health Clinic</h4>

									<div class="buttons pull-right"><a data-target="#blank" data-toggle="modal"
									                                   class="specLink glyphicons circle_plus btn-icon"
									                                   href="">Add a Service</a></div>
									<div class="clearfix"></div>
								</div>
								<div class="col-md-12 noPd">
									<div id="accordion">
										<div class="panel-heading panel-group">
											<h4 class="panel-title">&nbsp;Service 1</h4>
										</div>
										<div class="panel-body">
											<div class="row">
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Description:</label>
													</div>
													<div class="col-md-8">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
															accusantium aperiam culpa deleniti dolores earum excepturi
															facilis harum incidunt maiores molestias nostrum, odit quo
															rerum sunt. Aliquid hic labore quibusdam!</p>
													</div>
												</div>
												<!-- Eligibility Requirements -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Eligibility Requirements:</label>
													</div>
													<div class="col-md-6"></div>
													<div class="col-md-2"></div>
												</div>
												<!-- Eligibility Requirements Ends -->
												<!-- Gender -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Gender:</label>
													</div>
													<div class="col-md-6">Female</div>
													<div class="col-md-2"></div>
												</div>
												<!-- Gender Ends -->
												<!-- Age Range -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Age Range:</label>
													</div>
													<div class="col-md-6">15 to 30</div>
													<div class="col-md-2"></div>
												</div>
												<!-- Age Range Ends -->
											</div>
										</div>
										<div class="panel-heading panel-group">
											<h4 class="panel-title">&nbsp;Service 2</h4>
										</div>
										<div class="panel-body">
											<div class="row">
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Description:</label>
													</div>
													<div class="col-md-8">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
															accusantium aperiam culpa deleniti dolores earum excepturi
															facilis harum incidunt maiores molestias nostrum, odit quo
															rerum sunt. Aliquid hic labore quibusdam!</p>
													</div>
												</div>
												<!-- Eligibility Requirements -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Eligibility Requirements:</label>
													</div>
													<div class="col-md-6"></div>
													<div class="col-md-2"></div>
												</div>
												<!-- Eligibility Requirements Ends -->
												<!-- Gender -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Gender:</label>
													</div>
													<div class="col-md-6">Female</div>
													<div class="col-md-2"></div>
												</div>
												<!-- Gender Ends -->
												<!-- Age Range -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Age Range:</label>
													</div>
													<div class="col-md-6">15 to 30</div>
													<div class="col-md-2"></div>
												</div>
												<!-- Age Range Ends -->
											</div>
										</div>
										<div class="panel-heading panel-group">
											<h4 class="panel-title">&nbsp;Service 3</h4>
										</div>
										<div class="panel-body">
											<div class="row">
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Description:</label>
													</div>
													<div class="col-md-8">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
															accusantium aperiam culpa deleniti dolores earum excepturi
															facilis harum incidunt maiores molestias nostrum, odit quo
															rerum sunt. Aliquid hic labore quibusdam!</p>
													</div>
												</div>
												<!-- Eligibility Requirements -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Eligibility Requirements:</label>
													</div>
													<div class="col-md-6"></div>
													<div class="col-md-2"></div>
												</div>
												<!-- Eligibility Requirements Ends -->
												<!-- Gender -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Gender:</label>
													</div>
													<div class="col-md-6">Female</div>
													<div class="col-md-2"></div>
												</div>
												<!-- Gender Ends -->
												<!-- Age Range -->
												<div class="col-md-12 clearfix">
													<div class="col-md-2 alignR">
														<label class="blockRight">Age Range:</label>
													</div>
													<div class="col-md-6">15 to 30</div>
													<div class="col-md-2"></div>
												</div>
												<!-- Age Range Ends -->
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
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

<div class="push"></div>
<%@ include file="_footer.html" %>
<script type="text/javascript">
	$(document).ready(function () {
		var content = $(document).attr('title');
		if (content = 'cboLocations') {

			$('#cboLocations').addClass('active');
		}
	});
</script>
</body>
</html>
