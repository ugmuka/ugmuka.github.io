export interface SocialLink {
  platform: string;
  url: string;
}

export interface ProfileData {
  name: string;
  role: string;
  email: string;
  socialLinks: SocialLink[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  projects: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface TalkEntry {
  date: string;
  event: string;
  title: string;
  slideUrl: string;
}

export interface ActivityLink {
  label: string;
  url: string;
}

export interface OtherActivity {
  description: string;
  links: ActivityLink[];
}

export interface PortfolioData {
  profile: ProfileData;
  experiences: ExperienceEntry[];
  skills: SkillCategory[];
  certifications: string[];
  talks: TalkEntry[];
  otherActivities: OtherActivity[];
}

const portfolio: PortfolioData = {
  profile: {
    name: '向井雄二',
    role: 'Data Engineer',
    email: 'ugmuka1@gmail.com',
    socialLinks: [
      { platform: 'X', url: 'https://x.com/ugmuka' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/muka1206/' },
      { platform: 'Qiita', url: 'https://qiita.com/ugmuka' },
      { platform: 'Zenn', url: 'https://zenn.dev/ugmuka' },
      { platform: 'SpeakerDeck', url: 'https://speakerdeck.com/ugmuka' },
    ],
  },
  experiences: [
    {
      company: 'DATUM STUDIO（株）',
      role: 'データエンジニア',
      period: '2020/04/01〜現在',
      projects: [
        'スポーツクラブ向けの顧客分析基盤の構築',
        '動画プラットフォームにおける視聴ログ分析基盤の構築',
        'テレビ局向け広告配信用基盤構築',
        'ECサイトの全社向け顧客分析基盤の移行刷新',
        '不動産事業における事業間横断顧客分析基盤の構築',
        '決算業務に用いる経理BIの移行刷新',
        '自動車センサーデータ集積基盤の移行刷新',
      ],
    },
  ],
  skills: [
    { category: 'Language', items: ['Python', 'SQL', 'PHP', 'TypeScript'] },
    { category: 'Application Framework', items: ['Laravel', 'React'] },
    { category: 'Cloud', items: ['AWS', 'GCP', 'Snowflake'] },
    { category: 'Infrastructure Tools', items: ['Terraform'] },
    { category: 'Data Engineering Tools', items: ['dbt(core/cloud)', 'Airflow', 'Spark'] },
    { category: 'BI Tools', items: ['Looker', 'PowerBI'] },
    { category: 'Others', items: ['GitHub Actions'] },
  ],
  certifications: [
    '応用情報技術者',
    'AWS Solution Architect Professional',
    'AWS Data Analytics Specialty',
    'GCP Professional Data Engineer',
    'SnowPro Advanced Architect',
  ],
  talks: [
    {
      date: '2022/08/23',
      event: 'dbt Tokyo meetup',
      title: 'rawSQLからdbtへの移行プロセスについて',
      slideUrl: 'https://speakerdeck.com/ugmuka/rawsqlkaradbthefalseyi-xing-purosesunituite',
    },
    {
      date: '2022/12/14',
      event: 'ちゅらコラボ',
      title: '1年間dbtで戦った話',
      slideUrl: 'https://speakerdeck.com/ugmuka/14-tiyurakorabodeng-tan-zi-liao',
    },
    {
      date: '2023/01/26',
      event: 'Data Engineer Geeks',
      title: 'Snowparkを基礎からおさらい',
      slideUrl: 'https://speakerdeck.com/ugmuka/snowparkwoji-chu-karaosarai',
    },
    {
      date: '2023/05/28',
      event: 'Snowflakeの小技LT〜ChatGPTも知らない？秘密のテクニック教えて！〜',
      title: 'Snowflakeでやらかした時の対処法',
      slideUrl: 'https://speakerdeck.com/ugmuka/snowflakedeyarakasitashi-nodui-chu-fa',
    },
  ],
  otherActivities: [
    {
      description:
        '知人のプロダクトの開発を支援。各マイクロサービスのうちの一つを担当。フロントをReact、バックエンドをLaravelで実装した。',
      links: [{ label: 'Actice', url: 'https://actice.page/' }],
    },
  ],
};

export default portfolio;
