function validateForm() {
    var x = document.forms["firstInput"]["date"].value;
    if (x == null || x == "") {
        alert("Airport and Date must be selected");
        return false;
    }
}