const painel = document.getElementById("painel");
const campoTexto = document.getElementById("campoTexto");
const botaoEnviar = document.getElementById("botaoEnviar");

let etapa = "menu_orgaos"; 

function mostrarMenuPrincipal() {
    let mensagem = "<b>Sistema:</b> Olá, seja bem-vindo à nossa plataforma!<br>" +
                   "Por favor, selecione o órgão que deseja ir:<br>" +
                   "1 - INSS<br>" +
                   "2 - Assistência Social<br>" +
                   "3 - Ministério do Trabalho";
    painel.innerHTML = mensagem;
}

window.onload = mostrarMenuPrincipal;

campoTexto.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        botaoEnviar.click();
    }
});

botaoEnviar.addEventListener("click", function() {
    let resposta = campoTexto.value.trim();

    if (resposta === "") {
        return; 
    }

    painel.innerHTML += "<br><br><b>Você digitou:</b> " + resposta;

    if (etapa === "finalizado") {
        etapa = "menu_orgaos";
        mostrarMenuPrincipal();
        campoTexto.value = "";
        return;
    }

    if (etapa === "menu_orgaos") {

        if (resposta === "1") {
            painel.innerHTML += "<br><b>Sistema:</b> Você selecionou INSS. Escolha uma das opções mais procuradas:<br>" +
                                "1 - Benefícios por Incapacidade<br>" +
                                "2 - Aposentadorias<br>" +
                                "3 - Pensão por Morte<br>" +
                                "4 - Benefício de Prestação Continuada (BPC/LOAS)<br>" +
                                "0 - Voltar ao Menu Anterior";
            etapa = "menu_inss";
        } 
        else if (resposta === "2") {
            painel.innerHTML += "<br><b>Sistema:</b> Você selecionou Assistência Social. Escolha uma das opções mais procuradas:<br>" +
                                "1 - Inscrição ou Atualização do Cadastro Único (CadÚnico)<br>" +
                                "2 - Programa Bolsa Família<br>" +
                                "3 - Carteira do Idoso<br>" +
                                "0 - Voltar ao Menu Anterior";
            etapa = "menu_assistencia";
        } 
        else if (resposta === "3") {
            painel.innerHTML += "<br><b>Sistema:</b> Você selecionou Ministério do Trabalho. Escolha uma das opções mais procuradas:<br>" +
                                "1 - Seguro-Desemprego<br>" +
                                "2 - Carteira de Trabalho Digital (Problemas ou Erros)<br>" +
                                "3 - Reclamação Trabalhista / Fiscalização<br>" +
                                "0 - Voltar ao Menu Anterior";
            etapa = "menu_trabalho";
        } 
        else {
            painel.innerHTML += "<br><b>Sistema:</b> Opção inválida. Digite 1 para INSS, 2 para Assistência Social ou 3 para Min. do Trabalho.";
        }

    }
    else if (etapa === "menu_inss") {

        if (resposta === "0") {
            etapa = "menu_orgaos";
            mostrarMenuPrincipal();
        }
        else if (resposta === "1") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para <b>Incapacidade</b>:<br><br>" +
                                "<b>Documentos base:</b><br>" +
                                "- Documento de identificação oficial com foto: RG, CNH, Passaporte ou Carteira de Órgão de Classe (OAB, CRM, etc.). O documento deve estar atualizado e não pode ter rasuras.<br>" +
                                "- CPF: Do titular e, se houver, dos dependentes.<br>" +
                                "- Comprovante de residência: Contas de água, luz ou telefone fixo emitidas nos últimos 3 meses em nome do requerente.<br>" +
                                "- Extrato do CNIS: É o histórico de todas as suas contribuições. Pode ser baixado diretamente pelo aplicativo Meu INSS.<br><br>" +
                                "<b>Documentos específicos:</b><br>" +
                                "- Atestado ou Laudo Médico Original: Deve conter o diagnóstico por extenso, a descrição da condição de saúde, o código CID, a assinatura do médico com carimbo e CRM, e o tempo estimado de afastamento recomendado.<br>" +
                                "- Exames Complementares: Resultados de exames de imagem (raios-X, ressonâncias), exames de sangue ou relatórios de tratamentos que comprovem a gravidade da doença.<br>" +
                                "- Declaração da Empresa (para trabalhadores CLT): Documento preenchido pelo empregador informando o último dia trabalhado pelo funcionário antes do afastamento.";
            etapa = "finalizado";
        } 
        else if (resposta === "2") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para <b>Aposentadorias</b>:<br><br>" +
                                "<b>Documentos base:</b><br>" +
                                "- Documento de identificação oficial com foto: RG, CNH, Passaporte ou Carteira de Órgão de Classe (OAB, CRM, etc.). O documento deve estar atualizado e não pode ter rasuras.<br>" +
                                "- CPF: Do titular e, se houver, dos dependentes.<br>" +
                                "- Comprovante de residência: Contas de água, luz ou telefone fixo emitidas nos últimos 3 meses em nome do requerente.<br>" +
                                "- Extrato do CNIS: É o histórico de todas as suas contribuições. Pode ser baixado diretamente pelo aplicativo Meu INSS.<br><br>" +
                                "<b>Documentos específicos:</b><br>" +
                                "- Carteira de Trabalho e Previdência Social (CTPS): Todas as carteiras físicas que o segurado possuir.<br>" +
                                "- Carnês de Contribuição (Guias da GPS): Essenciais para trabalhadores autônomos ou facultativos.<br><br>" +
                                "<b>Para Aposentadoria Especial (atividades insalubres/perigosas):</b><br>" +
                                "- PPP (Perfil Profissiográfico Previdenciário): Fornecido pelas empresas onde o segurado trabalhou exposto a agentes nocivos.<br>" +
                                "- LTCAT: Quando necessário complementar o PPP.<br><br>" +
                                "<b>Para Aposentadoria de Professor:</b><br>" +
                                "- Diplomas, registros em carteira e declarações do estabelecimento de ensino que atestem o exercício exclusivo da função de magistério.";
            etapa = "finalizado";
        }
        else if (resposta === "3") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para <b>Pensão por Morte</b>:<br><br>" +
                                "<b>Documentos base:</b><br>" +
                                "- Documento de identificação oficial com foto e CPF do dependente.<br>" +
                                "- Certidão de Óbito ou documento que comprove a morte presumida.<br>" +
                                "- Documentos que comprovem a qualidade de segurado do falecido (CTPS, CNIS ou carnês).<br><br>" +
                                "<b>Documentos específicos (Dependência Econômica e Vínculo):</b><br>" +
                                "- Para Cônjuge ou Companheiro(a): Certidão de Casamento ou União Estável. Na falta desta, comprovações como conta conjunta, mesma residência ou certidão de filhos.<br>" +
                                "- Para Filhos menores de 21 anos: Certidão de Nascimento.<br>" +
                                "- Para Pais ou Irmãos inválidos: Comprovação de dependência econômica e laudo médico de invalidez.";
            etapa = "finalizado";
        }
        else if (resposta === "4") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para <b>BPC/LOAS</b>:<br><br>" +
                                "<b>Documentos base:</b><br>" +
                                "- Inscrição atualizada e obrigatória no Cadastro Único (CadÚnico).<br>" +
                                "- Documento de identificação com foto e CPF de todos os membros do grupo familiar que residem na mesma casa.<br><br>" +
                                "<b>Documentos específicos:</b><br>" +
                                "- Para o BPC Idoso (65 anos ou mais): Comprovantes de rendimentos da família para cálculo da renda per capita inferior a 1/4 do salário mínimo.<br>" +
                                "- Para o BPC Deficiente: Laudos médicos, exames, relatórios detalhados da condição de saúde e receitas de medicamentos que comprovem o impedimento de longo prazo (mínimo 2 anos).";
            etapa = "finalizado";
        }
        else {
            painel.innerHTML += "<br><b>Sistema:</b> Opção inválida. Escolha de 1 a 4 para os serviços do INSS, ou 0 para voltar.";
        }

    }
    else if (etapa === "menu_assistencia") {

        if (resposta === "0") {
            etapa = "menu_orgaos";
            mostrarMenuPrincipal();
        }
        else if (resposta === "1") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para o <b>Cadastro Único (CadÚnico)</b>:<br><br>" +
                                "<b>Documento do Responsável pela Família (RF):</b><br>" +
                                "- CPF ou Título de Eleitor (preferencialmente).<br>" +
                                "- Documento de identificação com foto.<br><br>" +
                                "<b>Documentos de TODOS os membros da família:</b><br>" +
                                "- RG, CPF, Certidão de Nascimento ou Casamento, Carteira de Trabalho ou Título de Eleitor.<br><br>" +
                                "<b>Documentos complementares recomendados:</b><br>" +
                                "- Comprovante de residência atual (de preferência conta de luz).<br>" +
                                "- Comprovante de matrícula escolar de crianças e adolescentes (se houver).";
            etapa = "finalizado";
        }
        else if (resposta === "2") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos e requisitos para o <b>Bolsa Família</b>:<br><br>" +
                                "<b>Documentos necessários:</b><br>" +
                                "- Estar com o Cadastro Único (CadÚnico) atualizado nos últimos 24 meses.<br>" +
                                "- CPF e documento com foto do Responsável Familiar.<br>" +
                                "- Documentos de identificação de todos os familiares que moram na residência.<br><br>" +
                                "<b>Condicionalidades obrigatórias a apresentar:</b><br>" +
                                "- Caderneta de vacinação atualizada das crianças.<br>" +
                                "- Comprovante de frequência escolar de crianças e adolescentes de 4 a 17 anos.<br>" +
                                "- Acompanhamento pré-natal para gestantes.";
            etapa = "finalizado";
        }
        else if (resposta === "3") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para a <b>Carteira do Idoso</b>:<br><br>" +
                                "<b>Requisitos básicos:</b><br>" +
                                "- Ter idade igual ou superior a 60 anos.<br>" +
                                "- Renda individual igual ou inferior a 2 salários mínimos.<br><br>" +
                                "<b>Documentos necessários:</b><br>" +
                                "- Documento de identidade com foto (RG, CNH, etc.).<br>" +
                                "- CPF do requerente.<br>" +
                                "- Número de Identificação Social (NIS) ativo no Cadastro Único (fornecido pelo CRAS).";
            etapa = "finalizado";
        }
        else {
            painel.innerHTML += "<br><b>Sistema:</b> Opção inválida. Escolha de 1 a 3 para a Assistência Social, ou 0 para voltar.";
        }

    }
    else if (etapa === "menu_trabalho") {

        if (resposta === "0") {
            etapa = "menu_orgaos";
            mostrarMenuPrincipal();
        }
        else if (resposta === "1") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para solicitar o <b>Seguro-Desemprego</b>:<br><br>" +
                                "<b>Documentos base:</b><br>" +
                                "- Documento de identificação oficial com foto e CPF.<br>" +
                                "- Carteira de Trabalho e Previdência Social (Física ou Digital).<br>" +
                                "- Documento de Requerimento do Seguro-Desemprego (entregue pelo empregador no desligamento).<br><br>" +
                                "<b>Documentos específicos de rescisão:</b><br>" +
                                "- Termo de Rescisão do Contrato de Trabalho (TRCT).<br>" +
                                "- Termo de Homologação de Rescisão ou Termo de Quitação.<br>" +
                                "- Comprovantes de depósitos do FGTS ou extrato rescisório.";
            etapa = "finalizado";
        }
        else if (resposta === "2") {
            painel.innerHTML += "<br><b>Sistema:</b> Orientações e documentos para problemas na <b>Carteira de Trabalho Digital</b>:<br><br>" +
                                "<b>Informações importantes:</b><br>" +
                                "- Divergências de dados cadastrais (nome, CPF, filiação) devem ser corrigidas diretamente pelo portal Meu Gov.br.<br>" +
                                "- Erros em contratos de trabalho (data de admissão, salário, férias) devem ser corrigidos e enviados pelo próprio empregador através do eSocial.<br><br>" +
                                "<b>Documentos para contestação formal no Ministério do Trabalho (via formulário ou atendimento presencial):</b><br>" +
                                "- RG e CPF.<br>" +
                                "- Extrato do CNIS atualizado.<br>" +
                                "- Carteiras de Trabalho físicas originais (para comprovar vínculos antigos que não aparecem no sistema).";
            etapa = "finalizado";
        }
        else if (resposta === "3") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para <b>Reclamação Trabalhista ou Fiscalização</b>:<br><br>" +
                                "<b>Documentos do trabalhador:</b><br>" +
                                "- RG, CPF e comprovante de residência.<br>" +
                                "- Carteira de Trabalho (Digital ou Física).<br><br>" +
                                "<b>Provas do vínculo e das irregularidades alegadas:</b><br>" +
                                "- Extrato de FGTS atualizado.<br>" +
                                "- Contracheques/Holerites ou extratos bancários que comprovem recebimento (or ausência dele).<br>" +
                                "- Registro de ponto, cartões de ponto ou relatórios de horários (para horas extras).<br>" +
                                "- Mensagens, e-mails ou testemunhas que ajudem a comprovar a situação relatada para a fiscalização.";
            etapa = "finalizado";
        }
        else {
            painel.innerHTML += "<br><b>Sistema:</b> Opção inválida. Escolha de 1 a 3 para o Ministério do Trabalho, ou 0 para voltar.";
        }

    }

    if (etapa === "finalizado") {
        painel.innerHTML += "<br><br><b>Sistema:</b> Atendimento encerrado. Para realizar uma nova consulta, digite 0.";
    }

    campoTexto.value = "";
});