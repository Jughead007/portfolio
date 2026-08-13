export const siteConfig = {
  name: "Rishikesh Mankar",
  role: "Data Scientist & AI Engineer",
  email: "hrishimankar70@gmail.com",
  linkedin: "https://linkedin.com/in/rishikesh-mankar",
  github: "https://github.com/jughead007",
  location: "Pune, MH",
  education: "M.Sc. Data Science, Fergusson College, Pune (2025)",
  currentRole: "Jr. Data Scientist at Rotten Grape Pvt Ltd.",
};

export const skills = [
  { category: "Machine Learning", items: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy"] },
  { category: "Computer Vision", items: ["OpenCV", "YOLO", "MediaPipe", "Object Detection & Tracking"] },
  { category: "LLMs & GenAI", items: ["RAG Pipelines", "Prompt Engineering", "Gemini API", "LangChain"] },
  { category: "NLP", items: ["Sentiment Analysis", "Text Classification"] },
  { category: "Engineering & Deployment", items: ["FastAPI", "Streamlit", "Jinja2", "Git", "Docker", "Kubernetes", "SQL", "MongoDB"] },
];

export const projects = [
  {
    title: "Cat Detection — YOLO",
    description: "I wanted to learn object detection by doing, so I trained a YOLO model to find cats. The dataset is small and scrappy, but the whole pipeline — data prep, training, evaluation — is real, and it taught me more than any tutorial.",
    chips: ["YOLO", "OpenCV", "Python"],
    repoUrl: "https://github.com/Jughead007/cat_detection_model",
  },
  {
    title: "RAG System — AI Intern Task",
    description: "A take-home task turned into a proper project: a small RAG pipeline that retrieves relevant chunks and answers questions with sources. It's the project that got me hooked on LLM engineering.",
    chips: ["RAG", "LLM", "Embeddings", "Python"],
    repoUrl: "https://github.com/Jughead007/AI_Intern-Task",
  },
  {
    title: "Fynd AI Feedback Dashboard",
    description: "A feedback system built for an internship assignment: FastAPI on the backend, Jinja2 templates, and Google Gemini doing the analysis. Two dashboards — one for users, one for admins — sharing one persistent data source. This is a full-stack AI product, not just a notebook.",
    chips: ["FastAPI", "Gemini API", "Jinja2", "HTML"],
    repoUrl: "https://github.com/Jughead007/Fynd_Dashboard",
  },
  {
    title: "Hand Gesture Recognition",
    description: "Real-time gesture recognition from a webcam feed. The fun part was making it feel instant — detecting and classifying gestures with barely any latency.",
    chips: ["OpenCV", "MediaPipe", "Python"],
    repoUrl: "https://github.com/Jughead007/Hand-Gesture-Recognition",
  },
  {
    title: "People Counter (CV)",
    description: "A people tracker that counts individuals moving through a scene. Object detection plus tracking, tuned for real video — the kind of system you could point at a store entrance and actually use.",
    chips: ["OpenCV", "Tracking", "Python"],
    repoUrl: "https://github.com/Jughead007/People_Counter-using-CV",
  },
  {
    title: "Sentiment Analysis — Deployed",
    description: "Sentiment analysis isn't impressive until it runs somewhere someone can click. This one is packaged in Streamlit and deployed — the whole train-to-production loop in one repo.",
    chips: ["NLP", "Streamlit", "Python"],
    repoUrl: "https://github.com/Jughead007/Deploy",
  }
];

export const moreExperiments = [
  { title: "MNIST Classifier", description: "Classic digit-classification task — CNN trained on MNIST.", url: "https://github.com/Jughead007/MNIST_Task" },
  { title: "Sentiment Prompts", description: "Prompt-engineering experiments for sentiment analysis.", url: "https://github.com/Jughead007/Prompts" },
  { title: "PolicyBazaar Scraper", description: "Web scraper that collects insurance data from PolicyBazaar.", url: "https://github.com/Jughead007/Scraper" },
];

export const experience = [
  { role: "Jr. Data Scientist", company: "Rotten Grape Pvt Ltd.", dates: "Jun 2026 - Present", description: "Developing backend systems for an AI-powered chatbot platform and building a Natural Language-to-SQL (NL2SQL) pipeline with GIS routing." },
  { role: "Data Science Intern", company: "Pivotchain Solutions", dates: "Jan 2026 - Apr 2026", description: "Built an evaluation pipeline for an ANPR system and developed REST APIs in Python using Flask and FastAPI." },
  { role: "Data Science & AI Intern", company: "Insyght Analytics", dates: "Jun 2025 - Oct 2025", description: "Built an automated car insurance quote extractor using Selenium and curl_cffi, reducing retrieval time by 83%." },
  { role: "Data Science & AI Intern", company: "Experiential ETC", dates: "Feb 2025 - Apr 2025", description: "Annotated images for YOLO object detection and built a CV-based customer footfall analytics system tracking movement via DeepSORT." },
  { role: "M.Sc. Data Science", company: "Fergusson College, Pune", dates: "2023 - 2025", description: "CGPA: 8.3" },
  { role: "B.Sc. Statistics", company: "RYK Science College, Nashik", dates: "2020 - 2023", description: "CGPA: 8.6" },
];