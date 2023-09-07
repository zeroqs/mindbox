import { Modal as MantModal, ModalProps as MantModalProps } from '@mantine/core'
import classNames from 'classnames'
import { ReactNode } from 'react'

import styles from './Modal.module.scss'

interface ModalProps extends MantModalProps {
  className?: string
  children?: ReactNode
  opened: boolean
  close: () => void
}

export const Modal = ({
  className,
  children,
  opened,
  close,
  title,
  ...props
}: ModalProps) => {
  const classes = classNames(className, styles.root)

  return (
    <>
      <MantModal {...props} className={classes} opened={opened} title={title}>
        {children}
      </MantModal>
    </>
  )
}
