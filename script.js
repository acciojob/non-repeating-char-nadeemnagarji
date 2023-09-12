function firstNonRepeatedChar(str) {
 // Write your code here
	
let charCount = {}
	for(let i=0;i<str.length ; i++){
			if (charCount.hasOwnproperty(str[i])){
					charCount[str[i]]++
			}else{
					charCount[str[i]] = 1
}
	}
	for( let key in charCount){
		if(charCount[key] === 1 ){
				return key
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
