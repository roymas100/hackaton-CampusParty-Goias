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
    },
    filter: {
        background: string,
        text: string,
        button: string
    }
}

export type IColorMode = "DARK" | "LIGHT"

export interface IStyles {
    colorMode: IColorMode,
    theme: ITheme
}
