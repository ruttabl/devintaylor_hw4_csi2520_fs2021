function addComment() {
    let inputText = document.querySelector('input[type="text"]');
    let buttonSubmit = document.querySelector('button[type="yup"]');
    if (inputText.style.display === "none") {
        inputText.style.display = "block";
        buttonSubmit.style.display = "block";
    } 
    else {
        inputText.style.display = "none";
        buttonSubmit.style.display = "none";
    }
  }

function submitComment() {
    let inputText = document.querySelector('input[type="text"]');
    let buttonSubmit = document.querySelector('button[type="yup"]');
    if (inputText.style.display === "none") {
        inputText.style.display = "block";
        buttonSubmit.style.display = "block";
    } 
    else {
        inputText.style.display = "none";
        buttonSubmit.style.display = "none";
    }
    var p = document.createElement("P");      
    var b = document.createElement("BUTTON");      
    b.setAttribute('onclick', 'replyComment();');  
    b.textContent = 'Reply';
    p.innerHTML = inputText.value;               
    document.getElementById("lawl").appendChild(p);  
    document.getElementById("lawl").appendChild(b);  
  }

  function replyComment() {
    let inputText = document.querySelector('input[type="text"]');
    let buttonSubmit = document.querySelector('button[type="yup"]');
    inputText.style.display = "block";
    buttonSubmit.style.display = "block";
    var p = document.createElement("P");          
    p.innerHTML = inputText.value;                

  }
