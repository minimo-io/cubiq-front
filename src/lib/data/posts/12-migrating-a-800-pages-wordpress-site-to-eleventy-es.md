---
title: 'Migrando un sitio de afiliados de Wordpress con +800 páginas a Eleventy'
excerpt: 'Cómo migrar con éxito un sitio de iGaming para aumentar (drásticamente) el rendimiento y la seguridad'
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

## Resultados primero

**El desafío:** Reducir costos, mejorar el rendimiento y la seguridad + olvidarse del mantenimiento agotador de Wordpress.

Así que decidí migrar Betizen.org de mi Droplet autogestionado de DigitalOcean (2 GB Memory / 2 AMD vCPUs / 60 GB Disk) a Vercel. De un Wordpress dinámico a un sitio estático generado con 11ty.

✅ **Rendimiento** medido por GTMetrix pasó de una lamentable F (32%) a una A (96%)

✅ **Costos** en el plan Hobby de Vercel son gratuitos, así que los costos bajaron de USD 39.57/mes a USD 0, comprobado

✅ **Seguridad** ahora es casi ideal, ya que Vercel es una solución gestionada y un sitio estático tiene muchos menos vectores de ataque.

Además, el mantenimiento pasó de resolver incompatibilidades de plugins después de una actualización en un fin de semana a literalmente cero tiempo invertido.

## El escenario

El sitio tiene reseñas, artículos, páginas y categorías en 3 idiomas diferentes: pt-br, es y en.

Tiene un total de 809 URLs con contenido único.

Wordpress es una gran herramienta, la amo y amo aún más a mis clientes que la usan 😜  
Me especializo en Woocommerce & Pagos, pero el sitio, como proyecto paralelo, rápidamente se volvió un dolor de cabeza para mantener.

[Betizen.org](https://www.betizen.org/) intenta ofrecer listados confiables y transparencia extrema de y para casinos online, juegos y programas de afiliados, sin estafas ni tonterías. Recibiendo mucho tráfico basura, lo que sobrecargaba el servidor limitado de DigitalOcean.

Para este proyecto, Wordpress era una mala elección obvia. Aun así es el estándar en internet para afiliados, ¡Y NO DEBERÍA SERLO! Especialmente si estás empezando y bootstrappeando.

Así que después de un tiempo lidiando con esto, decidí moverme a mejores tierras: un sitio estático ligero, limpio y simple usando el único y gran SSG: [Eleventy](https://www.11ty.dev/).

Pensé en usar Svelte como SSG, pero ¿por qué no usar una herramienta (excelente) y más específica para la tarea, mientras aprovecho para mejorar mis habilidades con 11ty?

Así que allá fui.

## El desafío

Convertir Betizen.org en un sitio estático.<br>

508 URLs de reseñas de juegos.<br>
43 artículos de blog.<br>
21 páginas.<br>
126 reseñas de casinos.<br>
28 categorías.<br>
83 páginas de proveedores de juegos.<br>
**= 809+ URLs únicas e indexables.**  
<br>

1. La primera idea fue migrar progresivamente categorías de páginas una por una. Hacer pruebas con páginas de bajo tráfico (y baja autoridad) y luego mover lentamente las de alto tráfico. Dos estructuras diferentes debían coexistir hasta que todas fueran migradas.
2. Otra idea fue crear una herramienta de desarrollo que use la Rest API de Wordpress para obtener todo el contenido y generar todas las entradas Markdown de una vez. Comparar salidas ¡y migrar!
3. La tercera opción era descargar absolutamente todo usando una herramienta como [HTTrack](https://www.httrack.com/), trabajar localmente y luego enviar el sitio completo.

Se necesitaba una estructura básica. Y como siempre, el [11ty base blog](https://github.com/11ty/eleventy-base-blog) fue un gran punto de partida.

También eran imprescindibles las funcionalidades i18n y l10n. Aquí hay un artículo interesante sobre [i18n con Eleventy](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/) por [Lene Saile](https://www.lenesaile.com/en/about/), y otro en Smashingmagazine sobre [Internacionalización y Localización para sitios estáticos](https://www.smashingmagazine.com/2020/11/internationalization-localization-static-sites/).

Para el despliegue, Vercel —ya tenía otros proyectos en Netlify consumiendo cuota.

Como muchos ejemplos en la documentación de 11ty están orientados a Netlify, esta guía de [Migrar a Vercel desde Netlify](https://vercel.com/guides/migrate-to-vercel-from-netlify) fue útil.

Después de un mes, muchas pruebas, herramientas de scrapping/importación creadas y muchas horas de fines de semana invertidas, betizen.org salió en vivo como sitio estático con una **plantilla 11ty** inspirada en el theme de Wordpress (que también había creado para personalizar un template original para la industria de apuestas).

La idea es seguir impulsando 11ty para afiliados de iGaming, tal vez ofrecer plantillas gratuitas de calidad vía minimo.io, idealmente conectadas a un Headless CMS. Como se ve en los resultados, tiene todo el sentido en costos, seguridad y rendimiento.

Y fue divertido seguir aprendiendo el SSG Eleventy. BTW: Qué gran comunidad.
