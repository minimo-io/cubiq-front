import type { Faq } from '$lib/type/faq.types';

/**
 * FAQ para o produto Pay da Cubiq
 */
export const finxFaqs: Record<string, Faq[]> = {
	en: [
		{
			question: 'What is Cubiq:Pay and how does it work?',
			answer:
				'Cubiq:Pay offers instant global payments and settlements in stablecoins or Bitcoin via Lightning. Example: receive USDT/BTC from anywhere in the world and settle instantly, with full transparency.'
		},
		{
			question: 'Which currencies and payment methods are supported?',
			answer:
				'We support USDT, Bitcoin Mainnet and Bitcoin over Lightning. Contact our sales team for custom integrations.'
		},
		{
			question: 'How fast is the settlement?',
			answer:
				'Settlements occur instantly, 24/7, every day of the year, ensuring your funds are available without delays.'
		},
		{
			question: 'How do I integrate the Cubiq:Pay API into my system?',
			answer:
				'Our API is straightforward: obtain your API key, follow the endpoints in our documentation (Node.js, Python, cURL examples), and use webhooks for real‑time status updates.'
		},
		{
			question: 'What are the fees and pricing structure?',
			answer:
				'We offer transparent, volume‑based pricing with no hidden fees. Rates vary by region and transaction volume—Contact support for a quote.'
		},
		{
			question: 'Is Cubiq:Pay compliant with regulatory requirements?',
			answer:
				'Yes. We adhere to all local and international standards and provide audit trails for each transaction to ensure 100% compliance.'
		},
		{
			question: 'Can I issue refunds or partial cancellations?',
			answer:
				'Cubiq:Pay supports full and partial refunds as well as dispute resolution workflows via our API and dashboard.'
		},
		{
			question: 'How can I track and reconcile transactions?',
			answer:
				'Use our unified dashboard to view settlements, download reports, and use our analytics API powered by IA for advanced transaction insights.'
		},
		{
			question: 'Why does Cubiq:Pay not operate in Brazil?',
			answer:
				'Unfortunately, the recent regulations from the Central Bank make it unfeasible for small technology providers, without large capital, to contribute to innovation in payments via virtual assets, concentrating the industry and harming users in the long run.'
		}
	],
	es: [
		{
			question: '¿Qué es Cubiq:Pay y cómo funciona?',
			answer:
				'Cubiq:Pay ofrece pagos y liquidaciones globales instantáneas en stablecoins o Bitcoin, vía Lightning. Ej.: recibe USDT/BTC desde cualquier lugar del mundo y liquida al instante, con total transparencia.'
		},
		{
			question: '¿Qué monedas y métodos de pago están disponibles?',
			answer:
				'Soportamos USDT, Bitcoin Mainnet, y Bitcoin por Lightning. Consulta nuestro equipo de ventas para integraciones personalizadas.'
		},
		{
			question: '¿Cuánto tarda la liquidación?',
			answer:
				'Las liquidaciones son instantáneas, 24/7, todos los días del año, garantizando disponibilidad inmediata de fondos.'
		},
		{
			question: '¿Cómo integro la API de Cubiq:Pay en mi sistema?',
			answer:
				'Nuestra API es sencilla: obtén tu clave API, sigue los endpoints en nuestra documentación (ejemplos en Node.js, Python, cURL) y utiliza webhooks para actualizaciones en tiempo real.'
		},
		{
			question: '¿Cómo son las tarifas y precios?',
			answer:
				'Ofrecemos precios transparentes basados en volumen sin tarifas ocultas. Las tarifas varían por región y volumen de transacciones—contáctanos para una cotización.'
		},
		{
			question: 'Cubiq:Pay cumple con los requisitos regulatorios?',
			answer:
				'Sí. Cumplimos con todas las normas locales e internacionales y proporcionamos registros de auditoría para cada transacción.'
		},
		{
			question: '¿Puedo emitir reembolsos o cancelaciones parciales?',
			answer:
				'Cubiq:Pay admite reembolsos completos y parciales, así como flujos de resolución de disputas a través de nuestra API y panel de control.'
		},
		{
			question: '¿Cómo rastreo y concilió mis transacciones?',
			answer:
				'Usa nuestro panel unificado para ver liquidaciones, descargar informes y aprovecha nuestra API de análisis impulsada por IA para información avanzada.'
		},
		{
			question: '¿Por qué Cubiq:Pay no opera en Brasil?',
			answer:
				'Lamentablemente, las recientes disposiciones del Banco Central hacen inviable que pequeños proveedores de tecnología, sin grandes capitales, contribuyan a la innovación en pagos con activos virtuales, concentrando la industria y perjudicando, a largo plazo, a los usuarios.'
		}
	],
	pt: [
		{
			question: 'Por que a Cubiq:Pay não opera no Brasil?',
			answer:
				'Infelizmente, as recentes disposições do Bacen tornam inviável para pequenos fornecedores de tecnologia, sem grandes capitais, contribuírem com a inovação em pagamentos via ativos virtuais, concentrando a indústria e prejudicando, no longo prazo, os usuários.'
		},
		{
			question: 'O que é o Cubiq:Pay e como funciona?',
			answer:
				'Cubiq:Pay oferece pagamentos liquidações globais instantâneas em stablecoins ou Bitcoin, via Lightning. Ex.: receba USDT/BTC desde cualquer lugar do mundo e liquide no instante, com transparência total.'
		},
		{
			question: 'Quais moedas e métodos de pagamento são suportados?',
			answer:
				'Suportamos USDT, Bitcoin Mainnet ou Bitcoin via Lightning. Fale com nosso time para integrações customizadas.'
		},
		{
			question: 'Qual é o tempo de liquidação?',
			answer:
				'As liquidações são instantâneas, 24/7, todos os dias do ano, garantindo disponibilidade imediata dos recursos.'
		},
		{
			question: 'Como faço para integrar a API do Cubiq:Pay ao meu sistema?',
			answer:
				'Nossa API é simples: obtenha sua chave, siga os endpoints na documentação (exemplos em Node.js, Python, cURL) e utilize webhooks para atualizações em tempo real.'
		},
		{
			question: 'Como funciona a cobrança e a estrutura de preços?',
			answer:
				'Oferecemos preços transparentes baseados em volume, sem taxas ocultas. As tarifas variam conforme região e volume—entre em contato para cotação.'
		},
		{
			question: 'O Cubiq:Pay está em conformidade regulatória?',
			answer:
				'Sim. Seguimos todas as normas locais e internacionais e fornecemos trilhas de auditoria para cada transação.'
		},
		{
			question: 'Posso emitir reembolsos ou cancelamentos parciais?',
			answer:
				'O Cubiq:Pay suporta reembolsos totais e parciais, além de fluxos de resolução de disputas via API e dashboard.'
		},
		{
			question: 'Como monitorar e conciliar transações?',
			answer:
				'Use nosso dashboard unificado para visualizar liquidações, baixar relatórios e explore nossa API de análises com IA para insights avançados.'
		}
	]
};
