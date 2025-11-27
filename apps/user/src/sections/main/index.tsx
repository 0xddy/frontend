import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGlobalStore } from "@/stores/global";
import { GlobalMap } from "./global-map";
import { Hero } from "./hero";
import { ProductShowcase } from "./product-showcase";
import { Stats } from "./stats";

export default function Main() {
  const { user } = useGlobalStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate({ to: "/dashboard" });
    }
  }, [user, navigate]);

  return (
    <main className="container space-y-16">
      <Hero />
      <Stats />
      <ProductShowcase />
      <GlobalMap />
    </main>
  );
}
