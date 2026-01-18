import { ProfileHeader } from "@/components/profile-header"
import { ContentTabs } from "@/components/content-tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <ProfileHeader />
        <ContentTabs />
      </div>
    </main>
  )
}
