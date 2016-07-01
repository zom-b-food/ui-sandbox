
<!doctype html>
<html lang="en">
<head>
	<title>Messages</title>
	<!-- Meta -->
	<%@ include file="_dependencies.html" %>
	<link rel="stylesheet" href="Content/common/css/base.css">
	<link rel="stylesheet" href="Content/common/css/tablesort.css">

	<script type="text/javascript">
		$(document).ready(function () {
			$('table').filterTable();

			$("#showHide").show();
			$("#shLink").show();

			$('#shLink').click(function () {
				$("#showHide").slideToggle();
				return false;
			});
		});


	</script>

</head>
<body>

<!-- Main Container Fluid -->
<div class="container-fluid menu-left">

	<div id="wrapper">
		<div id="main-content" class="container">
			<!-- Content -->

			<div class="innerLR">


				<div class="heading-buttons">
					<h3>Messages</h3>

					<div class="buttons pull-right">
						<a class="specLink glyphicons circle_plus btn-icon" href="/0">New Message</a>
					</div>
					<div class="clearfix"></div>

				</div>


				<div class="col-md-9">


					<div class="clearfix"></div>
					<div class="widget-body greyBg" style="padding:5px;">


						<table class="table-sort">
							<thead>
							<tr>

								<th class="table-sort" scope="col">Name</th>

								<th class="table-sort" scope="col">Year Paroled</th>
								<th class="table-sort" scope="col">Facility</th>
							</tr>
							</thead>
							<tbody>
							<tr>

								<td>George Martin</td>

								<td>1997</td>
								<td>Dallas, TX</td>
							</tr>
							<tr>

								<td>Adam Benson</td>

								<td>1997</td>
								<td>Baltimore, MD</td>
							</tr>
							<tr>

								<td>Thomas Maxwell</td>

								<td>1999</td>
								<td>Dallas, TX</td>
							</tr>
							<tr>

								<td>James Harte</td>

								<td>1987</td>
								<td>Houston, TX</td>
							</tr>
							<tr>

								<td>James Latham</td>

								<td>1985</td>
								<td>San Francisco, CA</td>
							</tr>
							<tr>

								<td>Quincy Peebles</td>

								<td>1989</td>
								<td>San Francisco, CA</td>
							</tr>
							<tr>

								<td>Andrew Taylor</td>

								<td>2007</td>
								<td>Seattle, WA</td>
							</tr>
							<tr>

								<td>Van Benson Heinz</td>

								<td>2001</td>
								<td>Modesto, CA</td>
							</tr>
							<tr>

								<td>Henry Stevens</td>

								<td>2011</td>
								<td>Sacramento, CA</td>
							</tr>


							</tbody>
						</table>
						<ul class="pagination pagination-small pull-right">
							<li class="disabled"><a href="#">&#8656;</a></li>
							<li class="active"><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">&#8658;</a></li>
						</ul>


						<div class="push"></div>

					</div>

				</div>
				<!-- End Content -->
			</div>
		</div>

		<br/>


	</div>
</div>
<script type="text/javascript" src="Content/scripts/jquery.filtertable.js"></script>
<script type="text/javascript" src="Content/scripts/tablesort.js"></script>
<script type="text/javascript">
	$(document).ready(function () {
		var content = $(document).attr('title');
		if (content = 'Messages') {

			$('#inbox').addClass('active');
		}
	});

	$(function () {
		$('table.table-sort').tablesort();

	});
</script>

</body>
</html>
