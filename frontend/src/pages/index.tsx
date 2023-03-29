import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/molecules/Card";
import { Header } from "@/components/organisms/Header";
import { ServiceLinks } from "@/components/molecules/ServiceLinks";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box } from "theme-ui";
import { Footer } from "@/components/molecules/Footer";
import { keyframes } from "@emotion/react";

const scrollGuide = keyframes({
  "0%": { transform: "translateY(-100%)" },
  "100%": { transform: "translateY(100%)" },
});

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box
        as="section"
        sx={{
          position: "relative",
          maxWidth: "1000px",
          height: "90vh",
          background: [
            "url(/image/bag_half.png) no-repeat 100% 78%,url(/image/mv_sp.png) no-repeat 110% 0%",
            "url(/image/bag_full.png) no-repeat 94% 86%,url(/image/mv_pc.png) no-repeat 100% 0%",
          ],
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: ["28%", "18%"],
            left: ["30px", "0px"],
          }}
        >
          <Typography as="h1">
            With
            <br />
            Product
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "68px",
            left: [5, "0px"],
            zIndex: 10,
            width: "2px",
            height: "100px",
            overflow: "hidden",
            "::before": {
              content: '""',
              display: "block",
              width: "2px",
              height: "100px",
              background: "accent.tertiary",
              animation: `${scrollGuide} 1.8s infinite`,
            },
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "-20px",
          left: "0",
          zIndex: -1,
          bg: "base.secondary",
          width: "100%",
          height: ["20vh", "16vh"],
        }}
      />
      <Box as="section" sx={{ bg: "base.secondary", pt: 5, pb: [10, "120px"] }}>
        <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                background: [
                  "url(image/subtitle_abouts.png) no-repeat -4px -18px",
                  "url(image/subtitle_abouts.png) no-repeat -4px -10px",
                ],
                pt: 6,
                pl: 4,
              }}
            >
              <Typography as="h2">With Productについて</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              justifyContent: "space-between",
              mt: [4, 7],
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: ["340px", "450px"],
                height: ["230px", "305px"],
                boxShadow: [
                  "-10px 10px 0px 0px #e3e0da",
                  "-30px 30px 0px 0px #e3e0da",
                ],
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
            <Box sx={{ maxWidth: "420px", p: [4, "0px"], mx: "auto" }}>
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
        </Box>
      </Box>

      <Box as="section" sx={{ position: "relative", pt: "120px" }}>
        <Box
          sx={{
            position: "relative",
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              background: [
                "url(image/subtitle_flow.png) no-repeat 0px -18px",
                "url(image/subtitle_flow.png) no-repeat 0px -6px",
              ],
              pt: 5,
              pl: 4,
              pb: ["160px", "40px"],
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
            px: [4, "0px"],
            pb: ["100px", "0px"],
            "::before": {
              display: ["none", "block"],
              content: "url(svg/line_curve_pc.svg)",
              position: "absolute",
              top: "-220px",
              right: 0,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              justifyContent: "center",
              flexWrap: "wrap",
              gap: ["72px", 4],
              maxWidth: "1000px",
              py: ["0px", "110px"],
              mx: "auto",
            }}
          >
            <Box sx={{ mt: ["-80px", "0px"] }}>
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
            <Box
              sx={{
                display: ["none", "block"],
                width: ["0px", "900px"],
                pt: ["0px", "30px"],
              }}
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
      </Box>
      <Box
        as="section"
        sx={{
          position: "relative",
          py: "100px",
          px: 4,
          mt: [8, "100px"],
          "::before": {
            display: "block",
            content: '""',
            // content: "url(svg/line_arch_pc.svg)",
            backgroundImage: [
              "url(svg/line_arch_sp.svg)",
              "url(svg/line_arch_pc.svg)",
            ],
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "300px",
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      >
        <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
          <Box
            sx={{
              position: "relative",
              pt: 5,
              pb: [6, 8],
              mt: [0, "120px"],
              "::before": {
                content: "url(image/subtitle_service.png)",
                position: "absolute",
                top: [-5, -3],
                left: -4,
                zIndex: -10,
              },
            }}
          >
            <Typography as="h2">各販売サービス</Typography>
          </Box>
          <ServiceLinks />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
