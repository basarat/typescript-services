/// <reference path="./typescriptServices.d.ts"/>
var ts = require('typescript-services');

// formatter:
var snapshot = ts.SimpleText.fromString('var foo = 123;');
var formatter = new ts.Services.Formatting.TextSnapshot(snapshot);
console.log(formatter);
