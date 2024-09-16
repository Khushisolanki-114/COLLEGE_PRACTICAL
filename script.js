document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;


    document.getElementById('password').value = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
});


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const symbolsCharset = "!@#$%^&*()_+[]{}|;:',.<>?";


    let charset = "";
    if (includeLowercase) charset += lowercaseCharset;
    if (includeUppercase) charset += uppercaseCharset;
    if (includeNumbers) charset += numbersCharset;
    if (includeSymbols) charset += symbolsCharset;


    if (charset === "") return "";


    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}



