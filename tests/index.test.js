import {expect, test} from 'vitest';
import Foo from '../src/index.js';
import FooDist from '../dist/index.js'

test('foo src hello', () => {
    const foo = new Foo();
    expect(foo.hello()).toBe('hello');
});

test('foo dist hello', () => {
    const foo = new FooDist();
    expect(foo.hello()).toBe('hello');
});
