---
title: 'Un romance vertiginoso con el Editor Zed AI'
excerpt: 'Mira, VS Code, no eres tú, soy yo. Bueno… en realidad es Zed 😬'
date: 2024-10-24
featured: false
isMain: false
image: '/blog/zed-editor-2.webp'
authors:
  - name: Nicolas Erramuspe
    avatar: /me.jpeg
  - name: Gemini
    avatar: /gemini-logo.png
---

## Tha-Zed

He estado usando este nuevo editor, y las cosas se están poniendo bastante serias.

<blockquote>
    <p>
        Diseñado para colaboración de alto rendimiento entre humanos e IA.
    </p>
</blockquote>

Después de años viendo el ventilador de mi viejo MacBook Air (13 pulgadas, principios de 2015) volverse loco solo para abrir un archivo TypeScript,
me crucé con Zed – un editor de próxima generación escrito en Rust, _diseñado para colaboración de alto rendimiento entre humanos e IA_.

Sí, [Zed](https://zed.dev/) es otro editor con IA en ascenso. También existe [Cursor](https://www.cursor.com/), del cual honestamente no me importa nada ahora mismo. Pero un editor open-source que [levanta 10 millones de dólares](https://techcrunch.com/2023/03/15/zed-code-editor-raises-10m/)? Bueno, eso definitivamente llama mi atención.

Pero el verdadero cambio de juego: lo conecté con [llama3.2-3b-instruct](https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct) usando Ollama como mi compañero de programación con IA (sí, me gustan los modelos pequeños y open source, y no, no son tan buenos como Claude o ChatGPT),
y todo está funcionando muy bien.

Por supuesto puedes configurar Zed para trabajar con Anthropic, GitHub Copilot u OpenAI. Para eso solo necesitas subir tus API keys en la configuración del Asistente correspondiente.

El editor está en la versión v0.158.2 al momento de escribir esto, tiene pocas extensiones útiles y snippets básicos, pero vaya que es rápido.

Desde 2023 vengo cambiando mi stack, enfocándome cada vez más en rendimiento.
Todavía tengo un largo camino por recorrer, pero así como me interesé en Eleventy y los generadores de sitios estáticos, ahora es el turno de editores como Zed y del lenguaje Rust para mis aventuras en backend e IA.

(Mantente atento a mi próximo artículo sobre [Ollama](https://ollama.com/) — es otra madriguera de IA local.)

Hablando de Rust — como alguien que está entrando en el mundo de las abstracciones de costo cero y peleando con el borrow checker, Zed se siente como la mejor opción.

Las actualizaciones semanales me muestran que el desarrollo avanza a buen ritmo y que el equipo está siendo bastante abierto sobre sus decisiones (mira [su canal de YouTube](https://www.youtube.com/@zeddotdev) para más detalles).

Así que tengo esperanzas de sustituir Visual Studio Code pronto.

## Configuración de Zed, mi setup

Voy a compartir aquí mi configuración actual de Zed para que la copies sin culpa.
Espera ajustes cuidadosamente pensados para Rust y (Svelte + TypeScript + Tailwind), además de mi integración con Ollama.

👉 [Échale un vistazo en Github](https://github.com/minimo-io/dev-config-files).

## Mi veredicto

Un software bastante ambicioso que aún está en sus primeros días, pero si estás cansado de que tu editor use más RAM que Chrome,
o si tienes curiosidad por integrar IA a tu flujo de trabajo sin pagar tantos tokens que te quedes sin dinero para el súper o termines vendiendo tu alma, dale una oportunidad a Zed.
Mira si se ajusta a tus necesidades. Prueba su rendimiento, su integración con IA y sus capacidades de colaboración, y decide si vale tu tiempo.

PD: Puedes configurar Zed para tener el mismo keymap base que VSCode y también incluye “Vim Mode”, míralo [aquí](https://zed.dev/docs/vim).

En cualquier caso, usa sus poderes con responsabilidad. No digas que no te avisé… ¡Ahora ve, y que el código te acompañe!
<br><br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/JGz7Ou0Nwo8?si=YizD-YfWYuMIOo1h" ...></iframe>

Para fans del formato largo 👇
<br><br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/fV4aPy1bmY0?si=mDyyQ-NVF9rWOjP1" ...></iframe>

<br><br>
¡Hasta luego, programadores!
