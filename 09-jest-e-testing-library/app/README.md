# Instalando jest e configurações iniciais
## Instale o jest
- npm i jest -D
## Inicie um arquivo de configuração e selecione as opções
- npx jest --init
## Instale ts-node se você criou um arquivo de configuração jest em ts
- npm i ts-node -D
## Instale @types/jest
- npm i @types/jest -D


# Agora precisamos configurar o jest para o ambiente React, pois o mesmo não faz isto de forma padrão
## Instale @swc/core e @swc/jest
- npm i @swc/core swc/jest -D

## Configure a propriedade transform no arquivo jest.config.ts da seguinte forma:
transform: { "^.+\\.(t|j)sx?$": [
    "@swc/jest", {
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: true,
        },
        keepClassNames: true,
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
          react: {
            runtime: "automatic",
          },
        },
      },
      module: {
        type: "es6",
        noInterop: false,
      },
    }
  ] },

## Instale o jest-environment-jsdom
- npm i jest-environment-jsdom -D

## Configure para utilizar jsdom como ambiente de testes no arquivo jest.config.ts da seguinte forma:
testEnvironment: "jsdom",

## Istale dependências do testing library para trabalhar em conjunto com o jest facilitando a criação de testes

- npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D