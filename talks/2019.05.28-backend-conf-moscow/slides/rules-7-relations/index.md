# 7. Правила связей между типами (relationships)

-----

## [Rule 7.1.](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/schema-design#rule-7.1)

## GraphQL-схема должна быть "волосатой"

-----

### `Волосатый GraphQL` (Hairy GraphQL) – это GraphQL-схема, которая содержит много связей между типами.

-----

### Концептуальная разница GraphQL от REST API в том, что реализацию логики получения связанных ресурсов перенесли с клиента на сервер.

-----

#### «Волосатое» GraphQL API гитхаба  👍 <!-- .element: class="green" -->

![hairly-github](https://user-images.githubusercontent.com/1946920/57200267-b0ee2a80-6fab-11e9-9c76-6053abe48ecd.jpg)

-----

#### Кусочек «лысого» RestQL API 👎 <!-- .element: class="red" -->

![hairly-amazon](https://user-images.githubusercontent.com/1946920/57200270-b3e91b00-6fab-11e9-9d65-e6f794ea42f5.jpg) <!-- .element: style="max-width: 600px" -->

-----

#### Чем больше связей в вашей схеме, тем легче фронтендерам делать большие запросы используя GraphQL-фрагменты.

Более детально [читать здесь](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/schema-design#rule-7.1)