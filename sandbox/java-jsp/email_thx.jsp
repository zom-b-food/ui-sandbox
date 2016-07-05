<!DOCTYPE html>
<html lang="en">
	<head>
		<title>www.ui-design-engineering.com</title>
		<%@ include file="/sitewide/globals.jsp" %>
		<script type="text/javascript" src="${contextPath}/sandbox/java-jsp/js/jquery.validate.min.js"
		        charset="utf-8"></script>
	</head>
	<body class="popDiv">
		<div class="uk-container-center">
			<div class="uk-grid" data-uk-grid-margin>
				<div class="uk-width-1-1">
					<div class="popDiv" style="margin-left:24px">
						<h2 style="font-size: 18px;">Java Email Servlet</h2>

						<div>
							<h4>The servlet has sent your email to the following and redirected you to this page:</h4>

							<div id="stepLeft">
								<p> Adam L Marsh<br/>
									9794 Coral Rd<br/>
									Oakland, CA 94603<br/>
									***<br/>
									(510) 877-0763<br/>
									<a href="mailto:am@adam-marsh.com">am@adam-marsh.com</a></p>
							</div>
							<div id="stepRight">
								<div class="stepRightPart">
									<%@ page language="java" session="true" %>
									<br/>

									<p><strong>To:</strong> <%= request.getParameter("text2") %>
									</p>

									<p><strong>Subject:</strong> <%= request.getParameter("subject") %>
									</p>

									<p><strong>Message:</strong> <%= request.getParameter("area1") %>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
