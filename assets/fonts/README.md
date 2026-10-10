# Локальные шрифты SLOT

В `fonts.css` подключены WOFF2-файлы из Google Fonts. Выбраны доступные латинские и кириллические подмножества; пути локальные, `font-display: swap` сохранён.

| Шрифт | Назначение | Источник и лицензия |
| --- | --- | --- |
| Poppins | Логотип, латинские заголовки и цифры; веса 500/600/700 | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/poppins), [OFL](OFL-poppins.txt) |
| Roboto | Русские заголовки, основной текст и интерфейс; веса 400–700 | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/roboto), [OFL](OFL-roboto.txt) |
| Inconsolata | Короткие латинские и числовые подписи, вес 400 | [Google Fonts](https://github.com/google/fonts/tree/main/ofl/inconsolata), [OFL](OFL-inconsolata.txt) |

Все три семейства указаны в рекомендациях Clean. Для кириллицы после Poppins и Inconsolata в стеке предусмотрен Roboto. Вместе с сайтом публиковать `fonts.css`, все WOFF2 и тексты лицензий. Установка шрифтов в систему не требуется.
