const organizationData = {
  organizations: [
    {
      name: "青年志愿者协会",
      logo: "yva_logo.png",
      introduction:
        "青年志愿者协会是一个主要负责校内外相关志愿活动的组织。它聚集了一群志同道合、热衷于志愿工作的学生，并鼓励其他学生参与志愿活动，体验志愿精神。",
      members: {The Youth Volunteer Association at Wenzhou-Kean University encourages students to engage in volunteer work and community service.
        mentor: "刘璐老师",
        president: "丁子宸",
        vicePresident: "陈舒桐",
        structure: [
          { name: "公关部", description: "Public Relations Department" },
          { name: "人资部", description: "Human Resources Department" },
          {
            name: "文秘部",
            description: "Administrative Department / Secretariat",
          },
          { name: "项目部", description: "Project Department" },
          {
            name: "宣传部",
            description: "Marketing Department / Promotion Department",
          },
        ],
      },
      joinMethod: "#",
      upcomingEvents: [
        { name: "春季/秋季献血", date: "2024-03-05", location: "校园中心广场" },
        { name: "青年科学家峰会", date: "2024-05-20", location: "学术报告厅" },
        { name: "养老院/同星园", date: "2024-04-15", location: "养老院" },
        { name: "红日亭", date: "2024-06-10", location: "红日亭公园" },
      ],
      socialMedia: {
        wechat: "#",
        weibo: "#",
      },
    },
    {
      name: "计算机图灵社",
      logo: "computer_club_logo.png",
      introduction:
        "计算机图灵社是一个技术爱好者的聚集地，无论是编码大师、移动应用开发者、数据结构专家还是网页设计师，都可以在这里一起探索、创造和学习。",
      members: {
        mentor: "Maryam Cheraghy, Djigal Hamza",
        president: "何佳泽",
        structure: [
          { name: "技术部", description: "负责社团技术活动的策划和执行。" },
          { name: "宣传部", description: "负责社团的宣传工作和活动推广。" },
          {
            name: "活动策划部",
            description: "负责策划社团活动，确保活动顺利进行。",
          },
        ],
      },
      joinMethod: "#",
      upcomingEvents: [
        { name: "Java Workshop", date: "2024-03-10", location: "计算机实验室" },
        { name: "俱乐部会议", date: "2024-03-15", location: "会议室A" },
      ],
      socialMedia: {
        wechat: "#",
        weibo: "#",
      },
    },
  ],
};

export default organizationData;
