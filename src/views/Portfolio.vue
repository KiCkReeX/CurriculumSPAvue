<template>
  <!-- Modal RECENT PROJECTS -->
  <div class="modal fade" id="RecentProjectsModal" tabindex="-1" role="dialog" aria-labelledby="RecentProjectsModalLabel" aria-hidden="true">
    <div class="modal-dialog " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="RecentProjectsModalLabel">Recent Projects</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <figure class="cc-effect">
            <!-- FRONTEND -->
            <figcaption>
              <div class="h4">Customer Relationship Management (Front-End)</div>
              <p>A personal project built to manage information about customer-enterprise relationships, focused on micro-credit services.</p>
            </figcaption>
            <img src="/images/canyon_crm_login.png" alt="CRM Login Page" />
            
            <figcaption>
              <p>The front-end was developed using Vue.js, Bootstrap, Vuetify, CSS, and Axios.  
              The project follows a component-based architecture with clearly separated layers: Views, Services, Libraries, and Components.</p>
            </figcaption>
            <img src="/images/canyon_crm_home.png" alt="CRM Home Page" />

            <!-- BACKEND -->
            <figcaption>
              <div class="h4">Back-End</div>
              <p>The back-end includes a fully configured Swagger interface for API testing and documentation.</p>
            </figcaption>
            <img src="/images/canyon_swagger.png" alt="Swagger API Interface" />

            <figcaption>
              <p>The backend architecture follows a layered design:
                <ul>
                  <li><strong>API Layer:</strong> Controllers and routes</li>
                  <li><strong>Contracts Layer:</strong> DTOs, request/response models, filters, constants, and configuration</li>
                  <li><strong>Core Layer:</strong> Divided into Manager, Domain Logic, and Data Access</li>
                  <li><strong>Models Layer:</strong> Database design and entity classes</li>
                  <li><strong>Services Layer:</strong> Helper classes and external libraries</li>
                </ul>
              </p>
            </figcaption>
            <img src="/images/canyon_backend_architecture.png" alt="Backend Architecture Diagram" />

            <!-- MOBILE -->
            <figcaption>
              <div class="h4">Mobile Version</div>
              <p>The mobile version was built using the Ionic Framework with Capacitor, Vue.js, Bootstrap, CSS, and Axios.  
              It follows the same layered architecture as the web version: Views, Services, and Components layers.</p>
            </figcaption>
            <img src="/images/canyon_mobile_statement.png" alt="Mobile App View" />
          </figure> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal SPRING BOOT API -->
  <div class="modal fade" id="SpringBootProjectsModal" tabindex="-1" role="dialog" aria-labelledby="SpringBootProjectsModalLabel" aria-hidden="true">
    <div class="modal-dialog " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="SpringBootProjectsModalLabel">Spring Boot Project</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <figure class="cc-effect">
            <!-- MOBILE FRONTEND -->
            <figcaption>
              <div class="h4">Task Tracker APP </div>
              <p>A personal project designed to help users organize and manage their daily responsibilities efficiently using Task, Task list and list categories for the daily routine or work routine</p>
            </figcaption>
            <img src="/images/TaskTracker_login.png" alt="CRM Login Page" />
            
            <figcaption>
              <p>It features several main sections:
                <ul>
                  <li><strong>My Day:</strong> A personalized view to focus on tasks scheduled or prioritized for the current day.</li>
                  <li><strong>My Tasks:</strong> A comprehensive list of all the user’s tasks, providing a full overview of everything they need to work on.</li>
                  <li><strong>Task Lists:</strong> Customizable lists where users can group tasks by category or project (e.g., Work, Personal, Shopping).</li>
                  <li><strong>Finalized:</strong> A dedicated section for tasks that have been successfully completed.</li>
                  <li><strong>Deleted Items:</strong> A section where completed or removed tasks are stored temporarily before being permanently deleted, allowing users to recover items if needed.</li>
                </ul>
              </p>
            </figcaption>
            <img src="/images/TaskTracker_home.png" alt="CRM Home Page" />

            <figcaption>
              <p>The front-end was developed using Ionic Framework and backend Vue.js, Bootstrap, CSS, and Axios.  
              The project follows a component-based architecture with clearly separated layers: Views, Services, Libraries, Router, Stores, etc.</p>
            </figcaption>

            <!-- BACKEND -->
            <figcaption>
              <div class="h4">Back-End</div>
              <p>Was developed in JAVA using Spring Boot using JWT, JPA, Hibernate and Servlet-api, etc.</p>
            </figcaption>
            <img src="/images/spring_jwt.png" alt="Swagger API Interface" />

            <figcaption>
              <p>The backend architecture follows a layered design:
                <ul>
                  <li><strong>API Layer:</strong> Controllers and routes</li>
                  <li><strong>Core Layer:</strong> Divided into Manager, Domain Logic, and Data Access</li>
                  <li><strong>Models Layer:</strong> Database design and entity classes</li>
                  <li><strong>Services Layer:</strong> Helper classes and external libraries</li>
                </ul>
              </p>
            </figcaption>
            <img src="/images/spring_login.png" alt="Backend Architecture Diagram" />

          </figure> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto">
          <div class="h4 text-center mb-4 title">Portfolio</div>
          <div class="nav-align-center">
            <ul class="nav nav-pills nav-pills-primary" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#web-development" role="tablist"
                  ><i class="fa fa-laptop" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tel-communication" role="tablist"
                  ><i class="fa fa-picture-o" aria-hidden="true"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#telnet-com" role="tablist"
                  ><i class="fa fa-camera" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tab-content gallery mt-5">
        <div class="tab-pane active" id="web-development">
          <div class="ml-auto mr-auto">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#" data-toggle="modal" data-target="#RecentProjectsModal">
                    <figure class="cc-effect">
                      <img src="/images/project-1.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">Recent Projects</div>
                        <p>WEB/API Environment</p>
                        <p>Mobile Ionic/CAPACITOR Web-App</p>
                        <p>FrontEnd: Angular & VUE</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#">
                    <figure class="cc-effect">
                      <img src="/images/project-3.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">Desktop Application</div>
                        <p>Electron ERP + API Backend</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#" data-toggle="modal" data-target="#SpringBootProjectsModal">
                    <figure class="cc-effect">
                      <img src="/images/project-2.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">Spring boot API</div>
                        <p>Full-stack solution with Spring Boot API, Vue.js frontend, and Ionic mobile app</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#">
                    <figure class="cc-effect">
                      <img src="/images/project-4.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">GAME MAKER + GODOT.net</div>
                        <p>Videogames</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="tel-communication" role="tabpanel">
          <div class="ml-auto mr-auto">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#tel-communication">
                    <figure class="cc-effect">
                      <img src="/images/tel-communication-1.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">ALBIS ELCON ACCEED 2112</div>
                        <p>Nets</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#tel-communication">
                    <figure class="cc-effect">
                      <img src="/images/tel-communication-2.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">Integrated Services Router CISCO 2900 SERIES</div>
                        <p>Nets</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#tel-communication">
                    <figure class="cc-effect">
                      <img src="/images/tel-communication-3.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">ROUTER CISCO CATALYST 8200-1N-4T</div>
                        <p>Nets</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#tel-communication">
                    <figure class="cc-effect">
                      <img src="/images/tel-communication-4.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">CONSOLE CONNECTION FOR CONFIGURATION VIA SSH - TELNET</div>
                        <p>Nets</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="telnet-com" role="tabpanel">
          <div class="ml-auto mr-auto">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#telnet-com">
                    <figure class="cc-effect">
                      <img src="/images/photography-1.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">ALBIS ELCON ACCEED 1416</div>
                        <p>Telecommunication</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#telnet-com">
                    <figure class="cc-effect">
                      <img src="/images/photography-3.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">RACK CORE B - HA</div>
                        <p>Telecommunication</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#telnet-com">
                    <figure class="cc-effect">
                      <img src="/images/photography-2.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">FIREWALL, ROUTERS</div>
                        <p>Telecommunication</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
                <div
                  class="cc-porfolio-image img-raised"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#telnet-com">
                    <figure class="cc-effect">
                      <img src="/images/photography-4.jpg" alt="Image" />
                      <figcaption>
                        <div class="h4">CISCO 890 SERIES</div>
                        <p>Telecommunication</p>
                      </figcaption>
                    </figure></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script seteup>
import { ref } from 'vue';


const RecentProjectModal = ref(false); 
const DesktopProjectsModal = ref(false); 
const SpringBootProjectModal = ref(false); 
const GamesProjectModal = ref(false); 

async function OpenModal(modal)
{
  switch(modal)
  {
    case 1: //Recent projects
      RecentProjectModal.value = true;
      break;
    case 2: //Desktop Projects
      DesktopProjectsModal.value = true;
      break;
    case 3: //SpringBoot API
      SpringBootProjectModal.value = true;
      break;
    case 4: //GAMES
      GamesProjectModal.value = true;
      break;
  }
}

async function CloseModal(modal)
{
  switch(modal)
  {
    case 1: //Recent projects
      RecentProjectModal.value = false;
      break;
    case 2: //Desktop Projects
      DesktopProjectsModal.value = false;
      break;
    case 3: //SpringBoot API
      SpringBootProjectModal.value = false;
      break;
    case 4: //GAMES
      GamesProjectModal.value = false;
      break;
  }
}

</script>

<style></style>
