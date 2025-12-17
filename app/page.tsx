import BarbershopItem from "@/components/barbershop-item";
import BookingItem from "@/components/booking-item";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  PageContainer,
  PageSectionContent,
  PageSectionScroller,
  PageSectionTitle,
} from "@/components/ui/page";
import { getBarbershops, getPopularBarbershops } from "@/data/barbershops";
import banner from "@/public/banner.png";
import Image from "next/image";

export default async function Home() {
  const barbershops = await getBarbershops();
  const popularBarbershops = await getPopularBarbershops();
  return (
    <div>
      <Header />
      <PageContainer>
        <Image
          src={banner}
          alt="Agende nos melhores com a Aparatus"
          sizes="100vw"
          className="h-auto w-full"
        />

        <PageSectionContent>
          {/* Composition Pattern */}
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem />
        </PageSectionContent>

        <PageSectionContent>
          <PageSectionTitle>Barbearias</PageSectionTitle>
          <PageSectionScroller>
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>

        <PageSectionContent>
          <PageSectionTitle>Populares</PageSectionTitle>
          <PageSectionScroller>
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>
      </PageContainer>
      {/* <Footer /> */}
    </div>
  );
}
