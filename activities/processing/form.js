document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const age = document.getElementById('birthday').value;

    if(!first||!last){
        alert("First Name and Last Name cannot be blank.");
        return;
    }
    if(!age||!age < 18){
        alert("You must be 18 years or older to submit this form.");
        return;
    }
    
    const formData={
        fname: first,
        lname: last,
        birthday: age,
        password: document.getElementById('password').value,
        state: document.getElementById('state').value
    };
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST","submit.json", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onreadystatechange= function (){

        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML="";
        }
        else if (xhr.readyState === 4){
            alert('Error submitting the form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    alert("I should happen last, right?")
    console.log(formData);
    

});
