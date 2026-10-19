export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');


export const sections = [
  {
    title: 'Emergency',
    groups: [
      {
        label: 'Call right away',
        rows: [
          [
            'Medical emergency or fire',
            'Ask for an ambulance. Give your location as clearly as you can and follow the operator\'s instructions.',
            '119'
          ],
          [
            'Police emergency',
            'Call when you need urgent help from the police.',
            '110'
          ]
        ]
      },
      {
        label: 'Healthcare',
        rows: [
          [
            'Feeling unwell',
            'Start with a nearby clinic. Your university may have a list of clinics familiar with international students.'
          ],
          [
            'Health insurance',
            'Bring your insurance card. What you pay depends on your coverage and treatment.'
          ],
          [
            'Large hospitals',
            'May ask for a clinic referral or charge an extra fee without one. Check requirements before going.'
          ],
          [
            'Language support',
            'Look for clinics with multilingual staff, or ask your international office for recommendations.'
          ]
        ]
      },
      {
        label: 'Lost items & paperwork',
        rows: [
          [
            'Lost wallet or belongings',
            'Report it at the nearest police station or kōban.'
          ],
          [
            'Lost residence card',
            'Contact the authorities and follow the current replacement process. Keep a photo or copy somewhere safe.'
          ],
          [
            'Immigration questions',
            'Use official Immigration Services Agency information, or ask your university\'s international student office.'
          ],
          [
            'Housing problems',
            'Keep your contract and all written messages. Your international office or a local consultation service can point you to support.'
          ]
        ]
      },
      {
        label: 'Not sure?',
        rows: [
          [
            'Ask the community',
            'Ask the association. Someone may have faced the same situation and can point you to the right office.'
          ]
        ]
      }
    ]
  },


  {
    title: 'Food & Grocery',
    intro:
      'Verified online stores for Indian, South Asian, and halal groceries in Japan. Many offer nationwide delivery, making it easier to find familiar ingredients, spices, rice, snacks, and other essentials.',
    places: [
      {
        name: 'Vishwas Spices Japan',
        area: 'Amagasaki, Hyogo (ships nationwide)',
        types: ['Indian', 'Spices', 'Groceries','Vegetarian'],
        url: 'https://vishwasjapan.com'
      },
      {
        name: 'Ambika Japan',
        area: 'Tokyo (online shop)',
        types: ['Indian', 'Vegetarian', 'Groceries'],
        url: 'https://shop.ambikajapan.com'
      },
      {
        name: 'Shinjuku Halal Food',
        area: 'Shinjuku, Tokyo (ships nationwide)',
        types: ['Halal', 'Indian', 'South Asian'],
        url: 'https://shinjukuhalalfood.com'
      },
      {
        name: 'Bharat Bazaar',
        area: 'Koto, Tokyo (ships nationwide)',
        types: ['Indian', 'Rice & Dal', 'Snacks'],
        url: 'https://bharatbazaar.co.jp'
      },
      {
        name: 'Koko Grocery',
        area: 'Edogawa, Tokyo (online delivery)',
        types: ['Indian', 'South Indian', 'Groceries'],
        url: 'https://www.kokogrocery.com'
      },
      {
        name: 'Halal Food Japan',
        area: 'Online store (ships nationwide)',
        types: ['Halal', 'Indian', 'Pakistani', 'Meat'],
        url: 'https://halalfoodjapan.jp'
      }
    ]
  },

  // {
  //   title: 'Food & Groceries',
  //   items: [
  //     [
  //       'Indian groceries',
  //       'Rice, atta, dals, spices, and other Indian ingredients are available at specialist shops and some larger supermarkets. Availability varies by area, so ask other community members about shops near you.'
  //     ],
  //     [
  //       'Vegetarian food',
  //       'Vegetarian options are increasingly common, but ingredients such as fish stock, meat-based broth, or animal-derived ingredients can appear in dishes that otherwise look vegetarian. When in doubt, ask about the ingredients.'
  //     ],
  //     [
  //       'Halal food',
  //       'Halal restaurants and grocery stores are available in several parts of Osaka. Muslim students can also check whether their university provides information about nearby halal options.'
  //     ],
  //     [
  //       'Supermarkets',
  //       'Local supermarkets are generally the easiest place to buy everyday groceries. Discount supermarkets can be particularly useful for students managing a limited budget.'
  //     ],
  //     [
  //       'Eating out',
  //       'Restaurants in Osaka range from inexpensive student-friendly options to specialist Indian, South Asian, vegetarian, and halal restaurants. Sharing recommendations within the community can help newcomers find places that suit their needs.'
  //     ]
  //   ]
  // },

  {
    title: 'Travel',
    // The image lives in /public/faq/Travel.jpeg and is served from the site root.
    image: {
      src: '/faq/Travel.jpeg',
      alt: 'Travel guide for Osaka covering the ICOCA card, trains and subways, bicycles, walking, and late-night travel.'
    }
  },

  // {
  //   title: 'Apps',
  //   // The image lives in /public/faq/Travel.jpeg and is served from the site root.
  //   image: {
  //     src: '/faq/apps.jpeg',
  //     alt: 'Life is easier online, hmmm...?'
  //   }
  // },
  {
    title: 'Apps',
    cols: ['Apps', 'What it\'s for?'],
    items: [
      [
        'Google Maps',
        'Google Maps works well for routes, and Japanese apps like Jorudan or NAVITIME show platform numbers and last-train times. Check the last train before heading out at night.'
      ],
      [
        'Google Translate',
        'Google Translate\'s camera mode is handy for reading menus, food labels, and letters. Download the Japanese language pack so it works offline.'
      ],
      [
        'Payments',
        'Mobile payment apps such as PayPay are widely accepted and often run discounts. Keep some cash as a backup.'
      ],
      [
        'Tabelog',
        'Tabelog is the main Japanese restaurant site, and Google Maps reviews are also useful. Filter by "vegetarian" or "halal" where available, but confirm ingredients directly.'
      ]
    ]
  },
  {
    title: 'Day trips',
    cols: ['Place', 'Why go'],
    items: [
      [
        'Kyoto',
        'Temples, old streets, and autumn colours, about 30 to 45 minutes by train. Popular spots get very crowded on weekends and in peak seasons, so go early.'
      ],
      [
        'Nara',
        'Free-roaming deer, Todai-ji, and a relaxed pace. Easy to cover in a half day.'
      ],
      [
        'Hyogo',
        'Kobe, scenic coastlines, Mount Rokko, and Arima Onsen. Easy to reach from Osaka, with Awaji Island also nearby.'
      ],
      [
        'Himeji',
        'Home to Himeji Castle, one of Japan\'s best-preserved castles. Plan a few hours for the castle and grounds.'
      ],
      [
        'Koyasan',
        'A mountain temple town with temple lodgings (shukubo). A good choice if you want something quiet and different.'
      ],
      [
        'Lake Biwa',
        'Japan’s largest lake, known for beautiful scenery, cycling, and relaxing lakeside spots. Great for a slower day trip.'
      ]
    ]
  },
  {
    title: 'Etiquettes',
    items: [
      [
        'Shoes',
        'Take your shoes off at homes and some restaurants, clinics, and ryokan. Look for a raised entrance step or shoe lockers.'
      ],
      [
        'Tipping',
        'There is no tipping. Good service is expected as standard.'
      ],
      [
        'On trains',
        'Keep your voice low, avoid phone calls, and put your bag on your lap or the rack if it\'s busy.'
      ],
      [
        'Escalators',
        'In Osaka, people usually stand on the right and walk on the left, the reverse of Tokyo.'
      ],
      [
        'Garbage',
        'Bins in public are scarce, so carry your trash with you until you find one. Sorting rules at home are strict, so check your ward\'s schedule.'
      ]
    ]
  },
];

export const topics = sections.map((s) => ({
  label: s.title,
  href: `/resources/${slugify(s.title)}`,
}));