import { render, fireEvent, screen } from '@testing-library/react'

import { Button} from '..'

describe('<Button />', () => {
    test('calls the right button classname', () => {
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock} />)
        const buttonElement = screen.getByTestId('button')
        expect(buttonElement.className).toEqual('button')
    })
    test('renders children correctly', () => {
        const children = 'Click me!'
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock}>{children}</Button>)
        const buttonElement = screen.getByTestId('button')
        expect(buttonElement.textContent).toEqual(children)
    })
    test('calls onClick when cliked', () => {
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock} />)
        const buttonElement = screen.getByTestId('button')
        fireEvent.click(buttonElement)
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
    test("doesn't call onClick when disabled and cliked", () => {
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock} disabled/>)
        const buttonElement = screen.getByTestId('button')
        fireEvent.click(buttonElement)
        expect(onClickMock).toHaveBeenCalledTimes(0)
    })
})