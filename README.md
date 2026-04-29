# Utils JS

A comprehensive JavaScript utility library with TypeScript support.

## Installation

```bash
npm install utils-js
```

## Usage

```typescript
import { debounce, deepClone, isEmpty } from 'utils-js';

const debounced = debounce(() => console.log('Called'), 300);
const cloned = deepClone({ a: 1, b: { c: 2 } });
isEmpty([]); // true
```

## API

### debounce(fn, wait, options?)
Creates a debounced function.

### throttle(fn, limit)
Creates a throttled function.

### deepClone(obj)
Deep clones an object or array.

### isEmpty(value)
Checks if value is empty.

### randomBetween(min, max)
Returns random number between min and max.

## Testing

```bash
npm test
```
