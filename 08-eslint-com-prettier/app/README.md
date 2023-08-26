# Configurando VsCode, Eslint e Prettier do Tailwindcss 
Neste tutorial você aprenderá a configurar um projeto Next com Eslint com a padronização utilizada pela rocketseat e o Prettier do Tailwindcss
para manter as classes em ordem. Também é mostrado as configurações mais fundamentais no VsCode para que seja possível a auto correção dos arquivos do projeto durante o desenvolvimento.

## Configurando VsCode:
- Precione as teclas de atalho Ctrl + Shift + P e selecione a opção de Configurações de Usuário (Json)
- Adicione o seguinte trecho de código as configurações:
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
"eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"],

## Configurando Eslint
- Em um projeto Next com Eslint
- Instalar configuração da rocketseat:
   - npm i -D @rocketseat/eslint-config
- Adicionar ao arquivo .eslintrc.json o seguinte código:
{
  "extends": [
    "@rocketseat/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
- Precione as teclas de atalho Ctrl + Shift + P e selecione a opção "Reload Window"

## Configurando Prettier do Tailwindcss
- Instalar pacote
    npm install -D prettier prettier-plugin-tailwindcss
- Crie um arquivo chamado prettier.config.js na raiz do projeto e adicione o seguinte trecho de código:
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}