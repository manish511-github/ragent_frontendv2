import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex justify-between gap-8 border-x py-4 max-md:flex-col lg:py-8">
        <div className="mb-8 flex-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-2xl leading-0 font-semibold">Relative</span>
          </Link>
        </div>

        <div className="flex flex-1 justify-between gap-8 max-sm:flex-col">
          <div>
            <h3 className="text-muted-foreground-subtle text-sm tracking-[-0.28px]">Product</h3>
            <ul className="mt-6 space-y-6 text-sm tracking-[-0.28px] lg:mt-8 lg:space-y-8">
              <li className="hover:text-primary">
                <Link href="#">Features</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="#">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-muted-foreground-subtle text-sm tracking-[-0.28px]">Company</h3>
            <ul className="mt-6 space-y-6 text-sm tracking-[-0.28px] lg:mt-8 lg:space-y-8">
              <li className="hover:text-primary">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="#">Faq</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-muted-foreground-subtle text-sm tracking-[-0.28px]">Legal</h3>
            <ul className="mt-6 space-y-6 text-sm tracking-[-0.28px] lg:mt-8 lg:space-y-8">
              <li className="hover:text-primary">
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-muted-foreground-subtle text-sm tracking-[-0.28px]">Social</h3>
            <div className="text-muted-foreground-subtle mt-6 flex gap-3 lg:mt-8">
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram className="size-5" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <Twitter className="size-5" />
              </Link>
              <Link href="https://linkedin.com" aria-label="Linkedin">
                <Linkedin className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-muted-foreground-subtle container border-x border-t border-b py-4 text-sm tracking-[-0.28px] lg:py-8">
        <p>© {new Date().getFullYear()} Relative. All rights reserved.</p>
      </div>

      <div className="container h-6 border-x" />
    </footer>
  )
}
