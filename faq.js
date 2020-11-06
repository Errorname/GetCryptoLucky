var faq = [
  {
    title: 'What is this?',
    description:
      'This is an educational app. Every time you spin the slot machine, it generates a random pair of keys (public/private) of a random cryptocurrency. ' +
      'It then checks if some coins are already present at the address (public key) (meaning someone else already used this address). ' +
      'If there is some, then what you do next with this access is up to you...',
  },
  {
    title: 'What are my chances?',
    description:
      'This is quite a complicated question. To put it simply, it depends on the algorithms used to generate these cryptocurrency key pairs. ' +
      'Because everyone can generate one, these algorithms can create an immense number of key pairs. ' +
      'Therefore, the chances that you generate the same public key as someone else is incredibly small.<br>' +
      "If you want an actual number, it's probably around 2^128 " +
      '[<a href="https://bitcoin.stackexchange.com/questions/7724/what-happens-if-your-bitcoin-client-generates-an-address-identical-to-another-pe" target="_blank">source</a>]',
  },
  {
    title: 'How big is 2^128?',
    description:
      '<b>340,282,366,920,938,463,463,374,607,431,768,211,456</b><br/>' +
      "Yes. That's quite big.<br>" +
      '<a href="http://bugcharmer.blogspot.fr/2012/06/how-big-is-2128.html" target="_blank">More on the subject</a>',
  },
  {
    title: "What's the point?",
    description:
      'I developed this application for several reasons. First of all, this is an introduction to cryptocurrency novices so they can understand that wallet generation is based on an algorithm and that there is no database that delivers them. ' +
      "Secondly, this is a demonstration that it is not impossible for a public key to be generated twice, it's just highly improbable. " +
      'Finally, you are gonna play because, well, you never know!',
  },
  {
    title: 'What are the supported currencies?',
    description:
      'At the moment, this application supports Bitcoin (BTC), Bitcoin Cash (BCH), Dogecoin (DOGE), MonaCoin (MONA), Litecoin (LTC), Dash (DASH), Peercoin (PPC), and BlackCoin (BLK).',
  },
  {
    title: 'Is this legal?',
    description:
      "<b>Disclaimer:</b> I'm NOT a lawyer.<br>" +
      'I do not think generating random wallets using a common algorithm is against the law. ' +
      'What may be against the law, however, is to scavenge coins you could find on an already used wallet which does not belong to you. ',
  },
  {
    title: 'I just won the Jackpot. What to do now?',
    description:
      "<b>Disclaimer:</b> I'm NOT a lawyer.<br>" +
      'Congratulation! You just had a massive amount of luck and found a wallet with coins inside. ' +
      'Now, theorically, you could use the specified public address and private wif (Wallet Import Format) in order to access the wallet. ' +
      'Then you can do whatever you want with the address, even transfer the coins. Be careful, this may be against the law.',
  },
  {
    title: 'I want to make a donation to this great app!',
    description:
      'Well, thank you very much! Here are the available addresses: <br/><br/>' +
      'Bitcoin: <small>1HmRXreRdwS1RWUKKLQUYoqfT15BrkeF4o</small><br/>' +
      'Bitcoin Cash: <small>18gd51eMopMMEkJ3TNW9yqSrd7sEE6tZha</small><br/>' +
      'Dogecoin: <small>DRC9eBYWoLX2Ln5eR7LAqDJ2cnGrrc7G6P</small><br/>' +
      'MonaCoin: <small>MPQFfNVhW7XfmWKPCWHAEFe9q1TwF2WWRy</small><br/>' +
      'Litecoin: <small>LZsPBN4WPXw1ELXrDUhCL4zYkBvFvjUC2r</small><br/>' +
      'Dash: <small>XctppzhKXDWCq4Kz489H9xEygZ6PW7duq4</small><br/>' +
      'Peercoin: <small>PXgTgVc7fTYUBbouunYuAdHTuoQVichEc6</small><br/>' +
      'Blackcoin: <small>BE3MrxXDWeLEAtA4vxypQQLP6NzedDmZ58</small><br/>',
  },
]
