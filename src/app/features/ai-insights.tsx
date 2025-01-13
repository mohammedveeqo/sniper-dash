import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

interface TokenData {
  healthScore?: number;
  auditStatus?: string;
  liquidityLock?: string;
}

interface AIInsightsProps {
  tokenData?: TokenData;
}

export default function AIInsights({ tokenData = {
  healthScore: 0,
  auditStatus: 'Unknown',
  liquidityLock: 'Unknown'
} }: AIInsightsProps) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Health Score</Label>
              <Progress value={tokenData?.healthScore || 0} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Audit Status</Label>
                <Badge
                  variant={
                    tokenData?.auditStatus === "Verified"
                      ? "default"
                      : "destructive"
                  }
                >
                  {tokenData?.auditStatus || 'Unknown'}
                </Badge>
              </div>
              <div>
                <Label>Liquidity Lock</Label>
                <Badge
                  variant={
                    tokenData?.liquidityLock === "Locked"
                      ? "default"
                      : "destructive"
                  }
                >
                  {tokenData?.liquidityLock || 'Unknown'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }
