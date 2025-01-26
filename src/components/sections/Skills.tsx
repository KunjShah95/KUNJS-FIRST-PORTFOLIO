import { motion } from 'framer-motion';
import { SpinningCube } from '@/components/3d/SpinningCube';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'Python', level: 95, color: 'from-blue-500 to-blue-700' },
  { name: 'Machine Learning', level: 90, color: 'from-green-500 to-green-700' },
  { name: 'Deep Learning', level: 85, color: 'from-purple-500 to-purple-700' },
  { name: 'NLP', level: 85, color: 'from-yellow-500 to-yellow-700' },
  { name: 'Web Development', level: 40, color: 'from-red-500 to-red-700' },
  { name: 'Cybersecurity', level: 85, color: 'from-pink-500 to-pink-700' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center lg:text-left mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <p className="text-muted-foreground">
                A comprehensive overview of my technical expertise and proficiency levels
                in various technologies and domains.
              </p>
            </motion.div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:flex-1 flex justify-center items-center"
          >
            <div className="relative group">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <SpinningCube />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-background/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}