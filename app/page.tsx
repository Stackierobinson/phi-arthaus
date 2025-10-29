'use client'

import Link from 'next/link'
import StatItem from '@/components/StatItem'
import ProgramCard from '@/components/ProgramCard'
import TimelineItem from '@/components/TimelineItem'
import DonationTier from '@/components/DonationTier'
import ImpactItem from '@/components/ImpactItem'
import FundraisingProgress from '@/components/FundraisingProgress'
import SmallDonationForm from '@/components/SmallDonationForm'
import CryptoDonation from '@/components/CryptoDonation'
import { useStripeCheckout } from '@/hooks/useStripeCheckout'

export default function Home() {
  const { createCheckoutSession, isLoading, error } = useStripeCheckout()

  const handleDonationSelect = async (amount: string) => {
    // For now, we'll proceed without collecting email first
    // In production, you might want to show a modal to collect donor info
    await createCheckoutSession({
      amount,
      // Optional: Add donor info collection modal here
      // donorEmail: email,
      // donorName: name,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center mt-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 z-0" />

        {/* Artistic Color Blocks - Warhol Inspired */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-basquiat-yellow opacity-80 clip-polygon z-10"
             style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-warhol-pink opacity-70 z-10"
             style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-20" />

        {/* Hero Content */}
        <div className="relative z-30 text-center text-white max-w-4xl px-8">
          <h1 className="text-6xl md:text-7xl font-light tracking-wider mb-6 leading-tight">
            Cultivating the Artists of Tomorrow
          </h1>
          <div className="text-2xl font-light tracking-[0.2em] mb-12 uppercase">
            A Georgia Fine Arts Academy • Launching August 2027
          </div>
          <Link
            href="#donate"
            className="inline-block bg-white text-gray-900 px-16 py-6 tracking-widest uppercase text-base font-bold shadow-pink hover:shadow-pink-hover hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            Support Our Vision
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto bg-gradient-to-br from-basquiat-yellow/5 via-warhol-pink/5 to-basquiat-cyan/5">
        <h2 className="relative text-5xl font-light tracking-wider mb-4 text-center inline-block w-full">
          Our Mission
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-kahlo-coral" />
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-16 leading-relaxed mt-12">
            PHI ArtHaus is reimagining arts education through a year-round remote fine arts academy that connects
            Georgia students directly with the professional art world. Through online instruction and monthly in-person
            experiences, we're building partnerships with galleries, working artists, and prestigious institutions
            like Art Basel to provide an authentic artistic education—launching August 2027.
          </p>

          <blockquote className="relative text-4xl font-light italic my-12 text-gray-700 p-8">
            <div className="absolute top-0 left-0 w-20 h-20 bg-warhol-pink opacity-30 rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-basquiat-cyan opacity-30 rounded-full -z-10" />
            "Art as Language — Teaching students to speak visually with clarity, power, and purpose."
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
            <StatItem number="30" label="Students by Year 5" index={0} />
            <StatItem number="220+" label="Instruction Days/Year" index={1} />
            <StatItem number="∞" label="Creative Possibilities" index={2} />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto bg-white">
        <h2 className="relative text-5xl font-light tracking-wider mb-4 text-center inline-block w-full">
          Our Journey
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-kahlo-coral" />
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed mt-12">
          We're building something extraordinary. Here's our roadmap to transforming fine arts education in Georgia.
        </p>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto py-8">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-electric-purple -translate-x-1/2 hidden md:block" />

          {/* Mobile Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-electric-purple md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-0">
            <TimelineItem
              date="Now – August 2027"
              title="Foundation Phase"
              description="Building our curriculum, securing partnerships, and raising $300,000 to launch with excellence. We're creating the infrastructure for a world-class remote arts program."
              index={0}
            />
            <TimelineItem
              date="August 2027"
              title="Public Launch"
              description="PHI ArtHaus opens to Georgia students! Remote instruction begins with monthly in-person experiences bringing our community together."
              index={1}
              isActive={true}
            />
            <TimelineItem
              date="Year 1-2"
              title="Gallery Partnerships"
              description="Establishing relationships with Atlanta galleries, Art Basel representatives, and working artists to provide students direct industry access."
              index={2}
            />
            <TimelineItem
              date="Year 5"
              title="30 Students Strong"
              description="Growing our community to 30 exceptional young artists, with established gallery representation and scholarship success stories."
              index={3}
            />
          </div>
        </div>

        {/* Fundraising Goal */}
        <div className="mt-24 bg-gradient-to-br from-basquiat-yellow to-warhol-pink p-16 text-white relative overflow-hidden">
          <div className="absolute -top-1/2 -right-24 w-96 h-96 bg-white opacity-10 rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-light tracking-widest uppercase mb-6">
              Current Fundraising Goal
            </h3>
            <div className="text-8xl font-bold my-8" style={{ textShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)', letterSpacing: '-0.05em' }}>
              $300,000
            </div>
            <p className="text-lg mb-12 leading-relaxed opacity-95">
              To launch August 2027 with full curriculum, technology infrastructure, art supplies, and monthly in-person experiences for our inaugural cohort.
            </p>

            <div className="bg-black/20 backdrop-blur-md p-8 text-left space-y-4">
              <div className="flex justify-between py-4 border-b border-white/30 text-lg">
                <span className="tracking-wider">Curriculum Development</span>
                <span className="font-bold">$75,000</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/30 text-lg">
                <span className="tracking-wider">Technology & Remote Platform</span>
                <span className="font-bold">$50,000</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/30 text-lg">
                <span className="tracking-wider">Art Supplies & Materials</span>
                <span className="font-bold">$75,000</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/30 text-lg">
                <span className="tracking-wider">Monthly Events & Instruction</span>
                <span className="font-bold">$60,000</span>
              </div>
              <div className="flex justify-between py-4 text-lg font-bold">
                <span className="tracking-wider">Operating Reserve</span>
                <span>$40,000</span>
              </div>
            </div>

            <Link
              href="#donate"
              className="mt-8 inline-block bg-white text-warhol-pink px-16 py-6 tracking-widest uppercase text-base font-bold shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:shadow-[9px_9px_0px_rgba(0,0,0,0.3)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              Help Us Launch
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Decorative element */}
        <div className="absolute top-12 right-12 w-16 h-16 bg-kahlo-coral opacity-40 rounded-full blur-sm" />

        <h2 className="relative text-5xl font-light tracking-wider mb-4 text-center inline-block w-full">
          Our Programs
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-kahlo-coral" />
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed mt-12">
          A comprehensive remote curriculum designed for Georgia students, integrating visual arts with academic excellence,
          professional development, and cultural literacy. Monthly in-person gatherings bring our community together.
        </p>

        <div className="max-w-4xl mx-auto mb-16 p-8 bg-white border-l-4 border-basquiat-cyan">
          <h3 className="text-2xl font-light mb-4 tracking-wide">Remote Learning, Real Community</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Format:</strong> Remote instruction with live online classes, personalized feedback, and collaborative projects
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Monthly In-Person:</strong> One live activity each month (gallery visits, studio workshops, guest artist sessions, exhibitions)
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Location Requirement:</strong> Students must reside in Georgia to participate in monthly in-person experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          <ProgramCard
            title="Visual Arts Mastery"
            description="Drawing, painting, sculpture, and design through observation, experimentation, and professional technique. Students develop a distinctive artistic voice while mastering fundamental and advanced skills."
            index={0}
          />
          <ProgramCard
            title="Integrated Academics"
            description="Core subjects taught through an artistic lens—from color chemistry and geometric perspective to art history and visual storytelling. Education that connects creativity with critical thinking."
            index={1}
          />
          <ProgramCard
            title="Professional Development"
            description="Portfolio building, artist statements, pricing strategies, and entrepreneurship. Students learn to position themselves as professional artists in galleries, competitions, and the marketplace."
            index={2}
          />
          <ProgramCard
            title="Industry Partnerships"
            description="Direct collaboration with Atlanta galleries, working artists, museums, and events like Art Basel. Real-world exposure that transforms classroom learning into professional experience."
            index={3}
          />
          <ProgramCard
            title="Cultural Literacy"
            description="Deep exploration of art movements, cultural identity, and visual language across history and contemporary practice. Understanding art's role in society and personal expression."
            index={4}
          />
          <ProgramCard
            title="Exhibition Opportunities"
            description="Regular showcases in galleries and public spaces, youth art competitions, and portfolio reviews. Students build recognition and confidence through exhibition and critique."
            index={5}
          />
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-32 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="relative text-5xl font-light tracking-wider mb-4 text-center inline-block w-full">
            Our Impact
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-kahlo-coral" />
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed mt-12">
            Building a pipeline of disciplined, culturally literate artists who are prepared for professional careers and higher education in the arts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            <ImpactItem
              title="Scholarship Pathways"
              description="Students graduate with portfolios that earn recognition in competitions like Scholastic Art & Writing Awards and YoungArts, securing scholarship funding for continued arts education."
              index={0}
            />
            <ImpactItem
              title="Gallery Representation"
              description="Through our partnerships with Atlanta galleries and Art Basel connections, students gain early exposure to professional exhibition spaces and collector networks."
              index={1}
            />
            <ImpactItem
              title="Creative Entrepreneurship"
              description="We teach students to value their work, price strategically, and build sustainable creative practices—transforming passion into viable career paths."
              index={2}
            />
            <ImpactItem
              title="Cultural Leadership"
              description="Our graduates understand art as cultural dialogue. They create work that reflects their communities, challenges perspectives, and contributes to the visual conversation of our time."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto bg-gradient-to-br from-kahlo-teal/3 via-kahlo-coral/3 to-electric-purple/3">
        {/* Decorative element */}
        <div className="absolute top-12 right-12 w-16 h-16 bg-basquiat-yellow opacity-30 rounded-full blur-md" />

        <h2 className="relative text-5xl font-light tracking-wider mb-4 text-center inline-block w-full">
          Support Our Students
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-kahlo-coral" />
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed mt-12">
          As a nonprofit organization, PHI ArtHaus relies on the generosity of donors and grant funders who believe in transforming arts education. Your tax-deductible contribution directly supports student scholarships, art supplies, gallery partnerships, and professional development opportunities.
        </p>

        {/* Live Fundraising Progress */}
        <div className="max-w-4xl mx-auto mb-16">
          <FundraisingProgress />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <DonationTier
            amount="$500"
            name="Patron"
            benefits={[
              "Supports one student's art supplies for a semester",
              "Name recognition on our donor wall",
              "Quarterly newsletter updates"
            ]}
            index={0}
            onSelect={handleDonationSelect}
          />
          <DonationTier
            amount="$2,500"
            name="Benefactor"
            benefits={[
              "Partial student scholarship funding",
              "Invitation to gallery exhibitions",
              "Annual impact report",
              "Recognition in event programs"
            ]}
            index={1}
            onSelect={handleDonationSelect}
          />
          <DonationTier
            amount="$10,000+"
            name="Visionary"
            benefits={[
              "Full student scholarship endowment",
              "VIP access to all academy events",
              "Personal studio tour with students",
              "Advisory board consideration"
            ]}
            index={2}
            onSelect={handleDonationSelect}
          />
        </div>

        {/* Small Donation Form */}
        <div className="max-w-2xl mx-auto">
          <SmallDonationForm onSubmit={handleDonationSelect} />
        </div>

        {/* Crypto Donation */}
        <div className="max-w-3xl mx-auto mt-12">
          <CryptoDonation />
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            <strong>Tax ID:</strong> [Your EIN Here]<br />
            PHI ArtHaus is a registered 501(c)(3) nonprofit organization.
            All donations are tax-deductible to the fullest extent permitted by law.
          </p>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <h2 className="relative text-5xl font-light tracking-wider mb-4 text-center inline-block w-full">
          Partnership Goals
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-kahlo-coral" />
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed mt-12">
          We're building relationships with leading institutions and organizations in the Atlanta arts community.
          These are the partnerships we're actively pursuing to provide our students with unparalleled access to the professional art world.
        </p>

        <div className="flex justify-center items-center gap-16 flex-wrap my-12">
          <div className="text-2xl tracking-[0.2em] uppercase text-gray-400 font-light hover:text-basquiat-yellow hover:drop-shadow-lg transition-all cursor-default">
            Art Basel
          </div>
          <div className="text-2xl tracking-[0.2em] uppercase text-gray-400 font-light hover:text-warhol-pink hover:drop-shadow-lg transition-all cursor-default">
            High Museum
          </div>
          <div className="text-2xl tracking-[0.2em] uppercase text-gray-400 font-light hover:text-basquiat-cyan hover:drop-shadow-lg transition-all cursor-default">
            SCAD
          </div>
          <div className="text-2xl tracking-[0.2em] uppercase text-gray-400 font-light hover:text-electric-purple hover:drop-shadow-lg transition-all cursor-default">
            Atlanta Galleries
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-gray-600 text-base leading-relaxed mt-12">
          <p>Our vision includes collaborations with Art Basel representatives, partnerships with Atlanta's premier galleries,
          relationships with SCAD for portfolio development, and educational programs with the High Museum.
          Your support helps us establish these transformative connections for our students.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 lg:px-12 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="relative text-5xl font-light tracking-wider mb-4 text-center inline-block w-full">
            Get in Touch
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-basquiat-yellow via-warhol-pink via-basquiat-cyan to-kahlo-coral" />
          </h2>

          <div className="max-w-2xl mx-auto mt-12 space-y-8">
            <div className="text-lg tracking-wider">
              <strong>For Grant Inquiries:</strong><br />
              <a href="mailto:grants@phiarthaus.org" className="border-b border-white hover:opacity-70 transition-opacity">
                grants@phiarthaus.org
              </a>
            </div>
            <div className="text-lg tracking-wider">
              <strong>For Donor Relations:</strong><br />
              <a href="mailto:donors@phiarthaus.org" className="border-b border-white hover:opacity-70 transition-opacity">
                donors@phiarthaus.org
              </a>
            </div>
            <div className="text-lg tracking-wider">
              <strong>General Information:</strong><br />
              <a href="mailto:info@phiarthaus.org" className="border-b border-white hover:opacity-70 transition-opacity">
                info@phiarthaus.org
              </a>
            </div>
            <div className="text-lg tracking-wider mt-12">
              <strong>Location:</strong><br />
              Atlanta, Georgia
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
