import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { 
  MessageCircle, 
  Send, 
  Mic, 
  Paperclip,
  MoreHorizontal,
  Bot,
  User,
  Lightbulb,
  BookOpen,
  Calculator,
  FlaskConical,
  RefreshCw,
  Heart
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'suggestion';
}

export function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Krypton AI, your personalized learning assistant. I'm here to help you with your studies, answer questions, and provide support tailored to your learning style. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    {
      id: 'explain-concept',
      icon: Lightbulb,
      title: 'Explain a Concept',
      description: 'Get clear explanations for any topic',
      prompt: 'Can you explain this concept to me:'
    },
    {
      id: 'homework-help',
      icon: BookOpen,
      title: 'Homework Help',
      description: 'Get guidance on your assignments',
      prompt: 'I need help with my homework:'
    },
    {
      id: 'math-problem',
      icon: Calculator,
      title: 'Solve Math Problem',
      description: 'Step-by-step math solutions',
      prompt: 'Help me solve this math problem:'
    },
    {
      id: 'science-question',
      icon: FlaskConical,
      title: 'Science Question',
      description: 'Ask about any science topic',
      prompt: 'I have a science question:'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageContent?: string) => {
    const content = messageContent || inputValue.trim();
    if (!content) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(content),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('math') || lowerMessage.includes('equation') || lowerMessage.includes('solve')) {
      return "I'd be happy to help you with math! For math problems, I can:\n\n• Break down complex problems into simple steps\n• Explain each step clearly\n• Provide visual representations when helpful\n• Offer alternative solution methods\n\nPlease share the specific problem you're working on, and I'll guide you through it step by step.";
    }
    
    if (lowerMessage.includes('science') || lowerMessage.includes('chemistry') || lowerMessage.includes('physics') || lowerMessage.includes('biology')) {
      return "Science questions are my specialty! I can help explain:\n\n• Scientific concepts and principles\n• How experiments work\n• Real-world applications\n• Connections between different topics\n\nWhat specific science topic would you like to explore? I'll adapt my explanation to your learning level and style.";
    }
    
    if (lowerMessage.includes('homework') || lowerMessage.includes('assignment')) {
      return "I'm here to support your learning! I can help by:\n\n• Explaining concepts you're struggling with\n• Breaking down complex assignments\n• Suggesting study strategies\n• Providing practice problems\n\nRemember, I'm here to guide your understanding, not do the work for you. What subject or assignment would you like help with?";
    }
    
    if (lowerMessage.includes('explain') || lowerMessage.includes('understand')) {
      return "I'd love to help you understand! I can explain things in different ways:\n\n• Simple, step-by-step breakdowns\n• Visual examples and analogies\n• Real-world connections\n• Interactive examples\n\nWhat topic would you like me to explain? I'll tailor my explanation to your learning style and make it as clear as possible.";
    }
    
    return "That's a great question! I'm designed to help neurodivergent learners succeed by providing personalized, patient support. I can adapt my responses to different learning styles and take breaks whenever you need them.\n\nIs there a specific subject or topic you'd like to explore together? I'm here to make learning enjoyable and accessible for you!";
  };

  const handleQuickAction = (action: typeof quickActions[0]) => {
    setInputValue(action.prompt + ' ');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-high-contrast">
          AI Learning Assistant
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Your personal AI tutor designed to understand and adapt to your unique learning needs.
        </p>
      </div>

      {/* Quick Actions */}
      {messages.length <= 1 && (
        <div className="mb-6">
          <h2 className="text-lg font-medium text-high-contrast mb-4">
            How can I help you today?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card
                  key={action.id}
                  className="glass-card gentle-transition gentle-hover cursor-pointer border-2 border-transparent hover:border-primary/20 p-4"
                  onClick={() => handleQuickAction(action)}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-medium text-high-contrast mb-1 text-sm">
                      {action.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Chat Container */}
      <Card className="flex-1 glass-card flex flex-col min-h-[500px]">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-high-contrast">Krypton AI</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Online & Ready to Help
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="gentle-transition">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-md px-4 py-3 rounded-2xl gentle-transition ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-secondary/50 text-foreground'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                  <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                    <span>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                    {message.sender === 'bot' && (
                      <Heart className="w-3 h-3 hover:fill-current cursor-pointer gentle-transition" />
                    )}
                  </div>
                </div>

                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-secondary/50 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-border/50">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your studies..."
                className="min-h-[60px] resize-none pr-12 gentle-transition focus:ring-2 focus:ring-primary/50"
                disabled={isTyping}
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-2 right-2 gentle-transition"
                disabled={isTyping}
              >
                <Paperclip className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gentle-transition"
                disabled={isTyping}
              >
                <Mic className="w-4 h-4" />
              </Button>
              
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="gentle-transition gentle-hover"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
            <span>Press Enter to send, Shift+Enter for new line</span>
            <Badge variant="secondary" className="text-xs">
              AI-Powered Learning Support
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}