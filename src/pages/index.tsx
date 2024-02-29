import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Ball from "@/components/ball/ball";
import Spline from '@splinetool/react-spline';
import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Sub from "@/components/sub/sub";
import Subcribe from "@/components/subcribe/subcribe";

export default function App() {
  return (
    <>
      <main>
        <Header />
        <div className={styles.hero}>
            <Ball />
            <h1>Welcome to PokeFormula</h1>
            <h2>Your number 1 destination for Pokemon stats and information!</h2>
        </div>
        <div className={styles.cardContainer}>
          <Card 
            header="Collect TCG Cards" 
            description="Win Pokemon TCG cards and build your collection!"
            button="START COLLECTING"
            >
            <Spline scene="https://prod.spline.design/jqd-Q-8Niae8a9BN/scene.splinecode" />
          </Card>
          <Card
            header="Battle 1v1"
            description="Challenge others and test your strength!"
            button="JOIN BATTLE"
            >
             <Spline scene="https://prod.spline.design/5Oq2sDZVeZcFmUkI/scene.splinecode" />
          </Card>  
        </div>
        <Sub />
        <Subcribe />
        <Footer />
      </main>
    </>
    
  );
}


