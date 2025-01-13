import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Button } from "@/components/ui/button"
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

    export default function RateReview() {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Rate and Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Select Bot/Project</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select bot or project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bot1">Bot 1</SelectItem>
                  <SelectItem value="bot2">Bot 2</SelectItem>
                  <SelectItem value="project1">Project 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Rating</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Review</Label>
              <Input placeholder="Write your review..." />
            </div>
            <Button className="w-full">Submit Review</Button>
          </CardContent>
        </Card>
      )
    }
