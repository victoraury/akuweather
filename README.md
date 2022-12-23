# akuweather
Aplicação web para previsão do tempo e acompanhamento de condições meteriológicas.

![Tela Inicial](/page.png "akuweather")

Este projeto foi feito como avaliação para uma disciplina de Sistemas Distribuídos e visa o aprendizado de arquiteturas cliente-servidor, protocolos de comunicação, funcionamento de API's, CDN's e desenvolvimento web.

## Requisitos
1. [Node.js](https://nodejs.org/en/) versão 16 ou superior
2. Yarn versão 1.22 ou superior. Basta executar o seguinte comando após ter o Node.js instalado:
`npm install --global yarn`

## Instruções
1. Tendo os requisitos acima, acesse a pasta raiz do projeto e utilize o Yarn para instalação das dependências
`yarn`
2. Na pasta raiz do projeto, execute o comando:
`yarn dev --host`
3. Acesse o endereço abaixo. Se tudo ocorreu corretamente, você será capaz de acessar a aplicação. Outras máquinas na mesma rede também conseguirão acessar a aplicação, bastando substituir o endereço localhost pelo IP da máquina host.
`localhost:5173/akuweather`