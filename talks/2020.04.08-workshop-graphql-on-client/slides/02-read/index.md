# #2

# Чтение данные с GraphQL-сервера через ApolloClient

-----

## 👀 Вводная презентация по Архитектуре Apollo

- Network Layer (HttpLink и прочие миддлвары)
- Нормализованный Store
- Разница в сторах ApolloClient 2, Relay, ApolloClient 3 (примеры ужасных сторов)

<https://nodkz.github.io/conf-talks/talks/2019.05.24-holyjs-piter/index.html#/4>

-----

## 👏 Настраиваем ApolloClient

- Делаем запрос на сервер напрямую через ApolloClient
- Что такое graphql-tag, оптимизация через babel-macros
- Настройка Store через type & field policies.

-----

## 👀 Настраиваем SSR для ApolloClient в NextJS

-----

## 👏 Написание простого запроса на получение данных

- &lt;Query&gt;, useQuery(), useLazyQuery()
- Женим роутинг и GraphQL-запросы
- Пишем свой React-хук для пагинации и роутинга

-----

## 👀 GraphQL-фрагменты

Вводная презентация по Response & Fragment models

<https://nodkz.github.io/conf-talks/talks/2019.11.08-holyjs-moscow/index.html#/2>
<https://www.youtube.com/watch?v=0bpZiMVJh14>

-----

## 👏 GraphQL-фрагменты

- Разбиваем страницу на компоненты и фрагменты
- Статическая типизация через дженерики (в хуках, или TypedQuery)

-----

## 👀 Проверям статическую типизацию

- Просим несуществующие поля
- Меняем запрос/фрагмент
- "Ломаем" сервер по заявкам трудящихся (меняем схему)

-----

## 👏 Кодогенерация

- Настройка graphql-code-generator
- Рефакторим код, выбрасываем ненужное

-----

## 📣 Вопросы?
