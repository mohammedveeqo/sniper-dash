import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Progress } from "@/components/ui/progress"
    import { Badge } from "@/components/ui/badge"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"

    export default function PortfolioManagement() {
      const portfolio = [
        {
          token: "ETH",
          value: 1200,
          allocation: 45,
          performance: 12.5,
          status: "Up"
        },
        {
          token: "BTC",
          value: 800,
          allocation: 30,
          performance: -3.2,
          status: "Down"
        },
        {
          token: "SOL",
          value: 500,
          allocation: 25,
          performance: 8.7,
          status: "Up"
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Current Allocation</Label>
              <div className="space-y-2">
                {portfolio.map((item) => (
                  <div key={item.token} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.token}</span>
                      <span className="text-sm text-muted-foreground">
                        ${item.value.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={item.allocation} />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>AI Optimization Suggestions</Label>
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Hold</CardTitle>
                    <Badge variant="default">ETH</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Strong fundamentals, expected growth
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sell</CardTitle>
                    <Badge variant="destructive">BTC</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Market saturation, limited upside
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Buy</CardTitle>
                    <Badge variant="default">SOL</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Emerging ecosystem, high potential
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Rebalance Portfolio</Label>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>ETH Allocation</Label>
                  <Input placeholder="45%" type="number" />
                </div>
                <div className="space-y-2">
                  <Label>BTC Allocation</Label>
                  <Input placeholder="30%" type="number" />
                </div>
                <div className="space-y-2">
                  <Label>SOL Allocation</Label>
                  <Input placeholder="25%" type="number" />
                </div>
              </div>
            </div>

            <Button className="w-full">Apply Changes</Button>
          </CardContent>
        </Card>
      )
    }
