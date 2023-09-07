import {
  Textarea as MantTextarea,
  TextareaProps as MantTextareaProps,
} from '@mantine/core'
import classNames from 'classnames'

import styles from './Textarea.module.scss'

interface TextareaProps extends MantTextareaProps {
  className?: string
}

export const Textarea = ({ className, children, ...props }: TextareaProps) => {
  const classes = classNames(className, styles.root)

  return <MantTextarea className={classes} {...props} />
}
