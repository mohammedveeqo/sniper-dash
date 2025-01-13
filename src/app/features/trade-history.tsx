import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
    import { Badge } from "@/components/ui/badge"

    export default function TradeHistory() {
      const trades = [
        {
          date: "2023-10-01",
          token: "ETH",
          action: "Buy",
          amount: "1.5",
          price: "$1500",
          status: "Completed"
        },
        {
          date: "2023-10-02",
          token: "BTC",
          action: "Sell",
          amount: "0.5",
          price: "$25000",
          status: "Completed"
        }
      ]

      return (
        <Card>
          <CardHeader>
            <CardTitle>Trade History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Token</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trades.map((trade, index) => (
                  <TableRow key={index}>
                    <TableCell>{trade.date}</TableCell>
                    <TableCell>{trade.token}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          trade.action === "Buy" ? "default" : "destructive"
                        }
                      >
                        {trade.action}
                      </Badge>
                    </TableCell>
                    <TableCell>{trade.amount}</TableCell>
                    <TableCell>{trade.price}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          trade.status === "Completed"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {trade.status}
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
