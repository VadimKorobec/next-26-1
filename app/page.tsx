import Header from "@/components/Header";

const Home = () => {
  console.log("server render");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
};

export default Home;
