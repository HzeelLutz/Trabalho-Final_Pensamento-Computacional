// =================================================================
// 1. MAPEAMENTO DOS ELEMENTOS DO HTML
// =================================================================
const painel = document.getElementById("painel");
const campoTexto = document.getElementById("campoTexto");
const botaoEnviar = document.getElementById("botaoEnviar");

// =================================================================
// 2. CONTROLE DE ETAPAS (A CHAVE DO PROJETO)
// =================================================================
// Esta variável diz em qual "tela" ou "menu" o usuário está agora.
// Começa no 'menu_principal'. Conforme ele responde, mudamos esse texto.
let etapa = "menu_principal"; 

// =================================================================
// 3. MENSAGEM INICIAL
// =================================================================
function mostrarMenuPrincipal() {
    let mensagem = "<b>Sistema:</b> Olá, seja bem-vindo à nossa plataforma!<br>" +
                   "Selecione a opção de acordo com o que precisa:<br>" +
                   "1 - Para agendamento<br>" +
                   "2 - Para documentações";
    painel.innerHTML = mensagem;
}

// Roda a mensagem inicial assim que a página carrega
window.onload = mostrarMenuPrincipal;

// =================================================================
// 4. PROCESSAMENTO DAS RESPOSTAS
// =================================================================
botaoEnviar.addEventListener("click", function() {
    
    // Pega o que o usuário digitou e limpa espaços extras
    let resposta = campoTexto.value.trim();

    // Se o usuário clicou em enviar sem digitar nada, o código para aqui
    if (resposta === "") {
        return; 
    }

    // Mostra na tela o que o usuário acabou de digitar (efeito chat)
    painel.innerHTML += "<br><br><b>Você digitou:</b> " + resposta;

    // -------------------------------------------------------------
    // BLOCO A: SE O USUÁRIO ESTIVER NO MENU PRINCIPAL
    // -------------------------------------------------------------
    if (etapa === "menu_principal") {
        
        if (resposta === "1") {
            painel.innerHTML += "<br><b>Sistema:</b> Dias e horários disponíveis:<br>- Segunda-feira às 14:00<br>- Quarta-feira às 09:00<br>- Sexta-feira às 16:00";
            // Como aqui encerra o fluxo do agendamento, não mudamos a etapa, ou pode resetar.
        } 
        else if (resposta === "2") {
            painel.innerHTML += "<br><b>Sistema:</b> Por favor, selecione o órgão que deseja ir:<br>" +
                                "1 - INSS<br>" +
                                "2 - Assistência Social<br>" +
                                "3 - Ministério do Trabalho";
            
            // ATENÇÃO AQUI: O usuário escolheu documentos, então avançamos ele de etapa!
            etapa = "menu_orgaos"; 
        } 
        else {
            painel.innerHTML += "<br><b>Sistema:</b> Opção inválida. Digite 1 para Agendamento ou 2 para Documentações.";
        }

    }
    // -------------------------------------------------------------
    // BLOCO B: SE O USUÁRIO ESTIVER NO MENU DE ÓRGÃOS
    // -------------------------------------------------------------
    else if (etapa === "menu_orgaos") {

        if (resposta === "1") {
            painel.innerHTML += "<br><b>Sistema:</b> Você selecionou INSS. Escolha uma das opções mais procuradas:<br>" +
                                "1 - Benefícios por Incapacidade<br>" +
                                "2 - Aposentadorias<br>" +
                                "3 - Pensão por Morte<br>" +
                                "4 - Benefício de Prestação Concedida (BPC/LOAS)";
            
            // Avançamos o usuário para a etapa de serviços do INSS
            etapa = "menu_inss";
        } 
        else if (resposta === "2") {
            painel.innerHTML += "<br><b>Sistema:</b> [Aqui você pode colocar os documentos da Assistência Social futuramente]";
        } 
        else if (resposta === "3") {
            painel.innerHTML += "<br><b>Sistema:</b> [Aqui você pode colocar os documentos do Ministério do Trabalho futuramente]";
        } 
        else {
            painel.innerHTML += "<br><b>Sistema:</b> Opção inválida. Digite 1 para INSS, 2 para Assistência Social ou 3 para Min. do Trabalho.";
        }

    }
    // -------------------------------------------------------------
    // BLOCO C: SE O USUÁRIO ESTIVER NO MENU DO INSS
    // -------------------------------------------------------------
    else if (etapa === "menu_inss") {

        if (resposta === "1") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para <b>Incapacidade</b>:<br><br>" +
                                "<b>Documentos base:</b><br>" +
                                "- Identificação oficial com foto (RG, CNH, Passaporte)<br>" +
                                "- CPF (Titular e dependentes)<br>" +
                                "- Comprovante de residência (últimos 3 meses)<br>" +
                                "- Extrato do CNIS (Baixado no Meu INSS)<br><br>" +
                                "<b>Documentos específicos:</b><br>" +
                                "- Atestado ou Laudo Médico Original (com CID e carimbo)<br>" +
                                "- Exames Complementares (Raios-X, relatórios)<br>" +
                                "- Declaração da Empresa (para trabalhadores CLT)";
            
            // Opcional: Voltar para o menu principal após finalizar
            etapa = "finalizado";
        } 
        else if (resposta === "2") {
            painel.innerHTML += "<br><b>Sistema:</b> Documentos necessários para <b>Aposentadorias</b>:<br><br>" +
                                "<b>Documentos base:</b><br>" +
                                "- Identificação oficial com foto e CPF<br>" +
                                "- Comprovante de residência e Extrato do CNIS<br><br>" +
                                "<b>Documentos específicos:</b><br>" +
                                "- Carteira de Trabalho (CTPS físicas)<br>" +
                                "- Carnês de Contribuição (Guias da GPS)<br><br>" +
                                "<b>Para Especial (Insalubre):</b> Perfil Profissiográfico Previdenciário (PPP)<br>" +
                                "<b>Para Professor:</b> Diplomas e registros que atestem o magistério.";
            
            etapa = "finalizado";
        }
        else if (resposta === "3") {
            painel.innerHTML += "<br><b>Sistema:</b> [Aqui você insere os documentos de Pensão por Morte]";
        }
        else if (resposta === "4") {
            painel.innerHTML += "<br><b>Sistema:</b> [Aqui você insere os documentos de BPC/LOAS]";
        }
        else {
            painel.innerHTML += "<br><b>Sistema:</b> Opção inválida. Escolha de 1 a 4 para os serviços do INSS.";
        }

    }
    // -------------------------------------------------------------
    // BLOCO DE FECHAMENTO (Caso tenha terminado o fluxo)
    // -------------------------------------------------------------
    if (etapa === "finalizado") {
        painel.innerHTML += "<br><br><b>Sistema:</b> Atendimento encerrado. Se precisar de algo mais, atualize a página.";
        // Desativa o campo para o usuário não digitar mais nada
        campoTexto.disabled = true;
        botaoEnviar.disabled = true;
    }

    // Limpa a caixinha de texto para a próxima pergunta
    campoTexto.value = "";
});