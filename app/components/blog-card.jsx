import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function BlogCard({ title, excerpt, date, slug }) {
  return (
    <Card className="group overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="h-4 w-4 mr-2 text-primary" />
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </div>
      </CardContent>
    </Card>
  )
}
