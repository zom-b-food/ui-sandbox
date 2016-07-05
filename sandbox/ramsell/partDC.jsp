<!doctype html>
<html lang="en">
<head>
	<title>cboLocations</title>
	<!-- Meta -->
	<%@ include file="_dependencies.html" %>
	<link href="Content/common/css/upload.css" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" href="Content/common/css/nestedAccordion.css"/>
	<link href="Content/common/css/tfc.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript">
		$(function () {
			$("#accordion").accordion({
				heightStyle: "content"
			});
			$('#image_fileHolder').change(function () {
				$('#progress_info').hide();

			});
			$('.submit').click(function () {
				$('#progress_info').show();

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
	<script src="Content/scripts/upload.js"></script>
</head>
<body class="cf2">
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
						<h3>Image Uploader</h3>

						<div class="buttons pull-right">
							<a class="specLink glyphicons circle_plus btn-icon" href="" data-target="#blank"
							   data-toggle="modal">New Message</a>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="col-md-3 sidebar">
						<h4>All Services</h4>

						<div id="accordion">
							<div class="panel-heading panel-group">
								<h4 class="panel-title">&nbsp;Health Services (4)
								</h4>
							</div>
							<div class="panel-body">
								<div class="alignL">
									<input type="checkbox" value="1" checked="checked"
									       disabled>
									<label>Diabetes - Type 1</label><br/>
								</div>
								<div class="alignL">
									<input type="checkbox" value="1" checked="checked"
									       disabled>
									<label>Diabetes - Type 2</label><br/>
								</div>
								<div class="alignL">
									<input type="checkbox" value="1" checked="checked"
									       disabled>
									<label>Hepatitis C</label><br/>
								</div>
								<div class="alignL">
									<input type="checkbox" value="1" checked="checked"
									       disabled>
									<label>HIV/AIDS</label><br/>
								</div>
							</div>
							<div class="panel-heading panel-group">
								<h4 class="panel-title">&nbsp;Dental Services (1)
								</h4>
							</div>
							<div class="panel-body">
								<div class="alignL">
									<input type="checkbox" value="1" checked="checked"
									       disabled>
									<label>Gingivitis</label><br/>
								</div>
							</div>
							<div class="panel-heading panel-group">
								<h4 class="panel-title">&nbsp;Housing Services (1)
								</h4>
							</div>
							<div class="panel-body">
								<div class="alignL">
									<input type="checkbox" value="1" checked="checked"
									       disabled>
									<label>Temporary/Transitional</label><br/>
								</div>
							</div>
							<div class="panel-heading panel-group">
								<h4 class="panel-title">&nbsp;Employment Services (1)
								</h4>
							</div>
							<div class="panel-body">
								<div class="alignL">
									<input type="checkbox" value="1" checked="checked"
									       disabled>
									<label>Job/Vocational Training</label><br/>
								</div>
							</div>
						</div>
						<!-- Accordions End -->
					</div>
					<div class="col-md-9">
						<div class="clearfix"></div>
						<div class="widget-body greyBg">
							<div class="col-md-12">
								<form id="upload_form" enctype="multipart/form-data" method="post" action="upload.php">
									<div class="row">
										<div class="col-md-11">
											<h5>Please select an image to upload.</h5>

											<p>Select an image file from your computer to use as your image for this
												demonstration.</p>

											<div id="image_fileHolder" class="fileUpload btn btn-primary">
												<span>Browse...</span>
												<input type="file" class="upload" name="image_file" id="image_file"
												       onchange="fileSelected();"/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4 alignR">
											<div id="fileinfo">
												<div id="filename"></div>
												<div id="filesize"></div>
												<div id="filetype"></div>
												<div id="filedim"></div>
											</div>
											<div id="error">Only image files can be previewed at this time.</div>
											<div id="error2">An error occurred while uploading the file.</div>
											<div id="abort">The upload has been canceled by the user or the browser
												dropped the connection.
											</div>
											<div id="warnsize">Your file is very big. We can't accept it. Please select
												a smaller file.
											</div>
										</div>
										<div class="col-md-8 alignR" id="hideMe1">
											<img id="preview"/>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12 alignR" id="uploadButton">
											<input type="button" class="submit" value="Upload"
											       onclick="startUploading()"/>
										</div>
									</div>
									<div class="row">
										<div id="progress_info">
											<div id="progress"></div>
											<div id="progress_percent">&nbsp;</div>
											<div class="clear_both"></div>
											<div id="speed">&nbsp;</div>
											<div id="remaining">&nbsp;</div>
											<div id="b_transfered">&nbsp;</div>
											<div class="clear_both"></div>
											<div id="upload_response"></div>
										</div>
									</div>
								</form>
							</div>
							<div class="push"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="littlePush"></div>
			<div class="row">
				<div class="col-md-12 noPd">
					<div class="form-group">
						<div class="col-md-9">
							<input type="button" id="backButton" class="cancel floatLeft"
							       value="Back"/>
							<input type="submit" id="saveButton" class="submit floatLeft"
							       value="Save & Continue"/>
						</div>
					</div>
				</div>
			</div>
			<div class="littlePush"></div>
		</div>
	</div>
	<!-- End Content -->
</div>
<div class="push"></div>
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
<%@ include file="_footer.html" %>
<!-- // Main Container Fluid END -->
<script type="text/javascript">
	$(document).ready(function () {
		var content = $(document).attr('title');
		if (content = 'partDC') {

			$('#partDC').addClass('active');
		}


	});
</script>
</body>
</html>
