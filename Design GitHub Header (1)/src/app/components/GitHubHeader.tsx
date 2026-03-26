import { Github, Linkedin, Mail, Globe, Award, Briefcase } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function GitHubHeader() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Tech stack with professional styling
  const techStack = [
    { name: 'TypeScript', abbr: 'TS', color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.1)' },
    { name: 'React', abbr: 'React', color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.1)' },
    { name: 'Node.js', abbr: 'Node', color: '#339933', bgColor: 'rgba(51, 153, 51, 0.1)' },
    { name: 'AWS', abbr: 'AWS', color: '#FF9900', bgColor: 'rgba(255, 153, 0, 0.1)' },
    { name: 'Selenium', abbr: 'Se', color: '#43B02A', bgColor: 'rgba(67, 176, 42, 0.1)' },
    { name: 'Playwright', abbr: 'PW', color: '#2EAD33', bgColor: 'rgba(46, 173, 51, 0.1)' },
    { name: 'Postman', abbr: 'PM', color: '#FF6C37', bgColor: 'rgba(255, 108, 55, 0.1)' },
  ];

  return (
    <div 
      className="relative overflow-hidden"
      style={{
        width: '1200px',
        height: '400px',
        background: 'linear-gradient(135deg, #0F0F1E 0%, #1A1A2E 50%, #16213E 100%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Sophisticated grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Subtle gradient orbs */}
      <div 
        className="absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%)',
          top: '-200px',
          left: '-100px',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06), transparent 70%)',
          bottom: '-150px',
          right: '-50px',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative h-full flex items-center gap-6 px-16">
        {/* Left Section - Profile Card */}
        <div 
          className="relative p-8 rounded-3xl backdrop-blur-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            minWidth: '380px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Premium glowing border */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #A855F7 100%)',
              zIndex: -1,
              padding: '1.5px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Profile Section */}
          <div className="flex items-start gap-4 mb-6">
            {/* Professional Avatar */}
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
              }}
            >
              <span className="font-bold" style={{ color: '#FFFFFF' }}>MO</span>
            </div>

            <div className="flex-1">
              {/* Name with better typography */}
              <h1 
                className="text-2xl mb-1 tracking-tight"
                style={{
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
              >
                Mitch Yvone Ortega
              </h1>
              <p 
                className="text-sm mb-3"
                style={{
                  color: '#94A3B8',
                  fontWeight: 500,
                }}
              >
                Aspiring Full-Stack Developer & QA Engineer
              </p>

              {/* Class Badge - more refined */}
              <div 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                }}
              >
                <Award size={14} color="#60A5FA" />
                <span 
                  className="text-xs"
                  style={{
                    fontWeight: 600,
                    color: '#60A5FA',
                  }}
                >
                  Class of 2026
                </span>
              </div>
            </div>
          </div>

          {/* Status - more professional */}
          <div 
            className="flex items-center gap-2 mb-6 p-3 rounded-xl"
            style={{
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
            }}
          >
            {/* Sophisticated pulsing indicator */}
            <div className="relative flex items-center justify-center">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#10B981',
                  boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              <div 
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: '#10B981',
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              />
            </div>
            <Briefcase size={14} color="#10B981" />
            <span 
              className="text-xs flex-1"
              style={{
                color: '#10B981',
                fontWeight: 600,
              }}
            >
              Open to Junior Dev/QA Positions
            </span>
          </div>

          {/* Divider */}
          <div 
            className="h-px mb-6"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            }}
          />

          {/* Social Links - refined */}
          <div className="flex items-center gap-2">
            <span className="text-xs mr-2" style={{ color: '#64748B', fontWeight: 500 }}>
              Connect:
            </span>
            <a 
              href="#"
              className="p-2.5 rounded-lg transition-all hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Github size={16} color="#94A3B8" />
            </a>
            <a 
              href="#"
              className="p-2.5 rounded-lg transition-all hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Linkedin size={16} color="#94A3B8" />
            </a>
            <a 
              href="#"
              className="p-2.5 rounded-lg transition-all hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Mail size={16} color="#94A3B8" />
            </a>
            <a 
              href="#"
              className="p-2.5 rounded-lg transition-all hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Globe size={16} color="#94A3B8" />
            </a>
          </div>
        </div>

        {/* Right Section - Tech Stack Showcase */}
        <div 
          className="relative flex-1 p-8 rounded-3xl backdrop-blur-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            height: '320px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Premium glowing border */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #A855F7 100%)',
              zIndex: -1,
              padding: '1.5px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-1.5 h-6 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #3B82F6 0%, #8B5CF6 100%)',
                }}
              />
              <h2 
                className="text-2xl tracking-tight"
                style={{
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
              >
                Technology Stack
              </h2>
            </div>
            <p 
              className="text-sm pl-4"
              style={{
                color: '#64748B',
                fontWeight: 500,
              }}
            >
              Full-Stack Development • Quality Assurance • Cloud Infrastructure
            </p>
          </div>

          {/* Marquee Container with premium styling */}
          <div className="relative overflow-hidden h-40">
            {/* Premium fade gradients */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(15, 15, 30, 0.9), transparent)',
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, rgba(15, 15, 30, 0.9), transparent)',
              }}
            />

            {/* Professional Marquee Wrapper */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full">
              <div 
                ref={marqueeRef}
                className="flex gap-6"
                style={{
                  animation: 'marquee 30s linear infinite',
                  width: 'fit-content',
                }}
              >
                {/* Duplicate items for seamless loop */}
                {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl backdrop-blur-sm group transition-all flex-shrink-0"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      width: '130px',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {/* Tech logo representation */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 text-xl font-bold"
                      style={{
                        background: tech.bgColor,
                        border: `1.5px solid ${tech.color}30`,
                        color: tech.color,
                        fontWeight: 700,
                      }}
                    >
                      {tech.abbr}
                    </div>
                    <span 
                      className="text-xs"
                      style={{
                        fontWeight: 600,
                        color: '#E2E8F0',
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                }}
              />
              <span 
                className="text-xs"
                style={{
                  color: '#64748B',
                  fontWeight: 500,
                }}
              >
                Continuous Integration & Deployment
              </span>
            </div>
            <div 
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{
                background: 'rgba(168, 85, 247, 0.08)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
              }}
            >
              <Award size={12} color="#C084FC" />
              <span 
                className="text-xs"
                style={{
                  color: '#C084FC',
                  fontWeight: 600,
                }}
              >
                Graduating June 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}