import Image from "next/image";

const Home = () => {
  console.log('server render')
  return (
    <main>
      <Image src='/icon.png' alt="icon" width={100} height={100} />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
};

export default Home;
