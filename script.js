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
        "nav.join-us": "Training",
        "nav.team": "Team",
        "nav.contact": "Contact",
        "hero.title": "Collaboration Africa-Japan",
        "hero.subtitle": "Japanese Language Training for Young Beninese in ICT",
        "presentation.intensive-training": "Intensive Training",
        "presentation.intensive-training-desc": "Japanese language program designed specifically for ICT professionals.",
        "presentation.cultural-exchange": "Cultural Exchange",
        "presentation.cultural-exchange-desc": "Immersion in Japanese culture through workshops and professional exchanges.",
        "presentation.job-opportunities": "Job Opportunities",
        "presentation.job-opportunities-desc": "Access to internships and job opportunities in Japanese technology companies.",
        "join-us.title": "Register for Japanese language courses",
        "join-us.description": "Become an integral part of this unique collaboration between Africa and Japan. Develop your ICT and Japanese language skills, and open yourself to new professional opportunities.",
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
        "footer.rights": "© 2024 Benin-Japan Collaboration. All rights reserved.",
        "volunteers.title": "Discover Our Home Stay Program",
        "volunteers.description": "The Home Stay Program is a cultural and linguistic exchange program between Africa and Japan. If you are passionate about Japanese culture and language, or if you are a native Japanese speaker and you want to share your knowledge with young Africans, we invite you to learn more about our program.",
        "volunteers.button": "Learn More",
        "home-stay.title": "Home Stay Program",
        "home-stay.subtitle": "Cultural exchange between Africa and Japan",
        "about.title": "About the program",
        "about.description": "The Home Stay program is a unique initiative that aims to promote cultural and linguistic exchange between Africa and Japan. It offers two main opportunities: becoming a volunteer to teach Japanese language and culture in Africa, or becoming a host to welcome Japanese participants.",
        "toggle.volunteers": "For Japanese Volunteers",
        "toggle.hosts": "For African Hosts",
        "advantages.title": "Program Benefits",
        "advantages.cultural": "Deep cultural immersion",
        "advantages.language": "Intensive language learning",
        "advantages.network": "Creation of lasting international connections",
        "advantages.development": "Personal and professional development",
        "advantages.collaboration": "Contribution to Africa-Japan rapprochement",
        "volunteer.name": "Full Name",
        "volunteer.email": "Email",
        "volunteer.phone": "Phone Number",
        "volunteer.country": "Country",
        "volunteer.lastname": "Last Name",
        "volunteer.birthdate": "Date of Birth",
        "volunteer.nationality": "Nationality",
        "volunteer.academicInfo": "Academic Information",
        "volunteer.education": "Education",
        "volunteer.school": "School",
        "volunteer.contactInfo": "Contact Information",
        "volunteer.phone": "Phone",
        "volunteer.motivation": "Motivation",
        "volunteer.motivationQuestion": "Why do you want to participate in this program?",
        "volunteer.name": "Full Name",
        "volunteer.languageSkills": "Language Skills",
        "volunteer.japaneseLevel": "Japanese Level",
        "volunteer.selectLevel": "Select your level",
        "volunteer.nativeLevel": "Native",
        "volunteer.fluentLevel": "Fluent",
        "volunteer.advancedLevel": "Advanced",
        "volunteer.intermediateLevel": "Intermediate",
        "volunteer.beginnerLevel": "Beginner",
        "volunteer.otherLanguages": "Other languages spoken",
        "volunteer.experienceMotivation": "Experience and Motivation",
        "volunteer.teachingExperience": "Teaching or volunteering experience",
        "volunteer.programMotivation": "Motivation to participate in the program",
        "form.previous": "Previous",
        "form.next": "Next",
        "form.title": "Registration Form",
        "volunteer.personalInfo": "Personal Information",
        "form.previous": "Previous",
        "form.submit": "Submit",
        "success.title": "Registration Successful!",
        "success.message": "Thank you for your registration. We will contact you soon with more information."
    },
    fr: {
        "nav.home": "Accueil",
        "nav.presentation": "Présentation",
        "nav.join-us": "Formation",
        "nav.team": "L'équipe",
        "nav.contact": "Contact",
        "hero.title": "Collaboration Afrique-Japon",
        "hero.subtitle": "Formation en Langue Japonaise pour les Jeunes Béninois en TIC",
        "presentation.intensive-training": "Formation Intensive",
        "presentation.intensive-training-desc": "Programme de langue japonaise conçu spécifiquement pour les professionnels des TIC.",
        "presentation.cultural-exchange": "Échange Culturel",
        "presentation.cultural-exchange-desc": "Immersion dans la culture japonaise à travers des ateliers et des échanges professionnels.",
        "presentation.job-opportunities": "Opportunités Professionnelles",
        "presentation.job-opportunities-desc": "Accès à des stages et des opportunités d'emploi dans des entreprises japonaises de technologie.",
        "join-us.title": "S'inscrire aux cours de langue Japonaise",
        "join-us.description": "Devenez partie intégrante de cette collaboration unique entre l'Afrique et le Japon. Développez vos compétences en TIC et en langue japonaise, et ouvrez-vous à de nouvelles opportunités professionnelles.",
        "join-us.button": "S'inscrire maintenant",
        "team.title": "Notre Équipe",
        "team.member1.name": "阪本琴音(Kotone Sakamoto)",
        "team.member1.role": "Correspondante Japonaise",
        "team.member2.name": "David Kpondehou",
        "team.member2.role": "Président de la Diasporat Africaine au Japon",
        "team.member3.name": "Baroka IROTORI",
        "team.member3.role": "Coordanateur du projet en Afrique",
        "footer.contact": "Contactez-nous",
        "footer.headquarters": "Notre Siège",
        "footer.follow-us": "Suivez-nous",
        "footer.rights": "© 2024 Collaboration Bénin-Japon. Tous droits réservés.",
        "volunteers.title": "Découvrir notre programme Home Stay",
        "volunteers.description": "Le programme Home Stay est un programme d'échange culturel et linguistique entre l'Afrique et le Japon. Si vous êtes passionné par la culture et la langue japonaises, ou si vous êtes un locuteur natif du japonais et que vous souhaitez partager vos connaissances avec des jeunes Africains, nous vous invitons à en savoir plus sur notre programme.",
        "volunteers.button": "En savoir plus",
        "home-stay.title": "Programme Home Stay",
        "home-stay.subtitle": "Échange culturel entre l'Afrique et le Japon",
        "about.title": "À propos du programme",
        "about.description": "Le programme Home Stay est une initiative unique qui vise à promouvoir l'échange culturel et linguistique entre l'Afrique et le Japon. Il offre deux opportunités principales : devenir volontaire pour enseigner la langue et la culture japonaise en Afrique, ou devenir hôte pour accueillir des participants japonais.",
        "toggle.volunteers": "Pour les volontaires japonais",
        "toggle.hosts": "Pour les hôtes africains",
        "advantages.title": "Avantages du programme",
        "advantages.cultural": "Immersion culturelle profonde",
        "advantages.language": "Apprentissage linguistique intensif",
        "advantages.network": "Création de liens internationaux durables",
        "advantages.development": "Développement personnel et professionnel",
        "advantages.collaboration": "Contribution au rapprochement Afrique-Japon",
        "volunteer.name": "Nom complet",
        "volunteer.email": "Email",
        "volunteer.phone": "Numéro de téléphone",
        "volunteer.country": "Pays",
        "volunteer.lastname": "Prénom",
        "volunteer.academicInfo": "Informations académiques",
        "volunteer.education": "Formation",
        "volunteer.school": "École",
        "volunteer.contactInfo": "Coordonnées",
        "volunteer.phone": "Téléphone",
        "volunteer.motivation": "Motivation",
        "volunteer.motivationQuestion": "Pourquoi souhaitez-vous participer à ce programme ?",
        "volunteer.birthdate": "Date de naissance",
        "volunteer.nationality": "Nationalité",
        "volunteer.languageSkills": "Compétences linguistiques",
        "volunteer.japaneseLevel": "Niveau de japonais",
        "volunteer.selectLevel": "Sélectionnez votre niveau",
        "volunteer.nativeLevel": "Langue maternelle",
        "volunteer.fluentLevel": "Courant",
        "volunteer.advancedLevel": "Avancé",
        "volunteer.intermediateLevel": "Intermédiaire",
        "volunteer.beginnerLevel": "Débutant",
        "volunteer.otherLanguages": "Autres langues parlées",
        "volunteer.experienceMotivation": "Expérience et motivation",
        "volunteer.teachingExperience": "Expérience d'enseignement ou de bénévolat",
        "volunteer.programMotivation": "Motivation pour participer au programme",
        "form.title": "Formulaire d'inscription",
        "volunteer.personalInfo": "Informations personnelles",
        "form.previous": "Précédent",
        "form.next": "Suivant",
        "form.submit": "Soumettre",
        "success.title": "Inscription réussie !",
        "success.message": "Merci pour votre inscription. Nous vous contacterons bientôt avec plus d'informations."
    },
    jp: {
        "nav.home": "ホーム",
        "nav.presentation": "紹介",
        "nav.join-us": "トレーニング",
        "nav.team": "チーム",
        "nav.contact": "お問い合わせ",
        "hero.title": "アフリカと日本のコラボレーション",
        "hero.subtitle": "ベナンのICT若手人材のための日本語研修",
        "presentation.intensive-training": "集中トレーニング",
        "presentation.intensive-training-desc": "ICT専門家向けに特別に設計された日本語プログラム。",
        "presentation.cultural-exchange": "文化交流",
        "presentation.cultural-exchange-desc": "ワークショップや専門的な交流を通じて日本文化に浸る。",
        "presentation.job-opportunities": "就職機会",
        "presentation.job-opportunities-desc": "日本のテクノロジー企業でのインターンシップや就職機会へのアクセス。",
        "join-us.title": "日本語コースに登録する",
        "join-us.description": "アフリカと日本の間のこのユニークな協力の不可欠な一員になりましょう。ICTスキルと日本語能力を向上させ、新しい職業機会への扉を開きましょう。",
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
        "footer.rights": "© 2024 ベナン・日本コラボレーション。全権利留保。",
        "volunteers.title": "ホームステイプログラムを見る",
        "volunteers.description": "ホームステイプログラムはアフリカと日本の間の文化と言語の交流プログラムです。もしあなたが日本の文化や言語に興味がある場合、または日本語のネイティブスピーカーであり、若いアフリカ人に知識を共有したい場合、私たちのプログラムについてもっと詳しく知ることをお誘いします。",
        "volunteers.button": "もっと詳しく",
        "home-stay.title": "ホームステイプログラム",
        "home-stay.subtitle": "アフリカと日本の文化交流",
        "about.title": "プログラムについて",
        "about.description": "ホームステイプログラムは、アフリカと日本の間の文化的・言語的交流を促進することを目的としたユニークな取り組みです。日本語と日本文化をアフリカで教えるボランティアになる、または日本人参加者を受け入れるホストになるという2つの主な機会を提供しています。",
        "toggle.volunteers": "日本人ボランティア向け",
        "toggle.hosts": "アフリカ人ホスト向け",
        "advantages.title": "プログラムの利点",
        "advantages.cultural": "深い文化的没入",
        "advantages.language": "集中的な言語学習",
        "advantages.network": "持続的な国際的つながりの創造",
        "advantages.development": "個人的・職業的成長",
        "advantages.collaboration": "アフリカと日本の関係強化への貢献",
        "volunteer.personalInfo": "個人情報",
        "volunteer.name": "氏名",
        "volunteer.email": "メールアドレス",
        "volunteer.country": "国籍",
        "volunteer.lastname": "苗字",
        "volunteer.birthdate": "生年月日",
        "volunteer.nationality": "国籍",
        "volunteer.academicInfo": "学歴情報",
        "volunteer.education": "学歴",
        "volunteer.school": "学校",
        "volunteer.phone": "電話番号",
        "volunteer.motivation": "志望動機",
        "volunteer.motivationQuestion": "このプログラムに参加したい理由は何ですか？",
        "volunteer.languageSkills": "語学力",
        "volunteer.japaneseLevel": "日本語レベル",
        "volunteer.selectLevel": "レベルを選択してください",
        "volunteer.nativeLevel": "ネイティブ",
        "volunteer.fluentLevel": "流暢",
        "volunteer.advancedLevel": "上級",
        "volunteer.intermediateLevel": "中級",
        "volunteer.beginnerLevel": "初級",
        "volunteer.otherLanguages": "他に話せる言語",
        "volunteer.experienceMotivation": "経験と動機",
        "volunteer.teachingExperience": "教育またはボランティアの経験",
        "volunteer.programMotivation": "プログラムに参加する動機",
        "volunteer.contactInfo": "連絡先",
        "form.previous": "前へ",
        "form.title": "登録フォーム",
        "form.previous": "前へ",
        "form.next": "次へ",
        "form.submit": "送信",
        "success.title": "登録成功！",
        "success.message": "ご登録ありがとうございます。詳細な情報を近日中にお送りいたします。"
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

function toggleContent(event) {
    const button = event.currentTarget;
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    // Désactiver tous les boutons et contenus
    document.querySelectorAll('.toggle-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.toggle-content').forEach(content => {
        content.classList.remove('active');
    });

    // Activer le bouton cliqué et le contenu associé
    button.classList.add('active');
    targetContent.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', toggleContent);
    });
});