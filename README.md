# NewsAnalyzer

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/vcw/ya-praktikum-final/level-1?label=Версия)

NewsAnalyzer — моя последняя работа в Я.Практикуме. Здесь я применил навыки, полученные за время обучения.

Этот сервис позволяет найти по ключевому слову статьи за последнюю неделю и посмотреть статистику их публикации по дням.

Функциональность реализована с помощью нативного JavaScript, а для сборки использован Webpack.

Посмотреть на результат можно [здесь](https://vcw.github.io/ya-praktikum-final/)

## Чтобы развернуть проект, проделайте три шага

1. Клонируйте этот репозиторий. Для этого используйте команду:
```bash
git clone https://github.com/vcw/ya-praktikum-final.git
```

2. Зайдите в директорию с помощью команды `cd ya-praktikum-final`

3. Установите все зависимости. Если вы предпочитаете npm, то `npm i`, если yarn, то `yarn install`

## Дальнейшие шаги

- `npm run dev` или `yarn run dev`, чтобы запустить проект в режиме разработчика и сделать его доступным по адресу `http://localhost:9000`
- `npm run build` или `yarn run build`, чтобы собрать проект в директорию dist

После сборки проекта результат можно задеплоить, для этого есть команда `npm run deploy` или `yarn run deploy`
