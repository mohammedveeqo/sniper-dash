import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Progress } from "@/components/ui/progress"
    import { Badge } from "@/components/ui/badge"
    import { Label } from "@/components/ui/label"

    export default function AIInsights({ tokenData }) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Health Score</Label>
              <Progress value={tokenData.healthScore} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Audit Status</Label>
                <Badge
                  variant={
                    tokenData.auditStatus === "Verified"
                      ? "default"
                      : "destructive"
                  }
                >
                  {tokenData.auditStatus}
                </Badge>
              </div>
              <div>
                <Label>Liquidity Lock</Label>
                <Badge
                  variant={
                    tokenData.liquidityLock === "Locked"
                      ? "default"
                      : "destructive"
                  }
                >
                  {tokenData.liquidityLock}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }
