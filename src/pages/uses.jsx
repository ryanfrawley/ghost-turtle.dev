import Head from "next/head";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Ryan Frawley</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="Here’s a big list of all of my favorite stuff that helps me be productive."
      >
        <div className="space-y-20">
          <ToolsSection title="Coffee">
            <Tool title="Profitec Pro 600 Espresso Machine">
              This chromed-out beauty is equipped with a dual boiler so you can
              independently set the steam and brew temps, a necessity for a
              perfectly-extracted shot.
            </Tool>
            <Tool title="Eureka Mignon Specialita Grinder">
              The Mignon is a well-designed grinder with 55m burrs. I added an
              aftermarket bellows to reduce the retention to practically zero.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
              Say good bye to compilation times, fan noise, and burnt thighs.
              This baby is much faster, quieter, and cooler than its Intel
              predecessor.
            </Tool>
            <Tool title="LG 38WN95C-W 38&quot; UltraWide Monitor">
              One of the only 144hz 4K monitors that also supports 98% of the
              DCI-P3 color space. This monitor is a workhorse for both coding
              and graphic design.
            </Tool>
            <Tool title="Drop ALT with Cherry MX Blue switches &amp; Susuwatari MT3 caps">
              I love the minimalism of the Drop keyboards, I make up for it with
              the extra loud <i>clack</i> of the Cherry Blues.
            </Tool>
            <Tool title="Logi MX Master 3">
              A very comfortable mouse with great battery life. What more do you
              need?
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Neovim">
              Neovim has totally replaced my use of VSCode. It runs
              lightning-fast, but takes a bit of time to get it customized to
              your liking. My config is open-sourced{" "}
              <a
                className="underline underline-offset-1"
                href="https://github.com/ryanfrawley/.config"
              >
                here
              </a>.
            </Tool>
            <Tool title="Alacritty">
              A minimalist terminal emulator with hardware-acceleration.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Magnet">
              An awesome window organizer for MacOS. Great for multi-monitor
              setups.
            </Tool>
            <Tool title="Todoist">
              A simple and practical todo app that syncs between your devices.
              Also has the ability to assign family members to tasks.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
