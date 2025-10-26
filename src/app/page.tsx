"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Crown, Edit, Globe, Instagram, Linkedin, Mail, MessageSquare, Newspaper, Sparkles, Star, Ticket, TrendingUp, Twitter, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Collections", id: "feature" },
            { name: "Show Details", id: "about" },
            { name: "Press", id: "socialProof" },
            { name: "Tickets", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Gucci Paris"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Gucci Fashion Show Paris 2025"
          description="Experience luxury redefined. Join us for an exclusive fashion show featuring Gucci's latest haute couture collection in the heart of Paris."
          tag="Exclusive Event"
          tagIcon={Sparkles}
          buttons={[
            { text: "Reserve Seats", href: "pricing" },
            { text: "View Collections", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/9511240/pexels-photo-9511240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Gucci fashion show runway in Paris"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Fashion Heritage Meets Innovation"
          description={[
            "Our Paris fashion show represents a century of Italian craftsmanship meeting contemporary artistic vision.",
            "Experience the intersection of tradition and innovation as we unveil designs that will define luxury fashion for the next decade."
          ]}
          buttons={[
            { text: "Discover Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Featured Collections"
          description="Discover the exclusive pieces that will grace the Paris runway"
          tag="Collections"
          tagIcon={Crown}
          features={[
            {
              id: "01",
              title: "Luxury Handbags",
              description: "Exquisite Italian leather craftsmanship meets contemporary design in our signature handbag collection",
              imageSrc: "https://images.pexels.com/photos/31209272/pexels-photo-31209272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "02",
              title: "Haute Couture Dresses",
              description: "One-of-a-kind evening wear pieces that embody elegance and sophistication",
              imageSrc: "https://images.pexels.com/photos/18977054/pexels-photo-18977054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "03",
              title: "Designer Footwear",
              description: "Statement shoes that complete the luxury experience with unparalleled comfort and style",
              imageSrc: "https://images.pexels.com/photos/31209272/pexels-photo-31209272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Runway Exclusives"
          description="Limited edition pieces from the Paris collection"
          tag="Limited Edition"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Gucci",
              name: "Aria Collection Handbag",
              price: "€3,200",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/17938771/pexels-photo-17938771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              brand: "Gucci",
              name: "Evening Couture Dress",
              price: "€8,500",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/8207904/pexels-photo-8207904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              brand: "Gucci",
              name: "Signature Platform Heels",
              price: "€1,850",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://images.pexels.com/photos/5922467/pexels-photo-5922467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Fashion Show Access"
          description="Choose your experience level for this exclusive event"
          tag="Tickets"
          tagIcon={Ticket}
          plans={[
            {
              id: "general",
              badge: "General Access",
              badgeIcon: Users,
              price: "€450",
              subtitle: "Experience the show from premium seating",
              buttons: [
                { text: "Reserve Now", href: "https://tickets.gucci.com" },
                { text: "Learn More", href: "contact" }
              ],
              features: [
                "Premium runway seating",
                "Welcome champagne reception",
                "Digital program and lookbook",
                "Exclusive gift bag"
              ]
            },
            {
              id: "vip",
              badge: "VIP Experience",
              badgeIcon: Crown,
              price: "€1,200",
              subtitle: "Exclusive access with designer meet & greet",
              buttons: [
                { text: "Book VIP", href: "https://tickets.gucci.com/vip" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Front row reserved seating",
                "Pre-show designer meet & greet",
                "Backstage tour access",
                "Exclusive after-party invitation",
                "Limited edition collection preview",
                "Personal shopping session"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Fashion Show Impact"
          description="Key numbers that showcase our global influence in luxury fashion"
          tag="Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "100",
              title: "years",
              description: "of Italian fashion heritage and craftsmanship",
              icon: Award
            },
            {
              id: "2",
              value: "50",
              title: "countries",
              description: "fashion press and buyers attending",
              icon: Globe
            },
            {
              id: "3",
              value: "200",
              title: "pieces",
              description: "exclusive designs premiering in Paris",
              icon: Sparkles
            },
            {
              id: "4",
              value: "15M",
              title: "viewers",
              description: "expected global livestream audience",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Creative Vision"
          description="Meet the talented team behind this extraordinary fashion show"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alessandro Michele",
              role: "Creative Director",
              description: "Visionary designer leading Gucci's creative renaissance with innovative approaches to luxury fashion.",
              imageSrc: "https://images.pexels.com/photos/34425494/pexels-photo-34425494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/alessandro" },
                { icon: Twitter, url: "https://twitter.com/alessandro" }
              ]
            },
            {
              id: "2",
              name: "Sophia Marcelli",
              role: "Fashion Director",
              description: "Award-winning stylist orchestrating the visual narrative of our Paris collection.",
              imageSrc: "https://images.pexels.com/photos/8516938/pexels-photo-8516938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/sophia" },
                { icon: Linkedin, url: "https://linkedin.com/in/sophia" }
              ]
            },
            {
              id: "3",
              name: "Marco Venetian",
              role: "Show Producer",
              description: "Master of fashion show production bringing two decades of runway experience.",
              imageSrc: "https://images.pexels.com/photos/34425494/pexels-photo-34425494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/marco" },
                { icon: Globe, url: "https://marcovenetian.com" }
              ]
            },
            {
              id: "4",
              name: "Isabella Rossi",
              role: "Head of Design",
              description: "Leading the design team in creating pieces that define contemporary luxury.",
              imageSrc: "https://images.pexels.com/photos/6896322/pexels-photo-6896322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/isabella" },
                { icon: Linkedin, url: "https://linkedin.com/in/isabella" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Fashion Industry Acclaim"
          description="What fashion leaders are saying about our Paris show"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Anna Wintour",
              role: "Editor-in-Chief",
              company: "Vogue",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7971754/pexels-photo-7971754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Carine Roitfeld",
              role: "Fashion Editor",
              company: "CR Fashion Book",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7609957/pexels-photo-7609957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Suzy Menkes",
              role: "Fashion Critic",
              company: "Vogue International",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5264951/pexels-photo-5264951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Tim Blanks",
              role: "Editor-at-Large",
              company: "The Business of Fashion",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7611753/pexels-photo-7611753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Sarah Mower",
              role: "Fashion Critic",
              company: "Vogue.com",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9154880/pexels-photo-9154880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Press Coverage"
          description="Featured in leading fashion publications worldwide"
          tag="Press"
          tagIcon={Newspaper}
          logos={[
            "https://images.pexels.com/photos/8955868/pexels-photo-8955868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1194410/pexels-photo-1194410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18937023/pexels-photo-18937023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7282367/pexels-photo-7282367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/32800512/pexels-photo-32800512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1007027/pexels-photo-1007027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1004040/pexels-photo-1004040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Fashion Show Information"
          sideDescription="Everything you need to know about attending"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What is the dress code for the fashion show?",
              content: "We recommend elegant cocktail attire. Think sophisticated, fashion-forward pieces that reflect your personal style while respecting the luxury setting."
            },
            {
              id: "2",
              title: "Can I take photos during the show?",
              content: "Photography is permitted in designated areas before and after the show. During the runway presentation, professional photographers will capture the moments for official coverage."
            },
            {
              id: "3",
              title: "What time should I arrive?",
              content: "Doors open 1 hour before the show begins. We recommend arriving 30-45 minutes early to enjoy the pre-show reception and find your seats."
            },
            {
              id: "4",
              title: "Is the venue accessible?",
              content: "Yes, our Paris venue is fully accessible with wheelchair access, accessible restrooms, and reserved seating areas. Please contact us when booking to arrange assistance."
            },
            {
              id: "5",
              title: "What happens if weather affects the show?",
              content: "The show will take place at our covered venue in Paris, so weather will not affect the event. In case of any changes, ticket holders will be notified immediately."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Fashion Insights"
          description="Behind-the-scenes stories and fashion industry perspectives"
          tag="Blog"
          tagIcon={Edit}
          blogs={[
            {
              id: "1",
              category: "Behind the Scenes",
              title: "Crafting the Paris Collection",
              excerpt: "An intimate look at the design process behind our most ambitious collection yet, from initial sketches to runway reality.",
              imageSrc: "https://images.pexels.com/photos/6899776/pexels-photo-6899776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Elena Marchetti",
              authorAvatar: "https://images.pexels.com/photos/7611739/pexels-photo-7611739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Design Process",
              title: "Italian Heritage Meets Modern Art",
              excerpt: "How traditional Italian craftsmanship techniques are being reimagined for contemporary luxury fashion.",
              imageSrc: "https://images.pexels.com/photos/7256871/pexels-photo-7256871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Roberto Santini",
              authorAvatar: "https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Fashion Week",
              title: "Paris Fashion Week Preview",
              excerpt: "What to expect from this season's most anticipated shows and the trends that will define luxury fashion.",
              imageSrc: "https://images.pexels.com/photos/894077/pexels-photo-894077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Camille Dubois",
              authorAvatar: "https://images.pexels.com/photos/34425494/pexels-photo-34425494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Invitations"
          title="Request Your Invitation"
          description="Join our exclusive guest list for the Paris fashion show and be among the first to experience luxury redefined."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Request Invitation"
          termsText="By requesting an invitation, you agree to receive exclusive updates about Gucci events and collections."
          imageSrc="https://images.pexels.com/photos/34433187/pexels-photo-34433187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury fashion show invitation"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Gucci Paris"
          columns={[
            {
              items: [
                { label: "Collections", href: "feature" },
                { label: "Show Details", href: "about" },
                { label: "Tickets", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "Press", href: "socialProof" },
                { label: "Team", href: "team" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Privacy Policy", href: "https://gucci.com/privacy" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}