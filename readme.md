# rollup-plugin-delete

Delete files and folders using Rollup.

## About

This plugin is useful when you want to clean `dist` or other folders and files before bundling. It's using [del package](https://github.com/sindresorhus/del) inside, check it for pattern examples.

## Installation

```bash
# pnpm
pnpm add rollup-plugin-delete -D

# yarn
yarn add rollup-plugin-delete -D

# npm
npm install rollup-plugin-delete -D
```

## Usage

```js
// rollup.config.js
import del from 'rollup-plugin-delete'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/app.js'
  },
  plugins: [
    del({ targets: 'dist/*' })
  ]
}
```

### Configuration

There are some useful options:

#### targets

A string or an array of patterns of files and folders to be deleted. Default is `[]`.

```js
del({
  targets: 'build'
})

del({
  targets: 'dist/*.js'
})

del({
  targets: ['dist/*', 'images/*.webp']
})
```

#### verbose

Output removed files and folders to console. Default is `false`.

```js
del({
  targets: 'dist/*',
  verbose: true
})
```

> Note: use \* (wildcard character) in pattern to show removed files

#### hook

[Rollup hook](https://rollupjs.org/plugin-development/#build-hooks) the plugin should use. Default is `buildStart`.

```js
del({
  targets: 'dist/*',
  hook: 'buildEnd'
})
```

#### runOnce

Type: `boolean` | Default: `false`

Delete items once. Useful in watch mode.

```js
del({
  targets: 'dist/*',
  runOnce: true
})
```

All other options are passed to [del package](https://github.com/sindresorhus/del) which is used inside.

## License

MIT
