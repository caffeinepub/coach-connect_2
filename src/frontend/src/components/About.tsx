import { CheckCircle2 } from 'lucide-react';

const approaches = [
  'Evidence-based coaching methodologies',
  'Personalized action plans tailored to you',
  'Supportive and non-judgmental environment',
  'Focus on sustainable, long-term results',
  'Regular progress tracking and accountability',
  'Flexible scheduling to fit your lifestyle',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/assets/generated/growth-icon.dim_256x256.png"
                alt="Personal Growth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                My Coaching Approach
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that everyone has the potential to create meaningful change in their lives. My coaching philosophy centers on empowering you to discover your own answers, build on your strengths, and develop practical strategies for lasting transformation.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Through a collaborative partnership, we'll work together to identify your goals, overcome obstacles, and create actionable steps toward the life you envision. My approach combines proven coaching techniques with genuine care and support.
            </p>

            <div className="space-y-3 pt-4">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{approach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
