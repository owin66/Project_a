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
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
    return bmi
}

// Вам будет предоставлен массив aи значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.
// Массив может содержать числа или строки. Х может быть любым.
// Возврат true, если массив содержит значение, falseесли нет.
const check = (a, x) => a.includes(x)

// есть рыцарь и он должен убить дракона, на каждого дракона уходит по две пули, драконов много, сделайте функцию блгаодаря которой рыцарь убьет всех драконов
const hero = (bullets, dragons) => {
    return ((bullets / 2) >= dragons)
}