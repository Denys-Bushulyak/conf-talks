# GraphQL как прокси <br/>к REST API

-----

## А реально обернуть REST API в GraphQL? <!-- .element: class="red" -->

- C авторизацией <!-- .element: class="fragment" -->
- Без проблемы N+1 (DataLoader) <!-- .element: class="fragment" -->
- С защитой от DoS (QueryCost) <!-- .element: class="fragment" -->

-----

# РЕАЛЬНО! <!-- .element: class="green" -->

-----

#### Обычно обкатку технологии принято делать на TodoMVC.

![todomvc](./todomvc.png) <!-- .element: style="max-width: 800px;" class="plain" -->

-----

## Так и поступим!

-----

### А коль я <span class="red">непростой</span> человек, <br/>то придется мне брать <br/>и <span class="red">непростое</span> Todo-приложение 😈

-----

### Возьму-ка систему управления проектами Wrike

![wrike](./wrike.png) <!-- .element: style="max-width: 1200px;" class="plain" -->

-----

## Открою их REST API <https://developers.wrike.com/api/v4>

![wrike](./wrike-api.png) <!-- .element: style="max-width: 800px;" class="plain" -->

-----

## Фи, делов-то **на пару дней!** <!-- .element: class="orange" -->

– подумал я.

-----

## И вшатал **160 часов!** <!-- .element: class="orange" -->

- только на демку, без слайдов <!-- .element: class="fragment" -->
- из-за чёртового оптимизма <!-- .element: class="fragment" -->

-----

## В REST API у Wrike оказалось: <!-- .element: class="red" -->

- 22 entity
- 87 методов

-----

## Ну, нормально так Wrike прокачал свой "TodoMVC" за 14 лет 😅

-----

## В итоге, <br/>GraphQL получился таким: <!-- .element: class="orange" -->

- 134 GraphQL-типа
- 1002 поля и аргумента
- 51 явная прямая связь между entity
- 26 неявных обратных связей

-----

## Сперва, у меня получился RestQL

## <span class="red">слабосвязный GraphQL</span>

-----

## Но потом добавил связей, <br/> которые есть в Data Domain<br/> и получил полноценный<br/> <span class="red">"волосатый" GraphQL</span>

-----

![restql-vs-graphql](./restql-vs-graphql.png) <!-- .element: style="max-width: 1100px;" class="plain" -->

-----

![restql-vs-graphql](./restql-vs-graphql.png) <!-- .element: style="max-width: 1100px; filter: saturate(500);" class="plain" -->

-----

## И теперь, у еще одного 🦄 <br/>появилось <span class="green">удобное</span> <br/>"волосатое" GraphQL апи

-----

TODO: нарисовать блоками модель данных

TODO: упростить GraphQL-запрос под модель данных

TODO: прикрутить возможность прогнать запросы через VSCode

-----

<iframe src="https://graphql-wrike.herokuapp.com/?query=mutation%20CreateTask%20%7B%0A%20%20taskCreate%28%0A%20%20%20%20folderId%3A%20%22IEADMUW4I4OE37IV%22%2C%0A%20%20%20%20task%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Make%20Holy%20JS%20Talk%22%2C%0A%20%20%20%20%20%20status%3A%20Deferred%2C%0A%20%20%20%20%20%20responsibles%3A%20%5B%22KUAHNM4I%22%5D%0A%20%20%20%20%7D%0A%20%20%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20responsibles%20%7B%0A%20%20%20%20%20%20firstName%0A%20%20%20%20%20%20lastName%0A%20%20%20%20%20%20tasksResponsible%28%0A%20%20%20%20%20%20%20%20filter%3A%20%7B%20status%3A%20Deferred%20%7D%20%0A%20%20%20%20%20%20%20%20limit%3A%205%2C%20%0A%20%20%20%20%20%20%20%20sort%3A%20CREATED_DATE_DESC%29%20%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20%20%20status%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20createdDate%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20CustomData%20%7B%0A%20%20lastTwoCompletedTasks%3A%20taskFindMany%28%0A%20%20%20%20filter%3A%20%7B%20status%3A%20Completed%20%7D%0A%20%20%20%20limit%3A%202%0A%20%20%20%20sort%3A%20COMPLETED_DATE_DESC%0A%20%20%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20status%0A%20%20%20%20completedDate%0A%20%20%7D%0A%20%20lastTwoNewTasks%3A%20taskFindMany%28%0A%20%20%20%20filter%3A%20%7B%20status%3A%20Active%7D%0A%20%20%20%20limit%3A%203%0A%20%20%20%20sort%3A%20CREATED_DATE_DESC%0A%20%20%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20status%0A%20%20%20%20createdDate%0A%20%20%7D%0A%7D" width="100%" height="720px" />
