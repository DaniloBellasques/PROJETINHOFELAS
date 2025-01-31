// script.js

// Salvar dados no sessionStorage
function saveData() {
 
    //saveData da pagina ETAPA1
    if (document.getElementById('nome')) {
        sessionStorage.setItem('nome', document.getElementById('nome').value);
    }
    if (document.getElementById('email')){
        sessionStorage.setItem('email', document.getElementById('email').value);
    }
    if (document.getElementById('endereco')){
        sessionStorage.setItem('endereco', document.getElementById('endereco').value);
    }
    if (document.getElementById('bairro')){
        sessionStorage.setItem('bairro', document.getElementById('bairro').value);
    }
    if (document.getElementById('cidade')){
        sessionStorage.setItem('cidade', document.getElementById('cidade').value);
    }
    if (document.getElementById('estado')){
        sessionStorage.setItem('estado', document.getElementById('estado').value);
    }
    if (document.getElementById('cep')){
        sessionStorage.setItem('cep', document.getElementById('cep').value);
    }
    if (document.getElementById('tel_res')){
        sessionStorage.setItem('tel_res', document.getElementById('tel_res').value);
    }
    if (document.getElementById('telefone')){
        sessionStorage.setItem('telefone', document.getElementById('telefone').value);
    }
    if (document.getElementById('tel_emergencia')){
        sessionStorage.setItem('tel_emergencia', document.getElementById('tel_emergencia').value);
    }
    if (document.getElementById('contato')){
        sessionStorage.setItem('contato', document.getElementById('contato').value);
    }
    if (document.getElementById('data_nascimento')){
        sessionStorage.setItem('data_nascimento', document.getElementById('data_nascimento').value);
    }
    if (document.getElementById('profissao')){
        sessionStorage.setItem('profissao', document.getElementById('profissao').value);
    }
       
   
        //saveData da ETAPA2
        if (document.getElementById('queixa_principal')) {
            sessionStorage.setItem('queixa_principal', document.getElementById('queixa_principal').value);
        }
        
        if (document.querySelector('input[name="frequenta_podologo"]:checked')) {
            sessionStorage.setItem('frequenta_podologo', document.querySelector('input[name="frequenta_podologo"]:checked').value);
        }
        
        if (document.getElementById('frequencia_podologo')) {
            sessionStorage.setItem('frequencia_podologo', document.getElementById('frequencia_podologo').value);
        }
        
        if (document.querySelector('input[name="uso_medicamentos"]:checked')) {
            sessionStorage.setItem('uso_medicamentos', document.querySelector('input[name="uso_medicamentos"]:checked').value);
        }
        
        if (document.getElementById('quais_medicamentos')) {
            sessionStorage.setItem('quais_medicamentos', document.getElementById('quais_medicamentos').value);
        }
        
        if (document.querySelector('input[name="alergico"]:checked')) {
            sessionStorage.setItem('alergico', document.querySelector('input[name="alergico"]:checked').value);
        }
        
        if (document.getElementById('quais_substancias')) {
            sessionStorage.setItem('quais_substancias', document.getElementById('quais_substancias').value);
        }
        
        if (document.querySelector('input[name="posicao_trabalho"]:checked')) {
            sessionStorage.setItem('posicao_trabalho', document.querySelector('input[name="posicao_trabalho"]:checked').value);
        }
        
        if (document.getElementById('duracao_trabalho')) {
            sessionStorage.setItem('duracao_trabalho', document.getElementById('duracao_trabalho').value);
        }
        
        if (document.querySelector('input[name="tempo_em_pe"]:checked')) {
            sessionStorage.setItem('tempo_em_pe', document.querySelector('input[name="tempo_em_pe"]:checked').value);
        }
        
        if (document.querySelector('input[name="tempo_sentado"]:checked')) {
            sessionStorage.setItem('tempo_sentado', document.querySelector('input[name="tempo_sentado"]:checked').value);
        }
        
        if (document.querySelector('input[name="tempo_caminhando"]:checked')) {
            sessionStorage.setItem('tempo_caminhando', document.querySelector('input[name="tempo_caminhando"]:checked').value);
        }
        
        if (document.getElementById('numero_calcado')) {
            sessionStorage.setItem('numero_calcado', document.getElementById('numero_calcado').value);
        }
        
        if (document.getElementById('tipo_calcado_diario')) {
            sessionStorage.setItem('tipo_calcado_diario', document.getElementById('tipo_calcado_diario').value);
        }
        
        if (document.getElementById('tipo_calcado_qual')) {
            sessionStorage.setItem('tipo_calcado_qual', document.getElementById('tipo_calcado_qual').value);
        }
        
        if (document.querySelector('input[name="fumante"]:checked')) {
            sessionStorage.setItem('fumante', document.querySelector('input[name="fumante"]:checked').value);
        }
        
        if (document.querySelector('input[name="ciclo_menstruacao_regular"]:checked')) {
            sessionStorage.setItem('ciclo_menstruacao_regular', document.querySelector('input[name="ciclo_menstruacao_regular"]:checked').value);
        }
        
        if (document.querySelector('input[name="gestante"]:checked')) {
            sessionStorage.setItem('gestante', document.querySelector('input[name="gestante"]:checked').value);
        }
        
        if (document.querySelector('input[name="amamentando"]:checked')) {
            sessionStorage.setItem('amamentando', document.querySelector('input[name="amamentando"]:checked').value);
        }
        
        if (document.getElementById('dum')) {
            sessionStorage.setItem('dum', document.getElementById('dum').value);
        }
        
        if (document.querySelector('input[name="pratica_atividade_fisica"]:checked')) {
            sessionStorage.setItem('pratica_atividade_fisica', document.querySelector('input[name="pratica_atividade_fisica"]:checked').value);
        }
        
        if (document.getElementById('frequencia_atividade_fisica')) {
            sessionStorage.setItem('frequencia_atividade_fisica', document.getElementById('frequencia_atividade_fisica').value);
        }
        
        if (document.getElementById('esporte_atividade')) {
            sessionStorage.setItem('esporte_atividade', document.getElementById('esporte_atividade').value);
        }
        
        if (document.getElementById('tipo_calcado_esporte')) {
            sessionStorage.setItem('tipo_calcado_esporte', document.getElementById('tipo_calcado_esporte').value);
        }
   
 
    // Save data to sessionStorage
if (document.querySelector('input[name="Osteoporose"]:checked')) {
    sessionStorage.setItem('Osteoporose', document.querySelector('input[name="Osteoporose"]:checked').value);
}
if (document.querySelector('input[name="Renal"]:checked')) {
    sessionStorage.setItem('Renal', document.querySelector('input[name="Renal"]:checked').value);
}
if (document.querySelector('input[name="Epilepsia"]:checked')) {
    sessionStorage.setItem('Epilepsia', document.querySelector('input[name="Epilepsia"]:checked').value);
}
if (document.querySelector('input[name="Quimioterapia_Radioterapia"]:checked')) {
    sessionStorage.setItem('Quimioterapia_Radioterapia', document.querySelector('input[name="Quimioterapia_Radioterapia"]:checked').value);
}
if (document.querySelector('input[name="Hipotireoidismo"]:checked')) {
    sessionStorage.setItem('Hipotireoidismo', document.querySelector('input[name="Hipotireoidismo"]:checked').value);
}
if (document.querySelector('input[name="Hepatite"]:checked')) {
    sessionStorage.setItem('Hepatite', document.querySelector('input[name="Hepatite"]:checked').value);
}
if (document.querySelector('input[name="Antecedente_Oncologico"]:checked')) {
    sessionStorage.setItem('Antecedente_Oncologico', document.querySelector('input[name="Antecedente_Oncologico"]:checked').value);
}
if (document.querySelector('input[name="Cardiopatia"]:checked')) {
    sessionStorage.setItem('Cardiopatia', document.querySelector('input[name="Cardiopatia"]:checked').value);
}
if (document.querySelector('input[name="Hipertensao"]:checked')) {
    sessionStorage.setItem('Hipertensao', document.querySelector('input[name="Hipertensao"]:checked').value);
}
if (document.querySelector('input[name="Reumatismo"]:checked')) {
    sessionStorage.setItem('Reumatismo', document.querySelector('input[name="Reumatismo"]:checked').value);
}
if (document.querySelector('input[name="Hanseniase"]:checked')) {
    sessionStorage.setItem('Hanseniase', document.querySelector('input[name="Hanseniase"]:checked').value);
}
if (document.querySelector('input[name="Cirurgia_MMII"]:checked')) {
    sessionStorage.setItem('Cirurgia_MMII', document.querySelector('input[name="Cirurgia_MMII"]:checked').value);
}
if (document.querySelector('input[name="Marca_Passo"]:checked')) {
    sessionStorage.setItem('Marca_Passo', document.querySelector('input[name="Marca_Passo"]:checked').value);
}
if (document.querySelector('input[name="Hipotensao"]:checked')) {
    sessionStorage.setItem('Hipotensao', document.querySelector('input[name="Hipotensao"]:checked').value);
}
if (document.querySelector('input[name="Insulina"]:checked')) {
    sessionStorage.setItem('Insulina', document.querySelector('input[name="Insulina"]:checked').value);
}
if (document.querySelector('input[name="Dieta_Hidrica"]:checked')) {
    sessionStorage.setItem('Dieta_Hidrica', document.querySelector('input[name="Dieta_Hidrica"]:checked').value);
}
if (document.querySelector('input[name="Injetavel"]:checked')) {
    sessionStorage.setItem('Injetavel', document.querySelector('input[name="Injetavel"]:checked').value);
}
if (document.querySelector('input[name="Dieta_Alimentar"]:checked')) {
    sessionStorage.setItem('Dieta_Alimentar', document.querySelector('input[name="Dieta_Alimentar"]:checked').value);
}
if (document.querySelector('input[name="Via_Oral"]:checked')) {
    sessionStorage.setItem('Via_Oral', document.querySelector('input[name="Via_Oral"]:checked').value);
}
if (document.querySelector('input[name="Taxa_Glicemica"]')) {
    sessionStorage.setItem('Taxa_Glicemica', document.querySelector('input[name="Taxa_Glicemica"]').value);
}
if (document.querySelector('input[name="Alteracoes_Vasculares"]:checked')) {
    sessionStorage.setItem('Alteracoes_Vasculares', document.querySelector('input[name="Alteracoes_Vasculares"]:checked').value);
}

// Submission function
function submitEtapa3Data() {
    // Create etapa3Data object from sessionStorage
    const etapa3Data = {
        Osteoporose: sessionStorage.getItem('Osteoporose'),
        Renal: sessionStorage.getItem('Renal'),
        Epilepsia: sessionStorage.getItem('Epilepsia'),
        Quimioterapia_Radioterapia: sessionStorage.getItem('Quimioterapia_Radioterapia'),
        Hipotireoidismo: sessionStorage.getItem('Hipotireoidismo'),
        Hepatite: sessionStorage.getItem('Hepatite'),
        Antecedente_Oncologico: sessionStorage.getItem('Antecedente_Oncologico'),
        Cardiopatia: sessionStorage.getItem('Cardiopatia'),
        Hipertensao: sessionStorage.getItem('Hipertensao'),
        Reumatismo: sessionStorage.getItem('Reumatismo'),
        Hanseniase: sessionStorage.getItem('Hanseniase'),
        Cirurgia_MMII: sessionStorage.getItem('Cirurgia_MMII'),
        Marca_Passo: sessionStorage.getItem('Marca_Passo'),
        Hipotensao: sessionStorage.getItem('Hipotensao'),
        Insulina: sessionStorage.getItem('Insulina'),
        Dieta_Hidrica: sessionStorage.getItem('Dieta_Hidrica'),
        Injetavel: sessionStorage.getItem('Injetavel'),
        Dieta_Alimentar: sessionStorage.getItem('Dieta_Alimentar'),
        Via_Oral: sessionStorage.getItem('Via_Oral'),
        Taxa_Glicemica: parseFloat(sessionStorage.getItem('Taxa_Glicemica')), // Converte para número
        Alteracoes_Vasculares: sessionStorage.getItem('Alteracoes_Vasculares'),
        id_cliente: sessionStorage.getItem('id_cliente') // Certifique-se de que isso está definido
    };

    // Log the data for debugging
    console.log('Submitting Etapa3 Data:', etapa3Data);

    // Submit data to Sequelize
    Etapa3.create(etapa3Data)
        .then(result => {
            console.log('Data inserted successfully:', result);

            // Clear session storage after successful submission
            Object.keys(etapa3Data).forEach(key => {
                if (key !== 'id_cliente') {
                    sessionStorage.removeItem(key);
                }
            });

            // Redirect or show success message
            window.location.href = '/next-step'; // Adjust as needed
        })
        .catch(error => {
            console.error('Error inserting data:', error);
            if (error.errors) {
                error.errors.forEach(err => {
                    console.error(`${err.path}: ${err.message}`);
                });
            }
            alert('Erro ao salvar dados. Por favor, verifique as informações e tente novamente.');
        });
}
          
          // Attach to form submission if needed
          document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            submitEtapa3Data(); // Call our custom submission function
          });
   
    //etapa4
    document.getElementById('submit-button').addEventListener('click', () => {
        // Seleciona apenas os checkboxes dentro do contêiner #condicoes-pe
        const checkboxes = document.querySelectorAll('#condicoes_pe input[type="checkbox"]');
     
        const selecoes = [];
        checkboxes.forEach((checkbox) => {
          selecoes.push({
            id_condicao_pe: parseInt(checkbox.dataset.condicao),
            id_lado_pe: parseInt(checkbox.value),
            selecionado: checkbox.checked
          });
        });
     
        console.log(selecoes); // Envia ou processa os dados normalmente
      });
 
      // Salvar os dados temporariamente no sessionStorage
    const form = document.getElementById('form-avaliacao');
    const submitButton = document.getElementById('submit-button');
 
    form.addEventListener('change', () => {
      // Captura as seleções do formulário
      const tipoMarcha = document.querySelector('input[name="tipo_marcha"]:checked')?.value || null;
      const marchaDetalhe = document.getElementById('marcha-detalhe').value || null;
      const joelho = document.querySelector('input[name="joelho"]:checked')?.value || null;
      const articulacao = document.querySelector('input[name="articulacao"]:checked')?.value || null;
      const sensibilidade = document.querySelector('input[name="sensibilidade"]:checked')?.value || null;
 
      // Cria um objeto com os dados atuais
      const avaliacao = {
        tipo_marcha: tipoMarcha,
        marcha_detalhe: marchaDetalhe,
        joelho: joelho,
        articulacao: articulacao,
        sensibilidade: sensibilidade,
      };
 
      // Salva no sessionStorage
      sessionStorage.setItem('avaliacao', JSON.stringify(avaliacao));
    });
 
    // Ao clicar em "Enviar", imprime os dados salvos e envia ao backend
    submitButton.addEventListener('click', () => {
      // Recupera os dados salvos
      const data = JSON.parse(sessionStorage.getItem('avaliacao')) || {};
 
      // Verifica os dados antes de enviar
      console.log('Dados a serem enviados:', data);
 
      // Aqui você pode enviar os dados ao backend usando fetch:
      fetch('/salvar-avaliacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((result) => alert(result))
        .catch((error) => console.error('Erro ao enviar:', error));
    });
 
 
}
 
// Avançar para a próxima etapa
function nextStep() {
    saveData();
    let nextPage = '';
 
    if (window.location.pathname.includes('etapa1')) {
        nextPage = '/etapa2';
    } else if (window.location.pathname.includes('etapa2')) {
        nextPage = '/etapa3';
    } else if (window.location.pathname.includes('etapa3')) {
        nextPage = '/etapa4'
    }
 
    if (nextPage) {
        window.location.href = nextPage;
    }
}
 
// Voltar para a etapa anterior
function previousStep() {
   
    saveData();
    let prevPage = '';
 
    if (window.location.pathname.includes('etapa3')) {
        prevPage = '/etapa2'; // Verifique se /etapa2 renderiza corretamente
    } else if (window.location.pathname.includes('etapa2')) {
        prevPage = '/etapa1'; // Verifique se /etapa1 renderiza corretamente
    }
 
    if (prevPage) {
        window.location.href = prevPage;
    }
}
 
// Exibir dados resumidos na etapa 3
function showResumo() {
    const nome = sessionStorage.getItem('nome') || "Não informado";
    const email = sessionStorage.getItem('email') || "Não informado";
    const endereco = sessionStorage.getItem('endereco') || "Não informado";
    const cidade = sessionStorage.getItem('cidade') || "Não informado";
   
    const resumo = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
    const resumoDiv = document.getElementById('resumo');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo;
    }
}
//Essa função já é chamada no final do script.js, na verificação:
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}
 
// Enviar o formulário (por exemplo, para um backend)
function submitForm() {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados para o servidor
}
 
// Mostrar resumo apenas na etapa 3
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}
 
// Preencher os campos com os dados salvos no sessionStorage quando voltar para uma etapa
function populateForm() {
    if (document.getElementById('nome')) {
        document.getElementById('nome').value = sessionStorage.getItem('nome') || '';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').value = sessionStorage.getItem('email') || '';
    }
    if (document.getElementById('endereco')) {
        document.getElementById('endereco').value = sessionStorage.getItem('endereco') || '';
    }
    if (document.getElementById('cidade')) {
        document.getElementById('cidade').value = sessionStorage.getItem('cidade') || '';
    }
    if (document.getElementById('estado')) {
        document.getElementById('estado').value = sessionStorage.getItem('estado') || '';
    }
}


//ETAPA 5 
function saveData() {
    // Salvar formatos das unhas
    const nailCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="unha_"]:checked');
    const nailValues = Array.from(nailCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('formato_unhas', nailValues);

    // Salvar artelhos PD
    const pdCheckboxes = document.querySelectorAll('input[id$="_pd"]:checked');
    const pdValues = Array.from(pdCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('artelhos_pd', pdValues);

    // Salvar artelhos PE
    const peCheckboxes = document.querySelectorAll('input[id$="_pe"]:checked');
    const peValues = Array.from(peCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('artelhos_pe', peValues);

    // Salvar alterações ungueais
    const alteracoesIds = [
        'onicoatrofia', 'onicocriptose', 'onicorrexe', 'granuloma', 'onicogrifose',
        'onicolise', 'onicofose', 'psoriase_ungueal', 'onicomicose'
    ];
    const alteracoes = alteracoesIds
        .filter(id => document.getElementById(id)?.checked)
        .map(id => document.getElementById(id).value)
        .join(', ');
    sessionStorage.setItem('alteracoes_ungueais', alteracoes);

    // Salvar campo de texto "outras alterações"
    const outros = document.getElementById('outros_alteracoes')?.value || '';
    sessionStorage.setItem('outras_alteracoes', outros);
}

function clearForm() {
    // Limpar checkboxes das unhas
    const nailCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="unha_"]');
    nailCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes dos artelhos
    const artelhosCheckboxes = document.querySelectorAll('input[id$="_pd"], input[id$="_pe"]');
    artelhosCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes das alterações ungueais
    const alteracoesIds = [
        'onicoatrofia', 'onicocriptose', 'onicorrexe', 'granuloma', 'onicogrifose',
        'onicolise', 'onicofose', 'psoriase_ungueal', 'onicomicose'
    ];
    alteracoesIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) checkbox.checked = false;
    });

    // Limpar campo de texto "outras alterações"
    const outros = document.getElementById('outros_alteracoes');
    if (outros) outros.value = '';
}

function saveData() {
    // Salvar alterações e lesões
    const lesionCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="bromidrose"]:checked');
    const lesionValues = Array.from(lesionCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('alteracoes_lesoes', lesionValues);

    // Salvar perfusão PD
    const pdCheckboxes = document.querySelectorAll('input[name$="_pd"]:checked');
    const pdValues = Array.from(pdCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('perfusao_pd', pdValues);

    // Salvar perfusão PE
    const peCheckboxes = document.querySelectorAll('input[name$="_pe"]:checked');
    const peValues = Array.from(peCheckboxes).map(cb => cb.value).join(', ');
    sessionStorage.setItem('perfusao_pe', peValues);

    // Salvar pergunta sobre erisipela
    const erisipelaRadio = document.querySelector('input[name="erisipela"]:checked');
    const erisipelaValue = erisipelaRadio ? erisipelaRadio.value : '';
    sessionStorage.setItem('erisipela', erisipelaValue);

    // Salvar campo de texto "outras alterações na pele"
    const outrasAlteracoes = document.getElementById('outras_alteracoes_pele')?.value || '';
    sessionStorage.setItem('outras_alteracoes_pele', outrasAlteracoes);

    // Salvar campo de texto "outros comentários"
    const outrosComentarios = document.getElementById('outros_comentarios')?.value || '';
    sessionStorage.setItem('outros_comentarios', outrosComentarios);
}

function clearForm() {
    // Limpar checkboxes das lesões
    const lesionCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="bromidrose"]');
    lesionCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes de perfusão PD
    const pdCheckboxes = document.querySelectorAll('input[name$="_pd"]');
    pdCheckboxes.forEach(cb => cb.checked = false);

    // Limpar checkboxes de perfusão PE
    const peCheckboxes = document.querySelectorAll('input[name$="_pe"]');
    peCheckboxes.forEach(cb => cb.checked = false);

    // Limpar radio buttons da pergunta de erisipela
    const erisipelaRadios = document.querySelectorAll('input[name="erisipela"]');
    erisipelaRadios.forEach(radio => radio.checked = false);

    // Limpar campo de texto "outras alterações na pele"
    const outrasAlteracoes = document.getElementById('outras_alteracoes_pele');
    if (outrasAlteracoes) outrasAlteracoes.value = '';

    // Limpar campo de texto "outros comentários"
    const outrosComentarios = document.getElementById('outros_comentarios');
    if (outrosComentarios) outrosComentarios.value = '';
}

// Avançar para a próxima etapa
function nextStep() {
    saveData();
    let nextPage = '';

    if (window.location.pathname.includes('etapa1')) {
        nextPage = '/etapa2';
    } else if (window.location.pathname.includes('etapa2')) {
        nextPage = '/etapa3';
    }

    if (nextPage) {
        window.location.href = nextPage;
    }
}

// Voltar para a etapa anterior
function previousStep() {
    
    saveData();
    let prevPage = '';

    if (window.location.pathname.includes('etapa3')) {
        prevPage = '/etapa2'; // Verifique se /etapa2 renderiza corretamente
    } else if (window.location.pathname.includes('etapa2')) {
        prevPage = '/etapa1'; // Verifique se /etapa1 renderiza corretamente
    }

    if (prevPage) {
        window.location.href = prevPage;
    }
}

// Exibir dados resumidos na etapa 3
function showResumo() {
    const nome = sessionStorage.getItem('nome') || "Não informado";
    const email = sessionStorage.getItem('email') || "Não informado";
    const endereco = sessionStorage.getItem('endereco') || "Não informado";
    const cidade = sessionStorage.getItem('cidade') || "Não informado";
    
    const resumo = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
    const resumoDiv = document.getElementById('resumo');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo;
    }
}
//Essa função já é chamada no final do script.js, na verificação:
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Enviar o formulário (por exemplo, para um backend)
function submitForm() {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados para o servidor
}

// Mostrar resumo apenas na etapa 3
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Preencher os campos com os dados salvos no sessionStorage quando voltar para uma etapa
function populateForm() {
    if (document.getElementById('nome')) {
        document.getElementById('nome').value = sessionStorage.getItem('nome') || '';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').value = sessionStorage.getItem('email') || '';
    }
    if (document.getElementById('endereco')) {
        document.getElementById('endereco').value = sessionStorage.getItem('endereco') || '';
    }
    if (document.getElementById('cidade')) {
        document.getElementById('cidade').value = sessionStorage.getItem('cidade') || '';
    }
}


 //saveData ETAPA3
 if (document.querySelector('input[name="osteoporose"]:checked')) {
    sessionStorage.setItem('osteoporose', document.querySelector('input[name="osteoporose"]:checked').value);
}
if (document.querySelector('input[name="renal"]:checked')) {
    sessionStorage.setItem('renal', document.querySelector('input[name="renal"]:checked').value);
}
if (document.querySelector('input[name="epilepsia"]:checked')) {
    sessionStorage.setItem('epilepsia', document.querySelector('input[name="epilepsia"]:checked').value);
}
if (document.querySelector('input[name="hipotiroidismo"]:checked')) {
    sessionStorage.setItem('hipotiroidismo', document.querySelector('input[name="hipotiroidismo"]:checked').value);
}
if (document.querySelector('input[name="hepatite"]:checked')) {
    sessionStorage.setItem('hepatite', document.querySelector('input[name="hepatite"]:checked').value);
}
if (document.querySelector('input[name="cardiopatia"]:checked')) {
    sessionStorage.setItem('cardiopatia', document.querySelector('input[name="cardiopatia"]:checked').value);
}
if (document.querySelector('input[name="hipertensao"]:checked')) {
    sessionStorage.setItem('hipertensao', document.querySelector('input[name="hipertensao"]:checked').value);
}  
if (document.querySelector('input[name="reumatismo"]:checked')) {
    sessionStorage.setItem('reumatismo', document.querySelector('input[name="reumatismo"]:checked').value);
}
if (document.querySelector('input[name="quimioRadio"]:checked')) {
    sessionStorage.setItem('quimioRadio', document.querySelector('input[name="quimioRadio"]:checked').value);
}      
if (document.querySelector('input[name="hanseniase"]:checked')) {
    sessionStorage.setItem('hanseniase', document.querySelector('input[name="hanseniase"]:checked').value);
}    
if (document.querySelector('input[name="oncologico"]:checked')) {
    sessionStorage.setItem('oncologico', document.querySelector('input[name="oncologico"]:checked').value);
}
if (document.querySelector('input[name="cirurgia_mmii"]:checked')) {
    sessionStorage.setItem('cirurgia_mmii', document.querySelector('input[name="cirurgia_mmii"]:checked').value);
}  
if (document.querySelector('input[name="marca_passo"]:checked')) {
    sessionStorage.setItem('marca_passo', document.querySelector('input[name="marca_passo"]:checked').value);
}        
if (document.querySelector('input[name="alteracoes"]:checked')) {
    sessionStorage.setItem('alteracoes', document.querySelector('input[name="alteracoes"]:checked').value);
}            
if (document.querySelector('input[name="hipotensao"]:checked')) {
    sessionStorage.setItem('hipotensao', document.querySelector('input[name="hipotensao"]:checked').value);
}    
if (document.querySelector('input[name="insulina"]:checked')) {
    sessionStorage.setItem('insulina', document.querySelector('input[name="insulina"]:checked').value);
}  
if (document.querySelector('input[name="dieta_hidrica"]:checked')) {
    sessionStorage.setItem('dieta_hidrica', document.querySelector('input[name="dieta_hidrica"]:checked').value);
}
if (document.getElementById('injetavel')) {
    sessionStorage.setItem('injetavel', document.getElementById('injetavel').value);
}
if (document.getElementById('dieta_alimentar')) {
    sessionStorage.setItem('dieta_alimentar', document.getElementById('dieta_alimentar').value);
}
if (document.getElementById('via_oral')) {
    sessionStorage.setItem('via_oral', document.getElementById('via_oral').value);
}
if (document.getElementById('taxa_glicemica')) {
    sessionStorage.setItem('taxa_glicemica', document.getElementById('taxa_glicemica').value);
}

//saveData2

const camposCheckbox = [
    'frequenta_podologo', 'uso_medicamentos', 'alergico', 'posicao_trabalho',
    'tempo_em_pe', 'tempo_sentado', 'tempo_caminhando', 'tipo_calcado_diario',
    'tipo_calcado_qual', 'fumante', 'ciclo_menstruacao_regular', 'gestante',
    'amamentando', 'pratica_atividade_fisica'
];

const camposTexto = [
    'queixa_principal', 'frequencia_podologo', 'quais_medicamentos',
    'quais_substancias', 'duracao_trabalho', 'numero_calcado',
    'frequencia_atividade_fisica', 'esporte_atividade', 'tipo_calcado_esporte'
];

const camposData = ['dum'];

// Salvar valores dos inputs do tipo "radio" ou "checkbox"
camposCheckbox.forEach(campo => {
    const elementoSelecionado = document.querySelector(`input[name="${campo}"]:checked`);
    if (elementoSelecionado) {
        sessionStorage.setItem(campo, elementoSelecionado.value);
    }
});

// Salvar valores dos inputs do tipo "text"
camposTexto.forEach(campo => {
    const elemento = document.getElementById(campo);
    if (elemento) {
        sessionStorage.setItem(campo, elemento.value);
    }
});

// Salvar valores dos inputs do tipo "date"
camposData.forEach(campo => {
    const elemento = document.getElementById(campo);
    if (elemento && elemento.value) {
        sessionStorage.setItem(campo, new Date(elemento.value).toISOString());
    }
});

// Preencher os campos ao carregar a página
window.onload = populateForm;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bancopodologia'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});




