//Преобразовать число в перевернутый массив цифр
function digitize(n) {
    n = String(n).split('').reverse().map(Number)
    return n
  }
  
//   Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост 2 ).
//   если ИМТ <= 18,5, вернуть "Недостаточный вес"
//   если ИМТ <= 25,0, вернуть «Нормальный»
//   если ИМТ <= 30,0 вернуть "Избыточный вес"
//   если ИМТ > 30, верните «Ожирение».
  
  function bmi(weight, height) {
    const bmi = (weight / Math.pow(height, 2))
    if (bmi <= 18.5){
      return "Underweight"
    }else if(bmi <= 25.0){
      return "Normal"
    }else if(bmi <= 30.0){
      return "Overweight"
    }else{
      return "Obese"
    }
    return bmi
  }