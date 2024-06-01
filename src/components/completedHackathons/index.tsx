import React from "react";
import { HackathonCard } from "../hackathonCard";
import img1 from "../../public/Rectangle 7.svg";
import img2 from "../../public/Rectangle 7 (1).svg";
import img3 from "../../public/Rectangle 7 (2).svg";
import img4 from "../../public/Rectangle 7 (3).svg";
import {
  BADGE_LIST_CARD_1,
  BADGE_LIST_CARD_2,
  BADGE_LIST_CARD_3,
  BADGE_LIST_CARD_4,
} from "../../utils/constants";

export const CompletedHackathons = ({
  selectedFilters,
}: {
  selectedFilters: string[];
}) => {
  return (
    <div>
      {BADGE_LIST_CARD_1.some((badge) => selectedFilters.includes(badge)) && (
        <HackathonCard
          leftImage={img1}
          name="Design Earn’s Talent Leaderboard"
          organiser="SuperTeam"
          date="04/04/2023"
          participants={34}
          prizeAmount={700}
          rank="1st"
          badgeList={BADGE_LIST_CARD_1}
        />
      )}
      {BADGE_LIST_CARD_2.some((badge) => selectedFilters.includes(badge)) && (
        <HackathonCard
          leftImage={img2}
          name="Armada UI/UX Review"
          organiser="Dean’s List Dao"
          date="21/03/2023"
          participants={7}
          badgeList={BADGE_LIST_CARD_2}
        />
      )}
      {BADGE_LIST_CARD_3.some((badge) => selectedFilters.includes(badge)) && (
        <HackathonCard
          leftImage={img3}
          name="Create a Frame for Farcaster"
          organiser="Deribet"
          date="14/03/2023"
          participants={20}
          prizeAmount={500}
          rank="1st"
          badgeList={BADGE_LIST_CARD_3}
        />
      )}
      {BADGE_LIST_CARD_4.some((badge) => selectedFilters.includes(badge)) && (
        <HackathonCard
          leftImage={img4}
          name="Write a thread with memes for PP Program on Solana"
          organiser="SuperTeam"
          date="06/03/2023"
          participants={12}
          prizeAmount={100}
          rank="3rd"
          badgeList={BADGE_LIST_CARD_4}
        />
      )}
    </div>
  );
};
