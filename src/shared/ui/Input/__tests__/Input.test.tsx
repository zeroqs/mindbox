import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { Input } from '../ui/Input'

const qaId = 'input-component'

describe('Input', () => {
  test('render Input by default', () => {
    render(<Input dataTestId={qaId} />)

    const contentWrapper = screen.getByTestId(qaId)
    expect(contentWrapper).toBeVisible()
  })

  test('render no autocomplete attribute when no autoComplete, no id, no name props', () => {
    render(<Input dataTestId={qaId} />)
    const input = screen.getByTestId(qaId)

    expect(input.getAttribute('autocomplete')).toBeNull()
  })

  test('render autocomplete=on attribute with autoComplete prop', () => {
    render(<Input dataTestId={qaId} autoComplete="on" />)
    const input = screen.getByTestId(qaId)

    expect(input.getAttribute('autocomplete')).toBe('on')
  })

  test('render autocomplete=off attribute with autoComplete=false prop', () => {
    render(<Input dataTestId={qaId} autoComplete="off" />)
    const input = screen.getByTestId(qaId)

    expect(input.getAttribute('autocomplete')).toBe('off')
  })

  test('call onChange when input changes value', () => {
    const onChange = vi.fn()

    render(<Input dataTestId={qaId} onChange={onChange} />)
    fireEvent.change(screen.getByTestId(qaId), { target: { value: '1' } })

    expect(onChange).toBeCalled()
  })
})
