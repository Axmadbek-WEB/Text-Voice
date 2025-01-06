// const select =document.getElementById("select")
// const input =document.getElementById("input")
// const btn =document.getElementById("btn")
// let vaices=[]

// // function gapir(){
// //     const speech= new SpeechSynthesisUtterance()
// //     speech.text=input.value;
// //     speechSynthesis.speak(speech)
// // }

// btn.addEventListener("click",()=>{
//     gapir()
// })

// function loadVoices(){
//     voices = window.speechSynthesis.getVoices();

//     if (voices.length > 0) {
//         select.innerHTML ="";
//         voices.forEach((voices, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent=`${voice.name} (${voice.lang})`;
//             select.appendChild(option)
//         });
//     } else {
//         select.innerHTML =`<option disabled>No voices available</option>`;
//     }
// }

// function ensureVoicesLoaded(){
//     if(voice.length === 0) {
//         loadVoices();
//          if (voices.length === 0) {
//             setTimeout(ensureVoicesLoaded, 500)
//         }
//     }
// }

// window.speechSynthesis.onvoiceschanged = loadVoices;
// ensureVoicesLoaded();

// function gapir() {
//     const msg =new SpeechSynthesisUtterance();
//     msg.text = input.value;

//     const selectVoiceIndex= select.value;

//     if (selectVoiceIndex) {
//         msg.voice = voices[selectVoiceIndex];
//     } else {
//         alert("Iltimos, ovoz tanlang!");
//         return;
//     }

//     speechSynthesis.speak(msg)
// }




document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btn');
    const textInput = document.getElementById('input');
    const voiceSelect = document.getElementById('select');
    let voices = [];

    btn.addEventListener("click", () => {
        gapir();
    });

    function loadVoices() {
        voices = window.speechSynthesis.getVoices();

        if (voices.length === 0) {
            voiceSelect.innerHTML = '<option disabled>No voices available</option>';
            return;
        }

        voiceSelect.innerHTML = "";
        voices.forEach((voice, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    function ensureVoicesLoaded() {
        if (voices.length === 0) {
            loadVoices();
        }
        if (voices.length === 0) {
            setTimeout(ensureVoicesLoaded, 500);
        }
    }

    window.speechSynthesis.onvoiceschanged = loadVoices;
    ensureVoicesLoaded();

    function gapir() {
        if (!textInput.value.trim()) {
            alert("Iltimos, matn kiriting!");
            return;
        }

        const msg = new SpeechSynthesisUtterance();
        msg.text = textInput.value;

        const selectedVoiceIndex = parseInt(voiceSelect.value, 10);

        if (!isNaN(selectedVoiceIndex)) {
            msg.voice = voices[selectedVoiceIndex];
        } else {
            alert("Iltimos, ovoz tanlang!");
            return;
        }

        speechSynthesis.speak(msg);
    }
});