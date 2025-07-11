class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-white   border-t border-gray-200 pt-8 pb-6 text-[#1D4265]">
        <div class="max-w-[1221px] mx-auto px-4 sm:px-6 xl:px-8">

          <!-- Mobile Dropdown -->
          <div class="md:hidden block text-sm text-gray-700 space-y-4 mb-10">
            ${["Areas", "Compounds", "Developers", "Top Searches", "Others"]
              .map(
                (title) => `
              <div>
                <button class="w-full flex justify-between items-center footer-toggle font-bold text-black">
                  ${title}
                  <svg class="icon transition-transform transform w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul class="mt-2 space-y-1 hidden">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            `
              )
              .join("")}
          </div>

          <!-- Static Desktop Grid -->
          <div class="md:flex hidden grid-cols-2 justify-between  md:grid-cols-5 gap-6 text-sm text-gray-600 mb-12">
            <div>
              <h4 class="font-[600] text-[16px] text-black mb-4 font-prometo font-bold ">Areas</h4>
              <ul class="space-y-2 text-[#8E8E8E]"><li>New Cairo</li><li>New Cairo</li><li>New Cairo</li><li>New Cairo</li><li>New Cairo</li><li>New Cairo</li><li>New Cairo</li></ul>
            </div>
            <div>
              <h4 class="font-[600] text-[16px] text-black mb-4 font-prometo font-bold ">Compounds</h4>
              <ul class="space-y-2 text-[#8E8E8E]"><li>Zed East</li><li>Sodic East</li><li>Zed East</li><li>Zed East</li><li>Zed East</li><li>Zed East</li><li>Zed East</li></ul>
            </div>
            <div>
              <h4 class="font-[600] text-[16px] text-black mb-4 font-prometo font-bold ">Developers</h4>
              <ul class="space-y-2 text-[#8E8E8E]"><li>Ora Developments</li><li>Ora Developments</li><li>Ora Developments</li><li>Ora Developments</li><li>Ora Developments</li><li>Ora Developments</li><li>Ora Developments</li></ul>
            </div>
            <div>
              <h4 class="font-[600] text-[16px] text-black mb-4 font-prometo font-bold ">Top Searches</h4>
              <ul class="space-y-2 text-[#8E8E8E]"><li>16177 Zizinia New Cairo...</li><li>16177 Zizinia New Cairo...</li><li>16177 Zizinia New Cairo...</li><li>16177 Zizinia New Cairo...</li><li>16177 Zizinia New Cairo...</li><li>16177 Zizinia New Cairo...</li><li>16177 Zizinia New Cairo...</li></ul>
            </div>
            <div>
              <h4 class="font-[600] text-[16px] text-black mb-4 font-prometo font-bold ">Others</h4>
              <ul class="space-y-2 text-[#8E8E8E]"><li>3 bedroom Villas for...</li><li>3 bedroom Villas for...</li><li>3 bedroom Villas for...</li><li>3 bedroom Villas for...</li><li>3 bedroom Villas for...</li><li>3 bedroom Villas for...</li><li>3 bedroom Villas for...</li></ul>
            </div>
          </div>

          
    <!-- Bottom Section -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 ">
      <!-- Left: Logo and Info -->
      <div class="text-center md:text-left">
        <img src="./images/shary-logo.svg" alt="Shary Logo" class="mx-auto md:mx-0 mb-2 w-36 md:w-44" />
        <p class="  mb-1 font-medium md:ms-1 md:text-base text-xs ">Real Estate Company</p>
          <div class="flex  flex-col justify-center gap-2 md:items-start items-center mt-2  text-[#1f3c5d] font-medium">
  <div class="flex ml-0  !mt-0 text-start  gap-2 justify-start items-start ">
    <p class="font-prometo md:text-sm text-xs   uppercase tracking-wide">Contact Us:</p>
    <a href="tel:+201000730208" class="font-prometo md:text-sm text-xs  hover:underline text-inherit">+201000730208</a>
  </div>

  <div class="flex  gap-2 justify-center items-center ">
    <p class="font-prometo md:text-sm text-xs uppercase tracking-wide">Email Address:</p>
    <a href="mailto:info@shary.com" class="font-prometo md:text-sm text-xs  hover:underline text-inherit">info@shary.com</a>
  </div>
</div>
          <!-- Center: Social Icons -->
      <div class="flex mt-6 items-center justify-center gap-4">
        <img src="./icons/facebook.svg" alt="facebook" class="h-4 cursor-pointer" />
        <img src="./icons/instagram.svg" alt="instagram" class="h-4 cursor-pointer" />
        <img src="./icons/twitter.svg" alt="twitter" class="h-4 cursor-pointer" />
        <img src="./icons/youtube.svg" alt="youtube" class="h-4 cursor-pointer" />
        <img src="./icons/linkedIn.svg" alt="linkedin" class="h-4 cursor-pointer" />
        <img src="./icons/snapchat.svg" alt="snapchat" class="h-4 cursor-pointer" />
        <img src="./icons/tiktok.svg" alt="tiktok" class="h-4 cursor-pointer" />
      </div>
      </div>


      <!-- Right: Store Buttons -->
      <div class="text-center mb-2  md:text-right flex md:translate-y-1/2 h-[100%] flex-col">
        <p class="text-sm font-medium mb-2">Download Our Application</p>
        <div class="flex justify-center md:justify-end gap-2">
          <a href="#"><img src="./icons/google-play.svg" alt="Google Play" class="h-8" /></a>
          <a href="#"><img src="./icons/app-store.svg" alt="App Store" class="h-8" /></a>
        </div>
      </div>
    </div>
<div class="text-xs md:border-[#1D4265] mb-16      border-[#D7D7D7] border-t md:pt-6 pt-2 md:mt-6 mt-1 flex md:hidden flex-wrap justify-center md:justify-between text-center text-gray-600 gap-4">
        <p class="text-[15px] font-medium text-[#1D4265] ">© Copyright 2025 — Shary.</p>
    </div>
    
    <!-- Bottom Navigation Links -->
    <div class="text-xs md:border-[#1D4265]   border-[#D7D7D7] border-t md:pt-6 pt-2 md:mt-6 mt-1 md:flex  hidden flex-wrap justify-center md:justify-between text-center text-gray-600 gap-4">
        <p class="text-[15px] font-medium text-[#1D4265] ">© Copyright 2025 — Shary.</p>
    
    <div class="flex w-[70%]  text-xs justify-between ">

      <a class="text-[#8E8E8E] text-[16px]" href="./index.html">Home</a>
      <a class="text-[#8E8E8E] text-[16px]" href="#">Gulf</a>
      <a class="text-[#8E8E8E] text-[16px]" href="#">Europe</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./sell.html">Sell</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./blogs.html">Blog</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./about.html">About</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./contact.html">Contact</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./shary-card.html">Shary Card</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./privacy-policy.html">Privacy Policy</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./careers.html">Careers</a>
      <a class="text-[#8E8E8E] text-[16px]" href="./check-now.html">Agents</a>
          </div>
    </div>
        </div>
      </footer>
    `;

    // Toggle Dropdowns
    this.querySelectorAll(".footer-toggle").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const list = toggle.nextElementSibling;
        const icon = toggle.querySelector(".icon");
        list.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
      });
    });
  }
}

customElements.define("footer-component", Footer);
