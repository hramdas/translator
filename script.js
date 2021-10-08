let timerId;

async function getLanguages() {
    let res = await fetch('https://libretranslate.de/languages')
    let data = await res.json()
    landata(data)
}
getLanguages()

async function landata(d) {
    let lan1 = document.getElementById('lan1')
    let lan2 = document.getElementById('lan2')

    d.forEach((item) => {
  
        let option = document.createElement('option')
        option.value = item.code
        option.innerHTML = item.name
        lan1.append(option)
    })

    d.forEach((item) => {
        // console.log(item.code, item.name)
        let option = document.createElement('option')
        option.value = item.code
        option.innerHTML = item.name

        lan2.append(option)
    })
}

function debounce(fun, delay){
    
    if(timerId){
        clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
        fun();
    }, delay);
}

async function translate(lan1, lan2, input){
    let res = await fetch("https://libretranslate.de/translate", {

        method: "POST",
        body : JSON.stringify({
            q : input,
            source : lan1,
            target: lan2,
        }),
        headers: {'Content-Type': "application/json"},
    });

    let data = await res.json();
    return data.translatedText
}

async function main(){
    let lan1 = document.getElementById(`lan1`).value;
    let lan2 = document.getElementById(`lan2`).value;
    let txt = document.getElementById('txtInput').value;
    let data = await translate(lan1, lan2, txt)

    // textToAudioInputs(data, lan2)
    output(data);
}

function output(d){
    
    let box = document.getElementById('txtOut')
    if (d==undefined){
        box.innerHTML = null;
    } else {
        box.innerHTML = d
    }
  
}

