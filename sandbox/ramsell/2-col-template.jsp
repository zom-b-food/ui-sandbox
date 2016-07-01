
<!doctype html>
<html lang="en">
<head>
	<title>cboLocations</title>
	<!-- Meta -->
	<%@ include file="_dependencies.html" %>

	<link rel="stylesheet" href="${contextPath}/ramsell/Content/common/css/nestedAccordion.css"/>
	<link href="${contextPath}/ramsell/Content/common/css/tfc.css" rel="stylesheet" type="text/css"/>
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

</head>
<body class="cf2">
<div class="container fluid menu-left">
	<%@ include file="_headerNav.html" %>
	<div id="wrapper">
		<div id="main-content" class="container">
			<!-- Content -->
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
					<!-- // Tabs Heading END -->
					<div class="widget-body tabsBorder">
						<div class="tab-content">
							<div class="heading-buttons">
								<h3>Smart Match</h3>

								<div class="clearfix"></div>

							</div>
							<div class="col-md-12 noPd">
								<div class="contentwrapper menu">
									<div class="colleft">
										<div class="rColContent">
											<!-- Column 1 start -->
											<div class="whiteBg col-md-12">
												right column
											</div>
											<!-- Column 1 end -->
										</div>
										<div class="lColContent">
											<!-- Column 2 start -->

											left column


											<!-- Column 2 end -->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End Content -->
		</div>
		<div class="littlePush"></div>
	</div>
</div>

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
