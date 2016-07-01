
<!DOCTYPE html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>healthypainting.com - Contact</title>
<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/hp.css" type="text/css">
<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/forms.css" type="text/css">
<script language="JavaScript" src="${contextPath}/clients/darryl/resources/js/components/buttons.js"></script>
</head>
<script type="text/javascript">

function doChange(){
state_id = document.standard.billState.selectedIndex;
document.standard.billState.value = document.standard.billState.options[state_id].text;
} 

function validate(standard) 
{
    if (document.forms.standard.companyName.value=="") {
        alert("Please fill in your company name");
        document.forms.standard.companyName.focus();
		return false;
    }
    if (document.forms.standard.primEmail.value.indexOf("@")==-1) {
        alert("Please fill in a valid email address");
        document.forms.standard.primEmail.focus();
		return false;
    }
    if (document.forms.standard.primFirstName.value=="") {
        alert("Please tell me your first name");
        document.forms.standard.primFirstName.focus();
		return false;
    }
	 if (document.forms.standard.primLastName.value=="") {
        alert("Please tell me your last name");
        document.forms.standard.primLastName.focus();
		return false;
    }
    else {
        document.forms.standard.submit();
    }
}

</script>
<body onload="change()">
<%
	if (request.getSession(false).getAttribute("emailAddress") == null ){
		response.sendRedirect(request.getContextPath() + "/clients/login.jsp");

	}
%>
<div id="realnavbar"><%@ include file="inc/navbar.jsp" %></div>
<div id="container-page">
  <div class="navbar">&nbsp;</div>
  <div id="content"> 
  <div class="pagehead">Contact &amp; Referrals</div>
    <p class="fade">Once I receive your order, I'll send you an email explaining the details of getting your site
      up and running. A follow-up phone call is often necessary to gather information and content for your site, discuss your design ideas and to give 
      you the URL to my development server so you can check my progress whenever you wish. You can view wireframes of your site there as well.</p>
    <p class="fade">I am certain that you will be pleased with your site and I guarantee 100% satisfaction. Give me a call or complete the
      form below to get the process started.</p>
    <form action="confirm.jsp" name="standard" id="standard" method="post">
      <input type="hidden" class="MEDformField" name="actKey" id="actKey" value="Personal" />
      <input type="hidden" class="MEDformField" name="text2" id="text2" value="am@ui-design-engineering.com"/>
      <!--Form table here -->
      <table bgcolor="#bccbb6" width="520" border="0" cellspacing="0" cellpadding="2" style="border:1px solid #4b3f1a;">
        <th colspan="2">Complete the Form Below:</th>
        <tr>
          <td colspan="2" height="4"><img src="../images/pixel.gif" border="0" height="4px"/></td>
        </tr>
        <tr>
          <td width="148" align="right">Company Name:</td>
          <td width="364"><input type="text" class="LONGformField" name="companyName" id="companyName"/>
          </td>
        </tr>
        <tr>
          <td nowrap="nowrap" align="right">Current Website URL:</td>
          <td><input class="LONGformField" id="curURL" name="curURL" /></td>
        </tr>
        <tr>
          <td align="right">Address Line 1:</td>
          <td><input class="LONGformField" id="billAdd1" name="billAdd1" />
          </td>
        </tr>
        <tr>
          <td align="right">Address Line 2:</td>
          <td><input class="MEDformField" id="billAdd2" name="billAdd2" />
          </td>
        </tr>
        <tr>
          <td align="right">City:</td>
          <td><input class="LONGformField" id="billCity" name="billCity" />
          </td>
        </tr>
        <tr>
          <td align="right">State:</td>
          <td><select class="selField2" id="billState" name="billState" onChange="document.getElementById('stringBillState').value=this.value;">
              <option>Choose State</option>
              <option value="AK">Alaska</option>
              <option value="AL">Alabama</option>
              <option value="AR">Arkansas</option>
              <option value="AZ">Arizona</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="IA">Iowa</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="MA">Massachusetts</option>
              <option value="MD">Maryland</option>
              <option value="ME">Maine</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MO">Missourri</option>
              <option value="MS">Mississippi</option>
              <option value="MT">Montana</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="NE">Nebraska</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NV">Nevada</option>
              <option value="NY">New York</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VA">Virginia</option>
              <option value="VT">Vermont</option>
              <option value="WA">Washington</option>
              <option value="WI">Wisconsin</option>
              <option value="WV">West Virginia</option>
              <option value="WY">Wyoming</option>
              <option value="DC">Washington D.C.</option>
            </select>
            <input type="hidden" class="TINYformField" name="stringBillState" id="stringBillState" value="<%= request.getParameter("stringBillState") %>"/>
          </td>
        </tr>
        <tr>
          <td align="right">Zip:</td>
          <td><input class="SHORTformField" id="billZip" name="billZip"/>
          </td>
        </tr>
        <tr>
          <td align="right">First Name:</td>
          <td><input class="LONGformField" id="primFirstName" name="primFirstName" />
          </td>
        </tr>
        <tr>
          <td align="right">Last Name: </td>
          <td><input class="LONGformField" id="primLastName" name="primLastName" />
          </td>
        </tr>
        <tr>
          <td align="right">Email:</td>
          <td><input class="LONGformField" id="primEmail" name="primEmail" />
            <input type="hidden" class="LONGformField" id="cc" name="cc" value="<%= request.getParameter("primEmail") %>"/>
          </td>
        </tr>
      
        <tr>
          <td align="right">Area Code/Phone:</td>
          <td nowrap><input onKeyup="autotab(this, document.plusplus.primPhone)" maxlength="3" class="TINYformField" id="primAC" name="primAC"  />
            &nbsp;
            <input class="SHORTformField" id="primPhone" name="primPhone" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">Notes:</td>
          <td><textarea name="notes" class="textArea" id="notes"></textarea></td>
        </tr>
        <tr>
          <td colspan="2" height="4"><img src="../images/pixel.gif" border="0" height="4px"/></td>
        </tr>
        <tr>
          <td colspan="2" align="right" style="border-top:1px dashed #887021;"><input class="mbtn" type="button" value="Submit" onClick="validate(standard)"/>
          </td>
        </tr>
      </table>
    </form>
	<br />&nbsp;<br />&nbsp;
	  <br />
  </div>
  <br />
  <div id="foot">
    <%@ include file="inc/footer.jsp" %>
  </div>
</div>

</body>
</html>
