import Link from 'next/link'

const CtaLink = ({ className, children, url }) => {
  let isExternal
  const isInternal = url.startsWith('/')

  if (!isInternal) {
    const { hostname } = new URL(url)
    isExternal = hostname !== 'www.worldvision.ca'
  }

  return (
    <Link href={url} passHref legacyBehavior>
      <a
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener' : ''}
        className={className}
      >
        {children}
      </a>
    </Link>
  )
}

export default CtaLink
