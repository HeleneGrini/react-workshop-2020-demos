import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div className="container d-flex flex-column ">
      <div className="mt-5">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => router.push("/react")}
        >
          React demos
        </button>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => router.push("/typescript")}
        >
          TypeScript demos
        </button>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => router.push("/react")}
        >
          Forms demos
        </button>
      </div>
    </div>
  );
};

export default Home;
