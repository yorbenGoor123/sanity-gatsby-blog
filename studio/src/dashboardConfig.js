export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f96acd69026882ef9bdd389',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-q33juirt',
                  apiId: '009aa036-0574-4416-b1db-8f10a3322639'
                },
                {
                  buildHookId: '5f96acd7c7fa31d87011a801',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-eew265fj',
                  apiId: '9ba94de8-e43e-4ace-aba1-727aed8ba527'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yorbenGoor123/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-eew265fj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
