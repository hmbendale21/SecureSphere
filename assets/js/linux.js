/* ==========================================
   Linux Fundamentals — Interactive JS
========================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       TOPIC SEARCH FILTER
    ========================================== */

    const searchInput = document.getElementById('topicSearch');

    if (searchInput) {

        searchInput.addEventListener('keyup', () => {

            const keyword = searchInput.value.toLowerCase().trim();

            const sections = document.querySelectorAll('.topic-section');


            sections.forEach(section => {

                const text = section.innerText.toLowerCase();

                if (!keyword || text.includes(keyword)) {

                    section.style.display = 'block';

                } else {

                    section.style.display = 'none';

                }

            });

        });

    }


    /* ==========================================
       SCROLL SPY — QUICK NAV HIGHLIGHT
    ========================================== */

    const navLinks = document.querySelectorAll('.learn-link[href^="#"]');

    const sections = document.querySelectorAll('.topic-section, section[id]');


    if (navLinks.length && 'IntersectionObserver' in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id = entry.target.id;

                    navLinks.forEach(link => {

                        const targetHref = link.getAttribute('href')?.replace('#', '');

                        if (targetHref === id) {

                            link.classList.add('active');

                        } else {

                            link.classList.remove('active');

                        }

                    });

                }

            });

        }, { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' });


        sections.forEach(section => {

            if (section.id) observer.observe(section);

        });

    }


    /* ==========================================
       INTERVIEW ACCORDION & DETAILS
    ========================================== */

    const allDetails = document.querySelectorAll('.interview-list details, details');

    allDetails.forEach(detail => {

        detail.addEventListener('toggle', () => {

            if (detail.open) {

                allDetails.forEach(other => {

                    if (other !== detail && other.open) {

                        other.open = false;

                    }

                });

            }

        });

    });


    /* ==========================================
       CLICK TO COPY WITH TOAST NOTIFICATION
    ========================================== */

    function showCopyToast(text) {

        let toast = document.getElementById('copyToast');

        if (!toast) {

            toast = document.createElement('div');

            toast.id = 'copyToast';

            toast.className = 'copy-toast';

            toast.innerHTML = '<i class="bi bi-check-circle-fill"></i><span>Copied to clipboard!</span>';

            document.body.appendChild(toast);

        }

        toast.classList.add('show');

        setTimeout(() => {

            toast.classList.remove('show');

        }, 2000);

    }


    document.addEventListener('click', (event) => {

        const codeEl = event.target.closest('code, pre code');

        if (!codeEl) return;


        const codeText = codeEl.innerText.trim();

        if (!codeText) return;


        if (navigator.clipboard && navigator.clipboard.writeText) {

            navigator.clipboard.writeText(codeText).then(() => {

                showCopyToast(codeText);

            }).catch(err => {

                console.error("Copy failed:", err);

            });

        } else {

            const ta = document.createElement('textarea');

            ta.value = codeText;

            document.body.appendChild(ta);

            ta.select();

            document.execCommand('copy');

            document.body.removeChild(ta);

            showCopyToast(codeText);

        }

    });

});
