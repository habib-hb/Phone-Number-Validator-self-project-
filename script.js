const input=document.getElementById('user-input');
const checkBtn=document.getElementById('check-btn');
const clearBtn=document.getElementById('clear-btn');
const results=document.getElementById('results-div');

//check empty strings
checkBtn.addEventListener('click', ()=>{
  if(!input.value){
    alert("Please provide a phone number")
    return;
  }else{
    const regex= /^1?[-|\s]?\(?[0-9]{3}\)?[-|\s]?[0-9]{3}[-|\s]?[0-9]{4}$/

    const firstBracCheck= input.value.slice("").includes("(") !== input.value.slice("").includes(")")
    const secondBracCheck= input.value.slice("").includes(")") !== input.value.slice("").includes("(")

    if(regex.test(input.value) && !firstBracCheck && !secondBracCheck){
      results.textContent=`Valid US number: ${input.value}`;
    }else{
       results.textContent=`Invalid US number: ${input.value}`
    }
  }

})

//cleares result content
clearBtn.addEventListener('click', ()=>{
  results.textContent="";
})
