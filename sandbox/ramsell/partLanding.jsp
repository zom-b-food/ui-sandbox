
<!doctype html>
<html lang="en">
<head>
	<title>partLanding</title>
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
	</script>
	<style type="text/css">
			/* filter-table specific styling */
		table {
			border-collapse: collapse;
		}

		td {
			border-bottom: 1px solid #ccc;
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
<body>

<!-- Main Container Fluid -->
<div class="container-fluid menu-left">
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
	<h3>Participants</h3>

	<div class="buttons pull-right">
		<a class="specLink glyphicons circle_plus btn-icon" href="" data-target="#blank" data-toggle="modal">Add Participant</a>
	</div>
	<div class="clearfix"></div>

</div>
<form class="form-horizontal" action="userProfile.jsp">

	<div class="widget-body greyBg">
		<!-- General Information Starts -->
		<div class="row bgGrey">
			<div class="col-md-12">
				<div class="row alignL">
					<div class="form-group">

						<div class="col-md-4" style="left:30px;">
							<a href="#" id="shLink">Show/Hide Details</a>
						</div>

					</div>

				</div>

				<div id="showHide" class="row" style="padding:12px 45px;">
					<hr/>
					<!-- Alerts -->
					<div class="col-md-6">
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">Facility:</label>
								</div>
								<div class="col-md-7">
									<select class="form-control">
										<option>Dover County Jail</option>
										<option>Alcatraz</option>
										<option>Sing Sing (Oakland Branch)</option>
										<option>Ramada Inn</option>

									</select>
								</div>
							</div>
						</div>
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">Primary Case Planner:</label>
								</div>
								<div class="col-md-7">
									<select class="form-control">
										<option>Jeremy C Hall</option>
										<option>Option</option>
										<option>Option</option>
										<option>Option</option>

									</select>
								</div>
							</div>
						</div>
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">Participant Status:</label>
								</div>
								<div class="col-md-7">
									<select class="form-control">
										<option>Status is ?</option>
										<option>Option</option>
										<option>Option</option>
										<option>Option</option>

									</select>
								</div>
							</div>
						</div>
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">Discharge Date:</label>
								</div>
								<div class="col-md-3">
									<input type="text" class="form-control" id="fName"/>
								</div>
								<div class="col-md-1">and</div>
								<div class="col-md-3">
									<input type="text" class="form-control" id="fName"/>
								</div>
							</div>
						</div>
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">&nbsp;</div>
								<div class="col-md-6">
									<a class="btn btn-default btn-sm floatLeft">Go</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">CBO:</label>
								</div>
								<div class="col-md-7">
									<select class="form-control">
										<option>Select a CBO</option>
										<option>Option</option>
										<option>Option</option>
										<option>Option</option>

									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">CBO Location:</label>
								</div>
								<div class="col-md-7">
									<select class="form-control" disabled>
										<option>Select a CBO Locations</option>
										<option>Option</option>
										<option>Option</option>
										<option>Option</option>

									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">CBO Case Worker:</label>
								</div>
								<div class="col-md-7">
									<select class="form-control" disabled>
										<option>Select a CBO Case Worker</option>
										<option>Option</option>
										<option>Option</option>
										<option>Option</option>

									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row alignR">
							<div class="form-group">
								<div class="col-md-4">
									<label for="fName">Connection Status:</label>
								</div>
								<div class="col-md-7">
									<select class="form-control" disabled>
										<option>Select a Connection Status</option>
										<option>Option</option>
										<option>Option</option>
										<option>Option</option>

									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

</form>
<div class="littlePush"></div>

<div class="2greyBg">
	<div class="col-md-12" id="flip-scroll">

		<table class="table-sort">
			<thead>
			<tr>
				<th class="table-sort" scope="col" title="President Number">#</th>
				<th class="table-sort" scope="col">Participant</th>
				<th class="table-sort" scope="col">Sessions</th>
				<th class="table-sort" scope="col">Activation Year</th>
				<th class="table-sort" scope="col">Facility</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>1</td>
				<td>George Martin</td>
				<td>two</td>
				<td>1997</td>
				<td>Dallas, TX</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Adam Benson</td>
				<td>one</td>
				<td>1997</td>
				<td>Baltimore, MD</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Thomas Maxwell</td>
				<td>two</td>
				<td>1999</td>
				<td>Dallas, TX</td>
			</tr>
			<tr>
				<td>4</td>
				<td>James Harte</td>
				<td>two</td>
				<td>1987</td>
				<td>Houston, TX</td>
			</tr>
			<tr>
				<td>5</td>
				<td>James Latham</td>
				<td>two</td>
				<td>1985</td>
				<td>San Francisco, CA</td>
			</tr>
			<tr>
				<td>6</td>
				<td>Quincy Peebles</td>
				<td>one</td>
				<td>1989</td>
				<td>San Francisco, CA</td>
			</tr>
			<tr>
				<td>7</td>
				<td>Andrew Taylor</td>
				<td>two</td>
				<td>2007</td>
				<td>Seattle, WA</td>
			</tr>
			<tr>
				<td>8</td>
				<td>Van Benson Heinz</td>
				<td>one</td>
				<td>2001</td>
				<td>Modesto, CA</td>
			</tr>
			<tr>
				<td>9</td>
				<td>Henry Stevens</td>
				<td>three</td>
				<td>2011</td>
				<td>Sacramento, CA</td>
			</tr>
			<tr>
				<td>10</td>
				<td>Tyler Hayes</td>
				<td>three</td>
				<td>2008</td>
				<td>Colorado Springs, CA</td>
			</tr>
			<tr>
				<td>11</td>
				<td>Kim Chaiseman</td>
				<td>one</td>
				<td>2009</td>
				<td>Seattle, WA</td>
			</tr>
			<tr>
				<td>12</td>
				<td>Zachary Penmore</td>
				<td>three</td>
				<td>2014</td>
				<td>Tacoma, WA</td>
			</tr>
			<tr>
				<td>13</td>
				<td>Amy Fillmore</td>
				<td>three</td>
				<td>2006</td>
				<td>Albany, NY</td>
			</tr>
			<tr>
				<td>14</td>
				<td>Franklin Nixon Jr</td>
				<td>one</td>
				<td>2010</td>
				<td>Miami, FL</td>
			</tr>
			<tr>
				<td>15</td>
				<td>Carrie Buchanan</td>
				<td>one</td>
				<td>1999</td>
				<td>San Diego, CA</td>
			</tr>
			<tr>
				<td>16</td>
				<td>Tyler McMann</td>
				<td>three</td>
				<td>2013</td>
				<td>Baltimore, MD</td>
			</tr>
			<tr>
				<td>17</td>
				<td>Andrew Wilson</td>
				<td>three</td>
				<td>2014</td>
				<td>Colorado Springs, CO</td>
			</tr>
			<tr>
				<td>18</td>
				<td>Charles Grant</td>
				<td>two</td>
				<td>2009</td>
				<td>Houston, TX</td>
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
<!-- //Watch List Ends-->

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
<!-- // Main Container Fluid END -->
<script type="text/javascript" src="Content/scripts/jquery.filtertable.js"></script>
<script type="text/javascript" src="Content/scripts/tablesort.js"></script>
<script type="text/javascript">
	$(document).ready(function () {
		var content = $(document).attr('title');
		if (content = 'partLanding') {

			$('#partLanding').addClass('active');
		}
	});

	$(function () {
		$('table.table-sort').tablesort();

	});
</script>

</body>
</html>
