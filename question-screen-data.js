/**
 * Conteúdo da Trilha NR 20 - Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis
 * Tipos: cover | content | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR 20 - Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos da NR 20, Classificação e Propriedades Físico-Químicas dos Inflamáveis",
      objective: "Apresentar a base regulamentar da NR 20, o campo de aplicação, as exceções legais, a classificação oficial das instalações industriais e a análise das propriedades físico-químicas, perigos e riscos dos produtos inflamáveis e combustíveis.",
      titleUnlock: {
        title: "FRASES NO LUGAR",
        body: "Você separou o que a NR 20 afirma sobre inflamáveis, classes, GLP e FISPQ.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m1-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Capa do módulo 1",
          title: "Módulo 1 — Fundamentos da NR 20, Classificação e Propriedades Físico-Químicas dos Inflamáveis",
          subtitle: "Base da NR 20, classificação das instalações e propriedades dos inflamáveis e combustíveis.",
          transcript: "Módulo 1. Fundamentos da NR 20, classificação e propriedades físico-químicas dos inflamáveis. Base regulamentar, campo de aplicação, exceções legais, classificação das instalações e propriedades dos inflamáveis e combustíveis."
        },
        {
          id: "nr20-m1-diretrizes",
          type: "video",
          kicker: "Vídeo",
          title: "Diretrizes Globais da NR 20: Objetivo, Público e Abrangência",
          playerId: "panda-fe2f6d94-fe3c-4430-ac1e-a224fd5de180",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fe2f6d94-fe3c-4430-ac1e-a224fd5de180"
        },
        {
          id: "nr20-m1-definicoes",
          type: "content",
          layout: "defs",
          kicker: "Classificação",
          title: "Definições",
          body: "A NR 20 separa os produtos pelo ponto de fulgor e pela condição em que inflamam.",
          items: [
            {
              tag: "Ponto de fulgor",
              metric: "< 60",
              unit: "°C",
              title: "Líquidos inflamáveis",
              text: "São líquidos que possuem ponto de fulgor menor que 60 °C."
            },
            {
              tag: "No ar",
              metric: "20",
              unit: "°C",
              extra: "101,3 kPa",
              title: "Gases inflamáveis",
              text: "Gases que inflamam com o ar a 20 °C e à pressão padrão de 101,3 kPa."
            },
            {
              tag: "Ponto de fulgor",
              metric: "60–93",
              unit: "°C",
              title: "Líquidos combustíveis",
              text: "São líquidos com ponto de fulgor maior que 60 °C e menor que 93 °C."
            }
          ],
          transcript: "Definições. A classificação da NR 20 separa os produtos pelo ponto de fulgor e pela condição em que inflamam. Líquidos inflamáveis são líquidos que possuem ponto de fulgor menor que 60 graus Celsius. Gases inflamáveis são gases que inflamam com o ar a 20 graus Celsius e a uma pressão padrão de 101,3 quilopascals. Líquidos combustíveis são líquidos com ponto de fulgor maior que 60 graus Celsius e menor que 93 graus Celsius."
        },
        {
          id: "nr20-m1-classes",
          type: "content",
          layout: "defs",
          kicker: "Instalações",
          title: "Classes das instalações",
          body: "A NR 20 divide as instalações em três classes.",
          items: [
            {
              tag: "Postos e depósitos",
              metric: "I",
              title: "Classe I",
              text: "Postos de combustível e depósitos de gás de 2 a 60 toneladas ou líquidos de 10 a 5.000 m³."
            },
            {
              tag: "Engarrafadoras e dutos",
              metric: "II",
              title: "Classe II",
              text: "Engarrafadoras, transporte por dutos e estoques de gás até 600 toneladas ou líquidos até 50.000 m³."
            },
            {
              tag: "Grandes plantas",
              metric: "III",
              title: "Classe III",
              text: "Grandes plantas, como refinarias, petroquímicas e usinas de etanol."
            }
          ],
          transcript: "Classes das instalações. A NR 20 divide as instalações em três classes. A Classe I inclui postos de combustível e depósitos de gás de 2 a 60 toneladas ou líquidos de 10 a 5.000 metros cúbicos. A Classe II engloba engarrafadoras, transporte por dutos e estoques de gás até 600 toneladas ou líquidos até 50.000 metros cúbicos. A Classe III reúne grandes plantas, como refinarias, petroquímicas e usinas de etanol."
        },
        {
          id: "nr20-m1-glp",
          type: "video",
          kicker: "Vídeo",
          title: "Propriedades Físico-Químicas e Estudo de Caso: GLP",
          playerId: "panda-20519fb0-8a21-4877-8f25-69e4a5a0c72a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=20519fb0-8a21-4877-8f25-69e4a5a0c72a"
        },
        {
          id: "nr20-m1-vapores",
          type: "video",
          kicker: "Vídeo",
          title: "Vapores Inflamáveis, Riscos de Explosão e Uso da FISPQ",
          playerId: "panda-28244be0-088c-46f1-a702-559392f6352d",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=28244be0-088c-46f1-a702-559392f6352d"
        },
        {
          id: "nr20-m1-vf",
          type: "sort",
          vf: true,
          title: "Verdadeiro ou falso",
          body: "Leia a frase e toque em Falso ou Verdadeiro. Acerte no mínimo 4 de 5.",
          transcript: "Verdadeiro ou falso. Leia a frase e toque em Falso ou Verdadeiro. Acerte no mínimo quatro de cinco.",
          time: 60,
          minCorrect: 4,
          left: { id: "falso", label: "Falso", icon: "F" },
          right: { id: "verdadeiro", label: "Verdadeiro", icon: "V" },
          items: [
            {
              text: "A NR 20 vale para residência unifamiliar e para plataforma marítima de petróleo e gás.",
              bin: "falso",
              hint: "Residência unifamiliar fica de fora. Plataforma marítima segue a NR-30."
            },
            {
              text: "Líquido inflamável tem ponto de fulgor igual ou inferior a 60 °C.",
              bin: "verdadeiro",
              hint: "Até 60 °C o líquido é inflamável. O combustível fica entre 60 °C e 93 °C."
            },
            {
              text: "Um depósito com 20.000 m³ de combustível é Classe I.",
              bin: "falso",
              hint: "Classe I vai até 5.000 m³ de líquido. 20.000 m³ é Classe II."
            },
            {
              text: "O cheiro do GLP vem do propano e do butano.",
              bin: "falso",
              hint: "Propano e butano são inodoros. O cheiro é da mercaptana."
            },
            {
              text: "A FISPQ fica acessível no local de trabalho, com os riscos, os limites e as medidas de emergência.",
              bin: "verdadeiro",
              hint: "A ficha de informação de segurança tem de estar acessível no trabalho."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Controle de Fontes de Ignição, Armazenamento Seguro e Medidas de Prevenção",
      objective: "Mapear todas as potenciais fontes de ignição nos ambientes de trabalho e estabelecer as diretrizes técnicas para controle de engenharia, aterramento elétrico, armazenamento seguro de recipientes e manutenção preventiva.",
      titleUnlock: {
        title: "FRASES NO LUGAR",
        body: "Você associou aterramento, trabalho a quente, palete, empilhamento e tambor vazio.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m2-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Capa do módulo 2",
          title: "Módulo 2 — Controle de Fontes de Ignição, Armazenamento Seguro e Medidas de Prevenção",
          subtitle: "Fontes de ignição, aterramento elétrico, armazenamento de recipientes e manutenção preventiva.",
          transcript: "Módulo 2. Controle de fontes de ignição, armazenamento seguro e medidas de prevenção. Fontes de ignição, aterramento elétrico, armazenamento de recipientes e manutenção preventiva."
        },
        {
          id: "nr20-m2-ignicao",
          type: "video",
          kicker: "Vídeo",
          title: "Mapeamento e Controle das Fontes de Ignição",
          playerId: "panda-83d5c94f-2d24-470f-865f-65b2f524522e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=83d5c94f-2d24-470f-865f-65b2f524522e"
        },
        {
          id: "nr20-m2-fontes",
          type: "content",
          layout: "fontes",
          kicker: "Controle",
          title: "Sete fontes de ignição",
          body: "Devemos mapear e controlar rigorosamente estas sete fontes no ambiente de trabalho.",
          items: [
            { title: "Chamas abertas" },
            { title: "Ato de fumar" },
            { title: "Serviços a quente", text: "Solda e corte" },
            { title: "Superfícies aquecidas" },
            { title: "Eletricidade estática" },
            { title: "Faíscas mecânicas", text: "Atrito de ferramentas" },
            { title: "Arcos elétricos" }
          ],
          note: "Para evitar acúmulos perigosos, as instalações devem contar com sistemas de ventilação adequada e isolamento rigoroso de processos e operações perigosas, seja em ambientes confinados, externos ou compartimentados.",
          tags: ["Ventilação adequada", "Isolamento rigoroso"],
          transcript: "Sete fontes de ignição. Devemos mapear e controlar rigorosamente sete fontes principais no ambiente de trabalho: chamas abertas, o ato de fumar, serviços a quente como solda e corte, superfícies aquecidas, eletricidade estática, faíscas mecânicas geradas pelo atrito de ferramentas e arcos elétricos. Para evitar acúmulos perigosos, as instalações devem contar com sistemas de ventilação adequada e isolamento rigoroso de processos e operações perigosas, seja em ambientes confinados, externos ou compartimentados."
        },
        {
          id: "nr20-m2-aterramento",
          type: "video",
          kicker: "Vídeo",
          title: "Aterramento Elétrico e Prevenção de Eletricidade Estática",
          playerId: "panda-7d39b9ae-d621-4186-9bfa-6201f9567877",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7d39b9ae-d621-4186-9bfa-6201f9567877"
        },
        {
          id: "nr20-m2-armazenamento",
          type: "video",
          kicker: "Vídeo",
          title: "Regras Estritas de Armazenamento e Estocagem de Recipientes",
          playerId: "panda-fa72f404-f314-43f1-b9e0-db4546cd5c58",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fa72f404-f314-43f1-b9e0-db4546cd5c58"
        },
        {
          id: "nr20-m2-manutencao",
          type: "video",
          kicker: "Vídeo",
          title: "Organização, Limpeza e Manutenção Preventiva",
          playerId: "panda-e0ea5407-c282-4a0a-814f-1b6732e33802",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e0ea5407-c282-4a0a-814f-1b6732e33802"
        },
        {
          id: "nr20-m2-pares",
          type: "match",
          title: "Associe os pares",
          leftTitle: "Medida",
          rightTitle: "O que vale",
          minCorrect: 5,
          transcript: "Associe os pares. Toque em uma medida e depois no que vale para ela. São cinco pares: aterramento, trabalho a quente, palete, empilhamento e tambor vazio.",
          pairs: [
            { ex: "Aterramento elétrico", body: "Dissipa a estática" },
            { ex: "Trabalho a quente", body: "Solda e corte" },
            { ex: "Palete", body: "Fora do piso" },
            { ex: "Empilhamento", body: "Só um recipiente" },
            { ex: "Tambor vazio", body: "Sai do local" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Equipamentos de Proteção Coletiva (EPC), Individual (EPI) e Proteção Contra Incêndios",
      objective: "Detalhar a aplicação hierárquica dos Equipamentos de Proteção Coletiva (EPC) e Individual (EPI) conforme a NR-6 e capacitar o aluno no reconhecimento e operação dos sistemas manuais, fixos e automáticos de proteção contra incêndio.",
      titleUnlock: {
        title: "AÇÃO CERTA",
        body: "Você escolheu o CA, o extintor e a proteção do tanque.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m3-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Capa do módulo 3",
          title: "Módulo 3 — Equipamentos de Proteção Coletiva (EPC), Individual (EPI) e Proteção Contra Incêndios",
          subtitle: "Hierarquia de EPC e EPI na NR-6 e sistemas de proteção contra incêndio.",
          transcript: "Módulo 3. Equipamentos de proteção coletiva, EPC, individual, EPI, e proteção contra incêndios. Hierarquia de proteção na NR 6 e sistemas de combate a incêndio."
        },
        {
          id: "nr20-m3-epc",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Coletiva (EPC) e Hierarquia de Segurança",
          playerId: "panda-ac316cca-b60d-448e-9de8-060c3334a1c7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ac316cca-b60d-448e-9de8-060c3334a1c7"
        },
        {
          id: "nr20-m3-epi",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Individual (EPI), Regras da NR-6 e o CA",
          playerId: "panda-7082a746-7133-451a-a3af-43dad9216aff",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7082a746-7133-451a-a3af-43dad9216aff"
        },
        {
          id: "nr20-m3-epi-corpo",
          type: "content",
          layout: "figure",
          wide: true,
          title: "Seleção de EPIs por Parte do Corpo e Traje Estrutural de Combate",
          body: "A seleção do EPI deve proteger cada parte do corpo exposta aos riscos.",
          image: "assets/fotos/EPI.png",
          imageAlt: "Seleção de EPIs por parte do corpo e traje estrutural de combate a incêndio",
          transcript: "Seleção de EPIs por parte do corpo e traje estrutural de combate. A seleção do EPI deve proteger cada parte do corpo exposta aos riscos."
        },
        {
          id: "nr20-m3-incendio",
          type: "video",
          kicker: "Vídeo",
          title: "Sistemas de Proteção Contra Incêndios: Extintores, Água Nebulizada e Espuma",
          playerId: "panda-e9d41615-0e11-4872-b488-4d1ea834c31f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e9d41615-0e11-4872-b488-4d1ea834c31f"
        },
        {
          id: "nr20-m3-combate",
          type: "content",
          title: "Conhecimento e Utilização dos Sistemas de Segurança Contra Incêndio com Inflamáveis",
          stack: [
            {
              image: "assets/fotos/HIDRANTES.png",
              imageAlt: "Tipos de hidrantes de coluna",
              caption: "Tipos de Hidrantes de Coluna"
            },
            {
              image: "assets/fotos/Kit de Segurança.png",
              imageAlt: "Kit de segurança com mangueira, esguicho, adaptador, chave Storz e registro",
              caption: "Kit de segurança"
            },
            {
              image: "assets/fotos/Sinalização de Emergência.png",
              imageAlt: "Placas de rota de fuga, saída e equipamentos de incêndio",
              caption: "Sinalização de segurança"
            },
            {
              image: "assets/fotos/Armário de Mangueiras.png",
              imageAlt: "Armário de mangueiras com duas mangueiras e registro",
              caption: "Armário de mangueiras"
            }
          ],
          transcript: "Conhecimento e utilização dos sistemas de segurança contra incêndio com inflamáveis. Tipos de hidrantes de coluna. Kit de segurança. Sinalização de segurança. Armário de mangueiras."
        },
        {
          id: "nr20-m3-acao3",
          type: "console",
          title: "Ação certa",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Ação certa. Uma situação por vez. Toque na ação certa. São três situações sobre o CA, o extintor e a proteção do tanque.",
          doneText: "As três situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "Chegou um EPI importado sem o número do CA. Pode usar?",
              hint: "Nacional ou importado, o EPI precisa do Certificado de Aprovação. A empresa só fornece item aprovado pelo Ministério do Trabalho.",
              answer: "nao",
              options: [
                { id: "sim", text: "Pode, se a marca for boa" },
                { id: "nao", text: "Não. Sem CA, não uso" }
              ]
            },
            {
              ask: "O depósito tem só líquidos e gases inflamáveis. Qual extintor?",
              hint: "Só líquidos e gases: Pó BC. Se também houver sólido combustível, o extintor é o Pó ABC.",
              answer: "bc",
              options: [
                { id: "abc", text: "Pó ABC, porque sempre serve" },
                { id: "bc", text: "Pó BC" }
              ]
            },
            {
              ask: "O tanque precisa ser resfriado e o derramamento, abafado. O que entra?",
              hint: "A água nebulizada refrigera o tanque. A espuma mecânica abafa o fogo e segura a evaporação do líquido.",
              answer: "sistemas",
              options: [
                { id: "jato", text: "Jato cheio de água no líquido" },
                { id: "sistemas", text: "Água nebulizada e espuma mecânica" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Plano de Ação de Emergência (PAE), Operações de Risco e Resposta a Incidentes",
      objective: "Capacitar os trabalhadores para agir com rapidez, segurança e eficácia em situações de crise, cobrindo a estrutura do PAE, corte de utilidades, abandono de área, contenção de vazamentos e comunicação com órgãos competentes.",
      titleUnlock: {
        title: "CINTO NO LUGAR",
        body: "Você reconhece o EPI, o dever da NR 06, o SPIQ e o ponto de ancoragem no cesto.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m4-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Capa do módulo 4",
          title: "Módulo 4 — Plano de Ação de Emergência (PAE), Operações de Risco e Resposta a Incidentes",
          subtitle: "Estrutura do PAE, corte de utilidades, abandono de área e contenção de vazamentos.",
          transcript: "Módulo 4. Plano de ação de emergência, PAE, operações de risco e resposta a incidentes. Estrutura do PAE, corte de utilidades, abandono de área, contenção de vazamentos e comunicação com os órgãos competentes."
        },
        {
          id: "nr20-m4-pae",
          type: "video",
          kicker: "Vídeo",
          title: "Conceito de Emergência, Estrutura do PAE e Origens de Risco",
          playerId: "panda-998964f0-070f-458f-ac8b-6c993bfa06dd",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=998964f0-070f-458f-ac8b-6c993bfa06dd"
        },
        {
          id: "nr20-m4-vazamentos",
          type: "content",
          layout: "list",
          title: "Emergências com Inflamáveis",
          lead: {
            label: "Pequenos vazamentos",
            text: "Lavar a área com grande quantidade de água."
          },
          listTitle: "Grandes vazamentos",
          bullets: [
            "Isolar a área",
            "Sinalizar o local",
            "Afastar os curiosos",
            "Eliminar as fontes de ignição da área",
            "Impedir a contaminação das fontes, lagos e rios, através do uso de barreiras e dispositivos que possam confinar o produto",
            "Absorver com areia, terra ou outro material absorvente e recolher em embalagem apropriadas para posterior destruição",
            "Avisar imediatamente as autoridades locais: Bombeiros, Órgão Ambiental, Defesa Civil e Polícia Rodoviária"
          ],
          transcript: "Emergências com inflamáveis. Em pequenos vazamentos, lavar a área com grande quantidade de água. Em grandes vazamentos: isolar a área, sinalizar o local, afastar os curiosos, eliminar as fontes de ignição, impedir a contaminação de fontes, lagos e rios, absorver o produto com areia, terra ou outro material absorvente e avisar imediatamente as autoridades locais."
        },
        {
          id: "nr20-m4-brigada",
          type: "video",
          kicker: "Vídeo",
          title: "Atuação da Brigada, Primeiros Socorros e Cortes de Segurança",
          playerId: "panda-b6655311-b205-4185-bab8-edd457471c60",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b6655311-b205-4185-bab8-edd457471c60"
        },
        {
          id: "nr20-m4-abandono",
          type: "video",
          kicker: "Vídeo",
          title: "Protocolo de Abandono de Área e Contenção de Vazamentos",
          playerId: "panda-819f11bd-08e0-4e12-8458-dee74a97ab48",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=819f11bd-08e0-4e12-8458-dee74a97ab48"
        },
        {
          id: "nr20-m4-notificacao",
          type: "video",
          kicker: "Vídeo",
          title: "Análise Dinâmica de Risco, Notificação Ambiental e Quiz do PAE",
          playerId: "panda-8d211acc-963b-4a28-aa67-cf16d8802274",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8d211acc-963b-4a28-aa67-cf16d8802274"
        },
        {
          id: "nr18-m4-console",
          type: "console",
          title: "Cinto certo",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Cinto certo. Uma situação por vez. Toque na ação certa.",
          doneText: "As situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "Pela NR 06, o EPI é um equipamento de uso:",
              hint: "É o dispositivo de uso individual que protege a segurança e a saúde. Na PEMT: capacete com jugular, bota com biqueira, óculos e luvas.",
              answer: "individual",
              options: [
                { id: "coletivo", text: "Coletivo, da equipe" },
                { id: "individual", text: "Individual, do trabalhador" }
              ]
            },
            {
              ask: "O EPI rasgou no meio do turno. O que você faz?",
              hint: "Use só para a finalidade certa, guarde, higienize e avise na hora quando ele ficar impróprio.",
              answer: "aviso",
              options: [
                { id: "sigo", text: "Sigo usando" },
                { id: "aviso", text: "Aviso que ficou impróprio" }
              ]
            },
            {
              ask: "Onde o talabarte fica preso no cesto?",
              hint: "Todos no cesto usam SPIQ, ligado só no ponto indicado pelo fabricante. Não no guarda-corpo, na tubulação ou no prédio.",
              answer: "fabricante",
              options: [
                { id: "guarda", text: "No guarda-corpo" },
                { id: "fabricante", text: "No ponto do fabricante" }
              ]
            },
            {
              ask: "O cinturão paraquedista ficou frouxo. Você sobe?",
              hint: "Ajuste peito e pernas antes. Cinto frouxo machuca órgão e coluna na queda. O talabarte vai na meia-argola dorsal.",
              answer: "ajusto",
              options: [
                { id: "depois", text: "Sim. Aperto depois" },
                { id: "ajusto", text: "Não. Ajusto antes" }
              ]
            },
            {
              ask: "O vento passou de 45 km/h. Você sobe mesmo assim?",
              hint: "Não opere acima de 45 km/h nem a menos de 3 metros da rede. Cinto no ponto certo e sem sair do cesto.",
              answer: "nao",
              options: [
                { id: "subo", text: "Subo. O cinto segura" },
                { id: "nao", text: "Não subo" }
              ]
            }
          ]
        },
        {
          id: "nr11-m4-final",
          type: "finale",
          image: "assets/fotos/capafinal.png",
          kicker: "Conclusão",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento de NR 20 - Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis.",
          quote: "Proteger o coletivo é sempre a primeira escolha.",
          chips: ["NR-20", "BÁSICO", "INFLAMÁVEIS"],
          transcript: "Conclusão. Treinamento concluído. Parabéns. Você concluiu o treinamento de NR 20, Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis. Proteger o coletivo é sempre a primeira escolha."
        }
      ]
    }
  ]
};
