
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
    document.getElementById('coin').innerText = coinDecducted
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
    document.getElementById('coin').innerText = coinDecducted
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
    document.getElementById('coin').innerText = coinDecducted
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
    document.getElementById('coin').innerText = coinDecducted
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
    document.getElementById('coin').innerText = coinDecducted
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
    document.getElementById('coin').innerText = coinDecducted
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
    document.getElementById('coin').innerText = coinDecducted
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
    document.getElementById('coin').innerText = coinDecducted
    })



// Copy feature


document.getElementById('copy-1').
addEventListener('click' , function(){
   let text =  document.getElementById('nl').innerText;
   navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
      });
   
})