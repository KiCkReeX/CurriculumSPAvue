<template>
  <div class="section">
    <div class="container cc-education">
      <div class="h4 text-center mb-4 title">Education</div>

      <div v-for="(edu, index) in educationList" :key="index" class="card">
        <div class="row">
          <div
            class="col-md-3 bg-primary"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="500"
          >
            <div class="card-body cc-education-header">
              <p>{{ edu.period }}</p>
              <div class="h5">{{ edu.title }}</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">{{ edu.subtitle }}</div>
              <p class="category">{{ edu.institution }}</p>
              <div v-html="edu.description"></div>
              <ul v-if="edu.details && edu.details.length">
                <li v-for="(item, i) in edu.details" :key="i">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      educationList: [
        {
          period: '2018-2023',
          title: 'B.S. Software Engineering',
          subtitle: 'Licenciatura en Informática',
          institution: 'Universidad Autónoma de Sinaloa',
          description: `Trained to quickly adapt to organizational dynamics and assume leadership roles by applying decision-making skills, complemented by a solid background in software development. These skills allow me to solve problems in the organization and processing of information and make decisions in the solution process.`,
          details: [],
        },
        {
          period: '2024',
          title: 'Certification',
          subtitle: 'SCRUM Developer',
          institution: 'Scrum Study',
          description: `The Professional Scrum Developer™ (PSD) certification validates your knowledge of how to deliver quality software using the Scrum framework while working in Scrum Teams including the application of modern Agile and DevOps practices.`,
          details: [],
        },
        {
          period: '2024',
          title: 'Certification',
          subtitle: 'SCRUM MASTER',
          institution: 'Scrum Study',
          description: `The Professional Scrum Master™ I (PSM I) certification validates your knowledge of the Scrum framework, the Scrum Master accountabilities and how to apply Scrum.`,
          details: [],
        },
        {
          period: '2024',
          title: 'Certifications',
          subtitle: 'Variety',
          institution: 'Google Activate, Santander Open Academy, Udemy, TodoCode Academy, etc.',
          description: `In order to continue increasing my knowledge and skills, I obtained some certifications:`,
          details: [
            'Web Development: HTML y CSS',
            'JAVA y JAVA WEB (Servlets, JPA y JSP)',
            'ERP MANAGER',
            'POWER BI BASICS',
            'Personal Productivity',
            'Mobile App Development (IONIC)',
            'Cloud Computing (basics)',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
