import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Select, SelectOption } from "@/components/ui/select"

    export default function SnipingBot() {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Sniping Bot Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Select Chain</Label>
                <Select>
                  <SelectOption value="ethereum">Ethereum</SelectOption>
                  <SelectOption value="bsc">Binance Smart Chain</SelectOption>
                  <SelectOption value="polygon">Polygon</SelectOption>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Investment Amount</Label>
                <Input placeholder="0.1 ETH" type="number" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Advanced Settings</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Stop Loss</Label>
                  <Input placeholder="10%" type="number" />
                </div>
                <div className="space-y-2">
                  <Label>Take Profit</Label>
                  <Input placeholder="50%" type="number" />
                </div>
              </div>
            </div>

            <Button className="w-full">Save Configuration</Button>
          </CardContent>
        </Card>
      )
    }
