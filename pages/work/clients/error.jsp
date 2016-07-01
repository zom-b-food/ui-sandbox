
<%@ page language="java" %>
<!DOCTYPE html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Login to View Your Gallery</title>
<META name="keywords" content="seattle candid documentary photographer, seattle fine art photographer, seattle photographer, seattle photography studio, seattle portrait photographer, seattle child photographer, seattle special events photographer, seattle lifestyle photographer, personal online photo gallery, family online photo gallery, family online photo album, childrens online photo album, seattle online photographer, portrait photographer, child photographer, photographer of every day faces, candid photographer, street photographer, documentary photographer, seattle party photographer, seattle reunion photographer, seattle special occasions photographer, seattle family photographer, seattle childrens photographer, seattle acting headshots, seattle headshots photographer">
<script language="JavaScript" src="${contextPath}/resources/js/components/buttons.js"></script>
<style type="text/css">
    @import '../styles/206.css';

</style>
</head>
<body>
<div id="container-page">
  <div class="watermark"><img src="${contextPath}/images/bannerS2.jpg"></div>
  <%@ include file="../inc/splashNav.jsp" %>
  <div class="underNav">
    <h1>Seattle Arts Photography<em>@ candidlypoised.com</em></h1>
    <h2>- Welcome to your gallery</h2>
  </div>
  <div style="position:relative; top:160px; left:6px;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td rowspan="2" valign="top" class="pagehead"><%
		String oops=(String) session.getAttribute("oops");
		if (oops == null)
		oops = "Please login to view your gallery!";
		%>
          <%= oops %></td>
        <td><form action="${contextPath}/servlet/pool.LoginServlet" method="post" name="login">
            <table bgcolor="#0e1a2d" width="280" cellpadding="2" cellspacing="0" border="0" style="border:1px solid #344255">
              <th colspan="2"><span class="sub4">Login Here</span><br></th>
              <tr>
                <td align="right">Email Address:</td>
                <td align="left"><input type="text" class="MEDformField" name="emailAddress" id="emailAddress" value="1@1"></td>
              </tr>
              <tr>
                <td align="right" nowrap>Password:</td>
                <td align="left"><input type="text" class="MEDformField" name="userName" id="userName" value="1"></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td align="left"><input type="submit" class="mbtn" value="Log in" onFocus="blur()" onMouseOver="mmover(this)" onMouseOut="mmout(this)"></td>
              </tr>
            </table>
          </form></td>
      </tr>
    </table>
  </div>
</div>
</body>
</html>
