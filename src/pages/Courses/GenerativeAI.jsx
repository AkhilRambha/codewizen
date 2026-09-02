import React from 'react';
import CourseHero from '../../components/common/CourseHero/CourseHero';
import BatchDetails from '../../components/sections/BatchDetails/BatchDetails';
import CourseFeatures from '../../components/sections/CourseFeatures/CourseFeatures';
import SkillsMastered from '../../components/sections/SkillsMastered/SkillsMastered';
import CourseCurriculum from '../../components/sections/CourseCurriculum/CourseCurriculum';
import WhyChooseUsCourse from '../../components/sections/WhyChooseUsCourse/WhyChooseUsCourse';
import Certification from '../../components/sections/Certification/Certification';
import ReadyToStart from '../../components/sections/ReadyToStart/ReadyToStart';

const GenerativeAI = () => {

  const skillsData = [
    {
      title: "Foundations of AI",
      skills: ["Machine Learning Basics", "Deep Learning Concepts", "Neural Networks", "NLP Fundamentals"]
    },
    {
      title: "LLMs & Architecture",
      skills: ["Transformer Architecture", "Attention Mechanism", "GPT Models", "Llama 3", "BERT"]
    },
    {
      title: "Prompt Engineering",
      skills: ["Zero-shot Learning", "Few-shot Prompting", "Chain-of-Thought", "Prompt Optimization"]
    },
    {
      title: "Advanced Generative AI",
      skills: ["RAG (Retrieval-Augmented Generation)", "Vector Databases", "LangChain", "Agentic AI"]
    },
    {
      title: "Fine-tuning & Evaluation",
      skills: ["LoRA", "QLoRA", "Model Fine-Tuning", "HuggingFace", "BLEU & ROUGE"]
    },
    {
      title: "Deployment & MLOps",
      skills: ["Model Deployment", "Docker", "AWS/Azure ML", "API Integration", "FastAPI"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Introduction to AI & Machine Learning",
      topics: ["History and Evolution of AI", "Supervised vs Unsupervised Learning", "Neural Network Basics", "Introduction to NLP"]
    },
    {
      title: "Module 2: Deep Learning & Transformers",
      topics: ["RNNs and LSTMs", "The Attention Mechanism", "Transformer Architecture deep-dive", "Overview of GPT, BERT, and T5"]
    },
    {
      title: "Module 3: Advanced Prompt Engineering",
      topics: ["Designing effective prompts", "Few-shot & Zero-shot learning", "Chain of thought prompting", "Mitigating hallucinations"]
    },
    {
      title: "Module 4: Retrieval-Augmented Generation (RAG)",
      topics: ["Vector Embeddings & Semantic Search", "Working with Pinecone / Milvus", "LangChain fundamentals", "Building a custom Q&A Chatbot"]
    },
    {
      title: "Module 5: Agentic AI & Autonomous Agents",
      topics: ["Introduction to AI Agents", "Building agents with LangGraph", "Tool use and API calling", "Multi-agent systems"]
    },
    {
      title: "Module 6: Fine-tuning Large Language Models",
      topics: ["Parameter-Efficient Fine-Tuning (PEFT)", "LoRA and QLoRA", "Fine-tuning Llama-3 on custom data", "Evaluating model performance"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Generative AI & Agentic AI" 
        subtitleList={[
          "Prompt Engineering",
          "LangChain",
          "RAG Systems",
          "LLM Fine-tuning",
          "Agentic AI",
          "HuggingFace"
        ]}
        description="Master the future of AI. Build intelligent agents, develop custom RAG systems, and fine-tune Large Language Models from scratch."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Generative AI" }
        ]}
      />
      
      <BatchDetails 
        nextBatch="Upcoming Week"
        sessionTime="08:00 AM TO 10:00 AM"
        duration="3 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification />

      <ReadyToStart />
    </>
  );
};

export default GenerativeAI;
