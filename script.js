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

// document.addEventListener('DOMContentLoaded', function () {
//     const modal = document.getElementById('inscriptionModal');
//     const successModal = document.getElementById('successModal');
//     const openModalBtn = document.getElementById('openModalBtn');
//     const closeBtns = document.querySelectorAll('.close');
//     const form = document.getElementById('inscriptionForm');
//     const steps = Array.from(form.querySelectorAll('.form-step'));
//     const nextBtn = document.getElementById('nextBtn');
//     const prevBtn = document.getElementById('prevBtn');
//     const submitBtn = document.getElementById('submitBtn');
//     const stepIndicators = document.querySelectorAll('.step');
//     let currentStep = 0;

//     function showStep(stepIndex) {
//         steps.forEach((step, index) => {
//             step.classList.toggle('active', index === stepIndex);
//         });
//         stepIndicators.forEach((indicator, index) => {
//             indicator.classList.toggle('active', index === stepIndex);
//             indicator.classList.toggle('completed', index < stepIndex);
//         });
//         prevBtn.style.display = stepIndex === 0 ? 'none' : 'inline-block';
//         if (stepIndex === steps.length - 1) {
//             nextBtn.style.display = 'none';
//             submitBtn.style.display = 'inline-block';
//         } else {
//             nextBtn.style.display = 'inline-block';
//             submitBtn.style.display = 'none';
//         }
//     }

//     function validateStep(stepIndex) {
//         const inputs = steps[stepIndex].querySelectorAll('input, textarea');
//         return Array.from(inputs).every(input => input.checkValidity());
//     }

//     nextBtn.addEventListener('click', function () {
//         if (validateStep(currentStep)) {
//             currentStep++;
//             showStep(currentStep);
//         } else {
//             alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
//         }
//     });

//     prevBtn.addEventListener('click', function () {
//         currentStep--;
//         showStep(currentStep);
//     });

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         if (validateStep(currentStep)) {
//             // Simuler l'envoi du formulaire (remplacer par l'envoi réel des données)
//             setTimeout(() => {
//                 modal.style.display = "none";
//                 successModal.style.display = "block";
//                 // Réinitialiser le formulaire après la soumission
//                 form.reset();
//                 currentStep = 0;
//                 showStep(currentStep);
//             }, 1000);
//         } else {
//             alert('Veuillez remplir tous les champs obligatoires avant de soumettre.');
//         }
//     });

//     openModalBtn.onclick = function () {
//         modal.style.display = "block";
//         document.body.style.overflow = "hidden";
//     }

//     closeBtns.forEach(btn => {
//         btn.onclick = function () {
//             modal.style.display = "none";
//             successModal.style.display = "none";
//             document.body.style.overflow = "auto";
//         }
//     });

//     window.onclick = function (event) {
//         if (event.target == modal || event.target == successModal) {
//             modal.style.display = "none";
//             successModal.style.display = "none";
//             document.body.style.overflow = "auto";
//         }
//     }

//     showStep(currentStep);
// });

// Step 1: Create language files
const translations = {
    en: {
        "nav.home": "Home",
        "nav.presentation": "About Africa Samurai",
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
        "join-us.description": "Develop your Japanese language skills, and open yourself up to new professional opportunities.",
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
        "volunteers.title": "Discover Africa Samurai Language & Culture Exchange Program",
        "volunteers.description": "The Home Stay Program is a cultural and linguistic exchange program between Africa and Japan. If you are passionate about Japanese culture and language, or if you are a native Japanese speaker and you want to share your knowledge with young Africans, we invite you to learn more about our program.",
        "volunteers.button": "Learn More",
        "home-stay.title": "Cultural and linguistic exchange between Africa and Japan",
        "home-stay.subtitle": "Cultural exchange between Africa and Japan",
        "about.title": "About the program",
        "about.description": "Our program is a unique initiative that aims to promote cultural and linguistic exchange between Africa and Japan. It offers two main opportunities: becoming a volunteer to teach Japanese language and culture in Africa, or becoming a host to welcome Japanese participants.",
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
        "success.message": "Thank you for your registration. We will contact you soon with more information.",
        "common.conditions": "Conditions",
        "common.process": "Process",
        "volunteer.condition1": "Be of Japanese nationality or a permanent resident in Japan",
        "volunteer.condition2": "Be at least 20 years old",
        "volunteer.condition3": "Speak fluent Japanese and English or French",
        "volunteer.condition4": "Have an interest in teaching and African culture",
        "volunteer.condition5": "Be available for a stay of 2 to 12 months",
        "volunteer.process1": "Online application submission",
        "volunteer.process2": "Initial interview (online)",
        "volunteer.process3": "Pre-departure training",
        "volunteer.process4": "Placement with an African host family",
        "volunteer.process5": "Follow-up and support during the stay",
        "volunteer.apply": "Apply as a volunteer",
        "host.condition1": "Be a family or individual residing in Africa",
        "host.condition2": "Have adequate space to accommodate a guest",
        "host.condition3": "Be interested in Japanese culture",
        "host.condition4": "Be ready to commit for a period of 2 to 12 months",
        "host.process1": "Online application submission",
        "host.process2": "Home visit and evaluation",
        "host.process3": "Intercultural hosting training",
        "host.process4": "Matching with a Japanese volunteer",
        "host.process5": "Welcoming the volunteer and regular follow-up",
        "host.apply": "Become a host family",
        "host.form.familyInfo": "Host Family Information",
        "host.form.familyName": "Family Name",
        "host.form.country": "Country",
        "host.form.city": "City",
        "host.form.familyComposition": "Family Composition",
        "host.form.familyMembers": "Number of family members",
        "host.form.accommodationType": "Accommodation Type",
        "host.form.selectAccommodation": "Select accommodation type",
        "host.form.house": "House",
        "host.form.apartment": "Apartment",
        "host.form.other": "Other",
        "host.form.experienceInterests": "Experience and Interests",
        "host.form.previousExperience": "Previous hosting experience",
        "host.form.japaneseInterests": "Interests in Japanese culture",
        "host.form.contactInfo": "Contact Information",
        "host.form.email": "Email",
        "host.form.phone": "Phone",
        "footer.website": "Visite Africa samurai website"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.presentation": "A propos de Africa Samurai",
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
        "join-us.description": "Développez vos compétences en langue japonaise, et ouvrez-vous à de nouvelles opportunités professionnelles.",
        "join-us.button": "S'inscrire maintenant",
        "join-us.button.fomo": "S'inscrire gratuitement | -15 places Gratuites",
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
        "volunteers.title": "Découvrir le programme Africa Samurai Language & Culture Exchange",
        "volunteers.description": "Le programme Home Stay est un programme d'échange culturel et linguistique entre l'Afrique et le Japon. Si vous êtes passionné par la culture et la langue japonaises, ou si vous êtes un locuteur natif du japonais et que vous souhaitez partager vos connaissances avec des jeunes Africains, nous vous invitons à en savoir plus sur notre programme.",
        "volunteers.button": "En savoir plus",
        "home-stay.title": "Échange culturel et linguistique entre l'Afrique et le Japon",
        "home-stay.subtitle": "Échange culturel entre l'Afrique et le Japon",
        "about.title": "À propos du programme",
        "about.description": "Notre programme est une initiative unique qui vise à promouvoir l'échange culturel et linguistique entre l'Afrique et le Japon. Il offre deux opportunités principales : devenir volontaire pour enseigner la langue et la culture japonaise en Afrique, ou devenir hôte pour accueillir des participants japonais.",
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
        "success.message": "Merci pour votre inscription. Nous vous contacterons bientôt avec plus d'informations.",
        "common.conditions": "Conditions",
        "common.process": "Processus",
        "volunteer.condition1": "Être de nationalité japonaise ou résident permanent au Japon",
        "volunteer.condition2": "Avoir au moins 20 ans",
        "volunteer.condition3": "Parler couramment japonais et Anglais ou Français",
        "volunteer.condition4": "Avoir un intérêt pour l'enseignement et la culture africaine",
        "volunteer.condition5": "Être disponible pour un séjour de 2 à 12 mois",
        "volunteer.process1": "Soumission de la candidature en ligne",
        "volunteer.process2": "Entretien initial (en ligne)",
        "volunteer.process3": "Formation pré-départ",
        "volunteer.process4": "Placement dans une famille d'accueil africaine",
        "volunteer.process5": "Suivi et soutien pendant le séjour",
        "volunteer.apply": "Postuler comme volontaire",
        "host.condition1": "Être une famille ou un individu résidant en Afrique",
        "host.condition2": "Avoir un espace adéquat pour accueillir un invité",
        "host.condition3": "Être intéressé par la culture japonaise",
        "host.condition4": "Être prêt à s'engager pour une période de 2 à 12 mois",
        "host.process1": "Soumission de la candidature en ligne",
        "host.process2": "Visite et évaluation du domicile",
        "host.process3": "Formation sur l'accueil interculturel",
        "host.process4": "Jumelage avec un volontaire japonais",
        "host.process5": "Accueil du volontaire et suivi régulier",
        "host.apply": "Devenir famille d'accueil",
        "host.form.familyInfo": "Informations sur la famille d'accueil",
        "host.form.familyName": "Nom de famille",
        "host.form.country": "Pays",
        "host.form.city": "Ville",
        "host.form.familyComposition": "Composition de la famille",
        "host.form.familyMembers": "Nombre de membres de la famille",
        "host.form.accommodationType": "Type de logement",
        "host.form.selectAccommodation": "Sélectionnez le type de logement",
        "host.form.house": "Maison",
        "host.form.apartment": "Appartement",
        "host.form.other": "Autre",
        "host.form.experienceInterests": "Expérience et intérêts",
        "host.form.previousExperience": "Expérience d'accueil précédente",
        "host.form.japaneseInterests": "Intérêts pour la culture japonaise",
        "host.form.contactInfo": "Coordonnées",
        "host.form.email": "Email",
        "host.form.phone": "Téléphone",
        "footer.website": "Visiter le site web de Africa samurai"
    },
    jp: {
        "nav.home": "ホーム",
        "nav.presentation": "アフリカサムライについて",
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
        "join-us.description": "日本語スキルを磨き、新しい職業上の機会を開拓しましょう。",
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
        "volunteers.title": "アフリカのサムライ言語と文化の交換プログラムを発見する",
        "volunteers.description": "ホームステイプログラムはアフリカと日本の間の文化と言語の交流プログラムです。もしあなたが日本の文化や言語に興味がある場合、または日本語のネイティブスピーカーであり、若いアフリカ人に知識を共有したい場合、私たちのプログラムについてもっと詳しく知ることをお誘いします。",
        "volunteers.button": "もっと詳しく",
        "home-stay.title": "アフリカと日本の文化・言語交流",
        "home-stay.subtitle": "アフリカと日本の文化交流",
        "about.title": "プログラムについて",
        "about.description": "私たちのプログラムは、アフリカと日本の文化的および言語的交流を促進することを目的としたユニークな取り組みです。アフリカで日本語と日本文化を教えるボランティアになるか、日本人参加者を歓迎するホストになるかです。",
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
        "success.message": "ご登録ありがとうございます。詳細な情報を近日中にお送りいたします。",
        "common.conditions": "条件",
        "common.process": "プロセス",
        "volunteer.condition1": "日本国籍または日本の永住者であること",
        "volunteer.condition2": "20歳以上であること",
        "volunteer.condition3": "流暢な日本語と英語またはフランス語を話す",
        "volunteer.condition4": "教育とアフリカ文化に興味があること",
        "volunteer.condition5": "2〜12ヶ月の滞在が可能であること",
        "volunteer.process1": "オンライン申請書の提出",
        "volunteer.process2": "初回面接（オンライン）",
        "volunteer.process3": "出発前研修",
        "volunteer.process4": "アフリカのホストファミリーへの配置",
        "volunteer.process5": "滞在中のフォローアップとサポート",
        "volunteer.apply": "ボランティアとして応募する",
        "host.condition1": "アフリカに住む家族または個人であること",
        "host.condition2": "ゲストを受け入れるための適切なスペースがあること",
        "host.condition3": "日本文化に興味があること",
        "host.condition4": "2〜12ヶ月の期間にコミットできること",
        "host.process1": "オンライン申請書の提出",
        "host.process2": "自宅訪問と評価",
        "host.process3": "異文化ホスティングに関する研修",
        "host.process4": "日本人ボランティアとのマッチング",
        "host.process5": "ボランティアの受け入れと定期的なフォローアップ",
        "host.apply": "ホストファミリーになる",
        "host.form.familyInfo": "ホストファミリー情報",
        "host.form.familyName": "家族名",
        "host.form.country": "国",
        "host.form.city": "市",
        "host.form.familyComposition": "家族構成",
        "host.form.familyMembers": "家族の人数",
        "host.form.accommodationType": "宿泊施設タイプ",
        "host.form.selectAccommodation": "宿泊施設タイプを選択してください",
        "host.form.house": "一戸建て",
        "host.form.apartment": "アパート",
        "host.form.other": "その他",
        "host.form.experienceInterests": "経験と興味",
        "host.form.previousExperience": "過去のホスト経験",
        "host.form.japaneseInterests": "日本文化への興味",
        "host.form.contactInfo": "連絡先情報",
        "host.form.email": "メールアドレス",
        "host.form.phone": "電話番号",
        "footer.website": "アフリカサムライのウェブサイトにアクセスしてください"
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

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('formModal');
    var btn = document.getElementById('openFormModal');
    var span = document.getElementsByClassName('close')[0];
    var iframe = document.getElementById('googleForm');
    var closeBtn = document.getElementById('closeModal');

    btn.onclick = function () {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        startCheckingFormSubmission();
    }

    span.onclick = closeModal;
    closeBtn.onclick = closeModal;

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        iframe.src = iframe.src; // Recharge l'iframe pour réinitialiser le formulaire
        stopCheckingFormSubmission();
    }

    var checkInterval;

    function startCheckingFormSubmission() {
        checkInterval = setInterval(checkFormSubmission, 1000); // Vérifie toutes les secondes
    }

    function stopCheckingFormSubmission() {
        clearInterval(checkInterval);
    }

    function checkFormSubmission() {
        try {
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDocument.body.innerHTML.includes("Votre réponse a été enregistrée.")) {
                showThankYouMessage();
                setTimeout(closeModal, 3000); // Ferme le modal après 3 secondes
                stopCheckingFormSubmission();
            }
        } catch (e) {
            console.log("Erreur lors de la vérification de la soumission du formulaire:", e);
        }
    }

    function showThankYouMessage() {
        var thankYouMessage = document.createElement('div');
        thankYouMessage.textContent = "Merci pour votre inscription ! Le formulaire va se fermer dans quelques secondes.";
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
});

const url = 'https://calendly.com/baroka/connecting-meeting';


document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('calendlyModal');
    var icon = document.getElementById('calendlyFloatingIcon');
    var closeBtn = modal.querySelector('.close');

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Empêche le défilement de la page derrière le modal
        Calendly.initInlineWidget({
            url: url,
            parentElement: document.getElementById('calendlyWidget'),
            prefill: {},
            utm: {}
        });
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Réactive le défilement de la page
    }

    icon.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    // Ferme le modal si on clique en dehors du contenu du modal
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Ferme le modal si on appuie sur la touche Echap
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === "block") {
            closeModal();
        }
    });
});
