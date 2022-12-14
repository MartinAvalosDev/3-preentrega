#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const mongostoreConfig = require('./mongoStoreConfig');
const mainPath = 'https://avalos.com.ar/';
const imgPath = 'api/fotos/';

const PORT = (argv.port !== undefined)?argv.port:8080;
const MODE = argv.mode || 'fork';
const GZIP = argv.gzip || false;

module.exports = {
    argv,
    mongostoreConfig,
    mainPath,
    imgPath,
    global: {
        PORT: PORT,
        MODE: MODE,
        GZIP: GZIP
    }
}