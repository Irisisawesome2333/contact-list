import styles from "../../styles/Contacts.module.css";
import Link from "next/dist/client/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <div>
      <h1>All contacts</h1>
      {contacts.map((contact) => (
        <Link href={"/contacts/" + contact.id} key={contact.id}>
          <a className={styles.single}>
            <h3>{contact.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
