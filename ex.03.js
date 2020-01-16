module.exports = function Anagram(str1='', str2=''){
    let charStr1 = []
    let charStr2 = []
    let answer = false
    
    for(let i = 0 ; i< str1.length ; i ++){
        charStr1[i] = str1[i]
    }

    for(let i = 0 ; i< str2.length ; i ++){
        charStr2[i] = str2[i]
    }

    // for(let item of charStr1){
    //     for(let i of charStr2){
    //         if(Object.is(charStr1 === charStr2)){
    //             answer = true; 
    //         }   
    //     }
    // }

    if(charStr1 === charStr2){
        answer = true; 
    }   
    return answer
    
}