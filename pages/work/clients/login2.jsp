

<!DOCTYPE html>

<head>
	<title>www.ui-design-engineering - login</title>

	<meta name="description" content=""/>
	<meta name="keywords" content=""/>
	<%@ include file="inc/globalIncs.jsp" %>
	<!-- need these js files on this page for the bounce to work -->

	<script type="text/javascript" src="${contextPath}/js/jquery-1.11.1.min.js"></script>
	<script src="${contextPath}/js/wow.min.js"></script>
	<script type="text/javascript" src="${contextPath}/resources/js/components/jquery.validate.min.js" charset="utf-8"></script>

	<script type="text/javascript">

		$(document).ready(function () {

			$("#commentForm1").validate();

		});

	</script>

</head>
<body>
<div class="page-wrap">
	<!-- Header -->
	<div id="header">
		<div class="container">

			<%@ include file="inc/header.jsp" %>


			<%@ include file="inc/topNav.jsp" %>
		</div>
	</div>
	<!-- /Header -->
	<div id="page">

		<div class="container">
			<div class="row">
				<div class="3u">
					<section id="sidebard2">
						<%@ include file="inc/sideNav.jsp" %>
					</section>
				</div>

				<div class="7u skel-cell-important">
					<h1>Login</h1>
					<div class="wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
						<h3>Login here to view your site.</h3>



					<%
						String oops = (String) session.getAttribute("oops");
						if (oops == null)
							oops = "";
					%>

					<h3 class="error"><%= oops %>
					</h3>



						<section id="content">


							<div class="clear">&nbsp;</div>

							<fieldset id="formCont">
								<p>Login with the username and password. Let me know <a
										                                                     href="mailto:adam@ui-design-engineering.com">(adam@ui-design-engineering.com)</a> if you need a password or password reset.
								</p>


								<form action="${contextPath}/pool.LoginDatabase" method="get" name="login">
									<ul>
										<li><label>Username:</label></li>
										<li><input type="text" class="MEDformField" name="userName" id="userName" value=""></li>
									</ul>
									<ul>
										<li><label>Site Key:</label></li>
										<li><input type="text" class="MEDformField" name="emailAddress" id="emailAddress"
										           value=""></li>
									</ul>

									<ul>
										<li><label>&nbsp;</label></li>
										<li><input type="submit" class="mbtn"
										           value="Log in"
										           onFocus="blur()"/>
										</li>
									</ul>





								</form>


							</fieldset>
							<br />&nbsp;<br /><br />&nbsp;<br /><br />&nbsp;<br /><br />&nbsp;<br /><br />&nbsp;<br /><br />&nbsp;<br />
							<br />&nbsp;<br /><br />&nbsp;<br />

						</section>

					</div>
				</div>




				<div class="2x sb">
					<section id="sidebard3">

						<p> Adam L Marsh<br/>
						    9794 Coral Rd<br/>
						    Oakland, CA 94603<br/>
						    ***</p>

						<p class="sbp">(510) 877-0763</p>
						<ul>
							<li class="tight"><a href="mailto:adam@ui-design-engineering.com">adam@ui-design-<br/>engineering.com</a></li>
						</ul>


					</section>
				</div>
			</div>

		</div>
	</div>
</div>
<div id="footer">
	<%@ include file="inc/footer.jsp" %>
	<script type="text/javascript" src="scripts/jquery.colorbox-min.js"></script>
	<link type="text/css" rel="stylesheet" href="styles/colorbox.css" media="screen"/>
	<script type="text/javascript">
		// colorbox plugin that works in ie and this ver of jquery
		$().ready(function () {
			$(".iframe").colorbox({iframe: true, width: "840px", height: "88%"});
			$('.non-retina').colorbox({rel: 'group5', transition: 'none'});
			$('.retina').colorbox({rel: 'group5', transition: 'none', retinaImage: true, retinaUrl: true});
		});
		$(document).ready(function() {
			$.colorbox.opacity = 0.7;   //doesn't work; edit the js file
			$.colorbox.iframe = true;
			$(".cboxElement").colorbox();
		});
		$('#btnClose').on('click', function () {
			$.colorbox.remove(); // You have to remove it first (don't know why)
			$('#cboxClose').click(); // Then this will close the box, $.colorbox.close() still doesn't work
			$.colorbox.init(); // Re-init, otherwise colorbox stops working
		});


	</script>
</div>
</body>
</html>