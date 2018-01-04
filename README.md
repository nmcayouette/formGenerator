# Mark Langenhorst Feedback
Nicole did a great job with the form building tool, and I was very impressed with what she had made. In fact, the only thing I could think of, as a way to shorten/clean the lines of code, was to add a function to the bottom that populates the attributes when it is called. That way if anything needs to be changed with the attributes, it only needs to be changed once rather than each time for each input tag. Other than that, I think her project was created in an efficient manner that any developer would be able to figure out and use on their own! For example, instead of using 
```javascript
        formString += '<input type="text"';
        formString += input.for ? ` for="${input.for}"` : '';
        formString += input.name ? ` name="${input.name}"` : '';
        formString += input.id ? ` id="${input.id}"` : '';
        formString += input.class ? ` class="${input.class}"` : '';
        formString += input.value ? ` value="${input.value}"` : '';
```

in each case, just put that into a function and then call accordingly.
```javascript
        formString += '<input type="text"';
        attributes();
```

Like I said, however, she did a great job building a tool that any developer could use! Great job, Nicole!
