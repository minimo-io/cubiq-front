import type { Faq } from '$lib/type/faq.types';

export const bagityFaqs: Record<string, Faq[]> = {
	en: [
		{
			question: 'How does Store pricing work?',
			answer:
				'Store pricing is divided into two clear phases: Implementation (one-time investment for custom development) and Maintenance (ongoing monthly subscription). Implementation covers all custom work to launch your store, while Maintenance ensures ongoing support, updates, and infrastructure. We offer predictable pricing with no hidden fees or sales commissions.'
		},
		{
			question: 'What happens during the Implementation phase?',
			answer:
				'Implementation is where we build your unique store from scratch. We handle custom design in Figma, configure servers and integrations, connect your ERPs and APIs, and provide humanized support throughout the process. This phase transforms your vision into a live, fully-functional e-commerce platform tailored to your business needs.'
		},
		{
			question: "What's the difference between Starter, Pro, and Enterprise plans?",
			answer:
				'The plans differ in scale and strategic depth. Starter covers essential infrastructure and basic support—ideal for launching and testing. Pro adds dedicated management, advanced features like Content AI and analytics, and more development hours for continuous improvement. Enterprise is for businesses needing scalable architecture, 24/7 support, strategic consulting, and cutting-edge features like MCP Server integration.'
		},
		{
			question: 'What is an MCP Server and why should I care?',
			answer:
				"MCP Server (Model Context Protocol) is technology that lets AI models like Claude and ChatGPT communicate directly with your store's data in real-time. This enables conversational shopping experiences, intelligent product recommendations, and AI-powered customer support. It's how we're preparing e-commerce for the AI-driven future—where customers can naturally talk to your store and get instant, personalized assistance."
		},
		{
			question: 'Why do Bitcoin-only stores get 50% OFF?',
			answer:
				"We believe in Bitcoin's potential to transform commerce. By offering 50% OFF implementation for Bitcoin-only stores, we're incentivizing early adoption and supporting businesses that want to operate entirely with Bitcoin payments. It's our way of investing in the future of decentralized digital currency."
		},
		{
			question: 'How customizable is Store compared to platforms like Shopify or WooCommerce?',
			answer:
				"Unlike template-based platforms, Store offers unlimited customization through headless architecture. We design everything in Figma according to your brand, build custom integrations with your systems, and create unique UX flows. You're not constrained by themes or plugins—if you can imagine it, we can build it. This is true bespoke e-commerce, not configuration of existing templates."
		},
		{
			question: 'What does "headless" technology mean for my business?',
			answer:
				"Headless means your store's front-end (what customers see) is separated from the back-end (where data lives). This gives you faster performance, complete design freedom, and the ability to sell across multiple channels—website, mobile app, social media, marketplaces—all powered by the same product data. It's more flexible, more performant, and future-proof."
		},
		{
			question: 'Can Store integrate with my existing ERP or business systems?',
			answer:
				'Yes. Custom integrations are core to what we do. During Implementation, we connect your existing ERPs, inventory systems, CRMs, and other business tools through quality APIs and webhooks. Higher-tier plans include ongoing integration support and can handle complex, enterprise-level system architectures. We adapt to your workflow, not the other way around.'
		},
		{
			question: 'What payment methods can my customers use?',
			answer:
				'Starter plan includes one payment gateway of your choice (Mercado Pago, Stripe, PayPal, etc.) plus optional Bitcoin/USDT payments. Pro plan includes up to 3 payment gateways plus Bitcoin/USDT. Enterprise plan offers 3+ payment gateways plus Bitcoin/USDT payments. All plans give your customers flexibility at checkout, helping you optimize conversion rates across different payment preferences.'
		},
		{
			question: 'How does Content AI work and what does it do?',
			answer:
				"Content AI automatically generates product descriptions, marketing copy, SEO-optimized content, and personalized recommendations. Instead of manually writing descriptions for hundreds of products, AI analyzes your catalog and creates compelling, unique content that improves search rankings and customer engagement. It's included in Pro and Enterprise plans."
		},
		{
			question: 'What are "maintenance hours" and how do they work?',
			answer:
				'Maintenance hours are your ongoing development budget. Use them for design updates, new features, integration adjustments, bug fixes, content updates, or performance optimization. Think of them as having a dedicated development team on retainer—you decide priorities, and we execute. Pro and Enterprise plans include dedicated managers to help you maximize this investment strategically.'
		},
		{
			question: 'Do you really study my competitors before building my store?',
			answer:
				"Yes. During onboarding, we research your market segment, analyze competitor strategies, identify gaps and opportunities, and align our approach to give you competitive advantage. This isn't a generic platform deployment—it's strategic e-commerce consulting combined with custom development. We want you to win in your market."
		},
		{
			question: 'What does being a "technology partner" actually mean?',
			answer:
				"It means we're invested in your long-term success, not just delivering a project and disappearing. Pro and Enterprise clients get regular video calls for strategic consulting, dedicated managers who understand your business, and proactive support that anticipates problems before they occur. We build relationships, not just websites. Your growth is our success metric."
		}
	],
	es: [
		{
			question: '¿Cómo funciona el precio de Store?',
			answer:
				'El precio de Store se divide en dos fases claras: Implementación (inversión única para desarrollo personalizado) y Mantenimiento (suscripción mensual continua). La Implementación cubre todo el trabajo personalizado para lanzar tu tienda, mientras que el Mantenimiento garantiza soporte continuo, actualizaciones e infraestructura. Ofrecemos precios predecibles sin tarifas ocultas ni comisiones por ventas.'
		},
		{
			question: '¿Qué sucede durante la fase de Implementación?',
			answer:
				'La Implementación es donde construimos tu tienda única desde cero. Nos encargamos del diseño personalizado en Figma, configuramos servidores e integraciones, conectamos tus ERPs y APIs, y brindamos soporte humanizado durante todo el proceso. Esta fase transforma tu visión en una plataforma de e-commerce en vivo y completamente funcional adaptada a las necesidades de tu negocio.'
		},
		{
			question: '¿Cuál es la diferencia entre los planes Starter, Pro y Enterprise?',
			answer:
				'Los planes difieren en escala y profundidad estratégica. Starter cubre infraestructura esencial y soporte básico—ideal para lanzar y probar. Pro agrega gestión dedicada, funciones avanzadas como Content AI y analíticas, y más horas de desarrollo para mejora continua. Enterprise es para negocios que necesitan arquitectura escalable, soporte 24/7, consultoría estratégica y funciones de vanguardia como integración de MCP Server.'
		},
		{
			question: '¿Qué es un MCP Server y por qué debería importarme?',
			answer:
				'MCP Server (Model Context Protocol) es tecnología que permite a modelos de IA como Claude y ChatGPT comunicarse directamente con los datos de tu tienda en tiempo real. Esto habilita experiencias de compra conversacionales, recomendaciones inteligentes de productos y soporte al cliente impulsado por IA. Es cómo estamos preparando el e-commerce para el futuro impulsado por IA—donde los clientes pueden hablar naturalmente con tu tienda y obtener asistencia instantánea y personalizada.'
		},
		{
			question: '¿Por qué las tiendas solo de Bitcoin obtienen 50% de descuento?',
			answer:
				'Creemos en el potencial de Bitcoin para transformar el comercio. Al ofrecer 50% de descuento en implementación para tiendas solo de Bitcoin, estamos incentivando la adopción temprana y apoyando negocios que quieren operar completamente con pagos en Bitcoin. Es nuestra forma de invertir en el futuro de la moneda digital descentralizada.'
		},
		{
			question:
				'¿Qué tan personalizable es Store en comparación con plataformas como Shopify o WooCommerce?',
			answer:
				'A diferencia de plataformas basadas en plantillas, Store ofrece personalización ilimitada a través de arquitectura headless. Diseñamos todo en Figma según tu marca, construimos integraciones personalizadas con tus sistemas y creamos flujos de UX únicos. No estás limitado por temas o plugins—si puedes imaginarlo, podemos construirlo. Esto es verdadero e-commerce a medida, no configuración de plantillas existentes.'
		},
		{
			question: '¿Qué significa la tecnología "headless" para mi negocio?',
			answer:
				'Headless significa que el front-end de tu tienda (lo que ven los clientes) está separado del back-end (donde viven los datos). Esto te brinda mayor rendimiento, libertad total de diseño y la capacidad de vender a través de múltiples canales—sitio web, aplicación móvil, redes sociales, marketplaces—todo impulsado por los mismos datos de productos. Es más flexible, más eficiente y a prueba de futuro.'
		},
		{
			question: '¿Puede Store integrarse con mi ERP o sistemas empresariales existentes?',
			answer:
				'Sí. Las integraciones personalizadas son fundamentales en lo que hacemos. Durante la Implementación, conectamos tus ERPs existentes, sistemas de inventario, CRMs y otras herramientas empresariales a través de APIs y webhooks de calidad. Los planes de nivel superior incluyen soporte continuo de integración y pueden manejar arquitecturas de sistemas complejas a nivel empresarial. Nos adaptamos a tu flujo de trabajo, no al revés.'
		},
		{
			question: '¿Qué métodos de pago pueden usar mis clientes?',
			answer:
				'El plan Starter incluye una pasarela de pago de tu elección (Mercado Pago, Stripe, PayPal, etc.) más pagos opcionales en Bitcoin/USDT. El plan Pro incluye hasta 3 pasarelas de pago más Bitcoin/USDT. El plan Enterprise ofrece 3+ pasarelas de pago más pagos en Bitcoin/USDT. Todos los planes brindan flexibilidad a tus clientes en el checkout, ayudándote a optimizar las tasas de conversión según diferentes preferencias de pago.'
		},
		{
			question: '¿Cómo funciona Content AI y qué hace?',
			answer:
				'Content AI genera automáticamente descripciones de productos, textos de marketing, contenido optimizado para SEO y recomendaciones personalizadas. En lugar de escribir manualmente descripciones para cientos de productos, la IA analiza tu catálogo y crea contenido único y convincente que mejora el ranking de búsqueda y el engagement del cliente. Está incluido en los planes Pro y Enterprise.'
		},
		{
			question: '¿Qué son las "horas de mantenimiento" y cómo funcionan?',
			answer:
				'Las horas de mantenimiento son tu presupuesto continuo de desarrollo. Úsalas para actualizaciones de diseño, nuevas funciones, ajustes de integración, corrección de errores, actualizaciones de contenido u optimización de rendimiento. Piensa en ellas como tener un equipo de desarrollo dedicado en retención—tú decides las prioridades y nosotros ejecutamos. Los planes Pro y Enterprise incluyen gerentes dedicados para ayudarte a maximizar esta inversión estratégicamente.'
		},
		{
			question: '¿Realmente estudian a mis competidores antes de construir mi tienda?',
			answer:
				'Sí. Durante el onboarding, investigamos tu segmento de mercado, analizamos estrategias de la competencia, identificamos brechas y oportunidades, y alineamos nuestro enfoque para darte ventaja competitiva. Esto no es un despliegue de plataforma genérica—es consultoría estratégica de e-commerce combinada con desarrollo personalizado. Queremos que ganes en tu mercado.'
		},
		{
			question: '¿Qué significa realmente ser un "socio tecnológico"?',
			answer:
				'Significa que estamos invertidos en tu éxito a largo plazo, no solo entregando un proyecto y desapareciendo. Los clientes Pro y Enterprise obtienen videollamadas regulares para consultoría estratégica, gerentes dedicados que entienden tu negocio y soporte proactivo que anticipa problemas antes de que ocurran. Construimos relaciones, no solo sitios web. Tu crecimiento es nuestra métrica de éxito.'
		}
	],
	pt: [
		{
			question: 'Como funciona o preço da Store?',
			answer:
				'O preço da Store é dividido em duas fases claras: Implementação (investimento único para desenvolvimento personalizado) e Manutenção (assinatura mensal contínua). A Implementação cobre todo o trabalho personalizado para lançar sua loja, enquanto a Manutenção garante suporte contínuo, atualizações e infraestrutura. Oferecemos preços previsíveis sem taxas ocultas ou comissões por vendas.'
		},
		{
			question: 'O que acontece durante a fase de Implementação?',
			answer:
				'A Implementação é onde construímos sua loja única do zero. Cuidamos do design personalizado no Figma, configuramos servidores e integrações, conectamos seus ERPs e APIs, e fornecemos suporte humanizado durante todo o processo. Esta fase transforma sua visão em uma plataforma de e-commerce ao vivo e totalmente funcional adaptada às necessidades do seu negócio.'
		},
		{
			question: 'Qual é a diferença entre os planos Starter, Pro e Enterprise?',
			answer:
				'Os planos diferem em escala e profundidade estratégica. O Starter cobre infraestrutura essencial e suporte básico—ideal para lançar e testar. O Pro adiciona gestão dedicada, recursos avançados como Content AI e analytics, e mais horas de desenvolvimento para melhoria contínua. O Enterprise é para negócios que precisam de arquitetura escalável, suporte 24/7, consultoria estratégica e recursos de ponta como integração de MCP Server.'
		},
		{
			question: 'O que é um MCP Server e por que devo me importar?',
			answer:
				'MCP Server (Model Context Protocol) é tecnologia que permite modelos de IA como Claude e ChatGPT se comunicarem diretamente com os dados da sua loja em tempo real. Isso habilita experiências de compra conversacionais, recomendações inteligentes de produtos e suporte ao cliente impulsionado por IA. É como estamos preparando o e-commerce para o futuro impulsionado por IA—onde clientes podem conversar naturalmente com sua loja e obter assistência instantânea e personalizada.'
		},
		{
			question: 'Por que lojas somente Bitcoin ganham 50% de desconto?',
			answer:
				'Acreditamos no potencial do Bitcoin para transformar o comércio. Ao oferecer 50% de desconto na implementação para lojas somente Bitcoin, estamos incentivando a adoção antecipada e apoiando negócios que querem operar completamente com pagamentos em Bitcoin. É nossa forma de investir no futuro da moeda digital descentralizada.'
		},
		{
			question:
				'Quão personalizável é a Store comparada com plataformas como Shopify ou WooCommerce?',
			answer:
				'Ao contrário de plataformas baseadas em templates, a Store oferece personalização ilimitada através de arquitetura headless. Desenhamos tudo no Figma de acordo com sua marca, construímos integrações personalizadas com seus sistemas e criamos fluxos de UX únicos. Você não está limitado por temas ou plugins—se você pode imaginar, nós podemos construir. Isso é verdadeiro e-commerce sob medida, não configuração de templates existentes.'
		},
		{
			question: 'O que significa tecnologia "headless" para meu negócio?',
			answer:
				'Headless significa que o front-end da sua loja (o que os clientes veem) está separado do back-end (onde os dados vivem). Isso te proporciona maior performance, liberdade total de design e a capacidade de vender através de múltiplos canais—site, aplicativo móvel, redes sociais, marketplaces—tudo alimentado pelos mesmos dados de produtos. É mais flexível, mais eficiente e à prova de futuro.'
		},
		{
			question: 'A Store pode se integrar com meu ERP ou sistemas empresariais existentes?',
			answer:
				'Sim. Integrações personalizadas são fundamentais no que fazemos. Durante a Implementação, conectamos seus ERPs existentes, sistemas de inventário, CRMs e outras ferramentas empresariais através de APIs e webhooks de qualidade. Os planos de nível superior incluem suporte contínuo de integração e podem lidar com arquiteturas de sistemas complexas em nível empresarial. Nós nos adaptamos ao seu fluxo de trabalho, não o contrário.'
		},
		{
			question: 'Quais métodos de pagamento meus clientes podem usar?',
			answer:
				'O plano Starter inclui um gateway de pagamento de sua escolha (Mercado Pago, Stripe, PayPal, etc.) mais pagamentos opcionais em Bitcoin/USDT. O plano Pro inclui até 3 gateways de pagamento mais Bitcoin/USDT. O plano Enterprise oferece 3+ gateways de pagamento mais pagamentos em Bitcoin/USDT. Todos os planos dão flexibilidade aos seus clientes no checkout, ajudando você a otimizar taxas de conversão em diferentes preferências de pagamento.'
		},
		{
			question: 'Como funciona o Content AI e o que ele faz?',
			answer:
				'O Content AI gera automaticamente descrições de produtos, textos de marketing, conteúdo otimizado para SEO e recomendações personalizadas. Em vez de escrever manualmente descrições para centenas de produtos, a IA analisa seu catálogo e cria conteúdo único e convincente que melhora o ranking de busca e o engajamento do cliente. Está incluído nos planos Pro e Enterprise.'
		},
		{
			question: 'O que são "horas de manutenção" e como funcionam?',
			answer:
				'As horas de manutenção são seu orçamento contínuo de desenvolvimento. Use-as para atualizações de design, novos recursos, ajustes de integração, correção de bugs, atualizações de conteúdo ou otimização de performance. Pense nelas como ter uma equipe de desenvolvimento dedicada em retenção—você decide as prioridades e nós executamos. Os planos Pro e Enterprise incluem gerentes dedicados para ajudá-lo a maximizar este investimento estrategicamente.'
		},
		{
			question: 'Vocês realmente estudam meus concorrentes antes de construir minha loja?',
			answer:
				'Sim. Durante o onboarding, pesquisamos seu segmento de mercado, analisamos estratégias da concorrência, identificamos lacunas e oportunidades, e alinhamos nossa abordagem para te dar vantagem competitiva. Isso não é uma implantação de plataforma genérica—é consultoria estratégica de e-commerce combinada com desenvolvimento personalizado. Queremos que você vença no seu mercado.'
		},
		{
			question: 'O que realmente significa ser um "parceiro tecnológico"?',
			answer:
				'Significa que estamos investidos no seu sucesso a longo prazo, não apenas entregando um projeto e desaparecendo. Os clientes Pro e Enterprise recebem videochamadas regulares para consultoria estratégica, gerentes dedicados que entendem seu negócio e suporte proativo que antecipa problemas antes que ocorram. Construímos relacionamentos, não apenas sites. Seu crescimento é nossa métrica de sucesso.'
		}
	]
};
