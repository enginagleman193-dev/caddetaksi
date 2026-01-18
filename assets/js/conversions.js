/* Google Ads conversion trigger (Telefon tiklama)
   - Tracks ONLY tel: links (phone call clicks)
   - Does NOT track WhatsApp links
*/
(function () {
  function fireConversion() {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17879012709/KqVZCKTz6eYbEOWqsM1C'
        });
      }
    } catch (e) {
      // no-op
    }
  }

  function isPhoneLink(a) {
    if (!a || !a.getAttribute) return false;
    var href = (a.getAttribute('href') || '').trim();
    if (!href) return false;
    return href.indexOf('tel:') === 0;
  }

  // Event delegation to cover dynamic elements too
  document.addEventListener(
    'click',
    function (ev) {
      var el = ev.target;
      if (!el) return;

      // climb up to nearest <a>
      while (el && el !== document && el.tagName !== 'A') {
        el = el.parentNode;
      }

      if (el && el.tagName === 'A' && isPhoneLink(el)) {
        fireConversion();
      }
    },
    true
  );
})();
