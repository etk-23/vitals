function sortOptions() {
    var select = document.getElementById("speciality");

    var selectedSpecialty = select.value;

    var options = Array.from(select.options);

    var hospitalOptions = [];
    for (var i = 0; i < options.length; i++) {
        if (options[i].value.includes("speciality") && options[i].value.includes(selectedSpecialty)) {
            hospitalOptions.push(options[i]);
        }
    }

    if (selectedSpecialty === "oncology") {
        document.getElementById("result").innerHTML = "<br> Ernakulam Medical Centre, Ernakulam. <br><br> Medical Trust Hospital, Ernakulam. <br><br> Aswini Hospital, Thrissur.";
    } else if (selectedSpecialty === "cardiology") {
        document.getElementById("result").innerHTML = "<br> Sun Hospital, Thrissur. <br><br>Ernakulam General Hospital, Ernakulam. <br><br> Medical Trust Hospital, Ernakulam.";
    } else if (selectedSpecialty === "family medicine") {
        document.getElementById("result").innerHTML = "<br> Ernakulam Medical Centre, Ernakulam. <br><br> Medical Trust Hospital, Ernakulam. <br><br> Elite Hospital, Thrissur. <br><br> Aswini Hospital, Thrissur. <br><br> Ernakulam General Hospital, Ernakulam. <br><br> WestFort Hospital, Thrissur. <br><br> Mother Hospital, Thrissur. <br><br> Corporative Hospital, Ernakulam.";
    } else if (selectedSpecialty === "neurology") {
        document.getElementById("result").innerHTML = "<br> Ernakulam Medical Centre, Ernakulam. <br><br> Medical Trust Hospital, Ernakulam. <br><br> Sunrise Hospital, Ernakulam. <br><br> Corporative Hospital, Ernakulam. <br><br> Jubilee Mission Medical College, Ernakulam.";
    } else if (selectedSpecialty === "dermatology") {
        document.getElementById("result").innerHTML = "<br> Ernakulam Medical Centre, Ernakulam. <br><br> Medical Trust Hospital, Ernakulam. <br><br> Sunrise Hospital, Ernakulam. <br><br> Jubilee Mission Medical College, Ernakulam. <br><br> Amritha Hospital, Ernakulam.";
    } else if (selectedSpecialty === "orthopedics") {
        document.getElementById("result").innerHTML = "<br> Medical Trust Hospital, Ernakulam. <br><br> WestFort Hospital, Thrissur. <br><br> Lisie Hospital, Ernakulam. <br><br> Sunrise Hospital, Ernakulam. <br><br>Sun Hospital, Ernakulam.";
    } else if (selectedSpecialty === "nephrology") {
        document.getElementById("result").innerHTML = "<br> Elite Hospital, Thrissur. <br><br> Lisie Hospital, Ernakulam. <br><br> City Hospital, Ernakulam.";
    } else if (selectedSpecialty === "neurology") {
        document.getElementById("result").innerHTML = "<br> Ernakulam General Hospital, Ernkulam. <br><br> Sun Hospital, Thrissur. <br><br> City Hospital, Ernakulam. <br><br> Elite Hospital, Thrissur.";
    } else if (selectedSpecialty === "ophthalmology") {
        document.getElementById("result").innerHTML = "<br> Ernakulam Medical Centre. <br><br> Jubilee Mission Medical College, Thrissur. <br><br> City Hospital, Ernakulam. <br><br> WestFort Hospital, Thrissur.";
    }
}
