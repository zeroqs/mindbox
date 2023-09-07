import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import { Button } from '../ui/Button'

const qaId = 'button-component'

describe('Button', () => {
  test('render button by default', () => {
    const content = 'Button'
    render(<Button>{content}</Button>)

    const button = screen.getByRole('button')
    const text = screen.getByText(content)

    expect(button).toBeVisible()
    expect(button).not.toBeDisabled()
    expect(text).toBeVisible()
  })

  test.each(
    new Array<'button' | 'submit' | 'reset'>('button', 'submit', 'reset'),
  )('render with given "%s" htmlType', (type) => {
    render(<Button type={type} dataTestId={qaId} />)
    const button = screen.getByTestId(qaId)

    expect(button).toHaveAttribute('type', `${type}`)
  })

  test('disabled when disabled=true prop is given', () => {
    render(<Button disabled={true} />)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })

  test('not disabled when disabled=false prop is given', () => {
    render(<Button disabled={false} />)
    const button = screen.getByRole('button')

    expect(button).not.toBeDisabled()
  })

  test('add className', () => {
    const className = 'my-class'

    render(<Button className={className} dataTestId={qaId} />)
    const button = screen.getByTestId(qaId)

    expect(button).toHaveClass(className)
  })

  test('call onClick', async () => {
    const user = userEvent.setup()
    const handleOnClick = vi.spyOn(user, 'click')

    render(<Button dataTestId={qaId} />)
    const button = screen.getByTestId(qaId)

    await user.click(button)
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})
