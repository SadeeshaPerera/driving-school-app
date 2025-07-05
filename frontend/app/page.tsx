import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Clock, Users, Award } from "lucide-react"

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Learn to Drive with Confidence
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                Professional driving lessons with certified instructors. Start your journey to becoming a safe and
                confident driver today.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600" />
                <CardTitle>Expert Instructors</CardTitle>
                <CardDescription>Learn from certified driving instructors with years of experience</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-blue-600" />
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>Book lessons at times that work for your schedule</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-blue-600" />
                <CardTitle>High Pass Rate</CardTitle>
                <CardDescription>95% of our students pass their driving test on the first try</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 lg:gap-12 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">5000+</h3>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-muted-foreground">Pass Rate</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-muted-foreground">Expert Instructors</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 DriveAcademy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
