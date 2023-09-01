import "../index.css";
import SvgIcon from "./SvgIcon";

const workExperiences = [
  {
    title: "Volunteering Executive",
    company: "Vaishno Devi Temple, Oakville",
    duration: "July 2022 - August 2023",
    responsibilities: [
      "Organized and delegated tasks to volunteers, overseeing activities like cleaning, serving, gardening, etc.",
      "Enhanced temple operations by collaborating on executive presentations, forms, and event coordination",
      "Demonstrated strong organizational abilities through contributions to major events, including Diwali celebration and weddings",
    ],
    icon: (
      <SvgIcon
        className="icon icon-tabler icon-tabler-om w-4 h-4 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 12c2.21 0 4 -1.567 4 -3.5s-1.79 -3.5 -4 -3.5c-1.594 0 -2.97 .816 -3.613 2" />
        <path d="M3.423 14.483a4.944 4.944 0 0 0 -.423 2.017c0 2.485 1.79 4.5 4 4.5s4 -2.015 4 -4.5s-1.79 -4.5 -4 -4.5" />
        <path d="M14.071 17.01c.327 2.277 1.739 3.99 3.429 3.99c1.933 0 3.5 -2.239 3.5 -5s-1.567 -5 -3.5 -5c-.96 0 -1.868 .606 -2.5 1.5c-.717 1.049 -1.76 1.7 -2.936 1.7c-.92 0 -1.766 -.406 -2.434 -1.087" />
        <path d="M17 3l2 2" />
        <path d="M12 3c1.667 3.667 4.667 5.333 9 5" />
      </SvgIcon>
    ),
  },
  {
    title: "Artist Liaison & Production Assistant",
    company: "Hamilton Fringe Festival",
    duration: "July 2022 - August 2022",
    responsibilities: [
      "Managed artist logistics including accommodations, transportation, and schedules for streamlined event operations",
      "Supported event setup, stage management, and audio equipment to enhance performance success",
      "Ensured artists' technical needs and backstage requirements were met through close collaboration with production teams",
    ],
    icon: (
      <SvgIcon
        className="icon icon-tabler icon-tabler-music w-4 h-4 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
        <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
        <path d="M9 17v-13h10v13"></path>
        <path d="M9 8h10"></path>
      </SvgIcon>
    ),
  },
  {
    title: "VP of Technology & Marketing",
    company: "Unlock, JA Company Program",
    duration: "November 2021 - April 2022",
    responsibilities: [
      "Co-founded and led student-run company, Unlock, addressing can-opening challenges for physically weak individuals",
      "Developed Unlock Tab for arthritis patients, children, and those with motor skill difficulties",
      "Managed end-to-end processes: product design, research, marketing, and shipping",
      "Established and customized online store using Shopify, incorporating unique design and branding through Liquid template language",
      "Integrated payment gateways, shipping solutions, and inventory management on Shopify platform",
      "Utilized Adobe tools for logo design, advertisements, and marketing materials, ensuring high-quality visuals",
    ],
    icon: (
      <SvgIcon
        className="icon icon-tabler icon-tabler-om w-4 h-4 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"></path>
        <path d="M12 11.875l3 -1.687"></path>
        <path d="M12 11.875v3.375"></path>
        <path d="M12 11.875l-3 -1.687"></path>
        <path d="M12 11.875l3 1.688"></path>
        <path d="M12 8.5v3.375"></path>
        <path d="M12 11.875l-3 1.688"></path>
        <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"></path>
      </SvgIcon>
    ),
  },
];

export default workExperiences;
