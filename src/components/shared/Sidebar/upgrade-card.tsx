import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

export function UpgradeCard({ className }: { className?: string }) {
  return (
    <a href="/pricing" className={cn("block", className)}>
      <Card className="hover:bg-muted/100 transition-colors cursor-pointer border-0 shadow-none p-2">
        <CardContent className="p-0 flex items-center gap-3">
          <div className="rounded-md bg-primary/10 p-2 text-primary">
            <Sparkles className="size-5" />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-medium">Upgrade to Pro</span>
            <span className="text-muted-foreground text-xs">
              Unlock all features
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
