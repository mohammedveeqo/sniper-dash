import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Button } from "@/components/ui/button"
    import { Badge } from "@/components/ui/badge"

    export default function Watchlist() {
      const watchlist = [
        {
          token: "ETH",
          price: "$1500",
          change: "+2.5%"
        },
        {
          token: "BTC",
          price: "$25000",
          change: "-1.2%"
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Watchlist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Add to Watchlist</Label>
              <Input placeholder="Enter token symbol..." />
            </div>
            <Button className="w-full">Add</Button>
            <div className="space-y-2">
              {watchlist.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{item.token}</span>
                  <span className="text-sm">{item.price}</span>
                  <Badge
                    variant={
                      item.change.startsWith("+") ? "default" : "destructive"
                    }
                  >
                    {item.change}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )
    }
