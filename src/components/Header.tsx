import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/90 font-medium backdrop-blur-lg transition-all">
      <div className="mx-auto flex h-20 max-w-screen-lg items-center justify-between">
        <div className="flex space-x-4">
          <Link
            className="cursor-pointer capitalize"
            href="/posts/deneme-yazisi"
          >
            yazılarım
          </Link>
          <Link className="cursor-pointer capitalize" href="#">
            yer imlerim
          </Link>
        </div>

        <Link className="absolute left-1/2 -translate-x-1/2" href="/">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L0 24L5.71875 19.5177H9.46875L7.21875 16.5292L12 6.06987L16.7813 16.5292L14.5313 19.5177H18.2813L24 24L12 0ZM7.96875 16.5292L12 21.8522L16.0313 16.5292L12 19.5177L7.96875 16.5292Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <div className="flex space-x-4">
          <Link className="capitalize transition-all" href="/photos">
            fotoğraflar
          </Link>
          <Link className="cursor-pointer capitalize" href="/about">
            hakkımda
          </Link>
        </div>
      </div>
    </header>
  )
}
