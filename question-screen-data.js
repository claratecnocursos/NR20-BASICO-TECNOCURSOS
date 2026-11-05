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
        title: "TURNO NO LUGAR",
        body: "Você separou o dispositivo obrigatório, o chassi travado, o painel e o checklist diário.",
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
          id: "nr18-m2-dispositivos",
          type: "video",
          kicker: "Vídeo",
          title: "Dispositivos de Segurança Obrigatórios da PEMT",
          playerId: "panda-0b811d0e-2623-45b1-a5f9-94703010f9a6",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0b811d0e-2623-45b1-a5f9-94703010f9a6"
        },
        {
          id: "nr18-m2-dispositivos-lista",
          type: "content",
          layout: "devices",
          kicker: "Segurança",
          eyebrow: "Segurança",
          title: "Dispositivos da PEMT",
          accent: "PEMT",
          body: "A PEMT deve ser dotada de:",
          transcript: "Segurança. Dispositivos da PEMT. A PEMT deve ser dotada de nivelamento. Dispositivos de segurança que garantem seu perfeito nivelamento no ponto de trabalho, conforme especificação do fabricante. Alça de apoio interno. Ponto de apoio fixado no interior do cesto ou plataforma para o operador manter equilíbrio, estabilidade e postura segura durante o trabalho em altura. Proteção contra quedas. Sistema de proteção contra quedas que atenda às especificações do fabricante ou, na falta destas, ao disposto na NR-12. Parada de emergência. Botão de parada de emergência. Descida de emergência. Dispositivo de emergência que possibilite baixar o trabalhador e a plataforma até o solo em caso de pane elétrica, hidráulica ou mecânica. Sinalização sonora. Sistema sonoro automático de sinalização acionado durante a subida e a descida. Proteção elétrica. Proteção contra choque elétrico. Horímetro. Instrumento que mede o tempo de funcionamento de um motor ou equipamento.",
          items: [
            {
              icon: "⚖️",
              title: "Nivelamento",
              text: "Dispositivos de segurança que garantem seu perfeito nivelamento no ponto de trabalho, conforme especificação do fabricante."
            },
            {
              icon: "🤝",
              title: "Alça de apoio interno",
              text: "Ponto de apoio fixado no interior do cesto ou plataforma para o operador manter equilíbrio, estabilidade e postura segura durante o trabalho em altura."
            },
            {
              icon: "🔗",
              title: "Proteção contra quedas",
              text: "Sistema de proteção contra quedas que atenda às especificações do fabricante ou, na falta destas, ao disposto na NR-12."
            },
            {
              icon: "🛑",
              title: "Parada de emergência",
              text: "Botão de parada de emergência."
            },
            {
              icon: "⬇️",
              title: "Descida de emergência",
              text: "Dispositivo de emergência que possibilite baixar o trabalhador e a plataforma até o solo em caso de pane elétrica, hidráulica ou mecânica."
            },
            {
              icon: "🔊",
              title: "Sinalização sonora",
              text: "Sistema sonoro automático de sinalização acionado durante a subida e a descida."
            },
            {
              icon: "⚡",
              title: "Proteção elétrica",
              text: "Proteção contra choque elétrico."
            },
            {
              icon: "⏱️",
              title: "Horímetro",
              text: "Instrumento que mede o tempo de funcionamento de um motor ou equipamento."
            }
          ]
        },
        {
          id: "nr18-m2-chassi",
          type: "video",
          kicker: "Vídeo",
          title: "Estabilidade do Chassi, Normas e Manutenção Capacitada",
          playerId: "panda-41e0a38a-74b2-4150-8a5d-e53b48266045",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=41e0a38a-74b2-4150-8a5d-e53b48266045"
        },
        {
          id: "nr18-m2-painel",
          type: "video",
          kicker: "Vídeo",
          title: "Sensor de Sobrecarga e Painel de Comando do Cesto",
          playerId: "panda-87364781-8400-4fbb-8a12-57159d664037",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=87364781-8400-4fbb-8a12-57159d664037"
        },
        {
          id: "nr18-m2-inspecao",
          type: "video",
          kicker: "Vídeo",
          title: "Inspeção Diária do Local de Trabalho",
          playerId: "panda-7c844aa2-da3e-4ad2-b3c9-f1f1bb0043fa",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7c844aa2-da3e-4ad2-b3c9-f1f1bb0043fa"
        },
        {
          id: "nr18-m2-checklist",
          type: "video",
          kicker: "Vídeo",
          title: "Checklist Pré-operacional Diário",
          playerId: "panda-2373531c-20d3-453a-bb28-f13b62f04832",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2373531c-20d3-453a-bb28-f13b62f04832"
        },
        {
          id: "nr18-m2-console",
          type: "console",
          title: "Libera a subida",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Libera a subida. Uma situação por vez. Toque na ação certa.",
          items: [
            {
              ask: "O cesto parou no alto por uma pane. O que faz ele descer até o solo?",
              hint: "A parada só corta o movimento. A descida de emergência rebaixa o cesto na pane elétrica, hidráulica ou mecânica.",
              answer: "descida",
              options: [
                { id: "parada", text: "Parada de emergência" },
                { id: "descida", text: "Descida de emergência" }
              ]
            },
            {
              ask: "A plataforma tem chassi móvel. Como ela fica, da montagem até a desmontagem?",
              hint: "O chassi móvel fica nivelado, patolado ou travado o tempo todo.",
              answer: "patola",
              options: [
                { id: "solto", text: "Solto" },
                { id: "patola", text: "Patolado e travado" }
              ]
            },
            {
              ask: "A tesoura passou do limite de peso. O que você faz?",
              hint: "O sensor bloqueia a subida acima do limite. Tire o excesso antes de erguer.",
              answer: "tirar",
              options: [
                { id: "subir", text: "Subo mesmo assim" },
                { id: "tirar", text: "Tiro o excesso de peso" }
              ]
            },
            {
              ask: "O caminho tem um buraco. Onde a PEMT pode ficar?",
              hint: "O operador confere o local antes: solo firme, sem buraco, vala, declive ou fiação.",
              answer: "solo",
              options: [
                { id: "buraco", text: "Em cima do buraco" },
                { id: "solo", text: "Em solo firme e nivelado" }
              ]
            },
            {
              ask: "O checklist achou vazamento de óleo. O que você faz?",
              hint: "Com vazamento, a PEMT não opera. Quem corrige é o técnico capacitado naquela marca e modelo.",
              answer: "tecnico",
              options: [
                { id: "seguir", text: "Sigo o turno" },
                { id: "tecnico", text: "Paro e chamo o técnico" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Equipamentos de Proteção Coletiva (EPC), Individual (EPI) e Proteção Contra Incêndios",
      objective: "Detalhar a aplicação hierárquica dos Equipamentos de Proteção Coletiva (EPC) e Individual (EPI) conforme a NR-6 e capacitar o aluno no reconhecimento e operação dos sistemas manuais, fixos e automáticos de proteção contra incêndio.",
      titleUnlock: {
        title: "OPERAÇÃO NO LUGAR",
        body: "Você separou o deslocamento seguro, o risco aéreo, os 3 metros, o vento e a vedação.",
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
          id: "nr18-m3-piso",
          type: "video",
          kicker: "Vídeo",
          title: "Regras de Movimentação, Deslocamento e Condições do Piso",
          playerId: "panda-15dae196-7df2-46d2-90c3-4f7db4c3606f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=15dae196-7df2-46d2-90c3-4f7db4c3606f"
        },
        {
          id: "nr18-m3-aereos",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Aéreos, Esmagamento e Colisões Superiores",
          playerId: "panda-132f4deb-897d-48fb-9c19-8a907914ae52",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=132f4deb-897d-48fb-9c19-8a907914ae52"
        },
        {
          id: "nr18-m3-eletrico",
          type: "video",
          kicker: "Vídeo",
          title: "Risco Elétrico e Distância Mínima de Segurança (3 Metros)",
          playerId: "panda-8b7d252d-2503-4cdf-8ed1-2d6c775607d1",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8b7d252d-2503-4cdf-8ed1-2d6c775607d1"
        },
        {
          id: "nr18-m3-vento",
          type: "video",
          kicker: "Vídeo",
          title: "Ação do Vento (Limite de 45 km/h) e Organização de Ferramentas",
          playerId: "panda-a4bbe9c8-f91b-44eb-bde9-ef2aa7fd6cf4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=a4bbe9c8-f91b-44eb-bde9-ef2aa7fd6cf4"
        },
        {
          id: "nr18-m3-vedacoes",
          type: "content",
          layout: "bans",
          kicker: "Vedação",
          eyebrow: "Vedação",
          title: "Vedações da PEMT",
          accent: "PEMT",
          body: "O item 18.12.39 proíbe:",
          transcript: "Vedação. Vedações da PEMT. O item dezoito ponto doze ponto trinta e nove proíbe. Letra a. Usar pranchas, escadas, caixas ou qualquer dispositivo sobre o cesto para alcançar maior altura. Letra b. Usar a PEMT como guindaste ou guincho para içar cargas. Letra c. Fazer trabalhos sob intempéries ou condições climáticas perigosas. Letra d. Operar a máquina contrariando os limites do fabricante de vento, inclinação ou fiação elétrica. Letra e. Transportar pessoas ou materiais alheios ao serviço em execução.",
          items: [
            {
              letter: "a",
              text: "Usar pranchas, escadas, caixas ou qualquer dispositivo sobre o cesto para alcançar maior altura."
            },
            {
              letter: "b",
              text: "Usar a PEMT como guindaste ou guincho para içar cargas."
            },
            {
              letter: "c",
              text: "Fazer trabalhos sob intempéries ou condições climáticas perigosas."
            },
            {
              letter: "d",
              text: "Operar a máquina contrariando os limites do fabricante de vento, inclinação ou fiação elétrica."
            },
            {
              letter: "e",
              text: "Transportar pessoas ou materiais alheios ao serviço em execução."
            }
          ]
        },
        {
          id: "nr18-m3-inseguros",
          type: "video",
          kicker: "Vídeo",
          title: "Análise de Procedimentos Inseguros e Prevenção de Acidentes",
          playerId: "panda-87a37b23-1a27-44c6-aeb3-8e5b2509eca3",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=87a37b23-1a27-44c6-aeb3-8e5b2509eca3"
        },
        {
          id: "nr18-m3-transposicao",
          type: "content",
          layout: "bans",
          kicker: "18.12.41",
          eyebrow: "Item 18.12.41",
          title: "Proibição de Transposição de Nível e Operação sobre Veículos",
          body: "A PEMT não transfere pessoas de um nível para o outro.",
          transcript: "Item dezoito ponto doze ponto quarenta e um. Proibição de transposição de nível e operação sobre veículos. A PEMT não transfere pessoas de um nível para o outro. Sair do cesto em altura. O cesto é o local de trabalho do início ao fim da tarefa. Escalar o guarda-corpo ou desembarcar em telhado, laje ou estrutura elevada. Posicionar ou operar a PEMT sobre caminhão, carreta, carro, vagão ou balsa. Posicionar ou operar a PEMT sobre estrutura de andaime. A plataforma fica apoiada direto em solo firme.",
          note: "A plataforma fica apoiada direto em solo firme.",
          items: [
            {
              text: "Sair do cesto em altura. O cesto é o local de trabalho do início ao fim da tarefa."
            },
            {
              text: "Escalar o guarda-corpo ou desembarcar em telhado, laje ou estrutura elevada."
            },
            {
              text: "Posicionar ou operar a PEMT sobre caminhão, carreta, carro, vagão ou balsa."
            },
            {
              text: "Posicionar ou operar a PEMT sobre estrutura de andaime."
            }
          ]
        },
        {
          id: "nr18-m3-console",
          type: "console",
          title: "Pode ou para",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Pode ou para. Uma situação por vez. Toque na ação certa.",
          doneText: "As situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "O caminho tem buraco e rampa. Como você desloca a PEMT?",
              hint: "Visão livre, longe de buraco, rampa e vala, com a velocidade do piso. O piso firme é liso, uniforme e consolidado.",
              answer: "desvio",
              options: [
                { id: "cima", text: "Passo por cima" },
                { id: "desvio", text: "Desvio e reduzo" }
              ]
            },
            {
              ask: "Há viga e tubulação acima do cesto. O que você faz antes de subir?",
              hint: "Olhe o topo do cesto. O corpo não pode ser prensado contra viga, telhado ou tubulação.",
              answer: "olhar",
              options: [
                { id: "painel", text: "Subo olhando o painel" },
                { id: "olhar", text: "Olho o topo e subo devagar" }
              ]
            },
            {
              ask: "A lança aponta para uma rede energizada. Qual a distância mínima?",
              hint: "São 3 metros de rede ou fiação energizada. O arco elétrico pode saltar sem contato.",
              answer: "tres",
              options: [
                { id: "perto", text: "Posso chegar perto" },
                { id: "tres", text: "No mínimo 3 metros" }
              ]
            },
            {
              ask: "O vento passou de 45 km/h. O que você faz?",
              hint: "Acima de 45 km/h, a plataforma volta ao solo. Cabo e caixa não ficam pendurados para fora do cesto.",
              answer: "solo",
              options: [
                { id: "sigo", text: "Sigo elevado" },
                { id: "solo", text: "Recolho ao solo" }
              ]
            },
            {
              ask: "A tesoura está em cima dos garfos da empilhadeira. Você sobe?",
              hint: "Não opere. Também é proibido escada ou caixa no cesto, usar a PEMT como guindaste, sair no telhado e pôr a máquina sobre caminhão ou andaime.",
              answer: "nao",
              options: [
                { id: "subo", text: "Subo para ganhar altura" },
                { id: "nao", text: "Não opero" }
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
          id: "nr18-m4-epi",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamento de Proteção Individual (EPI) e a NR 06",
          playerId: "panda-26d1d3d8-bdae-41b5-8feb-2c38ff787d6a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=26d1d3d8-bdae-41b5-8feb-2c38ff787d6a"
        },
        {
          id: "nr18-m4-deveres",
          type: "video",
          kicker: "Vídeo",
          title: "As Responsabilidades do Colaborador sobre o EPI (NR 06)",
          playerId: "panda-3cc63010-d59e-4a8d-ab10-cd2606e63cec",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=3cc63010-d59e-4a8d-ab10-cd2606e63cec"
        },
        {
          id: "nr18-m4-epi-foto",
          type: "content",
          layout: "models",
          kicker: "EPI",
          eyebrow: "EPI",
          title: "EPI — Equipamento de Proteção Individual para Trabalho em Altura",
          lines: ["EPI — Equipamento de Proteção Individual"],
          accent: "Para Trabalho em Altura",
          quote: "Equipamento de segurança utilizado para proteção contra risco de queda no posicionamento e movimentação nos trabalhos em altura, sendo utilizado em conjunto com cinturão de segurança tipo paraquedista.",
          image: "assets/fotos/epi.jpg",
          imageAlt: "Capacete, cinturão paraquedista, talabarte, luvas, bota e óculos",
          transcript: "EPI. Equipamento de proteção individual para trabalho em altura. Equipamento de segurança utilizado para proteção contra risco de queda no posicionamento e movimentação nos trabalhos em altura, sendo utilizado em conjunto com cinturão de segurança tipo paraquedista. Na imagem: capacete, cinturão paraquedista, talabarte, luvas, bota e óculos."
        },
        {
          id: "nr18-m4-spiq",
          type: "video",
          kicker: "Vídeo",
          title: "Sistema de Proteção Individual Contra Quedas (SPIQ) e Ponto de Ancoragem",
          playerId: "panda-b29b8361-1b54-4547-81f4-c4b6515b3d67",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b29b8361-1b54-4547-81f4-c4b6515b3d67"
        },
        {
          id: "nr18-m4-cinturao",
          type: "video",
          kicker: "Vídeo",
          title: "Cinturão de Segurança Tipo Paraquedista e Ajuste ao Corpo",
          playerId: "panda-32f42640-7f1d-4a5c-9915-d1154bab0cf8",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=32f42640-7f1d-4a5c-9915-d1154bab0cf8"
        },
        {
          id: "nr18-m4-dicas",
          type: "video",
          kicker: "Vídeo",
          title: "Dicas Fundamentais de Segurança e Encerramento do Treinamento",
          playerId: "panda-e38dea99-305c-4ee6-8c35-f59bdd79de33",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e38dea99-305c-4ee6-8c35-f59bdd79de33"
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
          quote: "Cinto ancorado no ponto do fabricante e cultura de prevencionismo.",
          chips: ["NR-18", "PEMT/PTA", "SPIQ"],
          transcript: "Conclusão. Treinamento concluído. Parabéns. Você concluiu o treinamento de NR 18, PEMT e PTA. Cinto ancorado no ponto do fabricante e cultura de prevencionismo. NR 18. PEMT, PTA. SPIQ."
        }
      ]
    }
  ]
};
