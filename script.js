document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = ["Specializing in IT Support", "Passionate about Cyber Security", "Focused on Cloud"];
    let textArrayIndex = 0;
    let charIndex = 0;
    let typingDelay = 100; // Time delay between each character being typed
    let erasingDelay = 50; // Time delay between each character being erased
    let newTextDelay = 2000; // Time delay before starting to type new text
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 1000);
      }
    }
  
    // Start the typing effect
    setTimeout(type, newTextDelay + 250);
  
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navRight = document.querySelector('.nav-right');
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navRight.classList.toggle('active');
    });
  
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-right a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navRight.classList.remove('active');
      });
    });
  
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Scroll reveal animation
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
  
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Account for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
    });
  });