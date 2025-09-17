import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ScrollArea } from '../ui/scroll-area';
import { 
  FlaskConical, 
  Microscope, 
  Atom, 
  Zap,
  BookOpen,
  Play,
  RotateCcw,
  Download,
  Info,
  AlertTriangle,
  CheckCircle2,
  Timer,
  Beaker,
  Eye,
  ArrowRight
} from 'lucide-react';

export function LabsPage() {
  const [selectedSubject, setSelectedSubject] = useState('chemistry');
  const [selectedLab, setSelectedLab] = useState<string | null>(null);
  const [labRunning, setLabRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const subjects = [
    {
      id: 'chemistry',
      title: 'Chemistry',
      icon: FlaskConical,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      description: 'Explore chemical reactions and molecular interactions safely',
      experiments: [
        {
          id: 'acid-base-reactions',
          title: 'Acid-Base Reactions',
          difficulty: 'Beginner',
          duration: '15 min',
          description: 'Investigate how acids and bases interact to form salts and water through safe virtual experiments.',
          objectives: ['Understand pH scale', 'Observe neutralization', 'Measure reaction rates'],
          equipment: ['pH meter', 'Litmus paper', 'Beakers', 'Acids & Bases'],
          safety: 'Virtual environment - completely safe'
        },
        {
          id: 'molecular-bonding',
          title: 'Molecular Bonding',
          difficulty: 'Intermediate',
          duration: '25 min',
          description: 'Visualize how atoms form ionic and covalent bonds in 3D space.',
          objectives: ['Identify bond types', 'Predict molecular shapes', 'Calculate bond energies'],
          equipment: ['3D molecular viewer', 'Periodic table', 'Bond calculator'],
          safety: 'Virtual environment - completely safe'
        },
        {
          id: 'organic-synthesis',
          title: 'Organic Synthesis',
          difficulty: 'Advanced',
          duration: '35 min',
          description: 'Create complex organic molecules through step-by-step synthesis reactions.',
          objectives: ['Plan synthesis routes', 'Understand reaction mechanisms', 'Optimize yields'],
          equipment: ['Reaction planner', 'Molecular editor', 'Yield calculator'],
          safety: 'Virtual environment - completely safe'
        }
      ],
      newExperiment: {
        id: 'new-chemistry-experiment',
        title: 'New Experiment',
        difficulty: 'Beginner',
        duration: '10 min',
        description: 'Add your experiment details here',
        objectives: [],
        equipment: [],
        safety: 'Virtual environment - completely safe'
      }
    },
    {
      id: 'physics',
      title: 'Physics',
      icon: Zap,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      description: 'Discover the fundamental laws that govern our universe',
      experiments: [
        {
          id: 'gravity-simulation',
          title: 'Gravity & Orbital Mechanics',
          difficulty: 'Beginner',
          duration: '20 min',
          description: 'Experiment with gravitational forces and observe planetary motion in real-time.',
          objectives: ['Understand gravity laws', 'Predict orbital paths', 'Calculate escape velocity'],
          equipment: ['Gravity simulator', 'Mass calculator', 'Orbit tracer'],
          safety: 'Virtual environment - completely safe'
        },
        {
          id: 'wave-interference',
          title: 'Wave Mechanics & Interference',
          difficulty: 'Intermediate',
          duration: '30 min',
          description: 'Study wave properties, interference patterns, and resonance phenomena.',
          objectives: ['Analyze wave properties', 'Observe interference', 'Measure frequencies'],
          equipment: ['Wave generator', 'Frequency analyzer', 'Interference chamber'],
          safety: 'Virtual environment - completely safe'
        },
        {
          id: 'quantum-mechanics',
          title: 'Quantum Mechanics Basics',
          difficulty: 'Advanced',
          duration: '40 min',
          description: 'Explore quantum phenomena like tunneling, superposition, and entanglement.',
          objectives: ['Understand quantum states', 'Observe quantum tunneling', 'Measure uncertainty'],
          equipment: ['Quantum simulator', 'Particle detector', 'Wave function visualizer'],
          safety: 'Virtual environment - completely safe'
        }
      ],
      newExperiment: {
        id: 'new-physics-experiment',
        title: 'New Experiment',
        difficulty: 'Beginner',
        duration: '10 min',
        description: 'Add your experiment details here',
        objectives: [],
        equipment: [],
        safety: 'Virtual environment - completely safe'
      }
    },
    {
      id: 'biology',
      title: 'Biology',
      icon: Microscope,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      description: 'Investigate living systems from molecules to ecosystems',
      experiments: [
        {
          id: 'cell-division',
          title: 'Cell Division & Mitosis',
          difficulty: 'Beginner',
          duration: '25 min',
          description: 'Observe the stages of mitosis and meiosis in real-time cellular processes.',
          objectives: ['Identify cell phases', 'Track chromosome movement', 'Compare division types'],
          equipment: ['Digital microscope', 'Cell stains', 'Time-lapse recorder'],
          safety: 'Virtual environment - completely safe'
        },
        {
          id: 'dna-replication',
          title: 'DNA Replication & Transcription',
          difficulty: 'Intermediate',
          duration: '30 min',
          description: 'Explore the molecular mechanisms of genetic replication and protein synthesis.',
          objectives: ['Follow DNA replication', 'Trace transcription', 'Model translation'],
          equipment: ['DNA sequencer', 'Protein synthesizer', 'Gene editor'],
          safety: 'Virtual environment - completely safe'
        },
        {
          id: 'ecosystem-dynamics',
          title: 'Ecosystem Dynamics',
          difficulty: 'Advanced',
          duration: '45 min',
          description: 'Study population dynamics, food webs, and environmental interactions.',
          objectives: ['Model populations', 'Analyze food webs', 'Predict ecosystem changes'],
          equipment: ['Population tracker', 'Environment simulator', 'Data analyzer'],
          safety: 'Virtual environment - completely safe'
        }
      ],
      newExperiment: {
        id: 'new-biology-experiment',
        title: 'New Experiment',
        difficulty: 'Beginner',
        duration: '10 min',
        description: 'Add your experiment details here',
        objectives: [],
        equipment: [],
        safety: 'Virtual environment - completely safe'
      }
    }
  ].map(subject => ({
    ...subject,
    experiments: [...subject.experiments, subject.newExperiment].filter(exp => exp != null)
  }));

  const currentSubject = subjects.find(s => s.id === selectedSubject) || subjects[0];
  const currentLab = selectedLab ? 
    subjects.flatMap(s => s.experiments).find(exp => exp.id === selectedLab) : null;

  const startLab = (labId: string) => {
    setSelectedLab(labId);
    setLabRunning(true);
    setProgress(0);
    
    // Simulate lab progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 500);
  };

  const resetLab = () => {
    setLabRunning(false);
    setProgress(0);
  };

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
          Virtual Science Labs
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Conduct safe, interactive experiments in our state-of-the-art virtual laboratory environment. 
          Perfect for hands-on learning without the risks or limitations of physical labs.
        </p>
      </div>

      {/* Subject Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          const isSelected = selectedSubject === subject.id;
          return (
            <Link to={`/${subject.id}`} key={subject.id}>
              <Card
                className={`glass-card gentle-transition gentle-hover cursor-pointer border-2 overflow-hidden ${
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-transparent hover:border-primary/30'
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${subject.color}`}></div>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-high-contrast mb-2">
                    {subject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {subject.description}
                  </p>
                  <Badge variant={isSelected ? "default" : "secondary"} className="px-3 py-1">
                    {subject.experiments.length} Experiments
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Experiments List & Instructions Panel */}
        <div className="lg:col-span-1 space-y-6">
          {/* Available Experiments */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <Atom className="w-5 h-5 text-primary" />
                {currentSubject.title} Experiments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentSubject.experiments.map((experiment) => (
                  <div
                    key={experiment.id}
                    className={`p-4 rounded-xl border-2 gentle-transition cursor-pointer overflow-hidden ${
                      selectedLab === experiment.id 
                        ? 'border-primary bg-primary/5 shadow-md' 
                        : 'border-border hover:border-primary/50 hover:bg-secondary/30'
                    }`}
                    onClick={() => !labRunning && setSelectedLab(experiment.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${currentSubject.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Beaker className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-high-contrast leading-tight mb-2">
                          {experiment.title}
                        </h4>
                        <div className="flex gap-2 mb-3">
                          <Badge className={`text-xs px-2 py-1 ${getDifficultyColor(experiment.difficulty)}`}>
                            {experiment.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-xs px-2 py-1">
                            {experiment.duration}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {experiment.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lab Instructions */}
          {currentLab && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-high-contrast">
                  <BookOpen className="w-5 h-5 text-accent" />
                  Lab Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium text-high-contrast mb-2">Objectives</h4>
                      <ul className="space-y-1">
                        {currentLab.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-muted-foreground">{objective}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-high-contrast mb-2">Equipment Needed</h4>
                      <div className="flex flex-wrap gap-1">
                        {currentLab.equipment.map((item, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400">
                        <Info className="w-4 h-4" />
                        <span className="font-medium">Safety Note:</span>
                      </div>
                      <p className="text-xs text-green-600 dark:text-green-500 mt-1">
                        {currentLab.safety}
                      </p>
                    </div>
                  </div>
                </ScrollArea>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <Button 
                    onClick={() => startLab(currentLab.id)}
                    disabled={labRunning}
                    className="w-full gentle-transition gentle-hover"
                    size="lg"
                  >
                    {labRunning ? (
                      <>
                        <Timer className="w-5 h-5 mr-2" />
                        Experiment Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Start Experiment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Virtual Lab Environment */}
        <div className="lg:col-span-2">
          <Card className="glass-card h-[600px] lg:h-[700px] overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-high-contrast">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Virtual Lab Environment
                  {currentLab && (
                    <Badge variant="outline" className="ml-3 bg-white/50 dark:bg-gray-800/50">
                      {currentLab.title}
                    </Badge>
                  )}
                </div>
                {labRunning && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Experiment Active
                    </div>
                    <Button
                      onClick={resetLab}
                      variant="outline"
                      size="sm"
                      className="gentle-transition"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full p-6">
              <div className="relative w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl border-2 border-dashed border-border/50 flex items-center justify-center overflow-hidden">
                {!selectedLab && (
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <FlaskConical className="w-16 h-16 text-primary/60" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-high-contrast mb-3">
                        Select an Experiment to Begin
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                        Choose an experiment from the {currentSubject.title} section to start your virtual laboratory experience.
                      </p>
                    </div>
                  </div>
                )}

                {selectedLab && !labRunning && (
                  <div className="text-center space-y-8">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                      <currentSubject.icon className="w-20 h-20 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-high-contrast mb-3">
                        {currentLab?.title} Laboratory Ready
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
                        Your virtual laboratory is prepared and all equipment is calibrated. 
                        Review the instructions and click "Start Experiment" when ready.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Environment Loaded & Ready
                      </div>
                    </div>
                  </div>
                )}

                {labRunning && (
                  <div className="relative w-full h-full">
                    {/* Progress Bar */}
                    <div className="absolute top-6 left-6 right-6 z-10">
                      <div className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="font-medium text-high-contrast">Experiment Progress</span>
                          <span className="font-bold text-primary">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-3 rounded-full gentle-transition shadow-sm"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {currentLab?.title} - {currentSubject.title} Lab
                        </p>
                      </div>
                    </div>

                    {/* Simulated Lab Environment */}
                    <div className={`absolute inset-8 ${currentSubject.bgColor} rounded-xl overflow-hidden shadow-inner`}>
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Lab Equipment Simulation based on subject */}
                        {selectedSubject === 'chemistry' && (
                          <div className="grid grid-cols-3 gap-12 items-center">
                            {/* Beaker 1 */}
                            <div className="text-center">
                              <div className="w-20 h-24 bg-gradient-to-b from-transparent to-blue-300/50 border-2 border-blue-400 rounded-b-xl mx-auto mb-3 relative overflow-hidden shadow-lg">
                                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-blue-400/40 animate-pulse"></div>
                                <div className="absolute top-2 left-2 right-2 h-1 bg-blue-500/30 rounded-full"></div>
                              </div>
                              <p className="text-xs text-muted-foreground font-medium">Solution A</p>
                            </div>

                            {/* Reaction Arrow */}
                            <div className="flex items-center justify-center">
                              <div className="text-3xl text-primary animate-pulse">→</div>
                            </div>

                            {/* Beaker 2 */}
                            <div className="text-center">
                              <div className="w-20 h-24 bg-gradient-to-b from-transparent to-green-300/50 border-2 border-green-400 rounded-b-xl mx-auto mb-3 relative overflow-hidden shadow-lg">
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-green-400/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute top-2 left-2 right-2 h-1 bg-green-500/30 rounded-full"></div>
                              </div>
                              <p className="text-xs text-muted-foreground font-medium">Product</p>
                            </div>
                          </div>
                        )}

                        {selectedSubject === 'physics' && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* Orbital simulation */}
                            <div className="relative w-64 h-64">
                              <div className="absolute inset-0 border-2 border-blue-300 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                              </div>
                              <div className="absolute inset-8 border-2 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }}>
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
                              </div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                            </div>
                          </div>
                        )}

                        {selectedSubject === 'biology' && (
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* Cell division simulation */}
                            <div className="relative">
                              <div className="w-32 h-32 border-4 border-green-400 rounded-full relative overflow-hidden bg-green-50 dark:bg-green-950/30 shadow-lg">
                                <div className="absolute inset-4 border-2 border-green-300 rounded-full bg-green-100 dark:bg-green-900/20"></div>
                                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
                                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                              </div>
                              <p className="text-center text-xs text-muted-foreground mt-3 font-medium">Cell in Mitosis</p>
                            </div>
                          </div>
                        )}

                        {/* Animated particles */}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce"
                            style={{
                              top: `${20 + (i % 4) * 20}%`,
                              left: `${15 + (i % 6) * 15}%`,
                              animationDelay: `${i * 0.3}s`,
                              animationDuration: '2s'
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Results Panel */}
                    {progress === 100 && (
                      <div className="absolute bottom-6 left-6 right-6 z-10">
                        <div className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            <span className="text-lg font-medium text-green-700 dark:text-green-400">
                              Experiment Complete!
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            Congratulations! You've successfully completed the {currentLab?.title} experiment. 
                            Your results have been recorded and analyzed.
                          </p>
                          <div className="flex gap-3">
                            <Button size="sm" className="gentle-transition">
                              <Download className="w-4 h-4 mr-2" />
                              Download Report
                            </Button>
                            <Button variant="outline" size="sm" className="gentle-transition" onClick={resetLab}>
                              <RotateCcw className="w-4 h-4 mr-2" />
                              Run Again
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}