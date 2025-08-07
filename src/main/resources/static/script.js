document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('getStartedBtn');
    btn.addEventListener('click', function() {
        showModal('Welcome to BankX! Please register or login to continue.');
    });
});

function showModal(message) {
    let modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(modal);

    document.querySelector('.close-btn').onclick = function() {
        modal.remove();
    };
}

// Add modal styles to your CSS file:
/*
.custom-modal {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(44,62,80,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}
.custom-modal .modal-content {
    background: #fff;
    padding: 2rem 2.5rem;
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(44,62,80,0.18);
    text-align: center;
    position: relative;
}
.custom-modal .close-btn {
    position: absolute;
    top: 12px; right: 18px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #2e3a59;
}
*/