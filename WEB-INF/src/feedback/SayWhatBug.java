package feedback;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class SayWhatBug extends HttpServlet {

	public void doGet(HttpServletRequest request,
			                 HttpServletResponse response)
			throws IOException, ServletException {


		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String comments = request.getParameter("comments");

		HttpSession session = request.getSession();
		Reporter reporter = (Reporter) session.getAttribute("reporter");
		if (reporter == null)
			reporter = new Reporter();


		reporter.setEMAIL(email);
		reporter.setNAME(name);
		reporter.setCOMMENTS(comments);


		ReporterIO.addRecord(reporter,
				                    	"/home/toshi/public_html/ui-design-engineering.com/HHIT/feedback.txt");
				                   // "C:/Tomcat-7/webapps/ui-design-engineering/HHIT/feedback.txt");

		session.setAttribute("reporter", reporter);

		RequestDispatcher dispatcher =
				getServletContext().getRequestDispatcher(
						                                        "/pages/demos/demos/show_bug.jsp");
		dispatcher.forward(request, response);

	}

	public void doPost(HttpServletRequest request,
			                  HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}