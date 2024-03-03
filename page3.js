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
        document.getElementById("result").innerHTML = "Ernakulam Medical Centre, Ernakulam <br> Medical Trust Hospital, Ernakulam <br> Aswini Hospital, Thrissur";
    } else if (selectedSpecialty === "cardiology") {
        document.getElementById("result").innerHTML = "Sun Hospital, Thrissur<br>Ernakulam General Hospital, Ernakulam<br>Medical Trust Hospital, Ernakulam";
    } else if (selectedSpecialty === "family medicine") {
        document.getElementById("result").innerHTML = "Ernakulam Medical Centre, Ernakulam<br>Medical Trust Hospital, Ernakulam<br>Elite Hospital, Thrissur<br>Aswini Hospital, Thrissur<br>Ernakulam General Hospital<br>WestFort Hospital, Thrissur<br>Mother Hospital, Thrissur<br>Corporative Hospital, Ernakulam";
    } else if (selectedSpecialty === "neurology") {
        document.getElementById("result").innerHTML = "Ernakulam Medical Centre, Ernakulam<br>Medical Trust Hospital, Ernakulam<br>Sunrise Hospital, Ernakulam<br>Corporative Hospital, Ernakulam<br>Jubilee Mission Medical College, Ernakulam";
    } else if (selectedSpecialty === "dermatology") {
        document.getElementById("result").innerHTML = "Ernakulam Medical Centre, Ernakulam<br>Medical Trust Hospital, Ernakulam<br>Sunrise Hospital, Ernakulam<br>Jubilee Mission Medical College, Ernakulam<br>Amritha Hospital, Ernakulam";
    } else if (selectedSpecialty === "orthopedics") {
        document.getElementById("result").innerHTML = "Medical Trust Hospital, Ernakulam<br>WestFort Hospital, Thrissur<br>Lisie Hospital, Ernakulam<br>Sunrise Hospital, Ernakulam<br>Sun Hospital, Ernakulam";
    } else if (selectedSpecialty === "nephrology") {
        document.getElementById("result").innerHTML = "Elite Hospital, Thrissur<br>Lisie Hospital, Ernakulam<br>City Hospital, Ernakulam";
    } else if (selectedSpecialty === "neurology") {
        document.getElementById("result").innerHTML = "Ernakulam General Hospital, Ernkulam<br>Sun Hospital, Thrissur<br>City Hospital, Ernakulam<br>Elite Hospital, Thrissur";
    } else if (selectedSpecialty === "ophthalmology") {
        document.getElementById("result").innerHTML = "Ernakulam Medical Centre<br>Jubilee Mission Medical College, Thrissur<br>City Hospital, Ernakulam<br>WestFort Hospital, Thrissur";
    }
}
