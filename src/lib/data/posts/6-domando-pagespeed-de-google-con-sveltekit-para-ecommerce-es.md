---
title: Domando Google PageSpeed con SvelteKit para e-Commerce
excerpt: 'Bueno, le ganamos al monstruo. Creamos un valor brutal para nuestro cliente. Su e-commerce ahora es una cosa brillante, rápida como un rayo, que pasa los test tiránicos del PageSpeed de Google con sobra — y deja en visto a cualquier competidor con presupuesto gordo. Echa un ojo a esto.'
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

Tenemos un cliente: [Braaay](http://braaay.com).  
Negocio de vinos en São Paulo, e-commerce completo, todo el rollo.

Entonces, nos propusimos un reto medio loco: sacarlos del WordPress tradicional y meterlos en un front-end headless con SvelteKit, pero dejando el backend en WooCommerce. ¿Por qué? Para no joderle la vida a los que operan el sistema — que sigan tranquilos — y de paso, volar la performance por los aires. Velocidad de carga? Brutal.

El front-end en SvelteKit corre en Vercel.  
<br />
Para hablar con WordPress, usamos [WPGraphQL](https://www.wpgraphql.com/) — convirtiendo el WP en un servidor GraphQL puro — y [WooGraphQL](https://woographql.com/) para sacar todo del WooCommerce: productos, pedidos, cupones, el paquete completo, con queries y mutations.

👋 _En el futuro, vamos a soltar algunos plugins que hicimos. La comunidad GraphQL + WordPress va a sentir el impacto._

_(Continúa... porque después vamos a subir al nivel Pro con WooGraphQL y vamos a destripar con Bundles, Subscriptions y todo lo que se mueva.)_
