// Shared site behavior for navigation, report links, and lightweight widgets.
(function() {
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str == null ? '' : String(str);
        return div.innerHTML;
    }

    function getFileIcon(filename) {
        var ext = (filename || '').split('.').pop().toLowerCase();
        var icons = {
            pdf: 'fa-file-pdf',
            doc: 'fa-file-word',
            docx: 'fa-file-word',
            xls: 'fa-file-excel',
            xlsx: 'fa-file-excel',
            csv: 'fa-file-csv',
            ppt: 'fa-file-powerpoint',
            pptx: 'fa-file-powerpoint',
            png: 'fa-file-image',
            jpg: 'fa-file-image',
            jpeg: 'fa-file-image',
            gif: 'fa-file-image',
            zip: 'fa-file-archive',
            rar: 'fa-file-archive',
            txt: 'fa-file-alt',
            md: 'fa-file-alt'
        };
        return icons[ext] || 'fa-file';
    }

    function initMobileNav() {
        document.querySelectorAll('.menu-toggle').forEach(function(button) {
            button.addEventListener('click', function() {
                var nav = button.closest('.navbar');
                var links = nav ? nav.querySelector('.nav-links') : document.querySelector('.nav-links');
                if (links) links.classList.toggle('active');
            });
        });
    }

    function initRecentReports() {
        var list = document.getElementById('recent-reports-list');
        if (!list) return;

        var reports = (typeof REGULATORY_REPORTS !== 'undefined') ? REGULATORY_REPORTS : [];
        if (reports.length === 0) {
            list.innerHTML = '<li class="report-loading">No documents found. Add files to regulatory-docs/ folder.</li>';
            return;
        }

        list.innerHTML = reports.slice(0, 4).map(function(report) {
            return '<li>' +
                '<i class="fas ' + getFileIcon(report.filename) + ' recent-icon"></i> ' +
                '<span>' + escapeHtml(report.title) + '</span>' +
                '<small class="recent-date">' + escapeHtml(report.date) + '</small> ' +
                '<a href="' + escapeHtml(report.path) + '" class="pdf-link">View</a>' +
            '</li>';
        }).join('');

        if (typeof window.applyTranslations === 'function') {
            var lang = window.getCurrentLang ? window.getCurrentLang() : (localStorage.getItem('apex-lang') || 'en');
            window.applyTranslations(lang);
        }
    }

    function initPdfLinks() {
        document.querySelectorAll('.pdf-link, .btn-view[data-pdf]').forEach(function(link) {
            link.addEventListener('click', function(e) {
                var href = link.getAttribute('data-pdf') || link.getAttribute('href');
                if (!href) return;
                e.preventDefault();
                window.open(href, '_blank', 'noopener');
            });
        });
    }

    function initFacebookToggle() {
        var toggle = document.getElementById('fbToggle');
        var wrap = document.getElementById('fbWrap');
        if (!toggle || !wrap) return;

        toggle.addEventListener('click', function() {
            if (wrap.innerHTML) {
                wrap.innerHTML = '';
                toggle.textContent = 'Latest Updates';
                return;
            }

            wrap.innerHTML = '<div class="fb-page" data-href="https://www.facebook.com/jnscapital" data-tabs="timeline" data-height="300" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"></div>';
            toggle.textContent = 'Collapse';
            if (typeof FB !== 'undefined') FB.XFBML.parse(wrap);
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        initMobileNav();
        initRecentReports();
        initPdfLinks();
        initFacebookToggle();
    });

    window.siteUtils = {
        escapeHtml: escapeHtml,
        getFileIcon: getFileIcon,
        initPdfLinks: initPdfLinks
    };
})();
