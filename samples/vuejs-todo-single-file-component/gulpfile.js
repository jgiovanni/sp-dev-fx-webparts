'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
let merge = require('webpack-merge');

build.sass.setConfig({
    sassMatch: []
});

build.configureWebpack.setConfig({
    additionalConfiguration: function (config) {
        let vueConfig = {
            module: {
                rules: [
                    { test: /fabric(\.min)?\.js$/, use: 'exports-loader?fabric' },
                    {
                        test: /\.vue$/,
                        use: [
                            {
                                loader: 'vue-loader',
                                options: {
                                    esModule: true
                                }
                            }]
                    }]
            },
        };

        return merge(config, vueConfig);
    }
});

build.copyStaticAssets.setConfig({
    includeExtensions: ['vue', 'scss', 'png', 'jpg']
});

build.initialize(gulp);
