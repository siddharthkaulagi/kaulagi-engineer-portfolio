
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState('unknown');
  const { toast } = useToast();

  // Check if backend is online
  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/health`, { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          setServerStatus('online');
          console.log('Backend server is online');
        } else {
          setServerStatus('offline');
          console.warn('Backend server returned an error');
        }
      } catch (error) {
        setServerStatus('offline');
        console.warn('Backend server is offline or unreachable');
      }
    };
    
    checkBackendStatus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // If backend is offline, use the fallback behavior
    if (serverStatus === 'offline') {
      setTimeout(() => {
        toast({
          title: "Message Sent (Demo Mode)",
          description: "This is a demo. In production, your message would be sent via email.",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        setIsSubmitting(false);
      }, 1500);
      return;
    }
    
    // Send to backend
    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Connection Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.hidden-element').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.hidden-element').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16 hidden-element">
          <h2 className="section-title">Get In Touch</h2>
          <div className="separator mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 hidden-element">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-portfolioBlue bg-opacity-10 flex items-center justify-center mr-4 text-portfolioBlue flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-portfolioBlue bg-opacity-10 flex items-center justify-center mr-4 text-portfolioBlue flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-portfolioBlue bg-opacity-10 flex items-center justify-center mr-4 text-portfolioBlue flex-shrink-0">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                  <p className="text-gray-600">
                    <a 
                      href="https://linkedin.com/in/yourname" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolioAccent hover:underline"
                    >
                      linkedin.com/in/yourname
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            {serverStatus === 'offline' && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-amber-700 text-sm">
                  <strong>Note:</strong> Backend server is currently offline. Form submissions will work in demo mode.
                </p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-3 hidden-element" style={{transitionDelay: '0.2s'}}>
            <div className="card p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="form-input"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="form-input h-36 resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
