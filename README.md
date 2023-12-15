# cypress-test
npm init -y  // dependecias
cypress open --e2e --browser chrome // script instrucción automatica
cypress run --spec cypress/e2e/features/* // script en consola

# dependencias
npm install 

npm i cypress // instalador cypress
npm i @badeball/cypress-cucumber-preprocessor // instalador gherkin cucumber
npm i @bahmutov/cypress-esbuild-preprocessor // instalador esbuild compilación
npm i esbuild // instalador esbuild compilación js

# scripts
npm run cypress:runner
npm run cypress