export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export type Contact = { label: string; href: string };

// Tap-to-call. The pill shows the number unless you pass a label.
export const tel = (number: string, label = number): Contact => ({
  label,
  href: 'tel:' + number.replace(/[^\d+#]/g, '').replace('#', '%23'),
});

// External link, rendered as a chip under the description.
export const link = (label: string, href: string): Contact => ({ label, href });

export const sections = [
  {
    title: 'Emergency',
    groups: [
      {
        label: 'Call right away',
        rows: [
          [
            'Fire or ambulance',
            'Say "Kaji desu" (fire) or "Kyūkyū desu" (ambulance). Then give your address or a nearby landmark. Stay on the line and follow the operator. Do not hang up first.',
            tel('119')
          ],
          [
            'Police',
            'Crime, accident, threat, or missing person. Say "Keisatsu" and your location.',
            tel('110')
          ],
          [
            'Not sure if it is an ambulance case?',
            'Non-life-threatening but urgent. Available in many areas, not all. Check your city.',
            tel('#7119')
          ],
          [
            'Need help in English (24/7)',
            'Japan Helpline is a nationwide non-profit emergency assistance line in multiple languages. Use it when you do not know who to call.',
            tel('0570-000-911')
          ]
        ]
      },
      {
        label: 'Earthquake',
        rows: [
          [
            'DO: during shaking',
            'Drop, cover your head, and hold on under a sturdy table. Move away from windows, shelves, and glass. Open a door only if it is safe to do so.'
          ],
          [
            'DO: after shaking stops',
            'Turn off gas and heaters. Put on shoes, because broken glass is common. Check on neighbors. Expect aftershocks.'
          ],
          [
            'DO: near the sea or a river',
            'Move to high ground or a tall building right away. Do not wait for an official warning. Tsunami can arrive in minutes and come in several waves.'
          ],
          [
            'DON\'T',
            'Do not run outside during shaking, use elevators, or go back to the coast "to look". Do not light flames until you check for gas leaks.'
          ],
          [
            'Official info (JMA)',
            'Earthquake, tsunami, typhoon, and volcano warnings in English from the Japan Meteorological Agency.',
            link('JMA English', 'https://www.jma.go.jp/jma/indexe.html')
          ],
          [
            'Tsunami warnings',
            'Check the current tsunami advisories and warnings.',
            link('JMA tsunami info', 'https://www.jma.go.jp/en/tsunami/')
          ]
        ]
      },
      {
        label: 'Typhoon & heavy rain',
        rows: [
          [
            'DO: before',
            'Check JMA typhoon information. Charge your phone, store water and food, secure the balcony, and learn your nearest shelter from the city hazard map.',
            link('JMA typhoon info', 'https://www.jma.go.jp/jma/indexe.html')
          ],
          [
            'DO: during',
            'Stay indoors, away from windows. If an evacuation instruction is issued for your area, go to the designated shelter or a higher floor.'
          ],
          [
            'DON\'T',
            'Do not go near rivers, rice fields, or the coast. Do not walk or drive through flooded roads. Water that looks shallow can hide open drains.'
          ],
          [
            'Alert levels',
            'Level 3: prepare to evacuate, especially if you need extra time. Level 4: evacuate now. Learn these before the season starts.'
          ]
        ]
      },
      {
        label: 'Alerts & apps (install now)',
        rows: [
          [
            'Safety tips',
            'Push alerts for earthquakes, tsunami, and weather warnings in several languages. Made by the Japan Tourism Agency. Also shows evacuation advice.',
            link('Get the app', 'https://www.jnto.go.jp/safety-tips/eng/')
          ],
          [
            'NHK World-Japan',
            'English news and emergency updates.',
            link('NHK World-Japan', 'https://www3.nhk.or.jp/nhkworld/')
          ],
          [
            'Disaster Message Dial',
            'When phone lines are jammed after a disaster, record or listen to a safety message for a family member.',
            tel('171')
          ],
          [
            'Tip',
            'After a disaster, use text, LINE, or data instead of calls. Calls overload the network.'
          ]
        ]
      },
      {
        label: 'Healthcare',
        rows: [
          [
            'Feeling unwell',
            'Start with a nearby clinic. Your university health center or international office may have a list of clinics familiar with international students.'
          ],
          [
            'Bring with you',
            'Insurance card, residence card, student ID, and a list of your medications and allergies. A translation app helps.'
          ],
          [
            'Large hospitals',
            'May charge an extra fee without a clinic referral, except in emergencies. Check before going.'
          ],
          [
            'Language support',
            'Look for clinics with multilingual staff, or ask your international office for recommendations.'
          ],
          [
            'Mental health: English',
            'You do not have to handle it alone. TELL Lifeline offers counseling in English. Your university counseling center is also free or low-cost.',
            tel('03-5774-0992')
          ],
          [
            'Mental health: 24h, many languages',
            'Yorisoi Hotline offers 24h support with foreign-language options.',
            tel('0120-279-338')
          ]
        ]
      },
      {
        label: 'Lost items & paperwork',
        rows: [
          [
            'Lost wallet or belongings',
            'Report it at the nearest police station or kōban. Ask for a receipt or report number.'
          ],
          [
            'Lost residence card',
            'Report it to the police and get the report receipt. Then apply for reissue at the Regional Immigration Services Bureau within 14 days. Bring your passport and photo. Keep a copy of the card somewhere safe.'
          ],
          [
            'Lost passport',
            'Report to the police, then contact your embassy or consulate for a replacement.'
          ],
          [
            'Immigration questions',
            'Foreign Residents Support Center (FRESC) offers multilingual consultation. Use official Immigration Services Agency information.',
            [tel('0570-011000'), link('Immigration Services Agency', 'https://www.isa.go.jp/en/')]
          ],
          [
            'Housing problems',
            'Keep your contract and all written messages. Your international office or local city consultation service for foreign residents can help.'
          ]
        ]
      },
      {
        label: 'General DON\'Ts',
        rows: [
          [
            'Do not wait',
            'If you are unsure whether something is serious, call. Operators would rather get an unnecessary call than a late one.'
          ],
          [
            'Do not spread rumors',
            'After disasters, rely on JMA, your city, NHK, and your university. Do not share unverified posts.'
          ],
          [
            'Do not ignore evacuation orders',
            'Leaving early is safer than being rescued later.'
          ]
        ]
      },
      {
        label: 'Not sure?',
        rows: [
          [
            'Ask your university',
            'International student office first. They know local offices and can contact them in Japanese for you.'
          ],
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