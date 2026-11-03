export default function SoMuchP2P() {
  return (
    <>
      <p>
        Peer to peer is everywhere, even when we don't really expect it. Video conferencing,
        many file sharing programs, some games, all P2P! This technology has advanced an enormous
        amount since limewire and the old days of using bittorrent.
      </p>
      <p>
        But I'm not going to go over the long history of P2P and its use in the world--I just want to
        focus on the current state of P2P and the tech behind it.
      </p>
      <p>
        Our first subject: IPFS.
      </p>
      <p>
        IPFS (the Inter-Planetary File System, <a href="https://www.spacequarter.com/lockheed-martin-and-filecoin-foundation-innovate-ipfs-technology-for-space-exploration/" target="_blank">and yes, this really is used in-between planets!</a>)
        is one of the largest P2P networks in known existance. IPFS runs a content-addressed network on
        millions of devices. Peers publish a list of CIDs (file/content hashes) which they posess and then
        other peers use this published data to find who has what data. Then any peer that knows the hash of
        some content, for example a file or website, can aquire that data from any peer on the network who
        has the content.
      </p>
      <p>
        That's a bit of a mouthfull, but IPFS itself runs on an internal P2P library called <a href="https://libp2p.io/" target="_blank">LibP2P</a>.
      </p>
      <p>
        LibP2P is a cross-language modular framework for P2P connections over a variety of transport protocols
        for a variety of data protocols. LibP2P itself is a collection of standardized data specifications declaring
        how the devices should communicate, the actual implementations themself only have to conform to the specification
        to communicate with other devices using LibP2P. Because of this, devices running LibP2P in different languages can
        still communicate with eachother since they're just using the same protocol under the hood.
      </p>
      <p>
        Maybe I'm a little biased... but LibP2P is probally the best and most comprehensive full P2P framework that exists.
      </p>
      <p>
        The LibP2P project itself provides many official implementations across varying languages, such as <a href="https://libp2p.io/docs/getting-started/go/" target="_blank">Go</a>,
        {' '}<a href="https://libp2p.io/docs/getting-started/rust/" target="_blank">Rust</a>, <a href="https://libp2p.io/docs/getting-started/javascript/" target="_blank">Javascript/Typescript</a>, and
        even <a href="https://libp2p.io/docs/getting-started/nim/" target="_blank">Nim</a>.
      </p>
      <p>
        Because of the agnosticity of the framework, there's an <a href="https://github.com/libp2p/awesome-libp2p" target="_blank">abundance of applications</a> built in LibP2P
      </p>
      <p>
        Let's look at some code! Here's a basic example taken from LibP2P's go examples.
      </p>
      <pre class="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
        <code>
          {`package main

import (
    "fmt"
    "github.com/libp2p/go-libp2p"
)

func main() {
    // start a libp2p node with default settings
    node, err := libp2p.New()
    if err != nil {
        panic(err)
    }

    // print the node's listening addresses
    fmt.Println("Listen addresses:", node.Addrs())

    // shut the node down
    if err := node.Close(); err != nil {
        panic(err)
    }
}`}
        </code>
      </pre>
      <p>
        Thats it! Although this example only listens on local addresses and prints them, it shows how simple the framework can be to use.
        Theres far more that can be done, from NAT traversal to a DHT, the list goes on.
      </p>

      <p>
        Next up, <a target="_blank" href="https://www.bittorrent.com/">Bittorrent</a>.
      </p>
      <p>
        If you've not heard of Bittorrent or torrenting, you've probally been living in the woods. It's safe to say Bittorrent is the most
        famous (for good or bad) P2P protocol ever. Bittorrent is a file sharing P2P protocol that allows peers to download files from other
        peers (called seeders) at the same time rather than downloading a file from a single source. Peers then share chunks that they already
        have amongst one-another which results in fast and distributed file sharing.
      </p>
      <p>
        But the imfamy of Bittorrent and torrenting in general does not come from how useful it can be, it comes from pirates. While I'm not going
        to pass judgement on those who sail the high seas (after all, we've all wanted free movies before...), it's worth noting that since Piracy
        is illegal torrenting has become quite a hot topic in the media.
      </p>
      <p>
        There are thousands, likely tens of thousands, of sites hosting torrent files (or magnet links) for pirated content that users can use to
        download copyrighted content through their favorite Bittorrent client. The most famous of which is The Pirate Bay.
      </p>
      <p>
        But anyway, this article isn't about piracy, its about P2P.
      </p>
      <p>
        Bittorrent is generally used for file sharing as it's a single protocol rather than a whole modular framework like LibP2P, however the
        individual components can still be used for general P2P. For example, the Mainline DHT used for content discovery, can be used by itself
        rather than exclusively for file-sharing over Bittorrent. Since the specification is public, anyone can write their own implementation and
        communicate with the Bittorrent DHT (for example, <a href="https://crates.io/crates/n0-mainline" target="_blank">N0's implementation</a>).
      </p>
      <p>
        Bittorrent is an established and very well-used protocol in the P2P space, and it's not going anywhere. But since it's really only designed
        for file-sharing it limits the use to be for, well, file-sharing. Additionally, many ISPs or networks block Bittorrent as a whole due to its
        link to media piracy, even though the protocol itself is innocent and has many legitamate uses.
      </p>
      <p>
        My final focus in this article, is an up and coming P2P library called <a target="_blank" href="https://iroh.computer">Iroh</a>.
      </p>
      <p>
        Iroh runs on a simple principle: "IP addresses break, dial keys instead". Uh... okay? What does this mean? You may ask. Well, the way Iroh works
        is somewhat different.
      </p>
      <p>
        Iroh is not exactly a pure P2P framework, as it relies on some centralization. Iroh clients need some sort of peer discovery method (well, not just iroh,
        P2P in general), and those methods all need some sort of centralization. Iroh clients connect to some sort of relay (by default N0's public relay) and
        announce their public key, which is a asymetric cryptographic key that identifies the peer on the network. Then, other clients can just contact the relay
        and ask for how they can connect to a given peer's key. In an optimal world, the relay temporarily lets peers send data over itself before a direct P2P connection
        can be made between the two peers over QUIC (NAT hole punching, IP address discovery, etc). Then the relay would drop the connection and just let the peers
        talk with eachother directly. However, if this direct connection fails, the relay will continue to... relay the data between the peers. Although Iroh peers
        can communicate without using a relay (IE, through MDNS or direct public IPs), the core point of Iroh is simple and reliable connections between peers which
        may or may not be behind a relay.
      </p>
    </>
  )
}
