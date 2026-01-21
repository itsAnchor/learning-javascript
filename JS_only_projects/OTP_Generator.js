// Random Otp Generator
function GenerateOTP(length){
  let otp = "";
  
  for (let i = 0; i < length; i++) {
    
    otp += Math.floor(Math.random() * 10)
  }
  return Number(otp);
}


let randomOtp = GenerateOTP(4);
console.log(randomOtp)


