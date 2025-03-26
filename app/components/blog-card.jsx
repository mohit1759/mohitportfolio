import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function BlogCard({ title, excerpt, date, slug }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
      </CardContent>
    </Card>
  )
}

