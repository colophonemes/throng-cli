# Throng CLI

A tiny CLI wrapper for [Throng](https://github.com/hunterloftis/throng)

## Install

```
# Global
npm install --g throng-cli
# Local
npm install --save throng-cli
```

## Usage

```
throng -s ./index.js -w 4
```

Help:
```
 Usage: cluster [options]

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -s, --script <path>  Full path to script file to cluster
    -w, --workers <n>    Number of workers to spawn (default: CPU count)
    -l, --lifetime <n>   ms to keep cluster alive (default: Infinity)
    -g, --grace <n>      ms grace period after worker SIGTERM (default: 5000)
```

Options are passed [straight to Throng](https://github.com/hunterloftis/throng#all-options-with-defaults)

## Use as a basic process manager with NPM

Add to your `package.json`:

```json
"scripts": {
    "start": "node ./app.js",
    "start:cluster": "throng -s ./app.js -w 4"
}
```
