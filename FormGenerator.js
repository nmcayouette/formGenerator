// HTML Form Generation Tool
module.exports.formGeneration = ((userInputs) => {
  // String to hold form
  let formString = '';

  // Add attributes if available
  const attributes = (input) => {
    let attribute = input.for ? ` for="${input.for}"` : '';
    attribute += input.name ? ` name="${input.name}"` : '';
    attribute += input.id ? ` id="${input.id}"` : '';
    attribute += input.class ? ` class="${input.class}"` : '';
    attribute += input.value ? ` value="${input.value}"` : '';
    attribute += input.required ? ' required "' : '';

    return attribute;
  };

  // For each input in user input array
  userInputs.forEach((input) => {
    // Switch to handle entered input type, toLower to avoid irrelevant case errors
    switch (input.type.toLowerCase()) {
      case 'label':
        formString += '<label';

        // ADD attributes if present
        formString += attributes(input);

        formString += '></label>\n';

        break;

      case 'text':
        formString += '<input type="text"';

        formString += attributes(input);

        formString += '/>\n';

        break;

      case 'email':
        formString += '<input type="email"';

        formString += attributes(input);

        formString += '/>\n';

        break;

      case 'password':
        formString += '<input type="password"';

        formString += attributes(input);

        formString += '/>\n';

        break;

      case 'submit':
        formString += '<input type="submit"';

        formString += attributes(input);

        formString += '/>\n';

        break;

      // IF NONE OF ABOVE TYPES APPLY
      default:
        // Show error
        console.log(`Invalid input type: "${input.type}". Choose from "label", "text", "email", "password", and "submit" and do not leave blank.`);

        break;
    }
  });
  // RETURN form string
  return formString;
});
