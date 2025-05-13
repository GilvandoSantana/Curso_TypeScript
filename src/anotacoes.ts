// Obs: caso são seja atribuido o que deve ser, o prorpio TS, consegue identidicar. Ex abaixo:
let obs = 5 // Ele consegue identificar que é um NUMBER
// obs = 'teste'
// Para de funcionar e dá erro


//  Para transformar um TYPESCRIPT em JS, digite no terminal:
// tsc

// Para configurar um TYPESCRIPT, digite no terminal:
// tsc --init

// ALTERAR APENAS: (copie e cole)
/* "target": "es2016", */

/* "module": "commonjs", // Pode ser () */

/* "outDir": ".",
-> Para onde os arquivos vão ser jogados depois de convertidos.
-> Criar pasta (dist) para armazenar os JS
-> Descomentar e copiar esse destino, sem os parênteses ("outDir": "./dist",)
*/

/* "rootDir": "./",
-> Descomentar e copiar esse destino, sem os parênteses ("rootDir": "./src",)
-> Onde os arquivos em TS estão.
-> Criar pasta (src) para armazenar os JS
*/