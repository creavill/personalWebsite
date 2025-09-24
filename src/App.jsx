import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Code, Waves, MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Sunset, Leaf } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About Me', icon: MapPin },
    { id: 'professional', label: 'Solutions Architecture', icon: Cloud },
    { id: 'surfboards', label: 'Board Shaping', icon: Waves },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Animated background - beach sunset vibes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-amber-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-teal-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-slate-600/15 to-gray-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-amber-700/15 to-orange-700/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Bold navigation with sunset colors */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-emerald-800/30' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-black tracking-wider">
              <span className="text-amber-400">CONNER</span>
              <span className="text-emerald-400 ml-2">REAVILL</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeSection === id 
                      ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30' 
                      : 'text-stone-300 hover:text-emerald-400 hover:bg-emerald-900/20'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-amber-400 hover:text-emerald-400 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-emerald-700/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeSection === id 
                      ? 'text-amber-400 bg-amber-400/10' 
                      : 'text-stone-300 hover:text-emerald-400 hover:bg-emerald-900/20'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Bold sunset vibes */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative z-10">
            <div className="w-40 h-40 mx-auto mb-12 rounded-3xl overflow-hidden border-4 border-amber-400/30 shadow-2xl shadow-amber-400/20 bg-gradient-to-br from-gray-800 to-emerald-900/50">
              <img 
                src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/headshot.webp" 
                alt="Conner Reavill professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex justify-center items-center mb-8">
              <Sunset className="text-amber-500 mr-4" size={48} />
              <Leaf className="text-emerald-400" size={48} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-tight">
              <span className="block text-stone-200">SOLUTIONS</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">
                ARCHITECT
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-stone-300 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Cloud systems engineer with a passion for 
              <span className="text-amber-400 font-semibold"> craftsmanship </span>
              and 
              <span className="text-emerald-400 font-semibold"> global perspective</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl text-white font-bold text-sm uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-emerald-500/25">
                <Cloud size={20} />
                <span>AWS Certified</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25">
                🌍 World Traveler
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-teal-500/25">
                🏄 Board Shaper
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">
              ABOUT ME
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3 space-y-8">
              <div className="p-8 bg-gradient-to-br from-gray-800/70 to-slate-900/70 rounded-3xl border border-emerald-800/30 backdrop-blur-sm shadow-2xl">
                <p className="text-lg text-stone-300 leading-relaxed mb-6">
                  After graduating from Cal Poly with a degree in Software Engineering, I took a transformative gap year to travel around the world. From surfing perfect barrels in Indonesia to exploring ancient temples in Japan, living in Australia for a year, and island-hopping through the Philippines, this journey shaped my perspective on problem-solving and adaptability.
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  During my travels, I built Wave-Finder – a surf forecasting platform using AWS and web scraping techniques. Working from beachside warungs in Bali and co-working spaces in Melbourne taught me to code efficiently and think creatively about cloud architecture constraints.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-3xl border border-teal-700/30 backdrop-blur-sm shadow-2xl">
                <p className="text-lg text-stone-300 leading-relaxed mb-6">
                  Now based in San Diego, I'm pursuing my passion for cloud architecture while maintaining my connection to the ocean through surfboard shaping. I believe the same principles that create a perfect wave ride apply to elegant system design: balance, flow, and understanding the forces at play.
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Currently working towards my AWS Solutions Architect certification and helping train the next generation of AI systems, I'm excited to bring creative problem-solving to cloud infrastructure challenges.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div className="p-6 bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 rounded-3xl border border-emerald-700/40 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl mr-3"></div>
                  <h3 className="text-xl font-black text-emerald-300 uppercase tracking-wider">Gap Year Journey</h3>
                </div>
                <p className="text-stone-300 leading-relaxed font-medium">15 months across Japan, Indonesia, Australia, and the Philippines - gaining global perspective and cultural adaptability</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-amber-800/50 to-orange-800/50 rounded-3xl border border-amber-700/40 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-400 rounded-xl mr-3"></div>
                  <h3 className="text-xl font-black text-amber-300 uppercase tracking-wider">Current Focus</h3>
                </div>
                <p className="text-stone-300 leading-relaxed font-medium">AWS Solutions Architect certification (October 2025) and advanced cloud architecture patterns</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/40 to-teal-600/40 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-emerald-900/30 rounded-3xl overflow-hidden border border-emerald-700/30">
                    <img 
                      src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/travel/japan.webp" 
                      alt="Traditional temple in Japan"
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <div className="flex items-center">
                        <Leaf className="text-emerald-400 mr-2" size={16} />
                        <p className="text-xs text-stone-300 font-bold uppercase tracking-wide">Temples & Culture in Japan</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/40 to-orange-600/40 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-amber-900/30 rounded-3xl overflow-hidden border border-amber-700/30">
                    <img 
                      src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/travel/indonesia.webp" 
                      alt="Surfing waves in Indonesia"
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3">
                      <div className="flex items-center">
                        <Sunset className="text-amber-400 mr-2" size={16} />
                        <p className="text-xs text-stone-300 font-bold uppercase tracking-wide">Perfect Waves in Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section id="professional" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400">
              SOLUTIONS ARCHITECTURE
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Current Role */}
              <div className="p-8 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-3xl border border-emerald-600/30 shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-emerald-400 uppercase tracking-wider">AI Data Specialist</h3>
                    <p className="text-stone-300 font-bold">DataAnnotation.tech</p>
                  </div>
                  <span className="text-sm text-stone-400 font-medium">March 2024 – Present</span>
                </div>
                <p className="text-stone-300 mb-4 leading-relaxed">Training large language models for improved accuracy and performance while leveraging remote flexibility to pursue advanced AWS cloud architecture training.</p>
              </div>

              {/* Previous Roles */}
              <div className="p-8 bg-gradient-to-br from-slate-800/40 to-gray-900/40 rounded-3xl border border-slate-400/30 shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-teal-400 uppercase tracking-wider">Front End Developer</h3>
                    <p className="text-stone-300 font-bold">BadabingMP</p>
                  </div>
                  <span className="text-sm text-stone-400 font-medium">2022 – 2023</span>
                </div>
                <p className="text-stone-300 mb-4 leading-relaxed">Built responsive React.js applications and implemented CI/CD pipelines using GitHub Actions, reducing manual errors and accelerating delivery.</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-amber-900/40 to-orange-900/40 rounded-3xl border border-amber-600/30 shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-amber-400 uppercase tracking-wider">Systems Engineering Intern</h3>
                    <p className="text-stone-300 font-bold">Visa Inc.</p>
                  </div>
                  <span className="text-sm text-stone-400 font-medium">Summer 2022</span>
                </div>
                <p className="text-stone-300 leading-relaxed">Optimized mission-critical mainframe systems processing millions of daily transactions and collaborated on high-availability financial system architecture.</p>
              </div>
            </div>

            {/* Skills Sidebar */}
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-emerald-900/60 to-teal-900/60 rounded-3xl border border-emerald-400/30 shadow-xl">
                <h3 className="font-black text-emerald-400 mb-4 uppercase tracking-wider">Cloud & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS EC2', 'S3', 'RDS', 'CloudFront', 'Docker', 'Terraform', 'CI/CD'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-teal-900/60 to-emerald-900/60 rounded-3xl border border-teal-400/30 shadow-xl">
                <h3 className="font-black text-teal-400 mb-4 uppercase tracking-wider">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Python', 'JavaScript', 'Node.js', 'PostgreSQL', 'REST APIs'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-teal-400/20 text-teal-300 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-amber-900/60 to-orange-900/60 rounded-3xl border border-amber-400/30 shadow-xl">
                <h3 className="font-black text-amber-400 mb-4 uppercase tracking-wider">ML & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'NLTK', 'Machine Learning'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-900/60 to-emerald-900/60 rounded-3xl border border-green-400/30 shadow-xl">
                <h3 className="font-black text-green-400 mb-4 uppercase tracking-wider">Certification</h3>
                <p className="text-green-300 text-sm font-bold">🎯 AWS Solutions Architect – Associate</p>
                <p className="text-stone-400 text-xs mt-1">Exam: October 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Shaping Section */}
      <section id="surfboards" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-400">
              BOARD SHAPING
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <p className="text-xl text-stone-300 mb-8 leading-relaxed font-light">
                What started as a passion for surfing naturally evolved into the art and science of board shaping. Working with foam, fiberglass, and resin, I craft custom surfboards and provide ding repair services in my spare time.
              </p>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed font-light">
                Each board is a unique engineering challenge – understanding hydrodynamics, rider preferences, and wave conditions to create the perfect tool for the water. It's a meditative process that balances technical precision with creative expression.
              </p>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed font-light">
                This hands-on craft keeps me grounded and connected to San Diego's surf community, while the problem-solving skills translate beautifully to systems architecture.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-emerald-900/60 to-teal-900/60 rounded-3xl border border-emerald-400/30 shadow-xl">
                  <div className="flex items-center mb-3">
                    <Waves className="text-emerald-400 mr-3" size={24} />
                    <h3 className="font-black text-emerald-400 text-sm uppercase tracking-wider">Custom Boards</h3>
                  </div>
                  <p className="text-stone-300 text-xs font-medium">Tailored designs for every rider</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-teal-900/60 to-emerald-900/60 rounded-3xl border border-teal-400/30 shadow-xl">
                  <div className="flex items-center mb-3">
                    <Code className="text-teal-400 mr-3" size={24} />
                    <h3 className="font-black text-teal-400 text-sm uppercase tracking-wider">Ding Repair</h3>
                  </div>
                  <p className="text-stone-300 text-xs font-medium">Professional fiberglass repair</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-amber-900/60 to-orange-900/60 rounded-3xl border border-amber-400/30 shadow-xl">
                  <div className="flex items-center mb-3">
                    <MapPin className="text-amber-400 mr-3" size={24} />
                    <h3 className="font-black text-amber-400 text-sm uppercase tracking-wider">San Diego</h3>
                  </div>
                  <p className="text-stone-300 text-xs font-medium">Local surf community service</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/40 to-teal-600/40 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-emerald-700/30 bg-gray-800">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/surfboards/board-1.webp" 
                      alt="In the shaping bay"
                      className="w-full h-full object-contain bg-gradient-to-br from-gray-900 to-emerald-900/20"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-stone-300 font-bold uppercase tracking-wider">Custom longboard taking shape</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600/40 to-emerald-600/40 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-teal-700/30 bg-gray-800">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/surfboards/board-2.webp" 
                      alt="Surfboard shaping tools and workspace"
                      className="w-full h-full object-contain bg-gradient-to-br from-gray-900 to-teal-900/20"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-stone-300 font-bold uppercase tracking-wider">A custom midlength for a client</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/40 to-orange-600/40 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-amber-700/30 bg-gray-800">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/surfboards/board-3.webp" 
                      alt="Finished surfboards lined up ready for delivery"
                      className="w-full h-full object-contain bg-gradient-to-br from-gray-900 to-amber-900/20"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-stone-300 font-bold uppercase tracking-wider">Custom 9 foot log for the central coast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">
              FEATURED PROJECTS
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Wave Finder Project */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/30 to-amber-600/30 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-emerald-900/40 to-amber-900/40 rounded-3xl border border-emerald-600/30 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-black text-emerald-400 uppercase tracking-wider">Wave-Finder</h3>
                  <a 
                    href="https://thewavefinder.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                
                <div className="mb-6 rounded-2xl overflow-hidden border border-emerald-600/30 bg-gradient-to-br from-gray-900 to-emerald-900/20">
                  <img 
                    src="https://conner-reavill-images.s3.us-east-2.amazonaws.com/wavefinder-architecture.png" 
                    alt="Wave-Finder AWS architecture diagram showing Route 53, CloudFront, S3, API Gateway, Lambda, Aurora DB, and CI/CD pipeline"
                    className="w-full h-auto object-contain p-4"
                  />
                  <div className="p-4 border-t border-emerald-600/20">
                    <p className="text-xs text-stone-300 font-bold uppercase tracking-wider text-center">Complete AWS Architecture with CI/CD Pipeline</p>
                  </div>
                </div>
                
                <p className="text-stone-300 mb-6 leading-relaxed">
                  ML-powered surf forecasting platform built during my world travels. Live at <span className="text-emerald-400 font-semibold">thewavefinder.com</span>, combining custom ML models with NOAA APIs and intelligent web scraping, deployed using enterprise-grade AWS architecture.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-stone-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                    Built while traveling: Coded from warungs in Bali and co-working spaces in Melbourne
                  </div>
                  <div className="flex items-center text-sm text-stone-400">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    Serverless backend using AWS Lambda with Aurora Serverless database
                  </div>
                  <div className="flex items-center text-sm text-stone-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                    React frontend on S3 with CloudFront CDN for global distribution
                  </div>
                  <div className="flex items-center text-sm text-stone-400">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    Automated CI/CD with GitHub Actions for zero-downtime deployments
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'AWS Lambda', 'Aurora DB', 'S3', 'CloudFront', 'Route 53', 'API Gateway', 'GitHub Actions'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-xs font-bold uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* QA Chat System */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 to-teal-600/30 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-amber-900/40 to-teal-900/40 rounded-3xl border border-amber-600/30 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-black text-amber-400 uppercase tracking-wider">Departmental QA Chat</h3>
                  <ExternalLink className="text-stone-400 hover:text-amber-400 transition-colors" size={24} />
                </div>
                <p className="text-stone-300 mb-6 leading-relaxed">
                  NLP chatbot for Cal Poly CS Department using TensorFlow and NLTK to automate student Q&A responses. Trained on departmental documentation to reduce faculty workload.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-stone-400">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    Natural language processing with NLTK
                  </div>
                  <div className="flex items-center text-sm text-stone-400">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    TensorFlow model training and deployment
                  </div>
                  <div className="flex items-center text-sm text-stone-400">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    Automated response system integration
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'NLTK', 'NLP', 'Machine Learning'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-teal-400">
              LET'S CONNECT
            </span>
          </h2>
          
          <p className="text-2xl text-stone-300 mb-16 font-light">
            Ready to discuss cloud architecture, surfboard design, or travel stories?
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a 
              href="mailto:reavill.conner@gmail.com"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/40 to-teal-600/40 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-3xl border border-emerald-400/30 shadow-xl">
                <Mail className="text-emerald-400 group-hover:scale-110 transition-transform mx-auto mb-4" size={40} />
                <h3 className="font-black text-emerald-400 mb-3 uppercase tracking-wider">Email</h3>
                <p className="text-stone-300 text-sm font-medium">reavill.conner@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:(931) 393-2921"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/40 to-orange-600/40 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-3xl border border-amber-400/30 shadow-xl">
                <Phone className="text-amber-400 group-hover:scale-110 transition-transform mx-auto mb-4" size={40} />
                <h3 className="font-black text-amber-400 mb-3 uppercase tracking-wider">Phone</h3>
                <p className="text-stone-300 text-sm font-medium">(931) 393-2921</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/creavill"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600/40 to-emerald-600/40 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-teal-900/50 to-emerald-900/50 rounded-3xl border border-teal-400/30 shadow-xl">
                <Linkedin className="text-teal-400 group-hover:scale-110 transition-transform mx-auto mb-4" size={40} />
                <h3 className="font-black text-teal-400 mb-3 uppercase tracking-wider">LinkedIn</h3>
                <p className="text-stone-300 text-sm font-medium">linkedin.com/in/creavill</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/creavill"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/40 to-gray-600/40 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-slate-900/50 to-gray-900/50 rounded-3xl border border-slate-400/30 shadow-xl">
                <Github className="text-slate-400 group-hover:scale-110 transition-transform mx-auto mb-4" size={40} />
                <h3 className="font-black text-slate-400 mb-3 uppercase tracking-wider">GitHub</h3>
                <p className="text-stone-300 text-sm font-medium">github.com/creavill</p>
              </div>
            </a>
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-900/40 via-amber-900/40 to-teal-900/40 rounded-3xl border border-emerald-400/20 shadow-2xl">
            <p className="text-stone-300 text-lg">
              <span className="text-emerald-400 font-bold">Based in San Diego, CA</span> • 
              <span className="text-amber-400 font-bold"> Open to remote opportunities</span> • 
              <span className="text-teal-400 font-bold"> Available for consulting</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-emerald-700/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400 font-medium">
            © 2025 Conner Reavill • Built with React • Deployed on AWS • Shaped with passion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;