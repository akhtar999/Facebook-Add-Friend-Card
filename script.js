var header = document.querySelector("h5");
var addButton = document.querySelector("#add");
// var removeButton= document.querySelector("#remove");

var flag = 0;

addButton.addEventListener("click", () => {

    if (flag == 0) {
        addButton.style.backgroundColor="#1877f2"
        header.innerText = "Stranger"
        addButton.innerText = "Add friend"
        header.style.color = "red"
        flag = 1;
    } else {
        addButton.style.backgroundColor="red"
        header.innerText = "Friend"
        addButton.innerText = "Remove friend"
        header.style.color = "green"
        flag = 0
    }
});







// removeButton.addEventListener("click", ()=>{
//     header.innerText="Stranger"
//     addButton.innerText="Add friend"
//     header.style.color="red"
// });