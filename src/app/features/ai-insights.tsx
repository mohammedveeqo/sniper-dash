import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Progress } from "@/components/ui/progress"
    import { Badge } from "@/components/ui/badge"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

    export function AIInsights() {
      const projects = [
        {
          name: "Project Alpha",
          sentiment: 78,
          hypeIndex: 92,
          risk: "High",
          liquidity: 45,
          socialScore: 78,
          status: "Active",
          chain: "Ethereum",
          auditStatus: "Verified",
          whaleActivity: "High",
          githubActivity: "Active"
        },
        // Add more projects...
      ]

      return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Trending Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{project.name}</span>
                    <Badge variant="secondary">{project.chain}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label>Sentiment</Label>
                      <Progress value={project.sentiment} />
                    </div>
                    <div>
                      <Label>Hype Index</Label>
                      <Progress value={project.hypeIndex} />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Risk</span>
                      <Badge
                        variant={
                          project.risk === "High"
                            ? "destructive"
                            : project.risk === "Medium"
                            ? "warning"
                            : "default"
                        }
                      >
                        {project.risk}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Audit</span>
                      <Badge
                        variant={
                          project.auditStatus === "Verified"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {project.auditStatus}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Activity</span>
                      <Badge
                        variant={
                          project.githubActivity === "Active"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {project.githubActivity}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Project</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project.name} value={project.name}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Risk Factors</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-sm">Liquidity</span>
                    <Progress value={45} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm">Whale Activity</span>
                    <Progress value={78} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm">Contract Safety</span>
                    <Progress value={92} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm">Team Reputation</span>
                    <Progress value={65} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Overall Risk Score</Label>
                <div className="text-4xl font-bold text-red-500">7.8/10</div>
                <p className="text-sm text-muted-foreground">
                  High risk - Proceed with caution
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comparison Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Project A</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map((project) => (
                        <SelectItem key={project.name} value={project.name}>
                          {project.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Project B</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map((project) => (
                        <SelectItem key={project.name} value={project.name}>
                          {project.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Comparison Metrics</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-sm">ROI Potential</span>
                    <Progress value={78} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm">Community Size</span>
                    <Progress value={92} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm">Development Activity</span>
                    <Progress value={65} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm">Market Cap</span>
                    <Progress value={45} />
                  </div>
                </div>
              </div>

              <Button className="w-full">Compare Projects</Button>
            </CardContent>
          </Card>
        </div>
      )
    }
