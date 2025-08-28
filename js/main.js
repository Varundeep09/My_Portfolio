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
    portfolio: {
      title: "My Portfolio",
      category: "Front-End Website",
      description: "A responsive and interactive personal portfolio website built to showcase my skills, projects, resume, and contact information. It serves as a digital identity, allowing visitors and recruiters to learn about my background, technical expertise, and achievements in a professional and engaging format. The site includes sections like About Me, Projects, Skills, Resume Download, and a Contact Form. The design emphasizes simplicity, clarity, and performance across all devices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS Animation", "Typed.js"],
      github: "https://github.com/Varundeep09/My_Portfolio",
      live: "https://varundeep09.github.io/My_Portfolio/",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    techpulse: {
      title: "TechPulse E-Commerce Website",
      category: "Web Application",
      description: "TechPulse is a modern e-commerce platform designed for tech enthusiasts, showcasing the latest technology products. Developed using HTML5, Bootstrap, and vanilla JavaScript, it offers a seamless, responsive user experience with features like real-time shopping cart updates, secure user authentication, dynamic product filtering, detailed product pages with specifications and reviews, and a smooth, secure checkout process.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "MySQL", "Java", "JSP", "Servlets"],
      github: "https://github.com/Varundeep09/Tech-Pulse-E-Commerce-",
      live: "https://varundeep09.github.io/Tech-Pulse-E-Commerce-/",
      image: "https://shyamfuture.com/wp-content/uploads/2022/11/ecommerce.jpg"
    },
    tuneinlocal: {
      title: "Tune-In-Local",
      category: "Web Application",
      description: "Tune In Local is a web application designed to connect independent music artists, enabling them to collaborate, form groups, and find opportunities for gigs or jam sessions. The platform supports artist registration with profile details and experience, group formation for collaborations, and a public feed for posting or joining events. Whether solo performers or existing bands, users can reach out to others, create or join music groups, and respond to gig invitations. The app encourages community-driven collaboration and event participation in the local music scene.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Java", "JSP", "Servlets", "MySQL", "Apache Tomcat"],
      github: "https://github.com/Varundeep09/Tune-In-Local",
      live: "#",
      image: "https://t3.ftcdn.net/jpg/14/56/08/04/360_F_1456080441_x8INMmgRBGvJ9u7gml2xhSoSmZv5xfot.jpg"
    },
    flightreservation: {
      title: "Flight Reservation System",
      category: "Web Application",
      description: "The Flight Reservation System is a web-based platform that enables users to search for available flights, make reservations, and manage their bookings efficiently. The application simulates a real-world airline ticketing system with a user-friendly interface and role-based access. Users can book flights based on their preferences (source, destination, date) and manage their tickets with options to cancel or update bookings. The backend handles session management, data validation, and communication with the MySQL database.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Java", "JSP", "Servlets", "MySQL", "Apache Tomcat", "Eclipse IDE"],
      github: "https://github.com/Varundeep09/Flight_Reservation",
      live: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuy1yEbiSNtABuhIv0TW3Zh3LYMjxA3KjFQ&s"
    },
    campuscircle: {
      title: "Campus Circle",
      category: "College Social & Professional Networking Platform",
      description: "Campus Circle is a Django-based social networking web application designed to connect students, alumni, and teachers within a college ecosystem. It functions as a mini LinkedIn for the campus, enabling professional networking, knowledge sharing, and event collaboration. The platform supports role-based features such as resume uploads for students, mentorship opportunities, job postings for alumni, and academic notices for teachers. Key features include user authentication with role-based access, post and feed system with comments and likes, messaging and connection requests, resume upload & mentorship system for students, job postings & success stories for alumni, academic resources and notices for teachers, and event management and participation tracking.",
      technologies: ["Django", "HTML5", "CSS3", "Bootstrap", "JavaScript", "SQLite/MySQL", "Django ORM", "REST APIs"],
      github: "https://github.com/Varundeep09/Campus-Circle",
      live: "#",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    socialshield: {
      title: "Social Shield",
      category: "AI-Powered Digital Propaganda Detection Toolkit",
      description: "Social Shield is an AI-driven system designed to identify and combat misinformation, hate speech, and coordinated propaganda campaigns on social media. It analyzes text data, detects bot-driven activity, monitors trending hashtags, and generates risk assessment reports to safeguard digital democracy. The project was developed during a hackathon with a focus on real-world problem-solving using AI/ML and social media analytics. Key features include file upload or live social media data analysis, bot detection and coordination network mapping, hate speech and propaganda detection using NLP, and visualization dashboard for insights and risk levels.",
      technologies: ["Python", "NLTK", "spaCy", "Scikit-learn", "TensorFlow/PyTorch", "Social Media APIs", "Flask/Django", "Matplotlib", "Plotly"],
      github: "https://github.com/Varundeep09/Social-Shield",
      live: "#",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    expensetracker: {
      title: "Expense Tracker",
      category: "Personal Finance Management System",
      description: "The Expense Tracker is a simple yet powerful application to help individuals manage their daily expenses and income. It allows users to record transactions, categorize them (food, travel, bills, etc.), and generate reports for better financial planning. The system provides insights into spending habits and ensures users can monitor their budgets effectively. Key features include add, update, and delete expenses/income, categorization of expenses (e.g., Food, Travel, Shopping), monthly/weekly reports and expense summaries, visual charts for spending analysis, and user authentication for secure data access.",
      technologies: ["Python", "Flask", "SQLite/MySQL", "HTML5", "CSS3", "Bootstrap", "Chart.js", "Matplotlib"],
      github: "https://github.com/Varundeep09/Expense-Tracker",
      live: "#",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
      document.querySelector('.project-modal-title').textContent = project.title;
      document.querySelector('.project-modal-category').textContent = project.category;
      document.querySelector('.project-modal-description').textContent = project.description;
      
      // Update technologies list
      const techList = document.querySelector('.project-modal-technologies');
      techList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
      
      // Update links
      document.querySelector('.project-modal-github').href = project.github;
      document.querySelector('.project-modal-live').href = project.live;

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

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add your form submission logic here
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
});