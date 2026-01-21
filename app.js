
async function carregarTemplates() {
  const res = await fetch("https://apinode-p1pz.onrender.com/templates");
  const templates = await res.json();

  const container = document.getElementById("cards");

  templates.forEach(tpl => {
    const card = document.createElement("div");

    card.innerHTML = `
      <img src="${tpl.img_template}" width="200"/>
      <h3>${tpl.nome_template}</h3>

      <button class="copyBtn" data-text="${encodeURIComponent(tpl.html_template)}">Copiar HTML</button>
      <button class="copyBtn" data-text="${encodeURIComponent(tpl.css_template)}">Copiar CSS</button>
      <button class="copyBtn" data-text="${encodeURIComponent(tpl.js_template)}">Copiar JS</button>
    `;

    container.appendChild(card);
  });

  ativarBotoes();
}
carregarTemplates();


function ativarBotoes() {
  const botoes = document.querySelectorAll(".copyBtn");
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const text = botao.getAttribute("data-text");
      navigator.clipboard.writeText(decodeURIComponent(text));
    });
  });
}

async function salvarTemplate() {
  const nome = document.getElementById("nome").value;
  const img = document.getElementById("img").value;
  const html = document.getElementById("html").value;
  const css = document.getElementById("css").value;
  const js = document.getElementById("js").value;
  const template = {
    nome_template: nome,
    img_template: img,
    html_template: html,
    css_template: css,
    js_template: js
  };

  await fetch("https://apinode-p1pz.onrender.com/templates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(template)
  });
  alert("Template salvo com sucesso!");

  // Recarregar os templates
  document.getElementById("cards").innerHTML = "";
  carregarTemplates();
}