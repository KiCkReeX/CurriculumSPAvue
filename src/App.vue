<template>
  <div id="app">
    <header>
      <div class="profile-page sidebar-collapse">
        <nav
          class="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
          color-on-scroll="400"
        >
          <div class="container">
            <div class="navbar-translate">
              <a class="navbar-brand" href="#" rel="tooltip">spuCVonline</a>
              <button
                class="navbar-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-bar bar1"></span
                ><span class="navbar-toggler-bar bar2"></span
                ><span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navigation">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link smooth-scroll" to="/CurriculumSPAvue/About-Me"
                    >About Me</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link smooth-scroll" to="/CurriculumSPAvue/Education"
                    >Education</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link smooth-scroll" to="/CurriculumSPAvue/Skills"
                    >Habilities</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link smooth-scroll" to="/CurriculumSPAvue/Experience"
                    >Experience</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link smooth-scroll" to="/CurriculumSPAvue/Portfolio"
                    >Portfolio</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link smooth-scroll" to="/CurriculumSPAvue/References"
                    >References</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link smooth-scroll" to="/CurriculumSPAvue/Contact-Me"
                    >Contact me</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="profile-page">
      <div class="wrapper">
        <div class="page-header page-header-small" filter-color="green">
          <div
            class="page-header-image"
            data-parallax="true"
            style="background-image: url('public/images/cc-bg-1.jpg')"
          ></div>
          <div class="container">
            <div class="content-center">
              <div class="cc-profile-image">
                <a href="#"><img src="/images/MEphoto.JPG" alt="Pablo Soto" /></a>
              </div>

              <div class="h2 title">Pablo Ulises Soto Benítez</div>
              <p class="category text-white">
                Project Leader, Developer and Telecommunication Manager
              </p>
              <router-link
                class="btn btn-primary smooth-scroll mr-2"
                to="/Contact-Me"
                data-aos="zoom-in"
                >Contact me</router-link
              >
              <a class="btn btn-primary" href="images/CV.pdf" data-aos="zoom-in"> Download CV </a>
            </div>
          </div>

          <!-- Social Media -->
          <div class="section">
            <div class="container">
              <div class="button-container">
                <a
                  class="btn btn-default btn-round btn-lg btn-icon"
                  href="https://wa.me/526673505397?text=Hola,%20me%20gustaría%20contactarte"
                  title="Send me a WhatsApp"
                >
                  <i class="fa fa-whatsapp"></i>
                </a>
                <a
                  class="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.linkedin.com/in/pablo-ulises-soto-benitez-70b098269/"
                  title="Check my LinkedIn"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
                <a
                  class="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.hackerrank.com/certificates/8c2f76566679"
                  title="Check my HackerRank"
                >
                  <i class="fa fa-code"></i>
                </a>
                <a
                  class="btn btn-default btn-round btn-lg btn-icon"
                  href="https://github.com/KiCkReeX"
                  title="Actually my projects are private"
                >
                  <i class="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <RouterView></RouterView>
      <div id="notify-container" style="max-width: 500px"></div>
    </div>
    <footer class="footer">
      <div class="text-center text-muted">
        <p>&copy; SpuCVonline. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { RouterView, RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()
// onMounted((async) => {
//   router.push('/home')
// })
</script>
<style scoped></style>
