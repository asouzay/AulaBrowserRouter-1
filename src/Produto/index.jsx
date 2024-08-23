import { useState } from "react";
import ListarProdutos from "../componentes/ListarProdutos";

export default function produtos(){
    const [produtos,setProdutos] = useState([
        {
            nome: "Minecraft",
            colecao: ["Minecraft II", "Craft IV"],
            preco: "R$19,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.53095.13850085746326678.06e2dc5c-7997-46e9-a8e6-0e48b57cb13b.419e3c9d-9dd3-4a28-a9f3-a12350215871?w=272",

        },

        {
            nome: "EA Sports FC",
            colecao: ["Sports FC coleca I", "colecao II"],
            preco: "R$10,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.62211.14573516887607725.f997e22d-6909-4f3c-a0ef-a32a87d41052.40baebd6-5f4f-4b55-ad73-7a520fc3893f?w=272",

        },

        {
            nome: "Mafia: Detetive Edition",
            colecao: ["Detetive colecao IV", "colecao II"],
            preco: "R$ 9,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.22534.14479109482538687.fee2b7fd-33b8-463e-b444-b5f0839c1d2b.9e1c69d0-5107-4eda-8b73-1a50f3b88b32?w=272",

        },

        {
            nome: "Atomic Heart",
            colecao: ["Atomic I", "Atomic II"],
            preco: "R$ 20,95",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.47017.14612697019000138.539d22c7-f29f-45cb-90a2-8cd62b2154e8.276a878c-e989-44f4-8019-8a04231f0bc0?w=272",

        },

        {
            nome: "NBA 2K24",
            colecao: ["NBA 2K24 I", "NBA II"],
            preco: "R$ 30,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.11707.14149820581167521.ee00106c-c535-40d2-8892-1082ebcf87c0.4bed6227-a0cf-48b9-88d6-febe9c6c65eb?w=272",

        },

        {
            nome: "Guild Gear Strive",
            colecao: ["Guild I", "Guild IV"],
            preco: "R$ 20,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.27922.13872214727680763.7401cf68-944c-4d38-9d71-4d4226492658.f804fdb8-d65e-4ab3-970d-8abfdca5118a?w=272",

        },

        {
            nome: "Dead Cells",
            colecao: ["Dead Cells I", "Dead Cells II"],
            preco: "R$ 15,95",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.33704.68724117649475771.eac68952-84aa-42f0-875b-09de4c2ee208.c6483868-0337-4d5f-bc1f-36132804e3d7?w=272",

        },

        {
            nome: "DayZ",
            colecao: ["Dayz I", "Dayz IV"],
            preco: "R$ 35,95",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.23097.69886306496288395.9ec42146-6037-4440-b5c7-3a44e5213cc3.0e09163e-a6c4-40f6-9fe1-24a6b4685c64?w=272",

        },

        {
            nome: "Among Us", 
            colecao: ["Amongs us Word", "Among us Lord"],
            preco: "R$ 25,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.30063.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.672da915-9117-4230-960d-4f59f3d7beb5?w=272",

        },

        {
            nome: "Gang Beasts",
            colecao: ["Gang Neff", "Gang IV"],
            preco: "R$ 20,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.35593.68150164172276526.ddc374d7-ef5e-43b9-940a-bbc04440bb33.e0c05607-881c-449f-826b-fec43403598c?w=272",

        },

        {
            nome: "Descenders",
            colecao: ["Descender I", "Descenders word"],
            preco: "R$ 21,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.24333.65934155925401073.cdde9208-c05c-4015-852b-3c48d95ed87b.52e0d392-5541-4ba1-84b8-656727390fd5?w=272",

        },

        {
            nome: "VALORANT",
            colecao: ["VALORANT EDICAO ESPECIAL", "VALORANT I"],
            preco: "R$ 35,90",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.21507.13898029070941789.16950a3e-f961-4170-bca4-c3e4fdceb979.cc7ade6f-6bf6-4323-8205-a11f502287d2?w=272",

        },

        {
            nome: "DOOM  DOOM ||",
            colecao: ["DOOM I", "DOOM II"],
            preco: "R$ 50,00",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.54685.14594598903877048.bbb5dc7a-5386-4439-89d6-a5136ac0725b.c3be4045-409c-44cb-b817-253e77e3fa84?w=272",

        },

        {
            nome: "Robin Hood",
            colecao: ["Robin hood", "Robin hood II"],
            preco: "R$ 35,00",
            quantidade: 1,
            Otimazado: "Xbox Game Pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.31980.14105414348544973.9bef7109-ae4f-4d2d-840a-a27f3acfe32a.0af8317c-0b58-401a-9cf5-dad0fd8fed52?w=272",

        },

        {
            nome: "Age of empires || : Definite Edition",
            colecao: ["Age of empires II", "Age of empires III"],
            preco: "R$ 25,90",
            quantidade: 1,
            Otimazado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.55056.13942751234422466.1297136a-f273-41f1-947f-59044c848c55.ea013ade-1af7-4060-b63c-758a23feac74?w=272",

        },
    ]);
};

return(
    <div>
        <ListarProdutos ListarProdutos={produtos}/>
    </div>,
<div className="image-container">
    {produtos.map((produto, index) =>(
        <img
        key={index}
        src={produto.imagem}
        alt={produto.nome}
    />
))}
</div>
)
