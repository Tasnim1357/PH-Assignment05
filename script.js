const buttons=document.getElementsByClassName("btn3");
let count=0;
let sum=0;
const phone=document.getElementById('phone');



function checkb(){
  const btnClicked= Array.from(buttons).some(btn => btn.classList.contains('selected'));
  const inputFill = phone.value.trim() !== '';
  nextButton.disabled = !(btnClicked && inputFill);
}

for(let btn of buttons){
    btn.addEventListener('click',function(){
        if(!btn.disabled){
          if(count<4){
            btn.disabled=true;
            btn.style.backgroundColor="#1DD100";
            btn.style.color="#FFF";
            count++;
            const seat=document.getElementById('seat')
            seat.innerText=count;
            const seatle=document.getElementById('seatle');
            seatle.innerText=40-count;
            const tbody=document.getElementById('tbody');
            const tr=document.createElement('tr');
            tr.innerHTML=`<td>${btn.innerText}</td>
            <td>Economy</td>
            <td>550</td>`;
            tr.style.display='flex';
            tr.style.justifyContent='space-between';
            tbody.appendChild(tr);
            const total=document.getElementById('total');
            total.innerText=parseInt(count*550);
            let grandTotal=document.getElementById('grand');
            grandTotal.innerText=parseInt(count*550);

           if(count===4){
            apply.disabled=false;
           }
            
        
          //  Next Button disable Check

            btn.classList.add('selected');
            checkb();


          

          }
          else{
            alert("You have already selected 4 tickets");
          }
        }
    })
}


//  Next Button disable Check
phone.addEventListener('input',function(){
  checkb();
});

// Apply Button Check

const apply=document.getElementById('apply');
if(apply.disabled=true){
    // apply.disabled=false;
    const input=document.getElementById('inp1');
   const inputDiv=document.getElementById('inpdiv');
   apply.addEventListener('click',function(){
    if(input.value==="NEW15"){
        const total=parseInt(count*550);
               const discount1=total-(total*0.15);
                     let grand1=document.getElementById('grand');
                     grand1.innerText=discount1;
                    inputDiv.classList.add('hidden');
                    input.value='';
                    

    }
    else if(input.value==="Couple 20"){
        const total=parseInt(count*550);
               const discount1=total-(total*0.20);
               let grand1=document.getElementById('grand');
                 grand1.innerText=discount1;
                 inputDiv.classList.add('hidden');
                 input.value='';
                 
    }
    else{
        alert("Invalid Coupon Code.Please enter valid coupon!!");
    }

   
   })


}

const nextButton=document.getElementById('next');
nextButton.addEventListener('click',function(){
  document.getElementById('hidden').classList.remove('hidden');
  phone.value='';
  nextButton.disabled=true;
  
  
});

const continueBtn=document.getElementById('Continuebtn');
function Goto(){
  document.getElementById('hidden').classList.add('hidden');
 location.reload();

}