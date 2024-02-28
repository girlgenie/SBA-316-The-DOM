document.addEventListener('DOMContentLoaded', function(){
    // create a list for 5 vacations
    const newListItem1 = document.createElement('li');
    newListItem1.textContent = newListItem1.textContent.value; 

    const newListItem2 = document.createElement('li');
    newListItem2.textContent = "Vacation 2"; 

    const newListItem3 = document.createElement('li');
    newListItem3.textContent = "Vacation 3"; 

    const newListItem4 = document.createElement('li');
    newListItem4.textContent = "Vacation 4"; 

    const newListItem5 = document.createElement('li');
    newListItem5.textContent = "Vacation 5"; 

    // adding to the existing list with id vacationList from HTML
    const vacationList = document.getElementById('vacationList'); 
    vacationList.appendChild(newListItem1);
    vacationList.appendChild(newListItem2);
    vacationList.appendChild(newListItem3);
    vacationList.appendChild(newListItem4);
    vacationList.appendChild(newListItem5);

    // add button and listen for click
    const vacationInput = document.getElementById('vacationInput');
    vacationInput.addEventListener('click', function() {
        if (newListItem1.textContent !== '') {
            const newVacation = newListItem1.cloneNode(true);
            vacationList.appendChild(newVacation);
            // Optionally, clear the input field after adding the vacation
            vacationInput.value = '';
        }
    });
});
