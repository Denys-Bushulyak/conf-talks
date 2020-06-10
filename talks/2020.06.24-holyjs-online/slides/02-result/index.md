# GraphQL как прокси <br/>к REST API

-----

## А реально обернуть REST API в GraphQL? <!-- .element: class="red" -->

-----

## И как сделать R&D такого подхода? <!-- .element: class="orange" -->

-----

#### Обычно обкатку технологии принято делать на TodoMVC.

![todomvc](./todomvc.png) <!-- .element: style="max-width: 800px;" class="plain" -->

-----

## Так и поступим!

-----

### А коль я <span class="red">непростой</span> человек, <br/>то придется мне брать <br/>и <span class="red">непростое</span> Todo-приложение 😈

-----

### Возьму-ка систему управления проектами Wrike.

![wrike](./wrike.png) <!-- .element: style="max-width: 1200px;" class="plain" -->

-----

## Открою их REST API <https://developers.wrike.com/api/v4>

![wrike](./wrike-api.png) <!-- .element: style="max-width: 800px;" class="plain" -->

-----

## Фи, делов-то **на пару дней!** <!-- .element: class="orange" -->

– подумал я.

-----

## И вшатал **160 часов!** <!-- .element: class="orange" -->

– из-за чёртового оптимизма.

-----

## В REST API у Wrike оказалось:

- 22 entity
- 87 методов

-----

## И GraphQL получился таким: <!-- .element: class="orange" -->

- 134 GraphQL-типа
- 1002 поля и аргумента
- 51 явная прямая связь между entity
- 26 неявных обратных связей

-----

TODO: Добавить картинки вояжера RestQL, GraphQL, квери и мутации

-----

## В результате у еще одного 🦄 появилось <span class="green">удобное</span> GraphQL апи.
