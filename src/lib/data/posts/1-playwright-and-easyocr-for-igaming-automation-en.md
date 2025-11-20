---
title: Puppeteer & EasyOCR for Slots Automation
excerpt: This post explores how we can automate slot games using Puppeteer to control the game's interface and EasyOCR for real-time data extraction. Puppeteer acts as our programmatic "player," navigating the game, initiating spins, and interacting with elements just like a human would. Meanwhile, EasyOCR provides the critical visual intelligence, reading key information directly from the screen, such as spin results, credit balances, and bonus indicators.
date: 2025-08-30
featured: false
isMain: false
icon: Braces
authors:
  - name: Nicolas Erramuspe
    avatar: /me.jpeg
  - name: Gemini
    avatar: /gemini-logo.png
---

This was an experiment inspired by [this John Carmack talk](https://www.youtube.com/watch?v=iz9lUMSQBfY), on Upper Bound 2025, about "a robot that plays a real Atari console using a camera and a robotic joystick."

The goal of this experiment was to proove that with the appropiate AI API access it is possible to:

1. Automate the gameplay for slots games at (fun) iGaming (using [Playwright for Python](https://github.com/microsoft/playwright-python)).
2. Extract jackpots, scores, and balances (using [EasyOCR](https://github.com/JaidedAI/EasyOCR).)
3. Send those captured values to an AI Ollama model for gameplay suggestions (using censored models like [gemma3n](https://ollama.com/library/gemma3n) or uncensored models at HuggingFace).
