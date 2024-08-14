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

// Step 1: Create language files
const translations = {
    en: {
        "nav.home": "Home",
        "nav.presentation": "Presentation",
        "nav.join-us": "Join Us",
        "nav.team": "Team",
        "nav.contact": "Contact",
        "hero.title": "Benin-Japan Collaboration",
        "hero.subtitle": "Japanese Language Training for Young Beninese in ICT",
        "presentation.intensive-training": "Intensive Training",
        "presentation.intensive-training-desc": "Japanese language program designed specifically for ICT professionals.",
        "presentation.cultural-exchange": "Cultural Exchange",
        "presentation.cultural-exchange-desc": "Immersion in Japanese culture through workshops and professional exchanges.",
        "presentation.job-opportunities": "Job Opportunities",
        "presentation.job-opportunities-desc": "Access to internships and job opportunities in Japanese technology companies.",
        "join-us.title": "Join Us",
        "join-us.description": "Become an integral part of this unique collaboration between Benin and Japan. Develop your ICT and Japanese language skills, and open yourself to new professional opportunities.",
        "join-us.button": "Sign Up Now",
        "team.title": "Our Team",
        "team.member1.name": "Kotone Sakamoto",
        "team.member1.role": "Japanese Correspondent",
        "team.member2.name": "David Kpondehou",
        "team.member2.role": "President of the African Diaspora in Japan",
        "team.member3.name": "Baroka IROTORI",
        "team.member3.role": "Project Coordinator in Benin",
        "footer.contact": "Contact Us",
        "footer.headquarters": "Our Headquarters",
        "footer.follow-us": "Follow Us",
        "footer.rights": "© 2024 Benin-Japan Collaboration. All rights reserved."
    },
    fr: {
        "nav.home": "Accueil",
        "nav.presentation": "Présentation",
        "nav.join-us": "Rejoignez-nous",
        "nav.team": "L'équipe",
        "nav.contact": "Contact",
        "hero.title": "Bénin-Japon Collaboration",
        "hero.subtitle": "Formation en Langue Japonaise pour les Jeunes Béninois en TIC",
        "presentation.intensive-training": "Formation Intensive",
        "presentation.intensive-training-desc": "Programme de langue japonaise conçu spécifiquement pour les professionnels des TIC.",
        "presentation.cultural-exchange": "Échange Culturel",
        "presentation.cultural-exchange-desc": "Immersion dans la culture japonaise à travers des ateliers et des échanges professionnels.",
        "presentation.job-opportunities": "Opportunités Professionnelles",
        "presentation.job-opportunities-desc": "Accès à des stages et des opportunités d'emploi dans des entreprises japonaises de technologie.",
        "join-us.title": "Rejoignez-nous",
        "join-us.description": "Devenez partie intégrante de cette collaboration unique entre le Bénin et le Japon. Développez vos compétences en TIC et en langue japonaise, et ouvrez-vous à de nouvelles opportunités professionnelles.",
        "join-us.button": "S'inscrire maintenant",
        "team.title": "Notre Équipe",
        "team.member1.name": "阪本琴音(Kotone Sakamoto)",
        "team.member1.role": "Correspondante Japonaise",
        "team.member2.name": "David Kpondehou",
        "team.member2.role": "Président de la Diasporat Africaine au Japon",
        "team.member3.name": "Baroka IROTORI",
        "team.member3.role": "Coordanateur du projet au Bénin",
        "footer.contact": "Contactez-nous",
        "footer.headquarters": "Notre Siège",
        "footer.follow-us": "Suivez-nous",
        "footer.rights": "© 2024 Collaboration Bénin-Japon. Tous droits réservés."
    },
    jp: {
        "nav.home": "ホーム",
        "nav.presentation": "紹介",
        "nav.join-us": "参加する",
        "nav.team": "チーム",
        "nav.contact": "お問い合わせ",
        "hero.title": "ベナン・日本コラボレーション",
        "hero.subtitle": "ベナンのICT若手人材のための日本語研修",
        "presentation.intensive-training": "集中トレーニング",
        "presentation.intensive-training-desc": "ICT専門家向けに特別に設計された日本語プログラム。",
        "presentation.cultural-exchange": "文化交流",
        "presentation.cultural-exchange-desc": "ワークショップや専門的な交流を通じて日本文化に浸る。",
        "presentation.job-opportunities": "就職機会",
        "presentation.job-opportunities-desc": "日本のテクノロジー企業でのインターンシップや就職機会へのアクセス。",
        "join-us.title": "参加しませんか",
        "join-us.description": "ベナンと日本のこのユニークな協力の一員になりましょう。ICTスキルと日本語能力を向上させ、新しい職業機会を開拓しましょう。",
        "join-us.button": "今すぐ登録",
        "team.title": "私たちのチーム",
        "team.member1.name": "阪本琴音",
        "team.member1.role": "日本側コーディネーター",
        "team.member2.name": "デイビッド・コポンデフ",
        "team.member2.role": "在日アフリカ人ディアスポラ会長",
        "team.member3.name": "バロカ・イロトリ",
        "team.member3.role": "ベナン側プロジェクトコーディネーター",
        "footer.contact": "お問い合わせ",
        "footer.headquarters": "本部",
        "footer.follow-us": "フォローする",
        "footer.rights": "© 2024 ベナン・日本コラボレーション。全権利留保。"
    }
};

// Step 2: Create a function to set the language
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
}

// Step 3: Add language switcher
const languageSwitcher = document.createElement('div');
languageSwitcher.className = 'language-switcher';
languageSwitcher.innerHTML = `
    <button onclick="setLanguage('fr')">FR</button>
    <button onclick="setLanguage('en')">EN</button>
    <button onclick="setLanguage('jp')">JP</button>
  `;
document.body.appendChild(languageSwitcher);

// Step 4: Set initial language (you can use browser's language or a default)
setLanguage(navigator.language.split('-')[0] || 'fr');