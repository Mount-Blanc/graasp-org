// eslint disable below due to conflict between prettier and eslint within Trans components
// format below is the one generated by prettier
// be careful with changing line sturcture below: i18n translations reference specific nodes

/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

import { Section, Container } from '@components/global';

import { useTranslation, Trans } from 'react-i18next';

import FaqItem from '@common/FaqItem';

const Faq = () => {
  const { t } = useTranslation();

  return (
    <Section id="faq">
      <Container>
        <h1 style={{ marginBottom: 40, color: '#211E26' }}>
          {t('Frequently Asked Questions')}
        </h1>
        <div>
          <FaqItem title={t('What are Graasp’s platforms?')}>
            <Trans>
              The Graasp Association&apos;s flagship product is{' '}
              <a
                href="https://graasp.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Graasp
              </a>
              , a digital education platform accessible on web, mobile, and
              desktop devices, prepackaged with a suite of integrated learning
              applications.
            </Trans>
          </FaqItem>
          <FaqItem title={t('What is Graasp?')}>
            <Trans>
              <a
                href="https://graasp.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Graasp
              </a>{' '}
              is a platform on which you can create your own digital educational
              activities and resources. To get you started, Graasp provides
              templates for various learning scenarios, which you can adapt to
              your needs. You can privately share these resources with your
              students—or make them available to the rest of the world.
            </Trans>
          </FaqItem>
          <FaqItem title={t('How can I get started?')}>
            <Trans>
              You can try our platforms for free by signing up{' '}
              <a
                href="https://auth.graasp.org/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Trans>
          </FaqItem>
          <FaqItem title={t('How much does it cost?')}>
            <Trans>
              You can get started on{' '}
              <a
                href="https://graasp.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Graasp
              </a>{' '}
              for free! Access to premium features—such as learning analytics
              and personalized learning spaces—starts at 5 CHF per registered
              user per month. Institutions can benefit from packages and on-site
              licenses for their teachers. Graasp also provides financial
              support for non-profit activities. Please contact us at{' '}
              <a href="mailto: contact@graasp.org">contact@graasp.org</a> for
              more information.
            </Trans>
          </FaqItem>
          <FaqItem title={t('Do you provide training?')}>
            <Trans>
              Yes! We understand that institutions and educators have varying
              levels of experience with digital education. Please contact us at{' '}
              <a href="mailto: contact@graasp.org">contact@graasp.org</a> to
              learn more about how we can help you with training.
            </Trans>
          </FaqItem>
          <FaqItem title={t('Where is Graasp based?')}>
            <Trans>
              We are based in Lausanne, Switzerland. Our platforms are compliant
              with European regulations, including GDPR.
            </Trans>
          </FaqItem>
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
