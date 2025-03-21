import React from 'react'
import { cn } from '@/lib/utils'

type CalloutType = 'default' | 'warning' | 'info' | 'tip' | 'error'

interface CalloutProps {
  children?: React.ReactNode
  type?: CalloutType
  title?: string
}

const typeStyles = {
  default: 'bg-muted border-primary',
  warning: 'bg-yellow-100 border-yellow-500 dark:bg-yellow-950 dark:border-yellow-500',
  info: 'bg-blue-100 border-blue-500 dark:bg-blue-950 dark:border-blue-500',
  tip: 'bg-green-100 border-green-500 dark:bg-green-950 dark:border-green-500',
  error: 'bg-red-100 border-red-500 dark:bg-red-950 dark:border-red-500',
}

const typeIcons = {
  default: '💡',
  warning: '⚠️',
  info: 'ℹ️',
  tip: '💡',
  error: '❌',
}

export function Callout({
  children,
  type = 'default',
  title,
}: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 rounded-lg border-l-4 p-4',
        typeStyles[type]
      )}
    >
      <div className="flex items-center gap-2">
        <span>{typeIcons[type]}</span>
        {title && <p className="font-medium">{title}</p>}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  )
}
