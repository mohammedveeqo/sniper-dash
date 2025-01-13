import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Progress } from "@/components/ui/progress"
    import { Badge } from "@/components/ui/badge"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

    export default function CommunityFeatures() {
      const projects = [
        {
          name: "Project Alpha",
          votes: 1200,
          sentiment: 78,
          hypeIndex: 92,
          risk: "High"
        },
        {
          name: "Project Beta",
          votes: 800,
          sentiment: 65,
          hypeIndex: 85,
          risk: "Medium"
        },
        {
          name: "Project Gamma",
          votes: 500,
          sentiment: 92,
          hypeIndex: 78,
          risk: "Low"
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Community Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Top Voted Projects</Label>
              <div className="space-y-2">
                {projects.map((project) => (
                  <div key={project.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{project.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {project.votes} votes
                      </span>
                    </div>
                    <Progress value={project.votes / 2500 * 100} />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Leaderboard</Label>
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Trader</CardTitle>
                    <Badge variant="default">@crypto_pro</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      +120% ROI last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Bot</CardTitle>
                    <Badge variant="default">ETH Sniper</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      95% success rate
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Project</CardTitle>
                    <Badge variant="default">Project Alpha</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      1200 votes
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Vote for Projects</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Select Project</Label>
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
                  <Label>Vote Weight</Label>
                  <Input placeholder="100" type="number" />
                </div>
              </div>
            </div>

            <Button className="w-full">Submit Vote</Button>
          </CardContent>
        </Card>
      )
    }
