import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Car, Star, Clock, MapPin, Phone, Mail } from "lucide-react"

export default function InstructorsPage() {
  const instructors = [
    {
      id: 1,
      name: "John Smith",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 4.9,
      experience: "8 years",
      specialties: ["City Driving", "Highway", "Test Prep"],
      location: "Downtown",
      phone: "(555) 123-4567",
      email: "john@driveacademy.com",
      bio: "Experienced instructor specializing in nervous drivers and test preparation.",
      availability: "Mon-Fri, 9AM-6PM",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 4.8,
      experience: "6 years",
      specialties: ["Parallel Parking", "City Driving", "Beginner"],
      location: "Westside",
      phone: "(555) 234-5678",
      email: "sarah@driveacademy.com",
      bio: "Patient and encouraging instructor perfect for first-time drivers.",
      availability: "Tue-Sat, 10AM-7PM",
    },
    {
      id: 3,
      name: "Mike Davis",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 4.9,
      experience: "10 years",
      specialties: ["Highway", "Advanced", "Defensive Driving"],
      location: "Eastside",
      phone: "(555) 345-6789",
      email: "mike@driveacademy.com",
      bio: "Expert in advanced driving techniques and highway safety.",
      availability: "Mon-Thu, 8AM-5PM",
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 4.7,
      experience: "5 years",
      specialties: ["Teen Drivers", "Basic Controls", "Safety"],
      location: "Northside",
      phone: "(555) 456-7890",
      email: "emma@driveacademy.com",
      bio: "Specializes in teaching teenagers and building confidence behind the wheel.",
      availability: "Wed-Sun, 11AM-8PM",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Car className="h-6 w-6 mr-2" />
          <span className="font-bold">DriveAcademy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/lessons">
            Lessons
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/theory">
            Theory
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/instructors">
            Instructors
          </Link>
        </nav>
      </header>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Our Instructors</h2>
          <p className="text-muted-foreground">Meet our certified driving instructors</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                    <AvatarFallback>
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{instructor.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{instructor.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {instructor.experience}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {instructor.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{instructor.bio}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Availability</h4>
                  <p className="text-sm text-muted-foreground">{instructor.availability}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Contact</h4>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      {instructor.phone}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      {instructor.email}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1" asChild>
                    <Link href="/lessons">Book Lesson</Link>
                  </Button>
                  <Button variant="outline">Message</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Choose Our Instructors?</CardTitle>
            <CardDescription>Our certified instructors are committed to your success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">4.8</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-muted-foreground">Student Pass Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
