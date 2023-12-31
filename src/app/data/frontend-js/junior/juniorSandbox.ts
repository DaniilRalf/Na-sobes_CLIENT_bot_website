const JuniorSandbox = [

  // {
  //   number: 1,
  //   question: 'В чем разница между null и undefined?',
  //   answer: {"data":[{"paragraph": "undefined («неопределенный») представляет собой значение по умолчанию:\n - переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;\n - функции, которая ничего не возвращает явно, например, console.log(1);\n - несуществующего свойства объекта.\n\n В указанных случаях движок JS присваивает значение undefined."},
  //       {"code": "let _thisIsUndefined\n const doNothing = () => {}\n const someObj = {\n    a: 'ay',\n    b: 'bee',\n    c: 'si'\n}\n console.log(_thisIsUndefined) // undefined\n console.log(doNothing()) // undefined\n console.log(someObj['d']) // undefined"},
  //       {"paragraph": "null — это «значение отсутствия значения». null — это значение, которое присваивается переменной явно.\nВ примере ниже мы получаем null, когда метод fs.readFile отрабатывает без ошибок:"},
  //       {"code": "fs.readFile('path/to/file', (e, data) => {\n    console.log(e) // здесь мы получаем null\n if(e) {\n    console.log(e)\n }\n    console.log(data)\n })"},
  //       {"paragraph": "При сравнении null и undefined мы получаем true, когда используем оператор '==', и false при использовании оператора '==='. О том, почему так происходит, см. ниже."},
  //       {"code": "console.log(null == undefined) // true\n console.log(null === undefined) // false"}]}
  // },

  // {
  //   number: 2,
  //   question: 'Для чего используется оператор "&&"?',
  //   answer: {"data":[{"paragraph": "Оператор '&&' (логическое и) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные.\n Он использует короткое замыкание во избежание лишних затрат:"},
  //       {"code": " console.log(false && 1 && []) // false\n console.log('' && true && 5) // 5"},
  //       {"paragraph": "С оператором «if»:"},
  //       {"code": " const router: Router = Router()\n\n router.get('/endpoint', (req: Request, res: Response) => {\n    let conMobile: PoolConnection\n     try {\n         // операции с базой данных\n     } catch (e) {\n         if (conMobile) {\n            conMobile.release()\n        }\n    }\n })"},
  //       {"paragraph": "То же самое с оператором '&&':"},
  //       {"code": " const router: Router = Router()\n\n router.get('/endpoint', (req: Request, res: Response) => {\n     let conMobile: PoolConnection\n     try {\n         // операции с базой данных\n     } catch (e) {\n         conMobile && conMobile.release()\n     }\n })"}]}
  // },

  // {
  //   number: 3,
  //   question: 'Для чего используется оператор "||"?',
  //   answer: {"data":[{"paragraph": "Оператор '||' (логическое или) находит и возвращает первое истинное значение.\n Он также использует короткое замыкание.\n Данный оператор использовался для присвоения параметров по умолчанию в функциях до того, как параметры по умолчанию были стандартизированы в ES6."},
  //       {"code": " console.log(null || 1 || undefined) // 1\n \n function logName(name) {\n '    let n = name || Mark\n     console.log(n)\n }\n \n logName() // Mark"}]}
  // },

  // {
  //   number: 4,
  //   question: 'Что такое DOM?',
  //   answer: {"data":[{"paragraph": " DOM или Document Object Model (объектная модель документа) — это прикладной программный интерфейс (API) для работы с HTML и XML документами.\n Когда браузер первый раз читает («парсит») HTML документ, он формирует большой объект, действительно большой объект, основанный на документе — DOM.\n DOM представляет собой древовидную структуру (дерево документа).\n DOM используется для взаимодействия и изменения самой структуры DOM или его отдельных элементов и узлов."},
  //       {"paragraph": "Допустим, у нас есть такой HTML:"},
  //       {"code": " <!DOCTYPE html>\n <html lang=\"en\">\n \n <head>\n     <meta charset=\"UTF-8\">\n     <meta name=\"viewport\" content=\"width=device-width\">\n     <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n     <title>Document Object Model</title>\n </head>\n \n <body>\n     <div>\n         <p>\n             <span></span>\n         </p>\n         <label></label>\n         <input>\n     </div>\n </body>\n \n </html>"},
  //       {"paragraph": "В JS DOM представлен объектом Document. Объект Document имеет большое количество методов для работы с элементами, их созданием, модификацией, удалением и т.д."}]}
  // },

  {
    number: 5,
    question: 'asdasdasd',
    answer: {"data":[
        {"paragraph": ""},
        {"paragraph": ""},
        {"code": ""},
        {"paragraph": ""}
    ]}
  },

]
