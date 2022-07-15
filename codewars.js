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

// Завершите метод, который принимает логическое значение и возвращает "Yes"строку для true, или "No"строку для false.

function boolToWord( bool ){
    return bool == true ? 'Yes':'No'
  }

//   Каждый день аренды автомобиля стоит 40 долларов. Если вы арендуете автомобиль на 7 или более дней, вы получаете 
//   скидку в размере 50 долларов США. В качестве альтернативы, если вы арендуете автомобиль
//    на 3 или более дней,вы получаете скидку в размере 20 долларов США.
//   Напишите код, который выдает общую сумму за разные дни (d).
function rentalCarCost(d) {
    return d * 40 -(d >= 7 ? 50 :(d >=3 ? 20 : 0))
 }

//  Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать числовой результат после применения выбранной операции.
// Примеры(Оператор, значение1, значение2) --> вывод
function basicOp(operation, value1, value2)
{
 if (operation =="+") {
    return value1+value2
  } else if (operation =="-"){
    return value1-value2
  } else if (operation =="*"){
    return value1*value2
}else if (operation =="/"){
    return value1/value2
   }
}

// Суммируйте все числа заданного массива (cq. list), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!).
// Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, даже если их несколько с одинаковым значением.
// Помните о проверке ввода.
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }

//   Создайте функцию с двумя аргументами, которая будет возвращать массив первых (n) кратных (x).
// Предположим, что и заданное число, и количество подсчетов будут положительными числами больше 0.
  function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

// В этом простом задании вам дается число, и вы должны сделать 
// его отрицательным. А может быть, число уже отрицательное?
function makeNegative(num) {
    return -Math.abs(num)
    }

    // Очень просто, по заданному целому числу или числу 
    // с плавающей запятой найти его противоположность. 1=-1;-2=2
    function opposite(number) {
        return (-number || number)
     }

    //  Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.
    //  Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.
     function litres(time) {
        return Math.floor(time*0.5)
      }
//cделайте функцию которая будет превращать числа в бинарные
      function addBinary(a,b){
        return (a+b).toString(2)
      }

    //   В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». 
    //   Ваша функция получает одну сторону ДНК (строка, кроме Haskell);
    //    вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не 
    //    бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).     

    function DNAStrand(dna){
        var table = {
          C : 'G',
          G : 'C',
          A : 'T',
          T : 'A'
        };
          
        return dna.split('').map(function(cv) {
          return table[cv]; 
        }).join('');
      }
      
    //   Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для
    //    заданного массива минимум из 4 положительных целых чисел. Не будут переданы 
    //   числа с плавающей запятой или неположительные целые числа.
    //   Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.
    function sumTwoSmallestNumbers(numbers){  
        numbers = numbers.sort(function(a, b){return a - b; });
        return numbers[0] + numbers[1];
      };

    //   Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний 
    //   символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о 
    //   строках, содержащих менее двух символов.
    function removeChar(str) {
        return str.slice(1, -1);
      }

    //   Просто удалите пробелы из строки, затем верните результирующую строку.
    function noSpace(x){
        return x.split(' ').join('')
        }
    //   Создайте функцию, которая принимает целое число в качестве аргумента и возвращает «Четное»
    //    для четных чисел или «Нечетное» для нечетных чисел.
    function even_or_odd(number) {
        return number%2 === 0 ? 'Even' : 'Odd'
      }

//       Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — 
//       сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
// Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
      function countPositivesSumNegatives(input) {
        if (!Array.isArray(input) || !input.length) return [];
        return input.reduce((arr, n) => {
          if (n > 0) arr[0]++;
          if (n < 0) arr[1] += n;
          return arr;
        }, [0, 0]);
      }
// 2 variant
      if (input == null || input.length == 0)
      return [];
    var positive = 0;
    var negative = 0;
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];

    // Напишите функцию, которая принимает целое число nи строку sв качестве параметров 
    // и возвращает строку, sповторяющуюся ровно столько nраз.
    
    function repeatStr (n, s) {
      return s.repeat(n);
    }

//     Вам дан массив целых чисел нечетной длины ,
//      в котором все они одинаковы, кроме одного единственного числа.
// Завершите метод, который принимает такой массив и возвращает это 
// единственное другое число.
    function stray(numbers) {
      return numbers.reduce((x, y) => x ^ y);
    }
// напишите функцию которая будет приветствоать человека на его языке
    function greet(language) {
      var GreetingsDB = {
          english: 'Welcome',
          czech: 'Vitejte',
          danish: 'Velkomst',
          dutch: 'Welkom',
          estonian: 'Tere tulemast',
          finnish: 'Tervetuloa',
          flemish: 'Welgekomen',
          french: 'Bienvenue',
          german: 'Willkommen',
          irish: 'Failte',
          italian: 'Benvenuto',
          latvian: 'Gaidits',
          lithuanian: 'Laukiamas',
          polish: 'Witamy',
          spanish: 'Bienvenido',
          swedish: 'Valkommen',
          welsh: 'Croeso'
        }, 
        defaultLanguage = 'english';
        return GreetingsDB[language] || GreetingsDB[defaultLanguage];
      }
      
      // Создайте функцию, которая принимает 2 целых числа в виде строки в 
      // качестве входных данных и выводит сумму (также в виде строки):
      function sumStr(a,b) {
        let c = (+a )+ (+b)
        return String(c)
      }
      // Например, если задано неотрицательное целое число, 3верните 
      // строку с бормотанием: "1 sheep...2 sheep...3 sheep...". Ввод всегда
      //  будет действительным, т.е. отрицательных целых чисел не будет.

      function countSheep(num){
        let str = "";
          for(let i = 1; i <= num; i++) {
            str+= `${i} sheep...`; 
          }
          return str;
        }
        
        // Таракан – одно из самых быстрых насекомых. Напишите функцию, которая получает скорость в км/ч и 
        // возвращает ее в см/с с округлением в меньшую сторону до целого
        
        const cockroachSpeed = s => Math.floor(s / 0.036);

        // Вам дан массив с положительными числами и неотрицательным числом N. Нужно найти N-ю степень элемента в массиве с индексом N. Если N вне массива, то 
        // вернуть -1. Не забывайте, что первый элемент имеет индекс 0.
        // array = [1, 2, 3, 4] и N = 2, тогда результат будет 3^2 == 9;
        const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;
       //или
        function index(array, n){
          return array[n] ** n || -1;
        }
        // Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число, 
        // соответствующее количеству вхождений второго аргумента в первом.
        // Если вхождений не найдено, должно быть возвращено число 0.
        function strCount(str, letter){  
          return str.split(letter).length-1
        }
        // Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте 
        // первый элемент и начинайте удаление со следующего элемента.
        function removeEveryOther(arr){
          var newArr=[];
        for (var i = 0; i < arr.length; i+=2){
          newArr.push(arr[i]);
          }
        return newArr;
        }

        function removeEveryOther(arr){
          return arr.filter(function(elem, index) {
            return index % 2 === 0;
          });
        }
        // Создайте метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ.
        String.prototype.isUpperCase = function() {
          return this.toUpperCase() === this.toString();
        }

//         Напишите функцию, которая принимает список строк в качестве 
//         аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными «гусями».
// Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:
        function gooseFilter (birds) {
          var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
          return gooseFilter.pop(geese);
          // return an array containing all of the strings in the input array except those that match strings in geese
        };
        // 2v
        function gooseFilter (birds) {
          var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
          return birds.filter(b => !geese.includes(b));
        };


        // Первое столетие охватывает период с 1 года по 100 год включительно , второе столетие — с
        //  101 года по 200 год включительно и т. д.
        const century = year => Math.ceil(year/100)