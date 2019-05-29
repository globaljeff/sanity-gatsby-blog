export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ceeadabd5c4dffe5804abad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3q16v65i',
                  apiId: '1515b714-761d-4864-ace5-4166ff356cc1'
                },
                {
                  buildHookId: '5ceeadabad7bbdde194a3f7f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8g51e7kc',
                  apiId: 'bf864e26-62e8-4945-8ab1-4763711be235'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/globaljeff/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8g51e7kc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
