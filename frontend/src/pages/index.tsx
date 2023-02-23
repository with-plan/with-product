import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <header>ロゴ　メニュー</header>
      <h1>With Product</h1>
      <section>
        <h2>With Productについて</h2>
        <p>
          With ProductはWith企画が運営を行なっている古物商の事業です。
          <br />
          ブランド商品を中心に複数のサービスで販売しております。
          <br />
          すべての商品を従業員の手で検品・梱包しているため、品質の高い状態でお客様の元へお届けすることが可能です。
          <br />
          また、古物商許可番号を取得しているため、各サービスで安心してご購入いただけます。
        </p>
        <p>古物商許可番号：第62211R047354号</p>
      </section>
      <section>
        <h2>
          <span>ご購入から</span>
          到着までの流れ
        </h2>
        <div>
          <h3>商品のご購入</h3>
          <p>
            各サービスからご購入していただきます。（販売に際しての規則、注意事項などは各サービスに準拠いたします。）
          </p>
        </div>
      </section>
      <section>
        <h2>各販売サービス</h2>
      </section>
    </>
  );
};

export default Home;
