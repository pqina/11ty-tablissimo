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
        // add additional shortcode to use in parallel with {% tablissimo %}
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

Tablissimo tables consist of collections of cels separatad by two newlines. Each collection is a single row.

```
Tony Stark
1970-05-29

Peter Parker
2001-08-10

Loki Laufeyson
965-12-17
```

Turns into this table

<table>
    <tbody>
        <tr>
            <td>Tony Stark</td>
            <td>1970-05-29</td>
        </tr>
        <tr>
            <td>Peter Parker</td>
            <td>2001-08-10</td>
        </tr>
        <tr>
            <td>Loki Laufeyson</td>
            <td>965-12-17</td>
        </tr>
    </tbody>
</table>

We can underscores around a row to turn the row into a `th`.

```
_Tony Stark_
1970-05-29

_Peter Parker_
2001-08-10

_Loki Laufeyson_
965-12-17
```

<table>
    <tbody>
        <tr>
            <th>Tony Stark</th>
            <td>1970-05-29</td>
        </tr>
        <tr>
            <th>Peter Parker</th>
            <td>2001-08-10</td>
        </tr>
        <tr>
            <th>Loki Laufeyson</th>
            <td>965-12-17</td>
        </tr>
    </tbody>
</table>

We can add an anchor tag to a row to automatically generate a link to a section with the same name.

```
_Tony Stark#_
1970-05-29

_Peter Parker#spiderman_
2001-08-10

_Loki Laufeyson#_
965-12-17
```

<table>
    <tbody>
        <tr>
            <th scope="row"><a href="#tony-stark">Tony Stark</a></th>
            <td>1970-05-29</td>
        </tr>
        <tr>
            <th scope="row"><a href="#spiderman">Peter Parker</a></th>
            <td>2001-08-10</td>
        </tr>
        <tr>
            <th scope="row"><a href="#loki-laufeyson">Loki Laufeyson</a></th>
            <td>965-12-17</td>
        </tr>
    </tbody>
</table>

We can add metadata to format table body cells, first we add the formatter to our configuration then we add it in the table.

```js
eleventyConfig.addPlugin(tablissimo, {
    format: {
        date: (str) =>
            new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
                new Date(str)
            ),
    },
});
```

Now we add it to the `:body:` metadata tag. This tags value will be applied to each cell with the same index, note that we start with a pipe character, meaning the first cell is handled as plain text.

A `data-format` attribute is automatically added to the cell to make styling easier.

```
:body: | format(date)

_Tony Stark#_
1970-05-29

_Peter Parker#spiderman_
2001-08-10

_Loki Laufeyson#_
965-12-17
```

<table>
    <tbody>
        <tr>
            <th scope="row"><a href="#tony-stark">Tony Stark</a></th>
            <td data-format="date">Friday, May 29, 1970</td>
        </tr>
        <tr>
            <th scope="row"><a href="#spiderman">Peter Parker</a></th>
            <td data-format="date">Friday, August 10, 2001</td>
        </tr>
        <tr>
            <th scope="row"><a href="#loki-laufeyson">Loki Laufeyson</a></th>
            <td data-format="date"> Tuesday, December 17, 965</td>
        </tr>
    </tbody>
</table>

Using the `:head:` metadata tag we can define headers for the table.

```
:head: Name | Birthdate
:body: | format(date)

_Tony Stark#_
1970-05-29

_Peter Parker#spiderman_
2001-08-10

_Loki Laufeyson#_
965-12-17
```

<table>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Birthdate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><a href="#tony-stark">Tony Stark</a></th>
            <td data-format="date">Friday, May 29, 1970</td>
        </tr>
        <tr>
            <th scope="row"><a href="#spiderman">Peter Parker</a></th>
            <td data-format="date">Friday, August 10, 2001</td>
        </tr>
        <tr>
            <th scope="row"><a href="#loki-laufeyson">Loki Laufeyson</a></th>
            <td data-format="date">Tuesday, December 17, 965</td>
        </tr>
    </tbody>
</table>

Using the `:caption:` metadata tag we can define a table caption element.

Additionally we can use `:class:` and `:id:` to add the respective attributes to the table element.

```
:id: marvel-characters
:caption: Marvel Characters
:head: Name | Birthdate
:body: | format(date)

_Tony Stark#_
1970-05-29

_Peter Parker#spiderman_
2001-08-10

_Loki Laufeyson#_
965-12-17
```

<table>
    <caption>Marvel Characters</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Birthdate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><a href="#tony-stark">Tony Stark</a></th>
            <td data-format="date">Friday, May 29, 1970</td>
        </tr>
        <tr>
            <th scope="row"><a href="#spiderman">Peter Parker</a></th>
            <td data-format="date">Friday, August 10, 2001</td>
        </tr>
        <tr>
            <th scope="row"><a href="#loki-laufeyson">Loki Laufeyson</a></th>
            <td data-format="date">Tuesday, December 17, 965</td>
        </tr>
    </tbody>
</table>

We can use `colspan(<number>)` to span a cell over multiple columns. `id(my-id)` and `class(my-class)` can be used to add id's and classes to table cells.

```
:caption: Marvel Characters
:head: Hero colspan(2)
:body: | format(date)

_Tony Stark#_ class(highlight)
1970-05-29

_Peter Parker#spiderman_
2001-08-10

_Loki Laufeyson#_
965-12-17
```

<table>
    <thead>
        <tr>
            <th scope="col" colspan="2">Hero</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><a href="#tony-stark">Tony Stark</a></th>
            <td data-format="date">Friday, May 29, 1970</td>
        </tr>
        <tr>
            <th scope="row"><a href="#spiderman">Peter Parker</a></th>
            <td data-format="date">Friday, August 10, 2001</td>
        </tr>
        <tr>
            <th scope="row"><a href="#loki-laufeyson">Loki Laufeyson</a></th>
            <td data-format="date">Tuesday, December 17, 965</td>
        </tr>
    </tbody>
</table>

The `scope` attribute can be used to control the scope of a table header. If a `<th>` is rendered this attribute is automatically set to `row` or `col` depending on if the cell is in the `<tbody>` or the `<thead>` tree.

## Example

A quick example on how to use the `{% tablissimo %}` shortcode in your templates. View the `/example` directory for an example project.

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
