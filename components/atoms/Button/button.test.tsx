import { render, fireEvent, screen } from '@testing-library/react'

import { Button} from '..'

describe('<Button />', () => {
    test('renders children correctly', () => {
        const children = 'Click me!'
        const onClickMock = jest.fn()
        render(<Button onClick={onClickMock}>{children}</Button>)
        const buttonElement = screen.getByText(children)
        console.log('Button element:', buttonElement)
        expect(buttonElement.textContent).toEqual(children)
        expect(buttonElement.className).toEqual('button')
    })
})