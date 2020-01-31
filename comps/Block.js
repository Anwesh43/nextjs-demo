const blockStyle = {
    width: "10%",
    height: "10%",
    background: '#BDBDBD',
    marginTop : "1%"

}
const Block = ({text}) => {
    return (<div style = {blockStyle}>
        {text}
    </div>)
}

export default Block
