<template>
  <div class="section" id="experience">
    <div class="container cc-experience">
      <div class="h4 text-center mb-4 title">Laboral Experience</div>

      <div v-for="(job, index) in experienceList" :key="index" class="card">
        <div class="row">
          <div
            class="col-md-3 bg-primary"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="500"
          >
            <div class="card-body cc-experience-header">
              <p>{{ job.period }}</p>
              <div class="h5">{{ job.title }}</div>
            </div>
          </div>
          <div class="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
            <div class="card-body">
              <div class="h5">{{ job.position }}</div>
              <ul>
                <li v-for="(task, i) in job.tasks" :key="i">{{ task }}</li>
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
  name: 'Experience',
  data() {
    return {
      experienceList: [
        {
          period: '2018 - January 2024',
          title: 'Software Engineer (Like Student)',
          position: 'Developer',
          tasks: [
            'Full stack: VUEjs, Java + Springboot (JPA + Hibernate) & MySql',
            'C++',
            'JAVA Maven and JAVA WEB (Servlets)',
            'Github',
            'DDL & DML in MySQL & SQL Server (Stored Procedures & T-SQL)',
            'POWER BI',
            'Routers and Switch CISCO, IP Phone, balancer PCC, SonicWall & Fortinet, VMWARE ESXI',
            'VMWARE ESXI (Windows & UBUNTU)',
          ],
        },
        {
          period: 'January 2024 - July 2024',
          title: 'Software Coordinator',
          position: 'Software Coordinator',
          tasks: [
            'Full stack VUEjs, Java + Springboot (JPA + Hibernate) & MySql',
            'Full stack AngularJS, C# Entity Framework and SQL Server',
            'Github and Microsoft Azure DevOps',
            'Deployments in Heroku & Railway',
            'IIS',
            'AWS',
            'DOCKER',
            'DDL and DML in MySQL & SQL Server (Stored Procedures & T-SQL)',
            'POWER BI',
            'PYTHON image processing (Point by Point)',
          ],
        },
        {
          period: 'September 2024 - Current',
          title: 'Software Developer & Project Manager',
          position: 'Software Developer & Project Manager',
          tasks: [
            'Full stack VUEjs, Java + Springboot (JPA + Hibernate) & MySql',
            'Full stack AngularJS, C# Entity Framework & SQL Server',
            'Github and Microsoft Azure DevOps',
            'Deployments en Heroku & Railway',
            'IIS',
            'AWS',
            'DOCKER',
            'DDL and DML in MySQL & SQL Server (Stored Procedures & T-SQL)',
          ],
        },
        {
          period: '2021 - Current',
          title: 'Specialized Software Development',
          position: 'Freelancer',
          tasks: [
            'Specialized Software ERP development.',
            'Games Development.',
            'Website development.',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
