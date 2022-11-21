import ScrollTopButton from "../../components/ScrollTopButton";

const aTagClassess = "font-medium hover:underline block py-1";
const sectionTitleClasses = "text-xl border-b pb-4 mb-2";
const sectionClasses = "flex flex-col gap-3 text-sm pb-8";

const Section = ({ children }) => {
  return (
    <div className={sectionClasses}>
      <>{children}</>
      <ScrollTopButton />
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <div className="bg-gray-50 py-8 px-8">
        <h1 className="text-3xl">Terms of Use</h1>
        <p className="text-xs mt-1">
          These terms of use are applicable to HeyCarter (Pty) Ltd and its
          subsidiary companies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full py-4 relative">
        <div className="flex-grow flex pt-4 md:pt-0 px-8">
          <div className="max-w-[600px]">
            <Section>
              <h2 className={sectionTitleClasses}>Acceptance of Terms</h2>
              <p>
                By accessing or using this website, any of its pages and/or any
                of the services referenced herein, or our app, you accept and
                agree to be bound by the Terms of Use set forth below. If you do
                not agree to these terms, you must not use our sites or app.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                Other terms that may apply to you
              </h2>
              <p>
                Your use of certain materials and features of our websites or
                app and/or the services may be subject to additional terms and
                conditions which are incorporated herein by reference
                (specifically our privacy policy and cookie policy) and become
                part of the Terms of Use. By using those materials and features,
                you also agree to be bound by such additional terms and
                conditions. Unless explicitly stated otherwise, any new features
                that augment or enhance our current services shall be subject to
                the Terms of Use.
              </p>
              <p>
                This website is controlled and operated by HeyCarter (Pty) Ltd
                from its offices within South Africa. HeyCarter (Pty) Ltd makes
                no representation that information or materials available on
                this website are appropriate or available for use in other
                locations, and access to this website from territories where its
                contents are illegal is prohibited. Those who choose to access
                this website from other locations do so at their own initiative
                and are responsible for compliance with applicable local laws.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>How we expect you to act</h2>
              <p>
                You are authorized by HeyCarter (Pty) Ltd to access and use the
                services, including the information on our websites and app,
                solely for your personal, non-commercial use provided that you
                are at least 18 years of age. The information and materials
                displayed on our websites and app may not otherwise be copied,
                transmitted, displayed, distributed, downloaded, licensed,
                modified, published, posted, reproduced, used, sold,
                transmitted, used to create a derivative work, or otherwise used
                for commercial or public purposes without HeyCarter’s (Pty) Ltd
                express prior written consent. Any use of data mining, robots or
                similar data gathering or extraction tools or processes in
                connection with this website, and any reproduction or
                circumvention of the navigational structure or presentation of
                this website or its content, is strictly prohibited. You agree
                not to use the services, including our websites and app, for any
                unlawful purpose.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                We may make changes to these terms
              </h2>
              <p>
                We amend these terms from time to time. Every time you wish to
                use our sites, please check these terms to ensure you understand
                the terms that apply at that time.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                We may make changes to our site
              </h2>
              <p>
                We may update and change our sites from time to time. We will
                try to give you reasonable notice of any major changes.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                We may suspend or withdraw our sites/app
              </h2>
              <p>Our sites are made available free of charge.</p>
              <p>
                We do not guarantee that our sites or app, or any content on it,
                will always be available or be uninterrupted. We may suspend or
                withdraw or restrict the availability of all or any part of our
                sites for business and operational reasons. We will try to give
                you reasonable notice of any suspension or withdrawal.
              </p>
              <p>
                You are also responsible for ensuring that all persons who
                access our sites through your internet connection are aware of
                these terms of use and other applicable terms and conditions,
                and that they comply with them.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                Receiving offers on our sites from our dealer partners
              </h2>
              <p>
                We enable car dealers to provide you with offers for the sale or
                lease of cars through our sites and app (“Offers”). If you
                decide to buy or lease a car from a car dealer, you will be
                entering into an agreement with that dealer. We are not a party
                to that agreement.
              </p>
              <p>
                By showing an Offer to you through our sites or app, the dealer
                is not committed to sell or lease a car for that price, and by
                viewing or accepting an Offer through our sites or app, you are
                not committed to buying or leasing a car from that dealer.
              </p>
              <p>
                We cannot guarantee that you will receive any Offers, or whether
                any Offers will be issued.
              </p>
              <p>
                We are not obliged to review Offers, but may do so as part of
                our ongoing commitment to customer service or if you ask us to.
                We, or the dealer, may choose to edit or remove Offers at any
                time.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                How you may use material on our sites
              </h2>
              <p>
                We are the owner or the licensee of all intellectual property
                rights in our sites, and in the material published on it. Those
                works are protected by copyright laws and treaties around the
                world. All such rights are reserved.
              </p>
              <p>
                You may print off one copy, and may download extracts, of any
                page(s) from our sites for your personal use and you may draw
                the attention of others within your organisation to content
                posted on our sites.
              </p>
              <p>
                You may print off one copy, and may download extracts, of any
                page(s) from our sites for your personal use and you may draw
                the attention of others within your organisation to content
                posted on our sites.
              </p>
              <p>
                Our status (and that of any identified contributors) as the
                authors of content on our sites must always be acknowledged.
              </p>
              <p>
                You must not use any part of the content on our sites for
                commercial purposes without obtaining a licence to do so from us
                or our licensors.
              </p>
              <p>
                If you print off, copy or download any part of our sites in
                breach of these terms of use, your right to use our sites will
                cease immediately and you must, at our option, return or destroy
                any copies of the materials you have made.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                You must keep your account details safe
              </h2>
              <p>
                If you choose, or you are provided with, a user identification
                code, password or any other piece of information as part of our
                security procedures, you must treat such information as
                confidential. You must not disclose it to any third party.
              </p>
              <p>
                We have the right to disable any user identification code or
                password, whether chosen by you or allocated by us, at any time,
                if in our reasonable opinion you have failed to comply with any
                of the provisions of these terms of use.
              </p>
              <p>
                If you know or suspect that anyone other than you knows your
                user identification code or password, you must promptly notify
                us at{" "}
                <a
                  className="font-medium text-blue-700"
                  href="mailto:info@heycarter.com"
                >
                  info@heycarter.com
                </a>
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                Do not rely on information on these sites
              </h2>
              <p>
                The content on our sites is provided for general information
                only. It is not intended to amount to advice on which you should
                rely. You must obtain professional or specialist advice before
                taking, or refraining from, any action on the basis of the
                content on our sites.
              </p>
              <p>
                Although we make reasonable efforts to update the information on
                our sites, we make no representations, warranties or guarantees,
                whether express or implied, that the content on our sites is
                accurate, complete or up to date.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                We are not responsible for websites we link to
              </h2>
              <p>
                Where our sites contain links to other sites and resources
                provided by third parties, these links are provided for your
                information only. Such links should not be interpreted as
                approval by us of those linked websites or information you may
                obtain from them.
              </p>
              <p>
                We have no control over the contents of those sites or
                resources.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                Our responsibility for loss or damage suffered by you
              </h2>
              <p>If you are a business or consumer user:</p>
              <ul className="list-disc pl-12 flex flex-col gap-2">
                <li>
                  We exclude all implied conditions, warranties, representations
                  or other terms that may apply to our sites or any content on
                  it.
                </li>
                <li>
                  We will not be liable to you for any loss or damage, whether
                  in contract, tort (including negligence), breach of statutory
                  duty, or otherwise, even if foreseeable, arising under or in
                  connection with:
                  <ul className="list-disc pl-12 flex flex-col gap-2">
                    <li>Use of, or inability to use, our sites.</li>
                    <li>
                      Use of, or reliance on any content displayed on our sites.
                    </li>
                  </ul>
                </li>
              </ul>
              <p>In particular, we will not be liable for:</p>
              <ul className="list-disc pl-12 flex flex-col gap-2">
                <li>Loss of profits, sales, business, or revenue.</li>
                <li>Business interruption.</li>
                <li>Loss of anticipated savings.</li>
                <li>Loss of business opportunity, goodwill or reputation.</li>
                <li>Any indirect or consequential loss or damage.</li>
              </ul>
              <p>If you are a consumer user:</p>
              <ul className="list-disc pl-12 flex flex-col gap-2">
                <li>
                  Please note that we only provide our sites for domestic and
                  private use. You agree not to use our sites for any commercial
                  or business purposes, and we have no liability to you for any
                  loss of profit, loss of business, business interruption, or
                  loss of business opportunity.
                </li>
              </ul>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                How we may use your personal information
              </h2>
              <p>
                HeyCarter Pty (Ltd) is committed to respecting your privacy and
                protecting your personally identifiable information. HeyCarter
                Pty (Ltd) account data and certain other information about you
                and that you enter and/or we collect through your use of our
                websites or app are subject to the HeyCarter Privacy Policy. You
                understand that through your use of our services, including our
                websites and app, you consent to the collection and use (as set
                forth in the HeyCarter Pty (Ltd) Privacy Policy) of this
                information. Please review our Privacy Policy for further
                information on our data collection and use practices.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                We are not responsible for viruses and you must not introduce
                them
              </h2>
              <p>
                We do not guarantee that our sites will be secure or free from
                bugs or viruses.
              </p>
              <p>
                You are responsible for configuring your information technology,
                computer programmes and platform to access our sites. You should
                use your own virus protection software.
              </p>
              <p>
                You must not misuse our sites by knowingly introducing viruses,
                trojans, worms, logic bombs or other material that is malicious
                or technologically harmful. You must not attempt to gain
                unauthorised access to our sites, the server on which our sites
                are stored or any server, computer or database connected to our
                sites. You must not attack our sites via a denial-of-service
                attack or a distributed denial-of service attack. By breaching
                this provision, you would commit a criminal offence under the
                Computer Misuse Act 1990 or relevant local laws. We will report
                any such breach to the relevant law enforcement authorities and
                we will co-operate with those authorities by disclosing your
                identity to them. In the event of such a breach, your right to
                use our sites will cease immediately.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                {"Which country's laws apply to any disputes?"}
              </h2>
              <p>
                If you are a consumer or business, please note that these terms
                of use, their subject matter and their formation, are be
                governed by and construed in accordance with the laws of
                Johannesburg, Gauteng, 2196, South Africa. You and we both agree
                that the courts of Gauteng, South Africa will have exclusive
                jurisdiction
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                Our trade marks are registered
              </h2>
              <p>
                You are not permitted to use HeyCarter Pty (Ltd) and our
                subsidiaries trademarks without our approval.
              </p>
            </Section>
            <Section>
              <h2 className={sectionTitleClasses}>
                Please see our company policies below.
              </h2>
              <p>
                Please contact us by emailing{" "}
                <a
                  className="font-medium text-blue-700"
                  href="mailto:hello@heycarter.co.za"
                >
                  hello@heycarter.co.za
                </a>{" "}
                if you require more information.
              </p>
              <a
                className="font-medium text-blue-700"
                href="https://misc.heycarter.co.za/Treating_Clients_Fairly_Policy.pdf"
              >
                Carter Treating Clients Fairly Policy
              </a>
              <a
                className="font-medium text-blue-700"
                href="https://misc.heycarter.co.za/Complaints_Procedure.pdf"
              >
                Carter Complaints Procedure
              </a>
              <a
                className="font-medium text-blue-700"
                href="https://misc.heycarter.co.za/Conflict_of_interest_fraud_corruption_theft_and_maladministration_policy.pdf"
              >
                Carter Conflict of Interest, Fraud, Corruption, Theft and
                Maladministration policy
              </a>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
