import Link from 'next/link'

const headerStyle = {

  background : "#BDBDBD",
  width : "100%",
  height : "15%",
}

const linkStyle = {
    marginLeft: '1%'
}

const links = ["index", "about"]

const renderLink = (link) => {
  return (<Link key = {`${link}_key`} href = {`/${link}`}>
      <a style = {linkStyle} title = {link}>
        {link}
      </a>
  </Link>)
}
const Header = () => {

    return (
      <div style = {headerStyle}>
          {links.map(renderLink)}
      </div>
    )
}
export default Header
