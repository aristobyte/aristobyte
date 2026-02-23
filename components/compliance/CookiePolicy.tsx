"use client";

import * as React from "react";
import NextLink from "next/link";

import { GoBackButton } from "./GoBackButton";

import "./compliance.scss";

export const CookiePolicy = () => (
  <div className="compliance">
    <div className="compliance__container">
      <div className="compliance__document">
        <h1 className="compliance__title">
          <GoBackButton />
          <span>COOKIE POLICY</span>
        </h1>
        <p className="compliance__date">
          Last updated: <b>19.05.2025</b>
        </p>
        <p className="compliance__par">
          This Cookie Policy explains how AristoByte(&quot;Company,&quot;
          &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;) uses cookies and
          similar technologies to recognize you when you visit our website
          at&nbsp;
          <NextLink className="compliance__link" href="/">
            https://www.aristobyte.com
          </NextLink>
          &nbsp;(&quot;Website&quot;). It explains what these technologies are
          and why we use them, as well as your rights to control our use of
          them.
        </p>
        <p className="compliance__par">
          In some cases we may use cookies to collect personal information, or
          that becomes personal information if we combine it with other
          information.
        </p>
        <h2 className="compliance__title-small">What are cookies?</h2>
        <p className="compliance__par">
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>
        <p className="compliance__par">
          Cookies set by the website owner (in this case, AristoByte ) are
          called &quot;first-party cookies.&quot; Cookies set by parties other
          than the website owner are called &quot;third-party cookies.&quot;
          Third-party cookies enable third-party features or functionality to be
          provided on or through the website (e.g., advertising, interactive
          content, and analytics). The parties that set these third-party
          cookies can recognize your computer both when it visits the website in
          question and also when it visits certain other websites.
        </p>
        <h2 className="compliance__title-small">Why do we use cookies?</h2>
        <p className="compliance__par">
          We use first- and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our Website to
          operate, and we refer to these as &quot;essential&quot; or
          &quot;strictly necessary&quot; cookies. Other cookies also enable us
          to track and target the interests of our users to enhance the
          experience on our Online Properties. Third parties serve cookies
          through our Website for advertising, analytics, and other purposes.
          This is described in more detail below.
        </p>
        <p className="compliance__par">
          By default, only strictly necessary cookies are enabled. Optional
          categories (such as preferences, analytics, and marketing) are
          disabled unless you explicitly enable them in our cookie preferences
          banner.
        </p>
        <h2 className="compliance__title-small">How can I control cookies?</h2>
        <p className="compliance__par">
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          Cookie Consent Manager. The Cookie Consent Manager allows you to
          select which categories of cookies you accept or reject. Essential
          cookies cannot be rejected as they are strictly necessary to provide
          you with services.
        </p>
        <p className="compliance__par">
          The Cookie Consent Manager can be found in the notification banner and
          on our Website. If you choose to reject cookies, you may still use our
          Website though your access to some functionality and areas of our
          Website may be restricted. You may also set or amend your web browser
          controls to accept or refuse cookies.
        </p>
        <p className="compliance__par">
          The specific types of first- and third-party cookies served through
          our Website and the purposes they perform are described in the table
          below (please note that the specific cookies served may vary depending
          on the specific Online Properties you visit):
        </p>
        <h2 className="compliance__title-small">
          How can I control cookies on my browser?
        </h2>
        <p className="compliance__par">
          As the means by which you can refuse cookies through your web browser
          controls vary from browser to browser, you should visit your
          browser&#39;s help menu for more information. The following is
          information about how to manage cookies on the most popular browsers:
        </p>
        <ul className="compliance__list compliance__list--with-dots">
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
                target="_blank"
              >
                Chrome
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc#:~:text=then%20press%20ENTER.-,On%20the%20General%20tab%2C%20click%20Delete%20under%20Browsing%20History%20in,Cookies%20dialog%20box%2C%20click%20Yes."
                target="_blank"
              >
                Internet Explorer
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
              >
                Firefox
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://support.apple.com/en-us/105082"
                target="_blank"
              >
                Safari
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#:~:text=and%20login%20information.-,Open%20Edge%20browser%2C%20select%20Settings%20and%20more%20in%20the%20upper,delete%20cookies%20and%20site%20data."
                target="_blank"
              >
                Edge
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://blogs.opera.com/tips-and-tricks/2023/04/clean-browser-and-remove-trackers"
                target="_blank"
              >
                Opera
              </NextLink>
            </p>
          </li>
        </ul>
        <p className="compliance__par">
          In addition, most advertising networks offer you a way to opt out of
          targeted advertising. If you would like to find out more information,
          please visit:
        </p>
        <ul className="compliance__list compliance__list--with-dots">
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://youradchoices.com/about"
                target="_blank"
              >
                Digital Advertising Alliance
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://youradchoices.ca/"
                target="_blank"
              >
                Digital Advertising Alliance of Canada
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              <NextLink
                className="compliance__link"
                href="https://youronlinechoices.eu/"
                target="_blank"
              >
                European Interactive Digital Advertising Alliance
              </NextLink>
            </p>
          </li>
        </ul>
        <h2 className="compliance__title-small">
          What about other tracking technologies, like web beacons?
        </h2>
        <p className="compliance__par">
          Cookies are not the only way to recognize or track visitors to a
          website. We may use other, similar technologies from time to time,
          like web beacons (sometimes called &quot;tracking pixels&quot; or
          &quot;clear gifs&quot;). These are tiny graphics files that contain a
          unique identifier that enables us to recognize when someone has
          visited our Website or opened an email including them. This allows us,
          for example, to monitor the traffic patterns of users from one page
          within a website to another, to deliver or communicate with cookies,
          to understand whether you have come to the website from an online
          advertisement displayed on a third-party website, to improve site
          performance, and to measure the success of email marketing campaigns.
          In many instances, these technologies are reliant on cookies to
          function properly, and so declining cookies will impair their
          functioning.
        </p>
        <h2 className="compliance__title-small">
          Do you use Flash cookies or Local Shared Objects?
        </h2>
        <p className="compliance__par">
          Websites may also use so-called &quot;Flash Cookies&quot; (also known
          as Local Shared Objects or &quot;LSOs&quot;) to, among other things,
          collect and store information about your use of our services, fraud
          prevention, and for other site operations.
        </p>
        <p className="compliance__par">
          If you do not want Flash Cookies stored on your computer, you can
          adjust the settings of your Flash player to block Flash Cookies
          storage using the tools contained in the&nbsp;
          <NextLink
            className="compliance__link"
            href="https://www.google.com/url?q=http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html&amp;sa=D&amp;source=editors&amp;ust=1747708833153672&amp;usg=AOvVaw3J5gJHsc5gBTnFq99NMHV9"
            target="_blank"
          >
            Website Storage Settings Panel
          </NextLink>
          . You can also control Flash Cookies by going to the
          <NextLink
            className="compliance__link"
            href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
            target="_blank"
          >
            Global Storage Settings Panel
          </NextLink>
          &nbsp;and following the instructions (which may include instructions
          that explain, for example, how to delete existing Flash Cookies
          (referred to &quot;information&quot; on the Macromedia site), how to
          prevent Flash LSOs from being placed on your computer without your
          being asked, and (for Flash Player 8 and later) how to block Flash
          Cookies that are not being delivered by the operator of the page you
          are on at the time).
        </p>
        <p className="compliance__par">
          Please note that setting the Flash Player to restrict or limit
          acceptance of Flash Cookies may reduce or impede the functionality of
          some Flash applications, including, potentially, Flash applications
          used in connection with our services or online content.
        </p>
        <h2 className="compliance__title-small">
          Do you serve targeted advertising?
        </h2>
        <p className="compliance__par">
          Third parties may serve cookies on your computer or mobile device to
          serve advertising through our Website. These companies may use
          information about your visits to this and other websites in order to
          provide relevant advertisements about goods and services that you may
          be interested in. They may also employ technology that is used to
          measure the effectiveness of advertisements. They can accomplish this
          by using cookies or web beacons to collect information about your
          visits to this and other sites in order to provide relevant
          advertisements about goods and services of potential interest to you.
          The information collected through this process does not enable us or
          them to identify your name, contact details, or other details that
          directly identify you unless you choose to provide these.
        </p>
        <h2 className="compliance__title-small">
          How often will you update this Cookie Policy?
        </h2>
        <p className="compliance__par">
          We may update this Cookie Policy from time to time in order to
          reflect, for example, changes to the cookies we use or for other
          operational, legal, or regulatory reasons. Please therefore revisit
          this Cookie Policy regularly to stay informed about our use of cookies
          and related technologies.
        </p>
        <p className="compliance__par">
          The date at the top of this Cookie Policy indicates when it was last
          updated.
        </p>
        <h2 className="compliance__title-small">
          Where can I get further information?
        </h2>
        <p className="compliance__par">
          If you have any questions about our use of cookies or other
          technologies, please email us at info.aristobyte@gmail.com or by post
          to:
        </p>
        <p className="compliance__par">AristoByte</p>
        <ul className="compliance__list compliance__list--with-dots">
          <li>
            <p className="compliance__par">
              Online Contact Form:&nbsp;
              <NextLink className="compliance__link" href="/contact">
                https://aristobyte.com/contact
              </NextLink>
            </p>
          </li>
          <li>
            <p className="compliance__par">
              Email:&nbsp;
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
        </ul>
      </div>
    </div>
  </div>
);
