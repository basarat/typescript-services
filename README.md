typescript-services
===================

Open up TypeScript services for nodejs consumption


## Getting the language service
Opening up the TypeScript compiler : http://www.slideshare.net/nnzz2475/typescript-35845723 
```bash
git glone https://git01.codeplex.com/typescript TypeScript
cd TypeScript
npm install 
node_modules/.bin/jake local
cd built/local
ls
```
Important:
```bash
typescriptServices.d.ts
typescriptServices.js
```

## unwrap

###.js
Add line at bottom of .js:
```typescript
module.export = TypeScript;
```
###.d.ts
Add line at bottom on .d.ts: 
```typescript
declare module 'typescript-services' {
    export = TypeScript;
}
```
Cleanup the following lines from `.d.ts` as these should come from `node.d.ts`. 
```typescript
declare var require: any;
declare var module: any;
```
```typescript
declare module process {
    var argv: string[];
    var platform: string;
    function on(event: string, handler: (arg: any) => void): void;
    module stdout {
        function write(str: string): any;
        function on(event: string, action: () => void): void;
    }
    module stderr {
        function write(str: string): any;
        function on(event: string, action: () => void): void;
    }
    module mainModule {
        var filename: string;
    }
    function exit(exitCode?: number): any;
}
declare var Buffer: new(str: string, encoding?: string) => any;
```
```typescript
declare var global: any;
```
All set!