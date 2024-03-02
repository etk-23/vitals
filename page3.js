function sortOptions() {
    var select = document.getElementById("hospital");

    var selectedSpecialty = select.value;

    var options = Array.from(select.options);

    var hospitalOptions = [];
    for (var i = 0; i < options.length; i++) {
        if (options[i].value.includes("Hospital") && options[i].value.includes(selectedSpecialty)) {
            hospitalOptions.push(options[i]);
        }
    }

    if (selectedSpecialty === "oncology") {
        console.log("Ernakulam Medical Centre, Ernakulam");
        console.log("Medical Trust Hospital, Ernakulam");
        console.log("Aswini Hospital, Thrissur");
    } else if (selectedSpecialty === "cardiology") {
        console.log("Sun Hospital, Thrissur");
        console.log("Ernakulam General Hospital, Ernakulam");
        console.log("Medical Trust Hospital, Ernakulam");
    }
    else if (selectedSpeciality=="family medicine"){
        console.log("Ernakulam Medical Centre, Ernakulam");
        console.log("Medical Trust Hospital, Ernakulam");
        console.log("Elite Hospital, Thrissur");
        console.log("Aswini Hospital, Thrissur");
        console.log("Ernakulam General Hospital");
        console.log("WestFort Hospital, Thrissur");
        console.log("Mother Hospital, Thrissur");
    }
}