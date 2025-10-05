import streamlit as st

# --- GENERAL SETTINGS ---
NAME = "向井雄二"
DESCRIPTION = "Data Engineer"
EMAIL = "ugmuka1@gmail.com"
SOCIAL_MEDIA = {
    "X": "https://x.com/ugmuka",
    "LinkedIn": "https://www.linkedin.com/in/muka1206/",
    "Qiita": "https://qiita.com/ugmuka",
    "Zenn": "https://zenn.dev/ugmuka",
    "SpeakerDeck": "https://speakerdeck.com/ugmuka",
}

# --- SIDEBAR ---
with st.sidebar:
    st.title(NAME)
    st.write(DESCRIPTION)
    st.write("📫", EMAIL)

    st.write("\n")
    st.subheader("SNS")
    cols = st.columns(len(SOCIAL_MEDIA))
    for index, (platform, link) in enumerate(SOCIAL_MEDIA.items()):
        cols[index].write(f"[{platform}]({link})")


st.header("経歴")
st.subheader("2020/04/01-現在")
st.write("DATUM STUDIO（株）データエンジニア")

st.subheader("携わったプロジェクト")
st.markdown("""
- スポーツクラブ向けの顧客分析基盤の構築
- 動画プラットフォームにおける視聴ログ分析基盤の構築
- テレビ局向け広告配信用基盤構築
- ECサイトの全社向け顧客分析基盤の移行刷新
- 不動産事業における事業間横断顧客分析基盤の構築
- 決算業務に用いる経理BIの移行刷新
- 自動車センサーデータ集積基盤の移行刷新
""")

st.header("スキル")
st.subheader("language")
st.markdown("- Python\n- SQL\n- PHP\n- Typescript")

st.subheader("application flamework")
st.markdown("- laravel\n- react")

st.subheader("cloud")
st.markdown("- AWS\n- GCP\n- Snowflake")

st.subheader("infrastructure tools")
st.markdown("- terraform")

st.subheader("data engineering tools")
st.markdown("- dbt(core/cloud)\n- airflow\n- Spark")

st.subheader("BI tools")
st.markdown("- Looker\n- PowerBI")

st.subheader("others")
st.markdown("- github action")

st.header("資格")
st.markdown("""
- 応用情報技術者
- AWS solution architect professional
- AWS data analytics specialty
- GCP Professional data engineer
- SnowPro Advanced Architect
""")

st.header("登壇")
st.markdown("""
| 日付 | イベント | タイトル | 資料 |
|:-----|:---------|:---------|:-----|
| 2022/08/23 | dbt Tokyo meetup | rawSQLからdbtへの移行プロセスについて | [資料](https://speakerdeck.com/ugmuka/rawsqlkaradbthefalseyi-xing-purosesunituite) |
| 2022/12/14 | ちゅらコラボ | 1年間dbtで戦った話 | [資料](https://speakerdeck.com/ugmuka/14-tiyurakorabodeng-tan-zi-liao) |
| 2023/01/26 | Data Engineer Geeks | Snowparkを基礎からおさらい | [資料](https://speakerdeck.com/ugmuka/snowparkwoji-chu-karaosarai) |
| 2023/05/28 | Snowflakeの小技LT〜ChatGPTも知らない？秘密のテクニック教えて！〜 | Snowflakeでやらかした時の対処法 | [資料](https://speakerdeck.com/ugmuka/snowflakedeyarakasitashi-nodui-chu-fa) |
""")

st.header("その他")
st.markdown("""
知人のプロダクト[Actice](https://actice.page/)の開発を支援する。
各マイクロサービスのうちの一つを担当。フロントをReact、バックエンドをlaravelで実装した。
""")
