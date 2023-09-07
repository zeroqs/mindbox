import { Card as MantCard, CardProps as MantCardProps } from '@mantine/core'
import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './Card.module.scss'

interface TodoCardProps extends MantCardProps {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children, ...props }: TodoCardProps) => {
  const classes = classNames(className, styles.root)

  return (
    <MantCard className={classes} {...props}>
      {children}
    </MantCard>
  )
}
