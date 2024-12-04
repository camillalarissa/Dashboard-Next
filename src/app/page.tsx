import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-2-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h4" />
            </div>
            <CardDescription>Total vendas em 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-4 h4" />
            </div>
            <CardDescription>Novos clientes em 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">600</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h4" />
            </div>
            <CardDescription>Total de Pedidos</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">25</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-900">
                Total Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h4" />
            </div>
            <CardDescription>Total pedidos em 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">1000</p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
