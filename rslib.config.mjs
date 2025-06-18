import {defineConfig} from '@rslib/core';

export default defineConfig({
    lib: [
        {
            format: 'umd',
            umdName: 'Foo',
        },
    ],
    output: {
        target: 'web',
    },
    tools: {
        rspack: {
            output: {
                library: {
                    export: 'default',
                },
            },
        },
    },
});
