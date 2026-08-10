/* ==========================================
   Linux Fundamentals — Interactive JS
========================================== */


/* ==========================================
   COMMAND SEARCH
   Filters topic-sections by keyword
========================================== */

(function () {

    'use strict';

    /* ---- Wait for DOM ---- */

    document.addEventListener('DOMContentLoaded', function () {

        /* ==========================================
           Quick-navigation smooth scroll highlight
        ========================================== */

        const navBtns = document.querySelectorAll('.linux-nav-btn');

        navBtns.forEach(function (btn) {

            btn.addEventListener('click', function () {

                /* Remove active class from all buttons */

                navBtns.forEach(function (b) {

                    b.classList.remove('active-nav');

                });

                /* Add to clicked */

                btn.classList.add('active-nav');

            });

        });


        /* ==========================================
           SCROLL SPY — highlight active nav btn
        ========================================== */

        const navLinks = document.querySelectorAll('.linux-nav-btn[href^="#"]');

        if (navLinks.length && 'IntersectionObserver' in window) {

            const observer = new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            const id = entry.target.id;

                            navLinks.forEach(function (link) {

                                link.classList.remove('active-nav');

                                if (id && link.getAttribute('href') === '#' + id) {

                                    link.classList.add('active-nav');

                                }

                            });

                        }

                    });

                },

                { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }

            );

            document.querySelectorAll('section[id]').forEach(function (s) {

                observer.observe(s);

            });

        }


        /* ==========================================
           TOPIC SEARCH
           Filters each .topic-section by keyword
        ========================================== */

        const searchInput = document.getElementById('linuxSearch');

        if (searchInput) {

            searchInput.addEventListener('keyup', function () {

                const keyword = searchInput.value.trim().toLowerCase();

                const topicSections =
                    document.querySelectorAll('.topic-section');

                topicSections.forEach(function (section) {

                    const text = section.innerText.toLowerCase();

                    if (!keyword || text.includes(keyword)) {

                        section.style.display = '';

                    } else {

                        section.style.display = 'none';

                    }

                });

                /* Hide quick nav while searching */

                const quickNav =
                    document.querySelector('.linux-quick-nav');

                if (quickNav) {

                    quickNav.style.display = keyword ? 'none' : '';

                }

            });

        }


        /* ==========================================
           INTERVIEW ACCORDION
           <details> elements handle open/close
           natively; we close others on open
        ========================================== */

        const allDetails =
            document.querySelectorAll('.interview-list details');

        allDetails.forEach(function (detail) {

            detail.addEventListener('toggle', function () {

                if (detail.open) {

                    allDetails.forEach(function (other) {

                        if (other !== detail && other.open) {

                            other.open = false;

                        }

                    });

                }

            });

        });


        /* ==========================================
           COPY CODE — click any <code> block
        ========================================== */

        document.querySelectorAll(
            '.linux-cheat-grid code, ' +
            '.command-example code, ' +
            '.shell-code-card pre code, ' +
            '.hardening-card code, ' +
            '.process-card code, ' +
            '.network-command-card code, ' +
            '.linux-soc-command code, ' +
            '.hardening-command-list code, ' +
            '.security-command-examples code, ' +
            '.shell-example > code, ' +
            '.shell-examples code'
        ).forEach(function (el) {

            el.title = 'Click to copy';

            el.style.cursor = 'pointer';

            el.addEventListener('click', function () {

                const text = el.innerText.trim();

                if (navigator.clipboard) {

                    navigator.clipboard.writeText(text).then(function () {

                        showCopied(el);

                    });

                } else {

                    const ta = document.createElement('textarea');

                    ta.value = text;

                    document.body.appendChild(ta);

                    ta.select();

                    document.execCommand('copy');

                    document.body.removeChild(ta);

                    showCopied(el);

                }

            });

        });


        /* ==========================================
           CARD ENTRANCE ANIMATION
        ========================================== */

        if ('IntersectionObserver' in window) {

            const cardObserver = new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add('linux-visible');

                            cardObserver.unobserve(entry.target);

                        }

                    });

                },

                { threshold: 0.10 }

            );

            document.querySelectorAll(

                '.linux-card, .process-card, .network-command-card, ' +
                '.shell-concept-card, .hardening-card, .cyber-linux-card, ' +
                '.revision-card, .permission-value-card, .check-item, ' +
                '.workflow-step, .linux-soc-command, .shell-example'

            ).forEach(function (card) {

                card.style.opacity = '0';

                card.style.transform = 'translateY(20px)';

                card.style.transition =
                    'opacity .5s ease, transform .5s ease';

                cardObserver.observe(card);

            });

        }

    }); /* end DOMContentLoaded */


    /* ==========================================
       HELPER — show copied tooltip
    ========================================== */

    function showCopied(el) {

        const original = el.innerText;

        el.innerText = 'Copied!';

        el.style.background = 'rgba(34, 197, 94, .20)';

        el.style.color = '#22c55e';

        setTimeout(function () {

            el.innerText = original;

            el.style.background = '';

            el.style.color = '';

        }, 1500);

    }


}());


/* ==========================================
   INJECT RUNTIME STYLES
========================================== */

document.addEventListener('DOMContentLoaded', function () {

    const style = document.createElement('style');

    style.textContent = `

        .linux-card.linux-visible,
        .process-card.linux-visible,
        .network-command-card.linux-visible,
        .shell-concept-card.linux-visible,
        .hardening-card.linux-visible,
        .cyber-linux-card.linux-visible,
        .revision-card.linux-visible,
        .permission-value-card.linux-visible,
        .check-item.linux-visible,
        .workflow-step.linux-visible,
        .linux-soc-command.linux-visible,
        .shell-example.linux-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        .linux-nav-btn.active-nav {
            background: var(--accent);
            color: white;
            border-color: var(--accent);
        }

    `;

    document.head.appendChild(style);

});
