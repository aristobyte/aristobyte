"use client";

import * as React from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { HEADER_SIZE } from "@/config";

import { GoBackButton } from "./GoBackButton";

import "./compliance.scss";

const offset = -HEADER_SIZE - 20;

export const PrivacyPolicy = () => (
  <div className="compliance">
    <div className="compliance__container">
      <div className="compliance__document">
        <h1 className="compliance__title">
          <GoBackButton />
          <span>PRIVACY POLICY</span>
        </h1>
        <p className="compliance__date">
          Last updated:&nbsp;<b>19.05.2025</b>
        </p>
        <section>
          <p className="compliance__par">
            This Privacy Policy for <b>AristoByte</b> (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), describes how and why we might
            access, collect, store, use, and/or share (&quot;process&quot;) your
            personal information when you use our services
            (&quot;Services&quot;), including when you:
          </p>
          <p className="compliance__par">
            Questions or concerns? Reading this Privacy Policy will help you
            understand your privacy rights and choices. We are responsible for
            making decisions about how your personal information is processed.
            If you do not agree with our policies and practices, please do not
            use our Services.
          </p>
          <h2 className="compliance__title-small">SUMMARY OF KEY POINTS</h2>
          <p className="compliance__par">
            This summary provides key points from our Privacy Policy, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our&nbsp;
            <Link
              offset={offset}
              className="compliance__link"
              to="table-of-contents"
            >
              table of contents
            </Link>
            &nbsp; &nbsp;below to find the section you are looking for.
          </p>

          <p className="compliance__par">
            What personal information do we process? When you visit, use, or
            navigate our Services, we may process personal information depending
            on how you interact with us and the Services, the choices you make,
            and the products and features you use. Learn more about&nbsp;
            <Link
              offset={offset}
              className="compliance__link"
              to="what-information-do-we-collect"
            >
              personal information you disclose to us
            </Link>
            &nbsp;.
          </p>

          <p className="compliance__par">
            Do we process any sensitive personal information? Some of the
            information may be considered &quot;special&quot; or
            &quot;sensitive&quot; in certain jurisdictions, for example your
            racial or ethnic origins, sexual orientation, and religious beliefs.
            We do not process sensitive personal information.
          </p>
          <p className="compliance__par">
            Do we collect any information from third parties? We may collect
            information from public databases, marketing partners, social media
            platforms, and other outside sources.
          </p>
          <p className="compliance__par">
            How do we process your information? We process your information to
            provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may
            also process your information for other purposes with your consent.
            We process your information only when we have a valid legal reason
            to do so. Learn more about&nbsp;
            <Link
              offset={offset}
              className="compliance__link"
              to="how-do-we-process-your-information"
            >
              how we process your information
            </Link>
            &nbsp;.
          </p>
          <p className="compliance__par">
            In what situations and with which parties do we share personal
            information? We may share information in specific situations and
            with specific third parties. Learn more about&nbsp;
            <Link
              offset={offset}
              className="compliance__link"
              to="when-and-with-who-do-we-share"
            >
              when and with whom we share your personal information
            </Link>
            &nbsp;.
          </p>
          <p className="compliance__par">
            What are your rights? Depending on where you are located
            geographically, the applicable privacy law may mean you have certain
            rights regarding your personal information. Learn more about&nbsp;
            <Link
              offset={offset}
              className="compliance__link"
              to="what-are-your-privacy-rights"
            >
              your privacy rights
            </Link>
            &nbsp;.
          </p>
          <p className="compliance__par">
            How do you exercise your rights? The easiest way to exercise your
            rights is by submitting a&nbsp;
            <NextLink className="compliance__link" href="/dsar">
              data subject access request
            </NextLink>
            &nbsp;, or by contacting us. We will consider and act upon any
            request in accordance with applicable data protection laws.
          </p>
        </section>

        <section id="table-of-contents">
          <h2 className="compliance__title-small">TABLE OF CONTENTS</h2>
          <ul className="compliance__list">
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="what-information-do-we-collect"
              >
                1. WHAT INFORMATION DO WE COLLECT?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="how-do-we-process-your-information"
              >
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="when-and-with-who-do-we-share"
              >
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="do-we-use-cookies-and-other"
              >
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="how-do-we-handle-your-social-logins"
              >
                5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="is-your-information-transferred-internationally"
              >
                6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="how-long-do-we-keep-your-information"
              >
                7. HOW LONG DO WE KEEP YOUR INFORMATION?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="do-we-collect-information-from-minors"
              >
                8. DO WE COLLECT INFORMATION FROM MINORS?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="what-are-your-privacy-rights"
              >
                9. WHAT ARE YOUR PRIVACY RIGHTS?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="controls-for-do-not-track-features"
              >
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="do-we-make-updates-to-this-notice"
              >
                11. DO WE MAKE UPDATES TO THIS NOTICE?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="how-can-you-contact-us-about-this-notice"
              >
                12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                className="compliance__link"
                to="how-can-you-review-update-delete-data"
              >
                13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </Link>
            </li>
          </ul>
        </section>
        <section id="what-information-do-we-collect">
          <h2 className="compliance__title-small">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <h3 className="compliance__subtitle">
            Personal information you disclose to us
          </h3>
          <p className="compliance__par">
            In Short: We collect personal information that you provide to us.
          </p>

          <p className="compliance__par">
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>

          <p className="compliance__par">
            Sensitive Information. We do not process sensitive information.
          </p>

          <p className="compliance__par">
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
          <h3 className="compliance__subtitle">
            Information automatically collected
          </h3>
          <p className="compliance__par">
            In Short: Some information &mdash; such as your Internet Protocol
            (IP) address and/or browser and device characteristics &mdash; is
            collected automatically when you visit our Services.
          </p>

          <p className="compliance__par">
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>

          <p className="compliance__par">
            Like many businesses, we also collect information through cookies
            and similar technologies.
          </p>
        </section>
        <section id="how-do-we-process-your-information">
          <h2 className="compliance__title-small">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <p className="compliance__par">
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </p>

          <p className="compliance__par">
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
        </section>
        <section id="when-and-with-who-do-we-share">
          <h2 className="compliance__title-small">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <p className="compliance__par">
            In Short: We may share information in specific situations described
            in this section and/or with the following third parties.
          </p>

          <p className="compliance__par">
            We may need to share your personal information in the following
            situations:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Affiliates. We may share your information with our affiliates,
                in which case we will require those affiliates to honor this
                Privacy Notice. Affiliates include our parent company and any
                subsidiaries, joint venture partners, or other companies that we
                control or that are under common control with us.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Business Partners. &nbsp;We may share your information with our
                business partners to offer you certain products, services, or
                promotions.
              </p>
            </li>
          </ul>
        </section>
        <section id="do-we-use-cookies-and-other">
          <h2 className="compliance__title-small">
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>
          <p className="compliance__par">
            In Short: We may use cookies and other tracking technologies to
            collect and store your information.
          </p>

          <p className="compliance__par">
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to gather information when you interact with our
            Services. Some online tracking technologies help us maintain the
            security of our Services, prevent crashes, fix bugs, save your
            preferences, and assist with basic site functions.
          </p>

          <p className="compliance__par">
            We also permit third parties and service providers to use online
            tracking technologies on our Services for analytics and advertising,
            including to help manage and display advertisements, to tailor
            advertisements to your interests, or to send abandoned shopping cart
            reminders (depending on your communication preferences). The third
            parties and service providers use their technology to provide
            advertising about products and services tailored to your interests
            which may appear either on our Services or on other websites.
          </p>

          <p className="compliance__par">
            Specific information about how we use such technologies and how you
            can refuse certain cookies is set out in our Cookie Notice.
          </p>
        </section>
        <section id="how-do-we-handle-your-social-logins">
          <h2 className="compliance__title-small">
            5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </h2>
          <p className="compliance__par">
            In Short: If you choose to register or log in to our Services using
            a social media account, we may have access to certain information
            about you.
          </p>

          <p className="compliance__par">
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or X
            logins). Where you choose to do this, we will receive certain
            profile information about you from your social media provider. The
            profile information we receive may vary depending on the social
            media provider concerned, but will often include your name, email
            address, friends list, and profile picture, as well as other
            information you choose to make public on such a social media
            platform.
          </p>

          <p className="compliance__par">
            We will use the information we receive only for the purposes that
            are described in this Privacy Policy or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy policy to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </section>
        <section id="is-your-information-transferred-internationally">
          <h2 className="compliance__title-small">
            6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
          </h2>
          <p className="compliance__par">
            In Short: We may transfer, store, and process your information in
            countries other than your own.
          </p>

          <p className="compliance__par">
            Our servers are located in. If you are accessing our Services from
            outside, please be aware that your information may be transferred
            to, stored by, and processed by us in our facilities and in the
            facilities of the third parties with whom we may share your personal
            information (see &quot;&nbsp;
            <Link
              offset={offset}
              className="compliance__link"
              to="when-and-with-who-do-we-share"
            >
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </Link>
            &nbsp; &quot; above), in and other countries.
          </p>

          <p className="compliance__par">
            If you are a resident in the European Economic Area (EEA), United
            Kingdom (UK), or Switzerland, then these countries may not
            necessarily have data protection laws or other similar laws as
            comprehensive as those in your country. However, we will take all
            necessary measures to protect your personal information in
            accordance with this Privacy Policy and applicable law.
          </p>
        </section>
        <section id="how-long-do-we-keep-your-information">
          <h2 className="compliance__title-small">
            7. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p className="compliance__par">
            In Short: We keep your information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy unless
            otherwise required by law.
          </p>

          <p className="compliance__par">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this Privacy Policy, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements).
          </p>

          <p className="compliance__par">
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </section>
        <section id="do-we-collect-information-from-minors">
          <h2 className="compliance__title-small">
            8. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <p className="compliance__par">
            In Short: We do not knowingly collect data from or market to
            children under 18 years of age.
          </p>

          <p className="compliance__par">
            We do not knowingly collect, solicit data from, or market to
            children under 18 years of age, nor do we knowingly sell such
            personal information. By using the Services, you represent that you
            are at least 18 or that you are the parent or guardian of such a
            minor and consent to such minor dependent&rsquo;s use of the
            Services. If we learn that personal information from users less than
            18 years of age has been collected, we will deactivate the account
            and take reasonable measures to promptly delete such data from our
            records. If you become aware of any data we may have collected from
            children under age 18, please contact us at&nbsp;
            <NextLink
              className="compliance__link"
              href="mailto:info@aristobyte.com"
              target="_blank"
            >
              info@aristobyte.com
            </NextLink>
            &nbsp;.
          </p>
        </section>
        <section id="what-are-your-privacy-rights">
          <h2 className="compliance__title-small">
            9. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p className="compliance__par">
            In Short: &nbsp;You may review, change, or terminate your account at
            any time, depending on your country, province, or state of
            residence.
          </p>

          <p className="compliance__par">
            Withdrawing your consent: &nbsp;If we are relying on your consent to
            process your personal information, which may be express and/or
            implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent
            at any time by contacting us by using the contact details provided
            in the section &quot;
            <Link
              offset={offset}
              className="compliance__link"
              to="#how-can-you-contact-us-about-this-notice"
            >
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </Link>
            &quot; below.
          </p>

          <p className="compliance__par">
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <h3 className="compliance__subtitle">Account Information</h3>
          <p className="compliance__par">
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <p className="compliance__par">
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
        </section>
        <section id="controls-for-do-not-track-features">
          <h2 className="compliance__title-small">
            10. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p className="compliance__par">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (&quot;DNT&quot;) feature or
            setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. At this stage, no uniform technology standard for
            recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice
            in a revised version of this Privacy Policy.
          </p>
        </section>
        <section id="do-we-make-updates-to-this-notice">
          <h2 className="compliance__title-small">
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p className="compliance__par">
            In Short: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </p>

          <p className="compliance__par">
            We may update this Privacy Policy from time to time. The updated
            version will be indicated by an updated &quot;Revised&quot; date at
            the top of this Privacy Policy. If we make material changes to this
            Privacy Policy, we may notify you either by prominently posting a
            notice of such changes or by directly sending you a notification. We
            encourage you to review this Privacy Policy frequently to be
            informed of how we are protecting your information.
          </p>
        </section>
        <section id="how-can-you-contact-us-about-this-notice">
          <h2 className="compliance__title-small">
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p className="compliance__par">
            If you have questions or comments about this notice, you may contact
            us by post at:
          </p>

          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Mail:&nbsp;
                <NextLink
                  className="compliance__link"
                  href="mailto:info@aristobyte.com"
                  target="_blank"
                >
                  info@aristobyte.com
                </NextLink>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Phone:&nbsp;
                <NextLink
                  className="compliance__link"
                  href="tel:+48-451-652-749"
                  target="_blank"
                >
                  (+48) 451 652 749
                </NextLink>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Website:&nbsp;
                <NextLink className="compliance__link" href="/contact">
                  https://aristobyte.com/contact
                </NextLink>
              </p>
            </li>
          </ul>
        </section>
        <section id="how-can-you-review-update-delete-data">
          <h2 className="compliance__title-small">
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p className="compliance__par">
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            details about how we have processed it, correct inaccuracies, or
            delete your personal information. You may also have the right to
            withdraw your consent to our processing of your personal
            information. These rights may be limited in some circumstances by
            applicable law. To request to review, update, or delete your
            personal information, please fill out and submit a&nbsp;
            <NextLink className="compliance__link" href="/dsar">
              data subject access request
            </NextLink>
            .
          </p>
        </section>
      </div>
    </div>
  </div>
);
