import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      // router.go(-1)  means go back
    }, 2000);
  }, []);

  return (
    <div className="not-found">
      <h1> Oooops... </h1>
      <h2> That page cannot be found.</h2>
      <p>
        Return back to the
        <Link href="/">
          <a> Homepage </a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
