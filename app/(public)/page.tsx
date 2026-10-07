import { TopBar } from "@/src/components/layout/top-bar";

import { HeroSection } from "@/src/features/home/components/hero-section";
import { QuickLinks } from "@/src/features/home/components/quick-links";
import { LatestNews } from "@/src/features/home/components/latest-news";
import { UpcomingEvents } from "@/src/features/home/components/upcoming-events";
import { PhotoGallery } from "@/src/features/home/components/photo-gallery";
import { AdvertisementCard } from "@/src/features/home/components/advertisement-card";

import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <TopBar />

      <SiteHeader />

      <HeroSection />

      <QuickLinks />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.7fr_0.9fr]">
          <LatestNews />
          <UpcomingEvents />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.7fr_0.8fr]">
          <PhotoGallery />
          <AdvertisementCard />
        </div>
      </div>

      <SiteFooter />

    </main>
  );
}

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-background text-foreground">
//       <TopBar />
//       <SiteHeader />

//       <HeroSection />

//       <QuickLinks />

//       <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
//         <div className="grid gap-12 lg:grid-cols-[1.7fr_0.9fr]">
//           <LatestNews />
//           <UpcomingEvents />
//         </div>

//         <div className="mt-16 grid gap-10 lg:grid-cols-[1.7fr_0.8fr]">
//           <PhotoGallery />
//           <AdvertisementCard />
//         </div>
//       </div>

//       <SiteFooter />
//     </main>
//   );
// }