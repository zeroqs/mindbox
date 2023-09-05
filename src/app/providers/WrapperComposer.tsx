import { FC, ReactNode } from 'react'

interface Props {
  wrappers: FC<{ children: ReactNode }>[]
  render: () => ReactNode
}

export const WrapperComposer = ({ wrappers, render }: Props) => {
  const composedWrapper = wrappers.reduceRight((acc, Wrapper) => {
    return <Wrapper>{acc}</Wrapper>
  }, render())

  return <>{composedWrapper}</>
}
