import React from 'react'
// import type {Preview} from '@storybook/react'
import '../styles/globals.css'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
}

export const decorators = [(Story) => <Story />]

// const preview: Preview = {
//   parameters: {
//     actions: {argTypesRegex: '^on[A-Z].*'},
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// }

// export default preview

// export const parameters = {
//   actions: {argTypesRegex: '^on[A-Z].*'},
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
