// ============================================
// JavaScript — GitHub Student Developer Pack
// Real brand icons via cdn.simpleicons.org
// ============================================

// Icon URL helper — uses direct URL if provided, else falls back to Simple Icons CDN
function brandIcon(tool) {
    if (tool.iconUrl) return tool.iconUrl;
    return `https://cdn.simpleicons.org/${tool.iconSlug}/${tool.iconColor || 'white'}`;
}

// All 85+ Tools Data with real brand icon slugs
const tools = [
    { name: "1Password", desc: "Password manager + Developer Tools for 1 year", iconSlug: "1password", iconColor: "0094F5", duration: "1 Year", tags: ["Security", "Dev Tools"], category: "security" },
    { name: "Adafruit", desc: "1 year of Adafruit IO+ and discounts on selected hardware", iconSlug: "adafruit", iconColor: "000000", duration: "1 Year", tags: ["IoT", "Hardware"], category: "dev-tools" },
    { name: "AlgoExpert", desc: "Access to 20 coding interview questions + 10% discount on all products", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/algolia/algolia-original.svg", duration: "Unlimited", tags: ["Learning", "Interview"], category: "learning" },
    { name: "Appfigures", desc: "Universal analytics and performance reports for 1 year", iconSlug: "googleanalytics", iconColor: "E37400", duration: "1 Year", tags: ["Analytics", "Marketing"], category: "productivity" },
    { name: "Appwrite", desc: "Education plan (equivalent to Pro, worth $15/mo) included", iconSlug: "appwrite", iconColor: "FD366E", duration: "While Student", tags: ["Cloud", "Backend"], category: "cloud" },
    { name: "Arduino", desc: "Arduino Cloud for 6 months + discounts on hardware", iconSlug: "arduino", iconColor: "00878F", duration: "6 Months", tags: ["IoT", "Hardware"], category: "dev-tools" },
    { name: "Astra Security", desc: "6 month access to website firewall & malware scanner", iconSlug: "letsencrypt", iconColor: "003A70", duration: "6 Months", tags: ["Security", "Firewall"], category: "security" },
    { name: "Blackfire", desc: "Developer subscription for code performance measurement", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", duration: "While Student", tags: ["Performance", "Analytics"], category: "dev-tools" },
    { name: "Blockchair", desc: "100,000 API requests for blockchain data", iconSlug: "bitcoin", iconColor: "F7931A", duration: "While Student", tags: ["Blockchain", "API"], category: "dev-tools" },
    { name: "Bootstrap Studio", desc: "License for responsive website builder included", iconSlug: "bootstrap", iconColor: "7952B3", duration: "While Student", tags: ["Design", "Web"], category: "design" },
    { name: "BrowserStack", desc: "Automate Mobile Plan for 1 parallel and 1 user for 1 year", iconSlug: "browserstack", iconColor: "FF6C37", duration: "1 Year", tags: ["Testing", "Automation"], category: "dev-tools" },
    { name: "Camber", desc: "Student plan — 200 CPU hours, 75GB storage, 200 LLM messages/month", iconSlug: "openai", iconColor: "412991", duration: "While Student", tags: ["Cloud", "AI"], category: "cloud" },
    { name: "CARTO", desc: "Account upgrades with increased storage & premium features for 2 years", iconSlug: "openstreetmap", iconColor: "7EBC6F", duration: "2 Years", tags: ["Maps", "Data"], category: "dev-tools" },
    { name: "Codecov", desc: "Code coverage on public and private repositories", iconSlug: "codecov", iconColor: "F01F7A", duration: "While Student", tags: ["Testing", "CI/CD"], category: "dev-tools" },
    { name: "Codédex", desc: "6 months of Codédex Club premium membership included", iconSlug: "codecademy", iconColor: "1F4056", duration: "6 Months", tags: ["Learning", "Coding"], category: "learning" },
    { name: "CodeScene", desc: "Student account to analyze private GitHub repositories", iconSlug: "githubactions", iconColor: "2088FF", duration: "While Student", tags: ["Analytics", "Code Review"], category: "dev-tools" },
    { name: "ConfigCat", desc: "1000 feature flags, unlimited users included", iconSlug: "launchdarkly", iconColor: "3DD6F5", duration: "While Student", tags: ["Dev Tools", "Feature Flags"], category: "dev-tools" },
    { name: "DailyBot", desc: "Business plan for 10 users for 6 months — standups & automation", iconSlug: "slack", iconColor: "4A154B", duration: "6 Months", tags: ["Productivity", "Automation"], category: "productivity" },
    { name: "Dashlane", desc: "Dashlane Premium password manager for 6 months", iconSlug: "dashlane", iconColor: "0E353D", duration: "6 Months", tags: ["Security", "Password"], category: "security" },
    { name: "DataCamp", desc: "3 months access to all DataCamp courses and content", iconSlug: "datacamp", iconColor: "03EF62", duration: "3 Months", tags: ["Learning", "Data Science"], category: "learning" },
    { name: "Datadog", desc: "Pro Account including 10 servers — for 2 years", iconSlug: "datadog", iconColor: "632CA6", duration: "2 Years", tags: ["Monitoring", "DevOps"], category: "security" },
    { name: "Deepnote", desc: "Team plan — unlimited members, projects, premium integrations", iconSlug: "jupyter", iconColor: "F37626", duration: "While Student", tags: ["Data Science", "Notebooks"], category: "dev-tools" },
    { name: "DeepScan", desc: "6-month trial — platform for better JavaScript apps", iconSlug: "javascript", iconColor: "F7DF1E", duration: "6 Months", tags: ["JavaScript", "Code Quality"], category: "dev-tools" },
    { name: "DevCycle", desc: "1 year Starter Plan — unlimited seats, flags, and usage", iconSlug: "launchdarkly", iconColor: "3DD6F5", duration: "1 Year", tags: ["Feature Flags", "Dev Tools"], category: "dev-tools" },
    { name: "DigitalOcean", desc: "$200 in platform credit for 1 year — cloud hosting", iconSlug: "digitalocean", iconColor: "0080FF", duration: "1 Year", tags: ["Cloud", "Hosting"], category: "cloud" },
    { name: "Doppler", desc: "Team subscription for secrets management included", iconSlug: "doppler", iconColor: "FF6100", duration: "While Student", tags: ["Security", "Secrets"], category: "security" },
    { name: "Educative", desc: "6 months access to 70+ courses + 30% discount on subscriptions", iconSlug: "educative", iconColor: "4285F4", duration: "6 Months", tags: ["Learning", "Courses"], category: "learning" },
    { name: "Frontend Masters", desc: "6 months access to all courses and workshops", iconUrl: "https://cdn.simpleicons.org/frontendmentor/3F54A3", duration: "6 Months", tags: ["Learning", "Frontend"], category: "learning" },
    { name: "GitHub Pro", desc: "GitHub Pro — unlimited private repos, advanced tools, and more", iconSlug: "github", iconColor: "ffffff", duration: "While Student", tags: ["Dev Tools", "Git"], category: "dev-tools" },
    { name: "Campus Experts", desc: "Apply to build technical communities on campus with GitHub support", iconSlug: "github", iconColor: "ffffff", duration: "While Student", tags: ["Community", "Leadership"], category: "learning" },
    { name: "GitHub Cert Voucher", desc: "1 voucher for Foundations or Copilot Certification exam ($150 value)", iconSlug: "github", iconColor: "ffffff", duration: "1 Voucher", tags: ["Certification", "Learning"], category: "learning" },
    { name: "GitHub Codespaces", desc: "Pro level access — cloud dev environments anywhere", iconSlug: "github", iconColor: "ffffff", duration: "While Student", tags: ["Cloud", "IDE"], category: "cloud" },
    { name: "Community Exchange", desc: "Share projects, discover repos in student community", iconSlug: "github", iconColor: "ffffff", duration: "While Student", tags: ["Community", "Open Source"], category: "dev-tools" },
    { name: "GitHub Copilot Pro", desc: "AI pair programmer with autocomplete-style suggestions — included", iconSlug: "githubcopilot", iconColor: "000000", duration: "While Student", tags: ["AI", "Coding"], category: "dev-tools" },
    { name: "GitHub Desktop", desc: "Open source Git client — included for everyone", iconSlug: "github", iconColor: "ffffff", duration: "Free", tags: ["Git", "Desktop"], category: "dev-tools" },
    { name: "GitHub Pages", desc: "Website hosting directly from your GitHub repository", iconSlug: "githubpages", iconColor: "222222", duration: "Free", tags: ["Hosting", "Web"], category: "domains" },
    { name: "GitKraken", desc: "6 months + up to 80% off Pro — GUI & terminal Git client", iconSlug: "gitkraken", iconColor: "179287", duration: "6 Months", tags: ["Git", "GUI"], category: "dev-tools" },
    { name: "GitLens", desc: "Student plan for 6 months — #1 Git VS Code extension", iconSlug: "git", iconColor: "F05032", duration: "6 Months", tags: ["Git", "VS Code"], category: "dev-tools" },
    { name: "GoRails", desc: "All Ruby on Rails video tutorials for 12 months", iconSlug: "rubyonrails", iconColor: "D30001", duration: "1 Year", tags: ["Learning", "Ruby"], category: "learning" },
    { name: "HazeOver", desc: "App license for Mac — focus while working or studying", iconSlug: "apple", iconColor: "ffffff", duration: "License", tags: ["Productivity", "Mac"], category: "productivity" },
    { name: "Heroku", desc: "$13/month credit for 24 months ($312 total) — app deployment platform", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg", duration: "2 Years", tags: ["Cloud", "Deployment"], category: "cloud" },
    { name: "Honeybadger", desc: "Small account for 1 year — exception, uptime & cron monitoring", iconSlug: "honeybadger", iconColor: "EA5634", duration: "1 Year", tags: ["Monitoring", "Error Tracking"], category: "security" },
    { name: "Icons8", desc: "3-month subscription — icons, photos, illustrations, and music", iconSlug: "icons8", iconColor: "1FB141", duration: "3 Months", tags: ["Design", "Assets"], category: "design" },
    { name: "IconScout", desc: "60 premium icons every month for 1 year from selected contributors", iconSlug: "iconify", iconColor: "1769AA", duration: "1 Year", tags: ["Design", "Icons"], category: "design" },
    { name: "Imgbot", desc: "Image optimization for all public and private projects", iconSlug: "githubactions", iconColor: "2088FF", duration: "Free", tags: ["Performance", "Images"], category: "dev-tools" },
    { name: "Interview Cake", desc: "Full coding interview prep course access for 1 week", iconSlug: "leetcode", iconColor: "FFA116", duration: "1 Week", tags: ["Learning", "Interview"], category: "learning" },
    { name: "JetBrains", desc: "All professional IDEs — IntelliJ IDEA, PyCharm, WebStorm & more", iconSlug: "jetbrains", iconColor: "000000", duration: "1 Year", tags: ["IDE", "Dev Tools"], category: "dev-tools" },
    { name: "LambdaTest", desc: "LambdaTest Live Plan for 1 year — cross browser testing", iconSlug: "selenium", iconColor: "43B02A", duration: "1 Year", tags: ["Testing", "Browser"], category: "dev-tools" },
    { name: "LocalStack", desc: "License included — emulate AWS services on your laptop", iconSlug: "amazonaws", iconColor: "FF9900", duration: "While Student", tags: ["Cloud", "AWS"], category: "cloud" },
    { name: "Microsoft Azure", desc: "$100 credit + 25+ cloud services (for students 18+)", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg", duration: "While Student", tags: ["Cloud", "Microsoft"], category: "cloud" },
    { name: "Azure (Ages 13-17)", desc: "App Services, Functions, MySQL, DevOps for ages 13-17", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg", duration: "While Student", tags: ["Cloud", "Youth"], category: "cloud" },
    { name: "VS Dev Essentials", desc: "VS Community, Pluralsight training, 1 year Azure + $200 credit", iconSlug: "visualstudio", iconColor: "5C2D91", duration: "While Student", tags: ["IDE", "Training"], category: "dev-tools" },
    { name: "MongoDB", desc: "$50 Atlas Credits + MongoDB Compass, University access & certification", iconSlug: "mongodb", iconColor: "47A248", duration: "While Student", tags: ["Database", "NoSQL"], category: "cloud" },
    { name: "Name.com", desc: "Domain from 25+ extensions (.live, .studio, .software, .app, .dev)", iconSlug: "namecheap", iconColor: "DE3723", duration: "1 Year", tags: ["Domain", "Web"], category: "domains" },
    { name: "Namecheap", desc: "1 year .me domain + 1 SSL certificate for 1 year", iconSlug: "namecheap", iconColor: "DE3723", duration: "1 Year", tags: ["Domain", "SSL"], category: "domains" },
    { name: "New Relic", desc: "Observability platform included — $300/month value!", iconSlug: "newrelic", iconColor: "1CE783", duration: "While Student", tags: ["Monitoring", "Observability"], category: "security" },
    { name: "Notion", desc: "Education plan with AI — everything in Plus plan + collaboration", iconSlug: "notion", iconColor: "000000", duration: "While Student", tags: ["Productivity", "Notes"], category: "productivity" },
    { name: "Notion Templates", desc: "Curated templates — CS dashboard, hackathons, portfolios & more", iconSlug: "notion", iconColor: "000000", duration: "Free", tags: ["Productivity", "Templates"], category: "productivity" },
    { name: "Octicons", desc: "Open source icon library with Figma designs built for GitHub's UI", iconSlug: "figma", iconColor: "F24E1E", duration: "Free", tags: ["Design", "Icons"], category: "design" },
    { name: "Pageclip", desc: "Basic plan included — server for static websites and HTML forms", iconSlug: "html5", iconColor: "E34F26", duration: "While Student", tags: ["Web", "Forms"], category: "dev-tools" },
    { name: "POEditor", desc: "Plus Plan for 1 year — localization management platform", iconSlug: "crowdin", iconColor: "2E3340", duration: "1 Year", tags: ["Localization", "i18n"], category: "dev-tools" },
    { name: "Polypane", desc: "Individual plan for 1 year — browser for responsive web development", iconSlug: "polypane", iconColor: "4040DC", duration: "1 Year", tags: ["Dev Tools", "Browser"], category: "dev-tools" },
    { name: "PomoDone", desc: "Lite plan for 2 years — Pomodoro technique time tracking", iconSlug: "todoist", iconColor: "E44332", duration: "2 Years", tags: ["Productivity", "Time"], category: "productivity" },
    { name: "PopSQL", desc: "Premium subscription — collaborative SQL editor & data visualization", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", duration: "While Student", tags: ["Database", "SQL"], category: "dev-tools" },
    { name: "Requestly", desc: "Professional plan ($270 value) for 1 year — HTTP request tools", iconSlug: "postman", iconColor: "FF6C37", duration: "1 Year", tags: ["Dev Tools", "HTTP"], category: "dev-tools" },
    { name: "Scrimba", desc: "1 month Pro access — 40+ interactive coding courses", iconSlug: "scrimba", iconColor: "2B283A", duration: "1 Month", tags: ["Learning", "Interactive"], category: "learning" },
    { name: "Sentry", desc: "50K errors, 100K transactions, 500 replays — renewable annually", iconSlug: "sentry", iconColor: "362D59", duration: "1 Year", tags: ["Monitoring", "Error Tracking"], category: "security" },
    { name: "Simple Analytics", desc: "Starter plan for 1 year — privacy-friendly analytics (100k views/mo)", iconSlug: "simpleanalytics", iconColor: "FF4F64", duration: "1 Year", tags: ["Analytics", "Privacy"], category: "productivity" },
    { name: "SlideCoach", desc: "2,000 credits (40 AI sessions) for 1 year — AI presentation coach", iconSlug: "googleslides", iconColor: "FBBC04", duration: "1 Year", tags: ["Productivity", "AI"], category: "productivity" },
    { name: "SQLGate", desc: "Standard Subscription for 1 year — IDE for multiple SQL databases", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", duration: "1 Year", tags: ["Database", "SQL"], category: "dev-tools" },
    { name: "Stripe", desc: "Waived transaction fees on first $1000 in revenue processed", iconSlug: "stripe", iconColor: "635BFF", duration: "One-time", tags: ["Payments", "Fintech"], category: "dev-tools" },
    { name: "SymfonyCasts", desc: "3-month subscription — Symfony and PHP video tutorials", iconSlug: "symfony", iconColor: "000000", duration: "3 Months", tags: ["Learning", "PHP"], category: "learning" },
    { name: ".TECH Domain", desc: "One standard .TECH domain for 1 year", iconSlug: "googlechrome", iconColor: "4285F4", duration: "1 Year", tags: ["Domain"], category: "domains" },
    { name: "Termius", desc: "Pro and Team features — SSH client on desktop & mobile", iconSlug: "gnometerminal", iconColor: "241F31", duration: "While Student", tags: ["Dev Tools", "SSH"], category: "dev-tools" },
    { name: "Testmail", desc: "Essential plan included — unlimited email addresses for automated testing", iconSlug: "gmail", iconColor: "EA4335", duration: "While Student", tags: ["Testing", "Email"], category: "dev-tools" },
    { name: "Themeisle", desc: "Neve Agency WordPress theme for 1 year", iconSlug: "wordpress", iconColor: "21759B", duration: "1 Year", tags: ["Design", "WordPress"], category: "design" },
    { name: "ToDiagram", desc: "Pro Plan — turn JSON, YAML, CSV into interactive diagrams", iconSlug: "diagramsdotnet", iconColor: "F08705", duration: "While Student", tags: ["Dev Tools", "Diagrams"], category: "dev-tools" },
    { name: "Tower", desc: "Tower Pro included — powerful Git desktop client for Mac and Windows", iconSlug: "git", iconColor: "F05032", duration: "While Student", tags: ["Git", "Desktop"], category: "dev-tools" },
    { name: "Travis CI", desc: "Private builds included — continuous integration platform", iconSlug: "travisci", iconColor: "3EAAAF", duration: "While Student", tags: ["CI/CD", "Testing"], category: "dev-tools" },
    { name: "Vaadin", desc: "Pro subscription included — Java framework for Progressive Web Apps", iconSlug: "vaadin", iconColor: "00B4F0", duration: "While Student", tags: ["Java", "Web"], category: "dev-tools" },
    { name: "Visme", desc: "3 months Starter plan — presentations, documents, data viz", iconSlug: "canva", iconColor: "00C4CC", duration: "3 Months", tags: ["Design", "Presentations"], category: "design" },
    { name: "VS Code", desc: "Coding packs for Java, Python, and .NET development", iconSlug: "visualstudiocode", iconColor: "007ACC", duration: "Free", tags: ["IDE", "Dev Tools"], category: "dev-tools" },
    { name: "Working Copy", desc: "All Pro features — powerful Git client for iPhone & iPad", iconSlug: "git", iconColor: "F05032", duration: "While Student", tags: ["Git", "Mobile"], category: "dev-tools" },
    { name: "Xojo", desc: "Pro license — cross-platform dev for Desktop, Mobile, Web & Pi", iconSlug: "xcode", iconColor: "147EFB", duration: "While Student", tags: ["Dev Tools", "Cross-Platform"], category: "dev-tools" },
    { name: "Zyte (Scrapy Cloud)", desc: "1 forever unit — unlimited team members, projects, crawl time", iconSlug: "python", iconColor: "3776AB", duration: "Forever", tags: ["Web Scraping", "Data"], category: "dev-tools" },
];

// ============ DOM READY ============
document.addEventListener('DOMContentLoaded', () => {
    renderTools(tools);
    setupSearch();
    setupFilters();
    setupMobileMenu();
    setupParticles();
    setupScrollHeader();
    setupSmoothScroll();
    animateOnScroll();
    setupCounterAnimation();
});

// ============ RENDER TOOLS ============
function renderTools(toolsList) {
    const grid = document.getElementById('toolsGrid');
    const count = document.getElementById('toolsCount');
    grid.innerHTML = '';
    count.textContent = `Showing ${toolsList.length} offers`;

    toolsList.forEach((tool, i) => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.style.animationDelay = `${i * 0.03}s`;
        card.dataset.category = tool.category;

        const iconUrl = brandIcon(tool);

        card.innerHTML = `
            <div class="tool-card-header">
                <div class="tool-icon-wrap">
                    <img src="${iconUrl}" alt="${tool.name}" width="24" height="24" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:1.2rem\\'>📦</span>'">
                </div>
                <div class="tool-duration">${tool.duration}</div>
            </div>
            <h4>${tool.name}</h4>
            <p>${tool.desc}</p>
            <div class="tool-tags">
                ${tool.tags.map(t => `<span class="tool-tag">${t}</span>`).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============ SEARCH ============
function setupSearch() {
    const input = document.getElementById('searchInput');
    let debounceTimer;
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const q = input.value.toLowerCase().trim();
            const activeFilter = document.querySelector('.filter-tab.active').dataset.filter;
            filterAndRender(q, activeFilter);
        }, 200);
    });
}

// ============ FILTERS ============
function setupFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const q = document.getElementById('searchInput').value.toLowerCase().trim();
            filterAndRender(q, tab.dataset.filter);
        });
    });
}

function filterAndRender(query, category) {
    let filtered = tools;
    if (category !== 'all') {
        filtered = filtered.filter(t => t.category === category);
    }
    if (query) {
        filtered = filtered.filter(t =>
            t.name.toLowerCase().includes(query) ||
            t.desc.toLowerCase().includes(query) ||
            t.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }
    renderTools(filtered);
}

// ============ MOBILE MENU ============
function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
        btn.classList.toggle('active');
    });

    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('active');
            btn.classList.remove('active');
        });
    });
}

// ============ SCROLL HEADER ============
function setupScrollHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const curr = window.scrollY;
        if (curr > 50) {
            header.style.background = 'rgba(6, 11, 24, 0.96)';
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
        } else {
            header.style.background = 'rgba(6, 11, 24, 0.75)';
            header.style.boxShadow = 'none';
        }
        lastScroll = curr;
    });
}

// ============ SMOOTH SCROLL ============
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ============ SCROLL ANIMATIONS ============
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

    // Individual elements — fade-slide-up
    document.querySelectorAll('.feature-card, .showcase-card, .trust-box, .why-card, .detail-item, .chip, .section-title, .section-subtitle, .badge-pill, .hero-title, .hero-desc, .hero-btns, .stats-bar, .search-box, .cta-content, .pricing-hero-card, .domain-card, .models-showcase, .models-title, .models-subtitle').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Staggered grids — children animate one by one
    document.querySelectorAll('.bento-grid, .showcase-grid, .trust-boxes, .why-grid, .detail-list, .category-chips, .model-chips, .domains-grid, .payment-icons, .price-features').forEach(el => {
        el.classList.add('reveal-stagger');
        observer.observe(el);
    });
}

// ============ COUNTER ANIMATION ============
function setupCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const prefix = el.dataset.prefix || '';
                let current = 0;
                const step = Math.max(1, Math.floor(target / 40));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = prefix + current + suffix;
                }, 30);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

// ============ PARTICLES ============
function setupParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const count = Math.min(50, Math.floor(window.innerWidth / 30));

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.8 + 0.4,
            alpha: Math.random() * 0.35 + 0.05,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 145, 255, ${p.alpha})`;
            ctx.fill();
        });

        // Subtle connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 145, 255, ${0.04 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}
