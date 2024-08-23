
import { useState } from 'react';

export default function Home() {
    const [produtos, setProdutos] = useState([
        {
            nome:"thermonuclear",
            colecao: ["colecao II", "colecao III"],
            preco: "R$ 56,90",
            quantidade: 3,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.59487.13748183317361300.014b4734-3acb-4db5-a66b-31bca2c4cbab.d95d790f-f727-45be-bcd9-f5648f962b72?w=280",
        },

        {
            nome: "Island Cities",
            colecao: ["Island I", "Island IV"],
            preco: "R$ 430,00",
            quantidade: 2,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.50273.13777416484174847.6b973f17-106a-4d31-90e0-81ae17626207.728650f4-a683-4610-ab8a-fea47555cf4d?w=280",
        },

        {
            nome: "Operation: Polygon Storm",
            colecao: ["Operation IV", "Operation II"],
            preco: "R$ 234,00",
            quantidade: 4,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.20431.14253232820041269.219b1e86-9e30-49c0-ad3d-1f74161d876f.038bb853-40ec-4d85-a943-7843de82ec74?w=280",
        },

        {
            nome: "Rise Eterna Bundle",
            colecao: ["Rise Eterna Bundle IV", "Rise II"],
            preco: "R$ 25,90",
            quantidade: 3,
            otimizado: "Xbox Game pass",
            imagem: "https://store-images.s-microsoft.com/image/apps.25585.14398314332559522.59e49e11-3351-4b72-adde-0778e29f68f8.0d1c90fb-7956-4b4c-a16c-c108a625d2e5?w=280",
        },

        {
            nome: "Rise Eterna War",
            colecao: ["Rise Eterna Bundle", "Rise Eterna War"],
            preco: "R$ 26,90",
            quantidade: 5,
            otimizado: "Xbox Game pass",
              imagem: "https://store-images.s-microsoft.com/image/apps.63518.14426363586373691.3643f872-bea6-47f8-a952-59f4cbd7caec.579b1389-5a5c-4a5c-be91-5d177b3da083?w=280",
         }
        
])
    return (
        <>
           <Header/>
           <Carousel
           infiniteLoop
           useKeyboardArrows
           autoPlay
           showArrows={true}
           showStatus={false}
           showThumbs={false}
           >
    
        <div>
            <img src="https://www.xbox.com/pt-br/games/store/atlas-fallen-reign-of-sand/9MVN3C4CPDT5"></img>
        </div>

        <div>
            <img src="https://www.xbox.com/pt-br/games/store/mafia-definitive-edition/9NZC09NNR93L"></img>
        </div>

        <div>
            <img src="https://www.xbox.com/pt-br/games/store/doom--doom-ii/9P46M5JQ2PTF"></img>
        </div>

        <div>
            <img src="https://www.xbox.com/pt-br/games/store/crash-bandicoot-n-sane-trilogy/C27XPR5XDMFT"></img>
        </div>

        <div>
            <img src="https://www.xbox.com/pt-br/games/store/creatures-of-ava/9NV5LTSPHQD2"></img>
        </div>
        </Carousel>

        <div>
            <ListarProdutos ListarProdutos={produtos}/>
        </div>

        <div className="image-container">
            {produtos.map((produto, index) => (
                <img 
                key={index}
                src={produto.imagem}
                alt={produto.nome}
            />
        ))}
        </div>

     </>
    )
}
