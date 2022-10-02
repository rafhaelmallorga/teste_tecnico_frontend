# **Calculadora de Antecipação**

Teste técnico desenvolvido em ReactJS, Typescript e Tailwind a conforme [desafio](https://github.com/hashlab/hiring/blob/master/challenges/pt-br/front-challenge.md).

O objetivo desta aplicação é: Hoje nossos clientes precisam saber quanto custa antecipar uma transação, e para isso, precisamos desenvolver uma calculadora de antecipação para que os mesmos consigam saber quais valores receberão caso optem por antecipar o recebimento.

## **Sumário**

- [**Calculadora de Antecipação**](#calculadora-de-antecipação)
  - [**Sumário**](#sumário)
    - [**Início Rápido**](#início-rápido)
    - [**Link do Deploy**](#link-do-deploy)
    - [**Tecnologias**](#tecnologias)
    - [**API**](#api)
    - [Post](#post)
    - [**Figma**](#figma)

### **Início Rápido**

[Voltar ao topo](#sumário)

Para rodar o projeto localmente faça o clone do repositório localmente e rode os comandos a seguir para instalar as dependências e rodar o projeto:

```shell
yarn

yarn dev
```

### **Link do Deploy**

[Voltar ao topo](#sumário)

[**LINK DO DEPLY**](https://teste-tecnico-frontend-one.vercel.app/)

### **Tecnologias**

[Voltar ao topo](#sumário)

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Vercel](https://vercel.com/)

### **API**

[Voltar ao topo](#sumário)

Api utilizada no projeto:

`https://frontend-challenge-7bu3nxh76a-uc.a.run.app`

### Post

| Parâmetro      | Obrigatório? | Tipo            | Descrição                                                                              |
| -------------- | ------------ | --------------- | -------------------------------------------------------------------------------------- |
| `amount`       | Sim          | `number`        | Valor total da transação em centavos                                                   |
| `installments` | Sim          | `number`        | Número de parcelas                                                                     |
| `mdr`          | Sim          | `number`        | É a taxa cobrada pelas adquirentes sobre cada transação de cartão de crédito ou débito |
| `days`         | Não          | `Array<number>` | Uma lista com os dias a serem calculadas as antecipações                               |

### **Figma**

[Voltar ao topo](#sumário)

[**FIGMA**](https://www.figma.com/file/ipV80xJ29T7rdz0Aoo7xWv/Antecipation?node-id=0%3A1)
