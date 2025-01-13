import AIInsights from "@/features/ai-insights"
    import SnipingBot from "@/features/sniping-bot"
    import PortfolioManagement from "@/features/portfolio-management"
    import CommunityFeatures from "@/features/community-features"

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
