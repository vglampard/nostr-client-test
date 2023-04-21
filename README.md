
# Nostr Client 

I'm playing around with Nostr's decentralised social media protocol. 

![Nostr logo](/src/nostr.jpg)

It's **"a simple, open protocol that enables a truly censorship-resistant and global social network"**, with multiple relays that users can subscribe to with a simple public/private key combination in lieu of other more personal (read: identifying) credentials. 

It launched late last year, although has been in development for significantly longer, and is already rallying a hugely dynamic ecosystem.

So I'm building out a simple client to play around with the different relays and event types - for the moment, it's just subscribing to long-form text events. And I'll just be tooling around to see how I can link up simple funcitonalities like corralling all comments under the correct posts, and getting a slick design in place.

See the live and VERY early MVP [here](https://nostrami.netlify.app/) - I've throttled the content coming through to calm down the feed a little, and am currently subscribed only to the relatively spam-free relay.nostr.band/trusted whilst I'm testing out things like filters and features. 

## Next Steps

I'm going to play around building out features like: 
- searching for content from specific users, 
- Posting content to the relay,
- encrypted messaging. 

🚀🚀🚀

[
  {
    "id": "c189d28a75ffede2f42f12c63533949092ba4f4fd083804d2a08dc7faf698908",
    "kind": 0,
    "pubkey": "82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2",
    "tags": [],
    "created_at": 1682072098,
    "content": "{\"banner\":\"https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg\",\"website\":\"\",\"lud06\":\"LNURL1DP68GURN8GHJ7AMPD3KX2AR0VEEKZAR0WD5XJTNRDAKJ7TNHV4KXCTTTDEHHWM30D3H82UNVWQHHW6TWDE5KUEMZD3HHWEM4DCURVNYWCP4\",\"reactions\":false,\"picture\":\"https://nostr.build/i/p/nostr.build_6b9909bccf0f4fdaf7aacd9bc01e4ce70dab86f7d90395f2ce925e6ea06ed7cd.jpeg\",\"display_name\":\"jack\",\"about\":\"bitcoin & chill\",\"name\":\"\"}",
    "sig": "44ff4a5d0fc94b166a187edc6f1f5b343bd79d4c5f717d4e8a41665c20b26365df83ba9592d5d9ead67aa04b5aebc835c739b9bfb05371f5c971bffd25554a1c",
    "meta": {
      "revision": 0,
      "created": 1682077456776,
      "version": 0
    }
  }
]