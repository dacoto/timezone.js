<p align="center">
<img src="timezone.png"  height="100">
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@dacoto/timezone.js"><img src="https://img.shields.io/npm/dt/@dacoto/timezone.js.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/@dacoto/timezone.js"><img src="https://img.shields.io/npm/v/@dacoto/timezone.js.svg" alt="Latest Stable Version"></a>
<a href="https://www.npmjs.com/package/@dacoto/timezone.js"><img src="https://img.shields.io/npm/l/@dacoto/timezone.js.svg" alt="License"></a>
<a href="https://github.com/dacoto/timezone.js"><img src="https://img.shields.io/github/last-commit/dacoto/timezone.js.svg" alt="Last commit"></a>
</p>

<h1 align="center">Timezone.js</h1>

A library to obtain the list of time zones.

## Installation

``` cmd
// npm install
npm install @dacoto/timezone.js

// yarn install
npm add @dacoto/timezone.js
```

## Usage

##### Include

``` cmd
    import Timezone from '@dacoto/timezone.js';
```
or
``` cmd
    <script src="dist/timezone.js"></script>
```
##### Use in javascript

- List time zones

``` cmd
    Timezone.getAll(); // {"Pacific/Niue":"(GMT-11:00) Niue","Pacific/Pago_Pago":"(GMT-11:00 ...
```

- Get time zone name

``` cmd
    Timezone.getTimezone('Europe/Madrid'); // (GMT+01:00) Madrid
```

## License

MIT