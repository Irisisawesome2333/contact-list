import Head from "next/dist/shared/lib/head";
const About = () => {
  return (
    <>
      <Head>
        <title>Contact List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <p>
          This a personal contact list that contains the name, phone number and
          address, etc. of each contact
        </p>
      </div>
    </>
  );
};

export default About;
