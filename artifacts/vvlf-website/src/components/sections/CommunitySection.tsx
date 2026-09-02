import { FadeIn } from "@/components/FadeIn";
import { Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function CommunitySection() {
  const board = [
    { name: "Shri R. Rajagopal", title: "Vice Chairman", photo: "team-rajagopal.png" },
    { name: "Shri K. Aditya Vissam", title: "Secretary", photo: "team-aditya.png" },
    { name: "Dr. K. Lakshmi Prasad", title: "Director", photo: "team-lakshmi.png" },
    { name: "Dr. Sanjay Dubey", title: "Principal", photo: "team-sanjay.png" }
  ];

  const team = [
    { name: "Dr. M. K. Kaushik", title: "Director", photo: "team-kaushik.png" },
    { name: "Rohith Sirpa", title: "Manager", photo: "team-rohith.png" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! This is a static demo.");
  };

  return (
    <>
      <section id="team" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Our People</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">The Visionaries Behind VVLF</h3>
            </div>
          </FadeIn>

          <div className="mb-20">
            <h4 className="text-xl font-bold text-center text-slate-500 mb-10">BOARD OF DIRECTORS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {board.map((member, i) => (
                <FadeIn key={member.name} delay={i * 0.1}>
                  <div className="text-center group">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl shadow-slate-200/50">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h5 className="text-lg font-bold text-navy">{member.name}</h5>
                    <p className="text-slate-500">{member.title}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-center text-slate-500 mb-10">OUR TEAM</h4>
            <div className="flex flex-wrap justify-center gap-12">
              {team.map((member, i) => (
                <FadeIn key={member.name} delay={i * 0.1}>
                  <div className="text-center group w-64">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl shadow-slate-200/50">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0A66C2] flex items-center justify-center hover:scale-110 transition-transform">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <h5 className="text-xl font-bold text-navy">{member.name}</h5>
                    <p className="text-slate-500">{member.title}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Combined Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-display font-bold text-navy mb-2">Get In Touch</h2>
                <p className="text-slate-500 mb-8">Have a question or want to partner with us? Drop us a line.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-navy">First Name</label>
                      <Input placeholder="John" required className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-navy">Last Name</label>
                      <Input placeholder="Doe" required className="bg-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">Email Address</label>
                    <Input type="email" placeholder="john@example.com" required className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">Message</label>
                    <Textarea placeholder="How can we help you?" rows={5} required className="bg-white resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25">
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Social & Contact Info */}
            <FadeIn direction="left">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-display font-bold text-navy mb-8">Stay Connected</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <a href="https://www.instagram.com/vishnu_venture_labs_foundation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="block group">
                      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-px rounded-2xl">
                        <div className="bg-white rounded-[15px] p-6 h-full flex flex-col items-center justify-center text-center gap-4">
                          <Instagram className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-bold text-navy">Instagram</p>
                            <p className="text-xs text-slate-500 truncate max-w-[150px]">@vishnuventurelabs</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/" target="_blank" rel="noreferrer" className="block group">
                      <div className="bg-[#0A66C2] p-px rounded-2xl">
                        <div className="bg-white rounded-[15px] p-6 h-full flex flex-col items-center justify-center text-center gap-4">
                          <Linkedin className="w-10 h-10 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                          <div>
                            <p className="font-bold text-navy">LinkedIn</p>
                            <p className="text-xs text-slate-500 truncate max-w-[150px]">VVLF</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-navy text-white p-8 rounded-3xl shadow-xl">
                  <h4 className="font-display font-bold text-xl mb-6">Contact Information</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Meet Us</p>
                        <p className="text-slate-300 text-sm">Vishnu Venture Labs Foundation, Vishnupur, Narsapur, Suryapaget - 502313</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Call Us</p>
                        <p className="text-slate-300 text-sm">+91 98765 43210</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email Us</p>
                        <p className="text-slate-300 text-sm">vvlf@bvrit.ac.in</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>
    </>
  );
}
