import {
  Button as MantButton,
  ButtonProps as MantButtonProps,
} from '@mantine/core'
import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends MantButtonProps {
  className?: string
  children?: ReactNode
  onClick?: () => void
  dataTestId?: string
}

export const Button = ({
  className,
  children,
  onClick,
  dataTestId,
  ...props
}: ButtonProps) => {
  const classes = classNames(className, styles.root)

  return (
    <MantButton
      data-testid={dataTestId}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </MantButton>
  )
}
