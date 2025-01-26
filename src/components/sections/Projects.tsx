import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Deep Fake Detection System',
    description: 'A machine learning platform for predicting whether the image is true or not using netbeans model and deep learning.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600',
    link: 'https://github.com/KunjShah95/DEEP-FAKE-DETECTION-SYSTEM',
    tags: ['Python', 'TensorFlow', 'AI', 'ML', 'Deep Learning'],
    github: 'https://github.com/KunjShah95/DEEP-FAKE-DETECTION-SYSTEM',
    demo: '#',
  },
  {
    title: 'AI POWERED FITNESS TRACKER',
    description: 'A fitness tracker app using AI and gives recommendation based on suer input.',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1600',
    tags: ['HTML', 'CSS', 'Nodejs', 'EXPRESS', 'JAVASCRIPT'],
    github: 'https://github.com/KunjShah95/AI-POWERED-FITNESS-TRACKER',
    demo: '#',
  },
  {
    title: 'SMS SPAM CLASSIFICATION USING NLP',
    description: 'A machine learning platform for predicting whether the message is spam or not.',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=1600',
    tags: ['Python', 'NLP', 'FastAPI', 'STREAMLIT'],
    github: 'https://github.com/KunjShah95/AICTE-CSR-EDUNET-MICROSOFT-AIML-INTERNSHIP-',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful projects, showcasing my expertise in
            AI/ML, blockchain, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-48 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="group-hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/button"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4 group-hover/button:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 group/button"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="group"
            asChild
          >
            <a
              href="#"
              className="flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}