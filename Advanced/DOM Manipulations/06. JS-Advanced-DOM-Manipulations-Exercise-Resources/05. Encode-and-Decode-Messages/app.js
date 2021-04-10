function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let encodeMessage = document.querySelectorAll('textarea')[0];
    let decodeBtn = document.querySelectorAll('button')[1];
    let decodeMessage = document.querySelectorAll('textarea')[1];


    encodeBtn.addEventListener('click', () => {
        let text = encodeMessage.value;
        let encode = '';
        for (let i = 0; i < text.length; i++) {
            let ascii = text.charCodeAt(i);
            encode += String.fromCharCode(ascii + 1);
        }
        encodeMessage.value = '';
        decodeMessage.value = encode;

    })

    decodeBtn.addEventListener('click', () => {
        let text = decodeMessage.value;
        let decode = '';
        for (let i = 0; i < text.length; i++) {
            let ascii = text.charCodeAt(i);
            decode += String.fromCharCode(ascii - 1);
        }
        decodeMessage.value = decode;

    })


}