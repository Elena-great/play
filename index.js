const input = document.querySelector('.guess'); //доступ к полю, где будут вводить число
const button = document.querySelector('.btn'); // доступ к кнопке
const answer = Math.floor(Math.random()*20) + 1; // генерируем случайное число, прибавляем 1, чтобы округление было в большую сторону

//событие на enter, 13 - код клавиши
input.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
  play()
}
})

button.addEventListener('click', play);
function play() {
  //доступ к значению, которое вводит пользователь
  const userNumber = document.querySelector('.guess').value;
  //условие, что вводимый номер должен быть не меньше одно и не больше 20 - будет выводиться ошибка
  if (userNumber < 1 || userNumber > 20) {
  Swal.fire({
  icon: 'error',
  title: 'Ой!',
  text: 'Введите число от 1 до 20!',
})
}
  //условие, если пользователь вводит не число, для этого используем свойство isNan (Not-A-Number)
  else if(isNaN(userNumber)) {
  Swal.fire({
  icon: 'error',
  title: 'Ой!',
  text: 'Нужно ввести число!',
})
}

  //условие, где мы сравниваем, что ввел пользователь с ответом компьютера(генерацией числа)
  else {
    if(userNumber < answer ) {
    Swal.fire('Попробуй число повыше!', 'Компьютер пока побеждает!')
    }

    else if(userNumber > answer) {
    Swal.fire('Попробуй число пониже!', 'Компьютер пока побеждает!')  
    }

    else {
    Swal.fire({
    title: 'Победа!',
    imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80',
    imageWidth: 600,
    imageHeight: 400,
    imageAlt: 'Победа!',
    })
    }
  }
}