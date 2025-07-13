import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container border-x py-8 lg:py-7">
        <div className="grid gap-8 lg:grid-cols-4 leading-7">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-30" />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="logo"
                  width={40}
                  height={40}
                  className="dark:invert relative z-10"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                faithANI
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-0 font-light">
              {"Elevate your brand with every interaction"}
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-foreground font-bold">Product</h3>
                <ul className="space-y-3 text-sm leading-4">
                  <li className="hover:text-primary transition-colors">
                    <Link href="#">Features</Link>
                  </li>
                  <li className="hover:text-primary transition-colors">
                    <Link href="#">Pricing</Link>
                  </li>
                  <li className="hover:text-primary transition-colors">
                    <Link href="#">Integrations</Link>
                  </li>
                  <li className="hover:text-primary transition-colors">
                    <Link href="#">API Docs</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                <ul className="space-y-3 text-sm leading-4">
                  <li className="hover:text-primary transition-colors">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="hover:text-primary transition-colors">
                    <Link href="#">FAQ</Link>
                  </li>
                  <li className="hover:text-primary transition-colors">
                    <Link href="#">About</Link>
                  </li>
                  <li className="hover:text-primary transition-colors">
                    <Link href="#">Blog</Link>
                  </li>
                </ul>
              </div>

              <div className="leading-5">
                <h3 className="font-semibold mb-4 text-foreground">Legal & Social</h3>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="hover:text-primary transition-colors">
                    <Link href="/terms-of-service">Terms of Service</Link>
                  </li>
                  <li className="hover:text-primary transition-colors">
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <Link
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="flex items-center justify-center size-9 rounded-full bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <Instagram className="size-4 group-hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="flex items-center justify-center size-9 rounded-full bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <Twitter className="size-4 group-hover:text-primary transition-colors" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    aria-label="Linkedin"
                    className="flex items-center justify-center size-9 rounded-full bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <Linkedin className="size-4 group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 border-t border-border pt-2">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Relative. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="container h-6 border-x" />
    </footer>
  )
}
