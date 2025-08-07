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
          title: 'Software Engineer',
          position: 'Developer And Telecommunications Engineer',
          tasks: [
            'Network administration: routers, switches, VPNs (SonicWall).',
            'Experience with network structures, load balancers, and SD-WAN.',
            'Routers and Switch CISCO, IP Phone, balancer PCC, SonicWall & Fortinet, VMWARE ESXI.',
            'POWER BI.',
            'Use of GitHub and Azure DevOps for version control and integration.',
            'Involvement in the design and development of enterprise applications.',
            'DDL & DML in MySQL & SQL Server (Stored Procedures & T-SQL).',
            'Use of GitHub and Azure DevOps for version control and integration.',
            'Full Stack development with Vue.js, Java + Spring, Java Maven, and MySQL.',
            'Full stack Angular, C# (ASP.NET y .NET Framework o .NET 8) and SQL Server.',
          ],
        },
        {
          period: 'January 2024 - July 2024',
          title: 'Software Coordinator',
          position: 'Software Coordinator',
          tasks: [
            'Development and maintenance of high-availability web solutions.',
            'Coordination of electoral software (PREP) deployment at the regional level.',
            'Full stack VUEjs, Java + Springboot (JPA + Hibernate) & MySql.',
            'Full stack Angular, C# (.NET 8, ASP.NET y Entity Framework) and SQL Server.',
            'Github and Microsoft Azure DevOps.',
            'Deployments in Heroku & Railway.',
            'Microsoft IIS.',
            'AWS (VPC, EC2, EC2, S3, Lambda).',
            'DOCKER.',
            'DDL and DML in MySQL & SQL Server (Stored Procedures & T-SQL).',
            'POWER BI.',
            'PYTHON image processing (Point by Point).',
          ],
        },
        {
          period: 'August 2024 - Present',
          title: 'Software Developer & Project Manager',
          position: 'Software Developer & Project Manager',
          tasks: [
            'Definition and management of multidisciplinary projects with software development teams.',
            'Sprint planning and tracking using Azure DevOps and Taiga.',
            'Backlog prioritization and deliverable management.',
            'Coordination between technical and non-technical stakeholders.',
            'Quality control and delivery assurance (QA/UAT).',
            'Implementation of performance metrics (Burndown, Velocity).',
            'Full stack VUEjs, Java + Springboot (JPA + Hibernate) & MySql.',
            'Full stack Angular, C# (.NET 8, ASP.NET y Entity Framework) and SQL Server.',
            'Github and Microsoft Azure DevOps.',
            'Deployments en Heroku & Railway.',
            'IIS.',
            'AWS (VPC, EC2, EC2, S3, Lambda).',
            'DOCKER.',
          ],
        },
        {
          period: '2021 - Current',
          title: 'Specialized Software Development',
          position: 'Freelancer',
          tasks: [
            'Specialized Web/Api environment development.',
            'Specialized Software ERP development.',
            'Specialized Mobile Web-app development.',
            'Specialized Native Mobile App (Swift) development.',
            'Specialized ERP Software (Native and with Electron) development.',
            'Games Development.',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
