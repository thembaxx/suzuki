import ScrollTopButton from "./ScrollTopButton";

const aTagClassess = "font-medium hover:underline block py-1";
const sectionTitleClasses = "text-xl border-b pb-4 mb-2";
const sectionClasses = "flex flex-col gap-3 text-sm mb-8";

const Section = ({ id, children }) => {
  return (
    <div id={id} className={sectionClasses}>
      <>{children}</>
      <ScrollTopButton />
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <div className="bg-gray-50 py-8 px-8">
        <h1 className="text-3xl">Privacy Statement</h1>
        <p className="text-xs mt-1">Your privacy is important to us.</p>
      </div>
      <div className="flex flex-col md:flex-row w-full py-4 relative">
        <ul className="text-sm px-11 md:sticky h-[100%] top-24 max-w-[500px] list-decimal">
          <li>
            <a className={aTagClassess} href="#introduction">
              Introduction
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#data-collection">
              What personal information do we collect?
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#personal-information">
              What do we use this personal information for?
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#information-sharing">
              Who do we share this personal information with?
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#information-rights">
              What Choices Do I Have Regarding My Information?
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#data-protection-law">
              Our basis for processing under South African data protection law
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#marketing-and-advertising">
              Marketing & Advertising
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#storage-and-deletion">
              Storage and Deletion
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#age-restriction">
              Users under 18
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#cookie-policy">
              Cookie Policy
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#your-rights">
              Your rights
            </a>
          </li>
          <li>
            <a
              className={aTagClassess}
              href="#car-dealerships-and-job-applicants"
            >
              Car Dealerships and Job Applicants
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#paia">
              PAIA (Promotion of Access to Information Act)
            </a>
          </li>
          <li>
            <a className={aTagClassess} href="#contact-us">
              Contact us
            </a>
          </li>
        </ul>
        <div className="flex-grow flex justify-center pt-12 md:pt-0 px-6">
          <div className="max-w-[600px]">
            <Section id="introduction">
              <p>
                Please take the time to review this privacy statement which
                explains the information that HeyCarter (Pty) Ltd or its
                subsidiary companies collects about you, how we use it, and your
                rights in relation to that information.
              </p>
              <p>
                HeyCarter (Pty) Ltd, Rosebank, South Africa is the data
                controller of the personal information collected via or in
                connection with our websites, heycarter.co.za,
                CarterRenault.co.za, and mobile apps (the “Websites” and “app”).
              </p>
              <p>
                By visiting the Sites, you are consenting to our collection,
                use, disclosure, retention, and protection of information about
                you and devices you use as described in this Notice
              </p>
              <p>
                HeyCarter (Pty) Ltd and its subsidiaries will gather and use
                user data in accordance with the Consumer Protection Act and the
                Protection of Personal Information Act. HeyCarter (Pty) Ltd will
                take all reasonable steps to protect the confidentiality of its
                users’ information, and use its users’ information only for the
                purpose permitted or required.
              </p>
              {/*   */}
            </Section>
            <Section id="data-collection">
              <h2 className={sectionTitleClasses}>
                What personal information do we collect about you?
              </h2>
              <p>
                We collect personal information from you when you provide it to
                us directly and through your use of our Websites or app.
              </p>
              <p>This information may include</p>
              <ul className="list-disc pl-12 flex flex-col gap-2">
                <li>
                  Information you provide when you submit your details for any
                  service enquiry listed on our Website or app. This information
                  will include your name, email address and a contact number.
                </li>
                <li>
                  Information you provide when using the Website or app, for
                  example your identity number, finance application information,
                  insurance application information, searches, and quotes.
                </li>
                <li>
                  Any correspondence you have with dealers via our systems.
                </li>
                <li>
                  Records of your interactions with HeyCarter (e.g. if you
                  contact our sales, services team and provide feedback, request
                  support, or ask for additional information).
                </li>
                <li>
                  We maintain a record of telephone calls to and from HeyCarter
                  companies made in connection with the HeyCarter company
                  services for quality control and training purposes.
                </li>
                <li>
                  Information you provide to us when you subscribe to content we
                  offer, enter a competition or participate in a survey.
                </li>
                <li>
                  Information collected automatically, using cookies and other
                  tracking technologies (e.g. which pages you viewed and whether
                  you clicked on a link in one of our email updates).
                </li>
                <li>
                  We may also collect information about the device you use to
                  access our Websites.
                </li>
                <li>
                  We may also receive confirmation from our dealers if you buy a
                  car from them, for our accounting purposes and to manage the
                  dealer’s account with us.
                </li>
                <li>
                  You may use social networks or other online services to access
                  our Sites. When you do so, information from those services may
                  be made available to us. By associating a social network
                  account with our Sites, you agree that we may access and
                  retain that information in accordance with the policies of the
                  social network or other online service and this Notice. For
                  example, we may be able to access account or profile
                  information that you have provided to the social network or
                  information about your interactions with the social network to
                  make information available to us (such as when commenting on a
                  blog post or using a sign-on service, such as Facebook
                  Connect).
                </li>
                <li>
                  We may collect session and geolocation information from your
                  mobile device. Geolocation information includes data such as
                  your device’s physical location and may include GPS-based,
                  WiFi-based or cell-based location information.
                </li>
                <li>
                  We may obtain information about you from affiliates, partners,
                  automobile dealers and other third parties. This information
                  may include information about your use of this Site or our
                  services, your use of other websites, your interactions with
                  or purchases from automobile dealers, your interests and
                  preferences and other information about you or your household.
                  We may combine the information we obtain from third parties
                  with information that we or our affiliates have collected
                  about you.
                </li>
              </ul>
            </Section>
            <Section id="personal-information">
              <h2 className={sectionTitleClasses}>
                What do we use this personal information for?
              </h2>
              <p>
                Depending on how you use our Websites or app, your interactions
                with us, and the permissions you give us, the purposes for which
                we use your personal information include:
              </p>
              <ul className="list-disc pl-12 flex flex-col gap-2">
                <li>To fulfil requests submitted via the Website or app.</li>
                <li>
                  To contact you about your use of the Website or app and send
                  you the relevant information or offers.
                </li>
                <li>
                  To provide support and assistance that you may have requested.
                </li>
                <li>
                  To manage and respond to any queries or complaints to our
                  customer service team.
                </li>
                <li>
                  To personalise the Website or app and show you content we
                  think you will be most interested in, based on your account
                  information and your history on the Website.
                </li>
                <li>
                  To improve and maintain the Website and app and monitor its
                  usage.
                </li>
                <li>
                  For market research, e.g. we may contact you for feedback
                  about your experience on our Website or app.
                </li>
                <li>
                  We may contact you through telephone, text, or chat for other
                  purposes, as permitted by law.
                </li>
                <li>
                  To send you marketing messages and show you targeted
                  advertising, where we have your consent or are otherwise
                  permitted to do so.
                </li>
                <li>
                  For security purposes, to investigate fraud and where
                  necessary to protect ourselves and third parties.
                </li>
                <li>To comply with our legal and regulatory obligations.</li>
              </ul>
            </Section>
            <Section id="information-sharing">
              <h2 className={sectionTitleClasses}>
                Who do we share this personal information with?
              </h2>
              <p>
                We share users’ personal information with third parties in the
                following circumstances:
              </p>
              <ul className="list-disc pl-12 flex flex-col gap-2">
                <li>
                  With car dealers, to pass on your interest or specific query.
                </li>
                <li>With banks to pass on your application for finance.</li>
                <li>With credit bureaus to perform credit checks.</li>
                <li>
                  With our insurance partners if you have requested an insurance
                  quote.
                </li>
                <li>With our professional and legal advisors.</li>
                <li>
                  With third parties engaged in fraud prevention and detection
                </li>
                <li>
                  With law enforcement or other governmental authorities, in
                  response to a lawful request or court order.
                </li>
                <li>
                  In the event that we are involved in a merger or sale of any
                  business assets, the personal information of our users may be
                  disclosed to a potential buyer. In this event, we will make
                  reasonable attempts to ensure the buyer will be bound by the
                  terms of this Privacy Policy and Otherwise where we have your
                  consent or are otherwise legally permitted to do so.
                </li>
                <li>
                  We also disclose aggregate data, which does not identify any
                  user personally, including to third parties working in media,
                  consumer research and the car industry (for example, as
                  analysis of popular cars in a given year).
                </li>
              </ul>
            </Section>
            <Section id="information-rights">
              <h2 className={sectionTitleClasses}>
                What Choices Do I Have Regarding My Information?
              </h2>
              <p>
                You may limit and control the information provided to us in a
                number of ways. You may not be able to use all features of our
                Sites if you limit the information you share with us.
              </p>
              <p className="pl-4 text-xs leading-5">
                For example, you can choose not to access our Sites through your
                social media account. You may also be able to limit the
                information provided to us by third party social media providers
                by altering your privacy settings with those providers. You may
                unsubscribe from promotional emails from us by following the
                unsubscribe link included in each such email.
              </p>
              <p>
                For example, you can choose not to access our Sites through your
                social media account. You may also be able to limit the
                information provided to us by third party social media providers
                by altering your privacy settings with those providers. You may
                unsubscribe from promotional emails from us by following the
                unsubscribe link included in each such email.
              </p>
              <p>
                HeyCarter (Pty) Ltd uses Google Analytics, which helps HeyCarter
                (Pty) Ltd better understand its audience and target
                communications and advertisements based on demographic or
                interest-based information. You may learn more about opting out
                of certain Google advertising initiatives{" "}
                <a
                  className="font-medium text-blue-700"
                  href="https://support.google.com/analytics/answer/181881?hl=en"
                >
                  here
                </a>
                . You may also be able to opt out of certain targeted
                behavioural advertising via the Network Advertising Initiative’s
                opt-out.
              </p>
              <p>
                Please note that you may still receive advertising even after
                opting out, but that advertising may not be tailored to you or
                your interests.
              </p>
            </Section>
            <Section id="data-protection-law">
              <h2 className={sectionTitleClasses}>
                Our basis for processing under South African data protection law
              </h2>
              <p>
                Generally, we rely on your consent to process the personal
                information collected via our Websites or app, so that we can
                provide you with the services we offer; for example, when you
                submit a query with us, browse for cars or correspond with our
                consultants, and you ask us to send you offers about particular
                cars or promotions. You can withdraw your consent at any time
                (see ‘Storage and Deletion’ below), but if you do so we will
                need to delete your account and you will no longer be able to
                conduct any transactions via our Website.
              </p>
              <p>
                We may also process your personal information where it is in our
                legitimate interests to do so, in order to maintain our Website
                and app and conduct our business. For example:
              </p>
              <ul className="list-disc pl-12 flex flex-col gap-2">
                <li>
                  We conduct an analysis on our user base and the searches made
                  via our Websites.
                </li>
                <li>
                  We conduct an analysis on our user base and the searches made
                  via our Websites or app.
                </li>
                <li>
                  We may contact you after you have used our Websites or app to
                  ask if you have bought a car (so that we can collect
                  commission from the relevant dealer, and for our own internal
                  research purposes) and where you or a dealer confirm that you
                  have found a vehicle via the Websites or app, we will process
                  your personal information in order to fulfil our obligations
                  to the dealers we work with and collect any commission due.
                </li>
              </ul>
            </Section>
            <Section id="marketing-and-advertising">
              <h2 className={sectionTitleClasses}>Marketing & Advertising</h2>
              <p>
                We love to communicate with our users and so, depending on your
                marketing preferences, we may use your personal information to
                send you marketing, including by social media, email, SMS or
                post. Some of these messages may be tailored to you, based on
                your previous use of our Websites and app.
              </p>
              <p>
                If you no longer want to receive marketing communications from
                us (or would like to opt back in!), you can change your
                preferences at any time by contacting info@heycarter.co.za,
                clicking on the ‘unsubscribe’ link in any email, or via any opt
                outs provided to you.
              </p>
              <p>
                If you unsubscribe from marketing, please note we will still
                contact you with service messages from time to time, including
                to send you offers from dealers in response to a request you
                make on the Websites or app.
              </p>
              <p>
                If you unsubscribe from marketing, please note we will still
                contact you with service messages from time to time, including
                to send you offers from dealers in response to a request you
                make on the Websites or app.
              </p>
            </Section>
            <Section id="storage-and-deletion">
              <h2 className={sectionTitleClasses}>Storage and Deletion</h2>
              <p>
                Our Website and App is hosted by external service providers
                based in South Africa.
              </p>
              <p>
                If you would like to delete your account with Carter, please
                contact us using the details below. Please note, however, that
                if you delete your account we may retain some of your details
                (for example if you have made a complaint about our Website or
                app), for as long as is necessary to protect us from a legal
                claim. If you unsubscribe from our marketing communications, we
                will keep a record of your email address to ensure we do not
                send you marketing emails in future.
              </p>
            </Section>
            <Section id="age-restriction">
              <h2 className={sectionTitleClasses}>Users under 18</h2>
              <p>
                Our Website and app is not intended for, and should not be used
                by, anyone under the age of 18. We do not knowingly collect
                personal information from individuals under 18.
              </p>
            </Section>
            <Section id="cookie-policy">
              <h2 className={sectionTitleClasses}>Cookie Policy</h2>
              <p>
                Our Websites uses cookies and similar technologies to provide
                certain functionality to the Websites, to understand and measure
                its performance, and to deliver targeted advertising.
              </p>
            </Section>
            <Section id="your-rights">
              <h2 className={sectionTitleClasses}>Your rights</h2>
              <p>
                You have certain rights in respect of your personal information,
                including the right to access, correct, and request the erasure
                of your personal information.
              </p>
              <p>
                You also have the right to object to your personal information
                being used for certain purposes, including to send you
                marketing. See ‘Marketing’ above, for more details of how to
                opt-out of marketing.
              </p>
              <p>
                We will comply with any requests to exercise your rights in
                accordance with applicable law. Please be aware, however, that
                there are a number of limitations to these rights, and there may
                be circumstances where we are not able to comply with your
                request. To make any requests regarding your personal
                information, or if you have any questions or concerns regarding
                your personal information, please contact us using the details
                below. You are also entitled to contact the South African
                Information Regulator.
              </p>
            </Section>
            <Section id="car-dealerships-and-job-applicants">
              <h2 className={sectionTitleClasses}>
                Car Dealerships and Job Applicants
              </h2>
              <p>
                This privacy statement is primarily aimed at users of our
                Websites and app. However, if you work for a car dealership with
                whom we partner or are applying for a job with Carter, please
                read the below.
              </p>
              <h3 className="text-base">Car Dealerships</h3>
              <p>
                If you work for a car dealership with whom we partner, we will
                collect your business contact details as well as other
                information relevant to our professional relationship with you,
                including quotes. We will also maintain a record of your
                communications with us, telephonic, instant messenger, via email
                or through our Dealer Portal.
              </p>
              <p>
                We may collect information about you from you directly, from
                your employer, from a user of our Website, or from publicly
                available sources (e.g. your dealership Websites).
              </p>
              <p>
                We will use this information for the purposes of developing and
                maintaining our partnership with you. If you would like to
                update or delete your information with Carter, you may use our
                Dealer Portal or contact us.
              </p>
              <h3 className="text-base">Job Applicants</h3>
              <p>
                If you apply for a job with any HeyCarter (Pty) Ltd subsidiary
                company, we will collect and use the information you provide to
                us in the course of your application to assess your suitability
                for the position you have applied for and for other roles in
                future, and to monitor diversity and equal opportunities within
                our recruitment process. Please note that as part of the
                application process, we may also collect information about you
                from third parties, for example recruiters, referees, or from
                publicly available sources (e.g. LinkedIn).
              </p>
            </Section>
            <Section id="paia">
              <h2 className={sectionTitleClasses}>
                PAIA (Promotion of Access to Information Act)
              </h2>
              <p>
                Carter operates in accordance with all provisions of the PAI
                Act. Please see our PAIA manual{" "}
                <a
                  className="font-medium text-blue-700"
                  href="https://misc.heycarter.co.za/POPIA_Form.pdf"
                >
                  here
                </a>
              </p>
            </Section>
            <Section id="contact-us">
              <h2 className={sectionTitleClasses}>Contact us</h2>
              <p>
                Carter operates in accordance with all provisions of the PAI
                Act. Please see our PAIA manual{" "}
                <a
                  className="font-medium text-blue-700"
                  href="mailto:hello@heycarter.co.za"
                >
                  hello@heycarter.co.za
                </a>
              </p>
            </Section>
          </div>
        </div>
      </div>
      <div className="mb-4"></div>
    </div>
  );
};

export default Page;
