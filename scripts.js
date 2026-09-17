// Shared navbar and footer markup, edited here once and injected into every page.
const NAVBAR_HTML = `
<div class="w3-top">
  <div class="w3-bar w3-black w3-card" id="myNavbar">
    <a href="/index.html" class="w3-bar-item w3-button">Home</a>
    <a href="/pages/publications.html" class="w3-bar-item w3-button w3-hide-small">Publications</a>
    <a href="/pages/projects.html" class="w3-bar-item w3-button w3-hide-small">Research Projects</a>
    <a href="/pages/teaching.html" class="w3-bar-item w3-button w3-hide-small">Teaching Activities</a>
    <a href="/pages/responsabilities.html" class="w3-bar-item w3-button w3-hide-small">Administrative Responsabilities</a>
    <a href="/pages/contact.html" class="w3-bar-item w3-button w3-hide-small">Contact</a>
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-medium w3-hide-large" onclick="w3_toggle()">
      <i class="fa fa-bars"></i>
    </a>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-medium w3-hide-large">
    <a href="/pages/publications.html" class="w3-bar-item w3-button">Publications</a>
    <a href="/pages/projects.html" class="w3-bar-item w3-button">Research Projects</a>
    <a href="/pages/teaching.html" class="w3-bar-item w3-button">Teaching Activities</a>
    <a href="/pages/responsabilities.html" class="w3-bar-item w3-button">Administrative Responsabilities</a>
    <a href="/pages/contact.html" class="w3-bar-item w3-button">Contact</a>
  </div>
</div>`;

const FOOTER_HTML = `
<footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity" style="margin-top:128px">
  <div class="logos footer-logos w3-margin-bottom">
    <a href="https://univ-cotedazur.fr/" target="_blank"><img src="/images/logos/unica.png"/></a>
    <a href="https://iut.univ-cotedazur.fr/" target="_blank"><img src="/images/logos/iut.png"/></a>
    <a href="https://www.inria.fr/en/inria-centre-universite-cote-azur" target="_blank"><img src="/images/logos/inria.png" /></a>
    <a href="https://www.cnrs.fr" target="_blank"><img src="/images/logos/cnrs.png"/></a>
    <a href="https://www.i3s.unice.fr/en/" target="_blank"><img src="/images/logos/logoi3s-bleu.png" /></a>
    <a href="https://team.inria.fr/wimmics/" target="_blank"><img src="/images/logos/logo_wimmics2.png" /></a>
  </div>
  <div class="w3-xlarge">
    <a href="https://www.linkedin.com/in/aline-menin/" target="_blank"><i class="fa-brands fa-linkedin-in w3-hover-opacity"></i></a>
    <a href="https://scholar.google.com/citations?user=duq_TF0AAAAJ&hl=en" target="_blank"><i class="fa fa-brands fa-google-scholar w3-hover-opacity"></i></a>
    <a href="https://www.researchgate.net/profile/Aline-Menin" target="_blank"><i class="fa fa-brands fa-researchgate w3-hover-opacity"></i></a>
    <a href="https://cv.hal.science/aline-menin" target="_blank"><img src="/images/icons/hal.png" class="w3-hover-opacity" width="50" style="filter: grayscale(1); margin-top: -10px"></a>
  </div>
</footer>`;

// Toggle the responsive navbar on small screens
function w3_toggle() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
