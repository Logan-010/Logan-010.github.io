---
id: 2
title: So Much P2P
description: The state of P2P connectivity in the wild
date: "2026-11-03"
---

Peer to peer is everywhere, even when we don't really expect it. Video
conferencing, many file sharing programs, some games, all P2P! This technology
has advanced an enormous amount since Limewire and the old days of using
BitTorrent.

But I'm not going to go over the long history of P2P and its use in the world–I
just want to focus on the current state of P2P and the tech behind it.

Our first subject: IPFS.

<img loading="lazy" src="/blog/so-much-p2p/kubo.jpg" alt="Kubo WebUI" />

<p class="text-xs">Screenshot from Kubo, a IPFS client.</p>

IPFS (the interplanetary filesystem,
<a href="https://www.spacequarter.com/lockheed-martin-and-filecoin-foundation-innovate-ipfs-technology-for-space-exploration/" target="_blank">and
yes, this really is used in-between planets!</a>) is one of the largest P2P
networks in known existence. IPFS runs a content-addressed network on millions
of devices. Peers publish a list of CIDs (file/content hashes) which they
possess and then other peers use this published data to find who has what data.
Then any peer that knows the hash of some content, for example a file or
website, can acquire that data from any peer on the network who has the content.

That's a bit of a mouthful, but IPFS itself runs on an internal P2P library
called <a href="https://libp2p.io/" target="_blank">LibP2P</a>.

LibP2P is a cross-language modular framework for P2P connections over a variety
of transport protocols for a variety of data protocols. LibP2P itself is a
collection of standardized data specifications declaring how the devices should
communicate, the actual implementations them self only have to conform to the
specification to communicate with other devices using LibP2P. Because of this,
devices running LibP2P in different languages can still communicate with each
other since they're just using the same protocol under the hood.

Maybe I'm a little biased… but LibP2P is probably the best and most
comprehensive full P2P framework that exists.

The LibP2P project itself provides many official implementations across varying
languages, such as
<a href="https://libp2p.io/docs/getting-started/go/" target="_blank">Go</a>,
<a href="https://libp2p.io/docs/getting-started/rust/" target="_blank">Rust</a>,
<a href="https://libp2p.io/docs/getting-started/javascript/" target="_blank">JavaScript/TypeScript</a>,
and even
<a href="https://libp2p.io/docs/getting-started/nim/" target="_blank">Nim</a>.

Because of the agnosticism of the framework, there's an
<a href="https://github.com/libp2p/awesome-libp2p" target="_blank">abundance of
applications</a> built in LibP2P

Let's look at some code! Here's a basic example taken from LibP2P go examples.

```
package main

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
}
```

That's it! Although this example only listens on local addresses and prints
them, it shows how simple the framework can be to use. There's far more that can
be done, from NAT traversal to a DHT, the list goes on.

Next up, <a target="_blank" href="https://www.bittorrent.com/">BitTorrent</a>.

<img loading="lazy" src="/blog/so-much-p2p/transmission.jpg" alt="Transmission downloading a movie" />

<p class="text-xs">Screenshot from Transmission, a torrent client.</p>

If you've not heard of BitTorrent or torrenting, you've probably been living in
the woods. It's safe to say BitTorrent is the most famous (for good or bad) P2P
protocol ever. BitTorrent is a file sharing P2P protocol that allows peers to
download files from other peers (called seeders) at the same time rather than
downloading a file from a single source. Peers then share chunks that they
already have amongst one-another which results in fast and distributed file
sharing.

But the infamy of BitTorrent and torrenting in general does not come from how
useful it can be, it comes from pirates. While I'm not going to pass judgment on
those who sail the high seas (after all, we've all wanted free movies before…),
it's worth noting that since Piracy is illegal torrenting has become quite a hot
topic in the media.

There are thousands, likely tens of thousands, of sites hosting torrent files
(or magnet links) for pirated content that users can use to download copyrighted
content through their favorite BitTorrent client. The most famous of which is
The Pirate Bay.

But anyway, this article isn't about piracy, its about P2P.

BitTorrent is generally used for file sharing as it's a single protocol rather
than a whole modular framework like LibP2P, however the individual components
can still be used for general P2P. For example, the Mainline DHT used for
content discovery, can be used by itself rather than exclusively for
file-sharing over BitTorrent. Since the specification is public, anyone can
write their own implementation and communicate with the BitTorrent DHT (for
example, <a href="https://crates.io/crates/n0-mainline" target="_blank">N0's
implementation</a>).

BitTorrent is an established and very well-used protocol in the P2P space, and
it's not going anywhere. But since it's really only designed for file-sharing it
limits the use to be for, well, file-sharing. Additionally, many ISP's or
networks block BitTorrent as a whole due to its link to media piracy, even
though the protocol itself is innocent and has many legitimate uses.

My final focus in this article, is an up and coming P2P library called
<a target="_blank" href="https://iroh.computer">Iroh</a>.

<img loading="lazy" src="/blog/so-much-p2p/sendme.gif" alt="Sending a file with Sendme" />

<p class="text-xs">Using <a href="https://www.iroh.computer/sendme" target="_blank">sendme</a>, an Iroh-based file sharing program.</p>

Iroh runs on a simple principle: "IP addresses break, dial keys instead". Uh…
okay? What does this mean? You may ask. Well, the way Iroh works is somewhat
different.

Iroh is not exactly a pure P2P framework, as it relies on some centralization.
Iroh clients need some sort of peer discovery method (well, not just Iroh, P2P
in general), and those methods all need some sort of centralization. Iroh
clients connect to some sort of relay (by default N0's public relay) and
announce their public key, which is an asymmetric cryptographic key that
identifies the peer on the network. Then, other clients can just contact the
relay and ask for how they can connect to a given peer's key. In an optimal
world, the relay temporarily lets peers send data over itself before a direct
P2P connection can be made between the two peers over QUIC (NAT hole punching,
IP address discovery, etc.). Then the relay would drop the connection and just
let the peers talk with each other directly. However, if this direct connection
fails, the relay will continue to… relay the data between the peers. Although
Iroh peers can communicate without using a relay (IE, through MDNS or direct
public IP's), the core point of Iroh is simple and reliable connections between
peers which may or may not be behind a relay.

In theory, this sounds great! You can have P2P connectivity when it's possible,
and when its not you can still connect to a device through a relay. And it
practice, its also (usually) great. The only downsides on the actual application
side is the centralization of peer discovery. Even though alternatives exist, it
still is second class (as of now… N0 is adding new experimental transports and
peer discovery such as using BitTorrent's Mainline DHT). However, there's
another small downside, which is that it's really just a Rust library. While FFI
bindings for other languages like Go and JavaScript exist, they're certainly
less polished and nice to use than the main Rust implementation. For Rust
developers (including myself), this isn't a problem as I use the language
anyway. But for many who don't, they're unable to use Iroh except through
(currently) shaky FFI bindings and cannot communicate with Iroh devices as
opposed to LibP2P which has complete cross-language compatibility.

I certainly don't want to make Iroh sound unmaintained or unusable. It's an
extremely useful framework that I've built applications in, such as
<a href="https://github.com/Logan-010/capsul">capsul</a>, a reliable P2P file
storage system.

To conclude, there's a LOT of P2P technologies found in the wild, much of it is
easier and more accessible than ever to both developers and users. Long gone are
the days of extremely complicated, DIY, and broken P2P networks developers have
to hand-roll themselves. Instead, they can reach for an already existing
framework or library and just start building. There's still a long way to go,
but I believe we're in the golden age of P2P.
