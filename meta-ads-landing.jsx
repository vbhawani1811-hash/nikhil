import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Star, TrendingUp, Clock, Briefcase, CheckCircle, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

const MetaAdsLanding = () => {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ success: 0, projects: 0, hours: 0, roas: 0 });
  const [activeMonth, setActiveMonth] = useState(null);
  const profileRef = useRef(null);

  // Animated stats counter
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { success: 99, projects: 289, hours: 15523, roas: 20 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        success: Math.floor(targets.success * progress),
        projects: Math.floor(targets.projects * progress),
        hours: Math.floor(targets.hours * progress),
        roas: Math.floor(targets.roas * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for 3D tilt effect
  const handleMouseMove = (e) => {
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const tiltStyle = isHoveringProfile ? {
    transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${-(mousePosition.y - 0.5) * 10}deg) translateY(-8px)`,
  } : {};

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      color: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        pointerEvents: 'none'
      }}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: '#06b6d4',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px #2563eb, 0 0 10px #2563eb; }
          50% { box-shadow: 0 0 20px #2563eb, 0 0 30px #2563eb, 0 0 40px #2563eb; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dataFlow {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
      `}</style>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Upwork Profile Authentication Card */}
        <div
          ref={profileRef}
          onMouseEnter={() => setIsHoveringProfile(true)}
          onMouseLeave={() => setIsHoveringProfile(false)}
          onMouseMove={handleMouseMove}
          style={{
            position: 'relative',
            background: 'rgba(30, 41, 59, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '24px',
            padding: '0',
            marginBottom: '60px',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'slideInUp 0.8s ease-out',
            boxShadow: isHoveringProfile 
              ? '0 20px 60px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.5)'
              : '0 10px 40px rgba(0, 0, 0, 0.3)',
            ...tiltStyle
          }}
        >
          {/* Holographic Scan Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)',
            animation: 'scan 3s ease-in-out infinite',
            opacity: 0.6
          }} />

          {/* Data Stream Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            pointerEvents: 'none',
            fontFamily: 'monospace',
            fontSize: '10px',
            overflow: 'hidden'
          }}>
            {[...Array(20)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: `${i * 5}%`,
                animation: `dataFlow ${2 + Math.random()}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}>
                {Array(10).fill('01').join(' ')}
              </div>
            ))}
          </div>

          {/* Shimmer Effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            animation: 'shimmer 3s ease-in-out infinite',
            pointerEvents: 'none'
          }} />

          {/* Upwork Screenshot - Embedded as img */}
          <div style={{ 
            position: 'relative',
            background: 'white',
            borderRadius: '24px',
            overflow: 'hidden'
          }}>
            <img 
              src="/mnt/user-data/uploads/Screenshot_2026-02-02_145308.png"
              alt="Nikhil S. Upwork Profile - 99% Job Success, Top Rated Plus"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.3s ease',
                transform: isHoveringProfile ? 'scale(1.02)' : 'scale(1)'
              }}
            />
            
            {/* Overlay Authenticity Badge */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <CheckCircle size={18} />
              <span>$300K+ Earned</span>
            </div>
          </div>

          {/* Tech Border Effect */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #2563eb, #06b6d4, #a855f7, #2563eb)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s linear infinite'
          }} />
        </div>

        {/* Headline Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'slideInUp 1s ease-out 0.2s backwards' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Stop Burning Money on<br />30-Day Facebook Ads Experiments
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#94a3b8',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Join businesses who chose the proven 90-day system that turned $300K+ into real results
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: 'white',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
              animation: 'glow 2s ease-in-out infinite'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Zap size={20} />
              Book Strategy Call - $45
            </button>
            
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              <MessageCircle size={20} />
              Talk to AI Assistant
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
          animation: 'slideInUp 1.2s ease-out 0.4s backwards'
        }}>
          {[
            { icon: <Star size={32} />, value: `${stats.success}%`, label: 'Job Success Rate', color: '#f59e0b' },
            { icon: <Briefcase size={32} />, value: stats.projects, label: 'Projects Completed', color: '#10b981' },
            { icon: <Clock size={32} />, value: stats.hours.toLocaleString(), label: 'Hours Delivered', color: '#06b6d4' },
            { icon: <TrendingUp size={32} />, value: `${stats.roas}x`, label: 'Average ROAS', color: '#a855f7' }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: `slideInUp 0.6s ease-out ${0.6 + index * 0.1}s backwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}40`;
                e.currentTarget.style.borderColor = stat.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              <div style={{ color: stat.color, marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '36px', fontWeight: '800', marginBottom: '8px', color: 'white' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: '#94a3b8' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 90-Day Roadmap */}
        <div style={{ animation: 'slideInUp 1.4s ease-out 0.6s backwards' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            The 90-Day Roadmap to Profitable Meta Ads
          </h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '48px', fontSize: '18px' }}>
            Not a 30-day experiment. A proven 3-month system.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              {
                month: 1,
                title: 'Setup & Learning',
                icon: <Target size={28} />,
                color: '#2563eb',
                items: [
                  'Facebook Ads setup with pixel tracking',
                  'AI learning phase begins',
                  'Creative testing frameworks',
                  'Baseline metrics established'
                ]
              },
              {
                month: 2,
                title: 'Optimization & Scaling',
                icon: <BarChart3 size={28} />,
                color: '#10b981',
                items: [
                  'Kill weak ads, scale winners',
                  'Meta AI optimization active',
                  'CPC and CPA improvements',
                  'Funnel optimization deployed'
                ]
              },
              {
                month: 3,
                title: 'Stabilization & Performance',
                icon: <TrendingUp size={28} />,
                color: '#a855f7',
                items: [
                  'Stable CPL/CPA achieved',
                  'Predictable ROAS maintained',
                  'Clean reporting dashboards',
                  'Ready for aggressive scaling'
                ]
              }
            ].map((phase, index) => (
              <div
                key={index}
                onClick={() => setActiveMonth(activeMonth === phase.month ? null : phase.month)}
                style={{
                  background: activeMonth === phase.month 
                    ? `linear-gradient(135deg, ${phase.color}20, ${phase.color}10)`
                    : 'rgba(30, 41, 59, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${activeMonth === phase.month ? phase.color : 'rgba(59, 130, 246, 0.2)'}`,
                  borderRadius: '16px',
                  padding: '32px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: activeMonth === phase.month ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${phase.color}, ${phase.color}cc)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    {phase.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: phase.color, fontWeight: '600' }}>
                      Month {phase.month}
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>
                      {phase.title}
                    </div>
                  </div>
                </div>

                <div style={{
                  maxHeight: activeMonth === phase.month ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}>
                  {phase.items.map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '12px',
                      color: '#cbd5e1'
                    }}>
                      <CheckCircle size={18} style={{ color: phase.color, marginTop: '2px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: phase.color,
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {activeMonth === phase.month ? 'Click to collapse' : 'Click to expand'}
                  <ArrowRight size={16} style={{
                    transform: activeMonth === phase.month ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: '60px 20px',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(168, 85, 247, 0.1))',
          borderRadius: '24px',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          animation: 'slideInUp 1.6s ease-out 0.8s backwards'
        }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>
            Ready to Stop Wasting Money?
          </h3>
          <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '18px' }}>
            Get a personalized strategy call and see if the 90-day system is right for you
          </p>
          <button style={{
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            color: 'white',
            border: 'none',
            padding: '18px 40px',
            borderRadius: '12px',
            fontSize: '20px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Book Your $45 Strategy Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MetaAdsLanding;