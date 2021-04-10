import cssclass from '@garystorey/cssclass'
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './Button.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    as: 'primary' | 'secondary' | 'tertiary'
  }>

export function Button({
  as = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = cssclass('button', `button-${as.toLowerCase()}`, {
    [className]: !!className,
  })

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
