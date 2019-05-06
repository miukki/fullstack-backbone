import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>

<div>
      Click{' '}
      <Link href="/about" replace>
        <a>here</a>
      </Link>{' '}
      to read more
      </div>
    
      <br/>
      
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/contacts">
          <a style={linkStyle}>Contacts</a>
        </Link>
      </div>

  </div>
)

export default Header