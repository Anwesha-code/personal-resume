import { getTimeline } from "@/lib/utils";
import PixelWindow from "@/components/ui/PixelWindow";
import SectionHeading from "@/components/ui/SectionHeading";
import { PixelTree } from "@/components/ui/PixelIcons";

export default function TimelineSection() {
  const timeline = getTimeline();

  return (
    <section id="journey" className="mt-14 scroll-mt-24 px-3">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Journey.exe"
          title="Take a little walk with me"
          description="A little trail covering my journey."
        />

        <PixelWindow appName="journey-map" icon="🌳">
          <ol className="relative ml-3 space-y-8 border-l-4 border-dashed border-mint-deep pl-8 sm:ml-6 sm:pl-10">
            {timeline.map((entry) => (
              <li key={`${entry.kind}-${entry.id}`} className="relative">
                <span className="absolute -left-[46px] top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cocoa bg-cream shadow-pixel sm:-left-[54px]">
                  <span aria-hidden="true">{entry.icon}</span>
                </span>
                <span className="absolute -left-[70px] -top-1 hidden sm:block" aria-hidden="true">
                  <PixelTree size={2} />
                </span>

                <div className="rounded-xl border-2 border-cocoa bg-cream p-4 shadow-pixel">
                  <p className="mb-1 font-chrome text-[10px] uppercase tracking-widest text-plum">
                    {entry.kind === "education" ? "Education" : "Internship"}
                    {entry.period ? ` · ${entry.period}` : ""}
                  </p>

                  {entry.kind === "education" ? (
                    <>
                      <h3 className="font-display text-lg font-semibold text-cocoa">{entry.institution}</h3>
                      <p className="font-body text-sm text-plum">{entry.degree}</p>
                      <p className="mt-1 font-body text-sm font-semibold text-cocoa">{entry.detail}</p>
                      {entry.highlight && (
                        <p className="mt-1 font-body text-xs italic text-petal-deep">🏅 {entry.highlight}</p>
                      )}
                    </>
                  ) : (
                    <>
                      <h3 className="font-display text-lg font-semibold text-cocoa">
                        {entry.role} · {entry.company}
                      </h3>
                      <p className="font-body text-xs text-plum">{entry.location}</p>
                      <ul className="mt-2 list-inside list-disc space-y-1 font-body text-sm text-plum">
                        {entry.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      {entry.certificateNote && (
                        <p className="mt-2 font-body text-xs italic text-petal-deep">📄 {entry.certificateNote}</p>
                      )}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </PixelWindow>
      </div>
    </section>
  );
}
