document.addEventListener('DOMContentLoaded', function() {
    const encodeBtn = document.getElementById('encode-btn');
    const decodeBtn = document.getElementById('decode-btn');
    const resetBtn = document.getElementById('reset-btn');
    const textInput = document.getElementById('text-input');
    const textOutput = document.getElementById('text-output');
    const shiftValue = document.getElementById('shift-value');

    // Функция шифрования/дешифрования
    function caesarCipher(text, shift, action) {
        return text.replace(/[a-zA-Z]/g, function(char) {
            const code = char.charCodeAt(0);
            const isUpper = code >= 65 && code <= 90;
            const offset = isUpper ? 65 : 97;
            
            let result;
            if (action === 'encode') {
                result = (code - offset + shift) % 26;
            } else {
                result = (code - offset - shift + 26) % 26;
            }
            
            return String.fromCharCode(result + offset);
        });
    }

    // Обработчики событий
    encodeBtn.addEventListener('click', function() {
        const text = textInput.value;
        const shift = parseInt(shiftValue.value);
        textOutput.value = caesarCipher(text, shift, 'encode');
    });

    decodeBtn.addEventListener('click', function() {
        const text = textInput.value;
        const shift = parseInt(shiftValue.value);
        textOutput.value = caesarCipher(text, shift, 'decode');
    });

    resetBtn.addEventListener('click', function() {
        textInput.value = '';
        textOutput.value = '';
        shiftValue.value = '3';
    });
});