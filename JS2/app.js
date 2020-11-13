function saludar() {
    
    let elInput;

    elInput = document.getElementById ("idInput");

    if (elInput.value != "") {
        alert("Hola "+elInput.value);

        elInput.value = "";
    }

}