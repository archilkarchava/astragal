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
                  buildHookId: '5e70badab5e66346b7a1c4dd',
                  title: 'Sanity Studio',
                  name: 'astragal-studio',
                  apiId: '84807ae9-e93d-453e-a821-4eae9db30e53'
                },
                {
                  buildHookId: '5e70bada42ef2b323d7c4133',
                  title: 'Blog Website',
                  name: 'astragal',
                  apiId: '00cd14fc-aad1-4f97-b939-ee5044d65618'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/archilkarchava/astragal',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://astragal.netlify.com', category: 'apps' }
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
