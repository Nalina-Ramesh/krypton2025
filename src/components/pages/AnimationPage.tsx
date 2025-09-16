import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  Settings,
  Lightbulb,
  Clock,
  Palette
} from 'lucide-react';

export function AnimationPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [animationGenerated, setAnimationGenerated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const examplePrompts = [
    "A friendly robot dancing in a colorful garden",
    "Solar system with planets orbiting the sun",
    "DNA double helix rotating with glowing nucleotides",
    "Mathematical equations transforming into geometric shapes",
    "Butterfly lifecycle from caterpillar to butterfly"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setAnimationGenerated(true);
      setIsPlaying(true);
    }, 3000);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold text-high-contrast">
          3D Animation Studio
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Bring your ideas to life with AI-powered 3D animations. Simply describe what you want to see, 
          and our advanced AI will create engaging animations tailored for learning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Prompt & Controls Panel */}
        <div className="lg:col-span-1 space-y-6">
          {/* Prompt Input */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <Sparkles className="w-5 h-5 text-primary" />
                Animation Prompt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Describe the 3D animation you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] resize-none gentle-transition focus:ring-2 focus:ring-primary/50"
              />
              
              <Button 
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="w-full gentle-transition gentle-hover"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Animation
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Example Prompts */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-high-contrast">
                <Lightbulb className="w-5 h-5 text-accent" />
                Example Ideas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="w-full text-left p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 gentle-transition text-sm text-muted-foreground hover:text-foreground"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Animation Controls */}
          {animationGenerated && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-high-contrast">
                  <Settings className="w-5 h-5 text-primary" />
                  Playback Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button
                    onClick={togglePlayback}
                    variant="outline"
                    size="sm"
                    className="flex-1 gentle-transition"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </>
                    )}
                  </Button>
                  
                  <Button
                    onClick={resetAnimation}
                    variant="outline"
                    size="sm"
                    className="gentle-transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Speed</span>
                    <Badge variant="secondary">1x</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <Badge variant="secondary">10s</Badge>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gentle-transition"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export Animation
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Animation Preview Canvas */}
        <div className="lg:col-span-2">
          <Card className="glass-card h-[600px] lg:h-[700px]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-high-contrast">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Preview Canvas
                </div>
                {animationGenerated && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {isPlaying ? 'Playing' : 'Paused'}
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full p-6">
              <div className="relative w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl border-2 border-dashed border-border/50 flex items-center justify-center overflow-hidden">
                {!animationGenerated && !isGenerating && (
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-primary/60" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-high-contrast mb-2">
                        Ready to Create
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                        Enter your animation prompt and click "Generate Animation" to see your ideas come to life in 3D.
                      </p>
                    </div>
                  </div>
                )}

                {isGenerating && (
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto">
                        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <div className="absolute inset-4 border-4 border-accent/30 rounded-full"></div>
                        <div className="absolute inset-4 border-4 border-accent border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-high-contrast mb-2">
                        Generating Your Animation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI is analyzing your prompt and creating a unique 3D animation...
                      </p>
                    </div>
                  </div>
                )}

                {animationGenerated && (
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-lg overflow-hidden">
                    {/* Simulated 3D animation preview */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`relative ${isPlaying ? 'animate-bounce' : ''}`}>
                        {/* Sample 3D object representation */}
                        <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl transform rotate-12 relative">
                          <div className="absolute inset-4 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg"></div>
                        </div>
                        {/* Animated particles */}
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 bg-primary/60 rounded-full ${isPlaying ? 'animate-ping' : ''}`}
                            style={{
                              top: `${20 + i * 15}%`,
                              left: `${10 + i * 20}%`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Sample generated content label */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-primary border-primary/20">
                        Generated: {prompt.slice(0, 30)}...
                      </Badge>
                    </div>
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