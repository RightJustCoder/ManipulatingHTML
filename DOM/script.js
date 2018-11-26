document.addEventListener('DOMContentLoaded', function (event) {
    let btn = document.createElement('button')
    btn.className = 'button1'
    let btnText = document.createTextNode('DomButton')
    btn.appendChild(btnText)
    document.body.appendChild(btn)

    btn.addEventListener('click', function () {
        alert('Hello Sir Good Day')
    });


    //When button clicked alert value of input text box
    let htmlButton = document.getElementById('htmlButton');
    htmlButton.addEventListener('click', function () {

        alert(document.getElementById('textBox').value);


    });

    //make the div change to a different background color when your mouse hovers over it.
    let colorDiv = document.getElementById('div1')
    colorDiv.addEventListener('mouseenter', function () {
        colorDiv.style.backgroundColor = 'red';
    })

    colorDiv.addEventListener('mouseleave', function () {
        colorDiv.style.backgroundColor = 'white';

    });

    let p = document.createElement('p')
    let pTxt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim praesent elementum facilisis. ')
    p.appendChild(pTxt)
    document.body.appendChild(p)
// Function for paragraph changing color when clicked
p.addEventListener('click', function()  {
    let colorChange = ['Green', 'Pink', 'Yellow', 'blue', 'black', 'brown', 'purple', 'Red'];
    let randomIndex = Math.floor(Math.random() * colorChange.length)
p.style.color = colorChange[randomIndex];
p.style.cursor = 'pointer';

})
    // End of DOM Content Loaded tag
});