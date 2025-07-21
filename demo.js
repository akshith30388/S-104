//counting number of volwes in an string by JS
// by using for-of loop 
    function countvolwes(str){
        for(let i of str){
            if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
                count++;
            }
        }
        console.log("NO.OF VOLWES IS",count);
    }
let i,count=0;
// same by using arrow function
const countval=(str) =>{
    for(let i of str){
            if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
                count++;
            }
        }
        console.log("NO.OF VOLWES IS",count);
}