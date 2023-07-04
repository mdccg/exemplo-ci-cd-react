# exemplo-ci-cd-react

## Sumário

- [exemplo-ci-cd-react](#exemplo-ci-cd-react)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app é uma demonstração do uso de integração e entrega contínuas utilizando o [workflow](./.github/workflows/node.js.yml) intitulado "Node.js" e pré-configurado pelo próprio [GitHub Actions](https://github.com/features/actions). O fluxo ouve os commits feitos na branch `main` e executa os testes de ponta a ponta e de componente contidos no diretório [`cypress/`](./cypress/). Se nenhum teste lançar uma exceção, o fluxo faz deploy do app na plataforma Vercel e disponibiliza o app em produção em seu respectivo [domínio](https://exemplo-ci-cd-react.vercel.app/).

Para facilitar o exemplo, foi utilizado como base o repositório [mdccg/evolved-dictionary](https://github.com/mdccg/evolved-dictionary/), o qual já contém os respectivos testes prontos e um app de exemplo para testar.

Este foi o sétimo repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Construção de Páginas Web IV.

| [&larr; Repositório anterior](https://github.com/mdccg/github-authentication-demo) | [Próximo repositório &rarr;](https://github.com/mdccg/ci-cd-anime-snap) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Biblioteca de interface de usuário | [React](https://reactjs.org/) |
| Empacotador de módulos | [create-react-app](https://create-react-app.dev/) |
| Framework de teste | [Cypress](https://www.cypress.io/) |
| Hospedagem | [Vercel](https://vercel.com/) |
| Fluxo de integração contínua | Node.js |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Finalmente, execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```
