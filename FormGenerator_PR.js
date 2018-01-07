// HTML Form generation tool
module.exports.formGeneration = ((userInputs) => {
  // String to hold form
  let formString = '';

  // For each input in user input array
  userInputs.forEach((input) => {
    // Switch to handle entered input type, toLower to avoid irrelevant case errors
    switch (input.type.toLowerCase()) {
      case 'label':
        formString += '<label';

        // ADD attributes if present
        formString += input.for ? ` for="${input.for}"` : '';
        formString += input.name ? ` name="${input.name}"` : '';
        formString += input.id ? ` id="${input.id}"` : '';
        formString += input.class ? ` class="${input.class}"` : '';
        formString += input.value ? ` value="${input.value}"` : '';

        formString += '></label>\n';

        break;

      case 'text':
        formString += '<input type="text"';
        attributes();
        break;

      case 'email':
        formString += '<input type="email"';
        attributes();
        break;

      case 'password':
        formString += '<input type="password"';
        attributes();
        break;

      case 'submit':
        formString += '<input type="submit"';
        attributes();
        break;

      // IF NONE OF ABOVE TYPES APPLY
      default:
        // Show error
        var error = true;
        console.log(`Invalid input type: "${input.type}". Choose from "label", "text", "email", "password", and "submit" and do not leave blank.`);

        break;
    }
    function attributes() {
        formString += input.name ? ` name="${input.name}"` : '';
        formString += input.id ? ` id="${input.id}"` : '';
        formString += input.class ? ` class="${input.class}"` : '';
        formString += input.value ? ` value="${input.value}"` : '';
        formString += input.required ? ' required "' : '';
        formString += '/>\n';
    }
  });
  // RETURN form string
  return formString;
});
