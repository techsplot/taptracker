let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let  count = 0;

// document.addEventListener("DOMContentLoaded", () => {
//     let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
//     savedData.forEach(item => {
//         saveEl.innerHTML += `Count: ${item.count} - Description: ${item.description}<br>`;
//     });
// });

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let description = prompt("Enter a description for the count:");
//     if (description) {
//         let saveData = {
//             count: count,
//             description: description
//         };

//          // Save the data to localStorage
//         let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
//         savedData.push(saveData);
//         localStorage.setItem("savedData", JSON.stringify(savedData));

//            // Display the saved count and description on the same page
//            saveEl.innerHTML += `Count: ${count} - Description: ${description}<br>`;

       

//         // Reset the count after saving
//         countEl.textContent = 0;
//         count = 0;
//     }
// }

   // Load saved data from localStorage when the page loads
   document.addEventListener("DOMContentLoaded", () => {
    let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    renderSavedData(savedData);
});

function increment() {
        count += 1;
        countEl.innerText = count;
   
   
}
function decrement(){
    if(count !== 0){
        count -= 1;
        countEl.textContent = count;
    }
    
}

function save() {

    let description = prompt("Enter a description for the count:");
    if (count !== 0 && description !== "") {
       
        let saveData = {
            count: count,
            description: description
        } ;

        // Save the data to localStorage
        let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
        savedData.push(saveData);
        localStorage.setItem("savedData", JSON.stringify(savedData));

        // Re-render the saved data with the new entry
        renderSavedData(savedData);

        // Reset the count after saving
        countEl.textContent = 0;
        count = 0;
    }
    else if (count === 0){
        alert("number cannot be zero");
    }
    else if (description === ""){
        alert("add a description");
    }
    
}

function renderSavedData(data) {
    saveEl.innerHTML = ''; // Clear previous content
    
    data.forEach((item, index) => {
        saveEl.innerHTML += `
            <div class="but" id="entry-${index}">
              Count: <span>${item.count}</span> <br>
                Description: <span>${item.description}</span>
                <br>
                <div class=edit-del>
                <button onclick="editEntry(${index})">Edit</button>
                <button  onclick="deleteEntry(${index})">Delete</button>
                </div>
                <br><br>
            </div>
        `;
    });
}

// let countno = document.getElementById('count-no');
// let indexno = 1;

// function incrementNo(){
//     indexno += 1
//     countno.textContent= indexno;
// }



function deleteEntry(index) {
    let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    savedData.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem("savedData", JSON.stringify(savedData)); // Save updated data
    renderSavedData(savedData); // Re-render the updated data
}

function editEntry(index) {
   
    let savedData = JSON.parse(localStorage.getItem("savedData")) || [];
    let item = savedData[index];


    let newCount = prompt("Edit the count:", item.count);
   
  
    let newDescription = prompt("Edit the description:", item.description);

    if ( newCount !== null && newDescription !== null  ) {
        item.count = newCount;
        item.description = newDescription;
        savedData[index] = item;
        localStorage.setItem("savedData", JSON.stringify(savedData)); // Save updated data
        renderSavedData(savedData); // Re-render the updated data
        
    }
}