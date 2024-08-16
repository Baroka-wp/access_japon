// document.addEventListener('DOMContentLoaded', function () {
//     const volunteerModal = document.getElementById('volunteerModal');
//     const hostModal = document.getElementById('hostModal');
//     const successModal = document.getElementById('successModal');
//     const closeBtns = document.querySelectorAll('.close');

//     const volunteerForm = document.getElementById('volunteerForm');
//     const hostForm = document.getElementById('hostForm');

//     function setupForm(form, modal, prevBtn, nextBtn, submitBtn) {
//         const steps = Array.from(form.querySelectorAll('.form-step'));
//         const stepIndicators = form.querySelectorAll('.step');
//         let currentStep = 0;

//         function showStep(stepIndex) {
//             steps.forEach((step, index) => {
//                 step.classList.toggle('active', index === stepIndex);
//             });
//             stepIndicators.forEach((indicator, index) => {
//                 indicator.classList.toggle('active', index === stepIndex);
//                 indicator.classList.toggle('completed', index < stepIndex);
//             });
//             prevBtn.style.display = stepIndex === 0 ? 'none' : 'inline-block';
//             if (stepIndex === steps.length - 1) {
//                 nextBtn.style.display = 'none';
//                 submitBtn.style.display = 'inline-block';
//             } else {
//                 nextBtn.style.display = 'inline-block';
//                 submitBtn.style.display = 'none';
//             }
//         }

//         function validateStep(stepIndex) {
//             const inputs = steps[stepIndex].querySelectorAll('input, textarea, select');
//             return Array.from(inputs).every(input => input.checkValidity());
//         }

//         nextBtn.addEventListener('click', function () {
//             if (validateStep(currentStep)) {
//                 currentStep++;
//                 showStep(currentStep);
//             } else {
//                 alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
//             }
//         });

//         prevBtn.addEventListener('click', function () {
//             currentStep--;
//             showStep(currentStep);
//         });

//         form.addEventListener('submit', function (e) {
//             e.preventDefault();
//             if (validateStep(currentStep)) {
//                 // Simuler l'envoi du formulaire (remplacer par l'envoi réel des données)
//                 setTimeout(() => {
//                     modal.style.display = "none";
//                     successModal.style.display = "block";
//                     // Réinitialiser le formulaire après la soumission
//                     form.reset();
//                     currentStep = 0;
//                     showStep(currentStep);
//                 }, 1000);
//             } else {
//                 alert('Veuillez remplir tous les champs obligatoires avant de soumettre.');
//             }
//         });

//         showStep(currentStep);
//     }

//     // Setup for volunteer form
//     setupForm(
//         volunteerForm,
//         volunteerModal,
//         document.getElementById('volunteerPrevBtn'),
//         document.getElementById('volunteerNextBtn'),
//         document.getElementById('volunteerSubmitBtn')
//     );

//     // Setup for host form
//     setupForm(
//         hostForm,
//         hostModal,
//         document.getElementById('hostPrevBtn'),
//         document.getElementById('hostNextBtn'),
//         document.getElementById('hostSubmitBtn')
//     );

//     // Open modals
//     document.querySelector('a[href="#"]').onclick = function (e) {
//         e.preventDefault();
//         volunteerModal.style.display = "block";
//     };

//     document.querySelector('a[href="#"]').onclick = function (e) {
//         e.preventDefault();
//         hostModal.style.display = "block";
//     };

//     // Close modals
//     closeBtns.forEach(btn => {
//         btn.onclick = function () {
//             volunteerModal.style.display = "none";
//             hostModal.style.display = "none";
//             successModal.style.display = "none";
//         }
//     });

//     window.onclick = function (event) {
//         if (event.target == volunteerModal || event.target == hostModal || event.target == successModal) {
//             volunteerModal.style.display = "none";
//             hostModal.style.display = "none";
//             successModal.style.display = "none";
//         }
//     }
// });

document.getElementById('openVolunteerModal').onclick = function (e) {
    e.preventDefault();
    volunteerModal.style.display = "block";
};

document.getElementById('openHostModal').onclick = function (e) {
    e.preventDefault();
    hostModal.style.display = "block";
};

document.addEventListener('DOMContentLoaded', function () {
    const volunteerModal = document.getElementById('volunteerModal');
    const hostModal = document.getElementById('hostModal');
    const closeBtns = document.querySelectorAll('.close');
    const closeVolunteerBtn = document.getElementById('closeVolunteerModal');
    const closeHostBtn = document.getElementById('closeHostModal');

    const volunteerIframe = document.getElementById('volunteerGoogleForm');
    const hostIframe = document.getElementById('hostGoogleForm');

    function setupModal(modal, openBtn, closeBtn, iframe) {
        openBtn.onclick = function (e) {
            e.preventDefault();
            modal.style.display = "block";
            document.body.style.overflow = 'hidden';
            startCheckingFormSubmission(modal, iframe);
        };

        closeBtn.onclick = function () {
            closeModal(modal, iframe);
        };

        modal.querySelector('.close').onclick = function () {
            closeModal(modal, iframe);
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                closeModal(modal, iframe);
            }
        };
    }

    function closeModal(modal, iframe) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
        iframe.src = iframe.src; // Reset the form
        stopCheckingFormSubmission();
    }

    let checkInterval;

    function startCheckingFormSubmission(modal, iframe) {
        checkInterval = setInterval(() => checkFormSubmission(modal, iframe), 1000);
    }

    function stopCheckingFormSubmission() {
        clearInterval(checkInterval);
    }

    function checkFormSubmission(modal, iframe) {
        try {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDocument.body.innerHTML.includes("Votre réponse a été enregistrée.")) {
                showThankYouMessage(modal);
                setTimeout(() => closeModal(modal, iframe), 3000);
                stopCheckingFormSubmission();
            }
        } catch (e) {
            console.log("Erreur lors de la vérification de la soumission du formulaire:", e);
        }
    }

    function showThankYouMessage(modal) {
        const thankYouMessage = document.createElement('div');
        thankYouMessage.textContent = "Merci pour votre soumission ! Le formulaire va se fermer dans quelques secondes.";
        thankYouMessage.style.position = 'absolute';
        thankYouMessage.style.top = '10px';
        thankYouMessage.style.left = '50%';
        thankYouMessage.style.transform = 'translateX(-50%)';
        thankYouMessage.style.backgroundColor = '#4CAF50';
        thankYouMessage.style.color = 'white';
        thankYouMessage.style.padding = '10px';
        thankYouMessage.style.borderRadius = '5px';
        thankYouMessage.style.zIndex = '10000';
        modal.appendChild(thankYouMessage);
    }

    setupModal(volunteerModal, document.getElementById('openVolunteerModal'), closeVolunteerBtn, volunteerIframe);
    setupModal(hostModal, document.getElementById('openHostModal'), closeHostBtn, hostIframe);
});