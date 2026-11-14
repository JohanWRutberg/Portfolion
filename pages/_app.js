import "../styles/globals.css";

import Head from "next/head";

// Components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// Router
import { useRouter } from "next/router";

// Framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Johan Rutberg – Frontendutvecklare</title>
        <meta
          name="description"
          content="Portfolio för Johan Rutberg, frontendutvecklare i Stockholm. Projekt, tjänster och kontakt."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
