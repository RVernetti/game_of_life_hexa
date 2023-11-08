import { render, fireEvent, screen, within } from '@testing-library/react'

import { Button} from '..'

describe('<Button />', () => {
    test('renders children correctly', () => {
        const children = 'Click me!'
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock}>{children}</Button>)
        const buttonElement = screen.getByText(children)
        expect(buttonElement.textContent).toEqual(children)
    })
    test('calls onClick when cliked', () => {
        const children = 'Click me!'
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock}>{children}</Button>)
        const buttonElement = screen.getByText(children)
        fireEvent.click(buttonElement)
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
    test('calls the right button classname', () => {
        const children = 'Click me!'
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock}>{children}</Button>)
        const buttonElement = screen.getByText(children)
        expect(buttonElement.className).toEqual('button')
    }) 
})