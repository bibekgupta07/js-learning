const accountId  = 144553
let accountEmail = "bibek@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "bibekg@gmail.com"
accountPassword =" 212112"
accountCity = "bangelaru"


console.log(accountId);

/*
prefer not to use 'var' 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])