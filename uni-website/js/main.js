window.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        { button: document.getElementById('faq1'), content: document.getElementById('faq1d') },
        { button: document.getElementById('faq2'), content: document.getElementById('faq2d') },
        { button: document.getElementById('faq3'), content: document.getElementById('faq3d') },
        { button: document.getElementById('faq4'), content: document.getElementById('faq4d') },
        { button: document.getElementById('faq5'), content: document.getElementById('faq5d') },
        { button: document.getElementById('faq6'), content: document.getElementById('faq6d') },
        { button: document.getElementById('faq7'), content: document.getElementById('faq7d') },
        { button: document.getElementById('faq8'), content: document.getElementById('faq8d') },
        { button: document.getElementById('faq9'), content: document.getElementById('faq9d') },
        { button: document.getElementById('faq10'), content: document.getElementById('faq10d') },
        { button: document.getElementById('faq11'), content: document.getElementById('faq11d') },
        { button: document.getElementById('faq12'), content: document.getElementById('faq12d') },
    ];

    buttons.forEach(item => {
        const button = item.button;
        const content = item.content;

        button.addEventListener('click', function () {
            content.classList.toggle('faqd-visible');
            button.classList.toggle('faq-selected');
        });
    });


    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        fetch('https://api.slapform.com/tfFuwHjYY', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function (response) { // This function runs only on success
            console.log('Success!', response);
        })
        .catch(function (response) { // This function runs only on error
            console.log('Fail!', response);
        })
        .finally(function () { // This function runs regardless of success or error
            console.log('This always runs!');
        });
    });

});