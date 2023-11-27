# vue3-google-icon

Vue 3 wrapper component for Google Material Icons.

## Installation

You can install the package via npm:

```bash
npm install vue3-google-icon
```

## Usage

use plugin.
```vue
<script>
import { IconPlugin } from "vue3-google-icon"

createApp(App)
    .use(IconPlugin)
    .mount('#app')
</script>
```

or
```vue
<script setup lang="ts">
import { Icon } from "vue3-google-icon"
</script>

<template>
    <Icon type="home" color="blue"/>
</template>
```

### Props

- `type` (string): The name of the Google Material Icon.
- `color` (string?): The color of the icon.
- `size` (string?): The size of the icon.
- `fill` (number?): Fill value for the icon.
- `weight` (number?): Weight of the icon.
- `grade` (number?): Grade of the icon.
- `opticalSize` (number?): Optical size of the icon.

## Google Material Icons

This package is a wrapper around [Google Material Icons](https://material.io/resources/icons/), a collection of delightful, beautifully crafted symbols for common actions and items.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
