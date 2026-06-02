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
        q: '(Pegadinha) Uma empresa estrangeira instala uma fábrica em um país africano, contrata trabalhadores locais, paga salários baixos e exporta TODA a produção. Isso é ou não um enclave econômico?',
        opcoes: [
          'Não é, porque ela contrata mão de obra local.',
          'Sim, porque o que define o enclave é ser voltado ao mercado externo e não se integrar à economia local — mesmo empregando pessoas.',
          'Não, porque só mineradoras são enclaves.',
          'Sim, mas só se a empresa for chinesa.'
        ],
        correta: 1,
        explicacoes: [
          'Cuidado! Ter trabalhadores locais NÃO significa que há integração. Pense em pra ONDE vai a produção e o lucro.',
          'O critério central do enclave é estar VOLTADO AO EXTERIOR e SEM INTEGRAÇÃO com a economia local (não compra de fornecedores locais, não reinveste no país, lucro vai pra fora). Empregar gente local pagando mal e exportando tudo é exatamente o padrão clássico do enclave — e não tem nada a ver com a nacionalidade da empresa.'
        ]
      },
      {
        q: 'Marque a alternativa INCORRETA sobre o enclave econômico:',
        opcoes: [
          'Usa infraestrutura própria (portos, ferrovias) para escoar a produção.',
          'Tem pouca ligação com a economia local.',
          'Promove o desenvolvimento regional ao seu redor, gerando muitos empregos formais.',
          'Geralmente é operado por empresas transnacionais.'
        ],
        correta: 2,
        explicacoes: [
          'Atenção à palavra INCORRETA. Três frases são verdadeiras sobre o enclave, uma é falsa.',
          'O enclave NÃO promove desenvolvimento regional — esse é justamente o problema! Ele extrai a riqueza, paga poucos impostos, não gera cadeia produtiva local e o lucro vai embora. As outras três são características reais (infraestrutura própria, pouca ligação com economia local, empresas transnacionais).'
        ]
      },
      {
        q: 'Por que a chamada "maldição dos recursos" se aplica a vários países africanos com enclaves?',
        opcoes: [
          'Porque os recursos naturais são amaldiçoados pela natureza.',
          'Porque países ricos em recursos acabam pobres, pois a riqueza extraída não se converte em desenvolvimento interno — ela sai do país.',
          'Porque há poucos recursos naturais na África.',
          'Porque a ONU proíbe a exploração desses recursos.'
        ],
        correta: 1,
        explicacoes: [
          'Pense: como um país cheio de ouro, petróleo e diamantes pode ser POBRE? O segredo está em quem fica com a riqueza.',
          'A "maldição dos recursos" descreve o paradoxo africano: países com gigantescas reservas (RD Congo, Nigéria, Angola) são pobres porque o modelo de enclave faz a riqueza ser EXTRAÍDA e EXPORTADA por empresas estrangeiras, sem desenvolver a economia interna. É o resultado direto do enclave + herança colonial.'
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
      <div class="box-resultado">
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
        q: 'Em Lagos (Nigéria), o bairro de Ikoyi tem mansões e iates, enquanto a poucos quilômetros fica Makoko, uma comunidade construída sobre palafitas na lagoa, sem saneamento. Esse cenário mostra principalmente:',
        opcoes: [
          'Que a economia africana está crescendo de forma equilibrada.',
          'Um forte contraste socioespacial entre áreas de luxo e assentamentos informais nas metrópoles africanas.',
          'Que a maioria da população africana vive bem.',
          'O sucesso das políticas públicas urbanas locais.'
        ],
        correta: 1,
        explicacoes: [
          'Repare: luxo de um lado e palafitas do outro, lado a lado. Que palavra define isso?',
          'O contraste é a marca da DESIGUALDADE SOCIOESPACIAL nas metrópoles africanas. Riqueza extrema e pobreza extrema dividindo o mesmo espaço urbano — isso NÃO é equilíbrio nem sucesso de política pública, é segregação gritante.'
        ]
      },
      {
        q: 'O governo de Gana, pressionado pelo FMI, faz um "ajuste fiscal". Qual cenário é o MAIS PROVÁVEL de acontecer?',
        opcoes: [
          'Salários de servidores aumentam e novos hospitais são construídos.',
          'O Estado investe pesadamente em moradia popular.',
          'Cortes em saúde, educação e saneamento, afetando principalmente os mais pobres.',
          'O país para de pagar a dívida externa e investe tudo em direitos sociais.'
        ],
        correta: 2,
        explicacoes: [
          'Ajuste fiscal vem com qual exigência? Cortar ou aumentar gastos?',
          'Ajuste fiscal = APERTAR O CINTO. O FMI/Banco Mundial exige redução de gastos públicos como condição pra empréstimos. Resultado: cortes em saúde, educação e saneamento — serviços usados sobretudo pela população pobre, que fica ainda mais vulnerável.'
        ]
      },
      {
        q: 'Sobre os "assentamentos informais" em metrópoles africanas como Nairóbi (favela de Kibera) ou Joanesburgo, é INCORRETO afirmar:',
        opcoes: [
          'Concentram população de baixa renda e migrantes rurais.',
          'Costumam ter déficit grave de água tratada e saneamento.',
          'São resultado direto da desigualdade socioeconômica e da segregação.',
          'Recebem prioridade do Estado em obras de infraestrutura e serviços públicos.'
        ],
        correta: 3,
        explicacoes: [
          'Atenção: a pergunta pede a INCORRETA. Pense: o Estado realmente prioriza a favela?',
          'Justamente o OPOSTO: assentamentos informais são, em regra, NEGLIGENCIADOS pelo Estado — por isso são "informais" (sem regularização, sem serviços). A prioridade do Estado costuma ir para áreas de classe média/alta. Por isso a desigualdade persiste.'
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
      <div class="box-resultado">
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
        q: 'A Conferência de Berlim (1884–1885) é um marco da divisão da África. Sobre ela, é CORRETO afirmar:',
        opcoes: [
          'Foi uma reunião de líderes africanos que decidiram suas próprias fronteiras.',
          'Reuniu potências europeias para partilhar o continente entre si, sem participação de povos africanos.',
          'Estabeleceu a independência de todos os países africanos.',
          'Foi conduzida pela ONU para garantir os direitos dos povos colonizados.'
        ],
        correta: 1,
        explicacoes: [
          'Em 1884 a ONU nem existia (foi criada em 1945). E os africanos não foram convidados.',
          'A Conferência de Berlim foi convocada por Bismarck e reuniu APENAS potências europeias (Inglaterra, França, Bélgica, Portugal, Alemanha...). Desenharam o mapa da África COM RÉGUA, sem chamar nenhum povo africano. Por isso várias fronteiras são RETAS e ARTIFICIAIS — separaram povos parentes e juntaram inimigos.'
        ]
      },
      {
        q: 'Por que conflitos étnicos como o de Ruanda (1994), Sudão e Nigéria são relacionados às heranças coloniais?',
        opcoes: [
          'Porque os africanos são naturalmente violentos.',
          'Porque povos rivais foram forçados a viver dentro das mesmas fronteiras artificiais criadas por europeus, sem coesão nacional.',
          'Porque o clima africano provoca conflitos.',
          'Porque a Europa atual continua ocupando esses países militarmente.'
        ],
        correta: 1,
        explicacoes: [
          'Atenção: as outras opções são preconceito ou simplesmente falsas. Pense nas FRONTEIRAS artificiais.',
          'Povos com línguas, religiões e histórias diferentes (tutsis e hutus em Ruanda, por exemplo) foram colocados à força dentro do mesmo país inventado pelos colonizadores. Isso criou Estados frágeis, sem identidade nacional comum — e até hoje muitos conflitos têm essa raiz colonial.'
        ]
      },
      {
        q: 'Mesmo após as independências (anos 1950–70), vários países africanos continuaram economicamente dependentes do exterior. Isso ocorre porque:',
        opcoes: [
          'Os africanos não sabem administrar suas economias.',
          'A própria estrutura econômica herdada da colonização — voltada à exportação de matérias-primas — se manteve depois da independência.',
          'Os ex-colonizadores devolveram todo o dinheiro extraído.',
          'A independência trouxe imediata igualdade econômica.'
        ],
        correta: 1,
        explicacoes: [
          'Cuidado com a alternativa A (é preconceituosa e falsa). Pense: o país ficou livre, mas a ECONOMIA ficou amarrada como?',
          'Os colonizadores foram embora, mas deixaram a estrutura montada: portos voltados a exportar matéria-prima, ferrovias que ligam a mina ao porto (e não cidades entre si), dependência de poucos produtos. É a chamada DEPENDÊNCIA ECONÔMICA herdada — muda a bandeira, mas a engrenagem colonial continua.'
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
      <div class="box-resultado">
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
        q: 'Numa metrópole africana, um jovem trabalha como vendedor ambulante, sem carteira assinada, ganhando por dia. Ele se enquadra em qual fenômeno descrito no mapa mental?',
        opcoes: [
          'Emprego formal de alta qualificação.',
          'Investimento público em direitos sociais.',
          'Subemprego — trabalho informal, mal pago, sem direitos trabalhistas.',
          'Migração internacional.'
        ],
        correta: 2,
        explicacoes: [
          'Sem carteira, ganha por dia, na rua. Que palavra do mapa mental descreve isso?',
          'SUBEMPREGO. É o trabalho informal, precário, sem direitos (férias, INSS, salário fixo). Muito comum em metrópoles africanas justamente por causa do enclave e da falta de empregos formais — a maioria da população vive disso.'
        ]
      },
      {
        q: 'Sobre as migrações INTERNAS na África, qual afirmação está ERRADA?',
        opcoes: [
          'Ocorrem dentro do mesmo país.',
          'São motivadas pela busca por trabalho, serviços e melhores condições de vida.',
          'O fluxo campo→cidade é muito comum.',
          'São sempre planejadas e organizadas pelos governos africanos.'
        ],
        correta: 3,
        explicacoes: [
          'Atenção: pergunta pede a ERRADA. Três estão corretas, uma é falsa.',
          'Migrações internas são ESPONTÂNEAS — as pessoas se mudam por conta própria, fugindo da pobreza rural ou de conflitos. Os governos NÃO planejam nem organizam isso; aliás, é justamente por isso que surgem favelas e assentamentos informais nas cidades grandes (o Estado não se prepara pra receber esse fluxo).'
        ]
      },
      {
        q: 'Um caminho REAL pra reduzir as desigualdades africanas, segundo o mapa mental, seria:',
        opcoes: [
          'Expandir o modelo de enclave para mais setores.',
          'Atrair mais empresas transnacionais sem cobrar impostos.',
          'Diversificar a economia gerando empregos e investir em direitos sociais com planejamento urbano inclusivo.',
          'Manter as fronteiras coloniais sem revisão.'
        ],
        correta: 2,
        explicacoes: [
          'Pense: o que combate enclave + segregação + exclusão ao mesmo tempo?',
          'As soluções têm que ir na DIREÇÃO OPOSTA dos problemas: diversificar a economia (oposto de enclave de uma matéria-prima só), investir em direitos sociais (oposto de ajuste fiscal), planejamento urbano inclusivo (oposto de segregação). Ampliar enclave ou dar isenção fiscal só piora.'
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
        q: 'A palavra "apartheid" vem do africaner e significa "separação". O sistema sul-africano (1948–1994) destacou-se por ser:',
        opcoes: [
          'Uma segregação racial apenas cultural, sem amparo legal.',
          'Uma segregação racial INSTITUCIONALIZADA — organizada e imposta pelo próprio Estado por meio de leis.',
          'Uma política de integração entre brancos e negros.',
          'Um sistema usado em todos os países africanos no mesmo período.'
        ],
        correta: 1,
        explicacoes: [
          'A palavra-chave é "institucionalizado". O que ela significa?',
          'Institucionalizado = previsto em LEI, sustentado pelo Estado. Não era apenas preconceito social: o próprio governo da África do Sul criava leis racistas (Pass Laws, Group Areas Act etc.) que obrigavam a separação. E foi um sistema EXCLUSIVO da África do Sul — não do continente inteiro.'
        ]
      },
      {
        q: 'Durante o Apartheid, um exemplo concreto de discriminação foi:',
        opcoes: [
          'Negros e brancos votarem livremente nas mesmas eleições.',
          'A criação dos "bantustões" — territórios onde a população negra era forçada a viver, separada das áreas brancas.',
          'A igualdade de salários entre as raças.',
          'O direito único de negros estudarem nas mesmas escolas que brancos.'
        ],
        correta: 1,
        explicacoes: [
          'Pense em separação territorial. Como o Estado afastava a população negra fisicamente?',
          'Os BANTUSTÕES (ou "homelands") eram áreas pobres e mal localizadas onde a população negra era REMOVIDA à força, perdendo até a cidadania sul-africana. As outras opções são exatamente o OPOSTO do que acontecia: não havia voto livre, não havia igualdade salarial nem escolar.'
        ]
      },
      {
        q: 'Mesmo após o fim oficial do Apartheid (1994, com a eleição de Mandela), é CORRETO afirmar que:',
        opcoes: [
          'A desigualdade racial e econômica acabou imediatamente.',
          'A África do Sul tornou-se o país mais igualitário do mundo.',
          'As marcas do sistema persistem: a população negra ainda concentra os piores indicadores sociais do país.',
          'O Apartheid voltou a vigorar em 2000.'
        ],
        correta: 2,
        explicacoes: [
          'Leis mudam rápido, mas a sociedade muda devagar. Olhe pra realidade atual da África do Sul.',
          'O Apartheid acabou em 1994, mas 46 anos de segregação institucional deixaram marcas profundas. Até hoje a África do Sul é um dos países MAIS DESIGUAIS do mundo: a população negra (maioria) concentra desemprego, pobreza e mora majoritariamente nas townships. Essa é a HERANÇA do Apartheid.'
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
      <div class="box-info">
        👥 <b>SEGREGAÇÃO ESPACIAL:</b> Separação de grupos sociais no espaço urbano,
        onde uns têm acesso a serviços e outros não.
      </div>
      <div class="box-info">
        🕰️ <b>HERANÇA COLONIAL:</b> Marcas deixadas pela colonização que influenciam
        a economia, a política e o espaço até os dias atuais.
      </div>
      <div class="box-info">
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
      <div class="subtitle">// Sistema de Revisão Interativa //</div>
      <h1>PROVA DE GEOGRAFIA</h1>
      <div class="subtitle">África · Espaço · Economia · Desigualdades</div>
      <p class="lead">Embarque numa jornada cósmica pelo continente africano. Cada fase desbloqueia a próxima — só com conhecimento.</p>
      <div class="student">⚡ LEVI MACIEL · REVISÃO AV2 ⚡</div>
      <button id="startBtn" class="start-btn">▶ INICIAR JORNADA</button>
      <p class="hint">
        🔒 Você só avança quando dominar o conteúdo.<br>
        Use as <b>setas ← →</b> do teclado ou os botões abaixo.<br>
        <span style="opacity:.7;">Prof. Wesclay · 8º Ano</span>
      </p>
    </div>
  `;
}

function renderVitoria() {
  return `
    <div class="card victory">
      <div class="medal">🏆</div>
      <h1>MISSÃO CUMPRIDA</h1>
      <p style="font-size:18px;color:var(--text-dim);">Levi, você concluiu TODA a jornada de revisão!</p>
      <div class="checks">
        <p>✅ Enclave Econômico</p>
        <p>✅ Desigualdade Socioeconômica</p>
        <p>✅ Heranças Históricas</p>
        <p>✅ Impactos na Vida das Pessoas</p>
        <p>✅ Apartheid na África do Sul</p>
        <p>✅ Conceitos-chave</p>
      </div>
      <p class="final-msg">🎯 BOA SORTE NA PROVA! VOCÊ VAI ARRASAR!</p>
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
                <div style="margin-top:6px;color:var(--text);font-weight:normal;">${expl}</div>
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
      <p id="memStatus" style="text-align:center;margin-top:14px;color:var(--text-dim);">Pares encontrados: <b>${matched}</b>/${pares.length}</p>`;
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
