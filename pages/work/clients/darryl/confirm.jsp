<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sql:setDataSource dataSource="jdbc/demo"/>
<sql:query var="searchList" scope="request">SELECT * FROM account 
  WHERE companyName LIKE ?
  ORDER BY companyName
  <sql:param value="%${param.companyName}%" />
</sql:query>
<sql:update>INSERT INTO account 
  
  (actKey, companyName, billAdd1, billAdd2, billCity, billState, 
  billZip, primFirstName, primLastName, primEmail, primAC, primPhone, needData, notes, curURL)
  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  <sql:param value="${param.actKey}" />
  <sql:param value="${param.companyName}" />
  <sql:param value="${param.billAdd1}" />
  <sql:param value="${param.billAdd2}" />
  <sql:param value="${param.billCity}" />
  <sql:param value="${param.billState}" />
  <sql:param value="${param.billZip}" />
  <sql:param value="${param.primFirstName}" />
  <sql:param value="${param.primLastName}" />
  <sql:param value="${param.primEmail}" />
  <sql:param value="${param.primAC}" />
  <sql:param value="${param.primPhone}" />
  <sql:param value="${param.needData}" />
  <sql:param value="${param.notes}" />
  <sql:param value="${param.curURL}" />
</sql:update>
<html>
<head>
<title>Customer Confirm</title>
<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/hp.css" type="text/css">
<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/forms.css" type="text/css">
<script language="JavaScript" src="${contextPath}/clients/darryl/resources/js/components/buttons.js"></script>
</head>
<body>
<div id="realnavbar"><%@ include file="inc/navbar.jsp" %></div>
<div id="container-page">
  <div class="navbar">&nbsp;</div>
  <div id="content"> 
  <div class="pagehead">Contact, Bids &amp; Referrals</div>
 
  <div id="inq">
	
		<c:choose>
          <c:when test="${searchList.rowCount != 0}"> <span class="head7">Sorry, no record found.</span> </c:when>
          <c:otherwise>
            <c:set var="noOfRows" value="1" />
            <sql:query var="showList" dataSource="jdbc/demo" sql="SELECT * FROM account ORDER BY companyName" startRow="${param.start}" maxRows="${noOfRows}"/>
            <%-- Set number of rows to process --%>
           
            <c:forEach items="${showList.rows}" var="row">
			 <input type="hidden" class="MEDformField" name="actKey" id="actKey" value="<%= request.getParameter("actKey") %>" >
			  <input type="hidden" class="MEDformField" name="companyName" id="companyName" value="<%= request.getParameter("companyName") %>" >
              <input type="hidden" class="MEDformField" id="primFirstName" name="primFirstName" value="<%= request.getParameter("primFirstName") %>" />
              <input type="hidden" class="MEDformField" id="primLastName" name="primLastName" value="<%= request.getParameter("primLastName") %>" />
              <input type="hidden" class="MEDformField" id="primEmail" name="primEmail" value="<%= request.getParameter("primEmail") %>" />
              <input class="LONGformField" type="hidden" id="billAdd1" name="billAdd1" value="<%= request.getParameter("billAdd1") %>" />
              <input class="LONGformField" type="hidden" id="billAdd2" name="billAdd2" value="<%= request.getParameter("billAdd2") %>" />
              <input class="LONGformField" type="hidden" id="billCity" name="billCity" value="<%= request.getParameter("billCity") %>" />
              <input type="hidden" class="TINYformField" name="stringBillState" id="stringBillState" value="<%= request.getParameter("stringBillState") %>" />
               <input type="hidden" class="TINYformField" name="stringNeedData" id="stringNeedData" value="<%= request.getParameter("stringNeedData") %>"/>
			  <input class="LONGformField" type="hidden" id="billZip" name="billZip" value="<%= request.getParameter("billZip") %>"/>
              <input class="LONGformField" type="hidden" id="primAC" name="primAC" value="<%= request.getParameter("primAC") %>"/>
              <input class="LONGformField" type="hidden" id="primPhone" name="primPhone" value="<%= request.getParameter("primPhone") %>" />
               <input type="hidden" class="MEDformField" name="needData" id="needData" value="<%= request.getParameter("needData") %>" >
			   <input type="hidden" class="MEDformField" name="curURL" id="curURL" value="<%= request.getParameter("curURL") %>" >
              <input type="hidden" class="MEDformField" id="notes" name="notes" value="<%= request.getParameter("notes") %>" />  
			    <form action="${contextPath}/servlet/authenticate.darrylEmail" name="activate2" id="activate2" method="post">
                <input id="text1" name="text1" type="hidden" value="<%= request.getParameter("primEmail") %>" />
                <input id="text2" name="text2" type="hidden" value="am@ui-design-engineering.com" />
                <input id="subject" name="subject" type="hidden" value="ui-design-engineering.com confirmation" />
				<input type="hidden" id="cc" name="cc" value="<%= request.getParameter("primEmail") %>"/>
                <input id="area1" name="area1" class="email" type="hidden" value="


<table width='612' border='0' cellspacing='3' cellpadding='3' style='border:1px solid #009966;'>
  <tr>
    <td colspan='3'><img src='http://www.upfor3.com/letter_banner.jpg'></td>
  </tr>
  <tr>
    <td width='331' valign='top' nowrap><p style='font-family: verdana; font-size: 11px; color: #113b04'>Dear <%= request.getParameter("primFirstName") %> <%= request.getParameter("primLastName") %>, </p></td>
    <td width='150' align='right' valign='top' nowrap><p style='font-family: verdana; font-size: 11px; color: #165005; text-decoration: underline;'><%= request.getParameter("companyName") %> <br />
      </p></td>
    <td width='136' rowspan='6' valign='top' style='padding-left:4px; border-left:1px dashed #cccccc;'>
	<table>
        <tr>
          <td width='114' height='145' valign='top' style='padding-left:4px; border-left:1px dashed #cccccc;'><p style='font-family: verdana; font-size: 11px; color: #113b04'><strong>WHAT NEXT?</strong><br />
              &nbsp;<br />
              g</p></td>
        </tr>
        <tr>
          <td width='114' height='184' valign='bottom' style='padding-left:4px; border-left:1px dashed #cccccc;'><img src='http://www.upfor3.com/logo2.jpg' alt='Sotto' />
            <p style='font-family: verdana; font-size: 10px; color: #113b04'>ui-design-engineering.com<br />
              1144 North 90th St <br />
              Seattle, WA 98103<br />
              (206) 462-9395 </p></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td colspan='2'><p style='font-family: verdana; font-size: 11px; color: #113b04'>Welcome to Upfor3.com! This email summarizes the information you provided us when you submitted your inquiry, and provides some very important information on how the website building process progresses.</p></td>
  </tr>
  <tr>
    <td colspan='2'>
	<table width='100%' border='0' cellspacing='0' cellpadding='3' style='border:1px solid #cccccc;'>
        <tr>
          <td width='36%' style='background-color:#C9D9C1;'><p style='font-family: verdana; font-size: 11px; color: #165005; text-decoration: underline;'><strong>Account Information</strong></p></td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #cccccc;'><p style='font-family: verdana; font-size: 11px; color: #113b04'>&#187 Account Name: <%= request.getParameter("companyName") %> </td>
        </tr>
        <tr>
          <td><p style='font-family: verdana; font-size: 11px; color: #113b04'> &#187 Billing Address: <%= request.getParameter("billAdd1") %> <%= request.getParameter("billAdd2") %><br>
              &#187 <%= request.getParameter("billCity") %>, <%= request.getParameter("stringBillState") %> <%= request.getParameter("billZip") %></p></td>
        </tr>
        <tr>
          <td style='border-top:1px solid #cccccc;'><p style='font-family: verdana; font-size: 11px; color: #113b04'>&#187 Contact Email: <%= request.getParameter("primEmail") %><br>
              &#187 Package Ordered: <%= request.getParameter("actKey") %></p></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td colspan='2'>
	<table width='100%' border='0' cellspacing='0' cellpadding='3' style='border:1px solid #cccccc;'>
        <tr>
          <td style='background-color:#C9D9C1;'><p style='font-family: verdana; font-size: 11px; color: #165005; text-decoration: underline;'><strong>Services Selected</strong></p></td>
        </tr>
        <tr>
          <td nowrap='nowrap' style='border-top:1px solid #cccccc;'><p style='font-family: verdana; font-size: 11px; color: #113b04'><%= request.getParameter("actKey") %>&nbsp;package<br>
              Current URL: <%= request.getParameter("curURL") %><br>Need database: ${fn:escapeXml(param.needData)}</p></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td colspan='2' valign='top'><br />
      <p style='font-family: verdana; font-size: 11px; color: #113b04'>Lorum ipsem...</p>
      <p style='font-family: verdana; font-size: 11px; color: #113b04'>Thanks,<br>
        Adam L Marsh<br>
        am@ui-design-engineering.com </p></td>
  </tr>
</table>

			 
			 "/>
                
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="left" style="padding-bottom:2px;"><strong>Welcome ${fn:escapeXml(param.companyName)}</strong></td>
                  <tr>
                </table>
                <table width="550" border="0" cellpadding="1" cellspacing="0">
                  <tr>
                    <td align="left"><span class="head8">Your Account Information-</span></td>
                    <td align="right">&nbsp;</td>
                  </tr>
                </table>
                
                <br>
                <table width="550" border="0" cellpadding="1" cellspacing="0" style="border:1px solid #95aa8e;">
                  <th>Account Information</th>
                  <tr>
                    <td><span class="confirm">Company Name:</span><strong> ${fn:escapeXml(param.companyName)}</strong></td>
                  </tr>
                  <tr>
                    <td><span class="confirm">Primary Administrator:</span><strong> ${fn:escapeXml(param.primFirstName)}&nbsp;${fn:escapeXml(param.primLastName)}</strong></td>
                  </tr>
                  <tr>
                    <td><span class="confirm">Primary Email:</span><strong> ${fn:escapeXml(param.primEmail)}</strong></td>
                  </tr>
                  <tr>
                    <td><span class="confirm">Primary Phone:</span><strong> ${fn:escapeXml(param.primAC)}&nbsp;${fn:escapeXml(param.primPhone)}</strong></td>
                  </tr>
                </table>
                <br>
                <table width="550" border="0" cellpadding="1" cellspacing="0" style="border:1px solid #95aa8e;">
                  <th>Address</th>
                  <tr>
                    <td><span class="confirm">Street Address:</span><strong> ${fn:escapeXml(param.billAdd1)}&nbsp;${fn:escapeXml(param.billAdd2)}</strong></td>
                  </tr>
                  <tr>
                    <td><span class="confirm">City, State & Zip:</span><strong> ${fn:escapeXml(param.billCity)},&nbsp;${fn:escapeXml(param.billState)}&nbsp;${fn:escapeXml(param.billZip)}</strong></td>
                  </tr>
                 
                </table>
                <br>
               &nbsp;
                <br>
                <input class="mbtn" type="submit" value="Finish">
                &nbsp;&nbsp;
                <input class="mbtn" type="button" onClick="window.print()" value="Print">
              </form>
            </c:forEach>
          </c:otherwise>
        </c:choose>
	
  </div>
  <div id="foot">
    <%@ include file="../../inc/footer1.jsp" %>
  </div>
</div>
</div>
</body>
</html>
