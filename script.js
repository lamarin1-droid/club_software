document.addEventListener('DOMContentLoaded', () => {

    // 1. Menú Responsive
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 2. Acordeón de Preguntas Frecuentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Alternar clase activa para cambiar el icono (+/-)
            question.classList.toggle('active');

            // Abrir o cerrar el panel de respuesta
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // 3. Simulación y Validación del Formulario de Inscripción
    const joinForm = document.getElementById('join-form');
    const formMessage = document.getElementById('form-message');

    joinForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Como el HTML ya tiene el atributo "required", el navegador hace la validación básica.
        // Aquí simulamos que los datos se envían a un servidor.

        const btnSubmit = joinForm.querySelector('button[type="submit"]');
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Enviando...';

        // Simulamos un retraso de red de 1 segundo
        setTimeout(() => {
            joinForm.reset(); // Limpiar el formulario
            btnSubmit.disabled = false;
            btnSubmit.textContent = 'Enviar solicitud';
            
            // Mostrar mensaje de éxito
            formMessage.classList.remove('hidden');
            
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);

        }, 1000);
    });
});