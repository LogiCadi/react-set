# react-set

a lite simple way to reactive set Object state

## Usage

```tsx
// if your object state like this:
state = {
  a: {
    b: 1,
    c: {
      d: 2,
      e: 3,
    },
  },
};

// use setState to change e to 4
this.setState({
  a: {
    ...this.state.a,
    c: {
      ...this.state.a.c,
      e: 4,
    },
  },
});

// use `react-set` to setState
import $set from 'react-set';

this.setState({ a: $set(this.state.a, (a) => (a.c.e = 4)) });
```
