import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePageComponent from "@/components/homePageComponent";

export default function Home() {

  console.log(process.env.REACT_BACKEND_API, "RRR");
  return (
    <>
      <HomePageComponent />
    </>
  );
}
