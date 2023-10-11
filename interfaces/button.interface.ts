export interface Button {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    style?: object
}