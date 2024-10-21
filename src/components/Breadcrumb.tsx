'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  return (
    <nav className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-black-500 hover:text-blue-600">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`
          return (
            <li key={segment} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={href} className="text-black-500 hover:text-blue-600 capitalize">
                {segment}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
