// star
for (var i = 0; i < 3; i++) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "stars"); svg.setAttribute("width", "100%"); svg.setAttribute("height", "100%"); svg.setAttribute("preserveAspectRatio", "none"); for (let j = 0; j < 120; j++) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); circle.setAttribute("class", "star"); circle.setAttribute("cx", r(0, 100) + "%"); circle.setAttribute("cy", r(0, 100) + "%"); circle.setAttribute("r", r(0, 2)); svg.appendChild(circle);
  } document.getElementsByClassName("stars-wrapper")[0].appendChild(svg);
} function r(m, n) {
  return (Math.random() * (n - m) + m).toFixed(2);
}
const number = document.getElementById('number')
const btns = document.querySelectorAll('td:not(#number)')

for (const btn of btns) {
  btn.onclick = () => {
    let btnText = btn.innerText
    if (btn.innerText === '÷') {
      btnText = '/'
    }
    if (btn.innerText === '×') {
      btnText = '*'
    }
    if (btnText === '=') {
      number.innerText = eval(number.innerText)
    } else if (btnText === 'C') {
      number.innerText = '0'
    } else if (btnText === '←') {
      number.innerText = number.innerText.substring(0, number.innerText.length - 1)
      if (number.innerText === '') {
        number.innerText = '0'
      }
    }
    else {
      if (number.innerText === '-' && isNaN(parseInt(btnText))) return
      if (number.innerText !== '0') {
        number.innerText += btnText
      } else if (!['+', '×', '÷'].includes(btnText)) {
        number.innerText = btnText
      }
    }
  }
}

document.onkeydown = event => {
  const btnText = event.key
  const allow =
    ['+', '-', '*', '/', '.', 'c', 'Delete', '=', 'Enter', 'Backspace', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
  if (!allow.includes(btnText)) {
    return;
  }
  if (btnText === 'Enter' || btnText === '=') {
    number.innerText = eval(number.innerText)
  } else if (btnText === 'c') {
    number.innerText = '0'
  } else if (btnText === 'Backspace') {
    number.innerText = number.innerText.substring(0, number.innerText.length - 1)
    if (number.innerText === '') {
      number.innerText = '0'
    }
  }
  else {
    if (number.innerText === '-' && isNaN(parseInt(btnText))) return
    if (number.innerText !== '0') {
      number.innerText += btnText
    } else if (!['+', '×', '÷'].includes(btnText)) {
      number.innerText = btnText
    }
  }
}