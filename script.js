// heart count feature
let heartValue = 0;
let hearts = document.getElementsByClassName('heart');

for(const heart of hearts){
    heart.addEventListener('click', function(){
        heartValue++
        document.getElementById('heart-count').innerText = heartValue
    })
    
}

const callHistory = [];


// call feature

document.getElementById('call-1').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling National Emergency 999')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'জাতীয় জরুরি সেবা',
        num: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)

    })

    document.getElementById('call-2').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling Police 999')
    document.getElementById('coin').innerText = coinDecducted

    const callData = {
        name : 'পুলিশ',
        num: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)

    })

    document.getElementById('call-3').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling Fire Service 999')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'ফায়ার সার্ভিস',
        num: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)

    })

    document.getElementById('call-4').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling Ambulance 999-111')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'অ্যাম্বুলেন্স',
        num: '999-111',
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)

    })

    document.getElementById('call-5').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling Women & Child Helpline 109')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'নারী ও শিশু সহায়তা',
        num: 109,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)
    
    

    })

    document.getElementById('call-6').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling Anti-Corruption 106')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'দুদক',
        num: 106,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)

    })

    document.getElementById('call-7').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling Electricity Outage 16216')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'বিদ্যুৎ বিভ্রাট',
        num: 16216,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)


    })

    document.getElementById('call-8').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling Bangladesh Railway 163')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'বাংলাদেশ রেলওয়ে',
        num: 163,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)

    })

    document.getElementById('call-9').
addEventListener('click', function(){
    let coin =document.getElementById('coin').innerText;
    let coinConverted = parseInt(coin);
    let coinDecducted = coinConverted - 20
    if(coinConverted < 19){
        alert('কল করার জন্য পর্যাপ্ত কয়েন নেই।')
        return
    }
    alert('Calling National Emergency 999')
    document.getElementById('coin').innerText = coinDecducted;

    const callData = {
        name : 'জাতীয় জরুরি সেবা',
        num: 999,
        date: new Date().toLocaleTimeString()
    }

    callHistory.push(callData)


    })



// Copy feature
currentValue = 0

document.getElementById('copy-1').
addEventListener('click' , function(){
   let text =  document.getElementById('nl').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
})

document.getElementById('copy-2').
addEventListener('click' , function(){
   let text =  document.getElementById('police').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
         
      
})


document.getElementById('copy-3').
addEventListener('click' , function(){
   let text =  document.getElementById('fire').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
})


document.getElementById('copy-4').
addEventListener('click' , function(){
   let text =  document.getElementById('ambulance').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
        currentValue++
        let copy = document.getElementById('copy');

        copy.innerText = currentValue
})


document.getElementById('copy-5').
addEventListener('click' , function(){
   let text =  document.getElementById('woman').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
})

document.getElementById('copy-6').
addEventListener('click' , function(){
   let text =  document.getElementById('anti-corruption').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
})


document.getElementById('copy-7').
addEventListener('click' , function(){
   let text =  document.getElementById('electricity-outage').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
})


document.getElementById('copy-8').
addEventListener('click' , function(){
   let text =  document.getElementById('bangladesh-railway').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
})


document.getElementById('copy-9').
addEventListener('click' , function(){
   let text =  document.getElementById('national-emergency').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
      currentValue++
      let copy = document.getElementById('copy');

      copy.innerText = currentValue
})

// history feature

document.getElementById('call-1').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})

document.getElementById('call-2').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})

document.getElementById('call-3').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})


document.getElementById('call-4').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})



document.getElementById('call-5').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})


document.getElementById('call-6').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})


document.getElementById('call-7').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})


document.getElementById('call-8').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})


document.getElementById('call-9').
addEventListener('click', function(){
    const historyContainer = document.getElementById('history-parent');
    historyContainer.innerHTML = "";

    for(const data of callHistory){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="flex justify-between mx-5  mt-3 bg-gray-300 p-3 rounded-xl" id="history-container">
                    <div>
                    <h1>${data.name}</h1>
                    <p>${data.num}</p>
                </div>
                <div>${data.date}</div>
                </div>

        `
        historyContainer.appendChild(div)
    }
})

document.getElementById("clear").
addEventListener('click', function(){
    document.getElementById('history-parent').remove()
})


