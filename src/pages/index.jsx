import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import logoClickTherapeutics from "@/images/logos/click-therapeutics.svg";
import logoTreasuryPrime from "@/images/logos/treasury-prime.svg";
import logoBitFrame from "@/images/logos/bitframe.svg";
import logoEndava from "@/images/logos/endava.svg";
import logoValtech from "@/images/logos/valtech.svg";
import logoFedex from "@/images/logos/fedex.svg";
import logoAws from "@/images/logos/aws.svg";
import logoMajesco from "@/images/logos/majesco.svg";
import logoScaledAgile from "@/images/logos/scaled-agile.svg";
import ghostTurtle from "@/images/ghost-turtle.svg";
import shadow from "@/images/shadow.svg";
import image1 from "@/images/photos/0.jpg";
import image2 from "@/images/photos/1.jpg";
import image3 from "@/images/photos/2.jpg";
import image4 from "@/images/photos/3.jpg";
import image5 from "@/images/photos/6.jpg";
import { formatDate } from "@/lib/formatDate";
import { generateRssFeed } from "@/lib/generateRssFeed";
import { getAllArticles } from "@/lib/getAllArticles";
import { GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from "@/utils/socials";

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function CertIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
      <path
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
      />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function ResumeSection({ icon: Icon, name, children }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Icon className="h-6 w-6 flex-none" />
        <span className="ml-3">{name}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {children}
      </ol>
    </div>
  );
}

function Certifications() {
  let certs = [
    {
      name: "AWS Solutions Architect Associate",
      year: "2021",
      logo: logoAws,
    },
    {
      name: "Scaled Agile Scrum Master",
      year: "2019",
      logo: logoScaledAgile,
    },
  ];

  return (
    <ResumeSection name="Certifications" icon={CertIcon}>
      {certs.map((cert, index) => (
        <li key={index} className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={cert.logo} alt="" className="h-7 w-7" unoptimized />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Name</dt>
            <dd className="flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {cert.name}
            </dd>
            <dt className="sr-only">Attained</dt>
            <dd
              className="ml-auto flex items-center text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={cert.year}
            >
              <time dateTime={cert.year}>
                {cert.year}
              </time>
            </dd>
          </dl>
        </li>
      ))}
    </ResumeSection>
  );
}

function Jobs() {
  let jobs = [
    {
      company: "BitFrame",
      title: "Sole-proprietor",
      logo: logoBitFrame,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Click Therapeutics",
      title: "Senior React Native Engineer",
      logo: logoClickTherapeutics,
      start: "2023",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Treasury Prime",
      title: "Frontend Team Lead",
      logo: logoTreasuryPrime,
      start: "2022",
      end: "2023",
    },
    {
      company: "Endava",
      title: "Engineering Manager",
      logo: logoEndava,
      start: "2019",
      end: "2022",
    },
    {
      company: "Valtech Solutions",
      title: "Senior Software Engineer",
      logo: logoValtech,
      start: "2017",
      end: "2019",
    },
    {
      company: "Majesco",
      title: "Mobile Architect",
      logo: logoMajesco,
      start: "2015",
      end: "2017",
    },
    {
      company: "FedEx Trade Networks",
      title: "Junior Engineer",
      logo: logoFedex,
      start: "2014",
      end: "2017",
    },
  ];

  return (
    <ResumeSection name="Work Experience" icon={BriefcaseIcon}>
      {jobs.map((role, roleIndex) => (
        <li key={roleIndex} className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              {role.title}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${role.start.label ?? role.start} until ${
                role.end.label ?? role.end
              }`}
            >
              <time dateTime={role.start.dateTime ?? role.start}>
                {role.start.label ?? role.start}
              </time>{" "}
              <span aria-hidden="true">—</span>{" "}
              <time dateTime={role.end.dateTime ?? role.end}>
                {role.end.label ?? role.end}
              </time>
            </dd>
          </dl>
        </li>
      ))}
    </ResumeSection>
  );
}

function Resume() {
  return (
    <>
      <Jobs />
      <Certifications />
    </>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Ryan Frawley - Software designer, solo founder, and espresso
          afficionado
        </title>
        <meta
          name="description"
          content="I’m Ryan, a software designer and entrepreneur based in Miami. I’m the solo-founder of BitFrame, a SaaS platform for professional photographers to manage their studios."
        />
      </Head>
      <Container className="mt-9">
        <div className="flex">
          <div className="w-full max-w-2xl flex-shrink-0">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Software designer, founder, & espresso{" "}
              <strike className="text-gray-400">snob</strike> enthusiast
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Hi, I’m Ryan, a software designer and entrepreneur based in Miami.
              I’m the founder of BitFrame, where we build software for
              photographers to manage their studio and deliverables.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href={TWITTER}
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href={INSTAGRAM}
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href={GITHUB}
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href={LINKEDIN}
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
          <div className="w-full max-h-full justify-end hidden md:flex">
            <Image
              src={ghostTurtle}
              className="max-w-full max-h-[350px] -mt-10 animate-ghost"
            />
            <Image
              src={shadow}
              className="absolute bottom-0 max-w-full max-h-[350px] -mt-10 animate-shadow origin-bottom"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-4 lg:pl-16 xl:pl-24">
            <Resume />
            <Button
              href="/ryan-frawley-dark.pdf"
              variant="secondary"
              className="group mt-6 w-full shadow-sm hidden dark:flex"
            >
              Download CV
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
            <Button
              href="/ryan-frawley-light.pdf"
              variant="secondary"
              className="group mt-6 w-full shadow-sm dark:hidden"
            >
              Download CV
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
