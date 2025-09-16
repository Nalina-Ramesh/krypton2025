import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  Gamepad2, 
  Calculator, 
  Zap, 
  FlaskConical, 
  Microscope,
  Trophy,
  Star,
  Play,
  Clock,
  Users,
  Target,
  Brain,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const subjects = [
    {
      id: 'math',
      title: 'Mathematics',
      icon: Calculator,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      description: 'Master mathematical concepts through engaging problem-solving games',
      games: [
        {
          id: 'algebra-quest',
          title: 'Algebra Quest',
          description: 'Embark on an epic adventure solving algebraic equations to unlock magical powers and defeat mathematical monsters',
          difficulty: 'Intermediate',
          players: '1 Player',
          duration: '20-30 min',
          rating: 4.8,
          completions: 1247,
          skills: ['Linear Equations', 'Factoring', 'Graphing', 'Problem Solving']
        },
        {
          id: 'geometry-builder',
          title: 'Geometry Constructor',
          description: 'Build amazing architectural structures using geometric principles and spatial reasoning',
          difficulty: 'Beginner',
          players: '1-4 Players',
          duration: '15-25 min',
          rating: 4.9,
          completions: 2156,
          skills: ['Shapes', 'Angles', 'Area & Perimeter', 'Spatial Reasoning']
        }
      ]
    },
    {
      id: 'physics',
      title: 'Physics',
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      description: 'Explore the laws of physics through interactive simulations and challenges',
      games: [
        {
          id: 'force-masters',
          title: 'Force Masters',
          description: 'Master the fundamental forces of nature through challenging physics puzzles and real-world applications',
          difficulty: 'Advanced',
          players: '1 Player',
          duration: '25-35 min',
          rating: 4.7,
          completions: 892,
          skills: ['Forces', 'Motion', 'Energy', 'Momentum']
        },
        {
          id: 'wave-rider',
          title: 'Wave Surfer',
          description: 'Ride through the fascinating world of sound and light waves in this physics adventure',
          difficulty: 'Intermediate',
          players: '1-2 Players',
          duration: '20-30 min',
          rating: 4.6,
          completions: 1034,
          skills: ['Wave Properties', 'Frequency', 'Amplitude', 'Interference']
        }
      ]
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      icon: FlaskConical,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      description: 'Discover the wonders of chemistry through safe virtual experiments',
      games: [
        {
          id: 'element-explorer',
          title: 'Element Explorer',
          description: 'Journey through the periodic table discovering elements and creating fascinating chemical compounds',
          difficulty: 'Beginner',
          players: '1 Player',
          duration: '30-45 min',
          rating: 4.9,
          completions: 1832,
          skills: ['Periodic Table', 'Chemical Bonding', 'Reactions', 'Compounds']
        },
        {
          id: 'molecular-chef',
          title: 'Molecular Chef',
          description: 'Cook up amazing chemical reactions in your virtual laboratory kitchen and learn stoichiometry',
          difficulty: 'Intermediate',
          players: '1-3 Players',
          duration: '25-35 min',
          rating: 4.8,
          completions: 967,
          skills: ['Chemical Equations', 'Stoichiometry', 'pH Balance', 'Lab Safety']
        }
      ]
    },
    {
      id: 'biology',
      title: 'Biology',
      icon: Microscope,
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-950/30',
      description: 'Explore the living world from cells to ecosystems',
      games: [
        {
          id: 'cell-city',
          title: 'Cell City Manager',
          description: 'Build and manage a thriving cellular metropolis while learning about organelles and cellular processes',
          difficulty: 'Beginner',
          players: '1 Player',
          duration: '35-50 min',
          rating: 4.8,
          completions: 1456,
          skills: ['Cell Structure', 'Organelles', 'Cell Processes', 'Metabolism']
        },
        {
          id: 'evolution-simulator',
          title: 'Evolution Lab',
          description: 'Guide species through evolutionary changes and natural selection over millions of years',
          difficulty: 'Advanced',
          players: '1-2 Players',
          duration: '40-60 min',
          rating: 4.7,
          completions: 734,
          skills: ['Natural Selection', 'Adaptation', 'Genetics', 'Biodiversity']
        }
      ]
    }
  ];

  const featuredGame = subjects[0].games[0];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl md:text-5xl font-bold text-high-contrast bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Learning Games
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Master academic subjects through engaging, adaptive gameplay designed specifically for different learning styles and abilities. 
          Each game adapts to your pace and provides personalized challenges.
        </p>
      </div>

      {/* Featured Game */}
      <Card className="mb-12 glass-card gentle-transition gentle-hover border-2 border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <CardContent className="p-8 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 px-4 py-1">
                ⭐ Featured Game
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-high-contrast mb-4">
                {featuredGame.title}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {featuredGame.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {featuredGame.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 bg-white/50 dark:bg-gray-800/50">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(featuredGame.difficulty)}`}>
                    {featuredGame.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{featuredGame.players}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{featuredGame.duration}</span>
                </div>
              </div>
              
              <Button size="lg" className="gentle-transition gentle-hover px-8 py-4 text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Play className="w-6 h-6 mr-3" />
                Start Playing Now
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 h-full flex flex-col items-center justify-center border border-primary/20">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <Calculator className="w-16 h-16 text-white" />
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-2xl font-bold text-primary">{featuredGame.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {featuredGame.completions.toLocaleString()} students played
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject Categories */}
      <div className="space-y-16">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          return (
            <div key={subject.id} className="relative">
              {/* Subject Header */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-high-contrast">
                      {subject.title} Games
                    </h2>
                    <p className="text-muted-foreground">
                      {subject.games.length} engaging games available
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {subject.description}
                </p>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {subject.games.map((game, gameIndex) => (
                  <Card 
                    key={game.id}
                    className="glass-card gentle-transition gentle-hover cursor-pointer border-2 border-transparent hover:border-primary/30 overflow-hidden group"
                    onClick={() => setSelectedGame(game.id)}
                  >
                    <div className={`h-2 bg-gradient-to-r ${subject.color}`}></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                          <CardTitle className="text-xl font-bold text-high-contrast mb-3 group-hover:text-primary gentle-transition">
                            {game.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground leading-relaxed">
                            {game.description}
                          </CardDescription>
                        </div>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Learning Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {game.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs px-2 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Game Details */}
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                            <Brain className="w-4 h-4" />
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(game.difficulty)}`}>
                            {game.difficulty}
                          </span>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                            <Clock className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-center">{game.duration}</span>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                            <Users className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-center">{game.players}</span>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{game.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({game.completions.toLocaleString()} plays)
                          </span>
                        </div>
                        
                        <Button size="sm" className="gentle-transition group-hover:bg-primary group-hover:text-primary-foreground">
                          <Play className="w-4 h-4 mr-2" />
                          Play Now
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 gentle-transition" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Achievement Section */}
      <Card className="mt-16 glass-card border-2 border-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <CardHeader className="relative">
          <CardTitle className="flex items-center gap-3 text-high-contrast text-center justify-center">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Your Gaming Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <p className="text-sm text-muted-foreground">Games Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">847</div>
              <p className="text-sm text-muted-foreground">Points Earned</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p className="text-sm text-muted-foreground">Achievements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">73%</div>
              <p className="text-sm text-muted-foreground">Average Score</p>
              <Progress value={73} className="mt-3 h-3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}