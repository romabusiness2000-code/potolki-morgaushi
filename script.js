document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Здесь обычно делается отправка данных на сервер.
    // Для демонстрации покажем сообщение.
    document.getElementById("form-message").innerText = 
        `Спасибо, ${name}! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.`;

    // Если у тебя есть сервер (PHP, Node.js и т.п.), можно сюда добавить отправку письма админу.
});

document.querySelector('.form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    const response = await fetch('send_mail.php', {
        method: 'POST',
        body: formData
    });

    const text = await response.text();
    document.getElementById('form-status').innerHTML = text;
});
