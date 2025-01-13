import AIInsights from "@/app/features/ai-insights"
import SnipingBot from "@/app/features/sniping-bot"
import PortfolioManagement from "@/app/features/portfolio-management"
import CommunityFeatures from "@/app/features/community-features"

    export default function DashboardPage() {
      return (
        <div className="container mx-auto px-4 py-8 space-y-8">
          <AIInsights />
          <div className="grid gap-8 md:grid-cols-2">
            <SnipingBot />
            <PortfolioManagement />
          </div>
          <CommunityFeatures />
        </div>
      )
    }
