var faq = [
  {
    title: 'What is this?',
    description:
      'This is a simple game of luck. You spin the slot machine. And you wait to see if you won.',
  },
  {
    title: 'How does this work?',
    description:
      'Every time you spin the machine, it generates a random cryptocurrency wallet with the public and private keys. Then it will check if there is coins already at the address of the wallet.',
  },
  {
    title: 'What are my chances?',
    description:
      'This is quite a complicated question. To put it simply, it depends on the algorithms used to generate these cryptocurrency wallets. ' +
      'Because everyone can generate one, these algorithm can create an immense number of wallets. ' +
      'Therefore, the chances that you generate the same wallet as someone else is incredibly small.<br>' +
      "If you want an actual number, it's probably around 2^128 " +
      '[<a href="https://bitcoin.stackexchange.com/questions/7724/what-happens-if-your-bitcoin-client-generates-an-address-identical-to-another-pe" target="_blank">source</a>]',
  },
  {
    title: 'How big is 2^128?',
    description:
      '<b>340,282,366,920,938,463,463,374,607,431,768,211,456</b><br>' +
      "Yes. That's quite big.<br>" +
      '<a href="http://bugcharmer.blogspot.fr/2012/06/how-big-is-2128.html" target="_blank">More on the subject</a>',
  },
  {
    title: "What's the point?",
    description:
      'I developed this application for several reasons. First of all, this is an introduction to cryptocurrency novices so they can understand how wallet generation is based on an algorithm and there is no database that delivers them. ' +
      "Secondly, this is a demonstration that it is not impossible for a wallet to be generated twice, it's just highly improbable. " +
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
      'What may be against the law, however, is to scavenge coins you could find on an already used wallet which does not belong to you.',
  },
  {
    title: 'I just won the Jackpot. What to do now?',
    description:
      "<b>Disclaimer:</b> I'm NOT a lawyer.<br>" +
      'Congratulation! You just had a massive amount of luck and found a wallet with coins inside. ' +
      'Now, theorically, you could use the specified public address and private wif (Wallet Import Format) in order to access the wallet. ' +
      'Then you can do whatever you want with the address, even transfer the coins. Be careful, this may be against the law.',
  },
]
