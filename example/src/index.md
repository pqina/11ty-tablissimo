<!-- basic styles, for demo purposes -->
<style>
table {
    border-collapse: collapse;
}

td, th {
    border: 1px solid #ddd;
}
</style>

## Basic table with row headers

{% tablissimo %}
_foo_
0
a

_bar_
1
b

_baz_
2
c
{% endtablissimo %}

```
{% raw %}
{% tablissimo %}
_foo_
0
a

_bar_
1
b

_baz_
2
c
{% endtablissimo %}
{% endraw %}
```

## Basic table using custom shortcode

{% tbl %}
_foo_
0
a

_bar_
1
b

_baz_
2
c
{% endtbl %}

```
{% raw %}
{% tbl %}
_foo_
0
a

_bar_
1
b

_baz_
2
c
{% endtbl %}
{% endraw %}
```

## Basic table with header

{% tablissimo %}
head: fobaba | number | character

_foo_
0
a

_bar_
1
b

_baz_
2
c
{% endtablissimo %}

```
{% raw %}
{% tablissimo %}
head: fobaba | number | character

_foo_
0
a

_bar_
1
b

_baz_
2
c
{% endtablissimo %}
{% endraw %}
```

## Basic table with row anchors

{% tablissimo %}
head: fobaba | number | character

_foo#_
0
a

_bar#my-custom-anchor_
1
b

_baz#_
2
c
{% endtablissimo %}

```
{% raw %}
{% tablissimo %}
head: fobaba | number | character

_foo#_
0
a

_bar#my-custom-anchor_
1
b

_baz#_
2
c
{% endtablissimo %}
{% endraw %}
```

## Table with date formatter

{% tablissimo %}
head: fobaba | number | character | date
body: | | | =date

_foo_
0
a
2021

_bar_
1
b
2020

_baz_
2
c
2019
{% endtablissimo %}

```
{% raw %}
{% tablissimo %}
head: fobaba | number | character | date
body: | | | =date

_foo_
0
a
2021

_bar_
1
b
2020

_baz_
2
c
2019
{% endtablissimo %}
{% endraw %}
```

## Table with markdown

{% tablissimo %}
head: fobaba | number | character | date | markdown
body: | | | =date | =markdown

_foo_
0
a
2021
Hello _World_

_bar_
1
b
2020
This `is` nice!

_baz_
2
c
2019
Easy [going](#going)

{% endtablissimo %}

```
{% raw %}
{% tablissimo %}
head: fobaba | number | character | date | markdown
body: | | | =date | =markdown

_foo_
0
a
2021
Hello _World_

_bar_
1
b
2020
This `is` nice!

_baz_
2
c
2019
Easy [going](#going)

{% endtablissimo %}
{% endraw %}
```

## Loki table

{% tablissimo "loki" %}
id: my-loki-table-id
class: my-loki-table-class
data-variant: Loki
caption: TVA Timeline Disruptions
head: Event | Date | Time | Location
body: =code | =date | | =location

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
{% raw %}
{% tablissimo "loki" %}
id: my-loki-table-id
class: my-loki-table-class
data-variant: Loki
caption: TVA Timeline Disruptions
head: Event | Date | Time | Location
body: =code | =date | | =location

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
{% endraw %}
```
