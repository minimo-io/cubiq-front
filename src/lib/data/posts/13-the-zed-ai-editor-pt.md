---
title: 'Um romance turbulento com o Editor Zed AI'
excerpt: 'Olha, VS Code, não és tu, sou eu. Bom... na verdade é o Zed 😬'
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

Tenho usado este novo editor, e as coisas estão ficando bem sérias.

<blockquote>
    <p>
        Projetado para colaboração de alto desempenho com humanos e IA.
    </p>
</blockquote>

Depois de anos vendo o cooler do meu velho MacBook Air (13 polegadas, início de 2015) enlouquecer só para abrir um arquivo TypeScript,
topei com o Zed – um editor de código de nova geração escrito em Rust, _projetado para colaboração de alto desempenho com humanos e IA_.

Sim, o [Zed](https://zed.dev/) é mais um editor com IA em ascensão. Também existe o [Cursor](https://www.cursor.com/) por aí, que honestamente pouco me importa no momento. Mas um editor open-source que [levanta 10 milhões de dólares](https://techcrunch.com/2023/03/15/zed-code-editor-raises-10m/)? Aí sim chama minha atenção.

Mas o verdadeiro divisor de águas? Eu o conectei ao [llama3.2-3b-instruct](https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct) via Ollama como meu parceiro de programação em IA (sim, eu gosto de modelos pequenos e open source, e não, eles não são tão bons quanto Claude ou ChatGPT),
e tudo está funcionando muito bem.

Claro que você pode configurar o Zed para funcionar com Anthropic, GitHub Copilot ou OpenAI. Para isso, só precisa adicionar suas API keys na configuração do Assistente correspondente.

O editor está na versão v0.158.2 no momento desta escrita, tem poucas extensões úteis e snippets básicos, mas meu amigo… ele é rápido.

Venho trocando meu stack desde 2023, focando cada vez mais em performance.
Ainda tenho um longo caminho pela frente, mas assim como foi meu interesse por Eleventy e geradores de sites estáticos, agora é a vez de editores como o Zed e da linguagem Rust para minhas aventuras de backend e IA.

(Fique ligado para meu próximo artigo sobre o [Ollama](https://ollama.com/) — é outra toca de coelho de IA local.)

Falando em Rust — como alguém se aventurando no mundo das abstrações de custo zero e lutando com o borrow checker, o Zed parece a melhor escolha.

As atualizações semanais mostram que o desenvolvimento está num ritmo bom, e que a equipe está sendo bastante transparente sobre as decisões (confira [o canal deles no YouTube](https://www.youtube.com/@zeddotdev) para mais detalhes).

Então estou esperançoso de substituir totalmente o Visual Studio Code em breve.

## Configuração do Zed, meu setup

Vou compartilhar aqui minha configuração atual do Zed que você pode copiar sem culpa.
Espere algumas configurações bem ajustadas para desenvolvimento com Rust e (Svelte + TypeScript + Tailwind), além da minha integração com o Ollama.

👉 [Veja no Github](https://github.com/minimo-io/dev-config-files).

## Meu veredito

Um software bastante ambicioso e ainda nos primeiros dias, mas se você está cansado de seu editor usar mais RAM que o Chrome,
ou se está curioso para integrar IA ao seu fluxo de trabalho sem pagar tokens a ponto de faltar para as compras do mês ou vender sua alma, dê uma chance ao Zed.
Veja se ele atende às suas necessidades. Teste sua performance, integração de IA e capacidades de colaboração, e decida se vale o seu tempo.

Ah: Você pode configurar o Zed para usar o mesmo keymap base do VSCode e ele também inclui “Vim Mode”, confira [aqui](https://zed.dev/docs/vim).

Em qualquer caso, use seus poderes com responsabilidade. Não diga que não te avisei… Agora vá, e que o código esteja contigo!
<br><br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/JGz7Ou0Nwo8?si=YizD-YfWYuMIOo1h" ...></iframe>

Fãs de formato longo 👇
<br><br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/fV4aPy1bmY0?si=mDyyQ-NVF9rWOjP1" ...></iframe>

<br><br>
Adeus, programadores!
