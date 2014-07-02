/*
* grunt-vwsemu
* https://github.com/superchair/grunt-vwsemu
*
* Copyright (c) 2014 Alex Brown
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {
    var http = require('http');

    function runProxyServer(proxyport, uheCfg) {
        console.log('Starting VWS Proxy Server on port ' + proxyport + '...');
        http.createServer(function(request, response) {

            var token = request.url.substring(1, request.url.indexOf('/', 1));

            request.headers['Source-Type'] = 'CFE';
            request.headers['Source-ID'] = 'CFE';

            var proxyRequestOptions = {
                hostname: uheCfg[token].host,
                port: uheCfg[token].port,
                path: request.url,
                method: request.method,
                headers: request.headers
            };

            var proxyRequest = http.request(proxyRequestOptions);

            proxyRequest.addListener('response', function(proxy_response) {
                proxy_response.addListener('data', function(chunk) {
                    response.write(chunk, 'binary');
                });
                proxy_response.addListener('end', function() {
                    response.end();
                });
                response.writeHead(proxy_response.statusCode, proxy_response.headers);
            });

            request.addListener('data', function(chunk) {
                proxyRequest.write(chunk, 'binary');
            });
            request.addListener('end', function() {
                proxyRequest.end();
            });
        }).listen(proxyport);
        console.log('VWS Proxy Server started!');
    } //function runProxyServer

    grunt.registerMultiTask('vwsemu', 'PC VWS server emulator', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            proxyport: 9001,
            runForever: false
        });
        var uhe = this.data.uhe;
        if(!uhe) {
            grunt.log.warn('UHE server properties have not been set!');
            return false;
        }
        else {
            if(options.runForever) {
                this.async();
            }
            runProxyServer(options.proxyport, uhe);
        }
    });
};
