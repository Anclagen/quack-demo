import Section from "../../components/Sections/Section";
import Head from "../../components/Head";
import ClientForm from "../../components/ContactForms/ClientForm/ClientForm";

const RegisterEmployer = () => {
  return (
    <>
      <Head title="Employers Enquiry Form" description="Register With Us" />
      <main>
        <Section bgColor="bg-zinc-200">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center text-black mb-10">Employers Enquiry Form</h1>
            <ClientForm />
          </div>
        </Section>
      </main>
    </>
  );
};

export default RegisterEmployer;
