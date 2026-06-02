/* ============================================================
   GEOGRAFIA AV2 — ÁFRICA
   Arquitetura: Home → (Modos | Leitura | Games)
   Modos: Iniciante · Intermediário · Revisão (Hard)
   Dentro de cada modo: tópico → quiz 3 perguntas → ... → quiz final
   ============================================================ */

/* ---------- CONTEÚDO COMPARTILHADO ---------- */

const TOPICOS = [
  {
    id: 'enclave',
    cor: 'gold',
    icone: '⛏️',
    titulo: 'Enclave Econômico',
    resumo: 'Quando a riqueza de uma região não circula nela mesma.',
    leve: `
      <p><b>Pensa numa mina de ouro gigante em Gana.</b> Empresa estrangeira chega, monta tudo, extrai o ouro, manda pra fora… e a cidade ao redor continua sem hospital, sem escola boa, sem asfalto. Esquisito, né?</p>
      <p>Isso é um <b>ENCLAVE ECONÔMICO</b>: uma "ilha de riqueza" que produz muito dinheiro, mas esse dinheiro <b>não fica</b> no lugar. Vai direto pro exterior.</p>
    `,
    normal: `
      <p><b>Enclave econômico</b> é um modelo onde a atividade produtiva (geralmente mineração, petróleo ou agronegócio de exportação) está fisicamente <b>dentro</b> de um país africano, mas funciona <b>desconectada</b> da economia local.</p>
      <p>O que isso significa na prática:</p>
      <ul>
        <li>Empresas <b>transnacionais</b> controlam a produção.</li>
        <li>Mão de obra qualificada vem de fora; localmente sobra trabalho mal pago.</li>
        <li>Os lucros são <b>remetidos pro exterior</b>, em vez de virarem hospitais, escolas e infraestrutura.</li>
      </ul>
      <div class="destaque">📌 Resultado: o país "exporta riqueza" mas a população do entorno permanece pobre.</div>
    `,
    profundo: `
      <p>O <b>enclave</b> é a expressão geográfica contemporânea de um padrão herdado da colonização: extrair o máximo de valor, com o mínimo de retorno social para o território explorado.</p>
      <p>Características diagnósticas:</p>
      <ul>
        <li><b>Especialização primário-exportadora</b> em poucos produtos (petróleo na Nigéria/Angola, cobre na Zâmbia/RDC, ouro em Gana/Mali, cacau na Costa do Marfim).</li>
        <li><b>Infraestrutura de exportação</b>: ferrovias e portos voltados a escoar a matéria-prima, NÃO a integrar o território.</li>
        <li><b>Repatriação de lucros</b> via transnacionais.</li>
        <li><b>Dependência de preços internacionais</b>: a economia do país oscila ao sabor do mercado externo.</li>
      </ul>
      <div class="box-info">⚠ Crítica: o enclave reproduz a lógica colonial. O território serve ao mercado externo, não a si mesmo.</div>
    `,
  },
  {
    id: 'desigualdade',
    cor: 'emerald',
    icone: '⚖️',
    titulo: 'Desigualdade Socioeconômica',
    resumo: 'A riqueza africana existe — mas ela é cruelmente mal distribuída.',
    leve: `
      <p><b>Imagina Lagos, na Nigéria.</b> Em <b>Ikoyi</b> tem mansão à beira-mar com iate na porta. A meia hora dali, <b>Makoko</b>: casas sobre palafitas na lagoa, sem esgoto, sem luz direito.</p>
      <p>Esse contraste violento é o coração da <b>desigualdade socioeconômica</b> africana: a riqueza <b>existe</b>, mas fica concentrada em pouca gente.</p>
    `,
    normal: `
      <p>A <b>desigualdade socioeconômica</b> nas metrópoles africanas se manifesta em três frentes:</p>
      <ul>
        <li><b>Espacial</b>: áreas de luxo a poucos quilômetros de assentamentos informais (favelas).</li>
        <li><b>Renda</b>: pequena elite concentra a maior parte da riqueza; maioria vive com baixos salários ou no subemprego.</li>
        <li><b>Acesso a serviços</b>: saúde, educação e saneamento são privilégio de uma minoria.</li>
      </ul>
      <p>Esse quadro é <b>agravado</b> pelas chamadas <b>políticas de ajuste fiscal</b> impostas por organismos internacionais (FMI, Banco Mundial), que exigem cortes em gastos sociais.</p>
      <div class="destaque">📌 Resultado: <b>exclusão e segregação</b> — a maioria fica fora dos benefícios do desenvolvimento.</div>
    `,
    profundo: `
      <p>A desigualdade africana <b>não é natural</b>: ela é produzida por estruturas econômicas e políticas concretas. A leitura crítica envolve três camadas:</p>
      <ul>
        <li><b>Concentração</b>: a riqueza extraída via enclave fica nas mãos de uma elite local + transnacionais.</li>
        <li><b>Ajuste fiscal</b>: FMI/BM condicionam empréstimos a cortes de gastos públicos → estrangulamento de saúde, educação e moradia.</li>
        <li><b>Segregação socioespacial</b>: a cidade reflete a desigualdade. Centro modernizado, periferia informal e negligenciada.</li>
      </ul>
      <div class="box-info">⚠ A desigualdade resulta em <b>exclusão estrutural</b>: a maioria da população não acessa os ganhos do crescimento.</div>
    `,
  },
  {
    id: 'herancas',
    cor: 'terra',
    icone: '🏛️',
    titulo: 'Heranças Históricas + Apartheid',
    resumo: 'Por que a África ainda carrega marcas profundas da colonização.',
    leve: `
      <p><b>Em 1884, na cidade de Berlim</b>, líderes europeus se reuniram e <b>desenharam o mapa da África com régua</b> — sem chamar nenhum africano pra mesa. Cada um pegou um pedaço.</p>
      <p>Por isso muitas fronteiras africanas são RETAS demais — colocaram inimigos juntos e separaram irmãos. Esses conflitos não terminaram.</p>
      <p>E na <b>África do Sul</b>, de 1948 a 1994, um sistema chamado <b>APARTHEID</b> separou negros e brancos POR LEI. Mandela lutou e ganhou — mas as marcas continuam.</p>
    `,
    normal: `
      <p>As <b>heranças coloniais</b> explicam boa parte dos problemas africanos atuais:</p>
      <ul>
        <li><b>Conferência de Berlim (1884–85)</b>: potências europeias partilharam o continente entre si, sem participação africana. Fronteiras artificiais que separaram povos parentes e juntaram rivais.</li>
        <li><b>Exploração</b>: recursos naturais (ouro, marfim, diamantes, petróleo) e mão de obra africana (incluindo escravidão de milhões).</li>
        <li><b>Estrutura econômica</b>: portos e ferrovias voltados à exportação de matérias-primas → dependência que persiste.</li>
        <li><b>Conflitos étnicos contemporâneos</b> (Ruanda 1994, Sudão, Nigéria) têm raízes nessas fronteiras artificiais.</li>
      </ul>
      <p>O caso mais brutal de segregação institucional foi o <b>APARTHEID</b> na África do Sul (1948–1994):</p>
      <ul>
        <li>Sistema de segregação racial <b>previsto em lei</b>.</li>
        <li><b>Bantustões</b>: territórios onde a população negra era forçada a viver.</li>
        <li>Negros sem direito ao voto, escolas separadas, salários menores.</li>
        <li><b>Nelson Mandela</b> liderou a luta. Eleito presidente em 1994.</li>
        <li>Marcas <b>persistem</b>: a África do Sul ainda é um dos países mais desiguais do mundo.</li>
      </ul>
    `,
    profundo: `
      <p>A <b>colonização europeia</b> da África (séc. XIX–XX) reorganizou todo o continente segundo interesses externos. Três legados estruturais marcam o presente:</p>
      <ul>
        <li><b>Fronteiras artificiais</b>: traçadas em Berlim sem critério étnico/cultural. Geram Estados frágeis, conflitos internos e fragmentação identitária.</li>
        <li><b>Dependência econômica</b>: as economias foram moldadas para exportar matérias-primas a baixo custo para a Europa. Mesmo após as independências (1950–70), essa estrutura permanece (REPRODUÇÃO da exclusão).</li>
        <li><b>Racismo institucional</b>: o Apartheid sul-africano (1948–94) elevou a segregação racial à condição de política de Estado, criando os <b>bantustões</b> e leis como o <i>Group Areas Act</i> e <i>Pass Laws</i>.</li>
      </ul>
      <p>Mesmo com o fim oficial em 1994 (Mandela presidente), a África do Sul mantém indicadores de desigualdade brutalmente racializados — a maioria pobre permanece negra. É o que se chama de <b>herança estrutural</b>: leis caem rápido, sociedades mudam devagar.</p>
      <div class="box-info">🎯 Para a prova: a colonização não é "coisa do passado". Ela continua organizando o espaço, a economia e os conflitos da África contemporânea.</div>
    `,
  },
  {
    id: 'impactos',
    cor: 'cyan',
    icone: '🌍',
    titulo: 'Impactos & Caminhos',
    resumo: 'Como tudo isso afeta a vida real — e o que pode mudar.',
    leve: `
      <p>Tudo o que vimos (enclave + desigualdade + heranças coloniais) tem <b>nome e endereço</b> na vida das pessoas:</p>
      <ul>
        <li>Famílias inteiras morando em favelas.</li>
        <li>Jovens vendendo coisas na rua porque não tem emprego com carteira (<b>subemprego</b>).</li>
        <li>Pessoas saindo do campo pra cidade buscando vida melhor (<b>migração interna</b>).</li>
        <li>Falta de hospital, escola, água tratada.</li>
      </ul>
      <p>Mas tem caminho de saída: investir em direitos sociais, planejar as cidades pensando em todo mundo, valorizar a cultura africana e <b>diversificar</b> a economia (não depender só de um produto exportado).</p>
    `,
    normal: `
      <p>Os <b>impactos diretos</b> na vida das pessoas:</p>
      <ul>
        <li><b>Moradias precárias</b> em favelas e assentamentos informais.</li>
        <li><b>Desemprego</b> e <b>subemprego</b> (trabalho informal sem direitos).</li>
        <li>Acesso <b>desigual</b> a saúde, educação e saneamento.</li>
        <li><b>Migrações internas</b> (campo → cidade) buscando melhores condições.</li>
        <li><b>Conflitos urbanos</b> entre grupos que disputam espaço e recursos.</li>
      </ul>
      <p>Os <b>caminhos para mudança</b> (segundo o mapa mental do prof. Wesclay):</p>
      <ul>
        <li>Investimentos públicos em direitos sociais.</li>
        <li>Planejamento urbano inclusivo.</li>
        <li><b>Diversificação econômica</b> (sair do modelo enclave).</li>
        <li>Valorização das culturas e dos povos africanos.</li>
      </ul>
    `,
    profundo: `
      <p>Os impactos da estrutura econômica e histórica africana se materializam na vida cotidiana:</p>
      <ul>
        <li><b>Precarização urbana</b>: assentamentos informais (Makoko, Kibera, townships) sem infraestrutura, à margem do Estado.</li>
        <li><b>Subemprego</b>: economia formal não absorve a força de trabalho; maioria vive da informalidade.</li>
        <li><b>Migrações internas</b>: espontâneas, não planejadas pelo Estado — geram inchaço urbano sem suporte.</li>
        <li><b>Conflitos urbanos</b>: por moradia, água, território.</li>
      </ul>
      <p>A superação exige <b>ruptura com o modelo enclave</b> e construção de soberania econômica:</p>
      <ul>
        <li>Estado ativo em políticas sociais.</li>
        <li>Diversificação produtiva (industrialização, tecnologia, serviços).</li>
        <li>Integração urbana inclusiva (regularização fundiária, transporte, saneamento).</li>
        <li>Reconhecimento e valorização das identidades africanas como força política.</li>
      </ul>
      <div class="box-info">🎯 A geografia crítica não descreve só problemas — aponta caminhos. As soluções vão na DIREÇÃO OPOSTA dos problemas (diversificação ≠ enclave; direitos sociais ≠ ajuste fiscal; integração ≠ segregação).</div>
    `,
  },
];

/* ---------- QUIZZES POR TÓPICO E POR MODO ---------- */
/* Cada tópico tem 3 perguntas em cada modo. Modo revisão usa as pegadinhas. */

const QUIZZES = {
  enclave: {
    iniciante: [
      {
        q: 'Em poucas palavras: o que é um ENCLAVE ECONÔMICO?',
        opcoes: [
          'Uma fazenda comunitária africana voltada para o consumo local.',
          'Uma atividade econômica isolada do território onde acontece (a riqueza sai).',
          'Um tipo de moeda usada apenas dentro do continente africano.',
          'Uma área cercada por muros militares para controlar a população.',
        ],
        correta: 1,
        explicacoes: [
          'Pense: o ouro é extraído na África, mas o lucro vai pra onde?',
          'ENCLAVE = ilha de riqueza isolada. Produz muito, mas o dinheiro sai do país sem beneficiar a região.',
        ],
      },
      {
        q: 'Quem normalmente controla um enclave africano (mineração, petróleo)?',
        opcoes: [
          'Cooperativas locais de pequenos produtores e moradores da região.',
          'O governo nacional sozinho, sem qualquer parceria internacional.',
          'Empresas transnacionais estrangeiras com sede em outros países.',
          'Organizações ambientais ligadas à preservação dos recursos.',
        ],
        correta: 2,
        explicacoes: [
          'Quem tem dinheiro pra montar uma mina de ouro gigante?',
          'TRANSNACIONAIS estrangeiras — grandes empresas que operam em vários países e levam o lucro pra fora.',
        ],
      },
      {
        q: 'Por que o enclave NÃO ajuda muito a região onde ele está?',
        opcoes: [
          'Porque a tecnologia europeia simplesmente não funciona em solo africano.',
          'Porque os lucros vão pro exterior em vez de virarem hospital e escola.',
          'Porque a população africana recusa os empregos que são oferecidos ali.',
          'Porque o próprio governo proíbe gastar o dinheiro arrecadado na região.',
        ],
        correta: 1,
        explicacoes: [
          'Se a riqueza sai do país, o que sobra pra construir infraestrutura?',
          'Lucros vão pro exterior → não viram serviços públicos → população continua sem hospital, escola e saneamento.',
        ],
      },
    ],
    intermediario: [
      {
        q: 'Por que o modelo de "enclave econômico" não promove desenvolvimento amplo no país hospedeiro?',
        opcoes: [
          'Porque cria muitos empregos formais bem pagos para toda a população local.',
          'Porque envia lucros e riqueza ao exterior, deixando pouca renda circulando.',
          'Porque distribui igualmente toda a renda do enclave entre os moradores locais.',
          'Porque obriga as empresas estrangeiras a investirem em escolas da região.',
        ],
        correta: 1,
        explicacoes: [
          'Pense: pra que serve um enclave do ponto de vista de quem o monta?',
          'A lógica do enclave é EXTRAIR e EXPORTAR. A riqueza não fica — vai pra matriz da transnacional no exterior. Por isso a população local não vê melhoria.',
        ],
      },
      {
        q: 'Qual destes é um EXEMPLO típico de enclave econômico em país africano?',
        opcoes: [
          'Uma rede municipal de escolas públicas atendendo crianças de toda a região.',
          'Extração de petróleo em Angola por transnacionais com lucros indo ao exterior.',
          'Um programa nacional de reforma agrária distribuindo terras a camponeses.',
          'Uma cooperativa de pesca artesanal mantida por moradores da vila litorânea.',
        ],
        correta: 1,
        explicacoes: [
          'Pense em GRANDE escala + EMPRESA ESTRANGEIRA + EXPORTAÇÃO.',
          'Petróleo angolano, cobre da Zâmbia, ouro de Gana operados por transnacionais são exemplos clássicos: produzem riqueza no território, mas ela sai do país.',
        ],
      },
      {
        q: 'O enclave econômico está diretamente ligado a qual outro problema africano?',
        opcoes: [
          'À rápida expansão da classe média e ao acesso amplo a bens de consumo.',
          'À desigualdade socioeconômica: concentra riqueza fora do alcance da maioria.',
          'Ao excesso de serviços públicos universais em saúde, educação e moradia.',
          'À forte redução do desemprego graças aos empregos formais bem pagos.',
        ],
        correta: 1,
        explicacoes: [
          'Se a riqueza sai do país, sobra pra quem dentro dele?',
          'Enclave alimenta DESIGUALDADE: poucos lucram (elite local + estrangeiros), maioria fica sem acesso aos ganhos econômicos.',
        ],
      },
    ],
    revisao: [
      {
        q: 'Numa cidade petrolífera em Angola, há refinarias modernas operadas por transnacionais, mas o bairro ao redor não tem saneamento nem hospital adequados. Isso é um exemplo direto de:',
        opcoes: [
          'Diversificação econômica bem-sucedida liderada por empresas locais.',
          'Enclave econômico: atividade produtiva isolada do desenvolvimento local.',
          'Política de ajuste fiscal imposta por organismos internacionais ao país.',
          'Migração internacional de trabalhadores em busca de melhores salários.',
        ],
        correta: 1,
        explicacoes: [
          'Riqueza extraída no local que não vira benefício no local. Qual conceito é esse?',
          'ENCLAVE clássico: produção altamente lucrativa coexiste com pobreza ao redor porque o capital é EXPORTADO em vez de reinvestido no território.',
        ],
      },
      {
        q: 'Sobre o enclave econômico, é INCORRETO afirmar:',
        opcoes: [
          'Costuma se concentrar em mineração, petróleo ou agronegócio voltado à exportação.',
          'Reproduz a lógica colonial de extrair valor sem retorno social ao território.',
          'É controlado majoritariamente por empresas transnacionais.',
          'Promove ampla industrialização e diversificação produtiva do país hospedeiro.',
        ],
        correta: 3,
        explicacoes: [
          'Atenção: a pergunta pede a INCORRETA. O enclave promove diversificação ou o oposto disso?',
          'Justamente o OPOSTO: o enclave APROFUNDA a especialização em poucos produtos de exportação e NÃO industrializa nem diversifica a economia local.',
        ],
      },
      {
        q: 'O enclave econômico africano é frequentemente apontado como uma continuação da lógica colonial porque:',
        opcoes: [
          'Distribui igualmente entre toda a população local os lucros gerados pela atividade extrativa.',
          'Mantém a função de extrair recursos do território sem retorno social para a população local.',
          'Garante ampla industrialização e diversificação produtiva ao país africano que recebe o investimento.',
          'Força as empresas estrangeiras a reinvestir os lucros em escolas e hospitais nas redondezas.',
        ],
        correta: 1,
        explicacoes: [
          'O que a colonização fazia? Extraía riqueza e mandava pra fora. O enclave repete esse padrão.',
          'Igual ao tempo colonial: o território serve para EXPORTAR riqueza às transnacionais, e a população local segue sem hospital, escola ou saneamento.',
        ],
      },
    ],
  },

  desigualdade: {
    iniciante: [
      {
        q: 'Quando vemos mansões de luxo a poucos quilômetros de favelas em Lagos ou Joanesburgo, estamos vendo:',
        opcoes: [
          'Uma sociedade muito igualitária e justa, com renda bem distribuída.',
          'O forte contraste entre áreas de luxo e assentamentos informais (desigualdade).',
          'Apenas o crescimento do turismo de alto padrão nas metrópoles africanas.',
          'Cidades muito bem planejadas, com sucesso urbano para todos os bairros.',
        ],
        correta: 1,
        explicacoes: [
          'Luxo + favela lado a lado = contraste violento.',
          'É a CARA da desigualdade nas metrópoles africanas: extremos coexistindo, separados por poucos quilômetros.',
        ],
      },
      {
        q: 'O que normalmente acontece quando o FMI exige "ajuste fiscal" de um país africano?',
        opcoes: [
          'O governo passa a gastar mais em saúde, educação e moradia popular.',
          'O governo precisa cortar gastos públicos — saúde, educação e moradia.',
          'O FMI envia recursos de graça diretamente para os mais pobres do país.',
          'Os salários dos servidores públicos aumentam para combater a pobreza.',
        ],
        correta: 1,
        explicacoes: [
          'Ajuste fiscal = apertar o cinto = gastar MENOS.',
          'CORTES em direitos sociais. E quem mais depende desses serviços? A população pobre. Por isso o ajuste fiscal AUMENTA a desigualdade.',
        ],
      },
      {
        q: 'A desigualdade socioeconômica africana resulta em:',
        opcoes: [
          'Inclusão social ampla, com acesso universal a saúde e educação.',
          'Exclusão e segregação: a maioria fica fora dos ganhos do desenvolvimento.',
          'Igualdade automática entre todas as camadas da população do país.',
          'Fim das favelas e dos assentamentos informais nas grandes cidades.',
        ],
        correta: 1,
        explicacoes: [
          'Se poucos têm tudo e muitos têm quase nada, o que acontece com a maioria?',
          'EXCLUSÃO e SEGREGAÇÃO. A maioria fica à margem do desenvolvimento — sem acesso aos ganhos econômicos.',
        ],
      },
    ],
    intermediario: [
      {
        q: 'Qual a principal característica da desigualdade nas metrópoles africanas?',
        opcoes: [
          'A homogeneidade entre todos os bairros, com renda e estrutura iguais.',
          'O forte contraste entre áreas de alto padrão e grandes assentamentos informais.',
          'A predominância absoluta de condomínios fechados em todo o território urbano.',
          'A ausência total de pobreza urbana graças aos investimentos públicos amplos.',
        ],
        correta: 1,
        explicacoes: [
          'Pense em "contraste": opostos lado a lado.',
          'Áreas de luxo coexistindo com favelas a poucos km — esse é o padrão das grandes cidades africanas (Lagos, Joanesburgo, Nairóbi).',
        ],
      },
      {
        q: 'O que as políticas de ajuste fiscal impostas por FMI e Banco Mundial provocam nos países africanos?',
        opcoes: [
          'Aumento expressivo dos investimentos públicos em saúde e educação básica.',
          'Investimento massivo do Estado africano na construção de moradia popular.',
          'Limitação severa dos investimentos do Estado em direitos sociais e públicos.',
          'Distribuição igualitária da renda nacional entre todas as camadas sociais.',
        ],
        correta: 2,
        explicacoes: [
          'Ajuste fiscal = governo gasta MENOS, especialmente em áreas sociais.',
          'O ajuste fiscal corta exatamente os gastos que beneficiariam a população pobre. Resultado: a desigualdade se aprofunda.',
        ],
      },
      {
        q: 'Como a desigualdade socioeconômica resulta para a maior parte da população africana?',
        opcoes: [
          'Em inclusão social ampla e oportunidades iguais para todas as classes.',
          'Em exclusão e segregação, deixando a maioria à margem do desenvolvimento.',
          'Em crescimento econômico distribuído de forma justa entre toda a população.',
          'No fim das favelas e dos assentamentos informais espalhados pelas cidades.',
        ],
        correta: 1,
        explicacoes: [
          'Desigualdade = uns ganham, outros perdem.',
          'EXCLUSÃO E SEGREGAÇÃO: a maioria fica fora dos benefícios do desenvolvimento — esse é o resultado direto descrito no mapa mental.',
        ],
      },
    ],
    revisao: [
      {
        q: 'Em Lagos (Nigéria), o bairro de Ikoyi tem mansões e iates, enquanto a poucos quilômetros fica Makoko, uma comunidade sobre palafitas na lagoa, sem saneamento. Esse cenário mostra principalmente:',
        opcoes: [
          'Que a economia africana cresce de forma equilibrada e justa entre todos.',
          'Um forte contraste socioespacial entre áreas de luxo e assentamentos informais.',
          'Que a maioria da população africana vive bem, com acesso a serviços urbanos.',
          'O sucesso recente das políticas públicas urbanas locais nas metrópoles do país.',
        ],
        correta: 1,
        explicacoes: [
          'Luxo de um lado, palafitas do outro, lado a lado. Que palavra define isso?',
          'O contraste é a marca da DESIGUALDADE SOCIOESPACIAL. Riqueza e pobreza extremas dividindo o mesmo espaço urbano — isso NÃO é equilíbrio nem sucesso, é segregação.',
        ],
      },
      {
        q: 'O governo de Gana, pressionado pelo FMI, faz um "ajuste fiscal". Qual cenário é o MAIS PROVÁVEL?',
        opcoes: [
          'Salários dos servidores aumentam e novos hospitais públicos são construídos.',
          'O Estado investe pesadamente em moradia popular nas periferias das cidades.',
          'Cortes em saúde, educação e saneamento, afetando sobretudo a população pobre.',
          'O país para de pagar a dívida externa e aplica tudo em direitos sociais amplos.',
        ],
        correta: 2,
        explicacoes: [
          'Ajuste fiscal vem com qual exigência?',
          'APERTAR O CINTO. FMI/BM exigem redução de gastos públicos. Resultado: cortes em sa\u00fade, educa\u00e7\u00e3o e saneamento — os mais pobres ficam ainda mais vulner\u00e1veis.',
        ],
      },
      {
        q: 'Sobre os "assentamentos informais" em metrópoles africanas (Kibera em Nairóbi, townships em Joanesburgo), é INCORRETO afirmar:',
        opcoes: [
          'Concentram população de baixa renda e migrantes vindos das áreas rurais.',
          'Costumam ter déficit grave de água tratada, esgoto e coleta de saneamento.',
          'São resultado direto da desigualdade socioespacial e do processo de segregação.',
          'Recebem prioridade do Estado em obras de infraestrutura e serviços públicos.',
        ],
        correta: 3,
        explicacoes: [
          'A pergunta pede a INCORRETA. O Estado realmente prioriza a favela?',
          'O OPOSTO: assentamentos informais s\u00e3o NEGLIGENCIADOS pelo Estado — por isso s\u00e3o "informais" (sem regulariza\u00e7\u00e3o, sem servi\u00e7os). A prioridade vai pra \u00e1reas de classe m\u00e9dia/alta.',
        ],
      },
    ],
  },

  herancas: {
    iniciante: [
      {
        q: 'Quem desenhou as fronteiras dos países africanos atuais?',
        opcoes: [
          'Os próprios africanos, em grandes assembleias tribais democráticas.',
          'Potências europeias na Conferência de Berlim (1884), sem consultar africanos.',
          'A ONU, em 1945, após o fim da Segunda Guerra Mundial e da escravidão.',
          'Os Estados Unidos, após a Segunda Guerra Mundial, junto com a Inglaterra.',
        ],
        correta: 1,
        explicacoes: [
          'Em 1884 nem ONU existia. Quem queria a África naquela época?',
          'Europeus, na Conferência de Berlim, com régua no mapa. Por isso muitas fronteiras são retas e ARTIFICIAIS — separaram povos parentes e juntaram inimigos.',
        ],
      },
      {
        q: 'O que foi o APARTHEID?',
        opcoes: [
          'Um movimento cultural africano de valorização das tradições ancestrais.',
          'Um sistema de segregação racial oficial na África do Sul (1948–1994).',
          'Uma guerra civil entre vários países africanos no século XX por territórios.',
          'Uma moeda colonial usada apenas entre as colônias inglesas da África.',
        ],
        correta: 1,
        explicacoes: [
          'Apartheid em afric\u00e2ner significa "separa\u00e7\u00e3o".',
          'Segrega\u00e7\u00e3o racial PREVISTA EM LEI, na \u00c1frica do Sul, 1948–1994. Negros e brancos viviam separados por for\u00e7a do Estado.',
        ],
      },
      {
        q: 'Quem foi Nelson Mandela?',
        opcoes: [
          'O criador do sistema do Apartheid sul-africano nos anos 1940.',
          'Líder negro que combateu o Apartheid, presidente da África do Sul em 1994.',
          'Um general europeu que comandou tropas coloniais no sul do continente.',
          'O atual presidente da África do Sul, no comando do país desde 2018.',
        ],
        correta: 1,
        explicacoes: [
          'Mandela é o símbolo da luta contra o Apartheid.',
          'Preso por 27 anos por lutar contra o Apartheid, foi solto em 1990 e eleito presidente em 1994 — marcando o fim oficial da segregação.',
        ],
      },
    ],
    intermediario: [
      {
        q: 'Por que dizemos que as fronteiras africanas são "artificiais"?',
        opcoes: [
          'Porque foram traçadas por satélites modernos com imagens de alta precisão.',
          'Porque foram desenhadas pelos europeus em Berlim, ignorando povos e culturas.',
          'Porque seguem com rigor as principais montanhas e rios naturais do continente.',
          'Porque os próprios africanos decidiram dividir o continente em linhas retas.',
        ],
        correta: 1,
        explicacoes: [
          'Pense: quem desenhou? E com que critério?',
          'Europeus, com régua, sem consultar ninguém. Por isso povos rivais foram colocados no mesmo país e povos parentes foram separados — fronteira ARTIFICIAL.',
        ],
      },
      {
        q: 'Durante o Apartheid, a população negra:',
        opcoes: [
          'Tinha direitos políticos e civis iguais aos da população branca do país.',
          'Era proibida de morar em áreas brancas e tinha acesso limitado a direitos.',
          'Comandava todo o governo nacional e controlava a economia da África do Sul.',
          'Vivia apenas em áreas de luxo, com pleno acesso a saúde e educação pública.',
        ],
        correta: 1,
        explicacoes: [
          'Placas "Whites Only" eram comuns. O que isso significava?',
          'Discrimina\u00e7\u00e3o total garantida por lei. Negros n\u00e3o votavam, frequentavam escolas separadas e tinham acesso pr\u00e9-limitado a servi\u00e7os.',
        ],
      },
      {
        q: 'Mesmo depois das independências (anos 1950–70), por que a maioria dos países africanos continuou economicamente dependente?',
        opcoes: [
          'Porque os próprios africanos não sabiam administrar suas economias nacionais.',
          'Porque a estrutura econômica colonial — voltada à exportação — permaneceu intacta.',
          'Porque os ex-colonizadores europeus devolveram todo o dinheiro extraído às colônias.',
          'Porque a independência trouxe imediata igualdade econômica entre todos os países.',
        ],
        correta: 1,
        explicacoes: [
          'A alternativa A é preconceituosa e falsa. Pense na ESTRUTURA econômica.',
          'Os colonizadores foram embora, mas a engrenagem ficou: portos, ferrovias e economia voltadas a EXPORTAR mat\u00e9ria-prima. Muda a bandeira, mas a depend\u00eancia continua.',
        ],
      },
    ],
    revisao: [
      {
        q: 'A Conferência de Berlim (1884–1885) é um marco da divisão da África. Sobre ela, é CORRETO afirmar:',
        opcoes: [
          'Foi uma reunião de líderes africanos que decidiram suas próprias fronteiras nacionais.',
          'Reuniu potências europeias para partilhar o continente, sem participação dos africanos.',
          'Estabeleceu de imediato a independência política de todos os países africanos.',
          'Foi conduzida pela ONU para garantir os direitos dos povos colonizados na época.',
        ],
        correta: 1,
        explicacoes: [
          'Em 1884 a ONU nem existia (1945). E os africanos não foram convidados.',
          'Bismarck convocou APENAS pot\u00eancias europeias. Desenharam o mapa COM R\u00c9GUA. Por isso fronteiras retas e artificiais — separaram povos parentes e juntaram rivais.',
        ],
      },
      {
        q: 'Por que conflitos como Ruanda (1994), Sudão e Nigéria são relacionados às heranças coloniais?',
        opcoes: [
          'Porque os próprios povos africanos são naturalmente violentos entre si.',
          'Porque povos rivais foram forçados a viver dentro das mesmas fronteiras artificiais.',
          'Porque o clima quente e seco do continente africano provoca conflitos sociais.',
          'Porque a Europa atual ainda ocupa esses países africanos militarmente até hoje.',
        ],
        correta: 1,
        explicacoes: [
          'As outras opções são preconceito ou simplesmente falsas. Pense nas FRONTEIRAS.',
          'Povos com l\u00ednguas e hist\u00f3rias diferentes (tutsis e hutus em Ruanda) foram colocados \u00e0 for\u00e7a dentro do mesmo pa\u00eds inventado pelos colonizadores. Da\u00ed Estados fr\u00e1geis e conflitos.',
        ],
      },
      {
        q: 'Sobre o Apartheid (1948–1994) na África do Sul, marque a alternativa CORRETA:',
        opcoes: [
          'Foi uma segregação apenas cultural, sem qualquer amparo na legislação do país.',
          'Foi uma segregação racial institucionalizada — imposta pelo Estado por meio de leis.',
          'Foi uma política de integração pacífica entre brancos e negros no território nacional.',
          'Foi um sistema adotado em todos os países africanos no mesmo período do século XX.',
        ],
        correta: 1,
        explicacoes: [
          'A palavra-chave é "institucionalizado".',
          'Institucionalizado = previsto em LEI, sustentado pelo Estado. Pass Laws, Group Areas Act, bantust\u00f5es. Exclusivo da \u00c1frica do Sul — n\u00e3o do continente inteiro.',
        ],
      },
    ],
  },

  impactos: {
    iniciante: [
      {
        q: 'Quais são impactos diretos da desigualdade na vida das pessoas na África?',
        opcoes: [
          'Aumento de empregos formais bem pagos para a maior parte da população.',
          'Moradias precárias em favelas, somadas a desemprego e ao subemprego.',
          'Excesso de serviços públicos de qualidade disponíveis para toda a população.',
          'Diminuição significativa da migração interna do campo para as grandes cidades.',
        ],
        correta: 1,
        explicacoes: [
          'Onde a desigualdade é alta, como vive a maioria?',
          'Favelas, desemprego e subemprego s\u00e3o os impactos cl\u00e1ssicos. \u00c9 a vida real dos efeitos do enclave + ajuste fiscal + heran\u00e7a colonial.',
        ],
      },
      {
        q: 'O que é uma "migração interna"?',
        opcoes: [
          'Pessoas saindo da África em direção à Europa em busca de melhores empregos.',
          'Animais migrando entre as savanas conforme as estações secas e chuvosas do ano.',
          'Pessoas mudando de região dentro do mesmo país buscando uma vida melhor.',
          'Turistas internacionais visitando o continente africano em viagens organizadas.',
        ],
        correta: 2,
        explicacoes: [
          'INTERNA = dentro do país.',
          'Sair do campo pra cidade dentro do mesmo país, buscando emprego e servi\u00e7os. Acontece muito na \u00c1frica por causa do desemprego rural.',
        ],
      },
      {
        q: 'Qual destes é um CAMINHO para reduzir as desigualdades na África?',
        opcoes: [
          'Aumentar o modelo de enclave em mais setores da economia nacional.',
          'Cortar ainda mais os gastos sociais públicos do governo africano.',
          'Investir em direitos sociais, planejamento urbano inclusivo e diversificação.',
          'Manter exatamente tudo como está, sem mudar políticas e estruturas atuais.',
        ],
        correta: 2,
        explicacoes: [
          'Solu\u00e7\u00e3o = OPOSTO do problema.',
          'Diversifica\u00e7\u00e3o (oposto de enclave), direitos sociais (oposto de ajuste fiscal), planejamento inclusivo (oposto de segrega\u00e7\u00e3o).',
        ],
      },
    ],
    intermediario: [
      {
        q: 'O que é "subemprego" no contexto africano?',
        opcoes: [
          'Trabalho formal, com carteira assinada e benefícios trabalhistas garantidos.',
          'Trabalho informal, mal pago, sem direitos — comum nas metrópoles africanas.',
          'Trabalho em empresas estrangeiras de alto padrão, com salários elevados.',
          'Aposentadoria antecipada concedida pelo governo a trabalhadores qualificados.',
        ],
        correta: 1,
        explicacoes: [
          'Pense em vendedor ambulante sem carteira: é emprego "completo"?',
          'SUBEMPREGO: trabalho prec\u00e1rio, sem direitos, geralmente informal. \u00c9 onde sobra a maioria da popula\u00e7\u00e3o pobre africana, justamente porque a economia formal n\u00e3o absorve.',
        ],
      },
      {
        q: 'Por que ocorrem migrações internas na África?',
        opcoes: [
          'Por turismo recreativo entre regiões do mesmo país nas épocas de férias.',
          'Por busca de trabalho, serviços e melhores condições, em especial campo-cidade.',
          'Por imposição direta dos governos africanos, que obrigam a população a se mudar.',
          'Apenas por motivos religiosos, em peregrinações a locais sagrados tradicionais.',
        ],
        correta: 1,
        explicacoes: [
          'O que falta no campo e existe (ainda que pouco) na cidade?',
          'Emprego, servi\u00e7os, oportunidades. As pessoas migram em busca disso — mas a cidade muitas vezes n\u00e3o tem capacidade de absorver, gerando favelas.',
        ],
      },
      {
        q: 'Qual destes NÃO é um caminho para mudança citado no mapa mental?',
        opcoes: [
          'Investimentos públicos amplos em direitos sociais básicos da população.',
          'Planejamento urbano inclusivo, com integração das periferias à cidade.',
          'Ampliação da exportação no modelo de enclave, aprofundando o atual padrão.',
          'Valorização das culturas africanas e dos povos originários do continente.',
        ],
        correta: 2,
        explicacoes: [
          'Aten\u00e7\u00e3o: enclave \u00e9 PROBLEMA, n\u00e3o solu\u00e7\u00e3o.',
          'Os caminhos propostos s\u00e3o: investimento social, planejamento inclusivo, DIVERSIFICA\u00c7\u00c3O (oposto de enclave) e valoriza\u00e7\u00e3o cultural.',
        ],
      },
    ],
    revisao: [
      {
        q: 'Numa metrópole africana, um jovem trabalha como vendedor ambulante, sem carteira, ganhando por dia. Esse caso se enquadra em qual fenômeno?',
        opcoes: [
          'Emprego formal de alta qualificação, com carteira assinada e plano de carreira.',
          'Investimento público em direitos sociais ofertados pelo governo à população local.',
          'Subemprego — trabalho informal, mal pago, sem direitos trabalhistas garantidos.',
          'Migração internacional de trabalhadores em busca de melhores condições no exterior.',
        ],
        correta: 2,
        explicacoes: [
          'Sem carteira, ganha por dia, na rua. Que palavra descreve?',
          'SUBEMPREGO. Trabalho prec\u00e1rio sem direitos (f\u00e9rias, INSS, sal\u00e1rio fixo). Comum em metr\u00f3poles africanas porque a economia formal n\u00e3o gera empregos suficientes.',
        ],
      },
      {
        q: 'Sobre as migrações INTERNAS na África, qual afirmação está ERRADA?',
        opcoes: [
          'Ocorrem dentro do mesmo país, sem atravessar fronteiras nacionais oficiais.',
          'São motivadas pela busca de trabalho, serviços e melhores condições de vida.',
          'O fluxo do campo em direção à cidade é o tipo mais comum dessas migrações.',
          'São sempre planejadas e organizadas previamente pelos governos africanos.',
        ],
        correta: 3,
        explicacoes: [
          'A pergunta pede a ERRADA. Três estão certas, uma é falsa.',
          'Migra\u00e7\u00f5es internas s\u00e3o ESPONT\u00c2NEAS. O Estado N\u00c3O planeja nem organiza — por isso surgem favelas e assentamentos informais (o Estado n\u00e3o se prepara pro fluxo).',
        ],
      },
      {
        q: 'Um caminho REAL para reduzir as desigualdades africanas seria:',
        opcoes: [
          'Expandir o modelo de enclave econômico para ainda mais setores produtivos.',
          'Atrair mais empresas transnacionais para ampliar ainda mais o modelo de enclave.',
          'Diversificar a economia, investir em direitos sociais e planejar a cidade.',
          'Manter as fronteiras coloniais sem qualquer revisão política ou territorial.',
        ],
        correta: 2,
        explicacoes: [
          'O que combate enclave + segregação + exclusão ao mesmo tempo?',
          'Solu\u00e7\u00f5es v\u00e3o na DIRE\u00c7\u00c3O OPOSTA dos problemas: diversificar (vs enclave), direitos sociais (vs ajuste fiscal), planejamento inclusivo (vs segrega\u00e7\u00e3o).',
        ],
      },
    ],
  },
};

/* ---------- QUIZ FINAL POR MODO ---------- */
const QUIZ_FINAL = {
  iniciante: [
    {
      q: 'Resumão: o que é ENCLAVE ECONÔMICO?',
      opcoes: [
        'Uma área urbana com muitas escolas públicas e hospitais bem equipados.',
        'Atividade econômica isolada do território — a riqueza sai e não fica.',
        'Um partido político de esquerda atuante em vários países africanos.',
        'Um tipo de transporte coletivo usado nas grandes metrópoles africanas.',
      ],
      correta: 1,
      explicacoes: ['Riqueza sai, não fica.', 'ENCLAVE: a riqueza é extraída e exportada, não beneficia a região.'],
    },
    {
      q: 'O que o ajuste fiscal do FMI faz com os países africanos?',
      opcoes: [
        'Investe pesado em hospitais públicos novos para a população pobre.',
        'Obriga o país a cortar gastos sociais públicos como saúde e educação.',
        'Distribui renda diretamente às famílias mais vulneráveis das cidades.',
        'Acaba completamente com a pobreza extrema em poucos anos de programa.',
      ],
      correta: 1,
      explicacoes: ['Apertar o cinto.', 'Cortes em saúde, educação e moradia → desigualdade aumenta.'],
    },
    {
      q: 'A Conferência de Berlim (1884) decidiu o quê?',
      opcoes: [
        'A independência política imediata de todos os países do continente africano.',
        'Como os europeus dividiriam a África entre si, sem consultar os africanos.',
        'O fim definitivo da escravidão mundial e o pagamento de reparações justas.',
        'A criação da ONU para mediar conflitos entre as colônias e as metrópoles.',
      ],
      correta: 1,
      explicacoes: ['Europeus + régua no mapa.', 'Fronteiras artificiais que ainda geram conflitos hoje.'],
    },
    {
      q: 'O APARTHEID foi:',
      opcoes: [
        'Uma festa cultural tradicional realizada anualmente em várias regiões da África.',
        'Segregação racial oficial vigente na África do Sul entre 1948 e 1994.',
        'Um time de futebol famoso que disputou vários campeonatos sul-africanos.',
        'Um carro popular fabricado por uma montadora sul-africana na década de 1980.',
      ],
      correta: 1,
      explicacoes: ['Segregação por lei.', 'Apartheid = "separação" em africâner. Brancos e negros separados pelo Estado.'],
    },
    {
      q: 'Subemprego é:',
      opcoes: [
        'Emprego formal com carteira assinada e todos os direitos trabalhistas garantidos.',
        'Trabalho informal, mal pago, sem direitos — como vendedor ambulante.',
        'Aposentadoria antecipada concedida após longos anos de serviço público.',
        'Trabalho qualificado em empresa estrangeira com bom salário e benefícios.',
      ],
      correta: 1,
      explicacoes: ['Sem direitos = sub.', 'Vendedor ambulante sem carteira, por exemplo.'],
    },
  ],

  intermediario: [
    {
      q: 'Por que o enclave NÃO promove desenvolvimento amplo no país?',
      opcoes: [
        'Cria muitos empregos formais bem pagos para a população local da região.',
        'Os lucros são enviados ao exterior, deixando pouca riqueza dentro do país.',
        'Distribui igualmente toda a renda do enclave entre todos os moradores do país.',
        'Obriga empresas estrangeiras a financiar escolas e hospitais nas comunidades.',
      ],
      correta: 1,
      explicacoes: ['Onde vai o lucro?', 'Lucros saem do país → não viram benefícios locais.'],
    },
    {
      q: 'O ajuste fiscal imposto pelo FMI provoca:',
      opcoes: [
        'Aumento expressivo dos investimentos sociais em saúde, educação e moradia.',
        'Limitação dos investimentos do Estado em direitos sociais e públicos básicos.',
        'Distribuição igualitária da renda nacional entre as diferentes classes sociais.',
        'Crescimento automático e sustentável da economia do país em poucos meses.',
      ],
      correta: 1,
      explicacoes: ['Ajuste = cortes.', 'Cortes em saúde/educação afetam principalmente os mais pobres.'],
    },
    {
      q: 'Fronteiras africanas são "artificiais" porque:',
      opcoes: [
        'Foram traçadas por satélite usando imagens de alta precisão do continente.',
        'Foram desenhadas pelos europeus em Berlim, sem considerar os povos locais.',
        'Seguem com cuidado os principais rios naturais e cadeias de montanhas africanas.',
        'Foram votadas em referendos populares nas comunidades de cada região do continente.',
      ],
      correta: 1,
      explicacoes: ['Berlim 1884.', 'Régua europeia ignorou etnias e culturas africanas.'],
    },
    {
      q: 'Durante o Apartheid, a população negra:',
      opcoes: [
        'Tinha direitos políticos e civis iguais aos da população branca da África do Sul.',
        'Era proibida de morar em áreas brancas e tinha acesso limitado a direitos.',
        'Comandava todo o governo nacional e controlava a economia da África do Sul.',
        'Vivia apenas em áreas de grande luxo, com pleno acesso a saúde e educação.',
      ],
      correta: 1,
      explicacoes: ['"Whites Only" era lei.', 'Discriminação total prevista no código jurídico.'],
    },
    {
      q: 'Qual NÃO é caminho para reduzir desigualdades?',
      opcoes: [
        'Investimento público forte em direitos sociais básicos da população pobre.',
        'Planejamento urbano inclusivo, com integração das periferias à cidade formal.',
        'Ampliação do modelo de enclave para mais setores da economia nacional.',
        'Valorização das culturas africanas e dos povos originários do continente.',
      ],
      correta: 2,
      explicacoes: ['Enclave é problema, não solução.', 'Diversificação é o caminho, não a ampliação do enclave.'],
    },
    {
      q: 'O que dispara a "REPRODUÇÃO DA EXCLUSÃO" na África pós-colonial?',
      opcoes: [
        'O fim completo das estruturas coloniais após as independências do século XX.',
        'A permanência de estruturas econômicas e urbanas herdadas da colonização.',
        'A integração latino-americana no comércio internacional de bens manufaturados.',
        'O excesso de investimento estrangeiro em educação pública de qualidade.',
      ],
      correta: 1,
      explicacoes: ['Estrutura colonial não foi desmontada.', 'Mesmas engrenagens (exportação, segregação) continuam produzindo exclusão.'],
    },
  ],

  revisao: [
    {
      q: 'Numa cidade petrolífera angolana, transnacionais lucram bilhões enquanto o bairro vizinho carece de saneamento. O conceito que descreve isso é:',
      opcoes: [
        'Diversificação produtiva nacional liderada por empresas pequenas locais.',
        'Enclave econômico, atividade isolada do desenvolvimento do território.',
        'Reforma agrária voltada à distribuição de terras a camponeses sem terra.',
        'Integração regional entre países africanos para o comércio interno comum.',
      ],
      correta: 1,
      explicacoes: ['Riqueza no local que não vira benefício no local.', 'ENCLAVE clássico: extração + exportação + zero retorno social.'],
    },
    {
      q: 'Sobre o enclave econômico, é INCORRETO afirmar:',
      opcoes: [
        'Concentra-se em mineração, petróleo ou agronegócio voltado à exportação.',
        'Reproduz a lógica colonial de extrair valor sem retorno social ao território.',
        'É controlado majoritariamente por empresas transnacionais sediadas no exterior.',
        'Promove ampla industrialização e diversificação produtiva do país hospedeiro.',
      ],
      correta: 3,
      explicacoes: ['Pergunta pede a INCORRETA.', 'O enclave APROFUNDA a especialização primário-exportadora, não diversifica.'],
    },
    {
      q: 'Os "assentamentos informais" africanos (Kibera, Makoko, townships) NÃO se caracterizam por:',
      opcoes: [
        'Concentrar população pobre e migrantes vindos do campo em busca de trabalho.',
        'Sofrer déficit grave de água tratada, saneamento básico e coleta de resíduos.',
        'Receber prioridade do Estado em obras de infraestrutura e serviços públicos.',
        'Resultar diretamente da desigualdade socioeconômica e do processo de segregação.',
      ],
      correta: 2,
      explicacoes: ['Pergunta pede o que NÃO é verdade.', 'Justamente o oposto: são NEGLIGENCIADOS pelo Estado. Por isso são "informais".'],
    },
    {
      q: 'A Conferência de Berlim (1884–85):',
      opcoes: [
        'Reuniu líderes africanos para que definissem suas próprias fronteiras nacionais.',
        'Reuniu potências europeias para partilhar o continente, sem participação africana.',
        'Estabeleceu a independência imediata de todos os países africanos colonizados.',
        'Foi conduzida pela ONU para garantir os direitos políticos dos povos colonizados.',
      ],
      correta: 1,
      explicacoes: ['ONU nem existia (1945).', 'Bismarck + potências europeias. Mapa desenhado com régua.'],
    },
    {
      q: 'Conflitos como Ruanda 1994 são ligados à colonização porque:',
      opcoes: [
        'A Europa ainda ocupa militarmente esses países africanos até os dias atuais.',
        'Povos rivais foram forçados a viver dentro das mesmas fronteiras artificiais.',
        'O clima quente e seco do continente africano provoca conflitos sociais agudos.',
        'Não há relação alguma entre os conflitos atuais e a história da colonização.',
      ],
      correta: 1,
      explicacoes: ['Pense nas fronteiras inventadas.', 'Tutsis e hutus colocados à força no mesmo país inventado → conflito.'],
    },
    {
      q: 'Sobre o Apartheid, é CORRETO afirmar:',
      opcoes: [
        'Foi uma segregação apenas cultural, sem qualquer amparo na legislação oficial.',
        'Foi segregação racial institucionalizada, imposta pelo Estado sul-africano em lei.',
        'Foi uma política de integração pacífica entre as diferentes raças no território.',
        'Foi um sistema adotado em todos os países do continente africano no mesmo período.',
      ],
      correta: 1,
      explicacoes: ['Institucionalizado = previsto em lei.', 'Pass Laws, Group Areas Act, bantustões. Apenas África do Sul, 1948–1994.'],
    },
    {
      q: 'Durante o Apartheid, os "bantustões" eram:',
      opcoes: [
        'Áreas livres onde a população negra desfrutava de cidadania sul-africana plena.',
        'Territórios pobres onde a população negra era forçada a viver, perdendo direitos.',
        'Bairros nobres de luxo da África do Sul, voltados à elite branca da época colonial.',
        'Escolas integradas onde crianças negras e brancas estudavam em conjunto nas séries.',
      ],
      correta: 1,
      explicacoes: ['Separação territorial forçada.', 'Os negros eram REMOVIDOS para áreas precárias, perdendo até a cidadania sul-africana.'],
    },
    {
      q: 'Após o fim oficial do Apartheid (1994 com Mandela), é CORRETO dizer que:',
      opcoes: [
        'A desigualdade racial e econômica acabou imediatamente em todo o território nacional.',
        'A África do Sul tornou-se o país mais igualitário do mundo em todos os indicadores.',
        'As marcas do sistema persistem: a população negra ainda concentra os piores índices.',
        'O regime do Apartheid voltou oficialmente a vigorar em 2000, com novas leis raciais.',
      ],
      correta: 2,
      explicacoes: ['Leis mudam rápido; sociedades, devagar.', '46 anos de segregação institucional deixaram marcas profundas que persistem hoje.'],
    },
    {
      q: 'Vendedor ambulante sem carteira ganhando por dia exemplifica:',
      opcoes: [
        'Emprego formal qualificado, com carteira assinada e plano de carreira de longo prazo.',
        'Investimento público em programas sociais de geração de renda para população pobre.',
        'Subemprego, ou seja, trabalho informal e mal pago, sem direitos trabalhistas.',
        'Migração internacional de trabalhadores em busca de melhores condições no exterior.',
      ],
      correta: 2,
      explicacoes: ['Sem direitos = sub.', 'Subemprego é a regra nas metrópoles africanas devido ao enclave e à falta de empregos formais.'],
    },
    {
      q: 'Sobre migrações internas na África, é ERRADO afirmar que:',
      opcoes: [
        'Ocorrem dentro do mesmo país, sem atravessar fronteiras nacionais oficiais.',
        'São motivadas pela busca de trabalho, serviços e melhores condições de vida.',
        'O fluxo campo → cidade é o tipo mais comum dessas migrações no continente.',
        'São sempre planejadas e organizadas previamente pelos governos africanos.',
      ],
      correta: 3,
      explicacoes: ['Pede a ERRADA.', 'Migrações são ESPONTÂNEAS. O Estado não planeja — por isso surgem favelas.'],
    },
  ],
};

/* ---------- ESTADO GLOBAL ---------- */
const state = {
  view: 'home',          // 'home' | 'modos-hub' | 'modo' | 'leitura' | 'jogos-hub' | 'jogo'
  modo: null,            // 'iniciante' | 'intermediario' | 'revisao'
  modoStep: 0,           // 0=intro, depois pares tópico/quiz, depois final, depois vitória
  jogoAtivo: null,       // 'caca' | 'forca' | 'velha' | 'memoria'
  errosQuiz: {},         // contagem de erros por pergunta no quiz atual
};

const $screens = document.getElementById('screens');
const $navbar  = document.getElementById('navbar');
const $prev    = document.getElementById('prevBtn');
const $next    = document.getElementById('nextBtn');
const $phaseTitle = document.getElementById('phaseTitle');

/* ---------- ROTEADOR ---------- */
function go(view, extra={}) {
  Object.assign(state, { view, ...extra });
  if (view === 'home' || view === 'modos-hub' || view === 'jogos-hub' || view === 'leitura') {
    state.modo = null; state.modoStep = 0; state.jogoAtivo = null;
  }
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ---------- RENDER ---------- */
function render() {
  $screens.innerHTML = '';
  // controla footer
  const showNav = (state.view === 'modo');
  $navbar.style.display = showNav ? '' : 'none';

  switch (state.view) {
    case 'home':       renderHome(); break;
    case 'modos-hub':  renderModosHub(); break;
    case 'modo':       renderModo(); break;
    case 'leitura':    renderLeitura(); break;
    case 'jogos-hub':  renderJogosHub(); break;
    case 'jogo':       renderJogo(); break;
  }

  if (showNav) {
    $prev.disabled = false;
    $next.style.display = 'none'; // dentro do modo, o avanço é via botões da tela
    $phaseTitle.textContent = etiquetaModoStep();
  }

  // Botão Voltar fixo no rodapé de TODAS as telas (exceto home)
  if (state.view !== 'home') {
    const back = document.createElement('div');
    back.className = 'voltar-rodape';
    back.innerHTML = `<button class="btn-voltar-global">◀ Voltar ao início</button>`;
    back.querySelector('button').addEventListener('click', () => go('home'));
    $screens.appendChild(back);
  }
}

$prev.addEventListener('click', () => {
  if (state.view !== 'modo') return;
  if (state.modoStep > 0) {
    state.modoStep--;
    render();
  } else {
    go('home');
  }
});

const $brandHome = document.getElementById('brandHome');
if ($brandHome) $brandHome.addEventListener('click', () => go('home'));

/* ---------- HOME ---------- */
function renderHome() {
  const card = document.createElement('section');
  card.className = 'card capa';
  card.innerHTML = `
    <div class="capa-hero">
      <div class="capa-emoji">🌍</div>
      <h2 class="capa-titulo">GEOGRAFIA <span class="acento">AV2</span></h2>
      <p class="capa-sub">África · Espaço, Economia e Desigualdades</p>
      <div class="capa-credito">
        <span>FEITO POR</span>
        <strong>LEVI MACIEL</strong>
      </div>
    </div>

    <p class="capa-intro">Escolha como você quer estudar 👇</p>

    <div class="hub-grid">
      <button class="hub-card hub-modos" data-go="modos-hub">
        <div class="hub-icon">🎯</div>
        <div class="hub-title">MODOS DE ESTUDO</div>
        <div class="hub-desc">Aprenda em fases, com mini-quizzes ao longo do caminho e quiz final.<br><b>3 níveis</b> para escolher.</div>
      </button>

      <button class="hub-card hub-leitura" data-go="leitura">
        <div class="hub-icon">📖</div>
        <div class="hub-title">LEITURA COMPLETA</div>
        <div class="hub-desc">Tudo sobre o conteúdo, explicado de um jeito leve e direto. Sem quiz, só leitura.</div>
      </button>

      <button class="hub-card hub-games" data-go="jogos-hub">
        <div class="hub-icon">🎮</div>
        <div class="hub-title">SÓ GAMES</div>
        <div class="hub-desc">Caça-palavras, Forca, Jogo da Velha e Memória. Escolha qual quer jogar.</div>
      </button>
    </div>
  `;
  $screens.appendChild(card);
  card.querySelectorAll('[data-go]').forEach(b =>
    b.addEventListener('click', () => go(b.dataset.go))
  );
}

/* ---------- MODOS HUB ---------- */
function renderModosHub() {
  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `
    <button class="link-back" data-back>◀ Voltar ao início</button>
    <h2 class="sec-title">🎯 Escolha o seu modo</h2>
    <p class="sec-sub">Cada modo te leva pelos 4 tópicos do mapa mental. A cada tópico, um mini-quiz de 3 perguntas. No fim, quiz final.</p>

    <div class="modo-grid">
      <button class="modo-card modo-iniciante" data-modo="iniciante">
        <div class="modo-tag">NÍVEL 1</div>
        <div class="modo-icon">🌱</div>
        <div class="modo-nome">SEI DE NADA</div>
        <div class="modo-frase">"Quero aprender tudo do zero"</div>
        <div class="modo-desc">Explicações leves e bem mastigadas. Quizzes mais diretos, sem pegadinha.</div>
      </button>

      <button class="modo-card modo-intermediario" data-modo="intermediario">
        <div class="modo-tag">NÍVEL 2</div>
        <div class="modo-icon">⚡</div>
        <div class="modo-nome">TÔ MAIS OU MENOS</div>
        <div class="modo-frase">"Já entendo um pouco, quero firmar"</div>
        <div class="modo-desc">Conteúdo equilibrado, com conceitos-chave bem destacados. Quizzes com bom nível.</div>
      </button>

      <button class="modo-card modo-revisao" data-modo="revisao">
        <div class="modo-tag">NÍVEL 3</div>
        <div class="modo-icon">🔥</div>
        <div class="modo-nome">SEI DE TUDO</div>
        <div class="modo-frase">"Só quero revisar e me desafiar"</div>
        <div class="modo-desc">Explicações densas e quizzes com pegadinhas reais de prova. Modo difícil.</div>
      </button>
    </div>
  `;
  $screens.appendChild(card);
  card.querySelector('[data-back]').addEventListener('click', () => go('home'));
  card.querySelectorAll('[data-modo]').forEach(b =>
    b.addEventListener('click', () => go('modo', { modo: b.dataset.modo, modoStep: 0 }))
  );
}

/* ---------- MODO (FLUXO POR PASSOS) ----------
   Sequência de passos do modo:
   0  -> intro
   1  -> tópico 1 (explicação)
   2  -> quiz tópico 1
   3  -> tópico 2
   4  -> quiz tópico 2
   5  -> tópico 3
   6  -> quiz tópico 3
   7  -> tópico 4
   8  -> quiz tópico 4
   9  -> quiz final
   10 -> vitória
*/

function passoInfo(step) {
  if (step === 0) return { tipo: 'intro' };
  if (step === 9) return { tipo: 'quiz-final' };
  if (step === 10) return { tipo: 'vitoria' };
  const idx = Math.floor((step - 1) / 2);   // 0..3
  const isQuiz = (step - 1) % 2 === 1;
  return { tipo: isQuiz ? 'quiz' : 'leitura', topicoIdx: idx };
}

function etiquetaModoStep() {
  const p = passoInfo(state.modoStep);
  if (p.tipo === 'intro') return 'Início do modo';
  if (p.tipo === 'vitoria') return 'Conclusão';
  if (p.tipo === 'quiz-final') return 'Quiz Final';
  const t = TOPICOS[p.topicoIdx];
  return (p.tipo === 'quiz' ? 'Quiz · ' : '') + t.titulo;
}

function renderModo() {
  const p = passoInfo(state.modoStep);
  if (p.tipo === 'intro')       return renderModoIntro();
  if (p.tipo === 'leitura')     return renderTopicoLeitura(p.topicoIdx);
  if (p.tipo === 'quiz')        return renderQuizTopico(p.topicoIdx);
  if (p.tipo === 'quiz-final')  return renderQuizFinal();
  if (p.tipo === 'vitoria')     return renderVitoria();
}

function renderModoIntro() {
  const nomes = {
    iniciante: { t:'SEI DE NADA', ic:'🌱', cor:'iniciante', desc:'Vamos do zero, com calma. Cada tópico vem com explicação leve + um mini-quiz de 3 perguntas. No final, um quiz geral.' },
    intermediario: { t:'TÔ MAIS OU MENOS', ic:'⚡', cor:'intermediario', desc:'Você já tem uma noção. Vamos firmar os conceitos com explicações claras e quizzes de bom nível.' },
    revisao: { t:'SEI DE TUDO', ic:'🔥', cor:'revisao', desc:'Modo desafio: textos densos e quizzes com pegadinhas reais de prova. Bora ver se segura mesmo.' },
  }[state.modo];

  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `
    <button class="link-back" data-back>◀ Voltar ao início</button>
    <div class="modo-intro modo-${nomes.cor}">
      <div class="modo-intro-icon">${nomes.ic}</div>
      <h2 class="sec-title">${nomes.t}</h2>
      <p class="sec-sub">${nomes.desc}</p>
      <div class="destaque">
        <b>Seu trajeto:</b><br>
        ${TOPICOS.map((t,i) => `${i+1}. ${t.icone} ${t.titulo}`).join(' &nbsp;→&nbsp; ')}
        &nbsp;→&nbsp; 🏆 <b>Quiz Final</b>
      </div>
      <div class="acoes">
        <button class="btn-primario" data-start>Começar 🚀</button>
      </div>
    </div>
  `;
  $screens.appendChild(card);
  card.querySelector('[data-back]').addEventListener('click', () => go('home'));
  card.querySelector('[data-start]').addEventListener('click', () => { state.modoStep = 1; render(); });
}

function renderTopicoLeitura(i) {
  const t = TOPICOS[i];
  const texto = state.modo === 'iniciante' ? t.leve
              : state.modo === 'revisao'  ? t.profundo
              : t.normal;
  const card = document.createElement('section');
  card.className = `card topico topico-${t.cor}`;
  card.innerHTML = `
    <div class="topico-head">
      <div class="topico-icon">${t.icone}</div>
      <div>
        <div class="topico-sub">Tópico ${i+1} de 4</div>
        <h2 class="sec-title">${t.titulo}</h2>
      </div>
    </div>
    <div class="topico-corpo">${texto}</div>
    <div class="acoes">
      <button class="btn-primario" data-next>Entendido — quiz desse tópico ➜</button>
    </div>
  `;
  $screens.appendChild(card);
  card.querySelector('[data-next]').addEventListener('click', () => {
    state.modoStep++;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- HELPERS DE QUIZ ---------- */
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/* Embaralha as opções de uma pergunta e retorna nova {q, opcoes, correta, explicacoes} */
function embaralharOpcoes(p) {
  const indices = shuffleArray(p.opcoes.map((_, i) => i));
  const novasOpcoes = indices.map(i => p.opcoes[i]);
  const novaCorreta = indices.indexOf(p.correta);
  return { q: p.q, opcoes: novasOpcoes, correta: novaCorreta, explicacoes: p.explicacoes };
}
/* Constrói pool de variantes por slot: pega o mesmo slot nos 3 modos = 3 reformulações da mesma ideia */
function poolPorSlot(topicoId, slotIdx) {
  const modos = ['iniciante', 'intermediario', 'revisao'];
  // Começa pelo modo atual e depois adiciona os outros como variantes alternativas
  const ordem = [state.modo, ...modos.filter(m => m !== state.modo)];
  return ordem
    .map(m => QUIZZES[topicoId]?.[m]?.[slotIdx])
    .filter(Boolean);
}

function renderQuizTopico(i) {
  const t = TOPICOS[i];
  const pools = [0, 1, 2].map(slot => poolPorSlot(t.id, slot));
  renderQuiz({
    titulo: `Quiz — ${t.titulo}`,
    subtitulo: `Acerte as 3 para avançar. Errou? Volte ao conteúdo e tente de novo 📖`,
    pools,
    chaveErros: `${state.modo}-${t.id}`,
    voltarConteudoLabel: `📖 Reler o conteúdo de "${t.titulo}"`,
    onVoltarConteudo: () => { state.modoStep--; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
    onConclude: () => { state.modoStep++; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
}

function renderQuizFinal() {
  const perguntas = QUIZ_FINAL[state.modo];
  // No final, cada slot tem só uma variante (mas as opções ainda são embaralhadas)
  const pools = perguntas.map(p => [p]);
  renderQuiz({
    titulo: `🏆 QUIZ FINAL — Modo ${state.modo.toUpperCase()}`,
    subtitulo: `Mostra tudo o que você aprendeu. Acertar TODAS te leva à vitória 🚀`,
    pools,
    chaveErros: `${state.modo}-final`,
    onConclude: () => { state.modoStep = 10; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
}

/* ---------- QUIZ GENÉRICO (com variantes + embaralhamento) ---------- */
function renderQuiz({ titulo, subtitulo, pools, chaveErros, onConclude, onVoltarConteudo, voltarConteudoLabel }) {
  state.errosQuiz[chaveErros] = state.errosQuiz[chaveErros] || {};
  const erros = state.errosQuiz[chaveErros];

  // Estado de cada slot: índice da variante atual + pergunta embaralhada cacheada
  const slots = pools.map((pool, i) => ({
    pool,
    variantIdx: 0,
    pergunta: embaralharOpcoes(pool[0]),
    tentativasNaVariante: 0,
  }));

  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `
    <h2 class="sec-title">${titulo}</h2>
    <p class="sec-sub">${subtitulo}</p>
    <div class="quiz-list"></div>
    <div class="acoes" style="display:none" data-final>
      <div class="box-resultado" style="width:100%;text-align:center">🎉 <b>Você acertou tudo!</b> Pode seguir para o próximo conteúdo.</div>
      <button class="btn-primario" data-go-next style="font-size:16px;padding:16px 38px">CONTINUAR PARA O PRÓXIMO ➜</button>
    </div>
  `;
  const list = card.querySelector('.quiz-list');

  function renderBlock(slotIdx) {
    const slot = slots[slotIdx];
    const p = slot.pergunta;

    let block = list.querySelector(`[data-slot="${slotIdx}"]`);
    const isNew = !block;
    if (isNew) {
      block = document.createElement('div');
      block.className = 'quiz-block';
      block.dataset.slot = slotIdx;
      list.appendChild(block);
    }

    const variantTag = slot.pool.length > 1 && slot.variantIdx > 0
      ? `<span class="variant-tag">🔄 nova pergunta (variante ${slot.variantIdx + 1}/${slot.pool.length})</span>`
      : '';

    block.innerHTML = `
      <div class="quiz-pergunta"><b>${slotIdx + 1}.</b> ${p.q} ${variantTag}</div>
      <div class="quiz-options">
        ${p.opcoes.map((o, oi) => `<button data-i="${oi}">${String.fromCharCode(65 + oi)}) ${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" data-fb></div>
    `;

    const buttons = block.querySelectorAll('.quiz-options button');
    const fb = block.querySelector('[data-fb]');

    buttons.forEach(b => b.addEventListener('click', () => {
      const escolha = +b.dataset.i;
      if (escolha === p.correta) {
        buttons.forEach(x => { x.disabled = true; });
        b.classList.add('correct');
        fb.innerHTML = `<div class="box-resultado">✅ <b>Correto!</b> ${p.explicacoes[1]}</div>`;
        slot.acertou = true;
        verificarConclusao();
      } else {
        buttons.forEach(x => x.disabled = true);
        b.classList.add('wrong');
        // marca a correta também
        buttons[p.correta].classList.add('correct-reveal');

        erros[slotIdx] = (erros[slotIdx] || 0) + 1;
        slot.tentativasNaVariante++;
        const nivel = Math.min(slot.tentativasNaVariante - 1, p.explicacoes.length - 1);
        const letraEscolhida = String.fromCharCode(65 + escolha);
        const letraCerta = String.fromCharCode(65 + p.correta);

        const aindaTemVariante = slot.variantIdx < slot.pool.length - 1;
        const labelBotao = aindaTemVariante
          ? '🔄 Nova pergunta (sobre o mesmo tema)'
          : '🔁 Tentar de novo (mesma pergunta)';

        const btnVoltarHtml = onVoltarConteudo
          ? `<button class="btn-primario" data-voltar-conteudo>${voltarConteudoLabel || '📖 Reler o conteúdo'}</button>`
          : '';

        fb.innerHTML = `
          <div class="box-erro">
            <div class="erro-head">❌ <b>Você errou.</b> Marcou a letra <b>${letraEscolhida}</b> — a correta era <b>${letraCerta}</b>.</div>
            <div class="erro-explica">${p.explicacoes[nivel]}</div>
          </div>
          <div class="erro-acoes">
            ${btnVoltarHtml}
            <button class="btn-secundario" data-troca>${labelBotao}</button>
          </div>
        `;
        const btnVoltar = fb.querySelector('[data-voltar-conteudo]');
        if (btnVoltar) btnVoltar.addEventListener('click', onVoltarConteudo);
        fb.querySelector('[data-troca]').addEventListener('click', () => {
          if (aindaTemVariante) {
            // Avança para próxima variante e re-embaralha opções
            slot.variantIdx++;
            slot.pergunta = embaralharOpcoes(slot.pool[slot.variantIdx]);
            slot.tentativasNaVariante = 0;
          } else {
            // Mesma pergunta, mas re-embaralha as opções
            slot.pergunta = embaralharOpcoes(slot.pool[slot.variantIdx]);
          }
          renderBlock(slotIdx);
        });
      }
    }));
  }

  slots.forEach((_, i) => renderBlock(i));

  function verificarConclusao() {
    const ok = slots.every(s => s.acertou);
    if (ok) {
      const finalBox = card.querySelector('[data-final]');
      finalBox.style.display = '';
      const btn = finalBox.querySelector('[data-go-next]');
      btn.onclick = onConclude;
      btn.classList.add('btn-pulse');
      finalBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  $screens.appendChild(card);
}

/* ---------- VITÓRIA ---------- */
function renderVitoria() {
  const nome = { iniciante:'SEI DE NADA', intermediario:'TÔ MAIS OU MENOS', revisao:'SEI DE TUDO' }[state.modo];
  const card = document.createElement('section');
  card.className = 'card vitoria-card';
  card.innerHTML = `
    <div class="vitoria-troffy">🏆</div>
    <h2 class="sec-title">PARABÉNS!</h2>
    <p class="sec-sub">Você completou o modo <b>${nome}</b> e dominou o conteúdo de África da AV2.</p>
    <div class="destaque">
      <b>Você revisou:</b><br>
      ${TOPICOS.map(t => `${t.icone} ${t.titulo}`).join(' · ')}
    </div>
    <p class="capa-credito-mini">Sistema feito por <strong>LEVI MACIEL</strong></p>
    <div class="acoes">
      <button class="btn-primario" data-home>Voltar ao início</button>
      <button class="btn-secundario" data-games>Relaxar nos games 🎮</button>
    </div>
  `;
  $screens.appendChild(card);
  card.querySelector('[data-home]').addEventListener('click', () => go('home'));
  card.querySelector('[data-games]').addEventListener('click', () => go('jogos-hub'));
}

/* ---------- LEITURA COMPLETA ---------- */
function renderLeitura() {
  const card = document.createElement('section');
  card.className = 'card leitura-card';
  card.innerHTML = `
    <button class="link-back" data-back>◀ Voltar ao início</button>
    <h2 class="sec-title">📖 Leitura Completa — África na AV2</h2>
    <p class="sec-sub">Tudo o que cai na prova, num jeito direto e leve. Sem quiz, sem pressão. Só leitura.</p>

    ${TOPICOS.map((t,i) => `
      <section class="leitura-bloco leitura-${t.cor}">
        <div class="topico-head">
          <div class="topico-icon">${t.icone}</div>
          <div>
            <div class="topico-sub">Capítulo ${i+1}</div>
            <h3 class="sec-title">${t.titulo}</h3>
            <p class="topico-resumo">${t.resumo}</p>
          </div>
        </div>
        <div class="topico-corpo">${t.normal}</div>
        <details class="leitura-mais">
          <summary>📚 Quero a versão mais profunda</summary>
          <div class="topico-corpo">${t.profundo}</div>
        </details>
      </section>
    `).join('')}

    <div class="destaque" style="margin-top:30px">
      <b>Resumo da ópera:</b> a África vive uma teia de problemas conectados — enclave + desigualdade + heranças coloniais → impactos diretos na vida das pessoas. As soluções estão na direção OPOSTA: diversificar, investir em direitos sociais, planejar com inclusão e valorizar as culturas africanas.
    </div>

    <div class="acoes">
      <button class="btn-primario" data-go-modos>Quero testar — ir para os modos 🎯</button>
      <button class="btn-secundario" data-back2>Voltar ao início</button>
    </div>
  `;
  $screens.appendChild(card);
  card.querySelectorAll('[data-back],[data-back2]').forEach(b => b.addEventListener('click', () => go('home')));
  card.querySelector('[data-go-modos]').addEventListener('click', () => go('modos-hub'));
}

/* ---------- JOGOS HUB ---------- */
function renderJogosHub() {
  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `
    <button class="link-back" data-back>◀ Voltar ao início</button>
    <h2 class="sec-title">🎮 Escolha um game</h2>
    <p class="sec-sub">Sem pressão de prova. Só diversão com palavras de África.</p>

    <div class="jogos-grid">
      <button class="jogo-card" data-jogo="caca">
        <div class="jogo-icon">🔎</div>
        <div class="jogo-nome">CAÇA-PALAVRAS</div>
        <div class="jogo-desc">Encontre os 7 termos chave do conteúdo numa grade 14×14.</div>
      </button>
      <button class="jogo-card" data-jogo="forca">
        <div class="jogo-icon">💀</div>
        <div class="jogo-nome">FORCA</div>
        <div class="jogo-desc">Acerte 3 palavras antes que os 6 erros acabem com você.</div>
      </button>
      <button class="jogo-card" data-jogo="velha">
        <div class="jogo-icon">⭕❌</div>
        <div class="jogo-nome">JOGO DA VELHA</div>
        <div class="jogo-desc">Você (X) vs. a IA (O). Boa sorte 😏</div>
      </button>
      <button class="jogo-card" data-jogo="memoria">
        <div class="jogo-icon">🧠</div>
        <div class="jogo-nome">MEMÓRIA</div>
        <div class="jogo-desc">Encontre os pares conceito ↔ definição.</div>
      </button>
    </div>
  `;
  $screens.appendChild(card);
  card.querySelector('[data-back]').addEventListener('click', () => go('home'));
  card.querySelectorAll('[data-jogo]').forEach(b =>
    b.addEventListener('click', () => go('jogo', { jogoAtivo: b.dataset.jogo }))
  );
}

function renderJogo() {
  const card = document.createElement('section');
  card.className = 'card';
  const titulos = { caca:'🔎 Caça-Palavras', forca:'💀 Forca', velha:'⭕❌ Jogo da Velha', memoria:'🧠 Memória' };
  card.innerHTML = `
    <button class="link-back" data-back>◀ Trocar de jogo</button>
    <h2 class="sec-title">${titulos[state.jogoAtivo]}</h2>
    <div data-jogo-area></div>
  `;
  $screens.appendChild(card);
  card.querySelector('[data-back]').addEventListener('click', () => go('jogos-hub'));

  const area = card.querySelector('[data-jogo-area]');
  if (state.jogoAtivo === 'caca')    initCacaPalavras(area);
  if (state.jogoAtivo === 'forca')   initForca(area);
  if (state.jogoAtivo === 'velha')   initVelha(area);
  if (state.jogoAtivo === 'memoria') initMemoria(area);
}

/* ---------- CAÇA-PALAVRAS ---------- */
function initCacaPalavras(area) {
  const PALAVRAS = ['ENCLAVE','APARTHEID','FAVELA','COLONIAL','MANDELA','AFRICA','BERLIM'];
  const N = 14;
  const grid = Array.from({length:N},()=>Array.from({length:N},()=>'.'));
  const placements = [];
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function tryPlace(p) {
    for (let t=0;t<300;t++) {
      const dir = Math.floor(Math.random()*3); // 0 horiz, 1 vert, 2 diag
      const r = Math.floor(Math.random()*N);
      const c = Math.floor(Math.random()*N);
      const dr = dir===1?1:dir===2?1:0;
      const dc = dir===0?1:dir===2?1:0;
      const er = r + dr*(p.length-1);
      const ec = c + dc*(p.length-1);
      if (er>=N||ec>=N) continue;
      let ok = true;
      for (let i=0;i<p.length;i++) {
        const ch = grid[r+dr*i][c+dc*i];
        if (ch!=='.' && ch!==p[i]) { ok=false; break; }
      }
      if (!ok) continue;
      for (let i=0;i<p.length;i++) grid[r+dr*i][c+dc*i] = p[i];
      placements.push({palavra:p, r, c, dr, dc});
      return true;
    }
    return false;
  }
  PALAVRAS.forEach(tryPlace);
  for (let r=0;r<N;r++) for (let c=0;c<N;c++) if (grid[r][c]==='.') grid[r][c]=letras[Math.floor(Math.random()*26)];

  const encontradas = new Set();
  let first = null;

  area.innerHTML = `
    <p class="sec-sub">Clique na <b>primeira</b> e na <b>última</b> letra de uma palavra para marcar.</p>
    <div class="cp-wrap">
      <div class="cp-grid"></div>
      <div class="cp-lista"></div>
    </div>
    <div class="acoes">
      <button class="btn-secundario" data-revelar>Desistir e revelar</button>
    </div>
  `;
  const gridEl = area.querySelector('.cp-grid');
  gridEl.style.gridTemplateColumns = `repeat(${N},32px)`;
  const cells = [];
  for (let r=0;r<N;r++) for (let c=0;c<N;c++) {
    const d = document.createElement('div');
    d.className='cp-cell'; d.textContent=grid[r][c];
    d.dataset.r=r; d.dataset.c=c;
    d.addEventListener('click',()=>handleClick(r,c,d));
    gridEl.appendChild(d); cells.push(d);
  }
  const lista = area.querySelector('.cp-lista');
  lista.innerHTML = '<b>Palavras:</b><br>' + PALAVRAS.map(p=>`<span class="cp-pal" data-p="${p}">${p}</span>`).join(' · ');

  function handleClick(r,c,el) {
    if (!first) { first = {r,c,el}; el.classList.add('cp-sel'); return; }
    // tenta cada placement
    const pl = placements.find(pl =>
      (pl.r===first.r && pl.c===first.c && pl.r+pl.dr*(pl.palavra.length-1)===r && pl.c+pl.dc*(pl.palavra.length-1)===c)
      ||
      (pl.r===r && pl.c===c && pl.r+pl.dr*(pl.palavra.length-1)===first.r && pl.c+pl.dc*(pl.palavra.length-1)===first.c)
    );
    if (pl && !encontradas.has(pl.palavra)) {
      encontradas.add(pl.palavra);
      for (let i=0;i<pl.palavra.length;i++) {
        const rr = pl.r + pl.dr*i, cc = pl.c + pl.dc*i;
        cells[rr*N+cc].classList.add('cp-found');
      }
      const tag = lista.querySelector(`[data-p="${pl.palavra}"]`);
      if (tag) tag.classList.add('cp-pal-found');
      if (encontradas.size === PALAVRAS.length) {
        area.querySelector('.acoes').insertAdjacentHTML('beforebegin','<div class="box-resultado">🎉 Achou todas! Você manda em África.</div>');
      }
    }
    first.el.classList.remove('cp-sel');
    first = null;
  }
  area.querySelector('[data-revelar]').addEventListener('click', () => {
    placements.forEach(pl => {
      for (let i=0;i<pl.palavra.length;i++) {
        const rr = pl.r + pl.dr*i, cc = pl.c + pl.dc*i;
        cells[rr*N+cc].classList.add('cp-found');
      }
    });
  });
}

/* ---------- FORCA ---------- */
function initForca(area) {
  const PALAVRAS = [
    { p: 'APARTHEID',    tema: 'História África do Sul', dica: 'Sistema de segregação racial oficial (1948–1994).' },
    { p: 'ENCLAVE',      tema: 'Economia',                 dica: 'Atividade produtiva isolada do desenvolvimento local.' },
    { p: 'COLONIZACAO',  tema: 'História',                 dica: 'Processo de dominação europeia sobre a África.' },
    { p: 'SEGREGACAO',   tema: 'Desigualdade',             dica: 'Separação socioespacial entre ricos e pobres.' },
    { p: 'MANDELA',      tema: 'Pessoas',                  dica: 'Líder que combateu o Apartheid; presidente em 1994.' },
    { p: 'DESIGUALDADE', tema: 'Sociedade',                dica: 'Distribuição injusta de renda, serviços e direitos.' },
    { p: 'BANTUSTAO',    tema: 'Apartheid',                dica: 'Território pobre onde negros eram forçados a viver.' },
    { p: 'SUBEMPREGO',   tema: 'Trabalho',                 dica: 'Trabalho informal, mal pago e sem direitos.' },
    { p: 'BERLIM',       tema: 'História',                 dica: 'Cidade onde em 1884 a África foi partilhada pelos europeus.' },
    { p: 'FAVELA',       tema: 'Cidades',                  dica: 'Assentamento urbano informal sem infraestrutura.' },
  ];
  let vitorias = 0;
  let usadas = new Set();
  novaRodada();

  function novaRodada() {
    let disp = PALAVRAS.filter(x => !usadas.has(x.p));
    if (disp.length === 0) { usadas.clear(); disp = PALAVRAS; }
    const item = disp[Math.floor(Math.random() * disp.length)];
    usadas.add(item.p);
    const palavra = item.p;
    const acertos = new Set();
    const erros = new Set();
    let dicaUsada = false;

    area.innerHTML = `
      <p class="sec-sub">Vitórias: <b>${vitorias}/3</b> · Erros restantes: <b id="erestar">6</b></p>
      <div class="box-info" style="text-align:center">🏷️ <b>Tema:</b> ${item.tema}</div>
      <div class="forca-word"></div>
      <div class="acoes" style="justify-content:center">
        <button class="btn-secundario" data-dica>💡 Pedir dica (custa 1 erro)</button>
      </div>
      <div class="forca-dica" data-dica-box style="display:none"></div>
      <div class="forca-letters"></div>
      <div class="forca-feedback"></div>
    `;
    const wEl = area.querySelector('.forca-word');
    const lEl = area.querySelector('.forca-letters');
    const fb  = area.querySelector('.forca-feedback');
    const eRest = area.querySelector('#erestar');
    const dicaBox = area.querySelector('[data-dica-box]');
    const btnDica = area.querySelector('[data-dica]');

    btnDica.addEventListener('click', () => {
      if (dicaUsada) return;
      dicaUsada = true;
      btnDica.disabled = true;
      erros.add('__dica__');
      eRest.textContent = 6 - erros.size;
      dicaBox.style.display = '';
      dicaBox.innerHTML = `💡 <b>Dica:</b> ${item.dica}`;
      if (erros.size >= 6) perdeu();
    });

    function renderWord() {
      wEl.innerHTML = palavra.split('').map(c => `<span class="forca-letra">${acertos.has(c)?c:'_'}</span>`).join('');
    }
    renderWord();

    function perdeu() {
      lEl.querySelectorAll('button').forEach(b => b.disabled = true);
      fb.innerHTML = `<div class="box-info">💀 Era <b>${palavra}</b>. (${item.dica})</div><button class="btn-primario" data-retry>Nova palavra</button>`;
      fb.querySelector('[data-retry]').addEventListener('click', novaRodada);
    }

    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(L => {
      const b = document.createElement('button'); b.textContent = L;
      b.addEventListener('click', () => {
        b.disabled = true;
        if (palavra.includes(L)) { acertos.add(L); b.classList.add('correct'); }
        else { erros.add(L); b.classList.add('wrong'); }
        renderWord();
        eRest.textContent = 6 - erros.size;
        if (palavra.split('').every(c => acertos.has(c))) {
          vitorias++;
          lEl.querySelectorAll('button').forEach(x => x.disabled = true);
          fb.innerHTML = `<div class="box-resultado">✅ Acertou: <b>${palavra}</b>!</div>` +
            (vitorias>=3
              ? '<div class="destaque">🏆 Você venceu a forca! (3 palavras)</div>'
              : '<button class="btn-primario" data-next>Próxima palavra ➜</button>');
          if (vitorias<3) fb.querySelector('[data-next]').addEventListener('click', novaRodada);
        }
        if (erros.size>=6) perdeu();
      });
      lEl.appendChild(b);
    });
  }
}

/* ---------- VELHA (IA imbatível via minimax, IA joga primeiro) ---------- */
function initVelha(area) {
  const placar = { player: 0, ia: 0, empate: 0 };
  area.innerHTML = `
    <p class="sec-sub">Você é <b>O</b>. A IA (X) começa e joga sem perdão 😈</p>
    <div class="velha-placar">
      <span>Você: <b data-pp>0</b></span> ·
      <span>IA: <b data-pi>0</b></span> ·
      <span>Empates: <b data-pe>0</b></span>
    </div>
    <div class="velha-board"></div>
    <div class="velha-status"></div>
    <div class="acoes"><button class="btn-secundario" data-reset>Nova partida</button></div>
  `;
  const board  = area.querySelector('.velha-board');
  const status = area.querySelector('.velha-status');
  const ppEl   = area.querySelector('[data-pp]');
  const piEl   = area.querySelector('[data-pi]');
  const peEl   = area.querySelector('[data-pe]');
  let cells, fim;

  const LINHAS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  function reset() {
    cells = Array(9).fill(null); fim = false;
    board.innerHTML = '';
    for (let i=0;i<9;i++) {
      const c = document.createElement('div'); c.className='velha-cell';
      c.addEventListener('click', () => playerMove(i));
      board.appendChild(c);
    }
    status.innerHTML = '';
    // IA começa
    iaMove();
  }

  function checkWin(p, b = cells) {
    return LINHAS.some(l => l.every(i => b[i] === p));
  }
  function emptyCells(b) {
    const r = []; for (let i=0;i<9;i++) if (!b[i]) r.push(i); return r;
  }

  function minimax(b, jogador) {
    if (checkWin('X', b)) return { score: 10 };
    if (checkWin('O', b)) return { score: -10 };
    const livres = emptyCells(b);
    if (livres.length === 0) return { score: 0 };
    let melhor = jogador === 'X' ? { score: -Infinity } : { score: Infinity };
    for (const i of livres) {
      b[i] = jogador;
      const r = minimax(b, jogador === 'X' ? 'O' : 'X');
      b[i] = null;
      const score = r.score - (jogador === 'X' ? livres.length : -livres.length) * 0;
      if (jogador === 'X') {
        if (score > melhor.score) melhor = { score, idx: i };
      } else {
        if (score < melhor.score) melhor = { score, idx: i };
      }
    }
    return melhor;
  }

  function iaMove() {
    if (fim) return;
    // Primeiro lance: aleatório entre canto/centro para variar
    const isFirst = cells.every(c => c === null);
    let idx;
    if (isFirst) {
      const aberturas = [0, 2, 4, 6, 8];
      idx = aberturas[Math.floor(Math.random() * aberturas.length)];
    } else {
      idx = minimax(cells.slice(), 'X').idx;
    }
    cells[idx] = 'X';
    board.children[idx].textContent = 'X';
    board.children[idx].classList.add('x');
    if (checkWin('X')) return end('💀 A IA ganhou.', 'ia');
    if (emptyCells(cells).length === 0) return end('🤝 Empate.', 'empate');
  }

  function playerMove(i) {
    if (fim || cells[i]) return;
    cells[i] = 'O';
    board.children[i].textContent = 'O';
    board.children[i].classList.add('o');
    if (checkWin('O')) return end('🎉 Você ganhou! (raro)', 'player');
    if (emptyCells(cells).length === 0) return end('🤝 Empate.', 'empate');
    setTimeout(iaMove, 280);
  }

  function end(msg, quem) {
    fim = true;
    placar[quem]++;
    ppEl.textContent = placar.player;
    piEl.textContent = placar.ia;
    peEl.textContent = placar.empate;
    status.innerHTML = `<div class="box-resultado">${msg}</div>`;
  }

  reset();
  area.querySelector('[data-reset]').addEventListener('click', reset);
}

/* ---------- MEMÓRIA ---------- */
function initMemoria(area) {
  const PARES = [
    ['Enclave', 'Atividade produtiva desconectada do território'],
    ['Apartheid', 'Segregação racial na África do Sul (1948–94)'],
    ['Mandela', 'Líder que combateu o Apartheid'],
    ['Berlim 1884', 'Conferência que dividiu a África'],
    ['Ajuste Fiscal', 'Cortes em gastos sociais (FMI)'],
    ['Favela', 'Assentamento urbano informal precário'],
  ];
  const cards = [];
  PARES.forEach((p,i) => { cards.push({id:i,texto:p[0]}); cards.push({id:i,texto:p[1]}); });
  cards.sort(()=>Math.random()-.5);

  area.innerHTML = `<p class="sec-sub">Encontre os pares <b>conceito ↔ definição</b>.</p>
    <div class="mem-wrap"></div>
    <div class="mem-status"></div>`;
  const wrap = area.querySelector('.mem-wrap');
  const status = area.querySelector('.mem-status');
  let aberta = null, achados = 0, travado = false;
  cards.forEach((c, idx) => {
    const el = document.createElement('div');
    el.className='mem-card'; el.dataset.id=c.id;
    el.innerHTML = `<span>?</span>`;
    el.addEventListener('click',()=>{
      if (travado || el.classList.contains('flipped') || el.classList.contains('mem-done')) return;
      el.classList.add('flipped'); el.innerHTML = `<span>${c.texto}</span>`;
      if (!aberta) { aberta = el; return; }
      if (aberta.dataset.id === el.dataset.id && aberta !== el) {
        aberta.classList.add('mem-done'); el.classList.add('mem-done');
        aberta = null; achados++;
        if (achados === PARES.length) status.innerHTML = '<div class="box-resultado">🎉 Memorizou tudo!</div>';
      } else {
        travado = true;
        setTimeout(() => {
          el.classList.remove('flipped'); el.innerHTML='<span>?</span>';
          aberta.classList.remove('flipped'); aberta.innerHTML='<span>?</span>';
          aberta = null; travado = false;
        }, 800);
      }
    });
    wrap.appendChild(el);
  });
}

/* ---------- INIT ---------- */
render();
