import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Briefcase, Heart } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Personal Development',
    description: 'Discover your strengths, overcome limiting beliefs, and build confidence to achieve your personal goals and live a more fulfilling life.',
  },
  {
    icon: Briefcase,
    title: 'Career Coaching',
    description: 'Navigate career transitions, develop leadership skills, and create a strategic plan to advance your professional journey with clarity and purpose.',
  },
  {
    icon: Users,
    title: 'Relationship Coaching',
    description: 'Improve communication, build stronger connections, and develop healthy relationship patterns that foster meaningful and lasting bonds.',
  },
  {
    icon: Heart,
    title: 'Life Balance',
    description: 'Create harmony between work and personal life, manage stress effectively, and cultivate sustainable habits for long-term wellbeing and happiness.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Coaching Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Personalized coaching programs tailored to your unique needs and aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
