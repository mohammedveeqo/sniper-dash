import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
    import { Badge } from "@/components/ui/badge"

    export default function WhaleTracker() {
      const transactions = [
        {
          wallet: "0x123...abc",
          action: "Buy",
          token: "ETH",
          amount: "1000",
          impact: "High"
        },
        {
          wallet: "0x456...def",
          action: "Sell",
          token: "BTC",
          amount: "500",
          impact: "Medium"
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Whale Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Wallet</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Token</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx, index) => (
                  <TableRow key={index}>
                    <TableCell>{tx.wallet}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          tx.action === "Buy" ? "default" : "destructive"
                        }
                      >
                        {tx.action}
                      </Badge>
                    </TableCell>
                    <TableCell>{tx.token}</TableCell>
                    <TableCell>{tx.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          tx.impact === "High"
                            ? "destructive"
                            : tx.impact === "Medium"
                            ? "warning"
                            : "default"
                        }
                      >
                        {tx.impact}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )
    }
