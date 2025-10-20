const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxClV2kK0fQGYHt0y8hRm0Y2uBchIW0pkTqBQgHrzXWVXBEHKnzzRWt0tJS0q0-bpii/exec';

const form = document.getElementById('rsvp-form');
const btn = document.getElementById('btn-enviar');
const success = document.getElementById('success');
const erroBox = document.getElementById('form-erro');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  erroBox.style.display = 'none';

  // Validação de campo.
  if (!form.nome.value.trim() || !form.confirmacao.value || !form.qtd.value) {
    erroBox.textContent = 'Preencha o nome , confirmação ou acompanhates.';
    erroBox.style.display = 'block';
    return;
  }

  btn.disabled = true;
  btn.textContent = '';
  const loader = document.createElement('span');
  loader.classList.add('loader');
  btn.appendChild(loader);
  const texto = document.createTextNode('Enviando...');
  btn.appendChild(texto);

  try {
    // Enviando como FormData
    const formData = new FormData(form);

    const res = await fetch(WEB_APP_URL, {
      method: 'POST',
      body: formData
    });

    if (!res.ok) throw new Error("Erro no envio");

    // Sucesso
    form.style.display = 'none';
    verse.style.display = 'none';
    success.style.display = 'block';

  } catch (err) {
    erroBox.textContent = 'Houve um erro ao enviar. Tente novamente.';
    erroBox.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar confirmação';
  }
});

// Botão volta para a index
document.getElementById('voltar-topo').addEventListener('click', () => {
  window.location.href = 'index.html';
});
