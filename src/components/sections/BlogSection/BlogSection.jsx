import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BlogSection.css";

function BlogSection() {
  const [showMore, setShowMore] = useState(false);

  const blogs = [
    {
      title: "How to Become a Full Stack Developer in 2026",
      description:
        "Learn the essential technologies, skills and career roadmap needed to start a successful full stack development career.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Python Full Stack Development Roadmap",
      description:
        "Explore the complete learning path from Python fundamentals to frontend, backend, databases and real-world projects.",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Java Full Stack Development Guide",
      description:
        "Understand the technologies, frameworks and practical skills required to build modern Java-based web applications.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "MERN Stack Developer Career Guide",
      description:
        "Discover how MongoDB, Express, React and Node.js work together to create powerful modern web applications.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "AI & Machine Learning for Beginners",
      description:
        "Get started with artificial intelligence and machine learning and understand the skills companies look for.",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "UI/UX Design Career Guide",
      description:
        "Learn about user experience, interface design, design tools and the skills needed to begin a UI/UX career.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Data Analytics Skills You Need",
      description:
        "Explore Excel, SQL, Python, Power BI and other important skills for starting a career in data analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "How to Prepare for Technical Interviews",
      description:
        "Improve your problem-solving, coding and interview skills with practical strategies for technical interviews.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const visibleBlogs = showMore ? blogs : blogs.slice(0, 6);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">

        <motion.div 
          className="blog-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className="blog-label">LEARN • GROW • ACHIEVE</span>

          <h2>
            Learning & Career <span>Resources</span>
          </h2>

          <p>
            Explore useful insights, career guides and learning resources
            to help you grow your skills.
          </p>
        </motion.div>

        <motion.div 
          className="blog-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence>
            {visibleBlogs.map((blog, index) => (
              <motion.article 
                className="blog-card" 
                key={blog.title + index}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                layout
              >

                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>

                <div className="blog-content">

                  <span className="blog-category">
                    CAREER & LEARNING
                  </span>

                  <h3>{blog.title}</h3>

                  <p>{blog.description}</p>

                  <button type="button">
                    READ MORE
                  </button>

                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="blog-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default BlogSection;