import React from "react";

import Section from "./section";
import HeroBanner from "./hero-banner";
import BlogBanner from "./blog-banner";
import CardSection from "./card-section";
import TeamSection from "./team-section";
import BlogSection from "./blog-section";
import SectionBucket from "./section-bucket";
import AboutSectionBucket from "./about-section-bucket";
import SectionWithHtmlCode from "./section-with-html-code";
import { GroupedRelatedFile, RenderProps } from "../typescript/component";
import FileItemComponent from "./file-item-component";
import { ExtraParametersProvider } from "../context/extra-parameters-provider";

export default function RenderComponents(props: RenderProps) {
    
  const { pageComponents, blogsPage, contentTypeUid, entryUid, locale } =
    props;
  return (
    <div data-pageref={entryUid} data-contenttype={contentTypeUid} data-locale={locale}>
      {pageComponents?.map((component, key: number) => {
        if (component.hero_banner) {
          return blogsPage ? (
            <BlogBanner
              blog_banner={component.hero_banner}
              key={`component-${key}`}
            />
          ) : (
            <HeroBanner
              hero_banner={component.hero_banner}
              key={`component-${key}`}
            />
          );
        }
        if (component.section) {
          return (
            <Section section={component.section} key={`component-${key}`} />
          );
        }
        if (component.section_with_buckets) {
          return component.section_with_buckets.bucket_tabular ? (
            <AboutSectionBucket
              sectionWithBuckets={component.section_with_buckets}
              key={`component-${key}`}
            />
          ) : (
            <SectionBucket
              section={component.section_with_buckets}
              key={`component-${key}`}
            />
          );
        }
        if (component.from_blog) {
          return (
            <BlogSection blogs={component.from_blog} key={`component-${key}`} />
          );
        }
        if (component.section_with_cards) {
          return (
            <CardSection
              cards={component.section_with_cards.cards}
              key={`component-${key}`}
            />
          );
        }
        if (component.section_with_html_code) {
          return (
            <SectionWithHtmlCode
              embedObject={component.section_with_html_code}
              key={`component-${key}`}
            />
          );
        }
        if (component.our_team) {
          return (
            <TeamSection
              ourTeam={component.our_team}
              key={`component-${key}`}
            />
          );
        }
        if (component.grouped_related_documents) {
          const fileList = component
            .grouped_related_documents
            .files?.map((groupedFile: GroupedRelatedFile, index: number) => {
              return (
                <ExtraParametersProvider {...groupedFile.$?.title as {}} key={"grouped_related_document_" + index}>
                  <FileItemComponent {...groupedFile} />
                </ExtraParametersProvider>
              );
            });

          return (
            <div className='related-documents-section' key="grouped_related_documents">
              <h3>Grouped Related Files</h3>
              <div className='related-documents-content'>
                {fileList}
              </div>
            </div>
          );
        }
        if (component.related_files) {
          const fileList = component
            .related_files
            .file_reference?.map((file: GroupedRelatedFile, index: number) => {
              return (
                <ExtraParametersProvider {...file.$?.title as {}} key={"related_files_" + index}>
                  <FileItemComponent {...file} />
                </ExtraParametersProvider>
              );
            });

          return (
            <div className='related-documents-section' key="related_files_section">
              <h3>Related Files</h3>
              <div className='related-documents-content'>
                {fileList}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
