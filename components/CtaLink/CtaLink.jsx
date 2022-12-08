import Link from 'next/link'

const CtaLink = ({ className, linkLabel, linkUrl }) => {
  const { hostname } = new URL(linkUrl)
  const isExternal = hostname !== 'www.worldvision.ca'

  return (
    <Link href={linkUrl} passHref legacyBehavior>
      <a
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal && 'noopener'}
        className={className}
      >
        {linkLabel}
      </a>
    </Link>
  )
}

export default CtaLink
