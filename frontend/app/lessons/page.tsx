"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, Clock, MapPin, User } from "lucide-react"

export default function LessonsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

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
          <h2 className="text-3xl font-bold tracking-tight">Book a Lesson</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Lesson</CardTitle>
              <CardDescription>Choose your preferred date, time, and instructor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Date</label>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Time</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Instructor</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose instructor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="mike">Mike Davis</SelectItem>
                    <SelectItem value="emma">Emma Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Lesson Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose lesson type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Controls</SelectItem>
                    <SelectItem value="city">City Driving</SelectItem>
                    <SelectItem value="highway">Highway Driving</SelectItem>
                    <SelectItem value="parking">Parking Practice</SelectItem>
                    <SelectItem value="test">Test Preparation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Book Lesson</Button>
            </CardContent>
          </Card>

          {/* Upcoming Lessons */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Upcoming Lessons</CardTitle>
                <CardDescription>Manage your scheduled driving lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">City Driving</h4>
                      <Badge>Tomorrow</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      2:00 PM - 3:00 PM
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      John Smith
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      Downtown Area
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>

                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Parallel Parking</h4>
                      <Badge variant="outline">Friday</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      10:00 AM - 11:00 AM
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      Sarah Johnson
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      Practice Lot
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>

                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Highway Driving</h4>
                      <Badge variant="outline">Next Monday</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      3:00 PM - 4:00 PM
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      Mike Davis
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      Highway 101
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
