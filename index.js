/* eslint-disable no-param-reassign, no-use-before-define */

const onceOnly = (fn, config = { attach: false, strict: false }) => {
  if (typeof fn !== 'function') {
    throw new Error(`expected a function but got: ${typeof fn}`);
  }

  const { attach, strict } = config;
  const name = fn.displayName || fn.name || '<anonymous>';
  let cache;

  f.called = false;

  if (attach === true) {
    fn.once = f;
  }

  function f (...args) {
    if (f.called) {
      if (strict === true) {
        throw new Error(`function "${name}" can only be called once`);
      }
      return cache;
    }

    f.called = true;
    cache = fn(...args);
    f.cache = () => cache;

    return cache;
  }

  return f;
};

module.exports = { onceOnly };
