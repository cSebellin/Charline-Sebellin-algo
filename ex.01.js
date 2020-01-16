module.exports = function UniqueStr(str=''){
    let char = [];
    let answer = '';
    
    for(let i = 0 ; i< str.length ; i ++){
        char[i] = str[i];
        if(char[i] !== char[i]){
            answer = 'String has all unique characters';
        }
        else if(char[i] === char[i]){
            answer = 'String has NOT all unique characters';
        }
    }

    return  answer;
 
    
}