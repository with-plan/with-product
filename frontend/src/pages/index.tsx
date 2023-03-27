import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/molecules/Card";
import { Header } from "@/components/organisms/Header";
import { ServiceLinks } from "@/components/molecules/ServiceLinks";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box } from "theme-ui";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box
        as="section"
        sx={{
          height: "90vh",
          background:
            "url(/image/bag_half.png) no-repeat 100% 78%,url(/image/mv_sp.png) no-repeat 110% 0%",
        }}
      >
        <Box sx={{ position: "absolute", top: "28%", left: "30px" }}>
          <Typography as="h1">
            With
            <br />
            Product
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            zIndex: -1,
            bg: "base.secondary",
            width: "100%",
            height: "80px",
          }}
        />
      </Box>
      <Box as="section" sx={{ bg: "base.secondary", pt: 5, pb: 10 }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              background: "url(image/subtitle_abouts.png) no-repeat -4px -18px",
              pt: 6,
              pl: 4,
            }}
          >
            <Typography as="h2">With Productについて</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "88%",
            height: "309px",
            mx: "auto",
          }}
        >
          <Image
            src="/image/catch_abouts.png"
            layout="fill"
            objectFit="contain"
            alt="検品の様子"
          />
        </Box>
        <Box sx={{ p: 4 }}>
          <Typography as="p">
            With ProductはWith企画が運営を行なっている古物商の事業です。
            <br />
            ブランド商品を中心に複数のサービスで販売しております。
            <br />
            すべての商品を従業員の手で検品・梱包しているため、品質の高い状態でお客様の元へお届けすることが可能です。
            <br />
            また、古物商許可番号を取得しているため、各サービスで安心してご購入いただけます。
          </Typography>
          <Box sx={{ color: "accent.tertiary", pt: 3 }}>
            <Typography as="p">古物商許可番号：第62211R047354号</Typography>
          </Box>
        </Box>
      </Box>
      <Box as="section" sx={{ pt: "120px" }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              background: "url(image/subtitle_flow.png) no-repeat 0px -18px",
              pt: 5,
              pl: 4,
              pb: "118px",
            }}
          >
            <Typography as="h2">
              <span style={{ fontSize: "16px" }}>ご購入から</span>
              <br />
              到着までの流れ
            </Typography>
          </Box>
        </Box>

        <Box
          backgroundColor="accent.primary"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "72px",
            p: 4,
          }}
        >
          <Box sx={{ mt: "-80px" }}>
            <Card
              number="1"
              imageName="cart"
              title="商品のご購入"
              text={
                <Typography as="p">
                  各サービスからご購入していただきます。（販売に際しての規則、注意事項などは各サービスに準拠いたします。）
                </Typography>
              }
            />
          </Box>

          <Card
            number="2"
            imageName="calender"
            title="配達日の選択"
            text={
              <Typography as="p">
                各サービスの規約に沿い、ご希望の配達日などをお伝えください。
              </Typography>
            }
          />
          <Card
            number="3"
            imageName="delivery"
            title="梱包・発送"
            text={
              <Typography as="p">
                With Productが責任をもって梱包・発送いたします。
              </Typography>
            }
          />
          <Card
            number="4"
            imageName="arrival"
            title="商品の到着"
            text={
              <Typography as="p">
                運送会社からご指定いただいた配達先にご注文の商品が到着します。
              </Typography>
            }
          />
          <Card
            number="5"
            imageName="security"
            title="到着商品のご確認"
            text={
              <>
                <Typography as="p">
                  念のため中身と商品の状態をご確認ください。
                </Typography>
                <Box sx={{ pt: "16px" }} />
                <Typography as="p">
                  万が一不備などがあれば、大変お手数ですが
                  <Link href="/contact">お問い合わせ</Link>
                  より弊社にご連絡いただきますようお願いいたします。
                </Typography>
              </>
            }
          />
        </Box>
      </Box>
      <Box as="section" sx={{ py: "100px", px: 4 }}>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              background: "url(image/subtitle_service.png) no-repeat 0px -26px",
              pt: 5,
              pl: 4,
              pb: "118px",
            }}
          >
            <Typography as="h2">各販売サービス</Typography>
          </Box>
        </Box>

        <ServiceLinks />
      </Box>
    </>
  );
};

export default Home;
