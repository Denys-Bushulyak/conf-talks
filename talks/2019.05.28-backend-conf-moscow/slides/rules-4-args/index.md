# 4. Правила аргументов (Input)

-----

## [Rule 4.1.](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/schema-design#rule-4.1)

## Группируйте взаимосвязанные аргументы вместе в новый input-тип.

-----

### Фильтрация отдельно, лимитирование отдельно

```diff
type Query {
-  articles(lang: String, ratingMin: Int, limit: Int): [Article] # BAD
+  articles(filter: ArticleFilter,        limit: Int): [Article] # GOOD
}

+ input ArticleFilter {
+   lang: String
+   ratingMin: Int
+ }

```

Выносим параметры фильтрации в отдельный Input-тип

-----

## Группировка взаимосвязанных аргументов

- облегчает восприятие связей между аргументами
- позволяет схему легко расширять в будущем

-----

## [Rule 4.2.](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/schema-design#rule-4.2)

## Используйте строгие скалярные типы для аргументов, например `DateTime` вместо `String`.

-----

### Говорящие имена аргументов хорошо.

```diff
type Mutation {
-  setTime(date: String):   SetTimePayload  # BAD
+  setTime(date: DateTime): SetTimePayload  # GOOD
}

```

### Но говорящие Типы еще лучше.

-----

## Что дают свои кастомные скаляры <br/>для аргументов?

- `Бэкедерам` – позволяет единожды описать методы конвертации и валидации значений от клиента<br/><br/>

- `Фронтендерам` – обеспечивает ясность и побуждает клиентов использовать более строгие элементы управления вводом

-----

## [Rule 4.3.](https://github.com/nodkz/conf-talks/tree/master/articles/graphql/schema-design#rule-4.3)

## Помечайте аргументы как `NonNull`, если они обязательны для выполнения запроса.

-----

### К примеру нельзя запросить список статей, <br/> если не указан лимит.

```graphql
type Query {
  articles(limit: Int!): [Article]
}

```

-----

### Ещё для обязательных аргументов можно <br/>использовать `значения по-умолчанию` 👍

```graphql
type Query {
  articles(limit: Int! = 10): [Article]
}

```

-----

### На сервере в `resolve`-методе не нужно дополнительно проверять NonNull-аргумент `limit` на присутствие.

### GraphQL сам проверит на этапе валидации запроса.

-----

### На клиенте статический анализ запросов позволяет отловить отсутствие обязательных аргументов.

### Не доводя грех до рантайма 🤞
