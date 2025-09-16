import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Target,
  Users,
  BarChart3,
  Calendar,
  Settings,
  PlayCircle,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Star,
  Brain,
  Zap
} from 'lucide-react';

interface DashboardPageProps {
  userType: 'student' | 'teacher';
}

export function DashboardPage({ userType }: DashboardPageProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  if (userType === 'student') {
    return <StudentDashboard selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />;
  } else {
    return <TeacherDashboard selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />;
  }
}

function StudentDashboard({ selectedPeriod, setSelectedPeriod }: {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
}) {
  const recentActivities = [
    {
      id: 1,
      type: 'game',
      title: 'Algebra Quest - Level 5',
      subject: 'Mathematics',
      status: 'completed',
      score: 85,
      timeSpent: '25 min',
      completedAt: '2 hours ago'
    },
    {
      id: 2,
      type: 'lab',
      title: 'Cell Division Experiment',
      subject: 'Biology',
      status: 'in-progress',
      progress: 60,
      timeSpent: '18 min',
      completedAt: '1 day ago'
    },
    {
      id: 3,
      type: 'animation',
      title: 'Solar System Animation',
      subject: 'Physics',
      status: 'completed',
      score: 92,
      timeSpent: '15 min',
      completedAt: '2 days ago'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Chemistry Quiz: Periodic Table',
      dueDate: 'Tomorrow',
      difficulty: 'Medium',
      estimatedTime: '20 min'
    },
    {
      id: 2,
      title: 'Physics Lab: Wave Properties',
      dueDate: 'Friday',
      difficulty: 'Hard',
      estimatedTime: '45 min'
    },
    {
      id: 3,
      title: 'Math Game: Geometry Challenge',
      dueDate: 'Next Week',
      difficulty: 'Easy',
      estimatedTime: '15 min'
    }
  ];

  const achievements = [
    { name: 'Math Master', description: 'Completed 10 algebra problems', icon: '🧮', earned: true },
    { name: 'Science Explorer', description: 'Finished 5 virtual labs', icon: '🔬', earned: true },
    { name: 'Speed Learner', description: 'Complete a lesson in under 10 minutes', icon: '⚡', earned: false },
    { name: 'Consistent Learner', description: 'Study for 7 days in a row', icon: '📅', earned: true },
  ];

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-high-contrast">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          Ready to continue your learning journey? You're doing great!
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Learning Streak</p>
                <p className="text-2xl font-bold text-primary">12 days</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Modules Completed</p>
                <p className="text-2xl font-bold text-accent">8/12</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-2xl font-bold text-primary">87%</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Time Today</p>
                <p className="text-2xl font-bold text-accent">2h 15m</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <PlayCircle className="w-5 h-5 text-primary" />
                Continue Learning
              </CardTitle>
              <CardDescription>
                Pick up where you left off
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-high-contrast">Cell Division Lab</h4>
                      <p className="text-sm text-muted-foreground">Biology • Virtual Lab</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      60% Complete
                    </Badge>
                  </div>
                  <Progress value={60} className="mb-3" />
                  <Button size="sm" className="gentle-transition gentle-hover">
                    Continue Lab
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <BookOpen className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 gentle-transition hover:bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.type === 'game' ? 'bg-purple-100 dark:bg-purple-900/30' :
                        activity.type === 'lab' ? 'bg-green-100 dark:bg-green-900/30' :
                        'bg-blue-100 dark:bg-blue-900/30'
                      }`}>
                        {activity.type === 'game' && <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                        {activity.type === 'lab' && <Brain className="w-5 h-5 text-green-600 dark:text-green-400" />}
                        {activity.type === 'animation' && <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-high-contrast text-sm">{activity.title}</h4>
                        <p className="text-xs text-muted-foreground">{activity.subject} • {activity.timeSpent}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {activity.status === 'completed' ? (
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            {activity.score}%
                          </Badge>
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                      ) : (
                        <Badge variant="secondary">
                          {activity.progress}% done
                        </Badge>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{activity.completedAt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Tasks */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="p-3 rounded-lg bg-secondary/30 space-y-2">
                    <h4 className="font-medium text-high-contrast text-sm">{task.title}</h4>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Due: {task.dueDate}</span>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          task.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          task.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                      >
                        {task.difficulty}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">~{task.estimatedTime}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-lg flex items-center gap-3 ${
                    achievement.earned ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border border-yellow-200 dark:border-yellow-800' : 'bg-secondary/30'
                  }`}>
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className={`font-medium text-sm ${achievement.earned ? 'text-yellow-700 dark:text-yellow-400' : 'text-muted-foreground'}`}>
                        {achievement.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.earned && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function TeacherDashboard({ selectedPeriod, setSelectedPeriod }: {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
}) {
  const classes = [
    { name: 'Biology 101', students: 24, activeStudents: 18, avgProgress: 78 },
    { name: 'Chemistry Advanced', students: 16, activeStudents: 14, avgProgress: 85 },
    { name: 'Physics Fundamentals', students: 32, activeStudents: 28, avgProgress: 72 }
  ];

  const recentStudent = [
    { name: 'Emma Wilson', activity: 'Completed Cell Division Lab', score: 92, time: '2 hours ago' },
    { name: 'Marcus Chen', activity: 'Started Chemistry Quiz', progress: 45, time: '3 hours ago' },
    { name: 'Sarah Johnson', activity: 'Finished Math Game Level 5', score: 88, time: '1 day ago' },
    { name: 'Alex Rodriguez', activity: 'Working on Physics Animation', progress: 60, time: '1 day ago' }
  ];

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-high-contrast">
          Teacher Dashboard 📚
        </h1>
        <p className="text-lg text-muted-foreground">
          Monitor student progress and manage your classes effectively
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold text-primary">72</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Today</p>
                <p className="text-2xl font-bold text-accent">60</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Progress</p>
                <p className="text-2xl font-bold text-primary">78%</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Assignments Due</p>
                <p className="text-2xl font-bold text-accent">8</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Class Overview */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <Users className="w-5 h-5 text-primary" />
                Class Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classes.map((classInfo, index) => (
                  <div key={index} className="p-4 rounded-lg bg-secondary/30 gentle-transition hover:bg-secondary/50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-high-contrast">{classInfo.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {classInfo.activeStudents}/{classInfo.students} students active
                        </p>
                      </div>
                      <Badge variant="secondary">
                        {classInfo.avgProgress}% avg progress
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Class Progress</span>
                        <span className="text-muted-foreground">{classInfo.avgProgress}%</span>
                      </div>
                      <Progress value={classInfo.avgProgress} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Student Activity */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <BarChart3 className="w-5 h-5 text-primary" />
                Recent Student Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentStudent.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-high-contrast text-sm">{student.name}</h4>
                        <p className="text-xs text-muted-foreground">{student.activity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {student.score ? (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {student.score}%
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          {student.progress}% done
                        </Badge>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{student.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <Settings className="w-5 h-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gentle-transition gentle-hover" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Create Assignment
              </Button>
              <Button className="w-full justify-start gentle-transition gentle-hover" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Manage Classes
              </Button>
              <Button className="w-full justify-start gentle-transition gentle-hover" variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
              <Button className="w-full justify-start gentle-transition gentle-hover" variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Content Library
              </Button>
            </CardContent>
          </Card>

          {/* Alerts & Notifications */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                Attention Needed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-medium text-yellow-700 dark:text-yellow-400 text-sm">3 Students Struggling</h4>
                  <p className="text-xs text-yellow-600 dark:text-yellow-500">Biology 101 - Cell Division topic</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400 text-sm">5 Assignments to Review</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-500">Chemistry Advanced class</p>
                </div>
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-700 dark:text-green-400 text-sm">Excellent Progress!</h4>
                  <p className="text-xs text-green-600 dark:text-green-500">Physics class ahead of schedule</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}