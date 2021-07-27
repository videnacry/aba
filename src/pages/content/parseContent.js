import warningIconSrc from './circle-exclamation.svg'
import infoIconSrc from './circle-info.svg'
import dangerIconSrc from './circle-x.svg'
import successIconSrc from './circle-check.svg'

const parseContent = (content) => {
    const text = getFormatedText(content)
    switch (content.type) {
        case 'table': return getTable(content.rows)
        case 'iframe': return getIframe(text, content.classes)
        case 'h1': return getH1(text, content.classes)
        case 'h2': return getH2(text, content.classes)
        case 'h3': return getH3(text, content.classes)
        case 'img': return getImg(text, content.classes)
        case 'p': return getP(text, content.classes)
        case 'success': return getSuccess(text, content.classes)
        case 'info': return getInfo(text, content.classes)
        case 'warning': return getWarning(text, content.classes)
        case 'danger': return getDanger(text, content.classes)
    }
}
export default parseContent

const getTextWithLinks = (text, links) => {
    if (links)
        links.forEach(link => {
            text = text.replaceAll(link.text, `<a href=${link.url} class="btn-link">${link.text}</a>`)
        })
    return text
}
const getTextWithBolds = (text, bolds) => {
    if (bolds)
        bolds.forEach(bold => {
            text = text.replaceAll(bold.text, `<b>${bold.text}</b>`)
        })
    return text
}
const getFormatedText = (content) => {
    let text = ''
    if (content.elements) {text = content.elements.map(elmt => parseContent(elmt)).join(''); console.log(text)}
    else {
        text = getTextWithLinks(content.text, content.links)
        text = getTextWithBolds(text, content.bolds)
    }
    return text
}
const getIframe = (text, classes) => `
<div class="mw-600-px h-md-390-px w-100 m-auto pt-65-percent p-md-unset position-relative">
    <iframe title="YouTube video player" class="${classes} w-100 h-100 position-absolute top-0 start-0" src="${text}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`
const getImg = (text, classes) => `<img class="${classes} mw-600-px m-auto mb-4 d-block" src="${text}" width="100%" height="auto"/>`
const getH1 = (text, classes) => `<h1 class="${classes}">${text}</h1>`
const getH2 = (text, classes) => `<h2 class="${classes}">${text}</h2>`
const getH3 = (text, classes) => `<h4 class="${classes}">${text}</h4>`
const getP = (text, classes) => `<p class="${classes}">${text}</p>`

const getAlert = (text, iconSrc, classes, title) => 
`<div class="alert ${classes}">
    <div class="mb-3">
        <img src="${iconSrc}"/>
        <small class="ml-2">${title}</small>
    </div>
    <p class="text-dark">${text}</p>
</div>`
const getSuccess = (text, classes) => getAlert(text, successIconSrc, `${classes} alert-success text-success`, 'sugerencia')
const getInfo = (text, classes) => getAlert(text, infoIconSrc, `${classes} alert-info text-info`, 'informaci&oacute;n')
const getWarning = (text, classes) => getAlert(text, warningIconSrc, `${classes} alert-warning text-warning`, 'advertencia')
const getDanger = (text, classes) => getAlert(text, dangerIconSrc, `${classes} alert-danger text-danger`, 'peligro')

const getTableRow = (text, type) => {
    switch (type) {
        case 'th': return `<th>${text}</th>`
        case 'td': return `<td class="font-size-1dot1-em">${text}</td>`
    }
}
const getTable = (rows) => 
`
<table class="table table-hover font-size-0dot8-em font-family-sans-serif">
    ${rows.map(row => `<tr>${row.map(data => getTableRow(getFormatedText(data), data.type)).join('')}</tr>`).join('')}
</table>
`