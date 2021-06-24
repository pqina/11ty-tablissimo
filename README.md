# 11ty Tablissimo

## Installation

Installing the plugin module

```
npm i @pqina/11ty-tablissimo
```

Setting up the plugin in `.eleventy.js`

```js
const tablissimo = require('@pqina/11ty-tablissimo');

module.exports = function (eleventyConfig) {
    // add 11ty-tablissimo plugin
    eleventyConfig.addPlugin(tablissimo, {
        // add additional shortcode to use next to {% tablissimo %}
        shortcode: 'tbl',

        // set up our cell text formatters { formatterName : (str) => (str) }
        format: {
            // format string as date
            date: (str) =>
                new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
                    new Date(str)
                ),

            // format string as location with link to openstreetmap
            location: (str) =>
                /,/.test(str)
                    ? `<a href="https://www.openstreetmap.org/?query=${str}" target="_blank" rel="noreferrer" title="Show ${str} on map">${str}</a>`
                    : str,
        },
    });
};
```

## Usage

How to use the `{% tablissimo %}` shortcode in your templates.

```
{% tablissimo %}
:caption: TVA Timeline Disruptions
:head: Event | Date | Time | Location
:body: | format(date) | | format(location)

_46465189=703_
2301-04-23
08:39:42
Vormir

_46462044=066_
1551-10-25
18:09:34
Thorton, USA

_46443278=421_
1999-11-22
08:02:13
Cookeville, USA

_46420987=051_
2004-02-16
14:21:03
Asgard

_46432678=042_
1390-10-03
03:01:24
Rome, Italy
{% endtablissimo %}
```
