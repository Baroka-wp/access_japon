lucide.createIcons();
// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Changer l'apparence de la nav en défilant
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mettre à jour le lien actif dans la navigation
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (scrollPosition >= section.offsetTop - 100) {
            const id = section.getAttribute('id');
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Menu toggled'); // For debugging
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.error('Mobile menu elements not found');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('inscriptionModal');
    const successModal = document.getElementById('successModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtns = document.querySelectorAll('.close');
    const form = document.getElementById('inscriptionForm');
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const stepIndicators = document.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === stepIndex);
            indicator.classList.toggle('completed', index < stepIndex);
        });
        prevBtn.style.display = stepIndex === 0 ? 'none' : 'inline-block';
        if (stepIndex === steps.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    function validateStep(stepIndex) {
        const inputs = steps[stepIndex].querySelectorAll('input, textarea');
        return Array.from(inputs).every(input => input.checkValidity());
    }

    nextBtn.addEventListener('click', function () {
        if (validateStep(currentStep)) {
            currentStep++;
            showStep(currentStep);
        } else {
            alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
        }
    });

    prevBtn.addEventListener('click', function () {
        currentStep--;
        showStep(currentStep);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateStep(currentStep)) {
            // Simuler l'envoi du formulaire (remplacer par l'envoi réel des données)
            setTimeout(() => {
                modal.style.display = "none";
                successModal.style.display = "block";
                // Réinitialiser le formulaire après la soumission
                form.reset();
                currentStep = 0;
                showStep(currentStep);
            }, 1000);
        } else {
            alert('Veuillez remplir tous les champs obligatoires avant de soumettre.');
        }
    });

    openModalBtn.onclick = function () {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    closeBtns.forEach(btn => {
        btn.onclick = function () {
            modal.style.display = "none";
            successModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    window.onclick = function (event) {
        if (event.target == modal || event.target == successModal) {
            modal.style.display = "none";
            successModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    showStep(currentStep);
});