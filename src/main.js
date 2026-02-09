import './style.css'

// Portfolio data
const portfolioData = {
  name: "Parth Shah",
  title: "Software Engineer",
  bio: "Passionate about Systems Programming, Data Structures & Algorithms, AI, and Language Design. Building innovative solutions with cutting-edge technology.",
  image: "./public/image/image.png",
  skills: [
    "Systems Programming",
    "Data Structures & Algorithms", 
    "Artificial Intelligence",
    "Language Design",
    "JavaScript/TypeScript",
    "Python",
    "Rust",
    "Go"
  ],
  projects: [
    {
      title: "AI Language Model",
      description: "Built a custom language model for natural language processing tasks",
      tech: ["Python", "TensorFlow", "NLP"],
      link: "#"
    },
    {
      title: "Systems Programming Framework",
      description: "Developed a high-performance framework for system-level applications",
      tech: ["Rust", "C++", "Assembly"],
      link: "#"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool for visualizing complex algorithms and data structures",
      tech: ["JavaScript", "D3.js", "Canvas"],
      link: "#"
    }
  ],
  contact: {
    email: "parth@example.com",
    github: "https://github.com/parthshah",
    linkedin: "https://linkedin.com/in/parthshah",
    twitter: "https://twitter.com/parthshah"
  }
};

// Create the portfolio HTML
function createPortfolio() {
  const app = document.getElementById('root');
  
  app.innerHTML = `
    <div class="portfolio">
      <!-- Navigation -->
      <nav class="nav">
        <div class="nav-container">
          <h1 class="nav-logo">${portfolioData.name}</h1>
          <ul class="nav-menu">
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero" id="about">
        <div class="hero-container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">Hello, I'm <span class="highlight">${portfolioData.name}</span></h1>
              <h2 class="hero-subtitle">${portfolioData.title}</h2>
              <p class="hero-description">${portfolioData.bio}</p>
              <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">View Projects</a>
                <a href="#contact" class="btn btn-secondary">Get In Touch</a>
              </div>
            </div>
            <div class="hero-image">
              <img src="${portfolioData.image}" alt="${portfolioData.name}" class="profile-image" />
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills" id="skills">
        <div class="container">
          <h2 class="section-title">Skills & Expertise</h2>
          <div class="skills-grid">
            ${portfolioData.skills.map(skill => `
              <div class="skill-card">
                <h3>${skill}</h3>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="projects" id="projects">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid">
            ${portfolioData.projects.map(project => `
              <div class="project-card">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                  ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Project →</a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact" id="contact">
        <div class="container">
          <h2 class="section-title">Let's Connect</h2>
          <div class="contact-content">
            <p class="contact-description">
              I'm always interested in discussing new opportunities and innovative projects.
            </p>
            <div class="contact-links">
              <a href="mailto:${portfolioData.contact.email}" class="contact-link">
                <span class="contact-icon">✉</span>
                Email
              </a>
              <a href="${portfolioData.contact.github}" class="contact-link" target="_blank">
                <span class="contact-icon">⚡</span>
                GitHub
              </a>
              <a href="${portfolioData.contact.linkedin}" class="contact-link" target="_blank">
                <span class="contact-icon">💼</span>
                LinkedIn
              </a>
              <a href="${portfolioData.contact.twitter}" class="contact-link" target="_blank">
                <span class="contact-icon">🐦</span>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 ${portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `;

  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add image error handling
  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('error', function() {
      // Fallback to a placeholder if image fails to load
      this.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3';
      this.alt = 'Profile placeholder';
    });
  }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', createPortfolio);