import { motion } from "framer-motion";
import "./TrainingOptions.css";

function TrainingOptions() {
  const trainings = [
    {
      icon: "🏫",
      title: "Classroom Training",
      points: [
        "Learn directly from expert trainers",
        "Hands-on practical sessions",
        "Projects and assignments",
      ],
    },
    {
      icon: "💻",
      title: "Online Training",
      points: [
        "Live interactive classes",
        "Learn from anywhere",
        "Real-time doubt support",
      ],
    },
    {
      icon: "🏢",
      title: "Corporate Training",
      points: [
        "Industry-focused training",
        "Customized learning programs",
        "Practical team training",
      ],
    },
    {
      icon: "🎓",
      title: "Internship Program",
      points: [
        "Real-world project experience",
        "Guidance from industry experts",
        "Career-focused learning",
      ],
    },
    {
      icon: "🚀",
      title: "Project Training",
      points: [
        "Work on real projects",
        "Build practical skills",
        "Project guidance and support",
      ],
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="training-options" id="trainings">
      <div className="training-container">

        <motion.div 
          className="training-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p>LEARNING OPTIONS</p>

          <h2>
            Training Options <span>For Your Career</span>
          </h2>

          <div className="training-line"></div>
        </motion.div>

        <motion.div 
          className="training-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {trainings.map((training, index) => (
            <motion.div 
              className="training-card" 
              key={index}
              variants={slideUp}
            >

              <div className="training-icon">
                {training.icon}
              </div>

              <h3>{training.title}</h3>

              <div className="training-points">
                {training.points.map((point, pointIndex) => (
                  <div className="training-point" key={pointIndex}>
                    <span>✓</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default TrainingOptions;