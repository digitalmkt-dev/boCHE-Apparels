import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#1A1A1A] text-slate-300">
      <div
        className="
          mx-auto
          max-w-[1140px]
          px-5
          py-10

          sm:px-6

          md:px-8
          md:py-12

          lg:px-8
          lg:py-14
        "
      >
        <div
          className="
            grid
            grid-cols-1

            md:grid-cols-12
            md:gap-x-6
            md:gap-y-8

            lg:grid-cols-[1.3fr_0.7fr_1.3fr_0.8fr]
            lg:gap-x-12
            lg:gap-y-0
            lg:items-start
          "
        >
          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              text-center

              border-b
              border-[#2A2A2A]
              pb-8

              md:col-span-12
              md:pb-9

              lg:col-span-1
              lg:items-start
              lg:border-b-0
              lg:pb-0
              lg:text-left
            "
          >
            <Link
              href="/"
              className="
                inline-flex
                flex-col
                items-center

                lg:items-start
              "
            >
              <Image
                src="/logo/bocheapprels2.webp"
                alt="boCHE Apparels Logo"
                width={140}
                height={42}
                unoptimized
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain"
              />

              <span
                className="
                  mt-2
                  block

                  font-label
                  text-[8px]
                  uppercase
                  tracking-[0.18em]

                  text-slate-400

                  sm:text-[8.5px]
                  md:text-[9px]
                  lg:text-[10px]
                "
              >
                Industrial Craft Garment Unit
              </span>
            </Link>

            <p
              className="
                mx-auto
                mt-4
                max-w-[330px]

                font-body
                text-[11.5px]
                leading-[1.65]

                text-slate-300

                sm:max-w-[360px]
                sm:text-[12px]

                md:max-w-[470px]
                md:text-[12.5px]

                lg:mx-0
                lg:max-w-[310px]
                lg:text-[13px]
              "
            >
              {COMPANY_INFO.description}
            </p>

            {/* Badges */}
            <div
              className="
                mt-4
                flex
                flex-nowrap
                items-center
                justify-center
                gap-1.5
                sm:gap-2

                font-label

                lg:justify-start
              "
            >
              {COMPANY_INFO.certifications?.map((cert, idx) => (
                <span
                  key={idx}
                  className="
                    inline-flex
                    whitespace-nowrap
                    shrink-0
                    min-h-[26px]
                    items-center
                    gap-1
                    sm:gap-1.5

                    rounded-full
                    border
                    border-[#3A3A3A]

                    bg-[#2A2A2A]/80

                    px-2.5
                    sm:px-3
                    py-1

                    text-[8.5px]
                    font-medium

                    text-[#FBE87E]

                    sm:text-[9.5px]
                    md:text-[10px]
                    lg:text-[11px]
                  "
                >
                  <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-[#FBE87E]" />

                  {cert.name}
                </span>
              ))}
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div
            className="
              border-b
              border-[#2A2A2A]

              py-7

              md:col-span-4
              md:border-b-0
              md:py-0

              lg:col-span-1
              lg:pt-14
            "
          >
            <h4
              className="
                mb-5
                border-l-2
                border-[#FBE87E]

                pl-3

                text-left
                font-headline
                text-[11px]
                font-bold
                uppercase
                tracking-wider

                text-white

                sm:text-[11.5px]
                md:text-[12px]
                lg:text-sm
              "
            >
              QUICK LINKS
            </h4>

            <ul
              className="
                grid
                grid-cols-2

                gap-x-10
                gap-y-3

                text-left
                font-label
                text-[11px]

                sm:text-[11.5px]

                md:grid-cols-1
                md:text-[12px]

                lg:text-[13px]
              "
            >
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[#FBE87E]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-[#FBE87E]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/catalog"
                  className="transition-colors hover:text-[#FBE87E]"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-[#FBE87E]"
                >
                  Facilities
                </Link>
              </li>

              <li>
                <Link
                  href="/clients"
                  className="transition-colors hover:text-[#FBE87E]"
                >
                  Clients
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#FBE87E]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div
            className="
              border-b
              border-[#2A2A2A]

              py-7

              md:col-span-8
              md:border-b-0
              md:py-0

              lg:col-span-1
              lg:pt-14
            "
          >
            <h4
              className="
                mb-5

                border-l-2
                border-[#FBE87E]

                pl-3

                text-left
                font-headline
                text-[11px]
                font-bold
                uppercase
                tracking-wider

                text-white

                sm:text-[11.5px]
                md:text-[12px]
                lg:text-sm
              "
            >
              CONTACT US
            </h4>

            <ul
              className="
                space-y-4

                text-left
                font-body
                text-[11px]

                sm:text-[11.5px]
                md:text-[12px]
                lg:text-[13px]
              "
            >
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-[#FBE87E]

                    md:h-[17px]
                    md:w-[17px]
                  "
                />

                <span className="max-w-[340px] leading-[1.6] text-slate-300">
                  <strong
                    className="
                      mb-1
                      block
                      font-label
                      text-[11px]
                      text-white

                      sm:text-[11.5px]
                      md:text-[12px]
                      lg:text-[13px]
                    "
                  >
                    Address:
                  </strong>

                  No. 10, Poonthottam, Murugampalayam,
                  <br />
                  Kumar Nagar Extn, Tirupur, Tamil Nadu – 641603, India
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-[#FBE87E]

                    md:h-[17px]
                    md:w-[17px]
                  "
                />

                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="text-slate-300 transition-colors hover:text-[#FBE87E]"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail
                  className="
                    h-4
                    w-4
                    shrink-0
                    text-[#FBE87E]

                    md:h-[17px]
                    md:w-[17px]
                  "
                />

                <a
                  href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                  className="
                    break-all
                    text-slate-300
                    transition-colors
                    hover:text-[#FBE87E]

                    sm:break-normal
                  "
                >
                  Mail us: {COMPANY_INFO.contact.salesEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* =====================================================
              GROUP
          ===================================================== */}

          <a
            href="https://www.chemmanurinternationalgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              flex-col
              items-center

              border-b
              border-[#2A2A2A]

              py-8
              text-center
              group
              cursor-pointer
              no-underline

              md:col-span-12
              md:mt-2
              md:py-9

              lg:col-span-1
              lg:mt-0
              lg:border-b-0
              lg:py-0
              lg:pt-14
            "
          >
            <span
              className="
                font-label
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]

                text-slate-400

                md:text-[8.5px]
                lg:text-[10px]
              "
            >
              A VENTURE OF
            </span>

            <Image
              src="/logo/group-logo.webp"
              alt="Boby Chemmanur International Group Emblem"
              width={100}
              height={100}
              className="mt-3 h-16 sm:h-20 md:h-22 lg:h-24 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
            />

            <span
              className="
                mt-3
                font-label
                text-[9px]
                font-bold
                leading-[1.35]

                text-slate-300
                group-hover:text-[#FBE87E]
                transition-colors

                md:text-[9.5px]
                lg:text-xs
              "
            >
              Boby Chemmanur
              <br />
              International Group
            </span>
          </a>

          {/* =====================================================
              COPYRIGHT / LEGAL
          ===================================================== */}

          <div
            className="
              flex
              flex-col
              items-center

              gap-4

              pt-7

              text-center
              font-body
              text-[9px]

              text-slate-400

              md:col-span-12
              md:pt-8
              md:text-[9.5px]

              lg:col-span-4
              lg:mt-12
              lg:flex-row
              lg:justify-between
              lg:border-t
              lg:border-[#2A2A2A]
              lg:pt-6
              lg:text-left
              lg:text-xs
            "
          >
            <p className="leading-[1.6]">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights
              Reserved.
              <br className="lg:hidden" /> Industrial Craft Garment Unit.
            </p>

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center

                gap-x-3
                gap-y-2

                font-label
                text-[8.5px]

                text-slate-400

                sm:text-[9px]
                md:text-[9.5px]

                lg:gap-4
                lg:text-xs
              "
            >
              <span className="cursor-pointer transition-colors hover:text-[#FBE87E]">
                Privacy Policy
              </span>

              <span className="text-slate-600">|</span>

              <span className="cursor-pointer transition-colors hover:text-[#FBE87E]">
                Terms of Service
              </span>

              <span className="text-slate-600">|</span>

              <span className="cursor-pointer transition-colors hover:text-[#FBE87E]">
                Supplier Code of Conduct
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}