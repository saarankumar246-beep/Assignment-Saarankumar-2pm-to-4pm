function validateNumber(input){
    try{
        if(input === "" || isNaN(input)){
            throw new Error("Input is not a valid number");
        }
            console.log("Valid number:", Number(input));
    }catch(error){
        console.log("Error:",error.message);
    }
}

validateNumber("25");  
validateNumber("abc");  
validateNumber(""); 