const JuniorSandbox = [

  // {
  //   number: 1,
  //   question: 'В чем разница между структурной и атрибутной директивой, назовите встроенные директивы?',
  //   answer: {"data":[{"paragraph": "Структурные директивы влияют на DOM и могут добавлять/удалять элементы"},
  //       {"code": "(ng-template, NgIf, NgFor, NgSwitch...)"},
  //       {"paragraph": "Атрибутные директивы меняют внешний вид или поведение элементов, компонентов или других директив"},
  //       {"code": "(NgStyle, NgClass...)"},
  //       {"paragraph": ""}]}
  // },
  // {
  //   number: 2,
  //   question: 'Для чего нужны директивы ng-template, ng-container, ng-content?',
  //   answer: {"data":[{"paragraph": "1. ng-template"},
  //       {"paragraph": "<template> — это механизм для отложенного рендера клиентского контента, который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript."},
  //       {"paragraph": "Template можно представить себе как фрагмент контента, сохранённый для последующего использования в документе. Хотя парсер и обрабатывает содержимое элемента template во время загрузки страницы, он делает это только чтобы убедиться в валидности содержимого; само содержимое при этом не отображается."},
  //       {"paragraph": "<ng-template> - является имплементацией стандартного элемента template, данный элемент появился с четвертой версии Angular, это было сделано с точки зрения совместимости со встраиваемыми на страницу template элементами, которые могли попасть в шаблон ваших компонентов по тем или иным причинам."},
  //       {"paragraph": "Пример:"},
  //       {"code": " <div class=\"lessons-list\" *ngIf=\"lessons else loading\">...</div>\n\n <ng-template #loading>\n  <div>Loading...</div>\n </ng-template>"},
  //       {"paragraph": "2. ng-container"},
  //       {"paragraph": "<ng-container> - это логический контейнер, который может использоваться для группировки узлов, но не отображается в дереве DOM как узел (node)."},
  //       {"paragraph": "На самом деле структурные директивы (*ngIf, *ngFor, …) являются синтаксическим сахаром для наших шаблонов. В реальности, данные шаблоны трансформируются в такие конструкции:"},
  //       {"code": " <ng-template [ngIf]=\"lessons\" [ngIfElse]=\"loading\">\n   <div class=\"lessons-list\">\n     ...\n   </div>\n </div>\n\n <ng-template #loading>\n     <div>Loading...</div>\n </ng-template>"},
  //       {"paragraph": "Но что делать, если я хочу применить несколько структурных директив? (спойлер: к сожалению, так нельзя сделать)"},
  //       {"code": " <div class=\"lesson\" *ngIf=\"lessons\" *ngFor=\"let lesson of lessons\">\n   <div class=\"lesson-detail\">{{lesson | json}}</div>\n </div>"},
  //       {"code": " Uncaught Error: Template parse errors:\n Can't have multiple template bindings on one element. Use only one attribute\n named 'template' or prefixed with *"},
  //       {"paragraph": "Но можно сделать так:"},
  //       {"code": "<div *ngIf=\"lessons\">\n   <div class=\"lesson\" *ngFor=\"let lesson of lessons\">\n     <div class=\"lesson-detail\">{{lesson | json}}</div>\n   </div>\n </div>"},
  //       {"paragraph": "Однако, чтобы избежать необходимости создавать дополнительный div, мы можем вместо этого использовать директиву ng-container:"},
  //       {"code": " <ng-container *ngIf=\"lessons\">\n   <div class=\"lesson\" *ngFor=\"let lesson of lessons\">\n     <div class=\"lesson-detail\">{{lesson | json}}</div>\n   </div>\n </ng-container>"},
  //       {"paragraph": "Как мы видим, директива ng-container предоставляет нам элемент, в котором мы можем использовать структурную директиву, без необходимости создавать дополнительный элемент."},
  //       {"paragraph": "Еще пара примечательных примеров, если все же вы хотите использовать ng-template вместо ng-container, по определенным правилам вы не сможете использовать полную конструкцию структурных директив."},
  //       {"paragraph": "Вы можете писать либо так:"},
  //       {"code": " <div class=\"mainWrap\">\n   <ng-container *ngIf=\"true\">\n     <h2>Title</h2>\n     <div>Content</div>\n   </ng-container>\n </div>"},
  //       {"paragraph": "Либо так:"},
  //       {"code": " <div class=\"mainWrap\">\n   <ng-template [ngIf]=\"true\">\n     <h2>Title</h2>\n     <div>Content</div>\n   </ng-template>\n </div>"},
  //       {"paragraph": "На выходе, при рендеринге будет одно и тоже:"},
  //       {"code": " <div class=\"mainWrap\">\n   <h2>Title</h2>\n   <div>Content</div>\n </div>"},
  //       {"paragraph": "3. ng-content"},
  //       {"paragraph": "<ng-content> - позволяет внедрять родительским компонентам html-код в дочерние компоненты."},
  //       {"paragraph": "Здесь на самом деле, немного сложнее уже чем с ng-template, ng-container. Так как ng-content решает задачу проецирования контента в ваши веб-компоненты. Веб-компоненты состоят из нескольких отдельных технологий. Вы можете думать о Веб-компонентах как о переиспользуемых виджетах пользовательского интерфейса, которые создаются с помощью открытых веб-технологий. Они являются частью браузера и поэтому не нуждаются во внешних библиотеках, таких как jQuery или Dojo. Существующий Веб-компонент может быть использован без написания кода, просто путем импорта выражения на HTML-страницу. Веб-компоненты используют новые или разрабатываемые стандартные возможности браузера."},
  //       {"paragraph": "Давайте представим ситуацию от обратного, нам нужно параметризовать наш компонент. Мы хотим сделать так, чтобы на вход в компонент мы могли передать какие-либо статичные данные. Это можно сделать несколькими способами."},
  //       {"paragraph": "comment.component.ts:"},
  //       {"code": " @Component({\n   selector: \"comment\",\n   template: `\n     <h1>Комментарий:</h1>\n     <p>{{ data }}</p>\n   `,\n })\n export class CommentComponent {\n   @Input() data: string = null;\n }"},
  //       {"paragraph": "app.component.html"},
  //       {"code": " <div *ngFor=\"let message of comments\">\n   <comment [data]=\"message\"></comment>\n </div>"},
  //       {"paragraph": "Но можно поступить и другим путем.\n comment.component.ts:"},
  //       {"code": " @Component({\n   selector: \"comment\",\n   template: `\n     <h1>Комментарий:</h1>\n     <ng-content></ng-content>\n   `,\n })\n export class CommentComponent {}"},
  //       {"paragraph": "app.component.html"},
  //       {"code": " <div *ngFor=\"let message of comments\">\n   <comment>\n     <p>{{message}}</p>\n   </comment>\n </div>"},
  //       {"paragraph": "Конечно, эти примеры плохо демонстрируют подводные камни, свои плюсы и минусы. Но второй способ демонстрирует подход при работе, когда мы оперируем независимыми абстракциями и можем проецировать контент внутрь наших компонентов (подход веб-компонентов)."}]}
  // },

  {
    number: 3,
    question: 'asdasdasd',
    answer: {"data":[
        {"paragraph": ""},
        {"paragraph": ""},
        {"code": ""},
        {"paragraph": ""}
      ]}
  },

  {
    number: 4,
    question: 'asdasdasd',
    answer: {"data":[
        {"paragraph": ""},
        {"paragraph": ""},
        {"code": ""},
        {"paragraph": ""}
      ]}
  },


]
