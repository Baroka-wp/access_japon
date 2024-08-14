document.addEventListener('DOMContentLoaded', function () {
    const volunteerModal = document.getElementById('volunteerModal');
    const hostModal = document.getElementById('hostModal');
    const successModal = document.getElementById('successModal');
    const closeBtns = document.querySelectorAll('.close');

    const volunteerForm = document.getElementById('volunteerForm');
    const hostForm = document.getElementById('hostForm');

    function setupForm(form, modal, prevBtn, nextBtn, submitBtn) {
        const steps = Array.from(form.querySelectorAll('.form-step'));
        const stepIndicators = form.querySelectorAll('.step');
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
            const inputs = steps[stepIndex].querySelectorAll('input, textarea, select');
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

        showStep(currentStep);
    }

    // Setup for volunteer form
    setupForm(
        volunteerForm,
        volunteerModal,
        document.getElementById('volunteerPrevBtn'),
        document.getElementById('volunteerNextBtn'),
        document.getElementById('volunteerSubmitBtn')
    );

    // Setup for host form
    setupForm(
        hostForm,
        hostModal,
        document.getElementById('hostPrevBtn'),
        document.getElementById('hostNextBtn'),
        document.getElementById('hostSubmitBtn')
    );

    // Open modals
    document.querySelector('a[href="#"]').onclick = function (e) {
        e.preventDefault();
        volunteerModal.style.display = "block";
    };

    document.querySelector('a[href="#"]').onclick = function (e) {
        e.preventDefault();
        hostModal.style.display = "block";
    };

    // Close modals
    closeBtns.forEach(btn => {
        btn.onclick = function () {
            volunteerModal.style.display = "none";
            hostModal.style.display = "none";
            successModal.style.display = "none";
        }
    });

    window.onclick = function (event) {
        if (event.target == volunteerModal || event.target == hostModal || event.target == successModal) {
            volunteerModal.style.display = "none";
            hostModal.style.display = "none";
            successModal.style.display = "none";
        }
    }
});

document.getElementById('openVolunteerModal').onclick = function (e) {
    e.preventDefault();
    volunteerModal.style.display = "block";
};

document.getElementById('openHostModal').onclick = function (e) {
    e.preventDefault();
    hostModal.style.display = "block";
};
