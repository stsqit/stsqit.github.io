import Image from "next/image"
import Link from "next/link"

export function ProfileHeader() {
  return (
    <header className="mb-12">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="flex-1">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Ismail Karankin</h1>

          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              Founder of Oli Robotics. Aerospace engineer with hands-on experience across robotics software and hardware. I've built an autonomous drone delivery startup, a fully automated robot barista, and several large-scale data processing systems. Previously, I bootstrapped a SaaS product that reached 600K monthly users.
            </p>

            <p>
              Currently, I'm focused on scaling real-world robotics through end-to-end systems — data-driven and VLA-native.
            </p>
          </div>

          <nav className="mt-6 flex flex-wrap items-center gap-4 text-base">
            <Link
              href="https://x.com/stsqit"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </Link>
            <Link
              href="https://linkedin.com/in/stsqit"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://calendly.com/stsqitx"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call
            </Link>
          </nav>

          <p className="mt-4 text-base text-foreground/80">ismail at olirobotics dot com</p>
        </div>

        <div className="shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEfk_MK1_400x400-zcw6fbHgJGAbR06ggP1IAq4wDwqt0c.jpg"
            alt="Ismail Karankin"
            width={160}
            height={160}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </header>
  )
}
