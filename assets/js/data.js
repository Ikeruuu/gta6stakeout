// GTA 6 Stakeout: site content.
// This is the only file to edit when adding clips, tips or numbers. Keep facts to what is in facts.md (primary sources only).
window.STAKEOUT = {
  updated: '2026-11-18',

  socials: [
    { id: 'tiktok',    label: 'TikTok',    handle: '@gta6stakeout', url: 'https://www.tiktok.com/@gta6stakeout', blurb: 'Clips, tips and secrets, every day.' },
    { id: 'instagram', label: 'Instagram', handle: '@gta6stakeout', url: 'https://www.instagram.com/gta6stakeout/', blurb: 'Reels and detail breakdowns.' },
    { id: 'x',         label: 'X',         handle: '@gta6stakeout', url: 'https://x.com/gta6stakeout', blurb: 'Every find the minute we post it.' },
    { id: 'youtube',   label: 'YouTube',   handle: '@gta6stakeout', url: 'https://www.youtube.com/@gta6stakeout', blurb: 'All our Shorts in one place.' }
  ],

  // GTA VI unlocks at midnight local time on 19 Nov 2026 in every region (Rockstar Support, updated 3 Nov 2026).
  // utc = the moment midnight 19 Nov arrives in that city, in UTC.
  unlocks: [
    { city: 'Auckland',    region: 'New Zealand',          utc: '2026-11-18T11:00:00Z' },
    { city: 'Sydney',      region: 'Australia (east)',     utc: '2026-11-18T13:00:00Z' },
    { city: 'Tokyo',       region: 'Japan',                utc: '2026-11-18T15:00:00Z' },
    { city: 'Dubai',       region: 'UAE',                  utc: '2026-11-18T20:00:00Z' },
    { city: 'Madrid',      region: 'Central Europe',       utc: '2026-11-18T23:00:00Z' },
    { city: 'London',      region: 'UK',                   utc: '2026-11-19T00:00:00Z' },
    { city: 'São Paulo',   region: 'Brazil',               utc: '2026-11-19T03:00:00Z' },
    { city: 'New York',    region: 'US East Coast',        utc: '2026-11-19T05:00:00Z' },
    { city: 'Los Angeles', region: 'US West Coast',        utc: '2026-11-19T08:00:00Z' }
  ],

  // Shorts already on our YouTube channel. thumb = local frame from our edit.
  clips: [
    { yt: 'xWoNEO08fPw', title: 'GTA 6 lets you switch to km/h', credit: 'DarkViperAU on Twitch' },
    { yt: 'IEFoSP6shys', title: 'This NPC talked back to xQc', credit: 'xQc on Twitch' },
    { yt: 'zhvH_eMqsPg', title: "xQc's first car theft in GTA 6", credit: 'xQc on Twitch' },
    { yt: 'DRLTrVhbMQ0', title: 'Just another day in Leonida', credit: '3GordosB on YouTube' },
    { yt: 'KpxnHwU0sC0', title: 'Look at the water in GTA 6', credit: 'Vandal on YouTube' },
    { yt: 'JcHpuuarXwE', title: 'You fill up the tank yourself', credit: 'Vandal on YouTube' },
    { yt: 'TMB6rDa1Hz0', title: 'The day Lucia gets out', credit: 'Rockstar Games' }
  ],

  // Tips, secrets and details. img = one of our image posts (optional).
  tips: [
    { tag: 'Secret', title: 'A real Easter egg on the TV tower', text: "Climb to the very top of the TV tower and check the bird's nest. The game literally labels it an Easter egg.", img: 'assets/img/posts/tv-tower-egg.jpg', credit: 'Robbin Rams on YouTube' },
    { tag: 'Tip', title: 'You have two wallets', text: 'The cash on you and the stash at home are separate. The game tells you to keep your cash safe in the stash.', img: 'assets/img/posts/two-wallets.jpg', credit: 'Vice City Handbook on YouTube' },
    { tag: 'Tip', title: "Losing the cops isn't the end", text: 'After you shake them, they keep your description. Change your outfit and stop sprinting around before they spot you again.', credit: 'Vice City Handbook on YouTube' },
    { tag: 'Cars', title: 'Not every mod shop sells the same parts', text: 'Mod shops in Leonida each specialize in different cosmetic and performance mods. If one garage does not have it, try another.', img: 'assets/img/posts/mod-shops-specialize.jpg', credit: 'Pixden on YouTube' },
    { tag: 'Cars', title: 'The Grotti Carbonizzare is back', text: 'Spotted on the streets of Leonida. The game names it right on the HUD when you get in.', img: 'assets/img/posts/carbonizzare.jpg', credit: 'Runner Unknown on YouTube' },
    { tag: 'Detail', title: 'The radio wheel', text: 'Radio On-U, Stockyard FM, Symphony FM, The Wipe, VCRR, Vice City FM and more. Podcasts are on demand for the first time in the series.', img: 'assets/img/posts/radio-wheel.jpg', credit: 'xQc on Twitch' },
    { tag: 'Detail', title: 'Your phone has a social feed', text: 'Scroll through posts from people in Leonida, with likes and comments, right on the in-game phone.', credit: 'jasontheween on Twitch' },
    { tag: 'Detail', title: 'Grab fruit and eat it', text: 'Pick fruit up from the bowl, carry two at a time and eat it on the way out.', credit: 'Loserfruit on Twitch' },
    { tag: 'Settings', title: 'Sprint is on L3', text: 'The default controls now use L3 to run and sprint. The setup screen says you can change it at any time.', img: 'assets/img/posts/sprint-l3.jpg', credit: 'Vice City Handbook on YouTube' },
    { tag: 'Settings', title: 'Switch to km/h', text: 'Speed units can be changed in the settings menu.', credit: 'DarkViperAU on Twitch' }
  ],

  // Verified numbers only (see facts.md for sources and the time each was checked).
  numbers: [
    { value: '99', label: 'Metascore on PS5', note: '147 critic reviews, all positive. Metacritic, 18 Nov 2026' },
    { value: '212 GB', label: 'Max pre-load size', note: 'Depends on the console. Rockstar Newswire' },
    { value: '30', label: 'Frames per second', note: 'Target on PS5 and Xbox Series X|S. Rockstar Newswire' },
    { value: '34', label: 'Original tracks', note: 'Grand Theft Auto VI: The Album, with Atlantic Records' }
  ],

  faq: [
    { q: 'When does GTA 6 come out?', a: 'Grand Theft Auto VI unlocks at midnight local time on 19 November 2026 in every region, on PS5 and Xbox Series X|S. New Zealand is first.' },
    { q: 'Is GTA 6 on PC?', a: 'A PC version has not been announced. Rockstar has only confirmed PS5 and Xbox Series X|S.' },
    { q: 'How big is the download?', a: 'The pre-load needs up to 212 GB, depending on the console.' },
    { q: 'Where is GTA 6 set?', a: 'The state of Leonida, including Vice City, the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia and Mount Kalaga.' },
    { q: 'Who are the main characters?', a: 'Jason Duval and Lucia Caminos.' },
    { q: 'Is this an official Rockstar site?', a: 'No. GTA 6 Stakeout is a fan page and is not affiliated with Rockstar Games or Take-Two Interactive.' }
  ]
};
