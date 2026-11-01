export interface SocialLink {
  platform: string;
  url: string;
}

export interface ProfileData {
  name: string;
  role: string;
  email: string;
  summary: string[];
  socialLinks: SocialLink[];
}

export interface ProjectEntry {
  title: string;
  period: string;
  role: string;
  summary: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  projects: ProjectEntry[];
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
    summary: [
      'データエンジニアとして6年、Snowflakeを中心にAWS / GCP上のデータ分析基盤の構築・移行を8件担当。dbt・Airflow・TerraformによるIaC化とCI/CD、複数ベンダー・ステークホルダー間の要件調整を得意とする。',
      '直近2年はチームリード・社内PMとして4〜8名のチームを率い、1000億行超・60TB規模の基盤移行で要件定義からテストまでを統括。運用費約30%削減の設計や処理速度20%改善などの成果を出している。',
      '2026年からは業務委託でNode.js / AWS CDKによるAIエージェント機能の開発にも従事。SnowPro Advanced Architect・AWS SA Professional等5資格を保有し、dbt / Snowflake関連の登壇4回。',
    ],
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
      company: 'AME&Company（株）（業務委託）',
      role: 'バックエンドエンジニア',
      period: '2026/03〜現在',
      projects: [
        {
          title: 'HR pentestのAIエージェント機能開発（業務委託）',
          period: '2026/03〜現在',
          role: 'バックエンドエンジニア',
          summary:
            '面談要約からポジティブ / ネガティブを判定し、他部署の面談データを横断サマリして退職要因を分析するAIエージェントをNode.js / AWS CDKで設計・実装。',
        },
      ],
    },
    {
      company: 'DATUM STUDIO（株）',
      role: 'データエンジニア / マネージャー',
      period: '2020/04/01〜現在',
      projects: [
        {
          title: '大手小売業界分析基盤の移行刷新',
          period: '2025/08〜現在',
          role: 'Snowflake基盤担当チームリード / 8名',
          summary:
            '1000億行超・2システム統合のSnowflake移行で、基盤チーム8名（全体約30名）の要件定義〜テストを統括。システム統合により運用費約30%削減を見込む基盤設計を主導。',
        },
        {
          title: '自動車センサーデータ集積基盤の移行刷新',
          period: '2025/01〜2026/03',
          role: '社内PM / 5名',
          summary:
            '約60TB・数十億ファイルのオンプレ（NAS / SQL Server）→ AWS・Snowflake移行を社内PM（全体約20名）として推進。Hadoop10台の並列変換でボトルネックを解消し、処理速度20%改善とインフラコスト削減を実現。',
        },
        {
          title: '決算業務に用いる経理BIの移行刷新',
          period: '2024/07〜2024/12',
          role: 'Snowflake基盤担当チームリード / 4名',
          summary: 'SAP HANAのEOSに伴う決算BIのSnowflake移行で、設計・全体コードレビュー・経理部門との要件調整を統括。',
        },
        {
          title: '不動産事業における事業間横断顧客分析基盤の構築',
          period: '2024/05〜2025/03',
          role: 'Snowflake基盤担当チームリード / 4名',
          summary:
            'ホールディングス傘下複数社のSQL Server / MySQL / PostgreSQL / Salesforceを Snowflakeに集約し、サービス横断の顧客分析基盤を新規構築・リリース。',
        },
        {
          title: 'ECサイトの全社向け顧客分析基盤の移行刷新',
          period: '2023/04〜2024/12',
          role: 'ETL処理チームリード / 15名',
          summary:
            'Oracle → Snowflakeの全社顧客分析基盤移行でETL処理チームをリード。dbt + Airflowのバッチ基盤を構築し、レガシー基盤からのデータ移行とETL開発の効率化を実現。',
        },
        {
          title: 'テレビ局向け広告配信用基盤構築',
          period: '2022/08〜2023/04',
          role: 'データエンジニア',
          summary:
            '広告配信用の顧客データ基盤をSnowflake + Terraformで設計・構築。プロパーとして複数ベンダー間の要件定義・IF調整を牽引し、レビュー主体で社内の人材育成にも貢献。',
        },
        {
          title: '動画プラットフォームにおける視聴ログ分析基盤の構築',
          period: '2021/01〜2022/07',
          role: 'データエンジニア',
          summary: '視聴ログを一括管理するBigQuery基盤とKPIダッシュボードを構築。バック・フロントチームと協業してテーブル設計を担当。',
        },
        {
          title: 'スポーツクラブ向けの顧客分析基盤の構築',
          period: '2020/04〜2020/12',
          role: 'データエンジニア',
          summary:
            'S3 / Glue / Snowflakeの顧客分析基盤を構築し、Excelベースの分析をTableauダッシュボードへ移行。国内事例の少なかったSnowflakeを技術検証から導入して分析を大幅に高速化し、導入事例をユーザー会で発表。',
        },
      ],
    },
  ],
  skills: [
    { category: 'Language', items: ['Python', 'SQL', 'PHP', 'TypeScript'] },
    { category: 'Cloud / DWH', items: ['AWS', 'GCP', 'Snowflake'] },
    { category: 'Data Engineering', items: ['dbt(core/cloud)', 'Airflow', 'Spark', 'Terraform', 'GitHub Actions'] },
    { category: 'BI', items: ['Looker', 'PowerBI', 'Tableau'] },
    { category: 'Application', items: ['Laravel', 'React'] },
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
      description: 'データ基盤・Snowflake・dbtを中心にQiita5件 / Zenn8件を執筆。',
      links: [
        { label: 'Qiita', url: 'https://qiita.com/ugmuka' },
        { label: 'Zenn', url: 'https://zenn.dev/ugmuka' },
      ],
    },
    {
      description: '技術書典21にサークル「RONNABYTE・ちゅらデータ技術書典支部」として出展。「dbtとそれにまつわる技術について語ろうじゃないか」を頒布。',
      links: [
        {
          label: 'dbtとそれにまつわる技術について語ろうじゃないか',
          url: 'https://techbookfest.org/product/r35huDmDSWBjvqU6uYwENZ',
        },
      ],
    },
    {
      description: '知人のプロダクトActiceの開発を支援。マイクロサービスの一つを担当し、フロントをReact、バックエンドをLaravelで実装した。',
      links: [{ label: 'Actice', url: 'https://actice.page/' }],
    },
  ],
};

export default portfolio;
