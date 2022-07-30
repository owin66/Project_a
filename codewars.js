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
        function index1(array, n){
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

        //Оператор приветсвия
        function greet(name){
          return `Hello, ${name} how are you doing today?`;
        }

        // чтобы каждая строчная буква становилась прописной, а каждая прописная буква — строчной.
        function toAlternatingCase(str){
          return str.split('').map((a,b)=>a==a.toUpperCase()?a.toLowerCase():a.toUpperCase()).join('')
        } 

//         Под непоследовательным мы подразумеваем не ровно 1 больше, чем предыдущий элемент массива.
// Например, если у нас есть массив, [1,2,3,4,6,7,8]то 1тогда 2все последовательные, но 3нет , так что это первое непоследовательное число.46
// Если весь массив последовательный, верните null2 .
        function firstNonConsecutive (arr) {
          var length = arr.length; //get length
          var val = arr[0]; //base comparison value variable
          for(var i = 1; i < length; i++) { //comparison
            if(arr[i] != val + 1) {
              return arr[i];
            }
            val++;
          }
          return null; //default return
        }
    //проверка на целое число
    const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

    //cумма квадратов масива
    function squareSum(numbers){
      return numbers.reduce((sum,num) => sum + (num * num), 0);
    }
    // v2
    function squareSum(numbers){
      let a = numbers.map((a,b)=>(a*a))
      return a.reduce((a,b)=>a+b)
     }
    //  Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
    function stringToArray(string){
      return string.split(' ')
      }
      // Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков,
      //  это означает, что они влюблены.lovefunc(1,4), true
      function lovefunc(flower1, flower2){
        let one = flower1%2===0 ? true : false
        let two = flower2%2===0 ? true : false
        return one==two ? false:true
      }
      // Учитывая непустой массив целых чисел, вернуть результат умножения значений 
      // вместе по порядку. Пример:
      function grow(x){
        return x.reduce((a,b)=>a*b)
        }

//         читывая массив целых чисел, 
//         ваше решение должно найти наименьшее целое число.
// Например:
// Учитывая [34, 15, 88, 2], что ваше решение вернется2
function findSmallestInt(args){
  return Math.min(...args)
}

// Вы пишете код для управления светофорами в вашем городе. Вам нужна функция для обработки каждого изменения
//  с green, на yellow, на red, а затем greenснова на .
function updateLight(current) {
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным 
// целым числом больше 0.
var summation = function (num) {
  let num1 = 0
  for(let i = 0; i <= num; i++){
    num1 +=i
 }
  return num1
}

//наименьшее число в масиве, удалить
function removeSmallest(numbers) {
  let arr = Math.min(...numbers)
    return numbers.splice(arr)
  }
  // accum("cwAt") -> "C-Ww-Aaa-Tttt"
  // Параметр accum представляет собой строку, состоящую только из букв из a..zи A..Z.

  const accum = (s) => {
    return s
    .toUpperCase()
    .split('')
    .map((el,i)=>`${el}${el.repeat(i).toLowerCase()}`).join('-')
    }
    // v2
    function accum1(s) {
      return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    }
    // ваша задача — посчитать, сколько чистых 
    // страниц вам нужно. Если n < 0или m < 0вернуться 0.
    // Пример:
    n= 5, m=5: 25
    function paperwork(n, m) {
   return n > 0 && m > 0 ? n * m : 0
}
// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1».
//  Верните полученную строку.
function fakeBin(x){
  return x.toString().split('').map((a,b)=> a >=5 ? 1 : 0).join('')
  }

//   Пример:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
  String.prototype.toJadenCase = function () {
    return this.split(' ').map((a)=>a[0].toUpperCase()+a.slice(1)).join(' ')
  };
  // Возвращаемое значение должно быть строкой и иметь "***"между каждой из ее букв.
  // Вы не должны удалять или добавлять элементы из/в массив.
  function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }


  // Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. 
  // Все пробелы в строке должны быть сохранены.
  function reverseWords(str) {
    return str.split(' ').map((a)=>a.split('').reverse().join('')).join(' ')
  }

  //Реализуйте функцию unique_in_order, которая принимает в качестве аргумента
  //  последовательность и возвращает список элементов
  // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
//palindrom
function palindrosm(str){
  return str === split('').reverse().join('')
}

//Напишите программу, в которой Алекс может ввести (n), сколько раз обруч обойдётся, и она вернёт ему ободряющее сообщение :)
function hoopCount (n) {
  return n>=10 ?  "Great, now move on to tricks" : "Keep at it until you get it"
}
// eсли премия верна, зарплата должна быть умножена на 10. Если премия ложна, толстяк не заработал достаточно денег
//  и должен получать только заявленную зарплату.
function bonusTime(salary, bonus) {
  return bonus == true ? `\u00A3${salary * 10}` : `\u00A3${salary}`
 }
//  Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}
//Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.
function even_or_odd(number) {
  return number%2 === 0 ? 'Even' : 'Odd'
}
//Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
function sumMix(x){
  return x.map((a)=>+a).reduce((a,b)=>a+b)
  }
  
  //Ваша задача состоит в том, чтобы найти ближайшее квадратное число,ближайшего_квадрата(n), положительного целого числа n.
  function nearestSq(n){
    return Math.round(n**0.5)**2
}

//Напишите функцию, вычисляющую расстояние между Point aи Point b.
// Тесты округляют ответы до 6 знаков после запятой.
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

//Предоставленный код должен заменить все точки .в указанной строке strтире .-
var replaceDots = function(str) {
  return str.split('.').join('-')
}
//Дайте вам две строки: s1и s2. Если они противоположны, return true; в противном случае возврат false
function isOpposite(s1,s2){
  return s1.split('')
    .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    .join('') === s2 && s1 !== '';
  
}
//Получив букву, верните ее положение в алфавите.
function position(letter){
  return `Position of alphabet: ${letter.charCodeAt()-96}`
  }

  //Завершите функцию, которая преобразует шестнадцатеричное число (заданное в виде строки) в десятичное число.
  function hexToDec(hexString){
    return parseInt(hexString, 16)
  }

  //Создайте функцию, которая проверяет, nделится ли число на два числа x AND y 
  function isDivisible(n, x, y) {
    return n%x===0 && n%y===0 ? true : false
  }