export interface ITheme {
    menu: {
        background: string,
        select: string,
    },
    card: {
        background: string,
    },
    background: string,
    primary: string,
    text: {
        primary: string
    }
}

export type IColorMode = "DARK" | "LIGHT"

export interface IStyles {
    colorMode: IColorMode,
    theme: ITheme
}
