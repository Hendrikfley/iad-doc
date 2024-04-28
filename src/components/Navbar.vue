<template>
  <nav class="desktop">
    <div class="logo">
      <a :href="pages[0].link.url"  @click.prevent="navLinkClick(0)"
         onclick="window.scrollTo(0,0)"
        ><img src="../assets/svg/coco-logo-scaled.svg" :href="pages[0].link.url"
      /></a>
      <p style="color:whitesmoke">interaction design</p>
    </div>
    <ul class="menu">
      <li v-for="(page, index) in pages" class="nav-item dropdown" >
        <a v-if="index !== 0"
          aria-current="page"
          :href="page.link.url"
          :title="`This link goes to ${page.link.text}`"
           onclick="window.scrollTo(0,0)"
          @click.prevent="navLinkClick(index)"
          >{{ page.link.text }}</a
        >
        <ul v-if="page.subpages != null" class="tutorials-menu">
          <li
            v-if="page.subpages != null"
            v-for="(subpage, index) in page.subpages"
            :key="index"
          >
            <a
              class="nav-link"
              aria-current="page"
              :href="subpage.link.url"
              :title="`This link goes to ${subpage.link.text}`"
              onclick="window.scrollTo(0,0)"
              @click.prevent="navLinkClick(index)"
              >{{ subpage.link.text }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <nav class="mobile">
    <div class="logo">
      <a :href="pages[0].link.url" onclick="window.scrollTo(0,0)"  @click.prevent="navLinkClick(0)"
      ><img src="../assets/svg/coco-logo-scaled.svg" :href="pages[0].link.url"
      /></a>
      <p style="color:whitesmoke">interaction design</p>
    </div>
    <button
      onclick="document.querySelector(`.mobile-menu-container`).classList.toggle(`display`)"
      data-menu-button
    >
      <span class="top bar"></span>
      <span class="middle bar"></span>
      <span class="bottom bar"></span>
    </button>
  </nav>

  <div class="mobile-menu-container">
    <li v-for="(page, index) in pages" class="nav-item dropdown">
      <a
          v-if="index !== 0"
        aria-current="page"
        :href="page.link.url"
        :title="`This link goes to ${page.link.text}`"
        @click.prevent="navLinkClick(index)"
        onclick="document.querySelector(`.mobile-menu-container`).classList.toggle(`display`); window.scrollTo(0,0)"
        >{{ page.link.text }}</a
      >
      <ul v-if="page.subpages != null">
        <li
          v-if="page.subpages != null"
          v-for="(subpage, index) in page.subpages"
          :key="index"
          style="font-size: 18px; font-weight: lighter; margin: 0.5em"
        >
          <a
            class="nav-link"
            aria-current="page"
            :href="subpage.link.url"
            :title="`This link goes to ${subpage.link.text}`"
            @click.prevent="navLinkClick(index)"
            onclick="document.querySelector(`.mobile-menu-container`).classList.toggle(`display`)"
            >{{ subpage.link.text }}</a
          >
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: ["pages", "activePage", "navLinkClick"],
};
</script>
