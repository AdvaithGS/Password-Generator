document.getElementById("len").defaultValue = 24;
document.getElementById("generate").addEventListener("click", getpass);
var password= '';
var num = document.getElementById("len").value;
var alphabet =  "`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfgjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>?";
for ( i = 0; i < num ; i++)
{
    password += alphabet[Math.floor((Math.random() * alphabet.length)* 1)];
}
document.getElementById('pass').textContent  = password;
function getpass() {
  var password= '';
  var num = document.getElementById("len").value;
  var alphabet =  "`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfgjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>?";
  for ( i = 0; i < num ; i++)
{
    password += alphabet[Math.floor((Math.random() * alphabet.length)* 1)];
}
  document.getElementById('pass').textContent  = password;
}