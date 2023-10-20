import Section from "../../components/Sections/Section";
import Head from "../../components/Head";
import { useRef } from "react";

const CandidateRegistrationFallback = () => {
  const contentRef = useRef(null);

  const handleSelectAll = () => {
    if (contentRef.current) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(contentRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleCopyText = async () => {
    const textToCopy = `
Please attach the following documents before sending your registration details:
... [Include all the other content here]
      `;

    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text. Please select the content manually and copy.", err);
    }
  };

  return (
    <>
      <Head title="Register Your CV" description="Candidate Registration" />
      <main>
        <Section bgColor="bg-zinc-200">
          <div className="max-w-screen-md mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-center text-black mb-10">Candidate Registration Email Template</h1>
              <p> Please use the mail to link below to open you mail client and send the candidate registration email.</p>
              <a
                className="text-violet-950 hover:text-violet-600 font-semibold mt-1 text-xl"
                href="mailto:sales@quackspecialists.co.uk?subject=Candidate%20Registration&amp;body=Please%20attach%20the%20following%20documents%20before%20sending%20your%20registration%20details:%0A
        - Proof%20of%20address%0A
        - Indefinite%20leave%0A
        - Passport%0A
        - Birth%20certificate%0A
        - Visa%0A
        - National%20insurance%0A
        - Sharecode%0A
        - Student%20term%20time%20confirmation%20of%20attendance%0A%0A
        Candidate%20Registration%0A%0A
        --Personal%20Details--%0A
        Title:%20%0A
        First%20Name:%20%0A
        Last%20Name:%20%0A
        Date%20of%20Birth%20(yyyy-mm-dd):%20%0A
        Gender:%20%0A
        NI%20number:%20%0A
        Share%20Code:%20%0A%0A
        --Contact%20Details--%0A
        Email:%20%0A
        Phone%20Number:%20%0A
        address:%0A
        %0A
        %0A
        --Availability--%0A
        Shift%20times:%20%0A
        Available%20days:%20%0A
        Available%20from%20(yyyy-mm-dd):%20%0A%0A
        --Emergency%20Contact--%0A
        Name:%20%0A
        Relationship:%20%0A
        Phone%20Number:%20%0A%0A
        --Bank%20Details--%0A
        Account%20Holder:%20%0A
        Account%20Number:%20%0A
        Sort%20Code:%20%0A
        Bank%20Branch:%20%0A%0A
        --%20Reference%20Details%20--%0A
        Company/Agency:%20%0A
        Employed%20from%20(yyyy-mm-dd):%20%0A
        Employed%20to%20(yyyy-mm-dd):%20%0A
        Reason%20for%20Leaving:%20%0A
        Reference%20Name:%20%0A
        Reference%20Phone%20Number:%20%0A
        Reference%20Email:%20%0A%0A
        --%20Questionnaire%20--%0A
        Convictions:%20%0A
        Disabilities:%20%0A
        Medical%20Conditions:%20%0A
        Need%20Work%20Place%20Adjustments:%20%0A"
              >
                Send Candidate Registration Email
              </a>
            </div>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
              <p>{"If the button above doesn't open your email client:"}</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  Alternatively, you can copy the contents below, fill it out and manually send it to us at{" "}
                  <a href="mailto:sales@quackspecialists.co.uk" className="underline">
                    sales@quackspecialists.co.uk
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h2 className="text-lg font-medium mb-2">Copyable Email Content:</h2>
              <div className="mt-2 space-x-4">
                {/* Copy Button */}
                <button onClick={handleCopyText} className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-150">
                  Copy to Clipboard
                </button>

                {/* Select All Button */}
                <button onClick={handleSelectAll} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150">
                  Select All Content
                </button>
              </div>
              <pre ref={contentRef} className="w-full p-2 border rounded whitespace-pre-wrap break-words">
                {`
Candidate Registration

Attachments
Please attach the following documents before sending your registration details:
 - Proof of address
 - Indefinite leave
 - Passport
 - Birth certificate
 - Visa (Required for foreign nationals and students)
 - National insurance
 - Sharecode
 - Student term time confirmation of attendance (Required for foreign nationals and students)

 Personal Details
 Title: 
 First Name: 
 Last Name: 
 Date of Birth (yyyy-mm-dd): 
 Gender: 
 National Insurance number: 
 Share Code: 

 Contact Details
 Email: 
 Phone Number: 
 address:

 Availability
 Shift times: eg. AM, PM, Nights
 Available days: 
 Available from (yyyy-mm-dd): 
 
 Emergency Contact
 Name: 
 Relationship: 
 Phone Number: 

 Bank Details
 Account Holder: 
 Account Number: 
 Sort Code: 
 Bank Branch: 

 Reference Details
 Company/Agency: 
 Employed from (yyyy-mm-dd): 
 Employed to (yyyy-mm-dd): 
 Reason for Leaving: 
 Reference Name: 
 Reference Phone Number: 
 Reference Email: 

 Questionnaire
 Do you have any convictions? (if yes provide details)
 Do you have any disabilities? (if yes provide details)
 Do you have any medical conditions? (if yes provide details)
 Do you need any reasonable work place adjustments? (if yes provide details)

                `}
              </pre>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default CandidateRegistrationFallback;
