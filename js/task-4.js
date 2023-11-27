


document.querySelector('.login-form').addEventListener("submit", (e) => {
    e.preventDefault();
    const emailData = e.currentTarget.elements.email.value.trim();
    const passwordData = e.currentTarget.elements.password.value.trim();
    
    if (emailData === '' || passwordData === '') {
        alert('All form fields must be filled in');
        return; 
    }
    const newObject = {
        email: emailData,
        password: passwordData,
    }
    console.log("/////TASK_4/////");
    console.log(newObject);
    console.log("/////////////////");
    e.currentTarget.reset();
})
