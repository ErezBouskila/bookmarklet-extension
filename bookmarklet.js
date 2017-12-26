window.onload = () => {
    let ul = document.querySelector('.bookmarkletList');

    ul.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI'){
            eval(event.target.getAttribute("data-code"));
        }
    });

    document.querySelector('.createBookmarklet').addEventListener("click", createBookmarklet);
};

createBookmarklet = () => {

    //Todo:: Maybe use form tag to build
    let li = document.createElement("li");

    let inputValue = document.querySelector(".myBookmarkletName").value;
    let textAreaInputValue = document.querySelector(".myBookmarkletCode").value;
    let t = document.createTextNode(inputValue);
    li.setAttribute("id", "testLi");
    li.setAttribute("data-code", textAreaInputValue);
    li.appendChild(t);
    //Todo:: Make a validator function
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.querySelector(".bookmarkletList").appendChild(li);
    }
    //TODO:: Make a clear function
    document.querySelector(".myBookmarkletName").value = "";
    document.querySelector(".myBookmarkletCode").value = "";

};

generate = (el, list) => {
    el.innerHTML = list.reduce((acc, curr) => {
        return `${acc}<li data-code="${textAreaInputValue}" >${curr.name}</li>`
    }, '');
};
