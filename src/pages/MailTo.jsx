const MailTo = () => {
  return (
    <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h1 className="mb-8 font-extrabold text-2xl">Mail to Example</h1>
          <a
            className="text-violet-950 hover:text-violet-600"
            href="mailto:sales@quackspecialist.co.uk?subject=Candidate%20Registration&amp;body=Please%20attach%20the%20following%20documents%20before%20sending%20your%20registration%20details:%0A
            - Proof%20of%20address%0A
            - Indefinite%20leave%0A
            - Passport%0A
            - Birth%20certificate%0A
            - Visa%20(optional%20for%20foreign%20nationals%20and%20students)%0A
            - National%20insurance%0A
            - Sharecode%0A
            - Student%20term%20time%20confirmation%20of%20attendance%20(optional%20for%20foreign%20nationals%20and%20students)%0A%0A    
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
            |Click Me To Send Candidate Registration Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default MailTo;
