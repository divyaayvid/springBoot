package com.example;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@RestController
public class AngularPieChartController {
	Connection con = null;
	PreparedStatement pstatement = null;
	ResultSet result = null;
	
	@GetMapping("/angChart")
	public ModelAndView showChart2(){
		return new ModelAndView("page3.html");
	}    
	
	@GetMapping("/chartData")
	public ArrayList login(HttpServletRequest request,
			HttpServletResponse response) throws SQLException {
		String resultString ="";
		ArrayList l = new ArrayList();
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://192.168.1.239:3306/test", "miracledb", "lokam001");
			String query = "SELECT order_type,order_count from store LIMIT 5";
			System.out.println("query..." + query);
			pstatement = con.prepareStatement(query);
			result = pstatement.executeQuery();			
			while (result.next()) {
			    l.add(result.getInt("order_count"));
	            l.add(result.getString("order_type"));
			}		
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return l;
	}
}
