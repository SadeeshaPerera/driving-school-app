"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Car, BookOpen, CheckCircle, Clock, Trophy } from "lucide-react"

export default function TheoryPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      question: "What is the speed limit in a residential area?",
      options: ["25 mph", "35 mph", "45 mph", "55 mph"],
      correct: "25 mph",
    },
    {
      question: "When should you use your turn signal?",
      options: [
        "Only when turning left",
        "Only when changing lanes",
        "At least 100 feet before turning",
        "Only in heavy traffic",
      ],
      correct: "At least 100 feet before turning",
    },
    {
      question: "What does a yellow traffic light mean?",
      options: ["Speed up", "Stop immediately", "Prepare to stop", "Continue at same speed"],
      correct: "Prepare to stop",
    },
  ]

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
      setShowResult(false)
    }
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

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
          <h2 className="text-3xl font-bold tracking-tight">Theory Practice</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Practice Test */}
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Practice Test</CardTitle>
                <Badge variant="outline">
                  Question {currentQuestion + 1} of {questions.length}
                </Badge>
              </div>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>

                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                      {showResult && option === questions[currentQuestion].correct && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                  ))}
                </RadioGroup>

                {showResult && (
                  <div
                    className={`p-4 rounded-lg ${
                      selectedAnswer === questions[currentQuestion].correct
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <p
                      className={`font-medium ${
                        selectedAnswer === questions[currentQuestion].correct ? "text-green-800" : "text-red-800"
                      }`}
                    >
                      {selectedAnswer === questions[currentQuestion].correct
                        ? "Correct!"
                        : `Incorrect. The correct answer is: ${questions[currentQuestion].correct}`}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                >
                  Previous
                </Button>
                <div className="space-x-2">
                  {!showResult ? (
                    <Button onClick={handleSubmit} disabled={!selectedAnswer}>
                      Submit Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
                      Next Question
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Materials */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Study Materials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Traffic Signs
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Road Rules
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Safety Guidelines
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Parking Rules
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Score</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tests Completed</span>
                    <span className="font-medium">12/20</span>
                  </div>
                  <Progress value={60} />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">47</div>
                    <div className="text-xs text-muted-foreground">Correct</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">8</div>
                    <div className="text-xs text-muted-foreground">Incorrect</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">Traffic Signs Quiz</div>
                  <div className="text-muted-foreground">Score: 90% • 2 hours ago</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Road Rules Test</div>
                  <div className="text-muted-foreground">Score: 85% • Yesterday</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Safety Guidelines</div>
                  <div className="text-muted-foreground">Score: 95% • 2 days ago</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
