---
title: Domando o PageSpeed do Google com SvelteKit para e-Commerce
excerpt: 'Beleza, a gente venceu o monstro. Criamos valor pra caramba pro nosso cliente. O e-commerce deles agora é um troço lindo, rápido pra caralho, passa nos testes do PageSpeed do Google com sobra — e deixa no chinelo qualquer concorrente de orçamento farto. Dá uma olhada nisso!'
date: 2025-08-31
featured: false
isMain: false
icon: ChartNoAxesCombined
authors:
  - name: Nicolas Erramuspe
    avatar: /me.jpeg
  - name: Claude AI
    avatar: /claude-logo.png
---

Então, temos um cliente: [Braaay](http://braaay.com).  
É um negócio de vinhos em SP, com e-commerce, operação completa, aquele rolê.

Daí lançamos um desafio meio doido: tirar eles do WordPress tradicional e jogar num front-end headless com SvelteKit, mantendo o backend do WooCommerce. Por quê? Pra não virar o jogo pra galera que opera — ninguém perde o chão — e, de quebra, explodir a performance. Carregamento? Rápido pra caralho.

O front-end em SvelteKit roda na Vercel.  
<br />
Pra conversar com o WordPress, usamos o [WPGraphQL](https://www.wpgraphql.com/) — transformando o WP num servidor GraphQL direto — e o [WooGraphQL](https://woographql.com/) pra puxar tudo do WooCommerce: produtos, pedidos, cupons, o bagulho todo, com queries e mutations.

👋 _No futuro, a gente pretende soltar uns plugins que fizemos por aí. A comunidade GraphQL + WordPress vai sentir o baque._

_(Continua...)_
