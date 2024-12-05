document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const age = document.getElementById('birthday').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const confirmpassword = document.getElementById('password').value;

    const today = new Date();
    const birthDate = new Date(age);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
    }

    if (!age || calculatedAge < 18) {
        alert("You must be 18 years or older to submit this form.");
        return;
    }
    if(!first||!last||!email){
        alert("First Name, Last Name and Email cannot be blank.");
        return;

    }
    if (password !== confirmpassword) {
        alert("Passwords do not match.");
        return;
    }
    const formData={
        fname: first,
        lname: last,
        birthday: age,
        password: password
    };
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onreadystatechange= function (){

        if(xhr.readyState === 4 && xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML="";
            document.getElementById('message').innerHTML = `
            <h1>${response.message}</h1>
            <p><strong>First Name:</strong> ${response.first}</p>
            <p><strong>Last Name:</strong> ${response.last}</p>
            <p><strong>Email:</strong> ${response.email}</p>
            <p><strong>Gender:</strong> ${response.gender}</p>`
            alert('You have submitted the form successfully!');
        }
        else if (xhr.readyState === 4){
            alert('Error submitting the form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});
