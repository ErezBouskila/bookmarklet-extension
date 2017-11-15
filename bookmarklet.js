window.onload = () => {
    let ul = document.getElementById('bookmarkletList');

    ul.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI'){
            alert(event.target.innerHTML);
        }
    });

    document.getElementById('createBookmarklet').addEventListener("click", createBookmarklet);
};

createBookmarklet = () => {

    //Todo:: Maybe use form tag to build
    let li = document.createElement("li");

    let inputValue = document.getElementById("myBookmarkletName").value;
    let textAreaInputValue = document.getElementById("myBookmarkletCode").value;
    let t = document.createTextNode(inputValue);
    let c = document.createTextNode(textAreaInputValue);
    li.setAttribute("id", "testLi");
    li.setAttribute("data-code", textAreaInputValue);
    li.appendChild(t);
    //Todo:: Make a validator function
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("bookmarkletList").appendChild(li);
    }
    //TODO:: Make a clear function
    document.getElementById("myBookmarkletName").value = "";
    document.getElementById("myBookmarkletCode").value = "";

};
