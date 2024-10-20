function validateSyntax() {
    let input = document.getElementById('petInput').value;
    
    // Validation logic goes here

    //let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    if ( input = "pet_" ) {
        let result = 'Valid Syntax'
    }   else {let result = "Invalid Syntax"}
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


