# GraphQL vs REST

-----

# GraphQL приходит на смену REST API

## Он тупо удобнее 😇 <!-- .element: class="fragment" -->

-----

# У REST API часто адовая документация 👿

-----

#### Самодельная и без интерактива <!-- .element: class="red" -->

![gov.stat](./gov-stat-screen-1.png)

-----

#### Страшненькая и неудобная <!-- .element: class="red" -->

![gov.stat](./gov-stat-screen-2.png)

-----

## Частенько используют [Swagger](https://swagger.io/)

## для стандартизации, документации и интерактива вашего API

# Но он тоже не айс 🤪 <!-- .element: class="fragment red" -->

-----

#### В Swagger есть интерактив, стандарт, да и выглядит покрасивше

![swagger-inspector](./swagger-inspector.png)

-----

#### Но от этого не легче 😭 <!-- .element: class="red" -->

Как вообще этой "фигней" пользоваться?

![swagger-rabota-ua](./swagger-rabota-ua.png)

-----

#### Минусы REST API, даже со Swagger'ом: <!-- .element: class="red" -->

- Жирные ответы <!-- .element: class="fragment" -->
- Нет сложных агрегированный запросов <!-- .element: class="fragment" -->
- Частенько много сетевых запросов <!-- .element: class="fragment" -->
- Боль с вложенными агрументами <!-- .element: class="fragment" -->
- Куча эндпоинтов <!-- .element: class="fragment" -->
- Слабая типизация <!-- .element: class="fragment" -->

-----

#### Самый жирный минус: <!-- .element: class="red" -->

## С REST API фронтендеры пишут кучу бойлерплейт кода, для получения связанных данных между ресурсами. <!-- .element: class="fragment" -->

Часто гадают на кофейной гуще 🤔 <!-- .element: class="fragment" -->

Часто с матами 🤬 <!-- .element: class="fragment red" -->

-----

## Ведь бэкендеры хорошо знают связи между данными,

## но способ передачи знаний обычно плохо отработан

## 😶

-----

## Концептуальная разница GraphQL и REST API в том,

## что логику получения связанных ресурсов перенесли с клиента на сервер. <!-- .element: class="fragment green" -->

Сняли жуткий головняк с фронтендеров 👍 <!-- .element: class="fragment" -->

-----

**На сервере объявляете о своих _возможностях_** <!-- .element: class="fragment green" -->

в предоставлении данных (бэкендеры создают GraphQL схему). <!-- .element: class="fragment" -->

![GraphQL](../assets/logo/graphql.png) <!-- .element: style="width: 200px; text-align: center;" class="plain" -->

**На клиенте заявляете о своих _потребностях_** <!-- .element: class="fragment green" -->

в получении данных (фронтендеры пишут GraphQL запросы). <!-- .element: class="fragment" -->

-----

## Плюсы GraphQL: <!-- .element: class="green" -->

- Язык запросов для вашего API (что просите, то получаете)
- Интроспекция API из коробки (документация) <!-- .element: class="fragment" -->
- Удобная IDE в браузере (на поиграть с API) <!-- .element: class="fragment" -->
- Ваше API статически типизированное (интерпрайзненько) <!-- .element: class="fragment" -->
- Получить несколько ресурсов за 1 запрос (REST must die) <!-- .element: class="fragment" -->

-----

## Минусы GraphQL: <!-- .element: class="red" -->

- Берет и выкидывает все выработанные годами  практики <!-- .element: class="fragment" -->
  - [кеширования](https://blog.usejournal.com/caching-with-graphql-what-are-the-best-options-e161b0f20e59) <!-- .element: class="fragment" -->
  - [авторизации](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/auth) <!-- .element: class="fragment" -->
- Добавляет новых задач <!-- .element:  class="fragment" style="padding-top: 25px" -->
  - [Query cost](https://github.com/slicknode/graphql-query-complexity) <!-- .element: class="fragment" -->
  - [N+1 query](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/dataloader) <!-- .element: class="fragment" -->

-----

## Резюме

-----

![GraphQL](../assets/logo/graphql.png) <!-- .element: style="width: 200px; text-align: center;" class="plain" -->

## GraphQL – это *удобный* и *строгий* язык для общения между сервером и клиентом.
