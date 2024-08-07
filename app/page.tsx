//SERVER COMPONENTS
// Não consegue adicionar iteratividade ou lógica de negócios

import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
  return <div>

   <Header />
  <div className="p-5">
    <h2 className="text-xl font-bold">Olá, Eduardo!</h2>
    <p>Segunda-feira, 05 de agosto</p>
    <div className="flex items-center gap-2 mt-6">
      <Input placeholder = "Faça sua busca..."/>
      <Button size="icon">
        <SearchIcon />
      </Button>
    </div>
    <div className="relative w-full h-[150px] mt-6">
      <Image alt="Agende nos melhores FSW Barber" src="/banner-01.png" fill className="object-cover rounded-xl"/>
    </div>

    </div>
  </div>
};


export default Home;