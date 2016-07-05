<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
		<title>www.ui-design-engineering.com - Clients</title>
		<style type="text/css">
		</style>
	</head>
	<body>
		<div id="splash-page">
			<div id="left"><img src="../images/leftOther.gif" height="764px" width="132px" alt=""/> <br/></div>
			<div id="topPortion">
				<div class="topCurve">&nbsp;</div>
				<div class="srGif"><img src="../images/sr.jpg" alt="" border="0" width="444" height="30"/></div>
				<div class="rulesGif"><img src="../images/rules.jpg" alt="" border="0" height="55"/></div>
				<div class="flashCorner">
					<object type="application/x-shockwave-flash" data="../images/almFlash.swf" width="266" height="122">
						<param name="movie" value="../images/almFlash.swf"/>
						<param name="quality" value="high"/>
						<param name="wmode" value="transparent"/>
						<param name="LOOP" value="false"/>
					</object>
				</div>
				<div class="sep"><img src="../images/topfadedrule.jpg" alt="" border="0" width="740" height="12"/></div>
			</div>
			<div class="resSep">&nbsp;&nbsp;<a href="${contextPath}/home.jsp" class="main">&nbsp;&#187;&nbsp;Return to
				Home page</a>&nbsp;&nbsp;
			</div>
			<div class="splash">
				<h2>Client Login</h2>

				<div style="position: absolute;">
					<ul class="fancybulletBig leftnav">
						<li><a id="backtohome" href="#" onclick="history.go(-1)">back</a></li>
					</ul>
					<div id="stepLeft">&nbsp;</div>
				</div>
				<div class="clear">&nbsp;</div>
				<div id="stepRight">
					<p>&nbsp;</p>

					<div id="BodyContentDiv">
						<h3>Oops...</h3>

						<p>So sorry, but the database is down... :(
						</p>
						<%
							String oops = (String) session.getAttribute("oops");
							if (oops == null)
								oops = "";
						%>
						<div style="margin-left:120px; margin-top:26px;">
							<div class="error"><%= oops %>
							</div>
						</div>
					</div>
					<div id="foot">
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
