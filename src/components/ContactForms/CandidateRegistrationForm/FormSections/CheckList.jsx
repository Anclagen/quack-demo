const Checklist = () => (
  <div>
    <p className="my-2">{"Before diving in, let’s ensure you have all necessary documents and information at your fingertips. Here's a checklist of what you'll be providing:"}</p>
    <h3 className="text-lg font-semibold">Essential Documents Checklist:</h3>
    <ul className="list-disc ms-4">
      <li>
        <b>Proof of Address: </b>
        {"Any recent utility bills, bank statements, or official mail addressed to you. "}
      </li>
      <li>
        <b>Proof of Identification,</b> such as Passport, Full birth certificate, BRP (Biometric Residence Permit) cards
      </li>
      <li>
        <b>Proof of National Insurance Number,</b> such as a NI Card, P45, P60, HMRC Letter, Payslip with NI Number on
      </li>
    </ul>
    <h4 className="font-semibold">Foreign Nationals</h4>
    <ul className="list-disc ms-4">
      <li>
        <b>Sharecode (if applicable):</b> For non-UK nationals, a sharecode will be needed to verify your eligibility to work in the UK.
      </li>
      <li>
        <b>Visa (if applicable):</b> For non-UK nationals, if you have a work visa for the UK.
      </li>
      <li>
        <b>Indefinite Leave to Remain (if applicable):</b> For non-UK nationals, if you have Indefinite Leave to Remain. Acceptable forms: passport endorsement or BRP card.
      </li>
      <li>
        <b>Proof of student term time and attendance (if applicable):</b> for international students.
      </li>
    </ul>
    <p className="my-2">These should each be in a PDF, jpeg, jpg or png format and no larger than 3MB in size.</p>
    <h3 className="my-2 text-lg font-semibold"> Additional Information:</h3>
    <ul className="list-disc ms-4">
      <li>
        <b>Personal Details:</b> Full name, date of birth, gender, contact and address details.
      </li>
      <li>
        <b>Availability:</b> time of day and days of the week.
      </li>
      <li>
        <b>Reference Details:</b> Company, position, reason for leaving, reference contact details.
      </li>
      <li>
        <b>Other Personal Questions: </b>Disability status, medical status, adjustments, and convictions.
      </li>
      <li>
        <b>Emergency Contacts: </b>
        {"Your next of kin's name and contact number."}
      </li>
      <li>
        <b>Banking Details:</b> {" Your bank's name, account name, sort code, and account number."}
      </li>
    </ul>
    <p className="my-2">{"Once you've gathered all the required items, proceed to complete the form. If you encounter any challenges, our support team is here to assist you."}</p>
  </div>
);

export default Checklist;
