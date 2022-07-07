function digitize(n) {
    n = String(n).split('').reverse().map(Number)
    return n
  }
  //Преобразовать число в перевернутый массив цифр