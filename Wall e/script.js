document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalBtn");
    const closeBtn = document.querySelector(".close");
    const contatoForm = document.querySelector("#contato form");
    const modalForm = document.querySelector("#myModal form");

    // Função para abrir o modal
    const openModal = () => {
        modal.style.display = "block";
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = "none";
    };

    // Abrir o modal quando o botão "Solicite Sua Coleta" for clicado
    btn.addEventListener("click", openModal);

    // Fechar o modal quando o botão de fechar for clicado
    closeBtn.addEventListener("click", closeModal);

    // Fechar o modal se o usuário clicar fora do modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Adicionar comportamento de feedback para o formulário de contato
    contatoForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Lógica para enviar o formulário via AJAX ou outra forma
        // Exemplo de feedback
        alert("Obrigado! Seu contato foi enviado com sucesso.");

        // Limpar o formulário
        contatoForm.reset();
    });

    // Adicionar comportamento de feedback para o formulário de coleta no modal
    modalForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Lógica para enviar o formulário via AJAX ou outra forma
        // Exemplo de feedback
        alert("Sua solicitação de coleta foi recebida! Entraremos em contato em breve para agendar a coleta.");

        // Fechar o modal
        closeModal();

        // Limpar o formulário
        modalForm.reset();
    });
});


