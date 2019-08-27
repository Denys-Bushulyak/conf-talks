# Не всё так просто с GraphQL

## Секция A) Британ... Бразильские ученные

[Migrating to GraphQL: A Practical Assessment](https://arxiv.org/abs/1906.07535?fbclid=IwAR2bxA2sXbAQSuRLPR5kTpX30fwbJ6cxIJZMLFN-4TggOMDo2-nref2OGL0).

- Gleison Brito, PhD 1993 года рождения, <https://twitter.com/glebritto>
- Thais Mombach
- Marco Tulio Valente, Associate Professor (Доцент), <https://twitter.com/mtov>, <https://homepages.dcc.ufmg.br/~mtov/>

As our key result, we show that GraphQL can reduce the size of the JSON documents returned by REST APIs in 94% (in number of fields) and in 99% (in number of bytes), both median results.

## Секция B) Ошибки фронтендера

1) Нет понимания, что такое фрагменты, что их надо хранить в одном файле с React компонентой. А если файл большой, то уносить под-фрагмент и кусок React-компонента в новый под-файл.

2) Query должны лежать и вызываться на уровне роутинга (в 95% случаев). Это связано с тем, что сломаны get-параметры в browser-history. Точнее этих get-параметров вообще не существует, т.к. не сложилось связки в голове между параметрами из адресной строки и переменными для GraphQL-запроса. И как результат, нельзя скопировать ссылку и открыть в новом окне тот же результат.

3) На сервере код выносим в общие методы. А вот на клиенте с GraphQL-запросами и фрагментами необходимо использовать фрагментную модель. Т.е. общих запросов и фрагментов априори не должно существовать. Один компонент = один фрагмент. И ниоткуда он не должен импортироваться. Если два разных компонента используют один и тот же фрагмент, то фрагменты должны быть записаны два раза, чтоб в будущем их можно было спокойно менять и не бояться что где-то что-то сломается в другом месте.

## Секция C) Фрагментная модель

<https://www.youtube.com/watch?v=Vo8nqjiKI3A>
<https://speakerdeck.com/mjmahone/scaling-your-graphql-client>

Это реальная история Фейсбука о том, как он писал модели, как получал данные и работал с ними. И как эволюционировал со временем, решая те или иные проблемы. Фейсбук прошел следующие этапы:

- 1) JSON Models
- 2) Type Models (использование типизации из серверной схемы)
- 3) Response Models (типизация на уровне запроса)
- 4) Fragment Models (инкапсуляция необходимых данных)

### 1) JSON Models

По спецификации GraphQL возвращает JSON. И чтобы работать с ответом от сервера, вы первым делом захотите переиспользовать практики наработанные с REST API. К примеру, воспользуетесь JSON моделью:

```java
interface JSONModel {
  @Nullable String getString(String key);
  @Nullable Int getInt(String key);
  @Nullable JSONModel getJSON(String key);
}
```

И когда захотите прочитать следующий ответ:

```graphql
fragment UserProfile on User {
  picture {
    url
    about
  }
}
```

То ваш код компоненты с JSON моделью будет выглядеть так:

```java
class UserProfileComponent {
  Component render(JSONModel model) {
    JSONModel pic = model.getJSON("picture");
    String uri = pic.getString("uri");
    int about = model.getInt("about");
  }
}
```

И при таком подходе мы столкнемся со следующими проблемами:

#### Проблема 1.1: Опечатки (typos)

Запрашиваем `url`, а считываем в модели `uri`:

```diff
fragment UserProfile on User {
  picture {
-    url
+    url
    about
  }
}

class UserProfileComponent {
  Component render(JSONModel model) {
    JSONModel pic = model.getJSON("picture");
-    String uri = pic.getString("uri");
+    String url = pic.getString("url");
    int about = model.getInt("about");
  }
}
```

#### Проблема 1.2: Отсутствие типовой безопасности (type safety):

Запрашиваем поле `about: String`, а в моделе оно считывается как `Int`:

```diff
fragment UserProfile on User {
  picture {
    url
-    about
+    about
  }
}

class UserProfileComponent {
  Component render(JSONModel model) {
    JSONModel pic = model.getJSON("picture");
    String url = pic.getString("url");
-    int about = model.getInt("about");
+    String about = model.getString("about");
  }
}
```

#### Проблема 1.3: Недополучения данных (underfetch):

Это когда мы используем данные в нашей компоненте, но при этом их не запрашиваем/получаем с сервера:

```diff
fragment UserProfile on User {
  picture {
    url
    about
+    width
  }
}

class UserProfileComponent {
  Component render(JSONModel model) {
    JSONModel pic = model.getJSON("picture");
    String url = pic.getString("url");
-    int width = model.getInt("width");
+    int width = model.getInt("width");
  }
}
```

#### Проблема 1.4: Получение лишних данных (overfetch):

C JSON очень легко получить больше данных, чем вам надо. Обычно это не считают проблемой, НО запрос каждого лишнего поля тратит время на получение его из базы, передачи по сети и парсинге значения на клиенте **(страдают впустую все, кроме ленивого разработчика 🤓)**:

```diff
fragment UserProfile on User {
  picture {
    url
    width
-    about
-    createdAt
  }
}

class UserProfileComponent {
  Component render(JSONModel model) {
    JSONModel pic = model.getJSON("picture");
    String url = pic.getString("url");
    int width = model.getInt("width");
  }
}
```

#### Вывод по JSON Models

С `JSON Models` вы получите следующие ошибки:

- Опечатки (typos)
- Отсутствие типовой безопасности (type safety)
- Недополучения данных (underfetch)
- Получение лишних данных (overfetch)

Не желательно использовать JSON Models в больших приложениях и командах. С горем пополам можно использовать если:

- код пишет один человек
- контролируете код и сервера, и клиента
- стабильные типы, редко меняющиеся
- очень мальнькие запросы
- можете протестировать каждое изменение

### 2) Type Models

Основа в `Type Models` это генерация моделей из схемы, которую предоставляет вам сервер. Очень часто такой подход используется со Swagger'ом в REST API.

Получили описание серверного типа:

```graphql
type Image {
  url: URL!
  width: Int!
}
```

Сгенерировали модель со всеми полями:

```java
interface ImageModel {
  URL getUrl();
  int getWidth();
}
```

Такой подход достаточно хорошо скейлится в рамках одной команды.

#### Проблема 2.1: Алиасы

Допустим вам требуется запросить ссылки на изображения разного размера:

```graphql
fragment SquareImage on HasImage {
  smallPic: image(width: 40) {
    url
  }
  bigPic: image(width: 400) {
    url
  }
}
```

Сами модели, которые вы сгенерировали на базе серверных типов не будут содержать `alias`-полей. Вот есть поле `image` и геттер `getImage` для него. Так вот какое значение будет возвращаться `smallPic` или `bigPic`?

```java
Component render(HasImageModel model) {
  ImageModel smallPic = model.getImage();
  ...
}
```

Т.е. GraphQL-алиасы не получится использовать с `Type Models`. А терять фичу получения данных для "управляемых/настраевыемых" полей через аргументы не шибко хочется.

#### Проблема 2.2: Масштабирование

В Фейсбуке приблизительно

- ~30'000 типов
- ~200'000 полей

Представьте сколько классов и геттеров сгененрируется на базе серверной схемы! Что теперь весь сгененрированный код надо включать во все приложения и клиенты, которые могу использовать только сотую часть от всей схемы?! Это ужасно неоптимально. Чистить руками сгенерированный код, тоже не шибко интересная затея.

#### Вывод по Type Models

- ~~Опечатки (typos)~~
- ~~Отсутствие типовой безопасности (type safety)~~
- Недополучения данных (underfetch)
- Получение лишних данных (overfetch)

Генерация моделей из серверной схемы спасает от опечаток (typos) и отсутствия типовой безопасности (type safety).

Но проблема underfetch сохраняется: Если вы не запросили поле в запросе, то вы все равно сможете ошибочно вызвать это поле в вашей компоненте и нарваться на грех в рантайме (cannot read property of null, null pointer exception).

И проблема overfetch тоже никуда не девается: например вы упростили компоненту, перестав использовать какое-то поле и вдруг забыли удалить его в GraphQL-запросе, то вы будете тянуть данные ненужного поля на клиент. Ок, вы можете быть супер ответственным и удалить это поле и в запросе, но бац и приложение упало с проблемой `underfetch` – оказывается кто-то данные этого поля использует в другой части приложения. Т.е. если я удалил поле, то я должен пробежаться по всему приложению, чтобы убедиться в том, что его больше никто не использует.

Проблемы:

- Когда много команд
  - Все команды шаряи между собой одну гигантскую библиотеку моделей типов
  - ИЛИ нет переиспользуемых компонентов/запросов между командами
  - ИЛИ разбивка на "собственные болота"
    - выбор верного болота или создавай свое
- Билды приложения могу ломаться, если другие команды удаляют поля из GraphQL-запросов

### 3) Response Models

TODO: 16-35

### 4) Fragment Models

TODO:

-----

Допустим мы начали разрабатывать некое приложение с использованием компонентного подхода. И нам необходимо отобразить фотографию и подпись под ней:

<img width="810" alt="Screen Shot 2019-08-27 at 9 43 16 PM" src="https://user-images.githubusercontent.com/1946920/63786365-c3ea8900-c913-11e9-898b-faad03901332.png">

Для отображения такой компоненты нам необходим следующий JSON ответ от сервера:

```json
{
  "picture": {
    "url": "https://some-cdn.de/1234"
  },
  "about": "I am clearly not a designer"
}
```

Получение такого вида данных можно описать с помощью следующего GraphQL-фрагмента

```graphql
fragment UserProfile on User {
  picture(width: 40) {
    url
  }
  about
}
```

-----

Павел Черторогов
ps.kz, Архитектор информационных систем
<https://www.dropbox.com/s/22mncow425wsvwu/%20HolyJS%20%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%D1%8B%20%D1%81%D0%BF%D0%B8%D0%BA%D0%B5%D1%80%D0%BE%D0%B2-53.jpg?dl=0>

GraphQL-гуру, консультант и тренер, разработчик интернет-продуктов, опенсорс-мейнтейнер. С 2001 года основная специализация - веб-технологии. Обладает обширными практическими знаниями по бэкенду, фронтенду, администрированию и построению архитектуры. С конца 2015 года делает основной упор на изоморфные приложения. Летом 2016 начал разработку graphql-compose (генератора GraphQL-схем) в опенсорсе.

Twitter - @nodkz
Telegram - <https://t.me/graphql_ru>
GitHub - <https://github.com/nodkz>
