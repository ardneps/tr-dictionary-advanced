# 📖 tr-dictionary-advanced

[![package-image]][package-url]  [![License: MIT][license-image]][license-url] [![install-image]][install-url] [![Awesome Badges][badges-image]][badges-url] [![made-with-Markdown][markdown-image]][markdown-url]

[![NPM][npm-image]][npm-url]

# tr-dictionary ve tr-dictionary-advanced Arasındaki Farklar

| Özellik | tr-dictionary | tr-dictionary-advanced |
|:--------|:--------------|:-----------------------|
| Yapılabilecekler | Sözlükte kelime aratma | Sözlükte kelime, atasözü/deyim, terim anlamlı sözcük, kişi adı aratma |
| Kelime aratma | Kelimenin birinci, ikinci ve üçüncü anlamı; fiil, çoğul, özel olup olmadığı; kökeni, kelimenin kullandığı cümle ve atasözü/deyim örneği | tr-dictionary'de olanların tümü + kelimenin telaffuzunun bulunduğu ses dosyası bağlantısı (.wav formatında) ve kelimenin yalın hali |
| Atasözü/Deyim aratma | Yok | Sözün yalın hali, sözün anlamı, sözün çeşidi (atasözü/deyim), sözün içerisindeki anahtar kelimeler |
| Terim anlamlı sözcük aratma | Yok | Kelimenin yalın hali, kelimenin terim anlamı; kelimenin İngilizce, Almanca, Fransızca ve Latince karşılığı |
| Kişi adı aratma | Yok | Kişi adının yalın hali, anlamı ve genellikle kullanıldığı cinsiyet |

# Kurulum
```batch
npm install tr-dictionary-advanced
```
# Kullanım

> Modülün kullanımı açıklamasında da bahsedildiği üzere oldukça basit, fakat modülün çalışma yapısı asenkron yapıda olduğu için modülü kullanırken "async-await" veya ".then()" yapılarını kullanmanız gerekiyor.

Sözlükte kelime aratma:
---
```js
const tdk = require("tr-dictionary-advanced");

tdk.getMeaning("araba").then(veri => {

    // kodunuz..

    console.log(veri);

});

/* Sonuç:
{
  kelime: 'araba',
  anlam: 'Tekerlekli, motorlu veya motorsuz her türlü kara taşıtı',
  ikinci_anlam: 'Bu taşıtın aldığı miktarda olan',
  ucuncu_anlam: 'Bu kelimenin üçüncü bir anlamı bulunmuyor.',
  fiil_mi: false,
  ozel_mi: false,
  cogul_mu: false,
  koken: 'Türkçe',
  ornek: 'Sarhoşların araba sürmeleri sakıncalıdır.',
  atasozu_deyim: 'araba devrilince yol gösteren çok olur',
  sesURL: 'https://sozluk.gov.tr/ses/a3672.wav'
}
*/
```

Sözlükte atasözü/deyim aratma:
---
```js
const tdk = require("tr-dictionary-advanced");

async function myDictionary(sorgu) {

    const veri = await tdk.getSaying(sorgu);

    // kodunuz..

    console.log(veri);

};

/*
atasözünün tamamen aynısını yazmanıza gerek yok,
örneğin bu örnekte "sakla samanı, gelir zamanı" yerine
"sakla samanı" şeklinde aratsaydık sonuç yine aynı olurdu.
*/ 

myDictionary("sakla samanı, gelir zamanı");
myDictionary("sakla samanı");

/* Sonuç:(x2)
{
  soz: 'sakla samanı, gelir zamanı',
  anlam: 'gereksiz görülen şey ileride gerekli olabilir.',
  cesit: 'Atasözü',
  anahtar_kelimeler: 'saklamak, gelmek'
}
*/
```

Sözlükte terim anlamlı sözcük aratma:
---
```js
const tdk = require("tr-dictionary-advanced");

tdk.getTermMeaning("hakem").then(veri => {

    // kodunuz..

    console.log(veri);

});

/* Sonuç:
{
  kelime: 'hakem',
  anlam: 'Oyunun kurallara uygun olarak yönetilmesinden sorumlu olan ve kararlarına uyulması gereken görevli.',
  ingilizce: 'referee',
  almanca: 'Schiedsrichter',
  fransizca: 'Bu kelimenin bir Fransızca karşılığı bulunmuyor.',
  latince: 'Bu kelimenin bir Latince karşılığı bulunmuyor.'
}
*/
```

Sözlükte kişi adı aratma:
---
```js
const tdk = require("tr-dictionary-advanced");

const myDictionary = async (sorgu) => {

    const veri = await tdk.getNameMeaning(sorgu);

    // kodunuz..

    console.log(veri);

};

myDictionary("arda");

/* Sonuç:
{
  isim: 'Arda',
  anlam: '1. Hükümdar veya kumandan asası. 2. İşaret olarak yere dikilen çubuk. 3. Sonra gelen.4. Meriç ırmağının Edirne yöresindeki önemli bir kolu. 5. Uygur yazılarında geçen çok eski bir Türk adı. ',
  cinsiyet: 'Erkek'
}
*/
```


# Lisans

- [MIT](https://github.com/berkayfazlioglu/tr-dictionary-advanced/blob/master/LICENSE)

[package-url]: http://npmjs.org/package/tr-dictionary-advanced
[package-image]: https://badge.fury.io/js/tr-dictionary-advanced.svg

[install-url]: https://packagephobia.com/result?p=tr-dictionary-advanced
[install-image]: https://packagephobia.com/badge?p=tr-dictionary-advanced

[npm-url]: https://nodei.co/npm/tr-dictionary-advanced/
[npm-image]: https://nodei.co/npm/tr-dictionary-advanced.png?downloads=true&downloadRank=true&stars=false

[license-url]: https://lbesson.mit-license.org/
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg

[badges-url]: https://github.com/Naereen/badges
[badges-image]: https://img.shields.io/badge/badges-awesome-green.svg

[markdown-url]: http://commonmark.org
[markdown-image]: https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg