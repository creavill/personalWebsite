import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Phone, Linkedin, Github, MapPin, Award, GraduationCap, Briefcase, ChevronRight, ArrowRight, Download, Cloud, Code, Database, Server, Zap, User } from 'lucide-react';

const PersonalWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialSporkTech = [
    'Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'AWS Lambda',
    'MongoDB Atlas', 'AWS SQS', 'AWS S3', 'OpenAI API', 'AWS SAM', 'GitHub Actions', 'AWS Amplify'
  ];

  const wavefinderTech = ['S3', 'CloudFront', 'Route 53', 'API Gateway', 'Lambda', 'Aurora DB', 'React', 'Python'];

  const skills = {
    'Cloud & Infrastructure': [
      'AWS Lambda', 'S3', 'CloudFront', 'API Gateway', 'SQS', 'Route 53',
      'Secrets Manager', 'Amplify', 'CloudWatch', 'Docker', 'Terraform', 'AWS SAM'
    ],
    'Frontend': [
      'React.js', 'Next.js 14', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'
    ],
    'Backend': [
      'Python', 'Node.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis'
    ],
    'DevOps & AI': [
      'GitHub Actions', 'CI/CD', 'Infrastructure as Code', 'OpenAI API (Whisper, GPT-4o)'
    ]
  };

  const experience = [
    {
      title: 'AI Data Specialist',
      company: 'DataAnnotation.tech',
      period: 'March 2024 - Present',
      description: 'Training large-scale language models for improved accuracy. Remote flexibility enabled pursuit of AWS certification.',
      icon: Zap,
      color: 'indigo'
    },
    {
      title: 'Front End Developer',
      company: 'BadabingMP',
      period: '2022 - 2023',
      description: 'Built React.js web applications. Implemented CI/CD with GitHub Actions, reducing errors by 40%. Deployed to AWS S3 + CloudFront.',
      icon: Code,
      color: 'cyan'
    },
    {
      title: 'Systems Engineering Intern',
      company: 'Visa Inc.',
      period: 'Summer 2022',
      description: 'Optimized mainframe (z/OS) systems processing millions of daily transactions in mission-critical financial infrastructure.',
      icon: Server,
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f5f7] overflow-hidden">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-500 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Animated Mesh Background */}
      <div className="fixed inset-0 pointer-events-none mesh-gradient opacity-60" aria-hidden="true"></div>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-indigo-500/20 shadow-lg shadow-indigo-500/5' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] rounded-lg"
              aria-label="Go to top of page"
            >
              <span className="text-indigo-400">CONNER</span>
              <span className="text-cyan-400 ml-2">REAVILL</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" role="menubar">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] rounded px-2 py-1"
                  role="menuitem"
                >
                  {label}
                </button>
              ))}
              <a
                href="/Conner_Reavill_Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 transition-all duration-300"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-400 hover:text-indigo-400 p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden glass border-t border-indigo-500/20" role="menu">
            <div className="px-4 py-4 space-y-2">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-3 text-zinc-300 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all duration-300"
                >
                  {label}
                </button>
              ))}
              <a
                href="/Conner_Reavill_Resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-3 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all duration-300"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main id="main-content">
      {/* Hero Section */}
      <section id="hero" aria-labelledby="hero-title" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium">
                  Available for Remote Opportunities
                </span>
              </div>

              <h1 id="hero-title" className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="block text-white">CONNER</span>
                <span className="block gradient-text-indigo-cyan">REAVILL</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 mb-4 font-light">
                Full-Stack Developer & Cloud Architect
              </p>

              <p className="text-lg text-zinc-500 mb-8 max-w-xl mx-auto lg:mx-0">
                Building scalable applications with React, AWS, and serverless architecture
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                <span className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">
                  <Award size={16} />
                  AWS Certified
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 text-sm">
                  <GraduationCap size={16} />
                  Cal Poly SLO
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-400 text-sm">
                  <MapPin size={16} />
                  San Diego, CA
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-indigo-400 font-medium rounded-lg transition-all duration-300"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-cyan-500/30 to-indigo-500/30 rounded-3xl blur-xl animate-pulse-glow"></div>
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-indigo-500/30">
                  <img
                    src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/headshot.webp"
                    alt="Conner Reavill"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <ChevronRight size={24} className="text-zinc-500 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" aria-labelledby="about-title" className={`py-24 px-4 sm:px-6 lg:px-8 ${visibleSections.has('about') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4">
              About Me
            </span>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold gradient-text-indigo-cyan">
              Who I Am
            </h2>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-[#12121a] border border-zinc-800 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-200 mb-2">The Short Version</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    I'm a full-stack developer who loves turning complex problems into elegant, scalable solutions.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  After graduating from Cal Poly San Luis Obispo with a BS in Software Engineering, I dove headfirst into the world of cloud architecture and AI-powered applications. My journey has taken me from optimizing mainframe systems at <span className="text-cyan-400 font-medium">Visa</span> to building production React applications and training large language models.
                </p>
                <p>
                  I'm particularly passionate about <span className="text-indigo-400 font-medium">serverless architecture</span> and finding ways to build powerful applications that don't break the bank. My flagship project, Social Spork, processes hundreds of recipes monthly on a ~$75 AWS budget by leveraging event-driven design and smart service selection.
                </p>
                <p>
                  When I'm not coding, you'll find me chasing waves along the San Diego coastline — which actually inspired my ML-powered surf forecasting project, Wave-Finder.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">What I Bring to Teams</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    End-to-end project ownership
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Cost-conscious architecture decisions
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Strong async communication
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Rapid prototyping to production
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Social Spork */}
      <section id="projects" className={`py-24 px-4 sm:px-6 lg:px-8 ${visibleSections.has('projects') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium uppercase tracking-wider mb-4">
              Featured Project
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-orange">Social Spork</span>
            </h2>
            <p className="text-xl text-zinc-400 mt-4">AI-Powered Recipe Platform</p>
          </div>

          {/* Social Spork Hero Card */}
          <div className="relative mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-[#12121a] border border-orange-500/30 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                    Converting viral TikTok & Instagram cooking videos into searchable, SEO-optimized recipes with Schema.org rich results. A full-stack serverless application handling video transcription, AI-powered recipe extraction, and instant publishing.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                      <div className="text-3xl font-bold text-orange-400">600+</div>
                      <div className="text-sm text-zinc-500">Recipes</div>
                    </div>
                    <div className="text-center p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                      <div className="text-3xl font-bold text-orange-400">~$75</div>
                      <div className="text-sm text-zinc-500">Monthly Cost</div>
                    </div>
                    <div className="text-center p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                      <div className="text-3xl font-bold text-orange-400">100%</div>
                      <div className="text-sm text-zinc-500">Free to Use</div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-zinc-400">
                      <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      <span>OpenAI Whisper API for video transcription</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-400">
                      <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      <span>GPT-4o-mini for structured recipe extraction</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-400">
                      <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      <span>Event-driven serverless architecture (Lambda + SQS)</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-400">
                      <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      <span>Schema.org JSON-LD for Google rich results</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-400">
                      <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      <span>Full CI/CD: GitHub → AWS Amplify auto-deploy</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-400">
                      <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                      <span>Core Web Vitals optimized (&lt;2s page load)</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://social-spork.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                    >
                      Visit Site
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Tech Stack Visual */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-orange-500/5 to-transparent border-t lg:border-t-0 lg:border-l border-orange-500/20">
                  <h3 className="text-lg font-semibold text-zinc-300 mb-6">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {socialSporkTech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge px-3 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Architecture Highlights */}
                  <div className="mt-8 pt-8 border-t border-orange-500/20">
                    <h3 className="text-lg font-semibold text-zinc-300 mb-4">Architecture Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <Cloud className="text-orange-400" size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-300">Serverless First</div>
                          <div className="text-xs text-zinc-500">AWS Lambda + SQS for event-driven processing</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <Database className="text-orange-400" size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-300">MongoDB Atlas</div>
                          <div className="text-xs text-zinc-500">Flexible document storage for recipes</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <Zap className="text-orange-400" size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-300">AI Pipeline</div>
                          <div className="text-xs text-zinc-500">Whisper + GPT-4o for intelligent extraction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-zinc-300">More Projects</h3>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wave-Finder */}
            <div className="project-card group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#12121a] border border-zinc-800 group-hover:border-cyan-500/30 rounded-2xl overflow-hidden transition-all duration-500">
                {/* Architecture Image */}
                <div className="p-4 bg-gradient-to-b from-cyan-500/5 to-transparent">
                  <img
                    src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/wavefinder-architecture.png"
                    alt="Wave-Finder AWS Architecture"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-cyan-400">Wave-Finder</h3>
                    <a
                      href="https://thewavefinder.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-zinc-400 mb-6">
                    ML-powered surf forecasting platform built during my world travels. Combines custom ML models with NOAA APIs for accurate surf predictions.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {wavefinderTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hammy the Hire Tracker */}
            <div className="project-card group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#12121a] border border-zinc-800 group-hover:border-indigo-500/30 rounded-2xl overflow-hidden transition-all duration-500 h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-indigo-400">Hammy the Hire Tracker</h3>
                    <Briefcase className="text-indigo-400" size={24} />
                  </div>

                  <p className="text-zinc-400 mb-6 flex-grow">
                    AI-powered job search assistant featuring a Chrome extension and web dashboard. Uses Claude AI for intelligent job analysis and application tracking.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-zinc-500 text-sm">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                      <span>Chrome extension for job capture</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-500 text-sm">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                      <span>Claude AI for job analysis</span>
                    </div>
                    <div className="flex items-start gap-3 text-zinc-500 text-sm">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                      <span>Web dashboard for tracking</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'Chrome Extension', 'Claude AI', 'Node.js', 'PostgreSQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-indigo-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 px-4 sm:px-6 lg:px-8 ${visibleSections.has('experience') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-indigo-cyan">Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block timeline-line"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => {
                const Icon = exp.icon;
                const colorClasses = {
                  indigo: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400',
                  cyan: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
                  orange: 'bg-orange-500/20 border-orange-500/30 text-orange-400'
                };
                return (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0a0a0f] z-10"></div>

                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="bg-[#12121a] border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[exp.color]}`}>
                            <Icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-zinc-200">{exp.title}</h3>
                            <p className="text-sm text-zinc-500">{exp.company}</p>
                          </div>
                        </div>
                        <p className="text-zinc-400 text-sm mb-3">{exp.description}</p>
                        <span className="text-xs text-zinc-600">{exp.period}</span>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}

              {/* Education */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0a0a0f] z-10"></div>
                <div className="w-full md:w-5/12 md:text-right">
                  <div className="bg-[#12121a] border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 md:flex-row-reverse mb-4">
                      <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                        <GraduationCap className="text-cyan-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-200">BS Software Engineering</h3>
                        <p className="text-sm text-zinc-500">Cal Poly San Luis Obispo</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-3">Comprehensive software engineering curriculum with focus on systems design and cloud architecture.</p>
                    <span className="text-xs text-zinc-600">Graduated May 2024</span>
                  </div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>

              {/* Certification */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-[#0a0a0f] z-10"></div>
                <div className="w-full md:w-5/12 md:text-left">
                  <div className="bg-[#12121a] border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-lg flex items-center justify-center">
                        <Award className="text-orange-400" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-200">AWS Solutions Architect</h3>
                        <p className="text-sm text-zinc-500">Associate Certification</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-3">Certified expertise in designing distributed systems, cost optimization, and AWS best practices.</p>
                    <span className="text-xs text-zinc-600">November 2024</span>
                  </div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-4 sm:px-6 lg:px-8 ${visibleSections.has('skills') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-indigo-cyan">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => {
              const colors = [
                { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', badge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' },
                { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
                { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', badge: 'bg-orange-500/10 border-orange-500/20 text-orange-300' },
                { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300' }
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={category}
                  className={`bg-[#12121a] border border-zinc-800 rounded-2xl p-6 hover:${color.border} transition-all duration-300`}
                >
                  <h3 className={`font-bold ${color.text} mb-4`}>{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className={`tech-badge px-2 py-1 ${color.badge} border rounded text-xs font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-4 sm:px-6 lg:px-8 ${visibleSections.has('contact') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-indigo-cyan mb-6">Let's Build Something</h2>
          <p className="text-xl text-zinc-400 mb-12">Available for remote opportunities</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a
              href="mailto:reavill.conner@gmail.com"
              className="group flex flex-col items-center gap-3 p-6 bg-[#12121a] border border-zinc-800 rounded-2xl hover:border-indigo-500/30 transition-all duration-300"
            >
              <Mail className="text-indigo-400 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-sm text-zinc-400">reavill.conner@gmail.com</span>
            </a>

            <a
              href="tel:+19313032921"
              className="group flex flex-col items-center gap-3 p-6 bg-[#12121a] border border-zinc-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-sm text-zinc-400">(931) 303-2921</span>
            </a>

            <a
              href="https://github.com/creavill"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-[#12121a] border border-zinc-800 rounded-2xl hover:border-orange-500/30 transition-all duration-300"
            >
              <Github className="text-orange-400 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-sm text-zinc-400">github.com/creavill</span>
            </a>

            <a
              href="https://linkedin.com/in/creavill"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-[#12121a] border border-zinc-800 rounded-2xl hover:border-indigo-500/30 transition-all duration-300"
            >
              <Linkedin className="text-indigo-400 group-hover:scale-110 transition-transform" size={28} />
              <span className="text-sm text-zinc-400">linkedin.com/in/creavill</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Conner_Reavill_Resume.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-zinc-500">
            <MapPin size={16} />
            <span>San Diego, CA</span>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800" role="contentinfo">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-zinc-600">
            © 2025 Conner Reavill • Built with React • Deployed on AWS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
