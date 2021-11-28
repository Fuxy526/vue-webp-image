# vue-webp-image

<p>
  <a href="https://www.npmjs.com/package/vue-webp-image"><img src="https://img.shields.io/npm/v/vue-webp-image.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-webp-image"><img src="https://img.shields.io/npm/dt/vue-webp-image.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-webp-image"><img src="https://img.shields.io/npm/l/vue-webp-image.svg" alt="License"></a>
</p>

A vue directive help check browser webp support and use the appropriate image format.

- Compatible with Vue3 and Vue2
- Lightweight (700b)

## Installation

```sh
npm install vue-webp-image --save
```

## Usage

#### main.js

- Vue3

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueWebpImage from 'vue-webp-image';

const app = createApp(App);
app.use(VueWebpImage);
app.mount('#app');
```

- Vue2

```javascript
import Vue from 'vue';
import VueWebpImage from 'vue-webp-image';

Vue.use(VueWebpImage);
```

#### Component

- webp:src - use with `img` tag

```html
<!-- local image -->
<img
  webp:src="require('./assets/image.webp')"
  :src="require('./assets/image.jpg')"
/>
<!-- online image -->
<img
  webp:src="'https://www.xxx.com/image.webp'"
  :src="'https://www.xxx.com/image.jpg'"
/>
```

- webp:bg - use css `background-image` property

```html
<div
  class="bg-container"
  webp:bg="require('./assets/image.webp')"
></div>

<style>
.bg-container {
  background-image: url('./assets/image.jpg');
}
</style>
```

- webp:bgs - use css `background-image` property (put webp source and original source in an array)

```html
<div
  webp:bgs="['require('./assets/image.webp')', 'require('./assets/image.jpg')']"
></div>
```