package demopool;


public class AddUsers {
    private String userName;
    private String emailAddress;

    public AddUsers() {
        userName = "";
        emailAddress = "";
    }

    public AddUsers(String user, String email) {
        userName = user;
        emailAddress = email;
    }

    public void setUserName(String l) {
        userName = l;
    }

    public String getUserName() {
        return userName;
    }


    public void setEmailAddress(String e) {
        emailAddress = e;
    }

    public String getEmailAddress() {
        return emailAddress;
    }
}
