setTimeout(function(){
    const faqs = document.querySelectorAll('.faq-container');


    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer = faq.querySelector('.answer');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
}, 1000);
