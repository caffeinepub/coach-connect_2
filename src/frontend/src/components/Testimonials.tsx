import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Executive',
    content: 'Working with this coach has been transformative. I gained clarity on my career path and developed the confidence to pursue leadership opportunities I never thought possible.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Entrepreneur',
    content: 'The personalized approach and genuine support helped me overcome self-doubt and build a thriving business. I now have the tools to navigate challenges with confidence.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Teacher',
    content: 'I struggled with work-life balance for years. Through coaching, I learned to set boundaries and prioritize what truly matters. My relationships and wellbeing have never been better.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/testimonial-bg.dim_800x600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real transformations from people who took the first step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/30" />
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
