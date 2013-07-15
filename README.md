![William](https://dl.dropboxusercontent.com/u/2146484/william-poster-v0.png)

# William

**Fuck off, [Panopticon](https://en.wikipedia.org/wiki/Panopticon).**

<a href="http://www.cornify.com" onclick="cornify_add();return false;"><img src="http://www.cornify.com/assets/cornify.gif" width="61" height="16" border="0" alt="Cornify" /></a><script type="text/javascript" src="http://www.cornify.com/js/cornify.js"></script> <a href="#" onclick="sharkify_add();return false;"><img src="http://www.iamcal.com/sharkify/sharkify.gif" width="61" height="16" border="0" alt="Sharkify" /></a><script type="text/javascript" src="http://www.iamcal.com/sharkify/sharkify.js"></script>

A frontend (and API) for [mesh networks](https://en.wikipedia.org/wiki/Mesh_networks). Think of it as your future *Community Operating System*.

The idea is to abstract away all the different mesh networks, groups, firmwares and protocols from the user. She turns on her thingy, tells her neighbor, and they can start chatting after connecting their laptops/tablets/screenreaders the network.

So far this is just a random collection of (half-)baked ideas, many of which are floating in my head for years. Some are even contradicting each other. Please note that as far networking goes, I have no idea what I am talking about...

## Need

A mesh network is not the end, it is the means. We need to define concrete use cases and build simple frontend apps for that. Chat. Filesharing. Mediastreams. Digital library. Wiki scraping/importing. Events. agendas/timetables. Ticketing/RSVP for Meetups/BarCamps/...  and CC-BY-NC-SA is the new default.

If [Prism](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)) showed us anything, then that the current centralized version of the internet is ALL WRONG™. See [Why browsers should offer login by michielbdejong](http://michielbdejong.tumblr.com/post/4863349670/why-browsers-should-offer-login) for a great introduction on a decentral frontend web.

## User Onboarding:

This is how "unboxing" should work:

- turn on the thing, wait til it shows "green"
- Connect device to the network (laptop, tablet, screenreader)
- browser opens welcome page with chat
- Knock on your neighbor's door
- tell her/him to connect to the network
- Chat away

There is zero configuration/signup on first run. Everything runs on defaults which can be re-configured later. Turn on; tune in; fuck off, Panopticon.


## API and plugins

Every local mesh group could build its plugin against the API of the frontend.

Data is primarily stored on the users device (Laptop, tablet, etc). Any storage in the hardware hosts is only for different levels of caching to reduce latency.

## What about internet?

The possibility of having *internet via the mesh* should be a given. More important is having *the mesh via the internet*.

## Metaphors and Visualization

- Sea: research team. base station(s). Flottila/armada. submarines. Diving suit.
- Space: suns. planets. Moons. Rockets. Spaceships. Base stations. Gliders. 
- latency does map to felt distance => circels with orbitingg dots => another vote for the space metaphor
- there are no "load times" or similar technical things. As a default, everything is translated into the metaphorical space. Loading time to first connect to a distant node eg might be shown as travelling through space.
- Debug mode is available with a keyboard shortcut. All visualization can be turned off by the node owner(s).

## Fixed nodes

Thinking in "blocks" as they form a city (square of connected buildings). longitude/lattitude coordinates.
![](https://dl.dropboxusercontent.com/s/6fjsrnjzy7i40wh/2013-07-09%20at%2014.38.png)

connect to neighbors to…

- share resources
- feel less alienated
- meet-up, par-tey
- Organize support for the block's 3D printer, lasercutter, CNC, Cow, Chickens, bike repair store…
- organize direct ordering at farms instead of each one driving to the supermarket
- organize car sharing
- organize child-care
- keep community clean and safe
- asf... 
- become independent from data-hosting web apps

___

- Fixed nodes provide a safe heaven for "normal users". Since the real-life locations of those nodes are known, and they are owned by the local neighborhood, the chance of containing maliciuos code is minimal. Also, these are connected via the inernet, so a central collective authority could ensure their safety. Maybe fixed nodes are checkable for integrity (image checksum?).
- **The fixed nodes represent Planet Earth. All the rest of the universe is up for us to build.**

## Mobile/ad-hoc/event/outside… nodes

connect to other attendants/campers/... to
  
- have channels/communities for usergroups, barcamps, conferences, tracks, talks, topics,… 
- become independent from data-hosting web apps

## Auth

How does authentication work? Smartcard? Fingerprint? Gpg? RSA? Crossed with  device UUID?


## Hardware

A cardboard pyramid is housing a Raspi. Two sides of the pyramid are solar panels which feed to an internal battery. One side is simple mesh to let the hot air out. On top is/are RGB LEDs to show general status of network, status of battery and eg urgent messages, emergencies, etc.

![](https://dl.dropboxusercontent.com/u/2146484/william.jpg)

- master/slave mode vs. configuring a node cluster => master/slave mode via hardware switch?

## Software

One main, "official" Raspi-image could be maintained by the community. 

- Channels. Every planet has a channel. Every project, every system can have a subchannel. Every message (or parts) can be dragged into a node library. It becomes an (index)card. With an id. Who has access to the whole library? Does every card have an owner and permissions?
- Filesharing. Tagging, no folders. A user shares files, other people can pull. Or push to channel/planet/community – it becomes then part of the library, and is cached on the current host of the node (if hardware has sufficient diskspace). Soft Quotas.
- Several nodes can run on the same host. So you can have your standard interface open node for your neighbors *and* your anonymized, nearly invisible node only your friends know about on the same host.
- Apps (and Plugins). "As a node maintainer I want my node to enable Bitcoin exchange by choosing the Bitcoin app." "As a node maintainer I want to enable my node to offer videoconferencing by installing…"  See [PRISM Break](https://prism-break.org/) for a comprehensive inital list…
- Every functionality besides chat and filesharing is a module.
- Maybe a hardware host is the sun, which powers your node with resources (data computing power). Your node is a planet. Planets can switch suns at all times.

## Distribution

As soon as a local mesh group has a working plugin, it can give out… 

- pre-written SD-cards
- DIY-Kits (Cardboard, piece of mesh, wifi-piece, led, battery, etc, so: "instant node: just add Raspi")
- Complete ready-to-run nodes

Actually working on a tool which automates the making process should have high priority. It should do:

- Preconfigure super-admin user, network and admin data, etc
- write the SD-card image
- Print out one sheet of paper with the inital data


## Uhm… where is the code, bro? 

There is no code yet. Only this first collection of ideas.

## Next steps:

- afternoon hack session proof of concept: two laptops chatting over [Freifunk](https://en.wikipedia.org/wiki/Freifunk), either frontend only (if possible) or host app running on Raspi. A little tools/code/frameworks/protocols as possible. Can two browsers connect directly via Freifunk and exchange messages in raw JSON?

___

## Links & Talks

<iframe src="http://player.vimeo.com/video/69451712?byline=0&amp;portrait=0" width="500" height="161" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

---

<iframe width="560" height="315" src="http://www.youtube.com/embed/QOEMv0S8AcA?rel=0" frameborder="0" allowfullscreen></iframe>

---

- [16+ Projects & Initiatives Building Ad-Hoc Wireless Mesh Networks | Emergent By Design](http://emergentbydesign.com/2011/02/11/16-projects-initiatives-building-ad-hoc-wireless-mesh-networks/)
- [HowStuffWorks "How Wireless Mesh Networks Work"](http://computer.howstuffworks.com/how-wireless-mesh-networks-work.htm)
- [Mesh networking - Wikipedia](https://en.wikipedia.org/wiki/Mesh_networking)
- [Questions containing 'mesh' - Network Engineering Stack Exchange](http://networkengineering.stackexchange.com/search?q=mesh)
- [Introduction to wireless mesh routing protocols by Alan Holt | Utility Networks](http://www.utilitynetworks.co.uk/site/content/introduction-wireless-mesh-routing-protocols-alan-holt)
- [OSI model - Wikipedia](https://en.wikipedia.org/wiki/OSI_model), [Internet protocol suite - Wikipedia](https://en.wikipedia.org/wiki/Internet_protocol_suite)
- [Wireless Mesh Networking - O'Reilly](http://www.oreillynet.com/pub/a/wireless/2004/01/22/wirelessmesh.html)
- [Richardson Maturity Model (APIs)](http://martinfowler.com/articles/richardsonMaturityModel.html)
- [GPL vs. BSD vs. MIT License](http://recomparison.com/comparisons/101197/gpl-vs-bsd-vs-mit-license/)
- [WebRTC](http://www.webrtc.org/)
- [Getting Started with WebRTC - HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webrtc/basics/)
- [webrtc · WebPlatform.org](http://docs.webplatform.org/wiki/apis/webrtc)
- [Why browsers should offer login by michielbdejong](http://michielbdejong.tumblr.com/post/4863349670/why-browsers-should-offer-login)
- [Freifunk](https://en.wikipedia.org/wiki/Freifunk)
- [PRISM Break](https://prism-break.org/)
- [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html)

---
- [Chris Ball » WebRTC without a signaling server](http://blog.printf.net/articles/2013/05/17/webrtc-without-a-signaling-server/)
- [Sharefest](http://www.sharefest.me/), [Peer5/ShareFest](https://github.com/Peer5/ShareFest#how-does-it-work), [Sharefest | Hacker News thread](https://news.ycombinator.com/item?id=5824114)
- [Open Peer | Open P2P Protocol & Specification](http://openpeer.org/)
- [ShareIt-project (ShareIt!)](https://github.com/ShareIt-project)
- [PeerJS - Peer-to-peer data in the web browser](http://peerjs.com/)
- [P is for Peer-to-Peer Networking](http://ozan.io/p/)
  ![](http://ozan.io/p/resource/image/ping-pong-flow.png)
- f


## Copyright and Licence

This doc: licenced via [CC BY-NC-SA 3.0 (Creative Commons — Attribution-NonCommercial-ShareAlike 3.0 Unported)](https://creativecommons.org/licenses/by-nc-sa/3.0/).
© 2010-2013 [Fabian Fabian](http://filtercake.com).

Images: [File:Presidio Modelo.JPG - Wikipedia](https://en.wikipedia.org/wiki/File:Presidio_Modelo.JPG). [Nyan_Cat_Wide.jpg (1920×1080)](http://images.dailytech.com/nimage/Nyan_Cat_Wide.jpg).

<a href="https://github.com/filtercake/william"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub"></a>