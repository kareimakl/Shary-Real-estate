
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <footer class="bg-white md:mb-0 mb-14" style="box-shadow: 6px 0px 12.8px 0px #00000045;">
        <div class="w-[1440px] max-w-full mx-auto text-[#1D4265] md:py-16 pt-10 pb-5 xl:px-8 sm:px-6 px-4">
          <div class="flex sm:flex-row flex-col justify-between gap-x-8 gap-y-10 border-b border-solid border-[#B9B9B9] md:pb-16 pb-8">
            <div>
              <div class="font-medium sm:text-4xl text-3xl mb-4">
                <p data-i18n="Do you have"></p>
                <p data-i18n="any questions?"></p>
              </div>
              <p data-i18n="Feel free to send us your questions or request a free consultation."></p>
              <button class="md:mt-10 mt-8 uppercase text-xs text-white py-3 px-6 bg-[#1D4265] rounded-3xl">
                <p style="letter-spacing: 0.04em;" data-i18n="Send a message"></p>
              </button>
            </div>
            <div class="md:block hidden">
              <p class="whitespace-nowrap" data-i18n="Download Our Application"></p>
              <div class="flex gap-2 mt-2">
                <a href="">
                  <img loading="lazy" src="./icons/google-play.svg" class="w-full" alt="google play">
                </a>
                <a href="">
                  <img loading="lazy" src="./icons/app-store.svg" class="w-full" alt="app store">
                </a>
              </div>
            </div>
          </div>
          <div class="md:mt-6 mt-8 flex flex-wrap md:justify-start justify-center md:gap-x-10 md:gap-y-6 gap-6 font-medium text-sm">
            <a href="./index.html" data-i18n="home"></a>
            <button onclick="openDropdownMenu('subGulf')" class="dropdown-btn-footer xl:block hidden" data-i18n="Gulf"></button>
            <button onclick="openDropdownMenu('subEurope')" class="dropdown-btn-footer xl:block hidden" data-i18n="Europe"></button>
            <a href="./properties-abroad.html" class="xl:hidden" data-i18n="Properties Abroad"></a>
            <a href="./sell.html" data-i18n="Sell"></a>
            <a href="./blogs.html" data-i18n="Blogs"></a>
            <a href="./about.html" data-i18n="About"></a>
            <a href="./contact.html" data-i18n="Contact"></a>
            <a href="./shary-card.html" data-i18n="Shary Card"></a>
            <a href="./careers.html" data-i18n="Careers"></a>
            <a href="./check-now.html" data-i18n="Agents"></a>
          </div>
          <div class="md:mt-20 mt-10 flex md:flex-row flex-col md:ltr:text-left md:rtl:text-right text-center justify-between md:items-end gap-8">
            <div>
              <div class="flex items-center md:justify-start justify-center gap-3">
                <img loading="lazy" src="./icons/facebook.svg" height="18" width="9" class="cursor-pointer" alt="facebook">
                <img loading="lazy" src="./icons/instagram.svg" height="17" width="17" class="cursor-pointer" alt="instagram">
                <img loading="lazy" src="./icons/twitter.svg" height="16" width="17" class="cursor-pointer" alt="twitter">
                <img loading="lazy" src="./icons/youtube.svg" height="14" width="22" class="cursor-pointer" alt="youtube">
                <img loading="lazy" src="./icons/linkedIn.svg" height="17" width="19" class="cursor-pointer" alt="linkedIn">
                <img loading="lazy" src="./icons/snapchat.svg" height="18" width="19" class="cursor-pointer" alt="snapchat">
                <img loading="lazy" src="./icons/tiktok.svg" height="18" width="16" class="cursor-pointer" alt="tiktok">
              </div>
              <div class="mt-12 flex flex-col justify-between md:gap-10 gap-6">
                <div class="flex md:flex-col flex-row md:justify-start justify-center">
                  <p class="font-medium uppercase text-xs md:mb-3" data-i18n="Contact us"></p>
                  <p class="font-medium md:text-sm text-xs">
                    <span class="md:hidden">: </span>
                    <span>+1 890 123-52-61</span>
                  </p>
                </div>
                <div class="flex md:flex-col flex-row md:justify-start justify-center">
                  <p class="font-medium uppercase text-xs md:mb-3" data-i18n="Email"></p>
                  <p class="font-medium md:text-sm text-xs">
                    <span class="md:hidden">: </span>
                    <span>info@shary.com</span>
                  </p>
                </div>
              </div>
              <div class="md:hidden mt-8">
                <p class="whitespace-nowrap text-xs font-normal" data-i18n="Download Our Application"></p>
                <div class="flex justify-center gap-2 mt-3">
                  <a href="">
                    <img loading="lazy" src="./icons/google-play.svg" class="w-[86px] h-[33px]" alt="google play">
                  </a>
                  <a href="">
                    <img loading="lazy" src="./icons/app-store.svg" class="w-[86px] h-[33px]" alt="app store">
                  </a>
                </div>
              </div>
            </div>
            <div class="md:ltr:text-left md:rtl:text-right text-center">
              <img loading="lazy" src="./images/shary-logo.svg" class="md:w-[200px] w-36 md:ms-0 m-auto" alt="logo">
              <p class="md:my-2 my-1 font-medium md:ms-1 md:text-base text-xs">Real Estate Company</p>
              <p class="manrope text-xs font-medium md:ms-1 md:mt-0 mt-4 md:py-0 py-2.5 md:border-0 border-t border-solid border-[#B9B9B9]">©Copyright 2025 — Shary.</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);