let shift,
  ctrl,
  alt,
  capsLock,
  times = {};
let ru = localStorage['ru'];
const KEYS = [
  [
    { form: 'k', en: '`', ru: 'ё', sh: '~', code: 'Backquote' },
    { form: 'k', en: '1', sh: '!', code: 'Digit1' },
    { form: 'k', en: '2', sh: '@', rush: '"', code: 'Digit2' },
    { form: 'k', en: '3', sh: '#', rush: '№', code: 'Digit3' },
    { form: 'k', en: '4', sh: '$', rush: ';', code: 'Digit4' },
    { form: 'k', en: '5', sh: '%', code: 'Digit5' },
    { form: 'k', en: '6', sh: '^', rush: ':', code: 'Digit6' },
    { form: 'k', en: '7', sh: '&', rush: '?', code: 'Digit7' },
    { form: 'k', en: '8', sh: '*', code: 'Digit8' },
    { form: 'k', en: '9', sh: '(', code: 'Digit9' },
    { form: 'k', en: '0', sh: ')', code: 'Digit0' },
    { form: 'k', en: '-', sh: '_', code: 'Minus' },
    { form: 'k', en: '=', sh: '+', code: 'Equal' },
    { form: 's', en: 'Backspace', code: 'Backspace' }
  ],
  [
    { form: 's', en: 'Tab', code: 'Tab' },
    { form: 'k', en: 'q', ru: 'й', code: 'KeyQ' },
    { form: 'k', en: 'w', ru: 'ц', code: 'KeyW' },
    { form: 'k', en: 'e', ru: 'у', code: 'KeyE' },
    { form: 'k', en: 'r', ru: 'к', code: 'KeyR' },
    { form: 'k', en: 't', ru: 'е', code: 'KeyT' },
    { form: 'k', en: 'y', ru: 'н', code: 'KeyY' },
    { form: 'k', en: 'u', ru: 'г', code: 'KeyU' },
    { form: 'k', en: 'i', ru: 'ш', code: 'KeyI' },
    { form: 'k', en: 'o', ru: 'щ', code: 'KeyO' },
    { form: 'k', en: 'p', ru: 'з', code: 'KeyP' },
    { form: 'k', en: '[', ru: 'х', sh: '{', code: 'BracketLeft' },
    { form: 'k', en: ']', ru: 'ъ', sh: '}', code: 'BracketRight' },
    { form: 'k', en: '\\', rush: '/', sh: '|', code: 'Backslash' },
    { form: 's', en: 'Del', code: 'NumpadDecimal' }
  ],
  [
    { form: 's', en: 'Caps Lock', code: 'CapsLock' },
    { form: 'k', en: 'a', ru: 'ф', code: 'KeyA' },
    { form: 'k', en: 's', ru: 'ы', code: 'KeyS' },
    { form: 'k', en: 'd', ru: 'в', code: 'KeyD' },
    { form: 'k', en: 'f', ru: 'а', code: 'KeyF' },
    { form: 'k', en: 'g', ru: 'п', code: 'KeyG' },
    { form: 'k', en: 'h', ru: 'р', code: 'KeyH' },
    { form: 'k', en: 'j', ru: 'о', code: 'KeyJ' },
    { form: 'k', en: 'k', ru: 'л', code: 'KeyK' },
    { form: 'k', en: 'l', ru: 'д', code: 'KeyL' },
    { form: 'k', en: ';', ru: 'ж', sh: ':', code: 'Semicolon' },
    { form: 'k', en: "'", ru: 'э', sh: '"', code: 'Quote' },
    { form: 's', en: 'Enter', code: 'Enter' }
  ],
  [
    { form: 's', en: 'Shift', code: 'ShiftLeft' },
    { form: 'k', en: 'z', ru: 'я', code: 'KeyZ' },
    { form: 'k', en: 'x', ru: 'ч', code: 'KeyX' },
    { form: 'k', en: 'c', ru: 'с', code: 'KeyC' },
    { form: 'k', en: 'v', ru: 'м', code: 'KeyV' },
    { form: 'k', en: 'b', ru: 'и', code: 'KeyB' },
    { form: 'k', en: 'n', ru: 'т', code: 'KeyN' },
    { form: 'k', en: 'm', ru: 'ь', code: 'KeyM' },
    { form: 'k', en: ',', ru: 'б', sh: '<', code: 'Comma' },
    { form: 'k', en: '.', ru: 'ю', sh: '>', code: 'Period' },
    { form: 'k', en: '/', ru_: '.', rush: ',', sh: '?', code: 'Slash' },
    { form: 'sm', en: '▲', code: 'Numpad8' },
    { form: 'sm', en: 'Shift', code: 'ShiftRight' }
  ],
  [
    { form: 's', en: 'Ctrl', code: 'ControlLeft' },
    { form: 's', en: 'Win', code: 'OSLeft' },
    { form: 's', en: 'Alt', code: 'AltLeft' },
    { form: 'p', code: 'Space' },
    { form: 's', en: 'Alt', code: 'AltRight' },
    { form: 's', en: 'Ctrl', code: 'ControlRight' },
    { form: 'sm', en: '◄', code: 'Numpad4' },
    { form: 'sm', en: '▼', code: 'Numpad2' },
    { form: 'sm', en: '►', code: 'Numpad6' }
  ]
];
let textarea = document.createElement('textarea');
createKeyboard();

function createKeyboard() {
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
  let field = document.createElement('div');
  field.append(textarea);
  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  KEYS.forEach(row => {
    let oneRow = document.createElement('div');
    let arrayKeys = row.map(key => {
      let oneKey = document.createElement('div');
      let innerKey = document.createElement('div');
      if (key.form === 'k') {
        oneKey.classList.add('key');
        innerKey.textContent = changeOneKey(key);
      } else if (key.form === 'p') {
        oneKey.classList.add('space');
      } else if (key.form === 'sm') {
        oneKey.classList.add('small');
        innerKey.textContent = key.en;
      } else {
        oneKey.classList.add('system');
        innerKey.textContent = key.en;
      }
      innerKey.id = key.code;
      innerKey.classList.add(key.code);
      innerKey.addEventListener('mousedown', clickKey);
      innerKey.addEventListener('mouseup', clickKey);
      oneKey.append(innerKey);
      return oneKey;
    });
    oneRow.append(...arrayKeys);
    keyboard.append(oneRow);
  });
  let footer = document.createElement('div');
  footer.classList.add('footer');
  footer.textContent = 'Windows 10, Change language - Ctrl + Shift';
  document.body.prepend(field, keyboard, footer);
  textarea.focus();
}

function keyDown(event) {
  textarea.focus();
  let element = document.querySelector('#' + event.code);
  if (element) {
    element.classList.add('active');
    elementKey(element);
  }
  if (event.ctrlKey && event.shiftKey) {
    ru = !ru;
    view();
  }
  event.preventDefault();
}

function keyUp(event) {
  document.querySelector('#' + event.code).classList.remove('active');
  if (event.key === 'Shift') {
    shift = false;
    view();
  } else if (event.key === 'Alt') {
    alt = false;
  } else if (event.key === 'Control') {
    ctrl = false;
  }
  textarea.focus();
}

function changeOneKey(key) {
  let letter;
  if (shift) {
    if (ru && 'rush' in key) {
      letter = key.rush;
    } else if (ru && 'ru' in key) {
      letter = key.ru.toUpperCase();
    } else if (ru && 'ru_' in key) {
      letter = key.ru_;
    } else if (shift && 'sh' in key) {
      letter = key.sh;
    } else {
      letter = key.en.toUpperCase();
    }
  } else if (capsLock) {
    letter = ru && 'ru' in key ? key.ru.toUpperCase() : key.en.toUpperCase();
  } else {
    letter = ru && 'ru' in key ? key.ru : key.en;
  }
  return letter;
}

function view() {
  KEYS.forEach(row => {
    row.forEach(key => {
      if (key.form === 'k') {
        let button = document.querySelector('#' + key.code);
        button.textContent = changeOneKey(key);
      }
    });
  });
}

function insert(str, pos, add) {
  let arr = str.split('');
  arr.splice(pos, 0, add);
  return arr.join('');
}

function del(str, pos, after) {
  let arr = str.split('');
  if (after) {
    arr.splice(pos, 1);
  } else {
    pos && arr.splice(pos - 1, 1);
  }
  return arr.join('');
}

function clearTimes(nameKey) {
  delete times[nameKey];
}

function systemKey(keyCode) {
  return (
    keyCode === 'ShiftLeft' ||
    keyCode === 'ShiftRight' ||
    keyCode === 'AltLeft' ||
    keyCode === 'AltRight' ||
    keyCode === 'ControlLeft' ||
    keyCode === 'ControlRight'
  );
}

function deActiveSystem(code) {
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    shift = false;
    view();
  } else if (code === 'AltLeft' || code === 'AltRight') {
    alt = false;
  } else if (code === 'ControlLeft' || code === 'ControlRight') {
    ctrl = false;
  }
}

function clickKey(event) {
  let now = new Date().getTime();
  let element = event.currentTarget;
  let keyCode = element.id;
  if (event.type === 'mouseup') {
    let interval = now - times[keyCode];
    if (systemKey(keyCode) && interval < 1000) {
      setTimeout(() => {
        element.classList.remove('active');
        clearTimes(keyCode);
        deActiveSystem(keyCode);
      }, 1000);
    } else if (!systemKey(keyCode) && interval < 100) {
      setTimeout(() => {
        element.classList.remove('active');
        clearTimes(keyCode);
      }, 100);
    } else {
      element.classList.remove('active');
      clearTimes(keyCode);
      deActiveSystem(keyCode);
    }
    textarea.focus();
    return;
  }
  if (times[keyCode] && now - times[keyCode] < 100) {
    return;
  }
  element.classList.add('active');
  elementKey(element);
  if (ctrl && shift) {
    lang();
  }
}

function lang() {
  ru = !ru;
  if (ru) {
    localStorage['ru'] = true;
  } else {
    localStorage.clear();
  }
  view();
}

function elementKey(el) {
  let found = el.id;
  let parent = el.parentElement;
  let pos = textarea.selectionStart;
  if (parent.classList.contains('key')) {
    textarea.value = insert(textarea.value, pos, el.textContent);
    pos++;
  } else if (el.id === 'Space') {
    textarea.value = insert(textarea.value, pos, ' ');
    pos++;
  } else if (el.id === 'Tab') {
    textarea.value = insert(textarea.value, pos, '\t');
    pos++;
  } else if (el.id === 'Enter') {
    textarea.value = insert(textarea.value, pos, '\n');
    pos++;
  } else if (el.id === 'Backspace') {
    textarea.value = del(textarea.value, pos);
    pos && pos--;
  } else if (el.id === 'NumpadDecimal') {
    textarea.value = del(textarea.value, pos, true);
  } else if (el.id === 'Numpad4') {
    pos && pos--;
  } else if (el.id === 'Numpad6') {
    pos++;
  } else if (el.id === 'Numpad2') {
    pos = upDown(textarea.value, pos);
  } else if (el.id === 'Numpad8') {
    pos = upDown(textarea.value, pos, true);
  } else if (el.id === 'CapsLock') {
    capsLock = !capsLock;
    view();
    markCaps();
  } else if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
    shift = true;
    view();
  } else if (el.id === 'AltLeft' || el.id === 'AltRight') {
    alt = true;
  } else if (el.id === 'ControlLeft' || el.id === 'ControlRight') {
    ctrl = true;
  } else if (el.id === 'OSLeft') {
  }
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = pos;
  times[found] = new Date().getTime();
  return found;
}

function markCaps() {
  let caps = document.querySelector('#CapsLock');
  if (capsLock) {
    caps.classList.add('mark');
  } else {
    caps.classList.remove('mark');
  }
}

function upDown(str, position, up) {
  let newPos = 0,
    arr = str.split('\n');
  let line = 0,
    posStart = 0,
    posEnd = 0,
    posLine = 0,
    preStart = 0;
  arr.reduce((sum, item, i) => {
    if (!line) {
      preStart = posStart;
      posStart = sum;
      posEnd = item.length + sum + 1;
      if (position < posEnd) {
        line = i + 1;
      }
    }
    return posEnd;
  }, 0);
  posLine = position - posStart;
  if (arr.length === 1 || (!up && line === arr.length) || (up && line === 1)) {
    return position;
  }
  if (up) {
    newPos = preStart + Math.min(posLine, arr[line - 2].length);
  } else {
    newPos = posEnd + Math.min(posLine, arr[line].length);
  }
  return newPos;
}
