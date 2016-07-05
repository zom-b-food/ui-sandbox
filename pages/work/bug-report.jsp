<!DOCTYPE html>
<html lang="en">
	<head>
		<title>www.ui-design-engineering.com</title>
		<%@ include file="/sitewide/globals.jsp" %>
		<script type="text/javascript" src="${contextPath}/resources/js/components/jquery.validate.min.js"
		        charset="utf-8"></script>
		<style type="text/css">
			#SayWhatBug label.error {

				margin-right: 100px;

				text-align: left;

				width: 180px !important;

			}
		</style>
		<script type="text/javascript">
			$(document).ready(function () {

				$("#SayWhatBug").validate();

			});
		</script>
	</head>
	<body>
		<div class="uk-container-center">
			<div class="uk-grid" data-uk-grid-margin>
				<div class="uk-width-medium-1-1">
					<form action="${contextPath}/feedback.SayWhatBugServer" name="SayWhatBug" method="post"
					      id="SayWhatBug">
						<input name="name" type="hidden" id="name" value="Bug"/>
						<input name="email" type="hidden" id="email" value="am@adam-marsh.com"/>
						<table cellpadding="4" cellspacing="1" border="0">
							<tr>
								<th>Please describe bug or issue.</th>
							</tr>
							<tr>
								<td><textarea class="textArea required" name="comments" cols="30" rows="3" id="comments"
								              placeholder=""></textarea></td>
							</tr>
							<tr>
								<td align="right"><input type="submit" name="Submit" value="Submit" class="mbtn"/>
									&nbsp; </td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
	</body>
</html>

