import { Users, Zap, Lock, History, MessageSquare, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "See changes instantly as your team types. Colored cursors show who's editing what."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimistic updates. No lag, no waiting—just seamless editing."
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "End-to-end encryption, granular permissions, and enterprise-grade security."
  },
  {
    icon: History,
    title: "Version History",
    description: "Travel back in time. Every change is saved, so you can restore any version."
  },
  {
    icon: MessageSquare,
    title: "Inline Comments",
    description: "Discuss changes right where they happen. Resolve threads without leaving the doc."
  },
  {
    icon: Globe,
    title: "Work Anywhere",
    description: "Access your documents from any device. Offline support keeps you productive."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to collaborate
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features that make document collaboration effortless and enjoyable.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="document-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
