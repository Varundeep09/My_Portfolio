document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Initialize Typed.js
  if (document.querySelector('.typed')) {
    let typed_strings = document.querySelector('.typed').getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Project details data
  const projectsData = {
    churnprediction: {
      title: "Churn Prediction + AI Explanation",
      category: "Machine Learning & Decision Intelligence",
      description: "Integrated an LLM-based explanation layer into a customer churn prediction workflow to turn model outputs and relevant customer features into concise, plain-language explanations. Generated explanations are kept separate from the classifier's numerical prediction.",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "FastAPI", "SQLite", "LLM Integration"],
      github: "https://github.com/Varundeep09/Churn-Prediction-AI-Explanation",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    campuscircle: {
      title: "Campus Circle — Academic Networking Platform",
      category: "Django Web Application",
      description: "Developed a Django application for students, alumni, and faculty, featuring authentication, role-based access control, and MySQL-backed models for posts, mentorship requests, and events.",
      technologies: ["Python", "Django", "MySQL", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
      github: "https://github.com/Varundeep09/Campus_Circle",
      live: "#",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    flightbooking: {
      title: "Flight Booking Simulator",
      category: "Python & FastAPI Application",
      description: "Developed a Python and FastAPI flight-booking simulator featuring dynamic pricing, seat-inventory management, and relational database concepts.",
      technologies: ["Python", "FastAPI", "SQL", "Database Concepts", "REST APIs"],
      github: "https://github.com/Varundeep09/Flight-Booking-System",
      live: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuy1yEbiSNtABuhIv0TW3Zh3LYMjxA3KjFQ&s"
    },
    expensetracker: {
      title: "Expense Tracker",
      category: "Personal Finance Web Application",
      description: "The Expense Tracker is a practical application to help individuals manage their daily expenses and income. It allows users to record transactions, categorize them, and monitor budgets effectively. Built with Python, Flask, HTML, CSS, JavaScript, and PostgreSQL.",
      technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "PostgreSQL"],
      github: "https://github.com/Varundeep09/Expense-Tracker-Flask",
      live: "https://expense-tracker-web-pbyw.onrender.com/",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    tuneinlocal: {
      title: "Tune-In-Local",
      category: "Java Web Application",
      description: "Tune In Local is a web application designed to connect independent music artists, enabling them to collaborate, form groups, and find opportunities for gigs or jam sessions. The platform supports artist registration with profile details and experience, group formation for collaborations, and a public feed for posting or joining events.",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "Apache Tomcat", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Varundeep09/Tune-In-Local",
      live: "#",
      image: "https://t3.ftcdn.net/jpg/14/56/08/04/360_F_1456080441_x8INMmgRBGvJ9u7gml2xhSoSmZv5xfot.jpg"
    },
    portfolio: {
      title: "My Portfolio",
      category: "Front-End Website",
      description: "A responsive and interactive personal portfolio website built to showcase my skills, projects, resume, and contact information. It serves as a digital identity, allowing visitors and recruiters to learn about my background, technical expertise, and achievements in a professional and engaging format.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS Animation", "Typed.js"],
      github: "https://github.com/Varundeep09/My_Portfolio",
      live: "https://varundeep09.github.io/My_Portfolio/",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  };

  // Initialize project modal functionality
  const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
  
  // Add click event listeners to project cards
  document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', (e) => {
      const projectCard = e.target.closest('.project-card');
      const projectId = projectCard.dataset.project;
      const project = projectsData[projectId];

      // Update modal content
      document.querySelector('.project-modal-image').src = project.image;
      document.querySelector('.project-modal-image').alt = project.title + " preview";
      document.querySelector('.project-modal-title').textContent = project.title;
      document.querySelector('.project-modal-category').textContent = project.category;
      document.querySelector('.project-modal-description').textContent = project.description;
      
      // Update technologies list
      const techList = document.querySelector('.project-modal-technologies');
      techList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
      
      // Update links
      document.querySelector('.project-modal-github').href = project.github;
      const liveBtn = document.querySelector('.project-modal-live');
      if (project.live && project.live !== '#' && project.live.trim() !== '') {
        liveBtn.href = project.live;
        liveBtn.style.display = 'inline-block';
      } else {
        liveBtn.href = '#';
        liveBtn.style.display = 'none';
      }

      // Show modal
      projectModal.show();
    });
  });

  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Skills animation
  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    const progressBars = skillsSection.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute('style').split(':')[1];
          });
        }
      });
    });
    observer.observe(skillsSection);
  }
});