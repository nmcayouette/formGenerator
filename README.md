# Form Generator
*Console application to create dynamic HTML form from array of user choices*

## Setup 

### Dependencies

* node

### Installation

* Clone this repo: git@github.com:nmcayouette/formGenerator.git

## Test

Open 'index.js' and view entered test elements

`node index.js`

Add your own to see more examples

## Getting started

`npm install`

### Usage

Enter array of input data objects and render an HTML formatted form
Supports types and attributes as follows:
1. label
  * name
  * for
  * id
  * class
  * value
  * required
2. text
  * name
  * id
  * class
  * value
  * required
3. email
  * name
  * id
  * class
  * value
  * required
4. password
  * name
  * id
  * class
  * value
  * required
5. submit
  * name
  * id
  * class
  * value

### Example

```javascript
var inputArray = [{type:'password', name='passwordName', id='passwordID', class='passwordClass', required:true}]
```

Outputs html:
```
<input type='email' name='user-email' id='user-email' class='user-email' required/>
```

## Pull requests

Your feedback is welcome!
 
* Fork repo
* Commit feature update
* Send pull request with description of code

## Copyright and attribution

Copyright (c) 2018 Nicole Cayouette
