import Link from 'next/link'

const CtaLink = ({ ariaLabel, children, className, tabIndex, url }) => {
  let isExternal
  const isInternal = url.startsWith('/')

  if (!isInternal) {
    const { hostname } = new URL(url)
    isExternal = hostname !== 'www.worldvision.ca'
  }

  return (
    <Link href={url} passHref legacyBehavior>
      <a
        ariaLabel={ariaLabel}
        className={className}
        rel={isExternal ? 'noopener' : ''}
        tabIndex={tabIndex}
        target={isExternal ? '_blank' : '_self'}
      >
        {children}
      </a>
    </Link>
  )
}

export default CtaLink
