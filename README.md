# grunt-vwsemu

> PC VWS server emulator

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install https://github.com/superchair/grunt-vwsemu --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vwsemu');
```

## The "vws_emu" task

### Overview
In your project's Gruntfile, add a section named `vws_emu` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  vws_emu: {
    options: {
        proxyport: 8081,
        runforever: false
    },
    your_target: {
        cmdc: {
            host: '<CMDC_HOST>',
            port: <CMDC_PORT_#>
        },
        upm: {
            host: '<UPM_HOST>',
            port: <UPM_PORT_#>
        },
        hep: {
            host: '<HEP_HOST>',
            port: <HEP_PORT_#>
        },
        pps: {
            host: '<PPS_HOST>',
            port: <PPS_PORT_#>
        },
    },
  },
})
```

### Options

#### options.proxyport
Type: `Number`
Default value: `8081`

A number representing what port to run the VWS emu on

#### options.runforever
Type: `boolean`
Default value: `false`

A boolean value that will cause the server task to run forever (note that subsequent tasks will not run)

#### uhe.*.host
Type: `String`
Default value: `none`

These values define the host url or IP for the associated servers.  They must be set as there is no default value.

#### uhe.*.port
Type: `Number`
Default value: `none`

These values define the port for the associated servers.  They must be set as there is no default value.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Alex Brown. Licensed under the MIT license.
