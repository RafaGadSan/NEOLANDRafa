import "./Footer.css"
const template = () => `
<h3><span>With 💘 to </span> Neoland</h3>
`

export const printTemplateFooter = () => {
    document.querySelector("footer").innerHTML = template()
}