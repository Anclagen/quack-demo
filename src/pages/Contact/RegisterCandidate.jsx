import RecruitmentForm from "../../components/ContactForms/RecruitmentForm/RecruitmentForm";
import Section from "../../components/Sections/Section";
import Head from "../../components/Head";

const RegisterCandidate = () => {
  return (
    <>
      <Head title="Register Your CV" description="Register With Us" />
      <main>
        <Section bgColor="bg-zinc-200">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center text-black mb-10">Register With Us</h1>
            <RecruitmentForm />
          </div>
        </Section>
      </main>
    </>
  );
};

export default RegisterCandidate;
