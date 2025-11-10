// Conteúdo do Manual Apega Desapega
const manualContent = {
    sections: [
        {
            id: 'boas-vindas',
            title: 'Boas-Vindas',
            content: `
                <h2 class="section-title">Seja Muito Bem-Vindo(a)!</h2>
                <p>Olá! Seja muito bem-vindo(a) à família Apega Desapega Brechó!</p>
                <p>Estamos muito felizes em ter você conosco. Este manual foi criado para que você se sinta seguro(a) e preparado(a) desde o primeiro dia. Leia com atenção, faça anotações e não hesite em tirar dúvidas com a equipe.</p>

                <h3 class="section-subtitle">Por que existimos</h3>
                <p>Acreditamos que <strong>moda sustentável é nosso modo de mudar o mundo</strong>. Cada peça que vendemos tem uma história e ganha uma nova chance. Cada cliente que atendemos é um aliado na luta contra o desperdício. <strong>Você faz parte dessa missão!</strong></p>

                <div class="info-box success">
                    <strong>Nossa Missão:</strong> Transformar o mercado da moda através da sustentabilidade, oferecendo peças de qualidade que prolongam ciclos de vida e reduzem o desperdício.
                </div>
            `
        },
        {
            id: 'informacoes-essenciais',
            title: 'Informações Essenciais',
            content: `
                <h2 class="section-title">Informações Essenciais</h2>

                <div class="contact-info">
                    <p><strong>ENDEREÇO</strong></p>
                    <p>Av. Brasil Leste, 185<br>Passo Fundo/RS</p>
                </div>

                <div class="contact-info">
                    <p><strong>CONTATOS</strong></p>
                    <p>WhatsApp: (54) 9.9609-6202</p>
                    <p>Instagram: @apegadesapegars</p>
                </div>

                <h3 class="section-subtitle">Horário de Funcionamento</h3>

                <table>
                    <tr>
                        <th>Dia</th>
                        <th>Manhã</th>
                        <th>Tarde</th>
                    </tr>
                    <tr>
                        <td>Segunda a Sexta</td>
                        <td>09:30 - 12:00</td>
                        <td>13:30 - 18:30</td>
                    </tr>
                    <tr>
                        <td>Sábado</td>
                        <td>09:30 - 12:00</td>
                        <td>13:00 - 16:00</td>
                    </tr>
                    <tr>
                        <td>Domingo e Feriados</td>
                        <td colspan="2" style="text-align: center;">FECHADO</td>
                    </tr>
                </table>

                <div class="info-box important">
                    <strong>PONTUALIDADE</strong><br>
                    Chegue 15 minutos antes do horário de abertura:<br>
                    • Manhã: até 09:15<br>
                    • Tarde: até 13:15 (ou 12:45 aos sábados)<br>
                    <strong>Nunca deixe clientes esperando na porta!</strong>
                </div>
            `
        },
        {
            id: 'equipe',
            title: 'Sua Equipe',
            content: `
                <h2 class="section-title">Conheça Sua Equipe</h2>

                <h3 class="section-subtitle">Sistema de Comissões</h3>
                <p>Trabalhamos com três comissionadas identificadas por cores:</p>
                <ul>
                    <li><strong>AM (Amarela)</strong></li>
                    <li><strong>BR (Bruna)</strong></li>
                    <li><strong>MA (Maria)</strong></li>
                </ul>

                <h3 class="section-subtitle">Escala de Prioridades</h3>
                <p>Cada funcionária tem uma prioridade diferente a cada dia para equilibrar o trabalho:</p>

                <h4>BRUNA - Escala Semanal:</h4>
                <table>
                    <tr>
                        <th>Dia</th>
                        <th>Prioridade</th>
                    </tr>
                    <tr>
                        <td>Segunda</td>
                        <td>VENDER - Foco no atendimento ao cliente</td>
                    </tr>
                    <tr>
                        <td>Terça</td>
                        <td>LISTAR - Processar peças novas</td>
                    </tr>
                    <tr>
                        <td>Quarta</td>
                        <td>VENDER - Foco no atendimento ao cliente</td>
                    </tr>
                    <tr>
                        <td>Quinta</td>
                        <td>LISTAR - Processar peças novas</td>
                    </tr>
                    <tr>
                        <td>Sexta</td>
                        <td>VENDER - Foco no atendimento ao cliente</td>
                    </tr>
                    <tr>
                        <td>Sábado</td>
                        <td>LISTAR - Processar peças novas</td>
                    </tr>
                </table>

                <h4>MARIA - Escala Semanal:</h4>
                <table>
                    <tr>
                        <th>Dia</th>
                        <th>Prioridade</th>
                    </tr>
                    <tr>
                        <td>Segunda</td>
                        <td>LISTAR - Processar peças novas</td>
                    </tr>
                    <tr>
                        <td>Terça</td>
                        <td>VENDER - Foco no atendimento ao cliente</td>
                    </tr>
                    <tr>
                        <td>Quarta</td>
                        <td>LISTAR - Processar peças novas</td>
                    </tr>
                    <tr>
                        <td>Quinta</td>
                        <td>VENDER - Foco no atendimento ao cliente</td>
                    </tr>
                    <tr>
                        <td>Sexta</td>
                        <td>LISTAR - Processar peças novas</td>
                    </tr>
                    <tr>
                        <td>Sábado</td>
                        <td>VENDER - Foco no atendimento ao cliente</td>
                    </tr>
                </table>

                <div class="info-box">
                    <strong>IMPORTANTE:</strong>
                    <ul>
                        <li>Quem está "VENDENDO" deve priorizar o atendimento e organização da loja</li>
                        <li>Quem está "LISTANDO" foca no processamento de peças, mas SEMPRE atende clientes quando necessário</li>
                        <li>Sempre trabalhe em equipe! Se houver muitos clientes, ambas atendem</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'abertura-loja',
            title: 'Abertura da Loja',
            content: `
                <h2 class="section-title">Checklist de Abertura da Loja</h2>
                <p><strong>Horário: 09:15 (chegada) | 09:30 (abertura)</strong></p>

                <h3 class="section-subtitle">1. CHEGADA (09:15)</h3>
                <ul class="checklist">
                    <li>Desligar alarme</li>
                    <li>Acender todas as luzes da loja</li>
                    <li>Acender luzes da vitrine</li>
                    <li>Ligar ar-condicionado (temperatura: 23°C)</li>
                    <li>Abrir cofre e preparar troco</li>
                    <li>Conferir troco mínimo: R$ 100,00 em notas pequenas</li>
                </ul>

                <h3 class="section-subtitle">2. LIMPEZA E ORGANIZAÇÃO (09:15 - 09:30)</h3>
                <ul class="checklist">
                    <li>Varrer toda a loja (começar pelo fundo)</li>
                    <li>Passar aspirador nos tapetes</li>
                    <li>Tirar pó de todas as prateleiras com pano úmido</li>
                    <li>Limpar balcão de atendimento com álcool 70%</li>
                    <li>Limpar espelhos com limpa-vidros</li>
                    <li>Verificar banheiro: papel higiênico, sabonete, toalha</li>
                    <li>Esvaziar lixeiras</li>
                </ul>

                <h3 class="section-subtitle">3. ORGANIZAÇÃO DAS ARARAS (09:20 - 09:30)</h3>
                <ul class="checklist">
                    <li>Verificar se todas as peças estão no lugar correto</li>
                    <li>Alinhar todos os cabides no mesmo sentido (virados para a esquerda)</li>
                    <li>Espaçar peças uniformemente (1 dedo entre cada cabide)</li>
                    <li>Verificar se etiquetas estão visíveis</li>
                    <li>Reorganizar peças que caíram ou ficaram tortas</li>
                    <li>Verificar organização por: COR → TAMANHO → TIPO</li>
                </ul>

                <h3 class="section-subtitle">4. PREPARAÇÃO DO CAIXA</h3>
                <ul class="checklist">
                    <li>Ligar computador/tablet</li>
                    <li>Abrir sistema de vendas</li>
                    <li>Ligar máquina de cartão</li>
                    <li>Testar conexão internet</li>
                    <li>Verificar papel da impressora de nota fiscal</li>
                    <li>Preparar sacolas, papel de seda, etiquetas adesivas</li>
                </ul>

                <h3 class="section-subtitle">5. ABERTURA OFICIAL (09:30)</h3>
                <ul class="checklist">
                    <li>Destravar porta principal</li>
                    <li>Colocar placa "ABERTO"</li>
                    <li>Verificar porta aberta completamente</li>
                    <li>Música ambiente ligada (volume baixo)</li>
                    <li>Última olhada geral na loja</li>
                </ul>
            `
        },
        {
            id: 'como-listar',
            title: 'Como Listar Peças',
            content: `
                <h2 class="section-title">Como Listar Peças - Processo Completo</h2>

                <h3 class="section-subtitle">ETAPA 1: Recebimento e Verificação</h3>
                <p><strong>Quando um fornecedor traz peças:</strong></p>
                <ol>
                    <li>Receba a pessoa com educação</li>
                    <li>Peça para ela aguardar enquanto você verifica</li>
                    <li>Separe as peças em uma mesa limpa</li>
                </ol>

                <p><strong>O QUE VERIFICAR EM CADA PEÇA:</strong></p>
                <ul class="checklist">
                    <li>Estado geral (sem rasgos, manchas, furos)</li>
                    <li>Zíperes funcionando</li>
                    <li>Botões completos e firmes</li>
                    <li>Costuras intactas</li>
                    <li>Sem odores fortes (mofo, naftalina, suor)</li>
                    <li>Sem desbotamento excessivo</li>
                    <li>Tecido sem bolinhas (exceto se for vintage de valor)</li>
                </ul>

                <div class="info-box warning">
                    <strong>PEÇAS QUE NÃO ACEITAMOS:</strong>
                    <ul>
                        <li>Roupas com manchas permanentes</li>
                        <li>Peças com rasgos ou furos (exceto se for proposital no design)</li>
                        <li>Roupas íntimas usadas (exceto calcinhas com etiqueta)</li>
                        <li>Peças com cheiro forte que não sai</li>
                        <li>Roupas muito desbotadas</li>
                        <li>Peças sem marca e de qualidade muito baixa</li>
                        <li>Roupas com mais de 3 temporadas antigas</li>
                    </ul>
                </div>

                <h3 class="section-subtitle">ETAPA 2: Categorização</h3>
                <p><strong>Categorias Principais:</strong></p>
                <ul>
                    <li><strong>Blusas:</strong> camisetas, regatas, blusas de manga, tops</li>
                    <li><strong>Calças:</strong> jeans, sociais, leggings, pantalonas</li>
                    <li><strong>Vestidos:</strong> curtos, médios, longos</li>
                    <li><strong>Saias:</strong> curtas, médias, longas</li>
                    <li><strong>Shorts e Bermudas</strong></li>
                    <li><strong>Casacos:</strong> jaquetas, blazers, cardigãs, moletons</li>
                    <li><strong>Macacões e Jardineiras</strong></li>
                    <li><strong>Acessórios:</strong> bolsas, cintos, bijuterias</li>
                    <li><strong>Calçados:</strong> separados por tipo e tamanho</li>
                </ul>

                <h3 class="section-subtitle">ETAPA 3: Preenchimento da Planilha</h3>
                <p><strong>Informações Obrigatórias:</strong></p>
                <ol>
                    <li>DATA DE ENTRADA: [dia/mês/ano]</li>
                    <li>FORNECEDOR: [nome completo + telefone]</li>
                    <li>CÓDIGO DA PEÇA: [gerado automaticamente]</li>
                    <li>CATEGORIA: [usar lista padronizada]</li>
                    <li>DESCRIÇÃO: [ser específico]
                        <div class="info-box">
                            <strong>Exemplo RUIM:</strong> "Blusa azul"<br>
                            <strong>Exemplo BOM:</strong> "Blusa manga longa azul marinho, gola V, tecido viscose, marca Zara"
                        </div>
                    </li>
                    <li>MARCA: [sempre verificar etiqueta interna]</li>
                    <li>TAMANHO: [PP, P, M, G, GG, ou numeração]</li>
                    <li>COR PRINCIPAL: [usar lista padronizada]</li>
                    <li>ESTADO: [Novo com etiqueta / Seminovo / Usado bom estado]</li>
                    <li>PREÇO SUGERIDO FORNECEDOR: R$ [valor]</li>
                    <li>PREÇO DEFINIDO LOJA: R$ [valor]</li>
                    <li>COMISSÃO: [% do fornecedor, geralmente 50%]</li>
                </ol>

                <h3 class="section-subtitle">ETAPA 4: Precificação</h3>

                <table>
                    <tr>
                        <th>Tipo de Marca</th>
                        <th>Nova com Etiqueta</th>
                        <th>Seminova</th>
                        <th>Usada</th>
                    </tr>
                    <tr>
                        <td>MARCA RECONHECIDA<br>(Zara, H&M, C&A)</td>
                        <td>60-70% do valor</td>
                        <td>40-50% do valor</td>
                        <td>30-40% do valor</td>
                    </tr>
                    <tr>
                        <td>MARCA PREMIUM<br>(Animale, Farm, Osklen)</td>
                        <td>50-60% do valor</td>
                        <td>35-45% do valor</td>
                        <td>25-35% do valor</td>
                    </tr>
                    <tr>
                        <td>SEM MARCA</td>
                        <td colspan="3">Avaliar qualidade<br>Mínimo: R$ 15 (blusas) / R$ 25 (calças/vestidos)</td>
                    </tr>
                </table>

                <div class="info-box">
                    <strong>DICA:</strong> Pesquise o valor atual da peça em lojas online se tiver dúvida!
                </div>

                <h3 class="section-subtitle">ETAPA 5: Etiquetagem</h3>
                <p><strong>Onde colocar a etiqueta:</strong></p>
                <ul>
                    <li><strong>Blusas e Camisetas:</strong> na etiqueta interna do decote ou lateral</li>
                    <li><strong>Calças:</strong> na parte interna da cintura, atrás</li>
                    <li><strong>Vestidos:</strong> na etiqueta interna do decote ou costura lateral</li>
                    <li><strong>Casacos:</strong> na etiqueta interna do decote</li>
                    <li><strong>Calçados:</strong> na sola interna ou na parte de trás</li>
                    <li><strong>Bolsas:</strong> etiqueta amarrada na alça ou dentro com cordão</li>
                </ul>

                <div class="info-box important">
                    <strong>IMPORTANTE:</strong> Use etiquetadora ou alfinete de segurança. NUNCA cole etiqueta direto no tecido!
                </div>
            `
        },
        {
            id: 'como-vender',
            title: 'Como Vender',
            content: `
                <h2 class="section-title">Processo de Venda - Do Início ao Fim</h2>

                <h3 class="section-subtitle">MOMENTO 1: Recepção do Cliente</h3>
                <p><strong>Quando o cliente entra (primeiros 30 segundos):</strong></p>
                <ul>
                    <li>Levante o olhar e sorria</li>
                    <li>Diga: "Olá! Seja bem-vindo(a) ao Apega Desapega!"</li>
                    <li>Observe se o cliente quer espaço ou atenção</li>
                </ul>

                <div class="script-box">
                    <strong>SCRIPT DE ABORDAGEM (após 1-2 minutos):</strong><br><br>
                    "Olá! Tudo bem? Eu sou [seu nome]. Seja muito bem-vindo(a)! Você já conhece nossa loja?"<br><br>
                    <strong>SE DISSER NÃO:</strong><br>
                    "Que legal! Somos um brechó de moda sustentável, trabalhamos com peças de qualidade selecionadas. Todas as nossas peças são higienizadas e verificadas. Você está procurando algo específico hoje ou quer dar uma olhada?"<br><br>
                    <strong>SE DISSER SIM:</strong><br>
                    "Que bom ter você de volta! Recebemos peças novas essa semana. Posso te ajudar a encontrar algo específico?"
                </div>

                <h3 class="section-subtitle">MOMENTO 2: Identificação da Necessidade</h3>
                <p><strong>Perguntas para fazer:</strong></p>
                <ul>
                    <li>"Você está procurando algo para alguma ocasião especial?"</li>
                    <li>"Qual estilo você prefere? Mais casual, social ou festa?"</li>
                    <li>"Que tamanho você veste normalmente?"</li>
                    <li>"Tem alguma cor preferida?"</li>
                    <li>"Você tem mais interesse em blusas, calças, vestidos...?"</li>
                </ul>

                <div class="info-box">
                    <strong>DICA:</strong> Escute mais do que fale! O cliente vai te dar pistas do que precisa.
                </div>

                <h3 class="section-subtitle">MOMENTO 3: Apresentação das Peças</h3>
                <p><strong>Como mostrar peças:</strong></p>
                <ul>
                    <li>Retire da arara com cuidado</li>
                    <li>Segure a peça esticada na frente do corpo (não amassada no cabide)</li>
                    <li>Destaque os pontos positivos</li>
                </ul>

                <div class="script-box">
                    <strong>EXEMPLOS DE FRASES:</strong><br>
                    "Olha que linda essa blusa! É da marca [marca], o tecido é [tipo], super confortável"<br><br>
                    "Esse vestido é perfeito para [ocasião]. Repara no caimento, ele valoriza muito"<br><br>
                    "Essa calça é um clássico, combina com tudo e o jeans é de qualidade"<br><br>
                    "Essa peça ainda tem etiqueta, é nova! Um preço muito melhor que na loja"
                </div>

                <h3 class="section-subtitle">MOMENTO 4: Experimentação</h3>
                <p><strong>No provador:</strong></p>
                <ul>
                    <li>Acompanhe o cliente até o provador</li>
                    <li>Pergunte: "Quer que eu separe tamanhos diferentes para você experimentar?"</li>
                    <li>Entregue as peças e diga: "Fique à vontade, qualquer coisa é só me chamar!"</li>
                    <li>Aguarde próximo ao provador (não longe!)</li>
                    <li>Quando o cliente sair, pergunte: "E aí, gostou? Como ficou?"</li>
                </ul>

                <div class="info-box success">
                    <strong>SEJA HONESTA:</strong><br>
                    Se a peça não ficou bem: "Sabe, não acho que essa ficou tão legal. Que tal experimentar esse outro modelo?"<br>
                    Se a peça ficou ótima: "Nossa, ficou perfeita em você! O caimento está lindo!"
                </div>

                <h3 class="section-subtitle">MOMENTO 5: Resolução de Objeções</h3>

                <div class="script-box">
                    <strong>CLIENTE DIZ: "Está caro"</strong><br>
                    Responda: "Eu entendo! Mas veja, essa peça é da [marca] e está [nova/seminova]. Na loja ela custa R$ [valor original]. Aqui você está economizando [X%]. Além disso, você está consumindo de forma consciente!"
                </div>

                <div class="script-box">
                    <strong>CLIENTE DIZ: "Vou pensar"</strong><br>
                    Responda: "Claro, sem problema! Quer que eu guarde por algumas horas para você decidir? Posso mandar foto pelo WhatsApp para você ver com calma também!"
                </div>

                <div class="script-box">
                    <strong>CLIENTE DIZ: "Não tenho certeza da cor/modelo"</strong><br>
                    Responda: "Que tal levar para experimentar em casa com suas outras roupas? Você pode trocar em até 7 dias!"
                </div>

                <h3 class="section-subtitle">MOMENTO 6: Fechamento da Venda</h3>
                <div class="script-box">
                    "Perfeito! Então você vai levar [listar as peças]. Deixa eu conferir os valores..."<br><br>
                    "O total fica R$ [valor]. Aceita uma sugestão de última hora? [mostrar algum acessório pequeno que combine]"<br><br>
                    "Vai ser no dinheiro, cartão ou PIX?"
                </div>

                <h3 class="section-subtitle">MOMENTO 7: Embalagem</h3>
                <p><strong>Como embalar com capricho:</strong></p>
                <ul>
                    <li>Dobre cada peça cuidadosamente</li>
                    <li>Coloque papel de seda entre peças delicadas</li>
                    <li>Escolha sacola de tamanho adequado</li>
                    <li>Entregue a sacola com as duas mãos</li>
                    <li>Sorria ao entregar</li>
                </ul>

                <h3 class="section-subtitle">MOMENTO 8: Finalização e Fidelização</h3>
                <div class="script-box">
                    "Prontinho! Aqui estão suas peças. Muito obrigado(a) pela compra e por apoiar a moda sustentável!<br><br>
                    Só para você saber: você tem 7 dias para trocar se não servir ou se não gostar, tá? É só trazer a nota fiscal e a peça sem uso.<br><br>
                    A gente posta novidades todos os dias no nosso Instagram @apegadesapegars. Você já segue a gente?<br><br>
                    Qualquer coisa, nosso WhatsApp é (54) 9.9609-6202. Volte sempre!"
                </div>
            `
        },
        {
            id: 'maquina-cartao',
            title: 'Máquina de Cartão',
            content: `
                <h2 class="section-title">Manual Completo - Máquina de Cartão</h2>

                <h3 class="section-subtitle">VENDA NO DÉBITO</h3>
                <ol>
                    <li>Pressione botão verde (menu)</li>
                    <li>Digite: <strong>1</strong> (Venda)</li>
                    <li>Digite o valor: exemplo <strong>5000</strong> = R$ 50,00
                        <div class="info-box">
                            Sempre digite centavos!<br>
                            R$ 50,00 = 5000<br>
                            R$ 150,50 = 15050
                        </div>
                    </li>
                    <li>Confirme (botão verde)</li>
                    <li>Selecione: <strong>1</strong> (Débito)</li>
                    <li>Peça para cliente passar ou inserir cartão</li>
                    <li>Cliente digita senha</li>
                    <li>Aguarde "TRANSAÇÃO APROVADA"</li>
                    <li>Pergunte: "Quer a via do cliente?"</li>
                </ol>

                <h3 class="section-subtitle">VENDA NO CRÉDITO À VISTA</h3>
                <ol>
                    <li>Pressione botão verde (menu)</li>
                    <li>Digite: <strong>1</strong> (Venda)</li>
                    <li>Digite o valor</li>
                    <li>Confirme</li>
                    <li>Selecione: <strong>2</strong> (Crédito)</li>
                    <li>Digite: <strong>1</strong> (À vista)</li>
                    <li>Peça para cliente passar cartão</li>
                    <li>Cliente digita senha</li>
                    <li>Aguarde aprovação</li>
                    <li>Ofereça comprovante</li>
                </ol>

                <h3 class="section-subtitle">VENDA NO CRÉDITO PARCELADO</h3>
                <ol>
                    <li>Pressione botão verde</li>
                    <li>Digite: <strong>1</strong> (Venda)</li>
                    <li>Digite o valor total</li>
                    <li>Confirme</li>
                    <li>Selecione: <strong>2</strong> (Crédito)</li>
                    <li>Digite número de parcelas: 2, 3, 4, etc</li>
                    <li>Máquina mostra valor de cada parcela</li>
                    <li>Cliente confirma</li>
                    <li>Cliente digita senha</li>
                    <li>Aguarde aprovação</li>
                </ol>

                <h3 class="section-subtitle">PROBLEMAS COMUNS</h3>

                <div class="info-box warning">
                    <strong>"SEM CONEXÃO"</strong>
                    <ul>
                        <li>Verifique Wi-Fi</li>
                        <li>Tente reiniciar máquina (segurar botão vermelho 5 segundos)</li>
                        <li>Ligue dados móveis se Wi-Fi não funcionar</li>
                    </ul>
                </div>

                <div class="info-box warning">
                    <strong>"CARTÃO NÃO LIDO"</strong>
                    <ul>
                        <li>Peça para cliente inserir ao invés de aproximar</li>
                        <li>Limpe leitor com pano seco</li>
                        <li>Tente outro cartão do cliente</li>
                    </ul>
                </div>

                <div class="info-box warning">
                    <strong>"TRANSAÇÃO NEGADA"</strong>
                    <ul>
                        <li>Não é problema da máquina!</li>
                        <li>Diga ao cliente: "O banco não aprovou. Tem outro cartão ou outra forma de pagamento?"</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'organizacao',
            title: 'Organização da Loja',
            content: `
                <h2 class="section-title">Padrão de Organização</h2>

                <h3 class="section-subtitle">ARARAS</h3>
                <ul>
                    <li><strong>Altura dos cabides:</strong> Todos na mesma altura</li>
                    <li><strong>Direção:</strong> Todos virados para a ESQUERDA</li>
                    <li><strong>Espaçamento:</strong> 1 dedo de espaço entre cada cabide</li>
                    <li><strong>Organização por cores (em ordem):</strong>
                        <ol>
                            <li>Preto e tons escuros</li>
                            <li>Azul marinho</li>
                            <li>Azul claro</li>
                            <li>Verde escuro</li>
                            <li>Verde claro</li>
                            <li>Marrom</li>
                            <li>Vinho/Bordô</li>
                            <li>Vermelho</li>
                            <li>Laranja</li>
                            <li>Rosa escuro</li>
                            <li>Rosa claro</li>
                            <li>Roxo</li>
                            <li>Amarelo</li>
                            <li>Bege/nude</li>
                            <li>Cinza</li>
                            <li>Branco e cores claras</li>
                        </ol>
                    </li>
                    <li><strong>Dentro de cada cor:</strong> Organizar por tamanho (PP → P → M → G → GG → XG)</li>
                </ul>

                <h3 class="section-subtitle">ARARA 1 - BLUSAS E TOPS</h3>
                <ul>
                    <li>Ordem: COR (seguir lista acima)</li>
                    <li>Dentro de cada cor: TAMANHO</li>
                    <li>Cabides: todos virados para a esquerda</li>
                    <li>Espaçamento: 1 dedo entre cada peça</li>
                </ul>

                <h3 class="section-subtitle">ARARA 2 - VESTIDOS</h3>
                <ul>
                    <li>Ordem: COMPRIMENTO (curtos → médios → longos)</li>
                    <li>Dentro de cada comprimento: COR</li>
                    <li>Vestidos especiais/festa: área destacada</li>
                </ul>

                <h3 class="section-subtitle">ARARA 3 - CALÇAS E SHORTS</h3>
                <ul>
                    <li>Calças jeans juntas (ordem de cor: escuro → claro)</li>
                    <li>Calças sociais separadas</li>
                    <li>Shorts agrupados por cor</li>
                </ul>

                <h3 class="section-subtitle">ARARA 4 - CASACOS</h3>
                <ul>
                    <li>Jaquetas jeans juntas</li>
                    <li>Blazers juntos</li>
                    <li>Casacos de frio agrupados</li>
                    <li>Ordem por cor dentro de cada tipo</li>
                </ul>

                <h3 class="section-subtitle">BALCÕES E PRATELEIRAS</h3>
                <ul>
                    <li><strong>Peças dobradas:</strong> Pilhas de no máximo 5 peças</li>
                    <li><strong>Etiquetas:</strong> Todas no mesmo canto (frontal direito)</li>
                    <li><strong>Alinhamento:</strong> Perfeito (use régua visual)</li>
                    <li><strong>Acessórios:</strong> Em displays apropriados</li>
                    <li><strong>Calçados:</strong> Pares sempre juntos, organizados por tamanho</li>
                </ul>

                <h3 class="section-subtitle">VITRINE</h3>
                <ul>
                    <li>Trocar TODA SEGUNDA-FEIRA de manhã</li>
                    <li>Usar manequins para mostrar looks completos</li>
                    <li>Destacar novidades e peças premium</li>
                    <li>Iluminação sempre funcionando</li>
                    <li>Limpar vidro diariamente</li>
                </ul>
            `
        },
        {
            id: 'fechamento-loja',
            title: 'Fechamento da Loja',
            content: `
                <h2 class="section-title">Checklist de Fechamento</h2>

                <h3 class="section-subtitle">30 MINUTOS ANTES DO FECHAMENTO</h3>
                <ul class="checklist">
                    <li>Avise clientes que faltam 30 minutos</li>
                    <li>Não deixe novos clientes entrarem (educadamente)</li>
                </ul>

                <h3 class="section-subtitle">15 MINUTOS ANTES</h3>
                <ul class="checklist">
                    <li>Avise clientes presentes: "Pessoal, já estamos encerrando. Podem finalizar as compras nos próximos minutos?"</li>
                </ul>

                <h3 class="section-subtitle">NO HORÁRIO DE FECHAMENTO</h3>

                <h4>1. CAIXA E FINANCEIRO</h4>
                <ul class="checklist">
                    <li>Lançar todas as vendas do dia</li>
                    <li>Tirar todas as notas fiscais pendentes</li>
                    <li>Imprimir relatório de vendas da máquina</li>
                    <li>Conferir dinheiro do caixa</li>
                    <li>Separar troco para próximo dia (R$ 100)</li>
                    <li>Guardar dinheiro excedente no cofre</li>
                    <li>Fechar sistema de vendas</li>
                    <li>Desligar máquina de cartão</li>
                </ul>

                <h4>2. ORGANIZAÇÃO GERAL</h4>
                <ul class="checklist">
                    <li>Reorganizar todas as araras</li>
                    <li>Alinhar cabides</li>
                    <li>Dobrar peças que caíram</li>
                    <li>Verificar provador (limpar e organizar)</li>
                    <li>Recolher sacolas/tags pelo chão</li>
                    <li>Organizar balcão de atendimento</li>
                </ul>

                <h4>3. LIMPEZA</h4>
                <ul class="checklist">
                    <li>Varrer loja inteira</li>
                    <li>Esvaziar lixeiras</li>
                    <li>Limpar balcão de atendimento</li>
                    <li>Organizar banheiro</li>
                </ul>

                <h4>4. SEGURANÇA</h4>
                <ul class="checklist">
                    <li>Verificar todas as janelas fechadas</li>
                    <li>Trancar portas do estoque</li>
                    <li>Conferir se não ficou ninguém no provador/banheiro</li>
                    <li>Verificar se não há nada ligado (ferro de passar!)</li>
                </ul>

                <h4>5. FINALIZAÇÃO</h4>
                <ul class="checklist">
                    <li>Apagar luzes da loja (deixar só vitrine)</li>
                    <li>Desligar ar-condicionado</li>
                    <li>Fechar cofre</li>
                    <li>Armar alarme</li>
                    <li>Trancar porta principal</li>
                    <li>Verificar se porta está trancada (testar)</li>
                </ul>

                <div class="info-box important">
                    <strong>ÚLTIMA VERIFICAÇÃO:</strong><br>
                    Antes de sair, olhe a loja por 30 segundos:<br>
                    • Tudo organizado?<br>
                    • Luzes apagadas?<br>
                    • Alarme armado?<br>
                    • Porta trancada?
                </div>
            `
        },
        {
            id: 'politica-trocas',
            title: 'Política de Trocas',
            content: `
                <h2 class="section-title">Política de Trocas e Devoluções</h2>

                <div class="info-box">
                    <strong>PRAZO:</strong> 7 dias corridos a partir da data da compra
                </div>

                <h3 class="section-subtitle">CONDIÇÕES PARA ACEITAR TROCA</h3>
                <ul>
                    <li>✓ Peça sem uso (sem odor, sem marcas de uso)</li>
                    <li>✓ Com etiqueta da loja</li>
                    <li>✓ Com nota fiscal</li>
                    <li>✓ Dentro do prazo</li>
                </ul>

                <h3 class="section-subtitle">NÃO ACEITAMOS TROCA DE</h3>
                <ul>
                    <li>✗ Roupas íntimas (exceto se com defeito)</li>
                    <li>✗ Peças usadas</li>
                    <li>✗ Peças sem nota fiscal</li>
                    <li>✗ Após 7 dias</li>
                    <li>✗ Peças danificadas pelo cliente</li>
                </ul>

                <h3 class="section-subtitle">TIPOS DE TROCA</h3>
                <ol>
                    <li>Troca por outra peça do mesmo valor</li>
                    <li>Troca por peça de valor maior (cliente paga diferença)</li>
                    <li>Troca por peça de valor menor (crédito fica na loja)</li>
                    <li>Crédito na loja (sem devolução de dinheiro)</li>
                </ol>

                <h3 class="section-subtitle">PROCEDIMENTO</h3>
                <p><strong>Quando cliente chega para trocar:</strong></p>
                <ol>
                    <li>Receba com educação: "Olá! Tudo bem? O que aconteceu?"</li>
                    <li>Verifique nota fiscal</li>
                    <li>Verifique estado da peça</li>
                    <li>Verifique prazo</li>
                    <li>Se tudo OK: "Sem problema! Você quer escolher outra peça agora ou prefere crédito na loja para usar depois?"</li>
                    <li>Preencha formulário de troca</li>
                    <li>Emita novo documento</li>
                    <li>No sistema: cancele venda anterior e lance nova</li>
                </ol>
            `
        },
        {
            id: 'seguranca',
            title: 'Segurança e Emergências',
            content: `
                <h2 class="section-title">Segurança e Emergências</h2>

                <h3 class="section-subtitle">CONTATOS DE EMERGÊNCIA</h3>
                <div class="contact-info">
                    <p><strong>Emergências</strong></p>
                    <p>Polícia: 190</p>
                    <p>Bombeiros: 193</p>
                    <p>SAMU: 192</p>
                </div>

                <h3 class="section-subtitle">INCÊNDIO</h3>
                <ol>
                    <li>Acione alarme de incêndio</li>
                    <li>Ligue 193 (Bombeiros)</li>
                    <li>Evacue loja (clientes primeiro)</li>
                    <li>Use extintor SOMENTE se fogo pequeno</li>
                    <li>Nunca entre em local com fumaça</li>
                </ol>

                <div class="info-box warning">
                    <strong>USO DO EXTINTOR:</strong><br>
                    • Puxe pino<br>
                    • Aperte gatilho<br>
                    • Direcione para base do fogo
                </div>

                <h3 class="section-subtitle">⚠️ ASSALTO</h3>
                <div class="info-box warning">
                    <strong>SUA VIDA VALE MAIS QUE QUALQUER VALOR</strong>
                </div>

                <p><strong>Se houver assalto:</strong></p>
                <ul>
                    <li>Mantenha CALMA</li>
                    <li>Não reaja</li>
                    <li>Não olhe fixamente para o rosto do assaltante</li>
                    <li>Obedeça ordens</li>
                    <li>Entregue dinheiro sem resistir</li>
                    <li>Não siga ou tente pegar</li>
                    <li>Após saída: tranque porta e ligue 190</li>
                </ul>

                <div class="info-box important">
                    <strong>NÃO CORRA RISCO NUNCA!</strong>
                </div>

                <h3 class="section-subtitle">ACIDENTE/MAL ESTAR</h3>
                <ul>
                    <li>Telefone emergência: 192 (SAMU)</li>
                    <li>Mantenha pessoa em local seguro</li>
                    <li>Não mova se houver suspeita de fratura</li>
                    <li>Aguarde profissionais</li>
                </ul>
            `
        },
        {
            id: 'redes-sociais',
            title: 'Comunicação e Redes Sociais',
            content: `
                <h2 class="section-title">Comunicação e Redes Sociais</h2>

                <h3 class="section-subtitle">WHATSAPP</h3>
                <p><strong>Horário de atendimento:</strong> Mesmo horário da loja</p>

                <h4>SCRIPTS DE RESPOSTA PADRÃO:</h4>

                <div class="script-box">
                    <strong>Cliente pergunta disponibilidade:</strong><br><br>
                    "Oi! Tudo bem? Sim, essa peça está disponível!<br>
                    É tamanho [X] e custa R$ [valor].<br>
                    Você quer que eu separe para você passar aqui ou prefere que eu mande mais fotos?<br><br>
                    Estamos na Av Brasil Leste, 185<br>
                    Horário: seg-sex 9:30-12h e 13:30-18:30h / sáb 9:30-12h e 13-16h"
                </div>

                <div class="script-box">
                    <strong>Cliente quer reservar:</strong><br><br>
                    "Claro! Posso reservar até [mesmo dia à tarde / próximo dia].<br>
                    Qual seu nome? Quando você vem buscar?"
                </div>

                <div class="script-box">
                    <strong>Peça vendida:</strong><br><br>
                    "Oi! Infelizmente essa peça acabou de ser vendida<br>
                    Mas temos outras opções lindas! Quer que eu mostre?"
                </div>

                <div class="script-box">
                    <strong>Fora de horário:</strong><br><br>
                    "Oi! Obrigada pela mensagem! Já encerramos o expediente de hoje, mas vou te responder amanhã assim que abrirmos às 9:30, tá?"
                </div>

                <h3 class="section-subtitle">INSTAGRAM</h3>

                <h4>FREQUÊNCIA DE POSTAGENS:</h4>
                <ul>
                    <li><strong>Feed:</strong> 1-2 posts por dia</li>
                    <li><strong>Stories:</strong> 5-10 stories por dia</li>
                </ul>

                <h4>MELHORES HORÁRIOS:</h4>
                <ul>
                    <li>7h-8h (pessoas indo trabalhar)</li>
                    <li>12h-13h (horário de almoço)</li>
                    <li>18h-20h (após trabalho)</li>
                </ul>

                <h4>CONTEÚDO PARA STORIES:</h4>
                <ul>
                    <li>Peças novas chegando</li>
                    <li>Bastidores (organização, listagem)</li>
                    <li>Clientes comprando (com autorização!)</li>
                    <li>Enquetes ("qual preferem?")</li>
                    <li>Caixinhas de perguntas</li>
                    <li>Promoções/novidades</li>
                </ul>

                <div class="info-box important">
                    <strong>NUNCA:</strong>
                    <ul>
                        <li>Demorar mais de 6 horas para responder</li>
                        <li>Ser grosseira ou seca</li>
                        <li>Discutir publicamente</li>
                        <li>Dar informação errada</li>
                        <li>Prometer algo que não pode cumprir</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'dicas-ouro',
            title: 'Dicas de Ouro',
            content: `
                <h2 class="section-title">Segredos do Sucesso</h2>

                <h3 class="section-subtitle">PARA VENDER MAIS</h3>

                <h4>1. Conheça as peças da loja</h4>
                <ul>
                    <li>Saiba o que tem em estoque</li>
                    <li>Decore marcas e tamanhos principais</li>
                    <li>Conheça peças premium</li>
                </ul>

                <h4>2. Crie looks completos</h4>
                <ul>
                    <li>Sempre sugira combinações</li>
                    <li>"Isso fica lindo com..."</li>
                    <li>Monte vitrines inspiradoras</li>
                </ul>

                <h4>3. Seja consultora, não vendedora</h4>
                <ul>
                    <li>Ouça o que cliente precisa</li>
                    <li>Sugira honestamente</li>
                    <li>Construa relacionamento</li>
                </ul>

                <h4>4. Atendimento impecável</h4>
                <ul>
                    <li>Simpatia SEMPRE</li>
                    <li>Mesmo que cliente não compre</li>
                    <li>Cliente satisfeito volta e indica</li>
                </ul>

                <h4>5. Cuide da sua apresentação</h4>
                <ul>
                    <li>Vista-se bem (use peças da loja!)</li>
                    <li>Cabelo arrumado</li>
                    <li>Unhas limpas</li>
                    <li>Sorriso no rosto</li>
                </ul>

                <h3 class="section-subtitle">PARA LISTAR MAIS RÁPIDO</h3>

                <h4>1. Organize antes de começar</h4>
                <ul>
                    <li>Separe por categoria</li>
                    <li>Tenha todos materiais à mão</li>
                </ul>

                <h4>2. Crie sistema</h4>
                <ul>
                    <li>Faça sempre na mesma ordem</li>
                    <li>Use atalhos do sistema</li>
                </ul>

                <h4>3. Tire fotos em lote</h4>
                <ul>
                    <li>Configure iluminação</li>
                    <li>Fotografe várias peças seguidas</li>
                    <li>Edite todas depois</li>
                </ul>

                <h3 class="section-subtitle">PARA TRABALHAR EM EQUIPE</h3>

                <h4>1. Comunique-se</h4>
                <ul>
                    <li>Avise se vai se ausentar</li>
                    <li>Peça ajuda quando precisar</li>
                    <li>Ofereça ajuda</li>
                </ul>

                <h4>2. Divida tarefas</h4>
                <ul>
                    <li>Respeite escala de prioridades</li>
                    <li>Colabore quando necessário</li>
                </ul>

                <h4>3. Mantenha ambiente positivo</h4>
                <ul>
                    <li>Evite fofocas</li>
                    <li>Seja educada</li>
                    <li>Resolva conflitos com maturidade</li>
                </ul>

                <h3 class="section-subtitle">PARA CRESCER</h3>

                <h4>1. Aprenda sempre</h4>
                <ul>
                    <li>Pergunte quando tiver dúvida</li>
                    <li>Observe vendedoras experientes</li>
                    <li>Busque conhecer marcas e tendências</li>
                </ul>

                <h4>2. Seja proativa</h4>
                <ul>
                    <li>Veja o que precisa ser feito</li>
                    <li>Não espere ordens</li>
                    <li>Tome iniciativa</li>
                </ul>

                <h4>3. Cuide dos detalhes</h4>
                <ul>
                    <li>Loja sempre impecável</li>
                    <li>Atendimento sempre excelente</li>
                    <li>Organização sempre em dia</li>
                </ul>
            `
        },
        {
            id: 'glossario',
            title: 'Glossário',
            content: `
                <h2 class="section-title">Vocabulário Essencial</h2>

                <table>
                    <tr>
                        <th>Termo</th>
                        <th>Significado</th>
                    </tr>
                    <tr>
                        <td><strong>BRECHÓ</strong></td>
                        <td>Loja que vende roupas usadas ou seminovas</td>
                    </tr>
                    <tr>
                        <td><strong>CONSIGNAÇÃO</strong></td>
                        <td>Sistema onde fornecedor deixa peças e recebe quando vender</td>
                    </tr>
                    <tr>
                        <td><strong>CURADORIA</strong></td>
                        <td>Seleção criteriosa das peças que são aceitas</td>
                    </tr>
                    <tr>
                        <td><strong>MODA CIRCULAR</strong></td>
                        <td>Reuso e revenda de roupas (sustentabilidade)</td>
                    </tr>
                    <tr>
                        <td><strong>NOVA COM ETIQUETA</strong></td>
                        <td>Roupa nunca usada, ainda com etiqueta original da marca</td>
                    </tr>
                    <tr>
                        <td><strong>SEMINOVA</strong></td>
                        <td>Peça usada poucas vezes, em ótimo estado</td>
                    </tr>
                    <tr>
                        <td><strong>VINTAGE</strong></td>
                        <td>Peça com mais de 20 anos, mas de qualidade e estilo atemporal</td>
                    </tr>
                    <tr>
                        <td><strong>ARARAR</strong></td>
                        <td>Organizar peças nas araras</td>
                    </tr>
                    <tr>
                        <td><strong>LISTAR</strong></td>
                        <td>Processo completo de cadastrar peça no sistema</td>
                    </tr>
                    <tr>
                        <td><strong>COMISSÃO</strong></td>
                        <td>Porcentagem que vendedora recebe sobre vendas</td>
                    </tr>
                    <tr>
                        <td><strong>PIX</strong></td>
                        <td>Pagamento instantâneo</td>
                    </tr>
                    <tr>
                        <td><strong>QR CODE</strong></td>
                        <td>Código de barras quadrado para pagamento</td>
                    </tr>
                    <tr>
                        <td><strong>TAG</strong></td>
                        <td>Etiqueta</td>
                    </tr>
                    <tr>
                        <td><strong>LOOK / OUTFIT</strong></td>
                        <td>Conjunto de peças combinadas</td>
                    </tr>
                    <tr>
                        <td><strong>FAST FASHION</strong></td>
                        <td>Moda rápida e descartável (o oposto do que fazemos)</td>
                    </tr>
                    <tr>
                        <td><strong>SLOW FASHION</strong></td>
                        <td>Moda consciente e sustentável (o que fazemos!)</td>
                    </tr>
                    <tr>
                        <td><strong>STATEMENT PIECE</strong></td>
                        <td>Peça de destaque que chama atenção</td>
                    </tr>
                    <tr>
                        <td><strong>BASIC</strong></td>
                        <td>Peça básica, atemporal</td>
                    </tr>
                </table>
            `
        },
        {
            id: 'primeiro-dia',
            title: 'Checklist Primeiro Dia',
            content: `
                <h2 class="section-title">Checklist do Primeiro Dia</h2>

                <h3 class="section-subtitle">DOCUMENTAÇÃO</h3>
                <ul class="checklist">
                    <li>Contrato assinado</li>
                    <li>Documentos entregues</li>
                    <li>Cadastro no sistema realizado</li>
                    <li>Uniforme recebido (se houver)</li>
                </ul>

                <h3 class="section-subtitle">ACESSO</h3>
                <ul class="checklist">
                    <li>Chave da loja (se aplicável)</li>
                    <li>Código do alarme anotado</li>
                    <li>Login do sistema</li>
                    <li>Senha do Wi-Fi</li>
                    <li>Grupo do WhatsApp</li>
                </ul>

                <h3 class="section-subtitle">CONHECIMENTO</h3>
                <ul class="checklist">
                    <li>Tour completo pela loja</li>
                    <li>Localização de estoque</li>
                    <li>Localização de produtos de limpeza</li>
                    <li>Onde ficam sacolas, etiquetas, etc</li>
                    <li>Cofre e caixa</li>
                    <li>Banheiro e copa (se houver)</li>
                </ul>

                <h3 class="section-subtitle">TREINOS</h3>
                <ul class="checklist">
                    <li>Abertura da loja</li>
                    <li>Sistema de vendas</li>
                    <li>Máquina de cartão</li>
                    <li>Como listar peças</li>
                    <li>Padrão de atendimento</li>
                    <li>Fechamento da loja</li>
                </ul>

                <h3 class="section-subtitle">CONTATOS</h3>
                <ul class="checklist">
                    <li>Número da gerente</li>
                    <li>Números das colegas</li>
                    <li>Contatos de emergência</li>
                    <li>Grupo da equipe</li>
                </ul>
            `
        },
        {
            id: 'mensagem-final',
            title: 'Mensagem Final',
            content: `
                <h2 class="section-title">Bem-Vinda à Família!</h2>

                <p>Você chegou ao final desta cartilha! Parabéns por ler tudo com atenção.</p>

                <p>Lembre-se: este é apenas o começo. Você vai aprender muito mais no dia a dia, com a prática e com suas colegas.</p>

                <h3 class="section-subtitle">NOSSOS VALORES</h3>
                <ul>
                    <li>Sustentabilidade em primeiro lugar</li>
                    <li>Paixão pelo que fazemos</li>
                    <li>Excelência no atendimento</li>
                    <li>Trabalho em equipe</li>
                    <li>Aprendizado contínuo</li>
                    <li>Gentileza sempre</li>
                </ul>

                <div class="info-box success">
                    <strong>NUNCA ESQUEÇA:</strong><br><br>
                    "Somos nota mil" não é apenas um slogan. É nosso compromisso diário com cada cliente, cada fornecedor, cada peça e cada colega.
                </div>

                <p>Você faz parte de algo maior: um movimento de transformação através da moda sustentável.</p>

                <p>Cada peça que você lista, cada cliente que você atende, cada sorriso que você dá - tudo isso contribui para mudar o mundo.</p>

                <h3 class="section-subtitle">CONTE COM A GENTE!</h3>
                <p>Estamos aqui para te apoiar, ensinar e crescer junto com você.</p>

                <ul>
                    <li>Dúvidas? Pergunte!</li>
                    <li>Ideias? Compartilhe!</li>
                    <li>Dificuldades? Fale com a gente!</li>
                </ul>

                <div class="contact-info">
                    <p><strong>Bem-vinda à família Apega Desapega!</strong></p>
                    <p>Av. Brasil Leste, 185 - Passo Fundo/RS</p>
                    <p>(54) 9.9609-6202</p>
                    <p>@apegadesapegars</p>
                </div>
            `
        }
    ]
};
