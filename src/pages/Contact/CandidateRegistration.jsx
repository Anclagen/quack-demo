import CandidateRegistrationForm from "../../components/ContactForms/CandidateRegistrationForm/CandidateRegistrationForm";
import Section from "../../components/Sections/Section";
import Head from "../../components/Head";

const CandidateRegistration = () => {
  return (
    <>
      <Head title="Register Your Details | Quack Specialists Recruitment" description="Candidate Registration form." />
      <main>
        <Section bgColor="bg-zinc-200">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center text-black mb-10">Candidate Registration</h1>
            <CandidateRegistrationForm />
          </div>
        </Section>
      </main>
    </>
  );
};

export default CandidateRegistration;
