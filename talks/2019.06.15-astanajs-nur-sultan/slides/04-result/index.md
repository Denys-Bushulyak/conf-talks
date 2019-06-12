## Что в результате? (бесценно)

Хочу чтоб у вас сформировалось базовое понимание данной технологии. И полученные знания помогли раскурить документацию в разы быстрее.

-----

## GraphQL по натуре строго типизированный

## Шаг влево, шаг вправо от схемы — <!-- .element: class="fragment" -->

# ☠️ РАССТРЕЛ ☠️ <!-- .element: class="fragment" -->

-----

## ☠️ РАССТРЕЛ ☠️

- фронтендера, если криво запросил данные <!-- .element: class="fragment" -->
- бекендера, если криво вернул данные <!-- .element: class="fragment" -->

-----

### GraphQL-схема своей строгостью заставляет

### Бэкендеров и Фронтендеров

### 👩‍❤️‍💋‍👩 жить дружно 👨‍❤️‍💋‍👨

### 💋❤️🍻

#### И винить во всех грехах GraphQL, т.к. теперь он крайний! <!-- .element: class="fragment" -->

-----

# Зачем что-то менять?

## В чем профит от использования GraphQL?

-----

# GraphQL приходит на смену REST API

## Он тупо удобнее 😇 <!-- .element: class="fragment" -->

-----

# У REST API часто адовая документация 👿

-----

#### Самодельная и без интерактива

![gov.stat](./gov-stat-screen-1.png)

-----

#### Страшненькая и неудобная

![gov.stat](./gov-stat-screen-2.png)

-----

## Частенько используют [Swagger](https://swagger.io/)

## для стандартизации, документации и интерактива вашего API

# Но он тоже не айс 🤪 <!-- .element: class="fragment" -->

-----

#### В Swagger есть интерактив, стандарт, да и выглядит покрасивше

![swagger-inspector](./swagger-inspector.png)

-----

#### Но от этого не легче 😭

Как вообще этой "фигней" пользоваться?

![swagger-rabota-ua](./swagger-rabota-ua.png)

-----

#### Минусы REST API, даже со Swagger'ом:

- Каждый эндпоинт описывается примитивными типами, нет "сложных" типов <!-- .element: class="fragment" -->
- Нет связей; неизвестно, как оптимальнее всего запросить связанные ресурсы <!-- .element: class="fragment" -->
- Жирные ответы, если не прикрутить фильтр по полям <!-- .element: class="fragment" -->
- Нет возможности построить сложный агрегированный запрос <!-- .element: class="fragment" -->
- Частенько много сетевых запросов <!-- .element: class="fragment" -->
- Боль с вложенными агрументами <!-- .element: class="fragment" -->

-----

#### Самый жирный минус:

## С REST API фронтендеры пишут кучу бойлерплейт кода, для получения связанных данных между ресурсами. <!-- .element: class="fragment" -->

Часто гадают на кофейной гуще 🤔 <!-- .element: class="fragment" -->

Часто с матами 🤬 <!-- .element: class="fragment" -->

-----

## Ведь бэкендеры хорошо знают связи между данными,

## но способ передачи знаний обычно плохо отработан

## 😶

-----

# GraphQL - чума!

# 💃💃💃

## Когда много связанных данных

-----

# Что такое GraphQL?

![GraphQL](../assets/logo/graphql.png) <!-- .element: style="width: 200px; text-align: center;" class="plain" -->

## Это *удобный* формат для общения между сервером и клиентом

-----



#### Фишки GraphQL:

- Описание бэкендерами связей между ресурсами c фильтрацией <!-- .element: class="fragment" -->
- Выбор полей фронтендерами в ответе из коробки <!-- .element: class="fragment" -->
- Вложенные запросы <!-- .element: class="fragment" -->
- Гибкость агрументов на любом уровне вложенности <!-- .element: class="fragment" -->
- Получение нескольких ресурсов в одном запросе <!-- .element: class="fragment" -->
- Фрагменты (для компонентного подхода) <!-- .element: class="fragment" -->
- Поддерживает сложные типы (статическая типизация 🌶) <!-- .element: class="fragment" -->
- Экзотика полиморфизма (Interfaces, Union types) <!-- .element: class="fragment" -->

-----

### Работает с любыми базами данных, на любом языке программирования!

Грубо говоря, GraphQL требует от бекендеров описать набор функций для получения данных 👌 <!-- .element: class="fragment" -->

-----

**На сервере объявляете о своих _возможностях_**

в предоставлении данных (бэкендеры создают GraphQL схему).

![GraphQL](../assets/logo/graphql.png) <!-- .element: style="width: 200px; text-align: center;" class="plain" -->

**На клиенте заявляете о своих _потребностях_**

в получении данных (фронтендеры пишут GraphQL запросы).

-----

### C GraphQL как в ресторане:

— Вот вам, пожалуйста, меню, выбирайте.<br/>
— Будьте любезны салатик 🥗, рыбку на пару 🐟 <br/> и бокальчик красного 🍷.

-----

### C REST API как в армии:

— Жри, что дали, а то голодным останешься,<br/>И наваливают кучу чего-то 🤐

<br/>PS. Swagger — это контрактная армия 😂 <!-- .element: class="fragment" -->

-----

### Вроде все сыты остались,

### но, как мы видим, есть нюанс

### 😜

-----

## Концептуальная разница GraphQL и REST API в том,

## что логику получения связанных ресурсов перенесли с клиента на сервер. <!-- .element: class="fragment" -->

Сняли жуткий головняк с фронтендеров 👍 <!-- .element: class="fragment" -->

-----

## Плюсы: <!-- .element: class="green" -->

- Язык запросов для вашего API (что просите, то получаете)
- Интроспекция API из коробки (документация) <!-- .element: class="fragment" -->
- Удобная IDE в браузере (на поиграть с API) <!-- .element: class="fragment" -->
- Ваше API статически типизированное (интерпрайзненько) <!-- .element: class="fragment" -->
- Получить несколько ресурсов за 1 запрос (REST must die) <!-- .element: class="fragment" -->

-----

## Минусы: <!-- .element: class="red" -->

- Берет и выкидывает все выработанные годами  практики <!-- .element: class="fragment" -->
  - [кеширования](https://blog.usejournal.com/caching-with-graphql-what-are-the-best-options-e161b0f20e59) <!-- .element: class="fragment" -->
  - [авторизации](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/auth) <!-- .element: class="fragment" -->
- Добавляет новых задач <!-- .element:  class="fragment" style="padding-top: 25px" -->
  - [Query cost](https://github.com/slicknode/graphql-query-complexity) <!-- .element: class="fragment" -->
  - [N+1 query](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/dataloader) <!-- .element: class="fragment" -->

-----

## Но так или иначе ☝️

### GraphQL — это светлое будущее любой микросервисной архитектуры <!-- .element: class="fragment orange"  -->

- Клиенты легко находят нужную информацию <!-- .element: class="fragment" -->
- Батчинг запроса (великий склеиватель) <!-- .element: class="fragment" -->
  - Параллельное обращение к микросервисам <!-- .element: class="fragment" -->
  - Последовательное обращение к микросервисам <!-- .element: class="fragment" -->
  
<span><b>Любая комбинация, которую `запросил клиент`, исходя из того, что связями `разрешил бэкендер`</b></span> <!-- .element: class="fragment green" -->

-----

# GraphQL должен быть <span class="red">«волосатым»</span>

-----

<a href="https://user-images.githubusercontent.com/1946920/57199292-26073300-6f9f-11e9-886d-0cd8d84eac16.png" target="_blank"><img style="width: 400px;" class="plain" alt="Screen Shot 2019-05-19 at 12 45 39 AM" src="https://user-images.githubusercontent.com/1946920/57974374-d3833900-79d8-11e9-9302-1ec7e530bea8.png">
</a>

-----

## Волосатость лучше начать объяснять с вводом термина <span class="red">RestQL</span>...

-----

## <span class="red">RestQL</span> – это GraphQL от бэкендшиков с RESTом головного мозга

-----

## <span class="red">RestQL</span> – это апи слабыми связями

-----

### <span class="red">RestQL</span> – это когда бэкендер не описал все связи между типами

<span>И фронтендерам надо самим догадыватся, как запросить нужные `related data`</span> <!-- .element: class="fragment" -->

-----

## У Фронтендера должна быть возможность <span class="green">сходить по маленькому...</span>

<h2 class="fragment"><span class="green">...кругу</span> через Фрагменты, чтобы получить необходимые данные.</h2>

-----

## А при слабых связях, Фронтендер вынужден <span class="red">ходить по большому...</span>

<h2 class="fragment"><span class="red">...кругу</span> через отдельный Запрос, чтобы получить необходимые данные.</h2>

-----

## Визуально «волосатость» GraphQL можно увидеть через <!-- .element: class="orange" -->

## <https://apis.guru/graphql-voyager/>

### (by Ivan Goncharov & Roman Hotsiy)

-----

#### «Волосатое» GraphQL API гитхаба  👍 <!-- .element: class="green" -->

![hairly-github](https://user-images.githubusercontent.com/1946920/57200267-b0ee2a80-6fab-11e9-9c76-6053abe48ecd.jpg)

-----

#### Кусочек «лысого» RestQL API 👎 <!-- .element: class="red" -->

![hairly-amazon](https://user-images.githubusercontent.com/1946920/57200270-b3e91b00-6fab-11e9-9d65-e6f794ea42f5.jpg) <!-- .element: style="max-width: 600px" -->

-----

## Если ваши бэкендеры запилили <span class="red">«лысый» GraphQL</span> – то в полную силу вы <span class="red">фрагментами уже не воспользуетесь</span>

-----

## Концептуальная разница GraphQL и REST API в том,

## что реализацию логики получения связанных ресурсов перенесли с клиента на сервер. <!-- .element: class="fragment green" -->

Сняли жуткий головняк с фронтендеров 👍 <!-- .element: class="fragment" -->

-----

#### Вот собственно и всё, что надо знать про <span class="red">«волосатый»</span> GraphQL

#### Всем добрых и пушистых бэкендеров 😉 <!-- .element: class="fragment green" -->

<a href="https://user-images.githubusercontent.com/1946920/57199295-299aba00-6f9f-11e9-9f42-29c9ad6f2993.png" target="_blank">
<img style="width: 700px;" class="plain" alt="Screen Shot 2019-05-19 at 12 40 32 AM" src="https://user-images.githubusercontent.com/1946920/57974370-cf571b80-79d8-11e9-9ef3-d6aa23d5c2a5.png">
</a>
