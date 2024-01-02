import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/drawer'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 font-medium">
      <div className="border-b bg-background/90 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-screen-lg items-center justify-between px-4">
          <div className="hidden space-x-4 sm:flex">
            <Link className="cursor-pointer capitalize" href="/posts">
              yazılarım
            </Link>
            <Link className="cursor-pointer capitalize" href="/bookmarks">
              yer imlerim
            </Link>
          </div>

          <Link className="absolute sm:left-1/2 sm:-translate-x-1/2" href="/">
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

          <Drawer>
            <DrawerTrigger className="ml-auto flex sm:hidden">
              <Menu size={36} />
            </DrawerTrigger>
            <DrawerContent>
              <Link className="mt-4" href="/posts">
                <DrawerClose className="w-full p-4 text-left capitalize transition-all hover:bg-white/15">
                  yazılarım
                </DrawerClose>
              </Link>
              <Link href="/bookmarks">
                <DrawerClose className="w-full p-4 text-left capitalize transition-all hover:bg-white/15">
                  yer imlerim
                </DrawerClose>
              </Link>
              <Link href="/photos">
                <DrawerClose className="w-full p-4 text-left capitalize transition-all hover:bg-white/15">
                  fotoğraflar
                </DrawerClose>
              </Link>
              <Link href="/about">
                <DrawerClose className="w-full p-4 text-left capitalize transition-all hover:bg-white/15">
                  hakkımda
                </DrawerClose>
              </Link>
            </DrawerContent>
          </Drawer>

          <div className="hidden space-x-4 sm:flex">
            <Link className="capitalize transition-all" href="/photos">
              fotoğraflar
            </Link>
            <Link className="capitalize" href="/about">
              hakkımda
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
