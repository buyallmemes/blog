import Layout from '@/components/Layout';
import {
  ServiceStructuredData,
  PersonStructuredData,
} from '@/components/ServiceStructuredData';
import { Metadata } from 'next';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://buyallmemes.com'
    : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Let's Talk - Architecture Consulting | Mark Fenderov",
  description:
    'Staff Engineer at HelloFresh offering architecture consulting, system design reviews, and technical mentoring. 15+ years experience scaling distributed systems, microservices, and legacy modernization.',
  keywords: [
    'software architecture consultant',
    'system design consultant',
    'technical consultant',
    'staff engineer consulting',
    'go programming consultant',
    'java architecture consultant',
    'distributed systems consultant',
    'microservices consultant',
    'legacy system migration',
    'hellofresh engineer',
    'deutsche telekom architect',
    'aws architecture consultant',
    'technical mentoring',
    'system design review',
  ],
  authors: [
    {
      name: 'Mark Fenderov',
      url: 'https://www.linkedin.com/in/mark-fenderov/',
    },
  ],
  creator: 'Mark Fenderov',
  publisher: 'Mark Fenderov',
  alternates: {
    canonical: '/lets-talk',
  },
  openGraph: {
    title: "Let's Talk - Architecture Consulting | Mark Fenderov",
    description:
      'Staff Engineer at HelloFresh offering architecture consulting, system design reviews, and technical mentoring. 15+ years experience scaling distributed systems.',
    url: `${baseUrl}/lets-talk`,
    siteName: 'BuyAllMemes Blog',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Let's Talk - Architecture Consulting | Mark Fenderov",
    description:
      'Staff Engineer at HelloFresh offering architecture consulting, system design reviews, and technical mentoring.',
    creator: '@markfenderov',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function LetsTalkPage() {
  return (
    <>
      <ServiceStructuredData
        title="Let's Talk - Architecture Consulting | Mark Fenderov"
        description="Staff Engineer at HelloFresh offering architecture consulting, system design reviews, and technical mentoring. 15+ years experience scaling distributed systems, microservices, and legacy modernization."
      />
      <PersonStructuredData
        name="Mark Fenderov"
        jobTitle="Staff Engineer"
        description="Software architecture consultant with 15+ years experience. Specializes in distributed systems, legacy modernization, and technical mentoring."
      />
      <Layout>
        <div className="main">
          <aside className="sidebar">
            <h2 className="sidebar-title">Contact</h2>
            <div className="sidebar-contact">
              <a
                href="https://calendly.com/mfenderov/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button primary"
              >
                📅 Book Consultation
              </a>
              <a
                href="https://www.linkedin.com/in/mark-fenderov/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                💬 LinkedIn Message
              </a>
            </div>
          </aside>

          <main className="article">
            <header className="article-header">
              <h1 className="article-title">Let&apos;s Talk Architecture</h1>
              <div className="article-meta">
                <div>Staff Engineer at HelloFresh | 15+ years experience</div>
              </div>
            </header>

            <div className="article-content">
              <p>
                I&apos;ve been building software for 15+ years. Currently Staff
                Engineer at HelloFresh, working on AI-driven customer service
                and modernizing platforms that have seen better days.
              </p>

              <p>
                Software should be a craft, not something we constantly
                apologize for. I&apos;ve seen too many systems that work great
                in demos but collapse under real load. My focus is building
                things that actually work — and that your team can sleep soundly
                knowing they won&apos;t break at 3 AM.
              </p>

              <h2>What I Do</h2>

              <p>
                I help untangle complex technical messes. Architecture reviews,
                legacy system migrations, scaling challenges — if it&apos;s a
                gnarly technical problem, I&apos;ve probably wrestled with
                something similar.
              </p>

              <p>Recent examples:</p>

              <p>
                • Led Deutsche Telekom&apos;s customer portal rebuild (200+
                engineers, somehow didn&apos;t go insane)
                <br />
                • Designed event-driven systems that actually stay up
                <br />
                • Migrated monoliths without the usual &quot;everything is on
                fire&quot; experience
                <br />• Built AI chatbots that help instead of making people
                want to throw their phones
              </p>

              <h2>Tech I Work With</h2>

              <p>
                Started with Java (13 years, even got the Oracle cert to prove
                it) but recently fell hard for Go. If you&apos;ve read my blog,
                you know the story. These days it&apos;s mostly Go, AWS
                (Bedrock, EKS, the usual suspects), and enough
                JavaScript/TypeScript to be dangerous.
              </p>

              <p>
                I&apos;m exploring Rust because memory safety without garbage
                collection is pretty compelling. But honestly? I&apos;m
                suspicious of anything that looks too clever. Simple usually
                wins.
              </p>

              <h2>How This Works</h2>

              <p>
                Think I might be able to help? Just reach out. We&apos;ll chat
                about what you&apos;re dealing with, see if it makes sense, and
                go from there.
              </p>

              <p>
                No elaborate discovery processes or corporate theater. Just
                engineers talking through problems.
              </p>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
