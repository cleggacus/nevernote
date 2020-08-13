const passwordExclude = [
    "password",
    "123",
    "abc",
    "qwerty"
];

export const passwordValid = (password: string) => {
    return new Promise((resolve, reject) => {
        if(password.length < 12){
            reject("Password need to be at least 12 characters");
        }

        const normalizedPassword = password
            .replace('$', 's')
            .replace('0', 'o')

        for(let i = 0; i < passwordExclude.length; i++){
            if(normalizedPassword.toLowerCase().includes(passwordExclude[i]))
                reject(`Password cant contain '${passwordExclude[i]}'`);
        }

        resolve("success");
    })
}

export const usernameValid = (username: string) => {
    return new Promise((resolve, reject) => {
        if(/\s/g.test(username)){
            reject("Username cant contain whitespace");
        }

        if(username.length > 20){
            reject("Username cant be greater than 20 characters");
        }

        if((/[^0-9a-zA-Z$_.!]/).test(username)){
            reject("Username contains unauthorized character");
        }

        if(username.length <= 0){
            reject("Username cant be empty");
        }

        resolve("success");
    })
}