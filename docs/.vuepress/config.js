module.exports = {
    title: '小栗子的知识库',
    description: '我的个人网站',
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      logo:'/images/logo.png',
      nav:[ // 导航栏配置
        {
          text: '前端基础',
          items:[{
              text:'Html',
              link:'/Frontend/html'
          },{
              text:'CSS',
              link:'/Frontend/css'
          },{
              text:'JavaScript',
              link:'/Frontend/JavaScript'
          }] 
        
        },
        {
          text: 'Node.js',
          items:[{
            text:'黑马课程笔记',
            link:'/Node/黑马课程笔记'
          }]
        }, 
        {
          text:'前端学习资源',
          items:[{
            text:'千古壹号',
            link:'/FrontStudy/千古壹号'
          },{
            text:'poetry',
            link:'/FrontStudy/poetry'
          }]
        },
        {
          text:'代码管理工具',
          items:[{
            text:'Git',
            link:'/Frontutils/Git'
          },{
            text:'SVN',
            link:'/Frontutils/SVN'
          }]
        },
        {
          text:'Other learning',
          items:[{
            text:'python',
            link:'/OtherLearning/python'
          }]
        },
        {
          text:'GitHub',
          link: 'https://github.com/git1582364788'
        }  
      ],
      sidebar: {
          '/Frontend/':[
            '',
            'html',
            'css',
            'JavaScript'
          ],
          '/Node/':[
            '',
            '黑马课程笔记'
          ],
          '/FrontStudy/':[
            '千古壹号',
            'poetry'
          ],
          '/OtherLearning/':[
            '',
            'python'
          ],
          '/Frontutils/':[
            'Git',
            'SVN'
          ]
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };