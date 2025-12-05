---
title: 'Migrando um site de afiliados Wordpress com +800 páginas para Eleventy'
excerpt: 'Como migrar com sucesso um site de iGaming para aumentar (drasticamente) o desempenho e a segurança'
date: 2024-04-04
featured: false
isMain: false
image: '/blog/betizen-wordpress-vs-eleventy-2.webp'
authors:
  - name: Nicolas Erramuspe
    avatar: /me.jpeg
  - name: Gemini
    avatar: /gemini-logo.png
---

## Resultados primeiro

**O desafio:** Reduzir custos, ter melhor desempenho e segurança + esquecer a manutenção trabalhosa do Wordpress.

Então decidi migrar o Betizen.org do meu Droplet autogerenciado da DigitalOcean (2 GB Memory / 2 AMD vCPUs / 60 GB Disk) para a Vercel. De um Wordpress dinâmico para um site estático gerado com 11ty.

✅ **Desempenho** medido pelo GTMetrix foi de um péssimo F (32%) para um A (96%)

✅ **Custos** no plano Hobby da Vercel são gratuitos, então os custos foram de USD 39,57/mês para USD 0, comprovado

✅ **Segurança** agora está próxima do ideal, já que a Vercel é uma solução gerenciada e um site estático tem muito menos vetores de ataque.

Além disso, a manutenção passou de resolver incompatibilidades de plugins após uma atualização no fim de semana para literalmente zero tempo gasto.

## O cenário

O site possui reviews, artigos, páginas e categorias em 3 idiomas diferentes: pt-br, es e en.

Ele tem um total de 809 URLs com conteúdo único.

Wordpress é uma ótima ferramenta, eu adoro — e adoro ainda mais meus clientes que a utilizam 😜  
Sou especializado em Woocommerce & Pagamentos, mas o site, como projeto paralelo, rapidamente virou uma dor de cabeça para manter.

[Betizen.org](https://www.betizen.org/) tenta oferecer listas confiáveis e transparência extrema de e para cassinos online, jogos e programas de afiliados, sem golpes ou baboseiras! Recebendo muito tráfego lixo, o que sobrecarregava o servidor limitado da DigitalOcean.

Para este projeto, Wordpress era uma má escolha óbvia. Ainda assim, é o padrão na internet para afiliados — E NÃO DEVERIA SER! Principalmente se você está começando e fazendo tudo bootstrapping.

Depois de um tempo lidando com isso, decidi ir para algo melhor: um site estático leve, limpo e simples usando o grande SSG: [Eleventy](https://www.11ty.dev/).

Pensei em usar Svelte como SSG, mas por que não usar uma ferramenta (ótima) e mais específica para a tarefa, enquanto aproveito para melhorar minhas habilidades com 11ty?

E lá fui eu.

## O desafio

Converter Betizen.org em um site estático.<br>

508 URLs de reviews de jogos.<br>
43 artigos de blog.<br>
21 páginas.<br>
126 reviews de cassinos.<br>
28 categorias.<br>
83 páginas de provedores de jogos.<br>
**= 809+ URLs únicas e indexáveis.**  
<br>

1. A primeira ideia foi migrar progressivamente categorias de páginas uma a uma. Testar com páginas de baixo tráfego (e baixa autoridade) e depois mover lentamente as de alto tráfego. Duas estruturas diferentes precisariam coexistir até que tudo estivesse migrado.
2. Outra ideia foi criar uma ferramenta que usa a Rest API do Wordpress para buscar todo o conteúdo e criar todas as entradas Markdown de uma vez. Comparar resultados e migrar!
3. A terceira opção era baixar absolutamente tudo com uma ferramenta como [HTTrack](https://www.httrack.com/), trabalhar localmente e depois enviar o site completo.

Uma estrutura básica era necessária. E, como sempre, o [11ty base blog](https://github.com/11ty/eleventy-base-blog) pareceu um ótimo começo.

Funcionalidades i18n e l10n também eram obrigatórias. Aqui está um artigo interessante sobre [i18n com Eleventy](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/) por [Lene Saile](https://www.lenesaile.com/en/about/) e outro da Smashingmagazine sobre [Internacionalização e Localização para Sites Estáticos](https://www.smashingmagazine.com/2020/11/internationalization-localization-static-sites/).

Para o deploy, Vercel — eu já tinha outros projetos no Netlify consumindo quota.

Como muitos exemplos na documentação do 11ty são focados no Netlify, este guia de [Migrar do Netlify para Vercel](https://vercel.com/guides/migrate-to-vercel-from-netlify) foi útil.

Após um mês, muitos testes, várias ferramentas de importação/scraping criadas e muitas horas investidas nos finais de semana, betizen.org foi ao ar como um site estático com um **template 11ty** inspirado no tema de Wordpress (que eu também havia criado para customizar um template original para o setor de apostas).

A ideia é continuar impulsionando o Eleventy para afiliados de iGaming, talvez oferecer alguns templates gratuitos de qualidade via minimo.io, idealmente conectados a um Headless CMS. Como mostram os resultados desta migração, faz total sentido em custos, segurança e desempenho.

E foi divertido continuar aprendendo o SSG Eleventy! Aliás: que comunidade incrível.
