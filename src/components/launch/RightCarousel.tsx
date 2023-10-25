"use client";
import { Flex, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import RightCarouselSlide from "./RightCarouselSlide";
import { theme } from "@/theme";
import { dummyProjects } from "@/utils/dummydata";
import NewProjectCard from "./NewProjectCard";
import { useRouter } from "next/navigation";

const NewProjectButton = () => {
    const router = useRouter();
  return (
    <Button
      fontFamily={theme.fonts.openSans}
      padding={"0px !important"}
      margin={0}
      bg={"transparent"}
      _hover={{ bg: "transparent", color: "#fff" }}
      _active={{ bg: "transparent" }}
      color={"#818181"}
      onClick={() => router.push('/launch/fast/createproject')}
      >
      New Project <span style={{ marginLeft: "5px", color: "#fff" }}>+ </span>
    </Button>
  );
};

const RightCarousel = () => {
  const styles = `
    :root {
        --swiper-pagination-bullet-vertical-gap: 46px
    }
    .swiper {
        width: 100%;
        height:700px;
        border: 1px solid red;
        padding-left: 60px;
        padding-right:70px
      }
      
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .swiper-slide img {
        display: flex;
        width: 202px;
        height: 100%;
        justify-content:center;
        align-items: center
       
      }
      .swiper-pagination-bullet {
        background: #fff;
        opacity: 0.25;
        height:7px;
        width:7px
      }
      .swiper-pagination-bullet-active {
        opacity: 1
      }
    .swiper-wrapper {
        margin-right:20px
    }
    .swiper-slide {
        display: flex;
        justify-content: flex-start;
    }
      `;
  return (
    <Flex width={"100%"}>
      {dummyProjects.length > 0 ? (
        <>
          <style>{styles}</style>
          <Swiper
            direction={"vertical"}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            spaceBetween={"3px"}
            keyboard={{
              enabled: true,
            }}
            centeredSlides={true}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <NewProjectButton />
            </SwiperSlide>
            {dummyProjects.map((item: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <RightCarouselSlide project={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : (
        <Flex mt={"135px"} ml={"60px"} flexDir={"column"}>
          <NewProjectButton />
          <NewProjectCard />
        </Flex>
      )}
    </Flex>
  );
};

export default RightCarousel;
