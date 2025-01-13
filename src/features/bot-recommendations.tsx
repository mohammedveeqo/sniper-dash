import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Badge } from "@/components/ui/badge"

    export default function BotRecommendations() {
      const bots = [
        {
          name: "ETH Sniper",
          successRate: "95%",
          trades: "1200",
          rating: "4.8"
        },
        {
          name: "BTC Trader",
          successRate: "90%",
          trades: "800",
          rating: "4.5"
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Bot Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {bots.map((bot, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{bot.name}</span>
                  <Badge variant="default">{bot.successRate} Success Rate</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Trades</Label>
                    <span className="text-sm">{bot.trades}</span>
                  </div>
                  <div>
                    <Label>Rating</Label>
                    <span className="text-sm">{bot.rating} / 5</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )
    }
