import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Progress } from "@/components/ui/progress"

    export default function OnChainInsights() {
      const metrics = [
        {
          name: "Daily Transactions",
          value: 12000,
          target: 15000
        },
        {
          name: "Unique Wallets",
          value: 8500,
          target: 10000
        },
        {
          name: "Developer Activity",
          value: 45,
          target: 50
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>On-Chain Data Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {metrics.map((metric) => (
              <div key={metric.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{metric.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {metric.value} / {metric.target}
                  </span>
                </div>
                <Progress value={(metric.value / metric.target) * 100} />
              </div>
            ))}
          </CardContent>
        </Card>
      )
    }
