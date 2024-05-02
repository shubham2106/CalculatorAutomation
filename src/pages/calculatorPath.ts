export const obj = {
    inputPath: "//div[@id='sciInPut']",
    outputPath: "//div[@id='sciOutPut']",
    addSymbol: "//span[@onClick=\"r('+')\"]",
    back: "//span[@onclick=\"r('bk')\"]",
    clear: "//span[@onclick=\"r('C')\"]",
    numberPath: (num: number) => {
        return `//span[@onClick='r(${num})']`
    },
    operation: (str: String) => {
        return `//span[@onclick="r('${str}')"]`
    },
    history: "//div[@id='scihistory']//div",
    radian: "//input[@id='scirdsettingr']",
    degree: "//input[@id='scirdsettingd']"


}