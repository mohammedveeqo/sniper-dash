import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Badge } from "@/components/ui/badge"

    export default function UserRecommendations() {
      const recommendations = [
        {
          name: "Project Alpha",
          risk: "Low",
          roiPotential: "High",
          matchScore: 92
        },
        {
          name: "Project Beta",
          risk: "Medium",
          roiPotential: "Medium",
          matchScore: 78
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Recommended Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{project.name}</span>
                  <Badge
                    variant={
                      project.risk === "Low"
                        ? "default"
                        : project.risk === "Medium"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {project.risk} Risk
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>ROI Potential</Label>
                    <span className="text-sm">{project.roiPotential}</span>
                  </div>
                  <div>
                    <Label>Match Score</Label>
                    <Progress value={project.matchScore} />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )
    }
