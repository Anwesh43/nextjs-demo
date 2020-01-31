import Header from './Header'
const divStyle = {marginTop : "1%"}
const Layout = ({children}) => {
    return (<div>
      <Header/>
      <div style = {divStyle}>
          {children}
      </div>
    </div>)
}

export default Layout
