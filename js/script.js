let clientName = document.getElementById('clientName'),
duration = document.getElementById('duration'),
date = document.getElementById('date'),
btn = document.getElementById('add');

btn.addEventListener('click',addClient,false);

[clientName,duration,date].forEach((input)=>{
    input.onkeyup = (e)=>{
        if(e.keyCode == 13){
            addClient();
        }
    }
})
function addClient(){
	let a = document.createElement('TD');
    let b = document.createElement('TD');
    let c = document.createElement('TD');
    let d = document.createElement('TD');
    let f = document.createElement('TD');
    let tr2 = document.createElement('TR');
    
    a.setAttribute('class','client');
    b.setAttribute('class','duration');
    c.setAttribute('class','price');
    d.setAttribute('class','date');
    f.setAttribute('class','endDate');

  if(clientName.value && duration.value && date.value){
      var price = duration.value / 30 *1600;
  	  a.innerText = clientName.value.charAt(0).toUpperCase() + clientName.value.slice(1);

      b.innerText = duration.value + ' days';
      var e = new Date(date.value);
      var j = new Date(date.value)

      var x = new Date(j.setDate(j.getDate() + Number(duration.value)));
      f.innerText = x.toDateString();
      d.innerText = e.toDateString();
      c.innerText = parseInt(price);
  
  tr2.append(a,b,c,d,f);
  tbody.append(tr2);

  clientName.value = '';
  date.value = '';
  duration.value = '';
  
}

} 
