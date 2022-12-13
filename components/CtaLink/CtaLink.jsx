import Link from 'next/link'

const CtaLink = ({
  ariaLabel,
  children,
  className,
  onClick,
  tabIndex,
  url
}) => {
  let isExternal

  const isHttp = (url) => /^http?/i.test(url)

  if (isHttp(url)) {
    isExternal = !url.includes('www.worldvision.ca')
  }

  return (
    <Link href={url} passHref legacyBehavior>
      <a
        aria-label={ariaLabel}
        className={className}
        onClick={onClick}
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
