import {
  Checkbox as MantCheckbox,
  CheckboxProps as MantCheckboxProps,
} from '@mantine/core'
import classNames from 'classnames'

import styles from './Checkbox.module.scss'

interface CheckboxProps extends MantCheckboxProps {
  className?: string
}

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  const classes = classNames(className, styles.root)

  return <MantCheckbox className={classes} {...props} />
}
