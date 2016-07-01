
<!doctype html>
<html lang="en">
<head>
	<title>Messages</title>
	<!-- Meta -->
	<%@ include file="_dependencies.html" %>
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

		$(document).ready(function () {
			$('#selectall').on('click', function () {
				$('.msg').prop('checked', $(this).is(":checked"));
			});
		});

	</script>
	<style type="text/css">
			/* filter-table specific styling */
		table {
			border-collapse: collapse;
		}

		td {
			border-bottom: 1px solid #ccc;
		}

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

		h4.filter-table {
			font-size: 14px;
			white-space: nowrap;
		}

		input[type=search] {
			position: absolute;
			margin-left: 66px;
			margin-top: -24px;
			height: 21px;
		}

		td.alt {
			background-color: #ffc;
			background-color: rgba(255, 255, 0, 0.2);
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
					<!-- Tabs Heading --><%@ include file="_partTabs.html" %><!-- // Tabs Heading END -->
					<div class="widget-body tabsBorder">
						<div class="tab-content">
							<div class="heading-buttons">
								<h3>Messages</h3>

								<div class="buttons pull-right">
									<a class="specLink glyphicons circle_plus btn-icon" href="" data-target="#blank" data-toggle="modal">New Message</a>
								</div>
								<div class="clearfix"></div>

							</div>

							<div class="col-md-3 sidebar"><h4>Sidebar</h4>


							</div>

							<div class="col-md-9">


								<div class="clearfix"></div>
								<div class="widget-body greyBg">

									<div style="float: right;"><a class="specLink btn-sm" href="" data-target="#blank" data-toggle="modal">Delete Selected Messages</a></div>
									<div id="flip-scroll">
										<table class="table-sort">
											<thead>
											<tr>
												<th><input type="checkbox" value="1" id="selectall"></th>
												<th class="table-sort" scope="col">From</th>
												<th class="table-sort" scope="col">Mail Stop #</th>
												<th class="table-sort" scope="col">Year Paroled</th>
												<th class="table-sort" scope="col">Facility</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>George Martin</td>
												<td>two</td>
												<td>1997</td>
												<td>Dallas, TX</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>Adam Benson</td>
												<td>one</td>
												<td>1997</td>
												<td>Baltimore, MD</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>Thomas Maxwell</td>
												<td>two</td>
												<td>1999</td>
												<td>Dallas, TX</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>James Harte</td>
												<td>two</td>
												<td>1987</td>
												<td>Houston, TX</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>James Latham</td>
												<td>two</td>
												<td>1985</td>
												<td>San Francisco, CA</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>Quincy Peebles</td>
												<td>one</td>
												<td>1989</td>
												<td>San Francisco, CA</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>Andrew Taylor</td>
												<td>two</td>
												<td>2007</td>
												<td>Seattle, WA</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>Van Benson Heinz</td>
												<td>one</td>
												<td>2001</td>
												<td>Modesto, CA</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>Henry Stevens</td>
												<td>three</td>
												<td>2011</td>
												<td>Sacramento, CA</td>
											</tr>
											<tr>
												<td>
													<input type="checkbox" value="1" class="msg"/>
												</td>
												<td>Tyler Hayes</td>
												<td>three</td>
												<td>2008</td>
												<td>Colorado Springs, CA</td>
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
									</div>

									<div class="push"></div>

								</div>

							</div>
						</div>

					</div>
				</div>
				<!-- End Content -->
			</div>
		</div>
		<!-- modal -->
		<div class="modal fade" id="blank" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog large">
				<div class="modal-content">
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
		</div>
		<br/>

		<div class="push"></div>
		<%@ include file="_footer.html" %>
		<!-- // Main Container Fluid END -->


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
