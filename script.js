let textVal = document.querySelector('textarea');
const btn = document.querySelector('button');
const currWord = document.querySelector('.current-word');
const remainingWord = document.querySelector('.remaining-word');
const limitReached = document.querySelector('.limit-reached');


let maxValueOfText = 300;

let getInputValue = () => {
    let curW = textVal.value.length;
    let remW  = maxValueOfText - curW
    currWord.innerHTML = curW + " word"
    remainingWord.innerHTML = remW + " remaining"

    if(curW>maxValueOfText-1){
        textVal.addEventListener("keypress",(e)=>{
            e.preventDefault();
        })
    }

    // <************* copy function *************> 

    btn.addEventListener('click',()=>{
        textVal.select();
        navigator.clipboard.writeText(textVal.value);
    })

}

textVal.addEventListener('keyup', () => getInputValue());