import {
  TextInput as MantInput,
  TextInputProps as MantTextInputProps,
} from '@mantine/core'
import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './Input.module.scss'

interface InputProps extends MantTextInputProps {
  className?: string
  children?: ReactNode
  placeholder?: string
  dataTestId?: string
}

export const Input = ({
  className,
  placeholder,
  children,
  dataTestId,
  ...props
}: InputProps) => {
  const classes = classNames(className, styles.root)

  return (
    <MantInput
      data-testid={dataTestId}
      className={classes}
      placeholder={placeholder}
      {...props}
    />
  )
}
