const buttons = document.querySelectorAll('.button')

const chars = document.querySelectorAll('.char')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    unlessonButton()

    button.classList.add('selected')

    unlessonChar()

    chars[index].classList.add('selected')
  })
})


function unlessonChar() {
  const charSeleted = document.querySelector('.char.selected')
  charSeleted.classList.remove('selected')
}

function unlessonButton() {
  const buttonSeleted = document.querySelector('.button.selected')
  buttonSeleted.classList.remove('selected')
}

