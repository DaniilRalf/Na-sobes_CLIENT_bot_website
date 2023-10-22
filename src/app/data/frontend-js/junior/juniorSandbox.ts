
export interface SandboxDataType {
  number: number,
  question: string,
  answer:({[SandboxDataAnswer.Code]: string} | {[SandboxDataAnswer.Paragraph]: string})[]
}
export enum SandboxDataAnswer {
  Paragraph = 'paragraph',
  Code = 'code',
}




export const JuniorSandbox: SandboxDataType[] = [

  {
    number: 1,
    question: 'В чем разница между null и undefined?',
    answer: [
      {
        [SandboxDataAnswer.Paragraph]: 'undefined («неопределенный») представляет собой значение по умолчанию:\n' +
          'переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;\n' +
          'функции, которая ничего не возвращает явно, например, console.log(1);\n' +
          'несуществующего свойства объекта.\n' +
          '\n' +
          'В указанных случаях движок JS присваивает значение undefined.'
      },
      {
        [SandboxDataAnswer.Code]: 'let _thisIsUndefined\n' +
          'const doNothing = () => {}\n' +
          'const someObj = {\n' +
          '    a: \'ay\',\n' +
          '    b: \'bee\',\n' +
          '    c: \'si\'\n' +
          '}\n' +
          'console.log(_thisIsUndefined) // undefined\n' +
          'console.log(doNothing()) // undefined\n' +
          'console.log(someObj[\'d\']) // undefined',
      },
    ]
  }

]


