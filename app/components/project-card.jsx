import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ title, description, image, link, tags }) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/40 hover:border-primary/20 flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Link href={link} target="_blank">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-110"/>
        </Link>
      </div>
      <CardContent className="py-4 flex-1">
        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={link} target="_blank">
          <button className="relative px-5 py-1 rounded-lg font-bold text-white bg-blue-600 hover:shadow-[0_8px_15px_rgba(0,0,0,0.4)]  hover:brightness-110 active:translate-y-1 active:shadow-[0_3px_0_0_rgba(0,0,0,0.3)]  transition-all duration-200 ease-in-out">Read More</button>
        </Link>
      </CardFooter>
    </Card>
  )
}
