// Language switching logic
(function() {
    const translations = {
        en: {
            // Nav
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.services': 'Services',
            'nav.disclosure': 'Disclosure',
            'nav.contact': 'Contact',

            // Hero - index
            'hero.heading': 'Innovating <span class="highlight">Future</span> Finance',
            'hero.subtitle': 'Apex Capital is a leading fund management company specializing in quantitative strategies, AI-driven investments, and sustainable growth opportunities.',
            'hero.cta': 'Explore Our Vision',

            // About - index
            'about.title': 'Our Core Business',
            'about.subtitle': 'We combine cutting-edge technology with deep financial expertise to deliver superior returns for our clients.',
            'about.card1.title': 'Quantitative Strategies',
            'about.card1.desc': 'Proprietary algorithms and machine learning models identify market inefficiencies and generate alpha across asset classes.',
            'about.card2.title': 'Sustainable Investing',
            'about.card2.desc': 'ESG-integrated portfolios that align financial performance with positive environmental and social impact.',
            'about.card3.title': 'Risk-Managed Solutions',
            'about.card3.desc': 'Dynamic hedging and portfolio construction designed to protect capital while capturing upside potential.',

            // Disclosure - index
            'disclosure.title': 'Company Disclosures',
            'disclosure.subtitle': 'Transparency and compliance are at the heart of our operations.',
            'disclosure.card1.title': 'Regulatory Filings',
            'disclosure.card1.li1': 'Annual Report 2025 – ',
            'disclosure.card1.li1.link': 'Download PDF',
            'disclosure.card1.li2': 'Quarterly Performance Update Q1 2026 – ',
            'disclosure.card1.li2.link': 'View Online',
            'disclosure.card1.li3': 'SEC Form ADV – ',
            'disclosure.card1.li3.link': 'Access Here',
            'disclosure.card1.li4': 'Audited Financial Statements – ',
            'disclosure.card1.li4.link': 'Download',
            'disclosure.card1.more': 'View More Documents',
            'disclosure.card2.title': 'Compliance & Governance',
            'disclosure.card2.li1': 'Code of Ethics – ',
            'disclosure.card2.li1.link': 'Read',
            'disclosure.card2.li2': 'Privacy Policy – ',
            'disclosure.card2.li2.link': 'Learn More',
            'disclosure.card2.li3': 'Conflict of Interest Policy – ',
            'disclosure.card2.li3.link': 'View',
            'disclosure.card2.li4': 'Anti-Money Laundering Statement – ',
            'disclosure.card2.li4.link': 'Details',
            'disclosure.card3.title': 'Public Announcements',
            'disclosure.card3.li1': 'New Fund Launch: Quantum Green Energy Fund – ',
            'disclosure.card3.li1.link': 'Press Release',
            'disclosure.card3.li2': 'Partnership with Tech Innovation Hub – ',
            'disclosure.card3.li2.link': 'Announcement',
            'disclosure.card3.li3': 'Industry Conference Participation – ',
            'disclosure.card3.li3.link': 'Schedule',
            'disclosure.card3.li4': 'CEO Keynote: Future of Digital Assets – ',
            'disclosure.card3.li4.link': 'Watch Recording',

            // Contact - index
            'contact.title': 'Get In Touch',
            'contact.subtitle': 'Connect with our team through the channels below.',
            'contact.hq.label': 'Location',
            'contact.hq.value': '888 Financial District, Shanghai, China 200120',
            'contact.phone.label': 'Phone',
            'contact.email.label': 'Email',
            'contact.hours.label': 'Business Hours',
            'contact.hours.value': 'Mon-Fri 9:00-18:00 (GMT+8)',
            'contact.social.title': 'Connect With Us',

            // Footer
            'footer.tagline': 'Driving financial innovation with integrity and technology.',
            'footer.rights': 'All rights reserved.',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',
            'footer.disclosures': 'Disclosures',

            // regulatory-filings.html
            'reg.pageTitle': 'Regulatory Filings & Financial Reports',
            'reg.pageSubtitle': 'Complete archive of all regulatory documents, financial statements, audit reports, and investor materials.',
            'reg.breadcrumb.home': 'Home',
            'reg.breadcrumb.disclosure': 'Disclosure',
            'reg.breadcrumb.current': 'Regulatory Filings',
            'reg.filter.year': 'Filter by Year',
            'reg.filter.type': 'Filter by Type',
            'reg.filter.allYears': 'All Years',
            'reg.filter.allTypes': 'All Types',
            'reg.filter.annual': 'Annual Reports',
            'reg.filter.quarterly': 'Quarterly Reports',
            'reg.filter.audit': 'Audit Reports',
            'reg.filter.regulatory': 'Regulatory Filings',
            'reg.filter.investor': 'Investor Materials',
            'reg.archive.title': 'Historical Archives',
            'reg.archive.desc': 'For reports dated prior to 2024, please contact our Investor Relations department at',
            'reg.archive.contact': 'or call +86 21 6888 8888 ext. 201.',
            'btn.viewOnline': 'View Online',
            'published': 'Published',
            'reg.noMatch': 'No Matching Reports',
            'reg.noMatch.desc': 'No reports match the current filter criteria. Try selecting a different year or type.',
            'reg.noData': 'No Reports Found',
            'reg.noData.desc': 'Add PDF files to the regulatory-docs folder on your computer, then run <code>node generate-reports.js</code> to update.',

            // services.html
            'svc.pageTitle': 'Our Services',
            'svc.pageSubtitle': 'Comprehensive fund management solutions powered by cutting-edge technology and deep financial expertise.',
            'svc.breadcrumb.current': 'Services',
            'svc.qs.title': 'Quantitative Strategies',
            'svc.qs.intro': 'Our proprietary algorithms and machine learning models identify market inefficiencies and generate alpha across diverse asset classes.',
            'svc.qs.f1.title': 'Algorithmic Trading',
            'svc.qs.f1.desc': 'High-frequency and mid-frequency trading strategies leveraging real-time market data and predictive analytics.',
            'svc.qs.f2.title': 'Machine Learning Models',
            'svc.qs.f2.desc': 'Deep neural networks and reinforcement learning for pattern recognition and market prediction.',
            'svc.qs.f3.title': 'Statistical Arbitrage',
            'svc.qs.f3.desc': 'Pairs trading and mean-reversion strategies exploiting temporary market dislocations.',
            'svc.qs.f4.title': 'Factor-Based Investing',
            'svc.qs.f4.desc': 'Multi-factor models targeting value, momentum, quality, and low volatility premiums.',
            'svc.si.title': 'Sustainable Investing',
            'svc.si.intro': 'ESG-integrated portfolios that align financial performance with positive environmental and social impact.',
            'svc.si.f1.title': 'Green Energy Fund',
            'svc.si.f1.desc': 'Investments in renewable energy, clean technology, and sustainable infrastructure projects worldwide.',
            'svc.si.f2.title': 'ESG Integration',
            'svc.si.f2.desc': 'Comprehensive environmental, social, and governance screening integrated into every investment decision.',
            'svc.si.f3.title': 'Impact Measurement',
            'svc.si.f3.desc': 'Quantifiable metrics tracking carbon reduction, social benefits, and governance improvements.',
            'svc.si.f4.title': 'Climate Transition Strategies',
            'svc.si.f4.desc': 'Portfolios positioned for the global transition to a low-carbon economy.',
            'svc.rm.title': 'Risk-Managed Solutions',
            'svc.rm.intro': 'Dynamic hedging and portfolio construction designed to protect capital while capturing upside potential.',
            'svc.rm.f1.title': 'Dynamic Hedging',
            'svc.rm.f1.desc': 'Real-time portfolio insurance using options, futures, and volatility instruments to limit downside risk.',
            'svc.rm.f2.title': 'Tail Risk Protection',
            'svc.rm.f2.desc': 'Strategies designed to protect against extreme market events and black swan scenarios.',
            'svc.rm.f3.title': 'Multi-Asset Allocation',
            'svc.rm.f3.desc': 'Strategic and tactical asset allocation across equities, fixed income, commodities, and alternatives.',
            'svc.rm.f4.title': 'Stress Testing & Scenario Analysis',
            'svc.rm.f4.desc': 'Rigorous portfolio stress testing against historical and hypothetical market scenarios.',
            'svc.wm.title': 'Wealth Management',
            'svc.wm.intro': 'Personalized wealth management services for high-net-worth individuals, families, and institutions.',
            'svc.wm.f1.title': 'Portfolio Management',
            'svc.wm.f1.desc': 'Customized investment portfolios aligned with your risk tolerance, time horizon, and financial goals.',
            'svc.wm.f2.title': 'Family Office Services',
            'svc.wm.f2.desc': 'Comprehensive wealth planning, estate structuring, and intergenerational wealth transfer strategies.',
            'svc.wm.f3.title': 'Institutional Advisory',
            'svc.wm.f3.desc': 'Endowment, foundation, and pension fund management with a focus on long-term sustainable returns.',
            'svc.wm.f4.title': 'Alternative Investments',
            'svc.wm.f4.desc': 'Access to private equity, venture capital, hedge funds, and real asset opportunities.',
            'svc.cta.title': 'Ready to Get Started?',
            'svc.cta.desc': 'Schedule a consultation with our team to discuss how Apex Capital can help you achieve your financial objectives.',
            'svc.cta.btn': 'Contact Us'
        },
        zh: {
            // Nav
            'nav.home': '首頁',
            'nav.about': '關於我們',
            'nav.services': '服務項目',
            'nav.disclosure': '資訊揭露',
            'nav.contact': '聯絡我們',

            // Hero - index
            'hero.heading': '創新<span class="highlight">未來</span>金融',
            'hero.subtitle': 'Apex Capital 是一家領先的基金管理公司，專注於量化策略、AI 驅動投資和可持續增長機會。',
            'hero.cta': '探索我們的願景',

            // About - index
            'about.title': '核心業務',
            'about.subtitle': '我們將尖端科技與深厚的金融專業知識相結合，為客戶創造卓越回報。',
            'about.card1.title': '量化策略',
            'about.card1.desc': '專有演算法和機器學習模型識別市場低效率，在各類資產中創造超額收益。',
            'about.card2.title': '可持續投資',
            'about.card2.desc': 'ESG 整合投資組合，將財務績效與積極的環境及社會影響相結合。',
            'about.card3.title': '風險管理方案',
            'about.card3.desc': '動態對沖和投資組合構建，旨在保護資本的同時捕捉上行潛力。',

            // Disclosure - index
            'disclosure.title': '公司揭露',
            'disclosure.subtitle': '透明度和合規性是我們營運的核心。',
            'disclosure.card1.title': '監管申報文件',
            'disclosure.card1.li1': '2025 年度報告 – ',
            'disclosure.card1.li1.link': '下載 PDF',
            'disclosure.card1.li2': '2026 年第一季績效更新 – ',
            'disclosure.card1.li2.link': '線上看',
            'disclosure.card1.li3': 'SEC Form ADV – ',
            'disclosure.card1.li3.link': '查閱',
            'disclosure.card1.li4': '經審計財務報表 – ',
            'disclosure.card1.li4.link': '下載',
            'disclosure.card1.more': '查看更多文件',
            'disclosure.card2.title': '合規與治理',
            'disclosure.card2.li1': '道德準則 – ',
            'disclosure.card2.li1.link': '閱讀',
            'disclosure.card2.li2': '隱私政策 – ',
            'disclosure.card2.li2.link': '了解更多',
            'disclosure.card2.li3': '利益衝突政策 – ',
            'disclosure.card2.li3.link': '查閱',
            'disclosure.card2.li4': '反洗錢聲明 – ',
            'disclosure.card2.li4.link': '詳情',
            'disclosure.card3.title': '公告事項',
            'disclosure.card3.li1': '新基金發行：量子綠色能源基金 – ',
            'disclosure.card3.li1.link': '新聞稿',
            'disclosure.card3.li2': '與科技創新中心合作 – ',
            'disclosure.card3.li2.link': '公告',
            'disclosure.card3.li3': '行業會議參與 – ',
            'disclosure.card3.li3.link': '日程',
            'disclosure.card3.li4': 'CEO 主題演講：數位資產的未來 – ',
            'disclosure.card3.li4.link': '觀看錄影',

            // Contact - index
            'contact.title': '聯絡我們',
            'contact.subtitle': '通過以下渠道與我們的團隊聯繫。',
            'contact.hq.label': '地址',
            'contact.hq.value': '中國上海市金融區 888 號，郵編 200120',
            'contact.phone.label': '電話',
            'contact.email.label': '電子郵件',
            'contact.hours.label': '營業時間',
            'contact.hours.value': '週一至週五 9:00-18:00 (GMT+8)',
            'contact.social.title': '關注我們',

            // Footer
            'footer.tagline': '以誠信和科技推動金融創新。',
            'footer.rights': '版權所有。',
            'footer.privacy': '隱私權',
            'footer.terms': '條款',
            'footer.disclosures': '揭露事項',

            // regulatory-filings.html
            'reg.pageTitle': '監管申報與財務報告',
            'reg.pageSubtitle': '所有監管文件、財務報表、審計報告和投資者資料的完整檔案庫。',
            'reg.breadcrumb.home': '首頁',
            'reg.breadcrumb.disclosure': '資訊揭露',
            'reg.breadcrumb.current': '監管申報',
            'reg.filter.year': '按年份篩選',
            'reg.filter.type': '按類型篩選',
            'reg.filter.allYears': '所有年份',
            'reg.filter.allTypes': '所有類型',
            'reg.filter.annual': '年度報告',
            'reg.filter.quarterly': '季度報告',
            'reg.filter.audit': '審計報告',
            'reg.filter.regulatory': '監管申報',
            'reg.filter.investor': '投資者資料',
            'reg.archive.title': '歷史檔案',
            'reg.archive.desc': '如需 2024 年之前的報告，請聯繫我們的投資者關係部門：',
            'reg.archive.contact': '或致電 +86 21 6888 8888 轉 201。',
            'btn.viewOnline': '線上看',
            'published': '發布日期',
            'reg.noMatch': '無符合條件的報告',
            'reg.noMatch.desc': '沒有符合當前篩選條件的報告，請嘗試選擇其他年份或類型。',
            'reg.noData': '暫無報告',
            'reg.noData.desc': '將 PDF 文件添加到電腦上的 regulatory-docs 文件夾，然後運行 <code>node generate-reports.js</code> 更新。',

            // services.html
            'svc.pageTitle': '我們的服務',
            'svc.pageSubtitle': '全面的基金管理方案，以尖端科技和深厚的金融專業知識為支撐。',
            'svc.breadcrumb.current': '服務項目',
            'svc.qs.title': '量化策略',
            'svc.qs.intro': '我們的專有演算法和機器學習模型識別市場低效率，在各類資產中創造超額收益。',
            'svc.qs.f1.title': '演算法交易',
            'svc.qs.f1.desc': '利用即時市場數據和預測分析的高頻及中頻交易策略。',
            'svc.qs.f2.title': '機器學習模型',
            'svc.qs.f2.desc': '用於模式識別和市場預測的深度神經網路與強化學習。',
            'svc.qs.f3.title': '統計套利',
            'svc.qs.f3.desc': '利用配對交易和均值回歸策略，捕捉暫時性市場錯位機會。',
            'svc.qs.f4.title': '因子投資',
            'svc.qs.f4.desc': '針對價值、動能、品質和低波動溢酬的多因子模型。',
            'svc.si.title': '可持續投資',
            'svc.si.intro': 'ESG 整合投資組合，將財務績效與積極的環境及社會影響相結合。',
            'svc.si.f1.title': '綠色能源基金',
            'svc.si.f1.desc': '投資於全球可再生能源、清潔技術和可持續基礎設施項目。',
            'svc.si.f2.title': 'ESG 整合',
            'svc.si.f2.desc': '將全面的環境、社會和治理篩選融入每一項投資決策。',
            'svc.si.f3.title': '影響力衡量',
            'svc.si.f3.desc': '追蹤碳減排、社會效益和治理改善的量化指標。',
            'svc.si.f4.title': '氣候轉型策略',
            'svc.si.f4.desc': '為全球低碳經濟轉型佈局的投資組合。',
            'svc.rm.title': '風險管理方案',
            'svc.rm.intro': '動態對沖和投資組合構建，旨在保護資本的同時捕捉上行潛力。',
            'svc.rm.f1.title': '動態對沖',
            'svc.rm.f1.desc': '使用選擇權、期貨和波動率工具進行即時投資組合保險，限制下行風險。',
            'svc.rm.f2.title': '尾部風險保護',
            'svc.rm.f2.desc': '旨在防範極端市場事件和黑天鵝情境的策略。',
            'svc.rm.f3.title': '多元資產配置',
            'svc.rm.f3.desc': '跨股票、固定收益、商品和另類資產的戰略與戰術資產配置。',
            'svc.rm.f4.title': '壓力測試與情境分析',
            'svc.rm.f4.desc': '針對歷史和假設市場情境進行嚴謹的投資組合壓力測試。',
            'svc.wm.title': '財富管理',
            'svc.wm.intro': '為高淨值個人、家族和機構提供個性化的財富管理服務。',
            'svc.wm.f1.title': '投資組合管理',
            'svc.wm.f1.desc': '根據您的風險承受能力、投資期限和財務目標，量身定制投資組合。',
            'svc.wm.f2.title': '家族辦公室服務',
            'svc.wm.f2.desc': '全面的財富規劃、遺產架構和跨代財富傳承策略。',
            'svc.wm.f3.title': '機構諮詢',
            'svc.wm.f3.desc': '捐贈基金、基金會和退休金管理，專注於長期可持續回報。',
            'svc.wm.f4.title': '另類投資',
            'svc.wm.f4.desc': '獲取私募股權、創投、對沖基金和實物資產機會。',
            'svc.cta.title': '準備好開始了嗎？',
            'svc.cta.desc': '與我們的團隊預約諮詢，討論 Apex Capital 如何幫助您實現財務目標。',
            'svc.cta.btn': '聯絡我們'
        }
    };

    var currentLang = localStorage.getItem('apex-lang') || 'en';

    function applyTranslations(lang) {
        const data = translations[lang];
        if (!data) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                el.innerHTML = data[key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

        // Update toggle button text
        const toggleBtn = document.querySelector('.lang-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = lang === 'zh' ? 'EN' : '繁中';
        }

        // Update page title
        if (lang === 'zh') {
            const path = window.location.pathname;
            if (path.includes('regulatory-filings')) {
                document.title = '監管申報與報告 - Apex Capital';
            } else if (path.includes('services')) {
                document.title = '我們的服務 - Apex Capital';
            } else {
                document.title = 'Apex Capital - 創新基金管理';
            }
        } else {
            const path = window.location.pathname;
            if (path.includes('regulatory-filings')) {
                document.title = 'Regulatory Filings & Reports - Apex Capital';
            } else if (path.includes('services')) {
                document.title = 'Our Services - Apex Capital';
            } else {
                document.title = 'Apex Capital - Innovative Fund Management';
            }
        }

        localStorage.setItem('apex-lang', lang);
        currentLang = lang;
    }

    function toggleLang() {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        applyTranslations(newLang);
    }

    // Apply saved language on load
    document.addEventListener('DOMContentLoaded', function() {
        applyTranslations(currentLang);

        // Attach toggle event
        const toggleBtn = document.querySelector('.lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleLang);
        }
    });
    // Expose for dynamic rendering callers
    window.applyTranslations = applyTranslations;
    window.getCurrentLang = function() { return currentLang; };
})();
