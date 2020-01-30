export const convertColorBorder = (color) => {
    const borderType = `1px solid`
    const colorByContext = {
        '#e3165b': `${borderType} rgb(227, 27, 91)`,
        '#4d841d': `${borderType} rgb(77, 132, 29)`,
        '#0378d5': `${borderType} rgb(3, 120, 213)`,
        '#c15700': `${borderType} rgb(193, 87, 0)`,
        '#d64113': `${borderType} rgb(214, 65, 19)`,
        'default': `${borderType} rgb(227, 27, 91)`,
    }
    return !!colorByContext[color] ? colorByContext[color] : colorByContext['default']
} 