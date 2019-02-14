# Call function once

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/once-only.svg
[npm-url]: https://www.npmjs.com/package/once-only
[downloads-image]: https://img.shields.io/npm/dw/once-only.svg
[issues-image]: https://img.shields.io/github/issues/doasync/once-only.svg
[issues-url]: https://github.com/doasync/once-only/issues
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

Create a once-only function and it will be never repeated

## Installation

```bash
npm install once-only
```
or
```bash
yarn add once-only
```

## Usage

```js
import { onceOnly } from 'once-only'
```

Create:

```js
const createUserOnce = onceOnly(createUser);
```

Original function will be called only once. It returns cache on a repeated call:

```js
const currentUser = createUserOnce({ userId: 234 });
```

You can pass configuration object to `onceOnly` as a second argument:

## API

### Configuration options:

You can pass config as a second argument.

Default values are: `{ attach: false, strict: false }`

#### `attach` option

Attach `once` function to the original function:

```js
onceOnly(fetchCompany, { attach: true });
```

Then call it:

```js
const promise = fetchCompany.once({ companyId: 11 });
```

#### `strict` option

You can throw an error when a function is called more than once:

```js
const getIdOnceOnly = onceOnly(getId, { strict: true });
const users = getIdOnceOnly({ userId: 234 }); // Throws an error
```

### Static properties of a once-only function:

Returned function has two static properties (as well as an attached `once` function):

#### `.called`
```js
console.log(fetchUsersOnce.called); // true or false
```

#### `.cache`
```js
console.log(fetchUserOnce.cache); // function: () => cache
const result = fetchUserOnce.cache(); // call cache getter
console.log(result); // logs the result of the first function call
```

## Tip

If you found this packeage useful, please star it on [GitHub](https://github.com/doasync/use-promise) ★

---

### Definition of "once-only" in English

**once-only** _adjective_

That occurs, operates, etc., on one occasion only.

_Origin:_

1960s; earliest use found in The Sunday Express.

**once-only** in British _adjective_

(ˌwʌnsˈəʊnlɪ)

never to be repeated

_Examples:_

- This is a once-only offer.
- This once-only opportunity to select one of these books absolutely free
- Membership is valid for ten years for a once-only donation of £2,500.

_^Collins English Dictionary. Copyright © HarperCollins Publishers_

### Author
@doasync

### Licence
MIT
