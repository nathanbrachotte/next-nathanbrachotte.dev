/**
 * Places to promote a startup. Shared by the bookmarks page and the
 * "How to promote your startup" blog post through <StartupDirectories />.
 * Every URL was checked by hand on 2026-10-01. Dead links were dropped.
 */
export const startupDirectoryCategories: StartupDirectoryCategory[] = [
  {
    id: 'launch-platforms',
    title: 'Launch platforms',
    directories: [
      {
        name: 'Product Hunt',
        url: 'https://www.producthunt.com/',
        note: 'Plan a real launch day, not a drive-by submit',
      },
      {
        name: 'Hacker News',
        url: 'https://news.ycombinator.com/',
        note: 'Post as a Show HN',
      },
      {
        name: 'TinyLaunch',
        url: 'https://www.tinylaunch.com/',
        note: 'DR 72+ backlink and a badge',
      },
      {
        name: 'PeerPush',
        url: 'https://peerpush.com/',
        note: 'Free queue takes about six weeks, $39 skips it',
      },
      {
        name: 'BetaList',
        url: 'https://betalist.com/',
        note: 'Early-stage startups',
      },
      {
        name: 'PitchWall',
        url: 'https://pitchwall.co/',
        note: 'Formerly BetaPage',
      },
      { name: 'Launching Next', url: 'https://www.launchingnext.com/' },
      {
        name: 'Launch',
        url: 'https://trylaunch.ai/',
        note: 'Launch platform for vibe-coded apps',
      },
      { name: 'StartupBase', url: 'https://startupbase.io/' },
    ],
  },
  {
    id: 'communities',
    title: 'Communities',
    directories: [
      {
        name: 'Indie Hackers',
        url: 'https://www.indiehackers.com/',
        note: 'Product page plus build-in-public posts',
      },
      {
        name: 'DEV Community',
        url: 'https://dev.to/',
        note: 'Write-up, not a listing',
      },
      { name: 'r/SideProject', url: 'https://www.reddit.com/r/SideProject/' },
      {
        name: 'r/buildinpublic',
        url: 'https://www.reddit.com/r/buildinpublic/',
      },
      { name: 'r/TestMyApp', url: 'https://www.reddit.com/r/TestMyApp/' },
      {
        name: 'r/macapps',
        url: 'https://www.reddit.com/r/macapps/',
        note: 'Mac apps only',
      },
    ],
  },
  {
    id: 'software-review-sites',
    title: 'Software review sites',
    directories: [
      {
        name: 'AlternativeTo',
        url: 'https://alternativeto.net/',
        note: 'List yourself as an alternative to the big incumbents',
      },
      { name: 'SaaSHub', url: 'https://www.saashub.com/' },
      {
        name: 'G2',
        url: 'https://www.g2.com/',
        note: 'Only matters once you have reviews',
      },
      { name: 'Capterra', url: 'https://www.capterra.com/' },
      { name: 'GetApp', url: 'https://www.getapp.com/' },
      { name: 'Software Advice', url: 'https://www.softwareadvice.com/' },
      { name: 'StackShare', url: 'https://stackshare.io/' },
    ],
  },
  {
    id: 'startup-directories',
    title: 'Startup directories',
    directories: [
      {
        name: 'Wired Business',
        url: 'https://wired.business/submit',
        note: 'Free if you add their badge to your site, otherwise paid',
      },
      {
        name: 'FindYourSaaS',
        url: 'https://findyoursaas.com/pricing',
        note: 'Free listing has no backlink, the $9/mo Featured tier does',
      },
      {
        name: 'YourWebsiteScore',
        url: 'https://yourwebsitescore.com/',
        note: 'Free site analysis, then a score badge page with a backlink',
      },
      { name: 'Startup Stash', url: 'https://startupstash.com/' },
      { name: 'Startup Buffer', url: 'https://startupbuffer.com/' },
      {
        name: 'Startup Tracker',
        url: 'https://startuptracker.io/crowdsourcing/',
      },
      { name: 'Startup Ranking', url: 'https://www.startupranking.com/' },
      { name: 'StartupBlink', url: 'https://www.startupblink.com/' },
      { name: 'Killer Startups', url: 'https://killerstartups.com/' },
      { name: 'Snapmunk', url: 'https://startups.snapmunk.com/' },
      { name: 'Side Projectors', url: 'https://www.sideprojectors.com/' },
      { name: 'Robin Good Tools', url: 'https://tools.robingood.com/' },
      {
        name: 'Feed My Startup',
        url: 'https://feedmystartup.com/submit-your-startup/',
      },
      {
        name: 'StartUp Beat',
        url: 'https://startupbeat.com/get-featured/',
      },
      {
        name: 'Tech Pluto',
        url: 'https://www.techpluto.com/submit-a-startup/',
      },
      { name: 'Paggu', url: 'https://www.paggu.com/' },
      {
        name: 'EU-Startups',
        url: 'https://www.eu-startups.com/directory/',
        note: 'European startups',
      },
      {
        name: 'YourStory',
        url: 'https://yourstory.com/companies',
        note: 'Indian startups',
      },
    ],
  },
  {
    id: 'company-databases',
    title: 'Company databases and investors',
    directories: [
      { name: 'Crunchbase', url: 'https://www.crunchbase.com/' },
      {
        name: 'Wellfound',
        url: 'https://wellfound.com/',
        note: 'Formerly AngelList',
      },
      { name: 'F6S', url: 'https://www.f6s.com/' },
      { name: 'InnMind', url: 'https://innmind.com/' },
    ],
  },
  {
    id: 'lists-and-guides',
    title: 'Lists and guides',
    directories: [
      {
        name: 'LaunchDirectories',
        url: 'https://launchdirectories.com/',
        note: '100+ directories, filter by DR 40+',
      },
      {
        name: 'SubmitSaaS',
        url: 'https://submitsaas.com/',
        note: 'Paid bulk submission to 140+ directories',
      },
      {
        name: 'Needle marketing guide',
        url: 'https://useneedle.net/marketing-guide',
        note: 'Playbook for getting discovered',
      },
    ],
  },
  {
    id: 'app-stores',
    title: 'App stores',
    directories: [
      {
        name: 'Apple App Store',
        url: 'https://apps.apple.com/',
        note: 'Native iOS and Mac apps',
      },
      {
        name: 'Google Play',
        url: 'https://play.google.com/',
        note: 'Native Android apps',
      },
      {
        name: 'Chrome Web Store',
        url: 'https://chromewebstore.google.com/',
        note: 'Browser extensions',
      },
      {
        name: 'Firefox Add-ons',
        url: 'https://addons.mozilla.org/',
        note: 'Browser extensions',
      },
    ],
  },
]

export interface StartupDirectory {
  name: string
  url: string
  /** Short tip shown after the link */
  note?: string
}

export interface StartupDirectoryCategory {
  /** Used by <StartupDirectories category="..." /> */
  id: string
  title: string
  directories: StartupDirectory[]
}
