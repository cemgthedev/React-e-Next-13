# Organização de Pastas
Este é um projeto simples com a organização de pastas que pode ser usado como template mais básico de qualquer projeto inicial com Next 13

# Pastas
## app
Em app ficam arquivos referentes a layouts e páginas de loading e error. Além disso, no Next 13, as rotas são organizadas em pastas dentro da pasta app como, por exemplo, app/about/page.tsx
## assets
Em assets ficam arquivos estáticos da aplicação como ícones, imagens, etc.
## components
Em components ficam arquivos referentes a componentes compartilhados entre páginas ou outros componentes mais complexos dentro da aplicação.
## contexts
Em contexts ficam arquivos referentes a contextos da aplicação criados utilizando o conceito de API Context.
## hooks
Em hooks ficam os arquivos referentes a hooks personalizados que serão utilizados por mais de um componente na aplicação.
## models
Em models ficam os arquivos referentes a modelos que permitem a tipagem em toda a aplicação.
## redux
Em redux ficam os arquivos referentes a configuração do redux na aplicação que pode substituir contexts uma vez que o redux é mais indicado para grandes aplicações que API Context.
## storybook
Em storybook ficam os arquivos referentes a documentações de componentes e páginas da aplicação com storybook. Esta pasta pode ser facilmente substituida apenas colocando os arquivos nas mesmas pastas dos componentes e páginas que eles documentam.
## styles
Em styles ficam os arquivos referentes a estilizações compartilhadas em toda a aplicação.
## utils
Em utils ficam os arquivos referentes a funções utilizadas em mais de um componente na aplicação.
## test
Em test ficam os arquivos referentes a diferentes testes da aplicação.

# Aviso
Esta estrutura de pastas não precisa ser seguida a risca com exceção da organização de pastas referentes a páginas da aplicação que o próprio Next 13 empoe. 
A depender do projeto e convenções da equipe pode-se ter diferentes organizações de pastas. Contudo, esta forma de organização atende muito bem aos critérios didáticos uma vez que cada tópico é bem separado por pastas.