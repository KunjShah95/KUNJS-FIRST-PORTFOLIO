import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Shield, Code } from 'lucide-react';

const interests = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Passionate about developing intelligent systems and deep learning models.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Focused on building secure systems and understanding security vulnerabilities.',
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Creating robust web applications with modern technologies.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate technologist with expertise in artificial intelligence,
            machine learning, and full-stack development. My work focuses on creating
            innovative solutions that bridge the gap between cutting-edge technology
            and practical applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <interest.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-primary/80 transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}