/* Click-only mailto. No plaintext address in HTML. */
(function () {
  function address() {
    var local = [0x69, 0x6e, 0x66, 0x6f];
    var host = [0x62, 0x72, 0x6f, 0x6f, 0x6e, 0x67, 0x2e, 0x63, 0x6f, 0x6d];
    return (
      String.fromCharCode.apply(null, local) +
      String.fromCharCode(0x40) +
      String.fromCharCode.apply(null, host)
    );
  }

  function bind() {
    var nodes = document.querySelectorAll("[data-contact-email]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "mailto:" + address();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
