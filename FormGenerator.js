// HTML Form Generation Tool
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

        formString += '></label>';

        break;

      case 'text':
        formString += '<input type="text"';

        formString += input.name ? ` name="${input.name}"` : '';
        formString += input.id ? ` id="${input.id}"` : '';
        formString += input.class ? ` class="${input.class}"` : '';
        formString += input.value ? ` value="${input.value}"` : '';
        formString += input.required ? ' required "' : '';

        formString += '/>';

        break;

      case 'email':
        formString += '<input type="email"';

        formString += input.name ? ` name="${input.name}"` : '';
        formString += input.id ? ` id="${input.id}"` : '';
        formString += input.class ? ` class="${input.class}"` : '';
        formString += input.value ? ` value="${input.value}"` : '';
        formString += input.required ? ' required "' : '';

        formString += '/>';

        break;

      case 'password':
        formString += '<input type="password"';

        formString += input.name ? ` name="${input.name}"` : '';
        formString += input.id ? ` id="${input.id}"` : '';
        formString += input.class ? ` class="${input.class}"` : '';
        formString += input.value ? ` value="${input.value}"` : '';
        formString += input.required ? ' required "' : '';

        formString += '/>';

        break;

      case 'submit':
        formString += '<input type="submit"';

        formString += input.name ? ` name="${input.name}"` : '';
        formString += input.id ? ` id="${input.id}"` : '';
        formString += input.class ? ` class="${input.class}"` : '';
        formString += input.value ? ` value="${input.value}"` : '';
        formString += input.required ? ' required "' : '';

        formString += '/>';

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
