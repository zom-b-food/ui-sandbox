<!doctype html>
<html lang="en" ng-app="demoApp">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Google critter Gallery</title>
		<%@ include file="/sitewide/globals.jsp" %>
		<%@ include file="/sitewide/angIncs.jsp" %>
	</head>
	<body>
		<div class="view-container">
			<div><img src="${contextPath}/resources/images/ang/zoobanner.png"/></div>
			<div ng-view class="view-frame"></div>
			<div style="visibility:hidden; z-index:1;">
				<%@ page import="java.io.*" %>
				<%
					String hm = "HHIT";
					String file = hm + "/zoo.txt";
					String cntfpath = application.getRealPath("/") + file;
					RandomAccessFile ffile;
					ffile = new RandomAccessFile(cntfpath, "rw");
					ffile.seek(0);
					int count = Integer.parseInt(ffile.readLine());
					out.println(count);
					ffile.seek(0);
					ffile.writeBytes(Integer.toString(count + 1));
					ffile.close();
				%>
			</div>
		</div>
	</body>
</html>
