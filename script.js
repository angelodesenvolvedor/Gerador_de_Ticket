const ticketForm = document.getElementById('ticketForm');
const ticketsContainer = document.getElementById('tickets');

ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = event.target.titulo.value;
    const descricao = event.target.descricao.value;

    const ticketElement = document.createElement('div');
    ticketElement.classList.add('ticket');
    ticketElement.innerHTML = `
        <h2>${titulo}</h2>
        <p>${descricao}</p>
    `;

    ticketsContainer.appendChild(ticketElement);

    const successMessage = document.createElement('p');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Ticket gerado com sucesso!';
    
    ticketsContainer.appendChild(successMessage); // Adicione a mensagem de sucesso ao contêiner de tickets

    ticketForm.reset();

    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});
