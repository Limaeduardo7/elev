// Language Switcher
const translations = {
    pt: {
        // Header Navigation
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-services': 'Serviços',
        'nav-testimonials': 'Depoimentos',
        'nav-pricing': 'Preços',

        // Banner Section
        'banner-title': 'Amplifique Sua Marca com Marketing Digital de Ponta',
        'banner-description': 'A Elev Agência Digital capacita empresas a crescer online com marketing digital baseado em dados, branding inovador e estratégias focadas em performance confiáveis por grandes marcas.',
        'banner-button': 'Começar',
        'banner-reviews': '2.7k Avaliações',
        'banner-positive': 'Positivas',

        // Expertise Section
        'expertise-cta-title': 'Pronto para Elevar Sua Presença Digital?',
        'expertise-cta-description': 'Vamos criar uma estratégia personalizada que se adapte aos seus objetivos de negócio.',
        'expertise-cta-link': 'Obter Consulta Gratuita',
        'expertise-subtitle': 'Nossa Especialidade',
        'expertise-title': 'Estratégias Baseadas em Dados, Resultados Mensuráveis',
        'expertise-description': 'Na Elev Agência Digital, nos especializamos em criar estratégias inovadoras de marketing digital que impulsionam o crescimento real dos negócios. Nossa especialidade garante que sua marca permaneça à frente no cenário digital competitivo.',
        'expertise-what-we-do': 'O Que Fazemos de Melhor',
        'expertise-list-1': 'Marketing de Performance',
        'expertise-list-2': 'Crescimento em Mídias Sociais',
        'expertise-list-3': 'Marketing de Conteúdo',
        'expertise-list-4': 'PPC e Anúncios Pagos',
        'expertise-list-5': 'Estratégia de Marca',
        'expertise-list-6': 'Otimização de Conversão',
        'expertise-counter-text': 'Anos de Experiência em Serviços de Marketing Digital',
        'expertise-counter-description': 'Temos mais de 8 anos de experiência ajudando empresas a crescer no mundo digital com estratégias comprovadas e resultados excepcionais.',

        // Why Choose Us Section
        'chooseus-card1-title': 'Abordagem Baseada em Dados',
        'chooseus-card1-description': 'Cada decisão é respaldada por análises em tempo real para máximo impacto e resultados mensuráveis para seu negócio.',
        'chooseus-card1-link': 'Leia Mais',
        'chooseus-card2-title': 'Criativo e Inovador',
        'chooseus-card2-description': 'Técnicas de marketing de ponta para mantê-lo à frente da concorrência com soluções criativas e inovadoras.',
        'chooseus-card2-link': 'Leia Mais',
        'chooseus-card3-title': 'Relatórios Transparentes',
        'chooseus-card3-description': 'Insights claros e acompanhamento de performance, para que você sempre saiba seu ROI e os resultados de seus investimentos.',
        'chooseus-card3-link': 'Leia Mais',
        'chooseus-subtitle': 'Por Que Escolher a Elev Agência Digital',
        'chooseus-title': 'Seu Sucesso é Nossa Missão',
        'chooseus-description': 'No mundo digital acelerado de hoje, escolher o parceiro de marketing certo faz toda a diferença. Na Elev Agência Digital, desenvolvemos estratégias inteligentes e personalizadas que entregam resultados concretos e sucesso mensurável para o seu negócio.',
        'chooseus-cta-title': 'Seja parceiro da Elev Agência Digital e leve sua marca ao próximo nível.',
        'chooseus-cta-link': 'Vamos Falar Sobre Estratégia',

        // Services Section
        'services-subtitle': 'Nossos Serviços Principais',
        'services-title': 'Soluções Digitais que Geram Resultados Reais',
        'service1-title': 'Tráfego Pago',
        'service1-description': 'Aumente sua visibilidade online e conquiste resultados rápidos com campanhas estratégicas de anúncios pagos em Google, Facebook e Instagram.',
        'service1-button': 'Ver Detalhes',
        'service2-title': 'Marketing de Conteúdo',
        'service2-description': 'Crie conteúdo envolvente que ressoe com seu público-alvo e impulsione o engajamento da marca.',
        'service2-button': 'Ver Detalhes',
        'service3-title': 'Automações com Inteligência Artificial',
        'service3-description': 'Otimize processos e aumente a eficiência do seu negócio com soluções inteligentes de automação utilizando IA de ponta.',
        'service3-button': 'Ver Detalhes',
        'service4-title': 'Email Marketing',
        'service4-description': 'Desenvolva relacionamentos duradouros com seus clientes através de campanhas de email personalizadas.',
        'service4-button': 'Ver Detalhes',
        'service5-title': 'Branding e Design',
        'service5-description': 'Crie uma identidade visual forte e memorável que destaque sua marca no mercado.',
        'service5-button': 'Ver Detalhes',
        'service6-title': 'Desenvolvimento Web',
        'service6-description': 'Desenvolva websites responsivos e otimizados que convertem visitantes em clientes.',
        'service6-button': 'Ver Detalhes',
        'services-footer': 'Precisa de uma solução personalizada? Vamos criar uma estratégia sob medida para seu negócio.',
        'services-footer-link': 'Obtenha uma Consultoria Gratuita',

        // Testimonials Section
        'testimonials-reviews': '2.7k Avaliações',
        'testimonials-positive': 'Positivas',
        'testimonials-improved': 'Projetos Aprimorados',
        'testimonials-new': 'Novos Projetos',
        'testimonials-link1': 'Crescimento em Mídias Sociais',
        'testimonials-link2': 'Marketing de Performance',
        'testimonials-subtitle': 'O Que Nossos Clientes Dizem',
        'testimonials-title': 'Ouça Nossos Clientes Satisfeitos, Histórias Reais de Sucesso',
        'testimonials-description': 'Descubra como empresas como a sua alcançaram crescimento excepcional com as soluções especializadas de marketing digital da Elev Agência Digital.',
        'testimonial-name': 'Henrique Tavares',
        'testimonial-role': 'Diretor de Marketing',
        'testimonial-text': 'Depois de testar várias agências, a Elev Agência Digital superou todas as expectativas. Sua metodologia data-driven e criatividade estratégica nos colocaram na liderança do mercado.',

        // Digital Process Section
        'process-subtitle': 'Como Funciona',
        'process-title': 'Passos Simples para o Sucesso Digital',
        'process-description': 'Nosso processo simplificado garante que seu crescimento digital seja fluido e eficaz. Trabalhamos com metodologia comprovada para entregar resultados excepcionais.',
        'process-link': 'Comece Agora',
        'process-step1-title': 'Descoberta e Consulta',
        'process-step1-description': 'Analisamos profundamente seu negócio, público-alvo e objetivos para criar uma estratégia personalizada.',
        'process-step2-title': 'Estratégia e Planejamento',
        'process-step2-description': 'Desenvolvemos um plano estratégico detalhado com métricas claras e cronogramas definidos.',
        'process-step3-title': 'Execução e Otimização',
        'process-step3-description': 'Implementamos as ações planejadas com monitoramento contínuo e ajustes para otimizar resultados.',
        'process-step4-title': 'Resultados e Crescimento',
        'process-step4-description': 'Entregamos resultados mensuráveis e sustentamos o crescimento contínuo do seu negócio.',

        // Pricing Section
        'pricing-subtitle': 'Orçamentos Personalizados',
        'pricing-title': 'Soluções Sob Medida para o Seu Negócio',
        'pricing-description': 'Na Elev, cada cliente é único. Por isso, criamos estratégias e orçamentos personalizados que se adaptam perfeitamente às suas necessidades e objetivos específicos.',
        'pricing-card1-title': 'Consultoria Gratuita',
        'pricing-card1-description': 'Vamos entender suas necessidades, analisar seu negócio e propor a melhor estratégia digital para você alcançar seus objetivos.',
        'pricing-card1-item1': 'Análise completa do seu negócio',
        'pricing-card1-item2': 'Diagnóstico da presença digital atual',
        'pricing-card1-item3': 'Identificação de oportunidades',
        'pricing-card1-item4': 'Proposta estratégica personalizada',
        'pricing-card1-item5': 'Orçamento sob medida',
        'pricing-card1-button': 'Solicitar Orçamento',
        'pricing-card2-title': 'Por Que Personalizado?',
        'pricing-card2-benefit1': 'Estratégia Focada nos Seus Objetivos',
        'pricing-card2-benefit2': 'Investimento Otimizado',
        'pricing-card2-benefit3': 'Soluções Escaláveis',
        'pricing-card2-benefit4': 'Atendimento Dedicado',
        'pricing-card2-benefit5': 'Resultados Mensuráveis',
        'pricing-card2-benefit6': 'Expertise Especializada',
        'pricing-card3-title': 'Como Funciona',
        'pricing-card3-item1': 'Entre em contato pelo WhatsApp',
        'pricing-card3-item2': 'Agende sua consultoria gratuita',
        'pricing-card3-item3': 'Compartilhe suas necessidades e objetivos',
        'pricing-card3-item4': 'Receba uma proposta personalizada',
        'pricing-card3-item5': 'Aprovação e início da parceria',
        'pricing-card3-link': 'Tire suas Dúvidas',

        // Newsletter Section
        'newsletter-title': 'Fique à Frente no Marketing Digital',
        'newsletter-description': 'Receba insights exclusivos, tendências e estratégias diretamente em sua caixa de entrada. Inscreva-se agora!',
        'newsletter-success': 'Obrigado! Formulário enviado com sucesso.',
        'newsletter-error': 'Ops! O envio do formulário falhou. Tente novamente.',
        'newsletter-placeholder': 'Digite seu melhor email',
        'newsletter-button': 'Inscrever-se'
    },
    en: {
        // Header Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-testimonials': 'Testimonials',
        'nav-pricing': 'Pricing',

        // Banner Section
        'banner-title': 'Amplify Your Brand with Cutting-Edge Digital Marketing',
        'banner-description': 'Elev Digital Agency empowers businesses to grow online with data-driven digital marketing, innovative branding, and performance-focused strategies trusted by leading brands.',
        'banner-button': 'Get Started',
        'banner-reviews': '2.7k Reviews',
        'banner-positive': 'Positive',

        // Expertise Section
        'expertise-cta-title': 'Ready to Elevate Your Digital Presence?',
        'expertise-cta-description': 'Let\'s create a customized strategy that fits your business goals.',
        'expertise-cta-link': 'Get Free Consultation',
        'expertise-subtitle': 'Our Expertise',
        'expertise-title': 'Data-Driven Strategies, Measurable Results',
        'expertise-description': 'At Elev Digital Agency, we specialize in creating innovative digital marketing strategies that drive real business growth. Our expertise ensures your brand stays ahead in the competitive digital landscape.',
        'expertise-what-we-do': 'What We Do Best',
        'expertise-list-1': 'Performance Marketing',
        'expertise-list-2': 'Social Media Growth',
        'expertise-list-3': 'Content Marketing',
        'expertise-list-4': 'PPC & Paid Advertising',
        'expertise-list-5': 'Brand Strategy',
        'expertise-list-6': 'Conversion Optimization',
        'expertise-counter-text': 'Years of Experience in Digital Marketing Services',
        'expertise-counter-description': 'We have over 8 years of experience helping businesses grow in the digital world with proven strategies and exceptional results.',

        // Why Choose Us Section
        'chooseus-card1-title': 'Data-Driven Approach',
        'chooseus-card1-description': 'Every decision is backed by real-time analytics for maximum impact and measurable results for your business.',
        'chooseus-card1-link': 'Read More',
        'chooseus-card2-title': 'Creative and Innovative',
        'chooseus-card2-description': 'Cutting-edge marketing techniques to keep you ahead of the competition with creative and innovative solutions.',
        'chooseus-card2-link': 'Read More',
        'chooseus-card3-title': 'Transparent Reporting',
        'chooseus-card3-description': 'Clear insights and performance tracking, so you always know your ROI and the results of your investments.',
        'chooseus-card3-link': 'Read More',
        'chooseus-subtitle': 'Why Choose Elev Digital Agency',
        'chooseus-title': 'Your Success is Our Mission',
        'chooseus-description': 'In today\'s fast-paced digital world, choosing the right marketing partner makes all the difference. At Elev Digital Agency, we develop smart, personalized strategies that deliver concrete results and measurable success for your business.',
        'chooseus-cta-title': 'Partner with Elev Digital Agency and take your brand to the next level.',
        'chooseus-cta-link': 'Let\'s Talk Strategy',

        // Services Section
        'services-subtitle': 'Our Main Services',
        'services-title': 'Digital Solutions That Generate Real Results',
        'service1-title': 'Paid Traffic',
        'service1-description': 'Increase your online visibility and achieve fast results with strategic paid advertising campaigns on Google, Facebook, and Instagram.',
        'service1-button': 'View Details',
        'service2-title': 'Content Marketing',
        'service2-description': 'Create engaging content that resonates with your target audience and drives brand engagement.',
        'service2-button': 'View Details',
        'service3-title': 'AI Automations',
        'service3-description': 'Optimize processes and increase your business efficiency with intelligent automation solutions using cutting-edge AI.',
        'service3-button': 'View Details',
        'service4-title': 'Email Marketing',
        'service4-description': 'Build lasting relationships with your customers through personalized email campaigns.',
        'service4-button': 'View Details',
        'service5-title': 'Branding & Design',
        'service5-description': 'Create a strong and memorable visual identity that sets your brand apart in the market.',
        'service5-button': 'View Details',
        'service6-title': 'Web Development',
        'service6-description': 'Develop responsive and optimized websites that convert visitors into customers.',
        'service6-button': 'View Details',
        'services-footer': 'Need a custom solution? Let\'s create a tailor-made strategy for your business.',
        'services-footer-link': 'Get a Free Consultation',

        // Testimonials Section
        'testimonials-reviews': '2.7k Reviews',
        'testimonials-positive': 'Positive',
        'testimonials-improved': 'Projects Improved',
        'testimonials-new': 'New Projects',
        'testimonials-link1': 'Social Media Growth',
        'testimonials-link2': 'Performance Marketing',
        'testimonials-subtitle': 'What Our Clients Say',
        'testimonials-title': 'Hear From Our Satisfied Clients, Real Success Stories',
        'testimonials-description': 'Discover how businesses like yours achieved exceptional growth with Elev Digital Agency\'s specialized digital marketing solutions.',
        'testimonial-name': 'Henry Tavares',
        'testimonial-role': 'Marketing Director',
        'testimonial-text': 'After testing several agencies, Elev Digital Agency exceeded all expectations. Their data-driven methodology and strategic creativity put us at the forefront of the market.',

        // Digital Process Section
        'process-subtitle': 'How It Works',
        'process-title': 'Simple Steps to Digital Success',
        'process-description': 'Our streamlined process ensures your digital growth is smooth and effective. We work with proven methodology to deliver exceptional results.',
        'process-link': 'Get Started Now',
        'process-step1-title': 'Discovery & Consultation',
        'process-step1-description': 'We deeply analyze your business, target audience, and goals to create a personalized strategy.',
        'process-step2-title': 'Strategy & Planning',
        'process-step2-description': 'We develop a detailed strategic plan with clear metrics and defined timelines.',
        'process-step3-title': 'Execution & Optimization',
        'process-step3-description': 'We implement planned actions with continuous monitoring and adjustments to optimize results.',
        'process-step4-title': 'Results & Growth',
        'process-step4-description': 'We deliver measurable results and sustain continuous growth for your business.',

        // Pricing Section
        'pricing-subtitle': 'Custom Quotes',
        'pricing-title': 'Tailored Solutions for Your Business',
        'pricing-description': 'At Elev, every client is unique. That\'s why we create personalized strategies and quotes that perfectly adapt to your specific needs and goals.',
        'pricing-card1-title': 'Free Consultation',
        'pricing-card1-description': 'We\'ll understand your needs, analyze your business, and propose the best digital strategy for you to achieve your goals.',
        'pricing-card1-item1': 'Complete business analysis',
        'pricing-card1-item2': 'Current digital presence diagnosis',
        'pricing-card1-item3': 'Opportunity identification',
        'pricing-card1-item4': 'Personalized strategic proposal',
        'pricing-card1-item5': 'Custom quote',
        'pricing-card1-button': 'Request Quote',
        'pricing-card2-title': 'Why Personalized?',
        'pricing-card2-benefit1': 'Strategy Focused on Your Goals',
        'pricing-card2-benefit2': 'Optimized Investment',
        'pricing-card2-benefit3': 'Scalable Solutions',
        'pricing-card2-benefit4': 'Dedicated Support',
        'pricing-card2-benefit5': 'Measurable Results',
        'pricing-card2-benefit6': 'Specialized Expertise',
        'pricing-card3-title': 'How It Works',
        'pricing-card3-item1': 'Contact us via WhatsApp',
        'pricing-card3-item2': 'Schedule your free consultation',
        'pricing-card3-item3': 'Share your needs and goals',
        'pricing-card3-item4': 'Receive a personalized proposal',
        'pricing-card3-item5': 'Approval and partnership start',
        'pricing-card3-link': 'Have Questions?',

        // Newsletter Section
        'newsletter-title': 'Stay Ahead in Digital Marketing',
        'newsletter-description': 'Receive exclusive insights, trends, and strategies directly in your inbox. Subscribe now!',
        'newsletter-success': 'Thank you! Form submitted successfully.',
        'newsletter-error': 'Oops! Form submission failed. Please try again.',
        'newsletter-placeholder': 'Enter your best email',
        'newsletter-button': 'Subscribe'
    }
};

// Get current language from localStorage or default to 'pt'
let currentLang = localStorage.getItem('language') || 'pt';

// Function to change language
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-lang-key attribute
    const elementsWithLangKey = document.querySelectorAll('[data-lang-key]');
    console.log('Found', elementsWithLangKey.length, 'elements with data-lang-key');

    elementsWithLangKey.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn('Translation not found for key:', key, 'in language:', lang);
        }
    });

    // Update all elements with data-lang-placeholder attribute
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update language toggle text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'pt' ? 'EN' : 'PT';
    }

    console.log('Language change completed');
}

// Initialize language switcher
function initLanguageSwitcher() {
    console.log('Initializing language switcher...');

    // Set initial language
    changeLanguage(currentLang);

    // Add click event to language toggle
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        console.log('Language switch button found, attaching event listener');
        langSwitch.addEventListener('click', function() {
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            console.log('Switching language to:', newLang);
            changeLanguage(newLang);
        });
    } else {
        console.warn('Language switch button not found');
    }
}
