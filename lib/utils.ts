import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  console.log('scalloped potatoes::: inputs', inputs)
  const clsxoutput = clsx(inputs)
  console.log('scalloped potatoes::: clsxoutput', clsxoutput)
  const twMergeoutput = twMerge(clsxoutput)
  console.log('scalloped potatoes::: twMergeoutput', twMergeoutput)
  return twMergeoutput
}
