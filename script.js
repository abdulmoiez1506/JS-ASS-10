var fruits = ["Cherry", "Pomegranate", "Banana", "Orange", "Apple", "Grapes", "Watermelon"];

  document.write("<h2>Fruits List</h2>");
  document.write("<ul>");

  for (var i = 0; i < fruits.length; i++) {
    document.write("<li>" + fruits[i] + "</li>");
  }

  document.write("</ul>");


  let numbers = [1, 2, 3, 4, 5];

    function displayArray() {
        document.getElementById('arrayOutput').textContent = 'Array : ' + numbers.join(', ');
    }
    function addElement() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        numbers.push(randomNumber);
        displayArray();
    }
    function removeElement() {
        if (numbers.length > 0) {
            numbers.pop();
            displayArray();
        } else {
            alert('Array is already empty!');
        }
    }
    function findIndex() {
        const searchValue = parseInt(prompt('Enter the number to find its index:'));
        const index = numbers.indexOf(searchValue);

        if (index !== -1) {
            alert(`Index of ${searchValue} is ${index}`);
        } else {
            alert(`${searchValue} not found in the array.`);
        }
    }

    displayArray();