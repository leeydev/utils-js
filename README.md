# Utils JS

JavaScript utility functions library

## Installation

```bash
npm install utils-js
```

## Usage

```javascript
const utils = require('utils-js');

// Debounce
const debouncedFn = utils.debounce(() => console.log('Called'), 300);

// Throttle
const throttledFn = utils.throttle(() => console.log('Called'), 300);

// Deep Clone
const cloned = utils.deepClone({ a: 1, b: { c: 2 } });

// Check if empty
utils.isEmpty([]); // true
utils.isEmpty({}); // true

// Random number
utils.randomBetween(1, 10);
```

## License

MIT