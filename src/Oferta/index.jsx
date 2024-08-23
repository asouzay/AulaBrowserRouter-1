import { useState } from "react";

export default function Oferta(){
    const [produtos, setProdutos] = useState([
        {
            nome:"Soviet",
            colecao: ["Soviet I", "Soviet II"],
            preco: "R$ 30,00",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.1387.13591443344792787.3a7c19a7-a29d-4c84-bc22-b2db4538cd5d.1d4bd89f-6cf4-4a0c-b725-69ba51a44d91?w=280",
        },

        {
            nome: "LEGO Marvel super heroes",
            colecao: ["Marvel heroes III", "Marvel heroes IV"],
            preco: "R$ 15,90",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.17056.64269089462410570.3028ebe7-5e73-4403-b3c8-913a6625af90.444a2be9-3100-49d4-9b76-584928776025",
        },

        {
            nome: "Mortal Kombate",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            colecao: ["Mortal kombate I", "Mortal Kombate II"],
            preco: "R$ 30,99",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a",
        },

        {
            nome: "Rayman Legends",
            colecao: ["Rayman I", "Rayman II"],
            preco: "R$ 450,00",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.25053.65843946604617087.4d3f1eaa-9f9b-4884-8da5-69d3fa77479f.c8e55bec-d1f6-4fe4-b3fa-13ac1e79814f",
        },

        {
            nome: "Forza Horizon",
            colecao: ["Colecao I", "Colecao II"],
            preco: "R$ 570,90",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.29799.14582624973508592.2000000000007863648.c6853463-3ddd-4434-ba48-0661d492be61",
        },

        {
            nome: "LEGO Batman 3: Alem de ghotam",
            colecao: ["Batman 2", "Batman 3"],
            preco: "390,90",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.21814.64262041090618072.97940a7d-67f7-47fc-b298-066b1e05a4b8.5da919d9-6b45-4449-922d-d381d50bf9ff",
        },

        {
            nome: "Hogwarts Legacy",
            colecao: ["colecao I", "colecao II"],
            preco: "R$ 790,00",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.32479.13853283465555502.cf5491ce-35ca-489c-a801-62d6cede6a47.3f4a3ac5-0d7a-47be-9bd3-c7a68136339d",
        },

        {
            nome: "Snipe Elite 4",
            colecao: ["Snipe elite 1", "Snipe elite 4"],
            preco: "R$ 55,90",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.55009.66184153864422723.55ec3fbc-b9a7-4fe9-824f-f341b03ad972.b83cb631-285d-4273-b020-518f7169e439",
        },

        {
            nome: "Cartoon Newtork",
            colecao: ["Cartoon I", "Cartoon II"],
            preco: "R$ 78,00",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.41665.68585378392652803.9c41bcc9-fb16-42de-8e36-c9ab0df66137.2746701c-5dab-4bdb-b922-49217c761278",
        },

        {
            nome:"Far cry 4",
            colecao: ["Far cry I", "Far cry II"],
            preco: "R$ 45,90",
            quantidade: 1,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.39188.64350501736896385.0158164c-9008-42ec-b99b-4d15df40e65a.c322e570-1422-4839-8a7b-3f9929e6b649",
        },
    ])

    return(
        <div>
            <ListarProdutos ListarProdutos={produtos}/>
        </div>,

    <div className="image-contair">
        {produtos.map((produto, index) => (
            <img
            key={index}
            src={produto.imagem}
            alt={produto.nome}
            />
   
        ))}

    </div>
    )
}


