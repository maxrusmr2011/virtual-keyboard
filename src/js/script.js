// const input = document.querySelector('textarea');
// console.log(input);

let shift, ctrl, alt, capsLock, ru;

let keys = [
  [
    { k: '`', sh: '~', code: 'Backquote' },
    { k: '1', sh: '!', code: 'Digit1' },
    { k: '2', sh: '@', code: 'Digit2' },
    { k: '3', sh: '#', code: 'Digit3' },
    { k: '4', sh: '$', code: 'Digit4' },
    { k: '5', sh: '%', code: 'Digit5' },
    { k: '6', sh: '^', code: 'Digit6' },
    { k: '7', sh: '&', code: 'Digit7' },
    { k: '8', sh: '*', code: 'Digit8' },
    { k: '9', sh: '(', code: 'Digit9' },
    { k: '0', sh: ')', code: 'Digit0' },
    { k: '-', sh: '_', code: 'Minus' },
    { k: '=', sh: '+', code: 'Equal' },
    { s: 'Backspace', code: 'Backspace' }
  ],
  [
    { s: 'Tab', code: 'Tab' },
    { k: 'q', code: 'KeyQ' },
    { k: 'w', code: 'KeyW' },
    { k: 'e', code: 'KeyE' },
    { k: 'r', code: 'KeyR' },
    { k: 't', code: 'KeyT' },
    { k: 'y', code: 'KeyY' },
    { k: 'u', code: 'KeyU' },
    { k: 'i', code: 'KeyI' },
    { k: 'o', code: 'KeyO' },
    { k: 'p', code: 'KeyP' },
    { k: '[', sh: '{', code: 'BracketLeft' },
    { k: ']', sh: '}', code: 'BracketRight' },
    { k: '\\', sh: '|', code: 'Backslash' },
    { s: 'Del', code: 'NumpadDecimal' }
  ],
  [
    { s: 'Caps Lock', code: 'CapsLock' },
    { k: 'a', code: 'KeyA' },
    { k: 's', code: 'KeyS' },
    { k: 'd', code: 'KeyD' },
    { k: 'f', code: 'KeyF' },
    { k: 'g', code: 'KeyG' },
    { k: 'h', code: 'KeyH' },
    { k: 'j', code: 'KeyJ' },
    { k: 'k', code: 'KeyK' },
    { k: 'l', code: 'KeyL' },
    { k: ';', sh: ':', code: 'Semicolon' },
    { k: "'", sh: '"', code: 'Quote' },
    { s: ' Enter ', code: 'Enter' }
  ],
  [
    { s: 'Shift', code: 'ShiftLeft' },
    { k: 'z', code: 'KeyZ' },
    { k: 'x', code: 'KeyX' },
    { k: 'c', code: 'KeyC' },
    { k: 'v', code: 'KeyV' },
    { k: 'b', code: 'KeyB' },
    { k: 'n', code: 'KeyN' },
    { k: 'm', code: 'KeyM' },
    { k: ',', sh: '<', code: 'Comma' },
    { k: '.', sh: '>', code: 'Period' },
    { k: '/', sh: '?', code: 'Slash' },
    { sm: '^', code: 'Numpad8' },
    { sm: 'Shift', code: 'ShiftRight' }
  ],
  [
    { s: 'Ctrl', code: 'ControlLeft' },
    { s: 'Win', code: 'OSLeft' },
    { s: 'Alt', code: 'AltLeft' },
    { p: ' ', code: 'Space' },
    { s: 'Alt', code: 'AltRight' },
    { s: 'Ctrl', code: 'ControlRight' },
    { sm: '<', code: 'Numpad4' },
    { sm: '|', code: 'Numpad2' },
    { sm: '>', code: 'Numpad6' }
  ]
];
let field = document.createElement('div');
let textarea = document.createElement('textarea');
textarea.addEventListener('keydown', keyDown);
textarea.addEventListener('keyup', keyUp);

field.append(textarea);
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keys.forEach(row => {
  let oneRow = document.createElement('div');
  let arrayKeys = row.map(key => {
    let oneKey1 = document.createElement('div');
    let oneKey = document.createElement('div');
    if ('k' in key) {
      oneKey1.classList.add('key');
      oneKey.innerHTML = key.k;
    } else if ('p' in key) {
      oneKey1.classList.add('space');
    } else if ('sm' in key) {
      oneKey1.classList.add('small');
      oneKey.innerHTML = key.sm;
    } else {
      oneKey1.classList.add('system');
      oneKey.innerHTML = key.s;
    }
    oneKey.classList.add(key.code);
    oneKey.addEventListener('click', clickKey);
    oneKey1.append(oneKey);
    return oneKey1;
  });
  oneRow.append(...arrayKeys);
  keyboard.append(oneRow);
});
let keysDOM;
let rows = [];
document.createElement('div');
keyboard.append();
document.body.prepend(field, keyboard);
document.querySelector('textarea').focus();






function keyDown(event) {
  console.log(event.code);
  let keyClick = document.querySelector('.' + event.code);
  if (keyClick) {
    keyClick.classList.add('active');
    if (event.key === 'Shift') {
      shift = true;
      big();
    } else if (event.key === 'Tab') {
      event.preventDefault();
      event.currentTarget.value += '\t';
    } else if (event.code === 'CapsLock') {
      big(capsLock);
      capsLock = !capsLock;
    }
  }
}

function keyUp(event) {
  console.log(event.code);
  document.querySelector('.' + event.code).classList.remove('active');
  if (event.key === 'Shift') {
    shift = false;
    big(true);
  }
}

function big(back) {
  let button;
  keys.forEach(row => {
    row.forEach(key => {
      if ('k' in key) {
        // console.log(key);
        button = document.querySelector('.'+key.code);
        if (back) {
          button.innerHTML = key.k;
        } else {
          button.innerHTML = (shift && 'sh' in key) ? key.sh : key.k.toUpperCase();
        }
      }
    });
  });
}

function clickKey (event) {
  let parent = event.currentTarget.parentElement;
  if (parent.classList.contains('key')) {
    textarea.value += event.currentTarget.innerHTML;
  } else if (parent.classList.contains('space')) {
    textarea.value += ' ';
  }
}