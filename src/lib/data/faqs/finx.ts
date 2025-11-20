import type { Faq } from '$lib/type/faq.types';

/**
 * FAQ para o produto Pay da Cubiq
 */
export const finxFaqs: Record<string, Faq[]> = {
	en: [
		{
			question: 'What is CubiqPay and how does it work?',
			answer:
				'CubiqPay enables real-time global settlements in local currency, stablecoins, or Bitcoin via Lightning. For example, receive a PIX payment in Brazil and instantly settle abroad with full compliance.'
		},
		{
			question: 'Which currencies and payment methods are supported?',
			answer:
				'We support local currencies (BRL, COP, MXN, etc.), USD, USDT, Bitcoin over Lightning, PIX, card networks, and more. Contact our sales team for custom integrations.'
		},
		{
			question: 'How fast is the settlement?',
			answer:
				'Settlements occur instantly, 24/7, every day of the year, ensuring your funds are available without delays.'
		},
		{
			question: 'How do I integrate the FinXPay API into my system?',
			answer:
				'Our API is straightforward: obtain your API key, follow the endpoints in our documentation (Node.js, Python, cURL examples), and use webhooks for real‑time status updates.'
		},
		{
			question: 'What are the fees and pricing structure?',
			answer:
				'We offer transparent, volume‑based pricing with no hidden fees. Rates vary by region and transaction volume—check our pricing page or contact support for a quote.'
		},
		{
			question: 'Is FinXPay compliant with regulatory requirements?',
			answer:
				'Yes. We adhere to all local and international AML/KYC standards and provide audit trails for each transaction to ensure 100% compliance.'
		},
		{
			question: 'Can I issue refunds or partial cancellations?',
			answer:
				'FinXPay supports full and partial refunds as well as dispute resolution workflows via our API and dashboard.'
		},
		{
			question: 'How can I track and reconcile transactions?',
			answer:
				'Use our unified dashboard to view settlements, download reports, and use our analytics API powered by IA for advanced transaction insights.'
		}
	],
	es: [
		{
			question: '¿Qué es FinXPay y cómo funciona?',
			answer:
				'FinXPay permite liquidaciones globales en tiempo real en moneda local, stablecoins o Bitcoin vía Lightning. Por ejemplo, recibe un pago PIX en Brasil y liquida al instante en el extranjero con cumplimiento total.'
		},
		{
			question: '¿Qué monedas y métodos de pago están disponibles?',
			answer:
				'Soportamos monedas locales (BRL, COP, MXN, etc.), USD, USDT, Bitcoin por Lightning, PIX, redes de tarjetas y más. Consulta nuestro equipo de ventas para integraciones personalizadas.'
		},
		{
			question: '¿Cuánto tarda la liquidación?',
			answer:
				'Las liquidaciones son instantáneas, 24/7, todos los días del año, garantizando disponibilidad inmediata de fondos.'
		},
		{
			question: '¿Cómo integro la API de FinXPay en mi sistema?',
			answer:
				'Nuestra API es sencilla: obtén tu clave API, sigue los endpoints en nuestra documentación (ejemplos en Node.js, Python, cURL) y utiliza webhooks para actualizaciones en tiempo real.'
		},
		{
			question: '¿Cómo son las tarifas y precios?',
			answer:
				'Ofrecemos precios transparentes basados en volumen sin tarifas ocultas. Las tarifas varían por región y volumen de transacciones—revisa nuestra página de precios o contáctanos para una cotización.'
		},
		{
			question: '¿FinXPay cumple con los requisitos regulatorios?',
			answer:
				'Sí. Cumplimos con todas las normas locales e internacionales de AML/KYC y proporcionamos registros de auditoría para cada transacción.'
		},
		{
			question: '¿Puedo emitir reembolsos o cancelaciones parciales?',
			answer:
				'FinXPay admite reembolsos completos y parciales, así como flujos de resolución de disputas a través de nuestra API y panel de control.'
		},
		{
			question: '¿Cómo rastreo y concilió mis transacciones?',
			answer:
				'Usa nuestro panel unificado para ver liquidaciones, descargar informes y aprovecha nuestra API de análisis impulsada por IA para información avanzada.'
		}
	],
	pt: [
		{
			question: 'O que é o FinXPay e como funciona?',
			answer:
				'O FinXPay oferece liquidações globais instantâneas em moeda local, stablecoins ou Bitcoin via Lightning. Ex.: receba USDT/BTC no Brasil e liquide no exterior imediatamente, com compliance total.'
		},
		{
			question: 'Quais moedas e métodos de pagamento são suportados?',
			answer:
				'Suportamos moedas locais (BRL, COP, MXN etc.), USD, USDT, Bitcoin via Lightning, PIX, redes de cartão e mais. Fale com nosso time para integrações customizadas.'
		},
		{
			question: 'Qual é o tempo de liquidação?',
			answer:
				'As liquidações são instantâneas, 24/7, todos os dias do ano, garantindo disponibilidade imediata dos recursos.'
		},
		{
			question: 'Como faço para integrar a API do FinXPay ao meu sistema?',
			answer:
				'Nossa API é simples: obtenha sua chave, siga os endpoints na documentação (exemplos em Node.js, Python, cURL) e utilize webhooks para atualizações em tempo real.'
		},
		{
			question: 'Como funciona a cobrança e a estrutura de preços?',
			answer:
				'Oferecemos preços transparentes baseados em volume, sem taxas ocultas. As tarifas variam conforme região e volume—consulte nossa página de preços ou entre em contato para cotação.'
		},
		{
			question: 'O FinXPay está em conformidade regulatória?',
			answer:
				'Sim. Seguimos todas as normas locais e internacionais de AML/KYC e fornecemos trilhas de auditoria para cada transação.'
		},
		{
			question: 'Posso emitir reembolsos ou cancelamentos parciais?',
			answer:
				'O FinXPay suporta reembolsos totais e parciais, além de fluxos de resolução de disputas via API e dashboard.'
		},
		{
			question: 'Como monitorar e conciliar transações?',
			answer:
				'Use nosso dashboard unificado para visualizar liquidações, baixar relatórios e explore nossa API de análises com IA para insights avançados.'
		}
	]
};
