function generatePassword(passwordLength){
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";

  for(let i = 0; i < passwordLength; i++){
    const random = Math.floor(Math.random() * chars.length);
    result += chars[random];
  }

  return result;
}

const password = generatePassword(12);
console.log(`Generated password: ${password}`);
