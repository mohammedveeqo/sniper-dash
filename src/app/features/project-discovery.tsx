import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
    import { Badge } from "@/components/ui/badge"
    import { Progress } from "@/components/ui/progress"

    export default function ProjectDiscovery() {
      const projects = [
        {
          name: "Project Alpha",
          chain: "Ethereum",
          launchpad: "PinkSale",
          presalePrice: "$0.10",
          liquidityLock: "6 months",
          risk: "High",
          hypeScore: 85
        },
        {
          name: "Project Beta",
          chain: "Binance",
          launchpad: "DxSale",
          presalePrice: "$0.05",
          liquidityLock: "12 months",
          risk: "Medium",
          hypeScore: 72
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Filter by Chain</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="bsc">Binance Smart Chain</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Filter by Risk</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{project.name}</span>
                    <Badge variant="secondary">{project.chain}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Launchpad</Label>
                      <span className="text-sm">{project.launchpad}</span>
                    </div>
                    <div>
                      <Label>Presale Price</Label>
                      <span className="text-sm">{project.presalePrice}</span>
                    </div>
                    <div>
                      <Label>Liquidity Lock</Label>
                      <span className="text-sm">{project.liquidityLock}</span>
                    </div>
                    <div>
                      <Label>Hype Score</Label>
                      <Progress value={project.hypeScore} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )
    }
