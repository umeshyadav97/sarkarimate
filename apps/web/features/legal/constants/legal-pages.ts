export type LegalPageKey =
  'about-us' | 'contact-us' | 'privacy-policy' | 'disclaimer' | 'terms-and-conditions' | 'sitemap';

export interface LegalPageSection {
  title: string;
  body: string[];
}

export interface LegalPageLink {
  label: string;
  href: string;
}

export interface LegalPageLinkGroup {
  title: string;
  links: LegalPageLink[];
}

export interface LegalPageContent {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalPageSection[];
  links?: LegalPageLink[];
  linkGroups?: LegalPageLinkGroup[];
}

export const LAST_UPDATED = '7 July 2026';

export const legalPageRoutes: Record<LegalPageKey, string> = {
  'about-us': '/about-us',
  'contact-us': '/contact-us',
  'privacy-policy': '/privacy-policy',
  disclaimer: '/disclaimer',
  'terms-and-conditions': '/terms-and-conditions',
  sitemap: '/sitemap',
};

export const legalPages: Record<LegalPageKey, LegalPageContent> = {
  'about-us': {
    title: 'About Us / हमारे बारे में',
    description:
      'Learn about SarkariMate, our mission, and our commitment to making government job information simple and accessible.',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Who We Are / हम कौन हैं',
        body: [
          'SarkariMate is an independent information portal for government job updates, results, admit cards, answer keys, syllabus and important dates.',
          'SarkariMate सरकारी नौकरी, रिजल्ट, एडमिट कार्ड, आंसर की, सिलेबस और जरूरी तारीखों की जानकारी सरल भाषा में देता है।',
        ],
      },
      {
        title: 'Why SarkariMate Exists / SarkariMate क्यों बनाया गया',
        body: [
          'Government notifications can often be difficult to understand. SarkariMate presents important information in a simple, organized and easy-to-read format.',
          'सरकारी नोटिफिकेशन कई बार समझने में कठिन होते हैं। SarkariMate जरूरी जानकारी को सरल, साफ और व्यवस्थित तरीके से दिखाता है।',
        ],
      },
      {
        title: 'Our Mission / हमारा मिशन',
        body: [
          'Our mission is to make government job information simple, reliable and accessible for every job seeker.',
          'हमारा मिशन हर उम्मीदवार तक सरकारी नौकरी की जानकारी सरल, भरोसेमंद और आसानी से पहुंचाना है।',
        ],
      },
      {
        title: 'Official Verification / आधिकारिक सत्यापन',
        body: [
          'We try to keep information accurate, but users should always verify final details from the official website before applying.',
          'हम जानकारी को सही रखने की कोशिश करते हैं, लेकिन आवेदन करने से पहले official website पर final details जरूर verify करें।',
        ],
      },
    ],
  },

  'contact-us': {
    title: 'Contact Us / संपर्क करें',
    description:
      'Get in touch with SarkariMate for support, corrections, feedback or business enquiries.',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'General Support / सामान्य सहायता',
        body: [
          'For general questions, feedback or help, email us at support@sarkarimate.com.',
          'सामान्य सहायता या सुझाव के लिए support@sarkarimate.com पर ईमेल करें।',
        ],
      },
      {
        title: 'Report Incorrect Information / गलत जानकारी बताएं',
        body: [
          'If any job, result, admit card, answer key or date looks incorrect, send the page link and correct details to corrections@sarkarimate.com.',
          'अगर कोई नौकरी, रिजल्ट, एडमिट कार्ड, आंसर की या तारीख गलत लगे, तो page link और सही जानकारी corrections@sarkarimate.com पर भेजें।',
        ],
      },
      {
        title: 'Business Enquiry / बिजनेस संपर्क',
        body: [
          'For partnership, media or business enquiries, contact business@sarkarimate.com.',
          'Partnership, media या business enquiry के लिए business@sarkarimate.com पर ईमेल करें।',
        ],
      },
      {
        title: 'Response Time / जवाब देने का समय',
        body: [
          'We try to respond to genuine queries as soon as possible.',
          'हम सही और जरूरी queries का जवाब जल्द से जल्द देने की कोशिश करते हैं।',
        ],
      },
    ],
    links: [
      { label: 'Support Email', href: 'mailto:support@sarkarimate.com' },
      { label: 'Report Correction', href: 'mailto:corrections@sarkarimate.com' },
      { label: 'Business Enquiry', href: 'mailto:business@sarkarimate.com' },
    ],
  },

  'privacy-policy': {
    title: 'Privacy Policy / गोपनीयता नीति',
    description: 'Learn how SarkariMate collects, uses and protects your information.',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Information We Collect / हम कौन सी जानकारी लेते हैं',
        body: [
          'We may collect basic usage data such as visited pages, device type, browser type, approximate location and website activity.',
          'हम visited pages, device type, browser type, approximate location और website activity जैसी basic usage जानकारी collect कर सकते हैं।',
        ],
      },
      {
        title: 'Personal Information / व्यक्तिगत जानकारी',
        body: [
          'If you contact us, subscribe to alerts or use a form, we may receive your name, email address and message details.',
          'अगर आप contact form, email alerts या किसी form का उपयोग करते हैं, तो हमें आपका नाम, email और message details मिल सकती हैं।',
        ],
      },
      {
        title: 'How We Use Information / जानकारी का उपयोग',
        body: [
          'We use information to improve the website, respond to queries, send requested updates, fix issues and understand user needs.',
          'हम जानकारी का उपयोग website सुधारने, queries का जवाब देने, requested updates भेजने, issues fix करने और users की जरूरत समझने के लिए करते हैं।',
        ],
      },
      {
        title: 'Data Sharing / जानकारी साझा करना',
        body: [
          'We do not sell your personal information.',
          'हम आपकी personal information बेचते नहीं हैं।',
        ],
      },
      {
        title: 'Cookies / कुकीज',
        body: [
          'SarkariMate may use cookies to remember preferences, improve performance and understand website usage.',
          'SarkariMate preferences याद रखने, performance सुधारने और website usage समझने के लिए cookies का उपयोग कर सकता है।',
        ],
      },
      {
        title: 'Third-Party Services / तीसरे पक्ष की सेवाएं',
        body: [
          'We may use services like Google Analytics and Google AdSense to measure traffic and show relevant ads.',
          'हम traffic measure करने और relevant ads दिखाने के लिए Google Analytics और Google AdSense जैसी services का उपयोग कर सकते हैं।',
        ],
      },
      {
        title: 'External Links / बाहरी लिंक',
        body: [
          'Our pages may include links to official government websites and other external websites.',
          'हमारे pages पर official government websites और अन्य external websites के links हो सकते हैं।',
        ],
      },
      {
        title: 'External Website Responsibility / बाहरी वेबसाइट की जिम्मेदारी',
        body: [
          'SarkariMate is not responsible for the privacy policy, content or security of external websites.',
          'External websites की privacy policy, content या security के लिए SarkariMate जिम्मेदार नहीं है।',
        ],
      },
      {
        title: 'Contact / संपर्क',
        body: [
          'For privacy-related questions, email privacy@sarkarimate.com.',
          'Privacy से जुड़े सवालों के लिए privacy@sarkarimate.com पर ईमेल करें।',
        ],
      },
    ],
  },

  disclaimer: {
    title: 'Disclaimer / अस्वीकरण',
    description:
      'Important information about official verification, content accuracy, and user responsibility.',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Independent Portal / स्वतंत्र पोर्टल',
        body: [
          'SarkariMate is an independent information portal and is not affiliated with any Government organization or department.',
          'SarkariMate एक स्वतंत्र जानकारी देने वाला पोर्टल है और किसी भी सरकारी संस्था या विभाग से संबद्ध नहीं है।',
        ],
      },
      {
        title: 'Information Purpose / जानकारी का उद्देश्य',
        body: [
          'We publish government job updates, results, admit cards, answer keys and related information to help users access updates easily.',
          'हम users की सुविधा के लिए सरकारी नौकरी, रिजल्ट, एडमिट कार्ड, आंसर की और संबंधित जानकारी सरल रूप में उपलब्ध कराते हैं।',
        ],
      },
      {
        title: 'Official Verification / आधिकारिक सत्यापन',
        body: [
          'Always verify important details such as eligibility, dates, fees, vacancies, results and application links from the official website before taking any action.',
          'किसी भी action से पहले eligibility, dates, fees, vacancies, results और application links official website से जरूर verify करें।',
        ],
      },
      {
        title: 'Accuracy And Updates / शुद्धता और अपडेट',
        body: [
          'We try to keep information accurate and updated, but recruitment authorities may change details without prior notice.',
          'हम जानकारी को सही और updated रखने की कोशिश करते हैं, लेकिन भर्ती संस्थाएं बिना सूचना details बदल सकती हैं।',
        ],
      },
      {
        title: 'Responsibility / जिम्मेदारी',
        body: [
          'SarkariMate is not responsible for errors, delays, missed deadlines, application issues or problems on external websites.',
          'किसी गलती, delay, deadline miss, application issue या external website problem के लिए SarkariMate जिम्मेदार नहीं होगा।',
        ],
      },
    ],
  },

  'terms-and-conditions': {
    title: 'Terms & Conditions / नियम और शर्तें',
    description:
      'Read the rules for using SarkariMate, our content, and links to external websites.',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Acceptance / सहमति',
        body: [
          'By accessing or using SarkariMate, you agree to these Terms & Conditions.',
          'SarkariMate का उपयोग करके आप इन नियमों और शर्तों से सहमत होते हैं।',
        ],
      },
      {
        title: 'Use Of Website / वेबसाइट का उपयोग',
        body: [
          'SarkariMate should be used for lawful, personal and informational purposes only.',
          'SarkariMate का उपयोग केवल सही, व्यक्तिगत और जानकारी प्राप्त करने के उद्देश्य से करें।',
        ],
      },
      {
        title: 'Information Accuracy / जानकारी की शुद्धता',
        body: [
          'We try to provide accurate information, but users must verify final details from official websites before applying or making decisions.',
          'हम सही जानकारी देने की कोशिश करते हैं, लेकिन apply करने या कोई निर्णय लेने से पहले final details official website से verify करें।',
        ],
      },
      {
        title: 'External Links / बाहरी लिंक',
        body: [
          'SarkariMate may link to official and external websites for user convenience.',
          'SarkariMate users की सुविधा के लिए official और external websites के links दे सकता है।',
        ],
      },
      {
        title: 'External Website Responsibility / बाहरी वेबसाइट की जिम्मेदारी',
        body: [
          'We do not control external websites and are not responsible for their content, availability, delay, errors or security.',
          'हम external websites को control नहीं करते और उनके content, availability, delay, errors या security के लिए जिम्मेदार नहीं हैं।',
        ],
      },
      {
        title: 'User Responsibility / उपयोगकर्ता की जिम्मेदारी',
        body: [
          'Users are responsible for checking eligibility, dates, fees, official instructions and application status before taking action.',
          'किसी भी action से पहले eligibility, dates, fees, official instructions और application status check करना user की जिम्मेदारी है।',
        ],
      },
      {
        title: 'Content Ownership / कंटेंट अधिकार',
        body: [
          'SarkariMate content, design and layout belong to SarkariMate unless stated otherwise.',
          'जब तक अलग से न बताया गया हो, SarkariMate का content, design और layout SarkariMate का है।',
        ],
      },
      {
        title: 'Copying Content / कंटेंट कॉपी करना',
        body: [
          'Do not copy, reproduce or republish SarkariMate content without permission.',
          'बिना permission के SarkariMate content को copy, reproduce या republish न करें।',
        ],
      },
      {
        title: 'Changes To Terms / नियमों में बदलाव',
        body: [
          'We may update these Terms & Conditions when needed. Updated terms will be available on this page.',
          'जरूरत पड़ने पर ये Terms & Conditions update हो सकती हैं। Updated terms इसी page पर उपलब्ध होंगी।',
        ],
      },
    ],
  },

  sitemap: {
    title: 'Sitemap / साइटमैप',
    description:
      'SarkariMate sitemap with grouped links for jobs, results, admit cards, resources, company pages and legal pages.',
    lastUpdated: LAST_UPDATED,
    sections: [
      {
        title: 'Find Important Pages / जरूरी पेज खोजें',
        body: [
          'Use this sitemap to quickly open important SarkariMate sections.',
          'इस sitemap से SarkariMate के जरूरी pages आसानी से खोलें।',
        ],
      },
    ],
    linkGroups: [
      {
        title: 'Explore',
        links: [
          { label: 'Latest Jobs', href: '/jobs' },
          { label: 'Results', href: '/results' },
          { label: 'Admit Cards', href: '/admit-cards' },
          { label: 'Answer Keys', href: '/answer-keys' },
          { label: 'Syllabus', href: '/preparation' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Exam Calendar', href: '/exam-calendar' },
          { label: 'Government Schemes', href: '/schemes' },
          { label: 'Career Guide', href: '/career-guide' },
          { label: 'FAQs', href: '/faq' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about-us' },
          { label: 'Contact Us', href: '/contact-us' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Disclaimer', href: '/disclaimer' },
          { label: 'Terms & Conditions', href: '/terms-and-conditions' },
          { label: 'Sitemap', href: '/sitemap' },
        ],
      },
    ],
  },
};

export const legalFooterLinks: LegalPageLink[] = [
  { label: 'About Us', href: legalPageRoutes['about-us'] },
  { label: 'Contact Us', href: legalPageRoutes['contact-us'] },
  { label: 'Privacy Policy', href: legalPageRoutes['privacy-policy'] },
  { label: 'Disclaimer', href: legalPageRoutes.disclaimer },
  { label: 'Terms & Conditions', href: legalPageRoutes['terms-and-conditions'] },
  { label: 'Sitemap', href: legalPageRoutes.sitemap },
];
