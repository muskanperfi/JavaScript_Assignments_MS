var employee = {
    firstname: "Muskan",
    lastname: "Sheikh",
    designation: "Intern Consulting",
    contact:8605407800,
    address: {
        house_no: 121,
        house_details: "Gaytri Nagar",
        city_name: "Nagpur",
        pin_code: 440022,
        country: "India",
    }
};
document.getElementById("employee").innerHTML = "Hello I'm " + " " +employee.firstname + " " + employee.lastname + ". " + "My designation is " + 
                                              employee.designation + ". " + "You can contact me on "+ employee.contact +". " +"My address is plot no. " +
                                              employee.address.house_no + ", " +  employee.address.house_details + ", " + employee.address.city_name + 
                                              ", " + employee.address.pin_code +", " +  employee.address.country +".";