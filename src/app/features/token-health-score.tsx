import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Progress } from "@/components/ui/progress"
    import { Badge } from "@/components/ui/badge"

    export default function TokenHealthScore() {
      const tokens = [
        {
          name: "ETH",
          healthScore: 85,
          liquidity: 92,
          communityEngagement: 78
        },
        {
          name: "BTC",
          healthScore: 72,
          liquidity: 88,
          communityEngagement: 65
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Token Health Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tokens.map((token) => (
              <div key={token.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{token.name}</span>
                  <Badge
                    variant={
                      token.healthScore >= 80
                        ? "default"
                        : token.healthScore >= 60
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {token.healthScore} / 100
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Liquidity</Label>
                    <Progress value={token.liquidity} />
                  </div>
                  <div>
                    <Label>Community Engagement</Label>
                    <Progress value={token.communityEngagement} />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )
    }
