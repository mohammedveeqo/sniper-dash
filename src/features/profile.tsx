import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Button } from "@/components/ui/button"

    export default function Profile() {
      const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        walletAddress: "0x123...abc",
        riskLevel: "Medium"
      }

      return (
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input defaultValue={user.name} />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue={user.email} />
            </div>
            <div className="space-y-2">
              <Label>Wallet Address</Label>
              <Input defaultValue={user.walletAddress} disabled />
            </div>
            <div className="space-y-2">
              <Label>Risk Level</Label>
              <Input defaultValue={user.riskLevel} disabled />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>
      )
    }
