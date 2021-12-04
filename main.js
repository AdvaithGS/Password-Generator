var password = '';
var pass = document.getElementById("pass");
var number = 24 + Math.floor(Math.random()*10);
var alphabet =  "`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfgjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>?";
for ( i = 0; i < number ; i++)
{
    password += alphabet[Math.floor((Math.random() * alphabet.length)* 1)];
}
pass.textContent = password;