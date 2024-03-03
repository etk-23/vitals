import javax.swing.*;
import java.awt.event.*;
import java.sql.*;

class Login extends JFrame implements ActionListener {
    JButton chk, register;
    JTextField output1, output2, output3, output4;
    JLabel input1, input2, input3, input4, heading, mssg;
    
    Login() {
        super("LOGIN");

        chk = new JButton("Check");
        register = new JButton("REGISTER");

        output1 = new JTextField(30);
        output2 = new JTextField(30);
        output3 = new JTextField(30);
        output4 = new JTextField(30);

        heading = new JLabel("VITALS");
        input1 = new JLabel("Username (Name):");
        input2 = new JLabel("Password (integers only):");
        input3 = new JLabel("New Username (Name):");
        input4 = new JLabel("New Password (integers only):");
        mssg = new JLabel("Forgot Password?");

        setLayout(null);
        setSize(1000, 500);
        setVisible(true);

        heading.setBounds(20, 40, 100, 20);
        input1.setBounds(20, 80, 200, 20);
        output1.setBounds(20, 110, 200, 20);

        input2.setBounds(20, 150, 200, 20);
        output2.setBounds(20, 180, 200, 20);

        chk.setBounds(100, 220, 80, 20);

        mssg.setBounds(100, 260, 200, 20);

        register.setBounds(20, 300, 80, 20);
        input3.setBounds(20, 330, 200, 20);
        output3.setBounds(20, 360, 200, 20);
        input4.setBounds(20, 390, 200, 20);
        output4.setBounds(20, 420, 200, 20);

        setDefaultCloseOperation(EXIT_ON_CLOSE);

        chk.addActionListener(this);
        register.addActionListener(this);

        add(heading);
        add(input1);
        add(output1);
        add(input2);
        add(output2);
        add(chk);
        add(mssg);
        add(register);
        add(input3);
        add(output3);
        add(input4);
        add(output4);
    }

    public void actionPerformed(ActionEvent ae) {
        String cmd = ae.getActionCommand();
        int a;
        if (cmd.equals("Check")) {
            try {
                String user = output1.getText();
                String password = output2.getText();

                int numrows = 0;
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/company", "root", "root");
                Statement stm = con.createStatement();
                String qry = "SELECT * FROM Details WHERE username='" + user + "' AND password='" + password + "'";
                ResultSet rs = stm.executeQuery(qry);

                while (rs.next()) {
                    numrows++;
                }

                if (numrows > 0) {
                    System.out.println(numrows + " rows retrieved!");
                } else {
                    throw new Exception("Data not found");
                }

                rs.close();
                stm.close();
                con.close();
            } catch (ClassNotFoundException e) {
                System.out.println("Error: " + e);
            }catch (SQLException e){
                 System.out.println("Error:"+e);
            } catch (Exception e) {
                System.out.println("Data not found!");
            }
        }
    }

    public static void main(String args[]) {
        Login obj = new Login();
    }
}
