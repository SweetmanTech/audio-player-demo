import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MyIFrame from "../components/MyIFrame"
import { AudioPlayer, PersistentPlayer } from '@decent.xyz/sdk/node_modules/decent-audio-player';
import { Song } from 'decent-audio-player/dist/types/shared';

const Home: NextPage = () => {
  const playlist = [{
    songUrl: "https://streams.radiomast.io/09c93c79-cd31-46ab-aeeb-69eee7d313e2",
    project: "shiny",
    artist: "kat dahlia",
    website: "https://github.com/SweetmanTech",
    image: "https://nftstorage.link/ipfs/QmVJBGbMXHNyBe62ruPByK5MG6KdbZkSGPiBMfpqRQ6qP2"
  }, {
    songUrl: "https://nftstorage.link/ipfs/bafybeid3su3rqfwj7ydk52coz3xinku5vc7uu557t7rdkxx5dswcbxolda",
    project: "rugburn by sad alex",
    artist: "sad alex & chillpill",
    website: "https://github.com/SweetmanTech",
    image: "https://nftstorage.link/ipfs/bafybeif55mfehhzipicowg7fpdvdmgulwk6jgz2pbbxwuxjt7pmr7swlvu"
  }];

  return (
    <div className={styles.container}>
      <Head>
        <title>iframe App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Decent Audio Player
        </h1>
        <AudioPlayer hasPlayer size={56} audioSrc='https://nftstorage.link/ipfs/QmWNaSdhXq2WdusiBcVC2Ju5A1JJySRDVNrQMEBGcaazvC' callbackAfterPlay={console.log} active />

        {/* <PersistentPlayer playlist={playlist} /> */}
      </main>
    </div>
  );
};

export default Home;
