import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/slice-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slides.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'AutoCharge Minning Data Services';
const description =
  'We create an app that automatically verifies and uploads the necessary documentation for contractors to different mining companies.Saving our clients labor costs associated with this task.';
const roles = [
  'Automated Verification',
  'Minimization of Labor Costs',
  'Simplified Processes',
  'Bot WhatsApp',
  'Minning Resources',
];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Your Best Secretary</ProjectSectionHeading>
              <ProjectSectionText>
                Launch a bot on WhatsApp and start to asking about how is the state of
                documentation and check if there is any problems. Or try ask him for
                upload info, in few steps and messages the documents automatically uploads
                to the minning documentation plataform.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow companies to save time and money in repetitive
                tasks
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Upload Big Amount of Documentation in Excel
              </ProjectSectionHeading>
              <ProjectSectionText>
                It has the ability to simplify and streamline the process of mass
                uploading documentation on multiple platforms of mining companies. With a
                simple Excel file, users can specify the mining company, the type of
                procedure or document, the period to which the documentation corresponds,
                and the name of the file in PDF format or image that they wish to upload.
                This functionality eliminates the complexity of uploading large quantities
                of documents, having one or more people uploading a document at a time,
                allowing efficient and accurate management on various platforms, thus
                optimizing compliance with requirements in the mining sector."
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>
                Sending Info Resume to an Specific Number
              </ProjectSectionHeading>
              <ProjectSectionText>
                A notable feature of our app is the ability to send a detailed summary of
                the requested information to a specific number. This summary is organized
                by each resource, whether a worker or a vehicle, and provides a clear,
                segmented list of missing or expired documentation. Each message sent to
                the designated number carefully separates all pending or expired
                documentation, ensuring efficient and timely management of regulatory
                compliance for each resource, thus simplifying the monitoring process and
                guaranteeing compliance with requirements in the mining sector.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        {/*<ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Real-time collaborative annotation facilitated better collaboration
                between learners, and was much easier to run group exercises with the new
                shared layers feature. Learners gave feedback that is was enjoyable to
                work together and see what others were doing, and liked how interactive
                and easy to use the application was.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
  </ProjectSection>*/}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
