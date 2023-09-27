import { defineConfig, type DocumentActionProps } from 'sanity'
import { deskTool } from 'sanity/desk'

import schemaTypes from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/sanity', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  name: 'springy',
  title: 'Springy',
  projectId,
  dataset,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev) =>
      prev.map((originalAction) => {
        if (originalAction.action !== 'publish') return originalAction
        return (props: DocumentActionProps) => {
          const originalResult = originalAction(props)
          return {
            ...originalResult,
            label: originalResult?.label || 'Publish',
            onHandle: () => {
              fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/revalidate', {
                method: 'POST',
                body: JSON.stringify({
                  path: '/[locale]/blogs',
                  type: 'layout',
                }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              })
              fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/revalidate', {
                method: 'POST',
                body: JSON.stringify({
                  path: '/[locale]/faq',
                  type: 'layout',
                }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              })
              if (originalResult?.onHandle) originalResult.onHandle()
            },
          }
        }
      }),
  },
})
