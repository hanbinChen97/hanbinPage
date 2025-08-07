import {FC, memo} from "react";

import {getLocalizedData, SectionId} from "../../../data/localizedData";
import {getTranslations} from "../../../i18n/translations";
import Section from "../../Layout/Section";
import ResumeSection from "./ResumeSection";
import TimelineItem from "./TimelineItem";

interface ResumeProps {
  locale: string;
}

const Resume: FC<ResumeProps> = memo(({locale}) => {
  const {education, experience} = getLocalizedData(locale);
  const t = getTranslations(locale);
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={t.resume.education}>
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t.resume.experience}>
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = "Resume";
export default Resume;
