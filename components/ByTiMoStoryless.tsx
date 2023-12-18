import { Storyless, Combinations } from "@storyless/react";
import { Open_Sans } from "next/font/google";
import { Card } from "@/components/Card";
import { CardGrid } from "@/components/CardGrid";
import { SearchBar } from "@/components/SearchBar";
import * as svgs from "@/svgr";
import { ShareButton } from "./ShareButton";

const openSans = Open_Sans({ subsets: ["latin"] });

function ExampleCard() {
  return (
    <Card
      id="id"
      variants={["blue", "red", "orange"]}
      variantName="baby blue"
      availableSizes={["XS", "S", "M", "L", "XL"]}
      productName="This is the image title"
      image="https://cdn.pixabay.com/photo/2023/05/26/15/52/buttterfly-8019730_640.jpg"
      price="£100"
      style={{ maxWidth: "20rem" }}
    />
  );
}

export function ByTiMoStoryless() {
  return (
    <Storyless
      className={openSans.className}
      components={{
        Card: <ExampleCard />,
        "Liked Card": (
          <Card
            id="id"
            variants={["blue", "red", "orange"]}
            variantName="baby blue"
            availableSizes={["XS", "S", "M", "L", "XL"]}
            productName="This is the image title"
            image="https://cdn.pixabay.com/photo/2023/05/26/15/52/buttterfly-8019730_640.jpg"
            price="£100"
            liked
            style={{ maxWidth: "20rem" }}
          />
        ),
        "Card Grid": (
          <CardGrid>
            {Array.from({ length: 6 }).map((_, i) => (
              <ExampleCard key={i} />
            ))}
          </CardGrid>
        ),
        "Share Button": <ShareButton />,
        "Search Bar": <SearchBar />,
        SVGs: (
          <div
            style={{
              display: "flex",
              gridGap: "1rem",
              justifyItems: "center",
              alignItems: "center",
            }}>
            {Object.entries(svgs).map(([name, Icon]) => (
              <div
                key={name}
                className="tooltip flex items-center justify-center text-center"
                data-tip={name}>
                <Icon className="m-auto block " />
              </div>
            ))}
          </div>
        ),
      }}
    />
  );
}
