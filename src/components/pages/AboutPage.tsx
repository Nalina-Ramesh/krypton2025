import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { KryptonLogo } from '../KryptonLogo';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Heart, 
  Users, 
  Target, 
  Award,
  Mail,
  Linkedin,
  Twitter,
  Star,
  Brain,
  Accessibility,
  Globe,
  BookOpen
} from 'lucide-react';

export function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      background: 'Educational Psychology PhD, Former Special Ed Teacher',
      image: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzkxMDQxNXww&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Passionate about creating inclusive learning experiences for all students, bringing 15+ years of special education expertise.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      background: 'AI/ML Engineer, Accessibility Advocate',
      image: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Nzk0NzIzOXww&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Building technology that breaks down barriers to learning, with expertise in machine learning and accessible design.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. Alex Kim',
      role: 'Head of Learning Science',
      background: 'Cognitive Science PhD, Neurodiversity Researcher',
      image: 'https://images.unsplash.com/photo-1659100945967-f28a8d25705e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU4MDMyNjk4fDA&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Researching how different minds learn best and applying that knowledge to create evidence-based educational tools.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Jordan Smith',
      role: 'UX Design Lead',
      background: 'Inclusive Design Specialist, ADHD Advocate',
      image: 'https://images.unsplash.com/photo-1580643375398-5174902ebcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc1ODAzMjcwMHww&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Designing interfaces that work beautifully for neurodivergent users, with a focus on accessibility and user empowerment.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. Maya Patel',
      role: 'Head of Content Strategy',
      background: 'Curriculum Designer, Autism Research Specialist',
      image: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzkyMDg4Mnww&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Creating adaptive learning content that meets diverse learning needs, with specialized expertise in autism spectrum support.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Thompson',
      role: 'VP of Engineering',
      background: 'Full-Stack Developer, Dyslexia Advocate',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Nzk1NjcwNnww&ixlib=rb-4.1.0&q=80&w=400',
      bio: 'Leading our technical development with a personal understanding of learning differences and a passion for inclusive technology.',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Inclusive by Design',
      description: 'Every feature is built with neurodivergent learners at the center, ensuring accessibility and usability for all.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Science-Based',
      description: 'Our platform is grounded in cognitive science research and evidence-based educational practices.',
      color: 'from-purple-400 to-blue-500'
    },
    {
      icon: Accessibility,
      title: 'Accessibility First',
      description: 'We prioritize accessibility in every design decision, from color choices to interaction patterns.',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Working to make quality, inclusive education accessible to learners worldwide.',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const achievements = [
    { number: '50K+', label: 'Students Helped' },
    { number: '2.5K+', label: 'Teachers Using Platform' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '12', label: 'Countries Reached' }
  ];

  const recognitions = [
    'EdTech Innovation Award 2024',
    'Accessibility Excellence Recognition',
    'UNESCO Learning Innovation Prize',
    'Neurodiversity Champion Award'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-secondary/20 to-accent/30 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-8 flex justify-center">
            <KryptonLogo size="xl" />
          </div>
          
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-high-contrast leading-tight">
            Empowering Every Mind to Learn
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Krypton was born from a simple belief: every student deserves educational tools 
            designed for their unique way of thinking and learning. We're building the future 
            of neurodivergent-friendly education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gentle-transition gentle-hover px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="gentle-transition gentle-hover px-8 py-4">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-high-contrast">
            Our Mission
          </h2>
          <Card className="glass-card p-8 border-2 border-primary/20 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            <p className="text-xl text-muted-foreground leading-relaxed relative">
              To create educational technology that celebrates neurodiversity and empowers 
              every learner to reach their full potential. We believe that when education 
              is designed with different minds in mind, everyone benefits.
            </p>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-high-contrast text-center">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="glass-card gentle-transition gentle-hover overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${value.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-high-contrast mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-high-contrast">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team combines expertise in education, technology, psychology, 
              and design to create truly inclusive learning experiences. Each member brings 
              personal passion for neurodiversity and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card gentle-transition gentle-hover overflow-hidden group">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover group-hover:scale-105 gentle-transition"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 gentle-transition"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-high-contrast mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4 font-medium">
                    {member.background}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" className="gentle-transition hover:bg-primary/10 hover:text-primary">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="gentle-transition hover:bg-primary/10 hover:text-primary">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="gentle-transition hover:bg-primary/10 hover:text-primary">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="text-center mb-20">
            <h2 className="mb-16 text-4xl font-bold text-high-contrast">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 gentle-transition">
                    <div className="text-3xl font-bold text-white">
                      {achievement.number.slice(0, -1)}
                      <span className="text-lg">{achievement.number.slice(-1)}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <Card className="glass-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-3 text-center text-high-contrast justify-center">
                <Award className="w-6 h-6 text-yellow-500" />
                Recognition & Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recognitions.map((recognition, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/30 gentle-transition hover:bg-white/70 dark:hover:bg-gray-800/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium text-high-contrast">{recognition}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-high-contrast text-center">
            Our Story
          </h2>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <Card className="glass-card p-8 border-l-4 border-primary">
              <p className="text-lg">
                Krypton began when our founder, Dr. Sarah Chen, witnessed firsthand the 
                struggles of neurodivergent students in traditional educational settings. 
                As a special education teacher with ADHD herself, she understood the 
                frustration of trying to learn in systems not designed for different minds.
              </p>
            </Card>
            
            <Card className="glass-card p-8 border-l-4 border-accent">
              <p>
                In 2023, Sarah partnered with Marcus Rodriguez, an AI engineer whose 
                autistic brother had faced similar challenges in school. Together, they 
                envisioned a platform where technology could adapt to the learner, not 
                the other way around.
              </p>
            </Card>
            
            <Card className="glass-card p-8 border-l-4 border-primary">
              <p>
                What started as a small project to help a few students has grown into 
                a comprehensive platform serving thousands of learners worldwide. Every 
                feature we build is tested with neurodivergent users, ensuring our 
                solutions work for the people who need them most.
              </p>
            </Card>
            
            <Card className="glass-card p-8 border-l-4 border-accent">
              <p>
                Today, Krypton represents more than just educational software—it's a 
                movement toward truly inclusive education that celebrates the unique 
                strengths that neurodivergent minds bring to learning and innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-high-contrast">
            Join Our Mission
          </h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you're an educator, student, parent, or advocate, there are many 
            ways to be part of building a more inclusive educational future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gentle-transition gentle-hover px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="gentle-transition gentle-hover px-8 py-4">
              <Target className="w-5 h-5 mr-2" />
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}