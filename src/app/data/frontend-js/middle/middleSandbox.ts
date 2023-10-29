const MiddleSandbox = [

  // {
  //   number: 1,
  //   question: 'Как бы Вы реализовали вспомогательную функцию запоминания?',
  //   answer: {"data":[{"code": " function memoize(fn){\n     const cache = {}\n     return function(param){\n         if(cache[param]){\n             console.log('cached')\n             return cache[param]\n         } else{\n             let result = fn(param)\n             cache[param] = result\n             console.log('not cached')\n             return result\n         }\n     }\n }\n \n const toUpper = (str = '') => str.toUpperCase()\n \n const toUpperMemoized = memoize(toUpper)\n \n toUpperMemoized('abcdef')\n toUpperMemoized('abcdef') // не выполнится"},
  //       {"paragraph": " Мы реализовали функцию мемоизации с одним аргументом. Сделаем ее «мультиаргументной»:"},
  //       {"code": " const slice = Array.prototype.slice\n function memoize(fn){\n     const cache = {}\n     return (...args) => {\n         const params = slice.call(args)\n         console.log(params)\n         if(cache[params]){\n             console.log('cached')\n             return cache[params]\n         } else{\n             let result = fn(...args)\n             cache[params] = result\n             console.log('not cached')\n             return result\n         }\n     }\n }\n const makeFullName = (fName, lName) => `${fName} ${lName}`\n const reduceAdd = (numbers, startValue = 0) => numbers.reduce((total, cur) => total + cur, startValue)\n \n const memoizedFullName = memoize(makeFullName)\n const memoizeReduceAdd = memoize(reduceAdd)\n \n memoizedFullName('Marko', 'Polo')\n memoizedFullName('Marko', 'Polo') // не выполнится\n \n memoizeReduceAdd([1,2,3,4],5)\n memoizeReduceAdd([1,2,3,4],5) // не выполнится"}]}
  // },

  // {
  //   number: 2,
  //   question: 'В чем разница между оператором «in» и методом hasOwnProperty?',
  //   answer: {"data":[{"paragraph": "Отличие состоит в том, что оператор «in» проверяет наличие свойства не только в самом\n объекте, но и в его прототипах, а метод hasOwnProperty — только в объекте."},
  //       {"code": " console.log('prop' in o) // true\n console.log('toString' in o) // true\n \n console.log(o.hasOwnProperty('prop')) // true\n console.log(o.hasOwnProperty('toString')) // false"}]}
  // },

  {
    number: 2,
    question: 'asdasdasd',
    answer: {"data":[
        {"paragraph": ""},
        {"code": ""},
      ]}
  },

]
