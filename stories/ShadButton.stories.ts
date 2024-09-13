import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {Button} from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'shadcn-button--primary',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}
