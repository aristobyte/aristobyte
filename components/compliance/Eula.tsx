"use client";

import * as React from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { HEADER_SIZE } from "@/config";

import { GoBackButton } from "./GoBackButton";

import "./compliance.scss";

const offset = -HEADER_SIZE - 20;

export const Eula = () => (
  <div className="compliance">
    <div className="compliance__container">
      <div className="compliance__document">
        <h1 className="compliance__title">
          <GoBackButton />
          <span>END USER LICENSE AGREEMENT</span>
        </h1>
        <p className="compliance__date">
          Last updated:&nbsp;<b>19.05.2025</b>
        </p>
        <p className="compliance__par">
          AristoByte, located at Wesele Cracow, Poland (&quot;Licensor&quot;),
          for use only under the terms of this License Agreement.
        </p>
        <p className="compliance__par">
          By downloading the Licensed Application from, and any update thereto
          (as permitted by this License Agreement), You indicate that You agree
          to be bound by all of the terms and conditions of this License
          Agreement, and that You accept this License Agreement. referred to in
          this License Agreement as &quot;Services.&quot;
        </p>
        <p className="compliance__par">
          The parties of this License Agreement acknowledge that the Services
          are not a Party to this License Agreement and are not bound by any
          provisions or obligations with regard to the Licensed Application,
          such as warranty, liability, maintenance and support thereof.
          AristoByte Technologies Pvt. Ltd., not the Services, is solely
          responsible for the Licensed Application and the content thereof.
        </p>
        <p className="compliance__par">
          This License Agreement may not provide for usage rules for the
          Licensed Application that are in conflict with the latest (&quot;Usage
          Rules&quot;) set forth by the Services. AristoByte Technologies Pvt.
          Ltd. &nbsp;acknowledges that it had the opportunity to review the
          Usage Rules and this License Agreement is not conflicting with them.
        </p>
        <p className="compliance__par">
          AristoByte when purchased or downloaded through the Services, is
          licensed to You for use only under the terms of this License
          Agreement. The Licensor reserves all rights not expressly granted to
          You. AristoByt is to be used on devices that operate with.
        </p>
        <section id="table-of-contents">
          <h2 className="compliance__title-small">TABLE OF CONTENTS</h2>
          <ul className="compliance__list">
            <li>
              <Link
                offset={offset}
                to="the-application"
                className="compliance__link"
              >
                1. THE APPLICATION
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="scope-of-license"
                className="compliance__link"
              >
                2. SCOPE OF LICENSE
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="technical-requirements"
                className="compliance__link"
              >
                3. TECHNICAL REQUIREMENTS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="no-maintenance-and-support"
                className="compliance__link"
              >
                4. NO MAINTENANCE AND SUPPORT
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="user-generated-contributions"
                className="compliance__link"
              >
                5. USER-GENERATED CONTRIBUTIONS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="contribution-license"
                className="compliance__link"
              >
                6. CONTRIBUTION LICENSE
              </Link>
            </li>
            <li>
              <Link offset={offset} to="liability" className="compliance__link">
                7. LIABILITY
              </Link>
            </li>
            <li>
              <Link offset={offset} to="warranty" className="compliance__link">
                8. WARRANTY
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="product-claims"
                className="compliance__link"
              >
                9. PRODUCT CLAIMS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="legal-compliance"
                className="compliance__link"
              >
                10. LEGAL COMPLIANCE
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="contact-information"
                className="compliance__link"
              >
                11. CONTACT INFORMATION
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="termination"
                className="compliance__link"
              >
                12. TERMINATION
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="third-party-terms-of-agreements-and-beneficiary"
                className="compliance__link"
              >
                13. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="intellectual-property-rights"
                className="compliance__link"
              >
                14. INTELLECTUAL PROPERTY RIGHTS
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="applicable-law"
                className="compliance__link"
              >
                15. APPLICABLE LAW
              </Link>
            </li>
            <li>
              <Link
                offset={offset}
                to="miscellaneous"
                className="compliance__link"
              >
                16. MISCELLANEOUS
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="compliance__title-small" id="the-application">
            1. THE APPLICATION
          </h2>
          <p className="compliance__par">
            AristoByte (&quot;Licensed Application&quot;) is a proprietary
            mobile software suite developed to streamline digital workflows,
            enhance user engagement, and deliver intelligent, cloud-connected
            experiences across enterprise and consumer environments &mdash; and
            customized for mobile devices (&quot;Devices&quot;). It is used to
            enable users to access AristoByte&#39;s modular platform of
            productivity tools, analytics dashboards, and service integrations
            directly from their smartphones or tablets, facilitating on-the-go
            operations, collaboration, and data-driven decision-making.
          </p>
        </section>
        <h2 className="compliance__title-small" id="scope-of-license">
          2. SCOPE OF LICENSE
        </h2>
        <p className="compliance__par">
          2.1 The Licensor grants You a revocable, non-exclusive,
          non-transferable, limited license to download, install, and use the
          Licensed Application solely for Your personal, non-commercial purposes
          strictly in accordance with the terms of this License Agreement.
        </p>
        <p className="compliance__par">
          2.2 You may not share or make the Licensed Application available to
          third parties (unless permitted by the Usage Rules), sell, rent,
          lease, lend, redistribute, or sublicense the Licensed Application.
        </p>
        <p className="compliance__par">
          2.3 You may not reverse engineer, translate, disassemble, modify,
          decompile, or create derivative works of the Licensed Application or
          any part thereof, except and only to the extent that such activity is
          expressly permitted by applicable law notwithstanding this limitation.
        </p>
        <p className="compliance__par">
          2.4 You may not copy (except as expressly permitted by this license
          and the Usage Rules) or modify the Licensed Application or any portion
          thereof. Any updates, upgrades, or enhancements to the Licensed
          Application provided by AristoByte shall be subject to the terms of
          this License unless accompanied by a separate license agreement.
        </p>
        <p className="compliance__par">
          2.5 All rights not expressly granted to You are reserved by AristoByte
          Technologies Pvt. Ltd. and its licensors.
        </p>
        <h2 className="compliance__title-small" id="technical-requirements">
          3. TECHNICAL REQUIREMENTS
        </h2>
        <p className="compliance__par">
          3.1 The Licensed Application requires a compatible mobile device,
          stable internet access, and a supported operating system version (as
          outlined in the technical documentation or app store listing). It is
          Your responsibility to ensure that Your Device meets all the minimum
          system requirements for the Licensed Application to function as
          intended.
        </p>
        <p className="compliance__par">
          3.2 AristoByte Technologies Pvt. Ltd. does not guarantee that the
          Licensed Application will be compatible with all devices or operating
          system versions. Functionality may vary depending on hardware
          capabilities, software environment, and region.
        </p>
        <p className="compliance__par">
          3.3 It is strongly recommended to maintain up-to-date firmware and
          software updates on Your Device and to enable necessary permissions
          for the Licensed Application to access features such as network
          connectivity, notifications, storage, or device sensors as applicable.
        </p>
        <section>
          <h2
            className="compliance__title-small"
            id="no-maintenance-or-support"
          >
            4. NO MAINTENANCE OR SUPPORT
          </h2>
          <p className="compliance__par">
            4.1. AristoByte is not obligated, expressed or implied, to provide
            any maintenance, technical or other support for the Licensed
            Application.
          </p>
          <p className="compliance__par">
            4.2. AristoByte and the End-User acknowledge that the Services have
            no obligation whatsoever to furnish any maintenance and support
            services with respect to the Licensed Application.
          </p>
        </section>
        <section>
          <h2
            className="compliance__title-small"
            id="user-generated-contributions"
          >
            5. USER-GENERATED CONTRIBUTIONS
          </h2>
          <p className="compliance__par">
            The Licensed Application does not offer users to submit or post
            content. We may provide you with the opportunity to create, submit,
            post, display, transmit, perform, publish, distribute, or broadcast
            content and materials to us or in the Licensed Application,
            including but not limited to text, writings, video, audio,
            photographs, graphics, comments, suggestions, or personal
            information or other material (collectively,
            &quot;Contributions&quot;). Contributions may be viewable by other
            users of the Licensed Application and through third-party websites
            or applications. As such, any Contributions you transmit may be
            treated in accordance with the Licensed Application Privacy Policy.
            When you create or make available any Contributions, you thereby
            represent and warrant that:
          </p>
          <p className="compliance__par">
            1. The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </p>
          <p className="compliance__par">
            2. You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Licensed Application, and other users of the Licensed
            Application to use your Contributions in any manner contemplated by
            the Licensed Application and this License Agreement.
          </p>
          <p className="compliance__par">
            3. You have the written consent, release, and/or permission of each
            and every identifiable individual person in your Contributions to
            use the name or likeness or each and every such identifiable
            individual person to enable inclusion and use of your Contributions
            in any manner contemplated by the Licensed Application and this
            License Agreement.
          </p>
          <p className="compliance__par">
            4. Your Contributions are not false, inaccurate, or misleading.
          </p>
          <p className="compliance__par">
            5. Your Contributions are not unsolicited or unauthorized
            advertising, promotional materials, pyramid schemes, chain letters,
            spam, mass mailings, or other forms of solicitation.
          </p>
          <p className="compliance__par">
            6. Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </p>
          <p className="compliance__par">
            7. Your Contributions do not ridicule, mock, disparage, intimidate,
            or abuse anyone.
          </p>
          <p className="compliance__par">
            8. Your Contributions are not used to harass or threaten (in the
            legal sense of those terms) any other person and to promote violence
            against a specific person or className of people.
          </p>
          <p className="compliance__par">
            9. Your Contributions do not violate any applicable law, regulation,
            or rule.
          </p>
          <p className="compliance__par">
            10. Your Contributions do not violate the privacy or publicity
            rights of any third party.
          </p>
          <p className="compliance__par">
            11. Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </p>
          <p className="compliance__par">
            12. Your Contributions do not include any offensive comments that
            are connected to race, national origin, gender, sexual preference,
            or physical handicap.
          </p>
          <p className="compliance__par">
            13. Your Contributions do not otherwise violate, or link to material
            that violates, any provision of this License Agreement, or any
            applicable law or regulation.
          </p>
          <p className="compliance__par">
            Any use of the Licensed Application in violation of the foregoing
            violates this License Agreement and may result in, among other
            things, termination or suspension of your rights to use the Licensed
            Application.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="contribution-license">
            6. CONTRIBUTION LICENSE
          </h2>
          <p className="compliance__par">
            You agree that we may access, store, process, and use any
            information and personal data that you provide following the terms
            of the Privacy Policy and your choices (including settings).
          </p>
          <p className="compliance__par">
            By submitting suggestions of other feedback regarding the Licensed
            Application, you agree that we can use and share such feedback for
            any purpose without compensation to you.
          </p>
          <p className="compliance__par">
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area in
            the Licensed Application. You are solely responsible for your
            Contributions to the Licensed Application and you expressly agree to
            exonerate us from any and all responsibility and to refrain from any
            legal action against us regarding your Contributions.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="liability">
            7. LIABILITY
          </h2>
          <p className="compliance__par">
            7.1 To the maximum extent permitted by applicable law, AristoByte
            Technologies Pvt. Ltd., its affiliates, directors, officers,
            employees, agents, partners, licensors, or suppliers shall not be
            liable for any indirect, incidental, special, consequential,
            exemplary, or punitive damages, including but not limited to loss of
            profits, loss of data, loss of use, business interruption, or other
            intangible losses, arising out of or in connection with the use of
            or inability to use the Licensed Application, regardless of the
            legal theory, whether in contract, tort, or otherwise, even if
            AristoByte has been advised of the possibility of such damages.
          </p>
          <p className="compliance__par">
            7.2 AristoByte&apos;s total liability for any claim arising out of
            or relating to this License Agreement or the Licensed Application
            shall not exceed the amount You paid (if any) for the Licensed
            Application or, where such limitation of liability is not permitted
            by applicable law, the minimum permissible limit.
          </p>
          <p className="compliance__par">
            7.3 AristoByte Technologies Pvt. Ltd. shall not be held responsible
            for failure or delay in performance caused by circumstances beyond
            its reasonable control, including but not limited to acts of God,
            natural disasters, governmental actions, labor conditions, internet
            or telecommunication network disruptions, hardware failures, or
            third-party software malfunctions.
          </p>
          <p className="compliance__par">
            7.4 The foregoing limitations and exclusions of liability shall
            apply even if the remedy fails of its essential purpose.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="warranty">
            8. WARRANTY
          </h2>
          <p className="compliance__par">
            8.1. Licensor warrants that the Licensed Application is free of
            spyware, trojan horses, viruses, or any other malware at the time of
            Your download. Licensor warrants that the Licensed Application works
            as described in the user documentation.
          </p>
          <p className="compliance__par">
            8.2. No warranty is provided for the Licensed Application that is
            not executable on the device, that has been unauthorizedly modified,
            handled inappropriately or culpably, combined or installed with
            inappropriate hardware or software, used with incompatible or
            unapproved accessories, regardless if by Yourself or by third
            parties, or if there are any other reasons outside of
            AristoByte&#39;s &nbsp;sphere of influence that affect the
            executability of the Licensed Application.
          </p>
          <p className="compliance__par">
            8.3 You are required to inspect the Licensed Application immediately
            after installing it and notify AristoByte &nbsp;about issues
            discovered without delay by email provided in Contact Information.
            The defect report will be taken into consideration and further
            investigated if it has been emailed within a period of 30 (thirty)
            days after discovery.
          </p>
          <p className="compliance__par">
            8.4. If we confirm that the Licensed Application is defective,
            AristoByte reserves the right, at its sole discretion, to remedy the
            situation either by resolving the defect through a software update,
            patch, or bug fix, or by providing a functionally equivalent
            substitute delivery.
          </p>
          <p className="compliance__par">
            8.5. In the event of any failure of the Licensed Application to
            conform to any applicable warranty, You may notify the Services
            Store Operator, and Your Licensed Application purchase price will be
            refunded to You. To the maximum extent permitted by applicable law,
            the Services Store Operator will have no other warranty obligation
            whatsoever with respect to the Licensed Application, and any other
            losses, claims, damages, liabilities, expenses, and costs
            attributable to any negligence to adhere to any warranty.
          </p>
          <p className="compliance__par">
            8.6. If the user is an entrepreneur, any claim based on faults
            expires after a statutory period of limitation amounting to twelve
            (12) months after the Licensed Application was made available to the
            user. The statutory periods of limitation given by law apply for
            users who are consumers.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="product-claims">
            9. PRODUCT CLAIMS
          </h2>
          <p className="compliance__par">
            AristoByte and the End-User acknowledge that AristoByte, and not the
            Services, is responsible for addressing any claims of the End-User
            or any third party relating to the Licensed Application or the
            End-User&rsquo;s possession and/or use of that Licensed Application,
            including, but not limited to:
          </p>
          <p className="compliance__par">(i) product liability claims;</p>
          <p className="compliance__par">
            (ii) any claim that the Licensed Application fails to conform to any
            applicable legal or regulatory requirement; and
          </p>
          <p className="compliance__par">
            (iii) claims arising under consumer protection, privacy, or similar
            legislation.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="legal-compliance">
            10. LEGAL COMPLIANCE
          </h2>
          <p className="compliance__par">
            You represent and warrant that You are not located in a country that
            is subject to a US Government embargo, or that has been designated
            by the US Government as a &quot;terrorist supporting&quot; country;
            and that You are not listed on any US Government list of prohibited
            or restricted parties.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="contact-information">
            11. CONTACT INFORMATION
          </h2>
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
        <section>
          <h2 className="compliance__title-small" id="termination">
            12. TERMINATION
          </h2>
          <p className="compliance__par">
            The license is valid until terminated by AristoByte &nbsp;or by You.
            Your rights under this license will terminate automatically and
            without notice from AristoByte if You fail to comply with any
            term(s) of this License Agreement. Upon termination, You must
            immediately cease all use of the Licensed Application and destroy
            all copies, full or partial, of the Licensed Application, including
            all related components and documentation.
          </p>
        </section>
        <section>
          <h2
            className="compliance__title-small"
            id="third-party-terms-of-agreements-and-beneficiary"
          >
            13. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY
          </h2>
          <p className="compliance__par">
            AristoByte represents and warrants that AristoByte will comply with
            all applicable third-party terms of agreement when using the
            Licensed Application, including but not limited to any terms imposed
            by the platform provider or device manufacturer.
          </p>
          <p className="compliance__par">
            In Accordance with Section 9 of the &quot;Instructions for Minimum
            Terms of Developer&#39;s End-User License Agreement,&quot;
            subsidiaries shall be third-party beneficiaries of this End User
            License Agreement and &mdash; upon Your acceptance of the terms and
            conditions of this License Agreement, will have the right (and will
            be deemed to have accepted the right) to enforce this End User
            License Agreement against You as a third-party beneficiary thereof.
          </p>
        </section>
        <section>
          <h2
            className="compliance__title-small"
            id="intellectual-property-rights"
          >
            14. INTELLECTUAL PROPERTY RIGHTS
          </h2>
          <p className="compliance__par">
            AristoByte and the End-User acknowledge that, in the event of any
            third-party claim that the Licensed Application or the
            End-User&#39;s possession and use of that Licensed Application
            infringes on the third party&#39;s intellectual property rights,
            AristoByte, and not the Services, will be solely responsible for the
            investigation, defense, settlement, and discharge of any such
            intellectual property infringement claims.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="applicable-law">
            15. APPLICABLE LAW
          </h2>
          <p className="compliance__par">
            This License Agreement is governed by the laws of Poland, excluding
            its conflicts of law rules.
          </p>
        </section>
        <section>
          <h2 className="compliance__title-small" id="miscellaneous">
            16. MISCELLANEOUS
          </h2>
          <p className="compliance__par">
            16.1. If any of the terms of this agreement should be or become
            invalid, the validity of the remaining provisions shall not be
            affected. Invalid terms will be replaced by valid ones formulated in
            a way that will achieve the primary purpose.
          </p>
          <p className="compliance__par">
            16.2. Collateral agreements, changes and amendments are only valid
            if laid down in writing. The preceding clause can only be waived in
            writing.
          </p>
        </section>
      </div>
    </div>
  </div>
);
