/* ============================================================
   PROVA DE GEOGRAFIA — LEVI MACIEL — REVISÃO AV2
   África: Espaço, Economia e Desigualdades — Prof. Wesclay (8º Ano)
   ============================================================ */

// ===== CONTEÚDO DAS FASES =====
// Cada quiz tem várias perguntas. Se errar, mostra explicação MAIS detalhada e refaz.
// Só avança quando acertar TODAS as perguntas da fase.

const fases = [
  // ----------- 0. CAPA -----------
  {
    tipo: 'capa',
    titulo: 'Início'
  },

  // ----------- 1. INTRODUÇÃO / IDEIA CENTRAL -----------
  {
    tipo: 'leitura',
    titulo: 'Introdução — Ideia Central',
    conteudo: `
      <span class="tag blue">IDEIA CENTRAL 💡</span>
      <h2 class="section-title">África: Espaço, Economia e Desigualdades</h2>
      <p>
        O continente africano é marcado por uma organização do espaço geográfico que
        precisa ser entendida a partir de três grandes forças:
      </p>
      <ul class="lista">
        <li>🌍 <b>Exploração econômica voltada ao exterior</b> — boa parte da riqueza africana sai do continente.</li>
        <li>🏛️ <b>Heranças históricas</b> — séculos de colonização europeia deixaram marcas profundas.</li>
        <li>⚖️ <b>Profundas desigualdades sociais</b> — luxo e pobreza extrema convivem lado a lado.</li>
      </ul>
      <div class="destaque">
        <strong>Resuma assim:</strong> a forma como o espaço africano é organizado HOJE
        é resultado direto de como ele foi explorado e dividido no PASSADO,
        gerando desigualdades que continuam até os dias atuais.
      </div>
      <div class="box-info">
        🧭 <b>Os 4 grandes blocos do mapa mental:</b>
        <ol>
          <li><b>Enclave Econômico</b></li>
          <li><b>Desigualdade Socioeconômica</b></li>
          <li><b>Heranças Históricas</b></li>
          <li><b>Impactos na Vida das Pessoas</b></li>
        </ol>
        Você vai estudar e fazer um quiz de cada um. Boa sorte, Levi! 🚀
      </div>
    `
  },

  // ----------- 2. FASE 1 — ENCLAVE ECONÔMICO (leitura) -----------
  {
    tipo: 'leitura',
    titulo: 'Fase 1 — Enclave Econômico',
    conteudo: `
      <span class="tag">1 · ENCLAVE ECONÔMICO ⛏️</span>
      <h2 class="section-title">O que é um Enclave Econômico?</h2>
      <p>
        Um <b>enclave econômico</b> é uma atividade econômica que funciona <b>isolada</b>
        do restante do país. Ela usa o território, extrai a riqueza, mas <b>não se
        conecta com a economia local</b>: o lucro vai embora, os empregos são poucos
        e o desenvolvimento regional praticamente não acontece.
      </p>
      <ul class="lista">
        <li>⛏️ <b>Extração de recursos naturais</b> (minérios, petróleo, gás, diamantes etc.) feita por <b>empresas transnacionais</b>.</li>
        <li>📦 Produção voltada <b>quase totalmente ao mercado externo</b> (exportação).</li>
        <li>🚆 Uso de <b>infraestrutura própria</b> (portos, ferrovias, estradas) só para escoar a produção.</li>
        <li>🔌 <b>Pouca ou nenhuma ligação</b> com a economia local.</li>
        <li>👥 Gera <b>poucos empregos</b> e poucos benefícios para a população.</li>
      </ul>
      <div class="box-resultado">
        ✅ <b>RESULTA EM: Enclave Econômico</b><br>
        Um setor isolado, com grande capital estrangeiro, voltado à exportação
        de matérias-primas, <b>sem promover desenvolvimento regional</b>.
      </div>
    `
  },

  // ----------- 3. QUIZ DA FASE 1 -----------
  {
    tipo: 'quiz',
    titulo: 'Quiz 1 — Enclave Econômico',
    perguntas: [
      {
        q: 'O que melhor define um "enclave econômico" na África?',
        opcoes: [
          'Uma atividade econômica integrada à economia local que gera muitos empregos.',
          'Um setor isolado, dominado por empresas estrangeiras, voltado à exportação e sem desenvolvimento regional.',
          'Um programa do governo africano para distribuir terras.',
          'Uma associação entre países africanos para vender produtos juntos.'
        ],
        correta: 1,
        explicacoes: [
          'Lembre-se: ENCLAVE = isolado. A atividade fica "fechada" em si mesma, exporta tudo e não conversa com a economia do país.',
          'Volte ao mapa mental: ENCLAVE significa que existe um setor (geralmente mineração ou petróleo) operado por empresas transnacionais, que usa portos e ferrovias só pra exportar, gera pouquíssimos empregos e NÃO promove desenvolvimento regional. É o OPOSTO de integrado.'
        ]
      },
      {
        q: 'O que é extraído principalmente nos enclaves econômicos africanos?',
        opcoes: [
          'Alimentos industrializados e tecnologia.',
          'Serviços bancários e turismo.',
          'Recursos naturais como minérios, petróleo, gás e diamantes.',
          'Produtos têxteis e roupas de luxo.'
        ],
        correta: 2,
        explicacoes: [
          'O foco do enclave é EXTRAIR matéria-prima. Pense: ouro, diamantes, petróleo — tudo isso são recursos naturais.',
          'No mapa mental está claro: "Extração de recursos naturais (minérios, petróleo, gás, diamantes etc.) por empresas transnacionais". Esses produtos saem em estado bruto e vão para fora do continente.'
        ]
      },
      {
        q: 'Por que o enclave gera POUCOS benefícios para a população local?',
        opcoes: [
          'Porque os africanos não querem trabalhar nesse setor.',
          'Porque a produção é voltada ao mercado externo, usa infraestrutura própria e tem pouca ligação com a economia local.',
          'Porque o governo africano proíbe a contratação local.',
          'Porque os recursos extraídos não têm valor no mercado mundial.'
        ],
        correta: 1,
        explicacoes: [
          'Atenção: o problema não é "vontade" da população. É a forma como o enclave funciona — voltado pra FORA.',
          'O enclave usa portos e ferrovias EXCLUSIVAS pra exportar, não compra de fornecedores locais e contrata pouca gente. Por isso o dinheiro circula entre a empresa estrangeira e o exterior, e quase nada chega à população africana.'
        ]
      }
    ]
  },

  // ----------- 4. FASE 2 — DESIGUALDADE SOCIOECONÔMICA -----------
  {
    tipo: 'leitura',
    titulo: 'Fase 2 — Desigualdade Socioeconômica',
    conteudo: `
      <span class="tag blue">2 · DESIGUALDADE SOCIOECONÔMICA 🏙️</span>
      <h2 class="section-title">O contraste entre luxo e pobreza</h2>
      <p>
        Nas grandes cidades africanas existe um contraste enorme:
        de um lado, bairros de luxo com arranha-céus, shoppings e condomínios;
        do outro, <b>assentamentos informais</b> (favelas) sem estrutura nenhuma.
      </p>
      <ul class="lista">
        <li>🏢 <b>Contraste entre áreas de luxo</b> e <b>grandes assentamentos informais</b> nas metrópoles.</li>
        <li>🚰 <b>Falta de serviços básicos:</b> água, saneamento, saúde, educação e moradia digna.</li>
        <li>💰 <b>Políticas de ajuste fiscal</b> impostas por organismos internacionais (como FMI e Banco Mundial)
            <b>limitam os investimentos</b> do Estado em direitos sociais.</li>
      </ul>
      <div class="box-resultado" style="border-left-color: var(--azul); background:#eaf3ff;">
        ✅ <b>RESULTA EM: Exclusão e Segregação</b><br>
        A <b>maior parte da população</b> fica <b>à margem</b> dos benefícios do desenvolvimento econômico.
      </div>
      <div class="destaque">
        🧠 <strong>Dica de prova:</strong> "Ajuste fiscal" = cortar gastos públicos.
        Quando o governo corta saúde, educação e saneamento, quem mais sofre são os mais pobres.
      </div>
    `
  },

  // ----------- 5. QUIZ FASE 2 -----------
  {
    tipo: 'quiz',
    titulo: 'Quiz 2 — Desigualdade Socioeconômica',
    perguntas: [
      {
        q: 'Qual é a principal característica das metrópoles africanas em relação à desigualdade?',
        opcoes: [
          'Todos vivem em áreas de luxo.',
          'Existe um forte contraste entre áreas de luxo e grandes assentamentos informais.',
          'A maioria vive em condomínios fechados.',
          'Não há pobreza nas cidades africanas.'
        ],
        correta: 1,
        explicacoes: [
          'Pense em "contraste": lado a lado coisas opostas.',
          'O mapa mental fala exatamente isso: "Contraste entre áreas de luxo e grandes assentamentos informais nas metrópoles". É um cenário de extremos — riqueza concentrada de um lado, pobreza extrema do outro.'
        ]
      },
      {
        q: 'O que as "políticas de ajuste fiscal" impostas por organismos internacionais provocam?',
        opcoes: [
          'Aumentam os investimentos em saúde e educação.',
          'Obrigam o Estado a investir em moradia digna.',
          'Limitam os investimentos do Estado em direitos sociais.',
          'Distribuem renda igualmente entre todos.'
        ],
        correta: 2,
        explicacoes: [
          'Ajuste fiscal = apertar o cinto = governo gasta MENOS.',
          'Decorar: ajuste fiscal vindo de FMI/Banco Mundial obriga o governo africano a CORTAR gastos. Resultado: menos dinheiro pra saúde, educação, saneamento — exatamente os serviços que faltam pra população pobre. Por isso a desigualdade aumenta.'
        ]
      },
      {
        q: 'Qual é o RESULTADO dessa desigualdade socioeconômica, segundo o mapa mental?',
        opcoes: [
          'Inclusão e igualdade.',
          'Exclusão e segregação — a maior parte da população fica à margem do desenvolvimento.',
          'Crescimento econômico distribuído.',
          'Fim das favelas.'
        ],
        correta: 1,
        explicacoes: [
          'Se poucos têm muito e muitos têm quase nada, esse processo gera EXCLUSÃO.',
          'O quadro azul do mapa mental diz: "RESULTA EM: EXCLUSÃO E SEGREGAÇÃO — a maior parte da população fica à margem dos benefícios do desenvolvimento econômico". Segregação = separação forçada por condição social.'
        ]
      }
    ]
  },

  // ----------- 6. MINI-GAME: CAÇA-PALAVRAS -----------
  {
    tipo: 'cacapalavras',
    titulo: '🎮 Caça-Palavras — Conceitos da África'
  },

  // ----------- 7. FASE 3 — HERANÇAS HISTÓRICAS -----------
  {
    tipo: 'leitura',
    titulo: 'Fase 3 — Heranças Históricas',
    conteudo: `
      <span class="tag orange">3 · HERANÇAS HISTÓRICAS 🏛️</span>
      <h2 class="section-title">As marcas da colonização</h2>
      <p>
        Para entender a África de hoje, é preciso olhar para o passado.
        A <b>colonização europeia</b> deixou estruturas que ainda funcionam.
      </p>
      <ul class="lista">
        <li>⛓️ A colonização europeia <b>explorou recursos e mão de obra</b> africana.</li>
        <li>📏 <b>Fronteiras artificiais</b> e divisão do território <b>sem considerar povos e culturas</b>.</li>
        <li>🚢 <b>Estruturas econômicas voltadas ao exterior</b> desde o período colonial.</li>
        <li>🏘️ <b>Padrões de ocupação do espaço</b> que <b>mantêm desigualdades até hoje</b>.</li>
      </ul>
      <div class="box-resultado" style="border-left-color: var(--laranja); background:#fff1e0;">
        ✅ <b>RESULTA EM: Reprodução da Exclusão</b><br>
        A organização do espaço urbano e econômico ainda <b>reflete as lógicas coloniais</b>,
        mantendo grande parte da população segregada.
      </div>
      <div class="destaque">
        ⚠️ <strong>Conferência de Berlim (1884–1885):</strong> as potências europeias dividiram a África
        no mapa, sem chamar nenhum africano. Por isso muitas fronteiras são RETAS — foram desenhadas com régua,
        ignorando povos, línguas e culturas. Isso explica até hoje vários conflitos no continente.
      </div>
    `
  },

  // ----------- 8. QUIZ FASE 3 -----------
  {
    tipo: 'quiz',
    titulo: 'Quiz 3 — Heranças Históricas',
    perguntas: [
      {
        q: 'Por que muitas fronteiras africanas são consideradas "artificiais"?',
        opcoes: [
          'Porque foram criadas por satélites modernos.',
          'Porque foram traçadas pelos europeus sem considerar povos e culturas locais.',
          'Porque os africanos decidiram dividir o continente em linhas retas.',
          'Porque seguem rios e montanhas naturais.'
        ],
        correta: 1,
        explicacoes: [
          'Pense: quem desenhou aqueles países? Não foram os africanos.',
          'As fronteiras foram traçadas pelos europeus na Conferência de Berlim, COM RÉGUA no mapa, sem perguntar nada aos povos que viviam ali. Por isso povos inimigos foram colocados no mesmo país, e povos parentes foram separados. Isso é fronteira ARTIFICIAL.'
        ]
      },
      {
        q: 'O que a colonização europeia explorou na África?',
        opcoes: [
          'Apenas terras desertas e improdutivas.',
          'Recursos naturais e mão de obra africana.',
          'Somente conhecimento científico.',
          'Tecnologia local.'
        ],
        correta: 1,
        explicacoes: [
          'A colonização sempre quis duas coisas: matéria-prima e trabalhadores baratos (ou escravizados).',
          'O mapa mental diz: "A colonização europeia explorou recursos e mão de obra africana". Os europeus levaram ouro, marfim, diamantes e MILHÕES de pessoas escravizadas. Esse foi o motor da exploração.'
        ]
      },
      {
        q: 'Por que dizemos que há uma "REPRODUÇÃO DA EXCLUSÃO" na África?',
        opcoes: [
          'Porque a exclusão acabou com o fim da colonização.',
          'Porque a organização do espaço urbano e econômico ainda segue lógicas coloniais e mantém a população segregada.',
          'Porque os africanos escolheram continuar excluídos.',
          'Porque as Nações Unidas obrigam a exclusão.'
        ],
        correta: 1,
        explicacoes: [
          'Reprodução = se repete. As mesmas estruturas continuam funcionando até hoje.',
          'Mesmo depois da independência, os países africanos mantiveram economias voltadas pra exportação, cidades divididas entre ricos e pobres e fronteiras herdadas. Esses padrões coloniais continuam REPRODUZINDO a exclusão — por isso a desigualdade não acabou.'
        ]
      }
    ]
  },

  // ----------- 9. FASE 4 — IMPACTOS NA VIDA DAS PESSOAS -----------
  {
    tipo: 'leitura',
    titulo: 'Fase 4 — Impactos na Vida das Pessoas',
    conteudo: `
      <span class="tag purple">4 · IMPACTOS NA VIDA DAS PESSOAS 👥</span>
      <h2 class="section-title">Como tudo isso afeta o dia a dia</h2>
      <p>
        Toda essa estrutura (enclave + desigualdade + heranças coloniais)
        gera consequências REAIS na vida das pessoas:
      </p>
      <ul class="lista">
        <li>🏚️ <b>Moradias precárias</b> em favelas e assentamentos informais.</li>
        <li>💼 <b>Desemprego e subemprego</b> (trabalhos informais, mal pagos, sem direitos).</li>
        <li>📚 <b>Acesso desigual</b> à educação, saúde e transporte.</li>
        <li>⚔️ <b>Conflitos sociais</b> e violência urbana.</li>
        <li>🚶 <b>Migrações internas</b> em busca de melhores condições de vida.</li>
      </ul>
      <div class="box-resultado" style="border-left-color: var(--roxo); background:#f4eafa;">
        🛠️ <b>CAMINHOS PARA MUDANÇAS:</b>
        <ul>
          <li>Investimentos públicos em direitos sociais.</li>
          <li>Planejamento urbano inclusivo.</li>
          <li>Diversificação econômica com geração de empregos.</li>
          <li>Valorização das culturas e dos povos africanos.</li>
        </ul>
      </div>
    `
  },

  // ----------- 10. QUIZ FASE 4 -----------
  {
    tipo: 'quiz',
    titulo: 'Quiz 4 — Impactos na Vida das Pessoas',
    perguntas: [
      {
        q: 'Qual é um impacto direto da desigualdade na vida das pessoas na África?',
        opcoes: [
          'Aumento de empregos formais bem pagos.',
          'Moradias precárias em favelas e desemprego/subemprego.',
          'Excesso de serviços públicos de qualidade.',
          'Diminuição da migração interna.'
        ],
        correta: 1,
        explicacoes: [
          'O mapa mental lista os IMPACTOS — todos são problemas sociais sentidos no dia a dia.',
          'Os impactos descritos são: moradias precárias, desemprego, subemprego, acesso desigual a serviços, conflitos urbanos e migrações internas. Tudo gira em torno da MÁ qualidade de vida, não do contrário.'
        ]
      },
      {
        q: 'O que são "migrações internas" no contexto africano?',
        opcoes: [
          'Pessoas saindo da África para a Europa.',
          'Animais migrando entre savanas.',
          'Pessoas mudando de uma região para outra DENTRO do mesmo país, buscando melhores condições de vida.',
          'Turistas visitando o continente.'
        ],
        correta: 2,
        explicacoes: [
          'INTERNA = dentro. Não atravessa fronteira nacional.',
          'Migração interna é quando alguém sai do campo pra cidade, ou de uma região pobre pra uma região mais desenvolvida, dentro do mesmo país. Acontece muito na África por causa do desemprego e da falta de serviços nas áreas mais pobres.'
        ]
      },
      {
        q: 'Qual destes NÃO é um caminho para mudanças propostos no mapa mental?',
        opcoes: [
          'Investimentos públicos em direitos sociais.',
          'Planejamento urbano inclusivo.',
          'Aumento das exportações em forma de enclave.',
          'Valorização das culturas e dos povos africanos.'
        ],
        correta: 2,
        explicacoes: [
          'Cuidado: enclave é o PROBLEMA, não solução.',
          'Os caminhos propostos são: investimento social, planejamento urbano inclusivo, DIVERSIFICAÇÃO econômica (o oposto de enclave) e valorização da cultura. Aumentar o enclave seria piorar a situação, não resolver.'
        ]
      }
    ]
  },

  // ----------- 11. MINI-GAME: FORCA -----------
  {
    tipo: 'forca',
    titulo: '🎮 Jogo da Forca — Termos da Geografia'
  },

  // ----------- 12. APARTHEID -----------
  {
    tipo: 'leitura',
    titulo: 'Apartheid na África do Sul',
    conteudo: `
      <span class="tag red">APARTHEID NA ÁFRICA DO SUL 🇿🇦</span>
      <h2 class="section-title">"WHITE ONLY" — um sistema de segregação</h2>
      <p>
        O <b>Apartheid</b> foi um sistema de <b>segregação racial institucionalizado</b>
        (ou seja, oficial, escrito em lei) na <b>África do Sul entre 1948 e 1994</b>.
      </p>
      <ul class="lista">
        <li>🚫 A população <b>negra era proibida</b> de viver em áreas consideradas "brancas".</li>
        <li>🏫 Tinha <b>acesso limitado</b> à educação, saúde, moradia e direitos políticos.</li>
        <li>⚖️ O sistema <b>legalizou a discriminação</b> e a desigualdade racial.</li>
        <li>💔 Deixou <b>marcas profundas</b> que ainda influenciam as desigualdades no país.</li>
      </ul>
      <div class="destaque">
        🕊️ <strong>Fim do Apartheid:</strong> em 1994, com a eleição de <b>Nelson Mandela</b>,
        que tinha ficado 27 anos preso por lutar contra o sistema.
        Mas as desigualdades NÃO acabaram de uma hora pra outra — elas continuam até hoje.
      </div>
      <div class="box-info">
        🔑 <b>Palavra-chave:</b> "institucionalizado" significa que estava na LEI.
        Não era uma discriminação só "social" — o próprio Estado obrigava a separação.
      </div>
    `
  },

  // ----------- 13. QUIZ APARTHEID -----------
  {
    tipo: 'quiz',
    titulo: 'Quiz — Apartheid',
    perguntas: [
      {
        q: 'O que foi o Apartheid?',
        opcoes: [
          'Um movimento cultural africano.',
          'Um sistema de segregação racial institucionalizado na África do Sul entre 1948 e 1994.',
          'Uma guerra entre países africanos.',
          'Um tipo de moeda usada na África do Sul.'
        ],
        correta: 1,
        explicacoes: [
          'Apartheid = "separação" em africâner. Era um sistema oficial de separação por raça.',
          'Decora assim: Apartheid = SEGREGAÇÃO RACIAL INSTITUCIONALIZADA (estava na lei), na ÁFRICA DO SUL, de 1948 a 1994. Brancos e negros tinham que viver separados — por força da lei.'
        ]
      },
      {
        q: 'Durante o Apartheid, a população negra:',
        opcoes: [
          'Tinha direitos iguais à população branca.',
          'Era proibida de viver em áreas "brancas" e tinha acesso limitado à educação, saúde e direitos políticos.',
          'Comandava o governo do país.',
          'Vivia apenas em áreas de luxo.'
        ],
        correta: 1,
        explicacoes: [
          'Pense na placa "WHITE ONLY" — só brancos podiam.',
          'A população negra era PROIBIDA de morar em áreas brancas, frequentar escolas brancas, sentar em bancos brancos. Tinha acesso muito limitado a serviços e quase nenhum direito político. Era discriminação total, garantida por lei.'
        ]
      },
      {
        q: 'O Apartheid acabou em 1994. Suas consequências:',
        opcoes: [
          'Foram completamente apagadas e hoje não existe mais desigualdade.',
          'Deixaram marcas profundas que ainda influenciam as desigualdades na África do Sul.',
          'Foram só econômicas, sem efeito social.',
          'Beneficiaram a população negra.'
        ],
        correta: 1,
        explicacoes: [
          'Cuidado: leis mudam rápido, mas a sociedade muda devagar.',
          'O Apartheid acabou oficialmente em 1994 com Mandela, mas as desigualdades construídas em 46 anos de segregação NÃO desaparecem do dia pra noite. A maioria pobre da África do Sul ainda é negra, vivendo em condições piores que a minoria branca — é o que chamamos de HERANÇA do Apartheid.'
        ]
      }
    ]
  },

  // ----------- 14. MINI-GAME: MEMÓRIA -----------
  {
    tipo: 'memoria',
    titulo: '🎮 Jogo da Memória — Pares de Conceitos'
  },

  // ----------- 15. CONCEITOS-CHAVE -----------
  {
    tipo: 'leitura',
    titulo: 'Conceitos-Chave',
    conteudo: `
      <span class="tag">CONCEITOS-CHAVE 🔑</span>
      <h2 class="section-title">Revisão dos conceitos mais importantes</h2>
      <div class="box-info">
        🌐 <b>ENCLAVE ECONÔMICO:</b> Atividade econômica <u>isolada</u>, voltada à exportação,
        sem integração com a economia local.
      </div>
      <div class="box-info" style="border-left-color: var(--roxo); background:#f4eafa;">
        👥 <b>SEGREGAÇÃO ESPACIAL:</b> Separação de grupos sociais no espaço urbano,
        onde uns têm acesso a serviços e outros não.
      </div>
      <div class="box-info" style="border-left-color: var(--laranja); background:#fff1e0;">
        🕰️ <b>HERANÇA COLONIAL:</b> Marcas deixadas pela colonização que influenciam
        a economia, a política e o espaço até os dias atuais.
      </div>
      <div class="box-info" style="border-left-color: var(--verde); background:#e8f7ee;">
        ⚖️ <b>DESIGUALDADE SOCIAL:</b> Diferenças no acesso à riqueza, aos serviços
        e às oportunidades entre as pessoas.
      </div>
      <div class="destaque">
        🎯 <strong>Esses 4 conceitos são os mais cobrados em prova.</strong> Saiba
        explicar cada um com suas palavras!
      </div>
    `
  },

  // ----------- 16. MINI-GAME: JOGO DA VELHA -----------
  {
    tipo: 'velha',
    titulo: '🎮 Jogo da Velha — Pausa Estratégica'
  },

  // ----------- 17. PROVA FINAL -----------
  {
    tipo: 'quiz',
    titulo: '🏆 PROVA FINAL — Revisão Geral',
    final: true,
    perguntas: [
      {
        q: '(Final 1) Qual conceito descreve uma atividade econômica isolada, voltada à exportação, sem integração com a economia local?',
        opcoes: ['Segregação espacial','Enclave econômico','Migração interna','Apartheid'],
        correta: 1,
        explicacoes: [
          'Volte: ISOLADO + EXPORTAÇÃO + sem integração = qual palavra é essa?',
          'ENCLAVE ECONÔMICO. Esse é o conceito-chave nº 1 do mapa mental: atividade isolada, voltada à exportação, sem desenvolver a região.'
        ]
      },
      {
        q: '(Final 2) A divisão do território africano sem considerar povos e culturas é uma:',
        opcoes: ['Política recente da ONU','Herança da colonização europeia','Decisão dos próprios africanos','Consequência do clima'],
        correta: 1,
        explicacoes: [
          'Quem desenhou as fronteiras? Em que época?',
          'É HERANÇA COLONIAL. Os europeus dividiram a África na Conferência de Berlim (1884-85), sem consultar nenhum povo africano — isso é uma das principais heranças históricas até hoje.'
        ]
      },
      {
        q: '(Final 3) O Apartheid foi:',
        opcoes: [
          'Um sistema econômico de integração racial.',
          'Uma política de inclusão social na África do Sul.',
          'Um sistema de segregação racial institucionalizado na África do Sul (1948-1994).',
          'Um partido político atual da Nigéria.'
        ],
        correta: 2,
        explicacoes: [
          'Pense: data + país + tipo de sistema.',
          'Apartheid = segregação racial INSTITUCIONALIZADA (na lei) na África do Sul, entre 1948 e 1994. Acabou com a eleição de Nelson Mandela.'
        ]
      },
      {
        q: '(Final 4) Qual é o resultado da Desigualdade Socioeconômica nas metrópoles africanas?',
        opcoes: ['Inclusão social','Exclusão e segregação','Aumento de empregos formais','Acesso universal à saúde'],
        correta: 1,
        explicacoes: [
          'Se a maioria fica fora dos benefícios, que palavra define isso?',
          'EXCLUSÃO E SEGREGAÇÃO. A maior parte da população fica à margem dos benefícios do desenvolvimento econômico.'
        ]
      },
      {
        q: '(Final 5) Qual destes é um CAMINHO PARA MUDANÇAS proposto pelo mapa mental?',
        opcoes: [
          'Ampliar o enclave econômico.',
          'Cortar investimentos públicos.',
          'Planejamento urbano inclusivo e diversificação econômica com geração de empregos.',
          'Reforçar fronteiras coloniais.'
        ],
        correta: 2,
        explicacoes: [
          'Caminho = solução. As soluções vão na direção INVERSA dos problemas.',
          'As soluções são: investimento social, planejamento urbano INCLUSIVO, diversificação econômica (gerando empregos) e valorização das culturas africanas. Tudo que combate enclave, segregação e exclusão.'
        ]
      },
      {
        q: '(Final 6) "Políticas de ajuste fiscal" significam principalmente:',
        opcoes: [
          'Aumento de gastos com educação e saúde.',
          'Cortes de gastos do Estado, limitando investimentos em direitos sociais.',
          'Distribuição igualitária da renda.',
          'Fim das fronteiras coloniais.'
        ],
        correta: 1,
        explicacoes: [
          'Ajuste = arrumar, apertar. O que governo faz quando aperta o cinto?',
          'Ajuste fiscal = CORTES. Vindos de FMI/Banco Mundial, limitam o quanto o Estado pode investir em saúde, educação e moradia. Por isso pioram a desigualdade.'
        ]
      }
    ]
  },

  // ----------- 18. VITÓRIA -----------
  {
    tipo: 'vitoria',
    titulo: 'Parabéns!'
  }
];

// ===== ESTADO =====
const state = {
  idx: 0,
  desbloqueado: 0, // até qual fase pode avançar
  quizErros: {},   // {faseIdx: {pergIdx: nivelErro}}
};

// ===== RENDERIZAÇÃO =====
const screensEl = document.getElementById('screens');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const phaseTitleEl = document.getElementById('phaseTitle');
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');

function render() {
  screensEl.innerHTML = '';
  const fase = fases[state.idx];
  const el = document.createElement('section');
  el.className = 'screen active';
  el.id = 'screen-' + state.idx;

  if (fase.tipo === 'capa') el.innerHTML = renderCapa();
  else if (fase.tipo === 'leitura') el.innerHTML = `<div class="card">${fase.conteudo}</div>`;
  else if (fase.tipo === 'quiz') el.innerHTML = renderQuiz(fase);
  else if (fase.tipo === 'cacapalavras') el.innerHTML = `<div class="card" id="cpCard"></div>`;
  else if (fase.tipo === 'forca') el.innerHTML = `<div class="card" id="forcaCard"></div>`;
  else if (fase.tipo === 'velha') el.innerHTML = `<div class="card" id="velhaCard"></div>`;
  else if (fase.tipo === 'memoria') el.innerHTML = `<div class="card" id="memCard"></div>`;
  else if (fase.tipo === 'vitoria') el.innerHTML = renderVitoria();

  screensEl.appendChild(el);

  // Pós-renderização
  if (fase.tipo === 'capa') document.getElementById('startBtn').onclick = () => goNext();
  if (fase.tipo === 'quiz') wireQuiz(fase);
  if (fase.tipo === 'cacapalavras') initCacaPalavras();
  if (fase.tipo === 'forca') initForca();
  if (fase.tipo === 'velha') initVelha();
  if (fase.tipo === 'memoria') initMemoria();

  updateNav();
}

function updateNav() {
  const fase = fases[state.idx];
  prevBtn.disabled = state.idx === 0;

  // Pode avançar?
  let podeAvancar = state.idx < state.desbloqueado || state.idx === fases.length - 1;
  // Em telas de leitura, sempre pode avançar
  if (fase.tipo === 'leitura' || fase.tipo === 'capa') {
    state.desbloqueado = Math.max(state.desbloqueado, state.idx + 1);
    podeAvancar = true;
  }
  // Mini-jogos: liberam pela conclusão dentro do próprio jogo
  if (['cacapalavras','forca','velha','memoria'].includes(fase.tipo)) {
    podeAvancar = state.desbloqueado > state.idx;
  }
  // Quiz: libera pelo acerto de todas
  if (fase.tipo === 'quiz') {
    podeAvancar = state.desbloqueado > state.idx;
  }
  if (fase.tipo === 'vitoria') {
    nextBtn.textContent = 'Reiniciar 🔄';
    podeAvancar = true;
  } else {
    nextBtn.textContent = 'Avançar ▶';
  }

  nextBtn.disabled = !podeAvancar && state.idx !== fases.length - 1;

  phaseTitleEl.textContent = fase.titulo;
  const pct = Math.round((state.idx / (fases.length - 1)) * 100);
  progressFill.style.width = pct + '%';
  progressLabel.textContent = `Fase ${state.idx}/${fases.length - 1}`;
}

function goNext() {
  if (state.idx === fases.length - 1) { // reiniciar
    state.idx = 0; state.desbloqueado = 0; state.quizErros = {};
    render(); return;
  }
  if (state.idx < state.desbloqueado || ['leitura','capa'].includes(fases[state.idx].tipo)) {
    state.desbloqueado = Math.max(state.desbloqueado, state.idx + 1);
    state.idx++;
    render();
  }
}
function goPrev() {
  if (state.idx > 0) { state.idx--; render(); }
}
prevBtn.onclick = goPrev;
nextBtn.onclick = goNext;

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goNext();
  if (e.key === 'ArrowLeft') goPrev();
});

// ===== TELAS ESPECIAIS =====
function renderCapa() {
  return `
    <div class="hero">
      <div class="africa-emoji">🌍</div>
      <h1>Prova de Geografia</h1>
      <p><b>Levi Maciel</b> · Revisão AV2</p>
      <p style="font-size:18px;color:#555;">África: Espaço, Economia e Desigualdades<br><small>Prof. Wesclay — 8º Ano</small></p>
      <div class="student">📚 Modo Estudo Guiado por Fases</div>
      <button id="startBtn" class="start-btn">Começar ▶</button>
      <p style="margin-top:24px;font-size:13px;color:#666;">
        🔒 Você só avança quando aprender o conteúdo!<br>
        Use as <b>setas do teclado</b> ← → ou os botões abaixo.
      </p>
    </div>
  `;
}

function renderVitoria() {
  return `
    <div class="card victory">
      <div class="medal">🏆</div>
      <h1>Parabéns, Levi!</h1>
      <p style="font-size:20px;">Você concluiu TODA a revisão de Geografia!</p>
      <p>Agora você domina:</p>
      <div style="text-align:left;max-width:500px;margin:20px auto;">
        <p>✅ Enclave Econômico</p>
        <p>✅ Desigualdade Socioeconômica</p>
        <p>✅ Heranças Históricas</p>
        <p>✅ Impactos na Vida das Pessoas</p>
        <p>✅ Apartheid na África do Sul</p>
        <p>✅ Conceitos-chave</p>
      </div>
      <p style="font-size:22px;color:var(--verde);font-weight:bold;">
        🎯 Boa sorte na prova de amanhã! Você vai mandar muito bem!
      </p>
    </div>
  `;
}

// ===== QUIZ =====
function renderQuiz(fase) {
  let html = `<div class="card"><span class="tag ${fase.final?'red':'blue'}">${fase.final?'PROVA FINAL':'QUIZ'}</span>
    <h2 class="section-title">${fase.titulo}</h2>
    <p>Responda <b>todas</b> as perguntas para liberar a próxima fase. Errou? Você lê uma explicação melhor e tenta de novo.</p>`;
  fase.perguntas.forEach((p, i) => {
    html += `<div class="quiz-block" data-pi="${i}">
      <div class="quiz-question">${i+1}. ${p.q}</div>
      <div class="quiz-options">
        ${p.opcoes.map((o, oi) => `<button data-oi="${oi}">${String.fromCharCode(65+oi)}) ${o}</button>`).join('')}
      </div>
      <div class="feedback-slot"></div>
    </div>`;
  });
  html += `<div id="quizStatus" class="lock-msg" style="display:none;">🔒 Responda todas corretamente para avançar.</div>`;
  html += `</div>`;
  return html;
}

function wireQuiz(fase) {
  const blocks = screensEl.querySelectorAll('.quiz-block');
  const respondidas = new Array(fase.perguntas.length).fill(false);

  blocks.forEach((bl, pi) => {
    const opts = bl.querySelectorAll('.quiz-options button');
    opts.forEach(btn => {
      btn.onclick = () => {
        if (respondidas[pi]) return;
        const oi = +btn.dataset.oi;
        const p = fase.perguntas[pi];
        const slot = bl.querySelector('.feedback-slot');

        if (oi === p.correta) {
          btn.classList.add('correct');
          opts.forEach(b => b.disabled = true);
          respondidas[pi] = true;
          slot.innerHTML = `<div class="feedback ok">✅ Acertou! Muito bem.</div>`;
          verificarConclusao();
        } else {
          btn.classList.add('wrong');
          // nível do erro
          state.quizErros[state.idx] = state.quizErros[state.idx] || {};
          const nivel = (state.quizErros[state.idx][pi] || 0) + 1;
          state.quizErros[state.idx][pi] = nivel;

          const explIdx = Math.min(nivel - 1, p.explicacoes.length - 1);
          const expl = p.explicacoes[explIdx];

          slot.innerHTML = `
            <div class="feedback err">
              ❌ Errou! Vamos reler com mais calma:
              <div style="margin-top:10px;">
                <span class="explica-nivel ${nivel>=2?'n2':''}">📘 Explicação ${nivel >= 2 ? 'DETALHADA' : 'reforço'}</span>
                <div style="margin-top:6px;color:#000;font-weight:normal;">${expl}</div>
              </div>
              <button class="nav-btn primary" style="margin-top:12px;" onclick="resetPergunta(${pi})">🔁 Tentar de novo</button>
            </div>
          `;
          // bloqueia botões até clicar em tentar de novo
          opts.forEach(b => b.disabled = true);
        }
      };
    });
  });

  // expor reset
  window.resetPergunta = function(pi) {
    const bl = screensEl.querySelectorAll('.quiz-block')[pi];
    const opts = bl.querySelectorAll('.quiz-options button');
    opts.forEach(b => { b.disabled = false; b.classList.remove('correct','wrong'); });
    bl.querySelector('.feedback-slot').innerHTML = '';
  };

  function verificarConclusao() {
    if (respondidas.every(r => r)) {
      state.desbloqueado = Math.max(state.desbloqueado, state.idx + 1);
      const status = document.getElementById('quizStatus');
      status.style.display = 'block';
      status.style.background = '#d4f5dd';
      status.style.borderLeftColor = 'var(--verde)';
      status.style.color = '#1d6b3a';
      status.innerHTML = '🎉 <b>Fase concluída!</b> Clique em <b>Avançar ▶</b> para a próxima.';
      updateNav();
    }
  }
}

// ===== CAÇA-PALAVRAS =====
function initCacaPalavras() {
  const card = document.getElementById('cpCard');
  const palavras = [
    { p: 'ENCLAVE',    dica: 'Atividade econômica isolada, voltada à exportação.' },
    { p: 'APARTHEID',  dica: 'Sistema de segregação racial na África do Sul (1948-1994).' },
    { p: 'FAVELA',     dica: 'Assentamento informal nas grandes cidades.' },
    { p: 'COLONIAL',   dica: 'Relacionado ao período de colonização europeia.' },
    { p: 'MANDELA',    dica: 'Líder que pôs fim ao Apartheid em 1994.' },
    { p: 'AFRICA',     dica: 'O continente estudado.' },
    { p: 'BERLIM',     dica: 'Cidade da conferência que dividiu a África (1884-85).' }
  ];

  const N = 14;
  const grid = Array.from({length:N}, () => Array(N).fill(''));
  const placements = []; // {p, dica, cells:[[r,c]...]}

  const dirs = [[0,1],[1,0],[1,1],[-1,1]]; // horiz, vert, diag↓, diag↑
  function tentar(p) {
    for (let t=0; t<200; t++) {
      const [dr,dc] = dirs[Math.floor(Math.random()*dirs.length)];
      const r = Math.floor(Math.random()*N);
      const c = Math.floor(Math.random()*N);
      const er = r + dr*(p.length-1), ec = c + dc*(p.length-1);
      if (er<0||er>=N||ec<0||ec>=N) continue;
      let ok = true;
      for (let i=0;i<p.length;i++){
        const rr=r+dr*i, cc=c+dc*i;
        if (grid[rr][cc] && grid[rr][cc]!==p[i]) { ok=false; break; }
      }
      if (!ok) continue;
      const cells = [];
      for (let i=0;i<p.length;i++){
        const rr=r+dr*i, cc=c+dc*i;
        grid[rr][cc] = p[i];
        cells.push([rr,cc]);
      }
      return cells;
    }
    return null;
  }

  palavras.forEach(w => {
    const cells = tentar(w.p);
    if (cells) placements.push({...w, cells});
  });

  // preenche aleatório
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let r=0;r<N;r++) for (let c=0;c<N;c++) if (!grid[r][c]) grid[r][c] = letras[Math.floor(Math.random()*26)];

  // render
  let html = `<span class="tag purple">JOGO 1 🔎</span>
    <h2 class="game-title">Caça-Palavras Geográfico</h2>
    <p>Clique na <b>primeira</b> e depois na <b>última</b> letra de cada palavra. Use as dicas! 🧭</p>
    <div class="cp-wrap">
      <div class="cp-grid" style="grid-template-columns:repeat(${N},32px);">`;
  for (let r=0;r<N;r++) for (let c=0;c<N;c++) {
    html += `<div class="cp-cell" data-r="${r}" data-c="${c}">${grid[r][c]}</div>`;
  }
  html += `</div><div class="cp-list"><h4>Palavras (${placements.length}):</h4><ul id="cpList">`;
  placements.forEach((w,i)=>{
    html += `<li data-i="${i}"><b>${'•'.repeat(w.p.length)}</b> <span class="hint">💡 ${w.dica}</span></li>`;
  });
  html += `</ul>
    <div id="cpStatus" class="lock-msg">🔒 Encontre todas para liberar a próxima fase.</div>
    <button class="nav-btn" id="cpSkip" style="margin-top:8px;">Desistir e revelar 🙈</button>
    </div></div>`;
  card.innerHTML = html;

  let sel = null;
  card.querySelectorAll('.cp-cell').forEach(cell => {
    cell.onclick = () => {
      if (cell.classList.contains('found')) return;
      if (!sel) { sel = cell; cell.classList.add('sel'); return; }
      const r1=+sel.dataset.r, c1=+sel.dataset.c, r2=+cell.dataset.r, c2=+cell.dataset.c;
      const cells = lineCells(r1,c1,r2,c2);
      if (cells) {
        // construir palavra
        const word = cells.map(([r,c]) => grid[r][c]).join('');
        const rev = word.split('').reverse().join('');
        const match = placements.findIndex((w,i)=> (w.p===word || w.p===rev) && !w._done);
        if (match >= 0) {
          placements[match]._done = true;
          cells.forEach(([r,c]) => {
            const el = card.querySelector(`.cp-cell[data-r="${r}"][data-c="${c}"]`);
            el.classList.add('found'); el.classList.remove('sel');
          });
          const li = card.querySelector(`#cpList li[data-i="${match}"]`);
          li.classList.add('done');
          li.querySelector('b').textContent = placements[match].p;
        } else {
          sel.classList.remove('sel');
        }
      } else {
        sel.classList.remove('sel');
      }
      sel = null;
      checkCp();
    };
  });

  document.getElementById('cpSkip').onclick = () => {
    placements.forEach((w,i)=>{
      if (!w._done) {
        w._done = true;
        w.cells.forEach(([r,c])=>{
          const el = card.querySelector(`.cp-cell[data-r="${r}"][data-c="${c}"]`);
          el.classList.add('found');
        });
        const li = card.querySelector(`#cpList li[data-i="${i}"]`);
        li.classList.add('done');
        li.querySelector('b').textContent = w.p;
      }
    });
    checkCp();
  };

  function lineCells(r1,c1,r2,c2) {
    const dr = Math.sign(r2-r1), dc = Math.sign(c2-c1);
    const dist = Math.max(Math.abs(r2-r1), Math.abs(c2-c1));
    if (!(dr===0 || dc===0 || Math.abs(r2-r1)===Math.abs(c2-c1))) return null;
    const arr = [];
    for (let i=0;i<=dist;i++) arr.push([r1+dr*i, c1+dc*i]);
    return arr;
  }
  function checkCp() {
    if (placements.every(w=>w._done)) {
      document.getElementById('cpStatus').innerHTML = '🎉 Tudo encontrado! Avance para a próxima fase.';
      document.getElementById('cpStatus').style.background = '#d4f5dd';
      document.getElementById('cpStatus').style.borderLeftColor = 'var(--verde)';
      document.getElementById('cpStatus').style.color = '#1d6b3a';
      state.desbloqueado = Math.max(state.desbloqueado, state.idx+1);
      updateNav();
    }
  }
}

// ===== FORCA =====
function initForca() {
  const card = document.getElementById('forcaCard');
  const palavras = [
    { p: 'APARTHEID', dica: 'Sistema de segregação racial na África do Sul.' },
    { p: 'ENCLAVE',   dica: 'Atividade econômica isolada e voltada ao exterior.' },
    { p: 'COLONIZACAO', dica: 'Processo histórico de exploração europeia na África.' },
    { p: 'SEGREGACAO', dica: 'Separação de grupos sociais no espaço urbano.' },
    { p: 'MANDELA',   dica: 'Quem pôs fim ao Apartheid.' },
    { p: 'DESIGUALDADE', dica: 'Diferenças de acesso à riqueza e oportunidades.' }
  ];
  let idx = 0;
  let escolhida = palavras[idx];
  let acertos = new Set();
  let erros = 0;
  const MAX = 6;
  let vencidas = 0;

  function desenhar() {
    const partes = ['  ___\n |   |\n |\n |\n |\n_|___',
                    '  ___\n |   |\n |   O\n |\n |\n_|___',
                    '  ___\n |   |\n |   O\n |   |\n |\n_|___',
                    '  ___\n |   |\n |   O\n |  /|\n |\n_|___',
                    '  ___\n |   |\n |   O\n |  /|\\\n |\n_|___',
                    '  ___\n |   |\n |   O\n |  /|\\\n |  /\n_|___',
                    '  ___\n |   |\n |   O\n |  /|\\\n |  / \\\n_|___'];
    return partes[erros] || partes[partes.length-1];
  }

  function render() {
    const display = escolhida.p.split('').map(l => acertos.has(l) ? l : '_').join(' ');
    let html = `<span class="tag red">JOGO 2 💀</span>
      <h2 class="game-title">Jogo da Forca</h2>
      <p>💡 Dica: <b>${escolhida.dica}</b></p>
      <div class="forca-wrap">
        <div class="forca-hangman">${desenhar()}</div>
        <div class="forca-word">${display}</div>
        <div class="forca-info">Erros: ${erros}/${MAX} · Palavra ${vencidas+1} de 3</div>
        <div class="forca-letters">`;
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(l => {
      const used = acertos.has(l) || tentadas.has(l);
      const cls = acertos.has(l) ? 'used-ok' : (tentadas.has(l) ? 'used-bad' : '');
      html += `<button class="${cls}" ${used?'disabled':''} data-l="${l}">${l}</button>`;
    });
    html += `</div>
      <div id="forcaStatus" class="lock-msg" style="margin-top:14px;">🔒 Vença ${3-vencidas} palavra(s) para liberar a próxima fase.</div>
    </div>`;
    card.innerHTML = html;

    card.querySelectorAll('.forca-letters button').forEach(b => {
      b.onclick = () => {
        const l = b.dataset.l;
        if (escolhida.p.includes(l)) acertos.add(l);
        else { tentadas.add(l); erros++; }
        checkEnd();
      };
    });
  }

  let tentadas = new Set();

  function checkEnd() {
    const ganhou = escolhida.p.split('').every(l => acertos.has(l));
    const perdeu = erros >= MAX;
    if (ganhou) {
      vencidas++;
      if (vencidas >= 3) {
        render();
        const s = document.getElementById('forcaStatus');
        s.innerHTML = '🎉 Você venceu 3 palavras! Avance para a próxima fase.';
        s.style.background='#d4f5dd'; s.style.borderLeftColor='var(--verde)'; s.style.color='#1d6b3a';
        state.desbloqueado = Math.max(state.desbloqueado, state.idx+1);
        updateNav();
        return;
      }
      proxima(true);
    } else if (perdeu) {
      alert(`A palavra era: ${escolhida.p}. Tente outra!`);
      proxima(false);
    } else {
      render();
    }
  }

  function proxima(manterScore) {
    idx = (idx + 1) % palavras.length;
    escolhida = palavras[idx];
    acertos = new Set(); tentadas = new Set(); erros = 0;
    render();
  }

  render();
}

// ===== JOGO DA VELHA =====
function initVelha() {
  const card = document.getElementById('velhaCard');
  let board = Array(9).fill('');
  let turn = 'X'; // jogador = X
  let acabou = false;

  function render() {
    let html = `<span class="tag">PAUSA 🎯</span>
      <h2 class="game-title">Jogo da Velha (vs. IA)</h2>
      <p>Relaxa um pouco! Jogue uma partida e siga em frente. Você é o <b>X</b>.</p>
      <div class="velha-board">`;
    board.forEach((v,i) => {
      html += `<div class="velha-cell ${v.toLowerCase()}" data-i="${i}">${v}</div>`;
    });
    html += `</div>
      <p id="velhaStatus" style="text-align:center;font-weight:bold;color:var(--azul);"></p>
      <div style="text-align:center;">
        <button class="nav-btn" id="velhaReset">🔄 Reiniciar</button>
        <button class="nav-btn primary" id="velhaSkip">Pular pausa ▶</button>
      </div>`;
    card.innerHTML = html;
    card.querySelectorAll('.velha-cell').forEach(c => {
      c.onclick = () => {
        const i = +c.dataset.i;
        if (board[i] || acabou || turn !== 'X') return;
        board[i] = 'X'; render(); checkWin();
        if (!acabou) { turn='O'; setTimeout(iaMove, 350); }
      };
    });
    document.getElementById('velhaReset').onclick = () => {
      board = Array(9).fill(''); turn='X'; acabou=false; render();
    };
    document.getElementById('velhaSkip').onclick = liberar;
  }

  function iaMove() {
    const livres = board.map((v,i)=>v?null:i).filter(x=>x!==null);
    if (!livres.length) return;
    // tenta ganhar ou bloquear
    let move = bestMove('O') ?? bestMove('X') ?? (livres.includes(4) ? 4 : livres[Math.floor(Math.random()*livres.length)]);
    board[move] = 'O'; turn='X'; render(); checkWin();
  }
  function bestMove(p) {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (const w of wins) {
      const vals = w.map(i=>board[i]);
      const empty = w[vals.indexOf('')];
      if (vals.filter(v=>v===p).length===2 && vals.includes('')) return empty;
    }
    return null;
  }
  function checkWin() {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (const w of wins) {
      const [a,b,c] = w;
      if (board[a] && board[a]===board[b] && board[b]===board[c]) {
        acabou = true;
        document.getElementById('velhaStatus').textContent = board[a]==='X' ? '🏆 Você ganhou!' : '🤖 A IA ganhou!';
        liberar();
        return;
      }
    }
    if (board.every(v=>v)) {
      acabou = true;
      document.getElementById('velhaStatus').textContent = '🤝 Empate!';
      liberar();
    }
  }
  function liberar() {
    state.desbloqueado = Math.max(state.desbloqueado, state.idx+1);
    updateNav();
  }
  render();
}

// ===== MEMÓRIA =====
function initMemoria() {
  const card = document.getElementById('memCard');
  const pares = [
    ['Enclave','Atividade econômica isolada'],
    ['Apartheid','Segregação racial (ÁfricaSul)'],
    ['Mandela','Líder antiapartheid'],
    ['Berlim 1884','Conferência que dividiu a África'],
    ['Ajuste Fiscal','Corte de gastos do Estado'],
    ['Favela','Assentamento informal']
  ];
  const cards = [];
  pares.forEach((p,i) => {
    cards.push({id: 'a'+i, text: p[0], pair: i});
    cards.push({id: 'b'+i, text: p[1], pair: i});
  });
  cards.sort(()=>Math.random()-0.5);

  let flipped = []; let matched = 0;

  function render() {
    let html = `<span class="tag blue">JOGO 3 🧠</span>
      <h2 class="game-title">Memória — Conceito × Definição</h2>
      <p>Encontre os pares: conceito + sua definição.</p>
      <div class="mem-wrap">`;
    cards.forEach((c,i) => {
      const show = c.flipped || c.matched;
      html += `<div class="mem-card ${c.flipped?'flipped':''} ${c.matched?'matched':''}" data-i="${i}">
        ${show ? c.text : '?'}
      </div>`;
    });
    html += `</div>
      <p id="memStatus" style="text-align:center;margin-top:14px;color:#555;">Pares encontrados: <b>${matched}</b>/${pares.length}</p>`;
    card.innerHTML = html;

    card.querySelectorAll('.mem-card').forEach(el => {
      el.onclick = () => {
        const i = +el.dataset.i;
        if (cards[i].matched || cards[i].flipped) return;
        if (flipped.length === 2) return;
        cards[i].flipped = true; flipped.push(i); render();
        if (flipped.length === 2) {
          const [a,b] = flipped;
          if (cards[a].pair === cards[b].pair) {
            cards[a].matched = cards[b].matched = true;
            matched++;
            flipped = [];
            if (matched === pares.length) {
              state.desbloqueado = Math.max(state.desbloqueado, state.idx+1);
              updateNav();
              setTimeout(()=>{
                document.getElementById('memStatus').innerHTML = '🎉 Todos os pares encontrados! Avance ▶';
              }, 100);
            }
            render();
          } else {
            setTimeout(() => {
              cards[a].flipped = cards[b].flipped = false;
              flipped = []; render();
            }, 800);
          }
        }
      };
    });
  }
  render();
}

// ===== INICIAR =====
render();
