"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Facebook, Send, PanelLeft } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { UseEmblaCarouselType } from 'embla-carousel-react'
type EmblaCarouselType = UseEmblaCarouselType[1]

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)
  // For carousel auto-slide
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType | undefined>()

  useEffect(() => {
    if (!carouselApi) return
    const interval = setInterval(() => {
      carouselApi.scrollNext()
    }, 4000) // 4 seconds per slide
    return () => clearInterval(interval)
  }, [carouselApi])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex w-full justify-between items-center md:w-auto">
            <Link href="#" className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4 md:mb-0" prefetch={false}>
              Teshome A.B. Consulting
            </Link>
            {/* Hamburger menu button for mobile */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <PanelLeft className="h-7 w-7" />
            </button>
          </div>
          {/* Navigation links */}
          <div
            className={`${menuOpen ? "flex" : "hidden"} flex-col w-full mt-2 md:mt-0 md:flex md:flex-row md:items-center md:justify-center md:gap-x-6 md:gap-y-0 gap-x-0 gap-y-2 text-center bg-white/90 dark:bg-gray-900/90 md:bg-transparent md:dark:bg-transparent rounded md:rounded-none shadow md:shadow-none py-2 md:py-0`}
          >
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors text-base md:text-lg"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors text-base md:text-lg"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors text-base md:text-lg"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors text-base md:text-lg"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors text-base md:text-lg"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors text-base md:text-lg"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <header className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <Avatar className="h-32 w-32 mb-6 border-4 border-white shadow-lg">
            <AvatarImage src="/teshome.jpg?height=128&width=128" alt="Teshome Ababa Beyene" />
            <AvatarFallback className="bg-gray-700 text-white text-4xl">TB</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">TESHOME ABABA BEYENE</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6">
            General Management & Finance Consulting
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-8 px-2">
            Empowering businesses with strategic financial insights and robust operational leadership for sustainable
            growth in dynamic markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-400 px-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <a href="tel:+251912163396" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span>+251-912-16-33-96</span>
            </a>
            <a href="tel:+251911710041" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span>+251-911-71-00-41</span>
            </a>
            <a
              href="mailto:teshomeab5@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>teshomeab5@gmail.com</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 grid gap-12">
        {/* About Us Section (repurposed from Professional Summary) */}
        <section id="about" className="grid gap-4">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">About Us</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With over <strong className="font-semibold">30 years of progressive experience</strong> in the banking,
            finance, and development sectors, Teshome Ababa Beyene offers unparalleled expertise in guiding
            organizations through complex financial landscapes and operational challenges. Born on December 8, 1968, in
            Asela Town, Teshome is a married professional dedicated to delivering excellence.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our approach is rooted in proven leadership, strategic foresight, and a deep commitment to client success.
            We specialize in <strong className="font-semibold">corporate finance, strategic decision-making</strong>,
            and <strong className="font-semibold">organizational development</strong>, providing tailored solutions that
            drive growth, manage risk, and align operational practices with your institutional goals. Currently serving
            as General Manager for Kumneger Trading PLC and Asset Minerals PLC, Teshome Ababa Beyene actively provides{" "}
            <strong className="font-semibold">business advisory</strong> on finance and banking, leveraging extensive
            hands-on experience to deliver tangible results.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="grid gap-6">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Strategic Financial Consulting</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Expert guidance on corporate finance, investment strategies, and financial restructuring to optimize
                  performance and achieve long-term objectives. We help businesses navigate complex financial landscapes
                  and make informed decisions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">General Management & Leadership</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Providing interim or advisory general management to streamline operations, enhance team performance,
                  and drive organizational efficiency. Our leadership insights foster a culture of excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Risk Assessment & Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Comprehensive analysis and development of robust risk mitigation strategies to safeguard assets and
                  ensure business continuity. We identify potential threats and build resilient frameworks.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Loan & Investment Appraisal</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Thorough evaluation of loan applications and investment opportunities to ensure sound financial
                  decisions and maximize returns. Our meticulous appraisal process minimizes risks.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Business Advisory & Development</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Strategic advice on market entry, business expansion, and client relationship management to foster
                  sustainable growth and market presence. We help you unlock new opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Organizational Development</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Building high-performing teams and implementing change management strategies to enhance organizational
                  effectiveness and adaptability. We empower your workforce for future challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="grid gap-6">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Professional Experience
          </h3>
          <div className="grid gap-8">
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">General Manager</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Kumneger Trading PLC</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2024 – Present</p>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Leading overall business and finance operations.</li>
                  <li>Providing strategic direction for growth and profitability.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">General Manager</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Asset Minerals PLC</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2024 – Present</p>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Overseeing general management and strategic initiatives.</li>
                  <li>Actively involved in business advisory on finance and banking.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Director, Development Financing and Advisory Department
                </CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Amhara Bank S.C | Addis Ababa</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">December 1, 2021 – January 31, 2024</p>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Oversaw development finance strategies and advisory services.</li>
                  <li>Managed loan structuring and institutional partnerships.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Director</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Ethio-Capital and Investment PLC (Subsidiary of DBE) | Addis Ababa
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">July 19, 2017 – October 31, 2021</p>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Directed operations of the investment arm of the Development Bank of Ethiopia.</li>
                  <li>Facilitated financing for capital projects and new ventures.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Detailed DBE Experience */}
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Development Bank of Ethiopia (DBE)</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Various Locations</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">November 1, 1988 – July 18, 2017</p>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold">Corporate Approval Team Member (Director Level)</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      (December 29, 2016 – July 18, 2017)
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Regional/District Manager – Jimma District</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      (March 2, 2014 – December 28, 2016)
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Branch Manager – Dire Dawa Branch</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">(July 15, 2009 – March 1, 2014)</span>
                  </li>
                  <li>
                    <strong className="font-semibold">Branch Manager – Harar Branch</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">(August 20, 2007 – July 14, 2009)</span>
                  </li>
                  <li>
                    <strong className="font-semibold">Senior Client Relation Officer – Head Office</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      (December 1, 2006 – August 19, 2007)
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Loan Officer – Harar Branch</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      (December 1, 1999 – November 30, 2006)
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Jr. Loan Officer – Gelemso Branch</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">(July 1, 1998 – October 31, 1999)</span>
                  </li>
                  <li>
                    <strong className="font-semibold">Technician II – Harar Branch</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      (November 20, 1995 – June 30, 1998)
                    </span>
                  </li>
                  <li>
                    <strong className="font-semibold">Technician I – Harar Branch</strong>{" "}
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      (November 1, 1988 – November 19, 1995)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="grid gap-4">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">MBA – Non-Profit Corporate Management</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Foundation for Academic Excellence Ministry</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2011–2013</p>
              </CardHeader>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">BA in Economics</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Haramaya University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2004–2006</p>
              </CardHeader>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Diploma in Accounting</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Haramaya University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2000–2003</p>
              </CardHeader>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Diploma in Rural Economy and Social Development (RESD)
                </CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400">Haramaya University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">1987–1988</p>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Certifications & Training */}
        <section id="certifications" className="grid gap-4">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Certifications & Training
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              Certificate in Basic Computer Knowledge (Ms-Dos, Windows, Word, Excel, Amharic Digital, and introduction
              to computer) from DBE (Addis Ababa).
            </li>
            <li>
              Certificate in Domestic Banking practice from Ethiopian Institute of Banking and Insurance (EIBI) Addis
              Ababa.
            </li>
            <li>
              Certificate in Effective Customer service from Pro-Impact Business and Development Consultant (Addis
              Ababa).
            </li>
            <li>
              Certificate in Team Building, Change Management, and Leadership from Development Bank of Ethiopia, in
              cooperation with professional from Ethiopian Management institute (Addis Ababa).
            </li>
            <li>
              Certificate in Risk management strategies in Banks from NABARD CONSULTANCY SERVICES (India, Mumbai).
            </li>
            <li>
              Certificate in build leaders of strong moral character, integrity and Competency. Organized by The Great
              Commission Ministry-Ethiopia (Executive Ministry Networking), Addis Ababa.
            </li>
            <li>Certificate in Strategic leadership from Ethiopian Aviation Academy (Addis Ababa).</li>
            <li>Certificate in Strategic Decision Making and Problem Solving from CaFEC (Addis Ababa).</li>
          </ul>
        </section>

        {/* Skills & Competencies (renamed to Expertise) */}
        <section id="skills" className="grid gap-4">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">Our Expertise</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Strategic Planning & Execution
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Corporate and Development Finance
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Leadership & Team Development
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Risk Assessment & Management
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Loan & Investment Appraisal
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Financial Advisory & Business Consulting
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Client Relations & Stakeholder Engagement
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Strong Knowledge of Ethiopian Banking and Investment Landscape
            </Badge>
          </div>
        </section>

        {/* Testimonials Section (now a carousel) */}
        <section id="testimonials" className="grid gap-6">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Client Testimonials
          </h3>
          <Carousel className="w-full max-w-3xl mx-auto" setApi={setCarouselApi}>
            <CarouselContent>
              <CarouselItem>
                <Card className="bg-white dark:bg-gray-800 shadow-md">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                      "Teshome is an exceptional leader with deep financial acumen. His strategic vision and ability to
                      drive results have been invaluable in every role he's undertaken. A true asset to any
                      organization."
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-gray-50">Dereje Awgechew</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Vice President, Project Financing – Development Bank of Ethiopia
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="bg-white dark:bg-gray-800 shadow-md">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                      "Working with Teshome has always been a pleasure. His dedication to client service and his
                      profound understanding of the banking sector set him apart. He consistently delivers excellence."
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-gray-50">Bizuayehu Seyoum</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Chief Banking Business Officer – Amhara Bank
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* Add more testimonials here if available */}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        </section>

        {/* Contact Information */}
        <section id="contact" className="grid gap-6">
          <h3 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-700 pb-2">Contact Us</h3>
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Get in Touch</h4>
                <div className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <a href="mailto:teshomeab5@gmail.com" className="hover:underline">
                    teshomeab5@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <a href="tel:+251912163396" className="hover:underline">
                    +251-912-16-33-96
                  </a>{" "}
                  /{" "}
                  <a href="tel:+251911710041" className="hover:underline">
                    +251-911-71-00-41
                  </a>
                </div>
                <div className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="grid gap-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Connect with Us</h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/teshome-ababa-beyene-placeholder" // Placeholder LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="h-7 w-7" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com/teshome.ababa.placeholder" // Placeholder Facebook
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="h-7 w-7" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://t.me/teshomeababa_placeholder" // Placeholder Telegram
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Send className="h-7 w-7" />
                    <span className="sr-only">Telegram</span>
                  </a>
                  {/* Add more social media links as needed */}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="w-full py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="container mx-auto px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} Teshome Ababa Beyene. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
