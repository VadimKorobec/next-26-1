import Image from "next/image";

const Home = () => {
  return (
    <main>
      <Image src='/icon.png' alt="icon" width={10} height={10} />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
};

export default Home;
