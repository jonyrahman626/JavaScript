function times(){
    let ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
}

 function registration() {
     console.log('Registered Completed');
     times();
 }

 function sendEmail() {
     console.log('Email Send Completed');
     times();
 }

 function login() {
     console.log('Login Completed');
     times();
 }

 function getUserData() {
     console.log('Get User Data Completed');
 }

 function displayUserData() {
     console.log('Display User Data Completed');
 }


 registration()
 sendEmail()
 login()
 getUserData()
 displayUserData()


 console.log('Others Work');