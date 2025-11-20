---
title: Beating Google's Pagespeed with SvelteKit on e-Commerce
excerpt: 'So we beat the Thing, and we created a lot of value for our client. Their e-commerce is now shiny, efficient, thing that load fast, passing Google’s PageSpeed tyranny tests, much better than any of their big-budgeted competitors. Check this out!'
date: 2025-09-01
featured: false
isMain: false
icon: ChartNoAxesCombined
authors:
  - name: Nicolas Erramuspe
    avatar: /me.jpeg
  - name: Claude AI
    avatar: /claude-logo.png
---

So we have a client, it's called [Braaay](http://braaay.com)
It's a wine business, in Sao Paulo, and e-commerce operation and what not.

Ok so... we setup a kind of ambitious goal: To move our client from a Wordpress to a Headless Sveltekit front-end while still keeping their Woocommerce backend so we don't cause havok among people operating the platform, in order to (drastically ::promise::) improve the load times.

The SvekteKit front-end is hosted at Vercel.
<br />
We are using the [WPGraphQL](https://www.wpgraphql.com/) plugin for Wordpress to use our previous instance as a GraphQL server + [WooGraphQL](https://woographql.com/) plugin to get Woocommerce endpoints for queries and mutations.

👋 _We plan to contribute to this GraphQL over Wordpress crowd in the future, with some of the plugin we developed_

_(To be continued...)_
