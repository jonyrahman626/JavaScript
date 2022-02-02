function registration(callback) {
    setTimeout(() => {
        console.log('Registered Completed');
        callback()
    }, 2000)
}

function sendEmail() {
    console.log('Email Send Completed');
}

function login() {
    console.log('Login Completed');
}

function getUserData() {
    console.log('Get User Data Completed');
}

function displayUserData() {
    console.log('Display User Data Completed');
}


registration(function () {
    sendEmail()
    login()
    getUserData()
    displayUserData()
})


console.log('Others Work');