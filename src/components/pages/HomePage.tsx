import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { KryptonLogo } from '../KryptonLogo';
import { 
  Box, 
  FlaskConical, 
  Gamepad2, 
  MessageCircle, 
  Sparkles,
  Brain,
  Heart,
  Star,
  ArrowRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const modules = [
    {
      id: 'animation',
      title: '3D Animation Studio',
      description: 'Create stunning 3D animations with AI-powered prompts',
      icon: Box,
      color: 'from-blue-400 to-blue-600',
      bgAccent: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      id: 'labs',
      title: 'Virtual Science Labs',
      description: 'Conduct safe, interactive experiments in virtual environments',
      icon: FlaskConical,
      color: 'from-green-400 to-green-600',
      bgAccent: 'bg-green-50 dark:bg-green-950/30'
    },
    {
      id: 'games',
      title: 'Learning Games',
      description: 'Master subjects through engaging, adaptive gameplay',
      icon: Gamepad2,
      color: 'from-purple-400 to-purple-600',
      bgAccent: 'bg-purple-50 dark:bg-purple-950/30'
    },
    {
      id: 'chatbot',
      title: 'AI Learning Assistant',
      description: 'Get personalized help and guidance 24/7',
      icon: MessageCircle,
      color: 'from-teal-400 to-teal-600',
      bgAccent: 'bg-teal-50 dark:bg-teal-950/30'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Neurodivergent-Friendly',
      description: 'Designed with ADHD, autism, and dyslexia considerations'
    },
    {
      icon: Heart,
      title: 'Inclusive Learning',
      description: 'Multiple learning styles and accessibility options'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Adaptive content that grows with each learner'
    },
    {
      icon: Star,
      title: 'Evidence-Based',
      description: 'Built on proven educational research and best practices'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <KryptonLogo size="xl" showText={false} />
          </div>
          
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-high-contrast leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Krypton
            </span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The next-generation educational platform designed specifically for neurodivergent learners. 
            Experience learning that adapts to your unique needs and celebrates your strengths.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="gentle-transition gentle-hover px-8 py-6 text-lg"
              onClick={() => onNavigate('login')}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="gentle-transition gentle-hover px-8 py-6 text-lg"
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Learning Modules */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-high-contrast">
              Explore Learning Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our specially designed learning experiences, each crafted to support different learning styles and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Card 
                  key={module.id}
                  className={`glass-card gentle-transition gentle-hover cursor-pointer border-2 border-transparent hover:border-primary/20 ${module.bgAccent}`}
                  onClick={() => onNavigate(module.id)}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-high-contrast">
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {module.description}
                    </CardDescription>
                    <Button 
                      variant="ghost" 
                      className="mt-4 p-0 h-auto text-primary hover:text-primary/80 gentle-transition"
                    >
                      Explore Module
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-high-contrast">
              Why Choose Krypton?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've reimagined education with neurodivergent learners at the center of our design process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-high-contrast">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-high-contrast">
            Ready to Transform Learning?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Join thousands of students and educators who are already experiencing the future of inclusive education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gentle-transition gentle-hover px-8 py-6 text-lg"
              onClick={() => onNavigate('login')}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="gentle-transition gentle-hover px-8 py-6 text-lg"
              onClick={() => onNavigate('about')}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}